import { cn } from "../../lib/utils"
import type { ReactNode } from "react"

interface TimelineItem {
  id: string
  title: string
  description?: string
  timestamp?: string
  icon?: ReactNode
  status?: "completed" | "current" | "pending"
}

interface AITimelineProps {
  items: TimelineItem[]
  className?: string
}

export function AITimeline({ items, className }: AITimelineProps) {
  return (
    <div className={cn("space-y-4", className)}>
      {items.map((item, index) => (
        <div key={item.id} className="relative flex gap-4">
          {/* Timeline line */}
          {index !== items.length - 1 && (
            <div className="absolute left-[19px] top-8 h-[calc(100%+16px)] w-0.5 bg-border" />
          )}

          {/* Icon/Dot */}
          <div
            className={cn(
              "relative z-10 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border-2",
              item.status === "completed" &&
                "border-green-500 bg-green-100 dark:bg-green-900/30",
              item.status === "current" &&
                "border-primary bg-primary/10",
              (!item.status || item.status === "pending") &&
                "border-muted bg-background"
            )}
          >
            {item.icon || (
              <div
                className={cn(
                  "h-3 w-3 rounded-full",
                  item.status === "completed" && "bg-green-500",
                  item.status === "current" && "bg-primary",
                  (!item.status || item.status === "pending") && "bg-muted-foreground"
                )}
              />
            )}
          </div>

          {/* Content */}
          <div className="flex-1 pb-8">
            <div className="flex items-start justify-between gap-2">
              <h4 className="font-semibold">{item.title}</h4>
              {item.timestamp && (
                <span className="text-xs text-muted-foreground">
                  {item.timestamp}
                </span>
              )}
            </div>
            {item.description && (
              <p className="mt-1 text-sm text-muted-foreground">
                {item.description}
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}
