import { MapPin } from "lucide-react"
import { cn } from "../../lib/utils"

interface Location {
  name: string
  address?: string
  coordinates?: {
    lat: number
    lng: number
  }
}

interface AIMapProps {
  location: Location
  zoom?: number
  className?: string
}

export function AIMap({ location, zoom = 15, className }: AIMapProps) {
  // Static map placeholder - in production, you'd use Google Maps, Mapbox, etc.
  const { coordinates } = location

  return (
    <div className={cn("overflow-hidden rounded-lg border", className)}>
      {coordinates ? (
        <div className="relative">
          {/* Map placeholder - replace with actual map library */}
          <div className="aspect-video w-full bg-muted/30">
            <div className="flex h-full items-center justify-center">
              <div className="text-center space-y-2">
                <MapPin className="mx-auto h-12 w-12 text-primary" />
                <div>
                  <p className="font-semibold">{location.name}</p>
                  {location.address && (
                    <p className="text-sm text-muted-foreground">
                      {location.address}
                    </p>
                  )}
                  <p className="mt-2 text-xs text-muted-foreground">
                    {coordinates.lat.toFixed(6)}, {coordinates.lng.toFixed(6)}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Map controls overlay */}
          <div className="absolute bottom-4 right-4 flex flex-col gap-2">
            <button className="rounded bg-white px-3 py-2 text-sm font-medium shadow-md hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700">
              View on Map
            </button>
          </div>
        </div>
      ) : (
        <div className="flex h-48 items-center justify-center bg-muted/30">
          <div className="text-center">
            <MapPin className="mx-auto h-8 w-8 text-muted-foreground" />
            <p className="mt-2 text-sm text-muted-foreground">
              Location coordinates not available
            </p>
          </div>
        </div>
      )}

      {/* Location details */}
      <div className="border-t bg-card p-4">
        <h4 className="font-semibold">{location.name}</h4>
        {location.address && (
          <p className="mt-1 text-sm text-muted-foreground">{location.address}</p>
        )}
      </div>
    </div>
  )
}
