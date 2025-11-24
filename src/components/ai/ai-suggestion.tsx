import { Lightbulb } from "lucide-react"
import { Button } from "../ui/button"
import { cn } from "../../lib/utils"

interface AISuggestionProps {
  suggestions: string[]
  onSelect: (suggestion: string) => void
  className?: string
}

export function AISuggestion({
  suggestions,
  onSelect,
  className,
}: AISuggestionProps) {
  if (suggestions.length === 0) return null

  return (
    <div className={cn("space-y-2", className)}>
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <Lightbulb className="h-4 w-4" />
        <span>Suggested prompts</span>
      </div>
      <div className="flex flex-wrap gap-2">
        {suggestions.map((suggestion, index) => (
          <Button
            key={index}
            variant="outline"
            size="sm"
            onClick={() => onSelect(suggestion)}
            className="h-auto whitespace-normal py-2 text-left text-sm"
          >
            {suggestion}
          </Button>
        ))}
      </div>
    </div>
  )
}
