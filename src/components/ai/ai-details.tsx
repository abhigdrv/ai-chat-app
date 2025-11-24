import { cn } from "../../lib/utils"
import type { ReactNode } from "react"

interface DetailItem {
  key: string
  value: string | number | ReactNode
  icon?: ReactNode
}

interface AIDetailsProps {
  items: DetailItem[]
  title?: string
  layout?: "vertical" | "horizontal" | "grid"
  className?: string
}

export function AIDetails({
  items,
  title,
  layout = "vertical",
  className,
}: AIDetailsProps) {
  if (layout === "grid") {
    return (
      <div className={cn("space-y-3", className)}>
        {title && <h4 className="font-semibold">{title}</h4>}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {items.map((item, index) => (
            <div
              key={index}
              className="rounded-lg border bg-card p-3"
            >
              <div className="flex items-start gap-2">
                {item.icon && <div className="mt-0.5">{item.icon}</div>}
                <div className="flex-1">
                  <dt className="text-xs font-medium text-muted-foreground">
                    {item.key}
                  </dt>
                  <dd className="mt-1 text-sm font-semibold">{item.value}</dd>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  if (layout === "horizontal") {
    return (
      <div className={cn("space-y-3", className)}>
        {title && <h4 className="font-semibold">{title}</h4>}
        <div className="divide-y rounded-lg border">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between gap-4 px-4 py-3"
            >
              <div className="flex items-center gap-2">
                {item.icon && <div>{item.icon}</div>}
                <dt className="text-sm font-medium text-muted-foreground">
                  {item.key}
                </dt>
              </div>
              <dd className="text-sm font-semibold">{item.value}</dd>
            </div>
          ))}
        </div>
      </div>
    )
  }

  // Vertical layout (default)
  return (
    <div className={cn("space-y-3", className)}>
      {title && <h4 className="font-semibold">{title}</h4>}
      <dl className="space-y-3">
        {items.map((item, index) => (
          <div
            key={index}
            className="rounded-lg border bg-card p-3"
          >
            <div className="flex items-start gap-2">
              {item.icon && <div className="mt-0.5">{item.icon}</div>}
              <div className="flex-1">
                <dt className="text-xs font-medium text-muted-foreground">
                  {item.key}
                </dt>
                <dd className="mt-1 text-sm font-semibold">{item.value}</dd>
              </div>
            </div>
          </div>
        ))}
      </dl>
    </div>
  )
}
