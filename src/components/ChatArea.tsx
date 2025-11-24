import { useEffect, useRef } from "react"
import type { Message } from "../types/chat"
import { ChatMessage } from "./ChatMessage"
import { AIConversation } from "./ai/ai-conversation"
import { AILoader } from "./ai/ai-loader"
import { AISuggestion } from "./ai/ai-suggestion"

interface ChatAreaProps {
  messages: Message[]
  isTyping: boolean
  onSuggestionSelect?: (suggestion: string) => void
  conversationId?: string | null
}

export function ChatArea({ messages, isTyping, onSuggestionSelect, conversationId }: ChatAreaProps) {
  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages, isTyping])

  const suggestions = [
    "Explain quantum computing in simple terms",
    "Write a Python function to sort a list",
    "What are the best practices for React development?",
    "Help me debug this JavaScript error",
  ]

  // Show component demo for the showcase conversation
  const showComponentDemo = conversationId === "conv4"

  return (
    <AIConversation className="p-4">
      {messages.length === 0 ? (
        <div className="flex h-full items-center justify-center">
          <div className="max-w-2xl space-y-6 px-4">
            <div className="text-center space-y-2">
              <h2 className="text-2xl font-bold">Start a conversation</h2>
              <p className="text-muted-foreground">
                Send a message or upload files to begin
              </p>
            </div>
            {onSuggestionSelect && (
              <AISuggestion
                suggestions={suggestions}
                onSelect={onSuggestionSelect}
              />
            )}
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          {messages.map((message) => (
            <ChatMessage
              key={message.id}
              message={message}
              showComponentDemo={showComponentDemo}
            />
          ))}
          {isTyping && (
            <div className="px-4 py-6">
              <AILoader variant="typing" />
            </div>
          )}
        </div>
      )}
      <div ref={bottomRef} />
    </AIConversation>
  )
}
