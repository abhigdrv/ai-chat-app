import type { Conversation } from "../types/chat"
import { Button } from "./ui/button"
import { ScrollArea } from "./ui/scroll-area"
import { Plus, MessageSquare, Search } from "lucide-react"
import { Input } from "./ui/input"
import { cn } from "../lib/utils"

interface SidebarProps {
  conversations: Conversation[]
  currentConversationId: string | null
  onSelectConversation: (id: string) => void
  onNewConversation: () => void
  searchQuery: string
  onSearchChange: (query: string) => void
}

export function Sidebar({
  conversations,
  currentConversationId,
  onSelectConversation,
  onNewConversation,
  searchQuery,
  onSearchChange,
}: SidebarProps) {
  const filteredConversations = conversations.filter((conv) =>
    conv.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    conv.messages.some(msg =>
      msg.content.toLowerCase().includes(searchQuery.toLowerCase())
    )
  )

  return (
    <div className="flex h-full w-64 flex-col border-r bg-muted/10 flex-shrink-0 overflow-hidden">
      <div className="p-4 space-y-4 flex-shrink-0">
        <Button onClick={onNewConversation} className="w-full">
          <Plus className="mr-2 h-4 w-4" />
          New Chat
        </Button>

        <div className="relative">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search conversations..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="pl-8"
          />
        </div>
      </div>

      <ScrollArea className="flex-1 px-2">
        <div className="space-y-1 pb-4">
          {filteredConversations.length === 0 ? (
            <div className="p-4 text-center text-sm text-muted-foreground">
              {searchQuery ? "No conversations found" : "No conversations yet"}
            </div>
          ) : (
            filteredConversations.map((conv) => (
              <button
                key={conv.id}
                onClick={() => onSelectConversation(conv.id)}
                className={cn(
                  "w-full rounded-lg px-3 py-2 text-left text-sm transition-colors hover:bg-accent cursor-pointer",
                  currentConversationId === conv.id && "bg-accent"
                )}
              >
                <div className="flex items-center gap-2">
                  <MessageSquare className="h-4 w-4 shrink-0" />
                  <div className="flex-1 overflow-hidden">
                    <div className="truncate font-medium">{conv.title}</div>
                    <div className="truncate text-xs text-muted-foreground">
                      {conv.messages[conv.messages.length - 1]?.content.substring(0, 50)}...
                    </div>
                  </div>
                </div>
                <div className="mt-1 text-xs text-muted-foreground">
                  {conv.updatedAt.toLocaleDateString()}
                </div>
              </button>
            ))
          )}
        </div>
      </ScrollArea>
    </div>
  )
}
