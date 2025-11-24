import type { ReactNode } from "react"
import { ScrollArea } from "../ui/scroll-area"
import { cn } from "../../lib/utils"

interface AIConversationProps {
  children: ReactNode
  className?: string
}

export function AIConversation({ children, className }: AIConversationProps) {
  return (
    <ScrollArea className={cn("flex-1 w-full", className)}>
      <div className="mx-auto max-w-4xl">
        {children}
      </div>
    </ScrollArea>
  )
}
