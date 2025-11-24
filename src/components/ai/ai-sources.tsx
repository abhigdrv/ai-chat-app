import { ExternalLink, FileText } from "lucide-react"
import { cn } from "../../lib/utils"

interface Source {
  id: string
  title: string
  url?: string
  type?: "web" | "document"
}

interface AISourcesProps {
  sources: Source[]
  className?: string
}

export function AISources({ sources, className }: AISourcesProps) {
  if (sources.length === 0) return null

  return (
    <div className={cn("space-y-2", className)}>
      <h4 className="text-sm font-semibold text-muted-foreground">Sources</h4>
      <div className="space-y-1">
        {sources.map((source, index) => (
          <a
            key={source.id}
            href={source.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-lg border bg-muted/30 px-3 py-2 text-sm transition-colors hover:bg-muted/50"
          >
            <span className="flex h-5 w-5 items-center justify-center rounded bg-primary/10 text-xs font-medium text-primary">
              {index + 1}
            </span>
            {source.type === "document" ? (
              <FileText className="h-4 w-4 text-muted-foreground" />
            ) : (
              <ExternalLink className="h-4 w-4 text-muted-foreground" />
            )}
            <span className="flex-1 truncate">{source.title}</span>
          </a>
        ))}
      </div>
    </div>
  )
}
