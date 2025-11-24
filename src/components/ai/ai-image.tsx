import { useState } from "react"
import { cn } from "../../lib/utils"
import { Loader2 } from "lucide-react"

interface AIImageProps {
  src: string
  alt: string
  caption?: string
  className?: string
}

export function AIImage({ src, alt, caption, className }: AIImageProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  return (
    <figure className={cn("space-y-2", className)}>
      <div className="relative overflow-hidden rounded-lg border bg-muted/30">
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center">
            <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
          </div>
        )}
        {hasError ? (
          <div className="flex h-48 items-center justify-center bg-muted/50">
            <span className="text-sm text-muted-foreground">Failed to load image</span>
          </div>
        ) : (
          <img
            src={src}
            alt={alt}
            className={cn(
              "w-full object-contain transition-opacity",
              isLoading ? "opacity-0" : "opacity-100"
            )}
            onLoad={() => setIsLoading(false)}
            onError={() => {
              setIsLoading(false)
              setHasError(true)
            }}
          />
        )}
      </div>
      {caption && (
        <figcaption className="text-center text-sm text-muted-foreground">
          {caption}
        </figcaption>
      )}
    </figure>
  )
}
