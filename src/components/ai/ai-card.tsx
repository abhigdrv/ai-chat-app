import { cn } from "../../lib/utils"
import type { ReactNode, LucideIcon } from "lucide-react"

interface AICardProps {
  title: string
  value?: string | number
  description?: string
  icon?: LucideIcon
  trend?: {
    value: number
    isPositive: boolean
  }
  variant?: "default" | "stats" | "info"
  className?: string
  children?: ReactNode
}

export function AICard({
  title,
  value,
  description,
  icon: Icon,
  trend,
  variant = "default",
  className,
  children,
}: AICardProps) {
  if (variant === "stats") {
    return (
      <div
        className={cn(
          "rounded-lg border bg-card p-6 shadow-sm transition-shadow hover:shadow-md",
          className
        )}
      >
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <p className="text-sm font-medium text-muted-foreground">{title}</p>
            <p className="text-2xl font-bold">{value}</p>
            {trend && (
              <p
                className={cn(
                  "text-xs font-medium",
                  trend.isPositive ? "text-green-500" : "text-red-500"
                )}
              >
                {trend.isPositive ? "↑" : "↓"} {Math.abs(trend.value)}%
              </p>
            )}
          </div>
          {Icon && (
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <Icon className="h-6 w-6 text-primary" />
            </div>
          )}
        </div>
        {description && (
          <p className="mt-3 text-xs text-muted-foreground">{description}</p>
        )}
      </div>
    )
  }

  if (variant === "info") {
    return (
      <div
        className={cn(
          "rounded-lg border bg-card shadow-sm",
          className
        )}
      >
        <div className="border-b bg-muted/30 px-4 py-3">
          <div className="flex items-center gap-2">
            {Icon && <Icon className="h-4 w-4" />}
            <h3 className="font-semibold">{title}</h3>
          </div>
        </div>
        <div className="p-4">
          {children || (
            <>
              {value && <p className="text-lg font-medium">{value}</p>}
              {description && (
                <p className="mt-1 text-sm text-muted-foreground">{description}</p>
              )}
            </>
          )}
        </div>
      </div>
    )
  }

  // Default variant
  return (
    <div
      className={cn(
        "rounded-lg border bg-card p-4 shadow-sm",
        className
      )}
    >
      {Icon && <Icon className="mb-2 h-5 w-5 text-primary" />}
      <h3 className="font-semibold">{title}</h3>
      {value && <p className="mt-1 text-lg font-medium">{value}</p>}
      {description && (
        <p className="mt-1 text-sm text-muted-foreground">{description}</p>
      )}
      {children && <div className="mt-3">{children}</div>}
    </div>
  )
}
