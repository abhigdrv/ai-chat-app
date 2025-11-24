import { useState, useEffect, useMemo } from "react"
import { Sidebar } from "./components/Sidebar"
import { ChatArea } from "./components/ChatArea"
import { AIPromptInput } from "./components/ai/ai-prompt-input"
import { DocumentPanel } from "./components/DocumentPanel"
import type { Conversation, Message, AttachedFile } from "./types/chat"
import { dummyConversations } from "./data/dummyData"
import { Button } from "./components/ui/button"
import { Moon, Sun, FileText } from "lucide-react"

function App() {
  const [conversations, setConversations] = useState<Conversation[]>(dummyConversations)
  const [currentConversationId, setCurrentConversationId] = useState<string | null>(
    dummyConversations[0]?.id || null
  )
  const [searchQuery, setSearchQuery] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const [isDark, setIsDark] = useState(true)
  const [showDocuments, setShowDocuments] = useState(false)

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [isDark])

  const currentConversation = conversations.find(
    (conv) => conv.id === currentConversationId
  )

  // Collect all files from current conversation
  const conversationFiles = useMemo(() => {
    if (!currentConversation) return []
    return currentConversation.messages
      .filter((msg) => msg.files && msg.files.length > 0)
      .flatMap((msg) => msg.files || [])
  }, [currentConversation])

  const handleNewConversation = () => {
    const newConv: Conversation = {
      id: `conv${Date.now()}`,
      title: "New Conversation",
      messages: [],
      createdAt: new Date(),
      updatedAt: new Date(),
    }
    setConversations([newConv, ...conversations])
    setCurrentConversationId(newConv.id)
    setSearchQuery("")
  }

  const handleSendMessage = (content: string, files: AttachedFile[]) => {
    let targetConversationId = currentConversationId

    if (!currentConversationId) {
      const newConv: Conversation = {
        id: `conv${Date.now()}`,
        title: content.substring(0, 50),
        messages: [],
        createdAt: new Date(),
        updatedAt: new Date(),
      }
      setConversations([newConv, ...conversations])
      targetConversationId = newConv.id
      setCurrentConversationId(newConv.id)
    }

    const userMessage: Message = {
      id: `msg${Date.now()}`,
      role: "user",
      content,
      timestamp: new Date(),
      files: files.length > 0 ? files : undefined,
    }

    setConversations((prevConvs) =>
      prevConvs.map((conv) =>
        conv.id === targetConversationId
          ? {
              ...conv,
              messages: [...conv.messages, userMessage],
              updatedAt: new Date(),
              title:
                conv.messages.length === 0
                  ? content.substring(0, 50)
                  : conv.title,
            }
          : conv
      )
    )

    setIsTyping(true)

    setTimeout(() => {
      const assistantMessage: Message = {
        id: `msg${Date.now()}_ai`,
        role: "assistant",
        content: generateDummyResponse(content),
        timestamp: new Date(),
      }

      setConversations((prevConvs) =>
        prevConvs.map((conv) =>
          conv.id === targetConversationId
            ? {
                ...conv,
                messages: [...conv.messages, assistantMessage],
                updatedAt: new Date(),
              }
            : conv
        )
      )
      setIsTyping(false)
    }, 2000)
  }

  const handleSuggestionSelect = (suggestion: string) => {
    handleSendMessage(suggestion, [])
  }

  const generateDummyResponse = (userMessage: string): string => {
    const responses = [
      `I understand you're asking about "${userMessage.substring(0, 30)}...". Let me help you with that.\n\n## Key Points\n\n1. This is a comprehensive response to your query\n2. I've analyzed your question carefully\n3. Here's what you need to know\n\n### Code Example\n\n\`\`\`javascript\nconst example = () => {\n  console.log("This is a dummy response");\n  return "Hope this helps!";\n};\n\`\`\`\n\nLet me know if you need more details!`,
      `Great question! Here's my take on that:\n\n**Main Concept:** The topic you mentioned is quite interesting.\n\n### Implementation\n\n\`\`\`typescript\ninterface Response {\n  message: string;\n  status: "success" | "pending";\n}\n\nconst response: Response = {\n  message: "Processing your request",\n  status: "success"\n};\n\`\`\`\n\nIs there anything specific you'd like to dive deeper into?`,
      `I see what you're looking for. Let me break this down:\n\n- **First Point:** This addresses the main aspect of your question\n- **Second Point:** Here's an alternative approach\n- **Third Point:** Consider this best practice\n\n> "The best way to learn is by doing" - Every developer ever\n\nWould you like me to elaborate on any of these points?`,
    ]

    return responses[Math.floor(Math.random() * responses.length)]
  }

  return (
    <div className="flex h-screen bg-background text-foreground overflow-hidden">
      <Sidebar
        conversations={conversations}
        currentConversationId={currentConversationId}
        onSelectConversation={setCurrentConversationId}
        onNewConversation={handleNewConversation}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      <div className="flex flex-1 flex-col min-w-0">
        <header className="flex items-center justify-between border-b px-6 py-4">
          <h1 className="text-xl font-semibold">
            {currentConversation?.title || "AI Chat Assistant"}
          </h1>
          <div className="flex items-center gap-2">
            {conversationFiles.length > 0 && (
              <Button
                variant="outline"
                size="icon"
                onClick={() => setShowDocuments(!showDocuments)}
                className="relative"
              >
                <FileText className="h-4 w-4" />
                <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] text-primary-foreground">
                  {conversationFiles.length}
                </span>
              </Button>
            )}
            <Button
              variant="outline"
              size="icon"
              onClick={() => setIsDark(!isDark)}
            >
              {isDark ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </Button>
          </div>
        </header>

        <ChatArea
          messages={currentConversation?.messages || []}
          isTyping={isTyping}
          onSuggestionSelect={handleSuggestionSelect}
          conversationId={currentConversationId}
        />

        <div className="p-4">
          <AIPromptInput
            onSubmit={handleSendMessage}
            disabled={isTyping}
            placeholder="Send a message..."
          />
        </div>
      </div>

      <DocumentPanel
        files={conversationFiles}
        isOpen={showDocuments}
        onClose={() => setShowDocuments(false)}
      />
    </div>
  )
}

export default App
