import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import type { Message } from "../types/chat"
import { Badge } from "./ui/badge"
import { FileText, User, Bot } from "lucide-react"
import { AIMessage } from "./ai/ai-message"
import { AICodeBlock } from "./ai/ai-code-block"
import { ComponentShowcase } from "./ComponentShowcase"

interface ChatMessageProps {
  message: Message
  showComponentDemo?: boolean
}

export function ChatMessage({ message, showComponentDemo = false }: ChatMessageProps) {
  const isUser = message.role === "user"

  const avatar = (
    <div
      className={
        isUser
          ? "flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary"
          : "flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary"
      }
    >
      {isUser ? (
        <User className="h-4 w-4 text-primary-foreground" />
      ) : (
        <Bot className="h-4 w-4 text-secondary-foreground" />
      )}
    </div>
  )

  const timestamp = message.timestamp.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  })

  return (
    <AIMessage role={message.role} avatar={avatar} timestamp={timestamp}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          code({ className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || "")
            const codeString = String(children).replace(/\n$/, "")
            return match ? (
              <AICodeBlock code={codeString} language={match[1]} />
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            )
          },
        }}
      >
        {message.content}
      </ReactMarkdown>

      {showComponentDemo && message.role === "assistant" && message.id === "demo2" && (
        <div className="mt-6">
          <ComponentShowcase />
        </div>
      )}

      {message.files && message.files.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-2">
          {message.files.map((file) => (
            <Badge
              key={file.id}
              variant="outline"
              className="flex items-center gap-1"
            >
              <FileText className="h-3 w-3" />
              <span>{file.name}</span>
              <span className="text-xs text-muted-foreground">
                ({(file.size / 1024).toFixed(1)} KB)
              </span>
            </Badge>
          ))}
        </div>
      )}
    </AIMessage>
  )
}
