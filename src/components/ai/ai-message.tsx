import { cn } from "../../lib/utils"
import type { ReactNode } from "react"

interface AIMessageProps {
  role: "user" | "assistant"
  children: ReactNode
  avatar?: ReactNode
  timestamp?: string
  className?: string
}

export function AIMessage({
  role,
  children,
  avatar,
  timestamp,
  className,
}: AIMessageProps) {
  return (
    <div
      className={cn(
        "group relative flex gap-3 px-4 py-6",
        role === "assistant" && "bg-muted/30",
        className
      )}
    >
      {avatar && (
        <div className="flex-shrink-0">
          {avatar}
        </div>
      )}
      <div className="flex-1 space-y-2 overflow-hidden">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-sm">
            {role === "user" ? "You" : "AI Assistant"}
          </span>
          {timestamp && (
            <span className="text-xs text-muted-foreground">
              {timestamp}
            </span>
          )}
        </div>
        <div className="prose prose-sm dark:prose-invert max-w-none">
          {children}
        </div>
      </div>
    </div>
  )
}
