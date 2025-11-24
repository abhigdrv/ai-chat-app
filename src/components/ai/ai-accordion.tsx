import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "../../lib/utils"
import type { ReactNode } from "react"

interface AccordionItem {
  id: string
  title: string
  content: ReactNode
}

interface AIAccordionProps {
  items: AccordionItem[]
  allowMultiple?: boolean
  defaultOpen?: string[]
  className?: string
}

export function AIAccordion({
  items,
  allowMultiple = false,
  defaultOpen = [],
  className,
}: AIAccordionProps) {
  const [openItems, setOpenItems] = useState<string[]>(defaultOpen)

  const toggleItem = (id: string) => {
    if (allowMultiple) {
      setOpenItems((prev) =>
        prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
      )
    } else {
      setOpenItems((prev) => (prev.includes(id) ? [] : [id]))
    }
  }

  return (
    <div className={cn("divide-y rounded-lg border", className)}>
      {items.map((item, index) => {
        const isOpen = openItems.includes(item.id)
        return (
          <div key={item.id} className={index === 0 ? "" : ""}>
            <button
              onClick={() => toggleItem(item.id)}
              className="flex w-full items-center justify-between px-4 py-3 text-left transition-colors hover:bg-muted/30 cursor-pointer"
            >
              <span className="font-medium">{item.title}</span>
              <ChevronDown
                className={cn(
                  "h-4 w-4 transition-transform duration-200",
                  isOpen && "rotate-180"
                )}
              />
            </button>
            <div
              className={cn(
                "overflow-hidden transition-all duration-200",
                isOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
              )}
            >
              <div className="border-t px-4 py-3 text-sm text-muted-foreground">
                {item.content}
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
