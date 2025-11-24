import { cn } from "../../lib/utils"
import type { ReactNode } from "react"

interface ListItem {
  id: string
  title: string
  description?: string
  icon?: ReactNode
  meta?: string
}

interface AIListProps {
  items: ListItem[]
  variant?: "list" | "grid"
  columns?: 2 | 3 | 4
  className?: string
}

export function AIList({
  items,
  variant = "list",
  columns = 3,
  className,
}: AIListProps) {
  if (variant === "grid") {
    return (
      <div
        className={cn(
          "grid gap-4",
          columns === 2 && "grid-cols-1 sm:grid-cols-2",
          columns === 3 && "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
          columns === 4 && "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
          className
        )}
      >
        {items.map((item) => (
          <div
            key={item.id}
            className="rounded-lg border bg-card p-4 shadow-sm transition-shadow hover:shadow-md cursor-pointer"
          >
            {item.icon && <div className="mb-2">{item.icon}</div>}
            <h4 className="font-semibold">{item.title}</h4>
            {item.description && (
              <p className="mt-1 text-sm text-muted-foreground">
                {item.description}
              </p>
            )}
            {item.meta && (
              <p className="mt-2 text-xs text-muted-foreground">{item.meta}</p>
            )}
          </div>
        ))}
      </div>
    )
  }

  // List variant
  return (
    <div className={cn("space-y-2", className)}>
      {items.map((item) => (
        <div
          key={item.id}
          className="flex items-start gap-3 rounded-lg border bg-card p-3 transition-colors hover:bg-muted/30 cursor-pointer"
        >
          {item.icon && <div className="mt-0.5">{item.icon}</div>}
          <div className="flex-1 overflow-hidden">
            <div className="flex items-center justify-between gap-2">
              <h4 className="font-medium">{item.title}</h4>
              {item.meta && (
                <span className="text-xs text-muted-foreground">{item.meta}</span>
              )}
            </div>
            {item.description && (
              <p className="mt-0.5 text-sm text-muted-foreground">
                {item.description}
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}
