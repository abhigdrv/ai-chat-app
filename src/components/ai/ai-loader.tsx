import { cn } from "../../lib/utils"

interface AILoaderProps {
  className?: string
  variant?: "dots" | "pulse" | "typing"
}

export function AILoader({ className, variant = "dots" }: AILoaderProps) {
  if (variant === "pulse") {
    return (
      <div className={cn("flex items-center gap-2", className)}>
        <div className="h-2 w-2 animate-pulse rounded-full bg-primary" />
        <span className="text-sm text-muted-foreground">AI is thinking...</span>
      </div>
    )
  }

  if (variant === "typing") {
    return (
      <div className={cn("flex items-center gap-2", className)}>
        <div className="flex gap-1">
          <div className="h-2 w-2 animate-bounce rounded-full bg-primary [animation-delay:-0.3s]" />
          <div className="h-2 w-2 animate-bounce rounded-full bg-primary [animation-delay:-0.15s]" />
          <div className="h-2 w-2 animate-bounce rounded-full bg-primary" />
        </div>
        <span className="text-sm text-muted-foreground">Typing...</span>
      </div>
    )
  }

  // Default dots variant
  return (
    <div className={cn("flex items-center gap-1.5", className)}>
      <div className="h-2 w-2 animate-pulse rounded-full bg-primary [animation-delay:-0.3s] [animation-duration:1.5s]" />
      <div className="h-2 w-2 animate-pulse rounded-full bg-primary [animation-delay:-0.15s] [animation-duration:1.5s]" />
      <div className="h-2 w-2 animate-pulse rounded-full bg-primary [animation-duration:1.5s]" />
    </div>
  )
}
