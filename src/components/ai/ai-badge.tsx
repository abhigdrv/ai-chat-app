import { cn } from "../../lib/utils"
import type { ReactNode } from "lucide-react"

interface AIBadgeProps {
  children: ReactNode
  variant?: "default" | "success" | "warning" | "error" | "info"
  size?: "sm" | "md" | "lg"
  className?: string
}

export function AIBadge({
  children,
  variant = "default",
  size = "md",
  className,
}: AIBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full font-medium",
        // Size variants
        size === "sm" && "px-2 py-0.5 text-xs",
        size === "md" && "px-2.5 py-1 text-sm",
        size === "lg" && "px-3 py-1.5 text-base",
        // Color variants
        variant === "default" && "bg-muted text-foreground",
        variant === "success" && "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
        variant === "warning" && "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400",
        variant === "error" && "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400",
        variant === "info" && "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
        className
      )}
    >
      {children}
    </span>
  )
}

interface AIBadgeGroupProps {
  badges: { id: string; label: string; variant?: AIBadgeProps["variant"] }[]
  className?: string
}

export function AIBadgeGroup({ badges, className }: AIBadgeGroupProps) {
  return (
    <div className={cn("flex flex-wrap gap-2", className)}>
      {badges.map((badge) => (
        <AIBadge key={badge.id} variant={badge.variant}>
          {badge.label}
        </AIBadge>
      ))}
    </div>
  )
}
