import { cn } from "../../lib/utils"

interface ChartData {
  label: string
  value: number
  color?: string
}

interface AIChartProps {
  data: ChartData[]
  type?: "bar" | "pie" | "line"
  title?: string
  height?: number
  className?: string
}

export function AIChart({
  data,
  type = "bar",
  title,
  height = 200,
  className,
}: AIChartProps) {
  const maxValue = Math.max(...data.map((d) => d.value))

  if (type === "pie") {
    const total = data.reduce((sum, item) => sum + item.value, 0)
    let cumulativePercent = 0

    return (
      <div className={cn("space-y-4", className)}>
        {title && <h4 className="font-semibold">{title}</h4>}
        <div className="flex flex-col sm:flex-row items-center gap-6">
          <svg width="200" height="200" viewBox="0 0 200 200">
            {data.map((item, index) => {
              const percent = (item.value / total) * 100
              const angle = (percent / 100) * 360
              const startAngle = (cumulativePercent / 100) * 360
              cumulativePercent += percent

              const startRad = (startAngle - 90) * (Math.PI / 180)
              const endRad = (startAngle + angle - 90) * (Math.PI / 180)

              const x1 = 100 + 80 * Math.cos(startRad)
              const y1 = 100 + 80 * Math.sin(startRad)
              const x2 = 100 + 80 * Math.cos(endRad)
              const y2 = 100 + 80 * Math.sin(endRad)

              const largeArc = angle > 180 ? 1 : 0

              const pathData = [
                `M 100 100`,
                `L ${x1} ${y1}`,
                `A 80 80 0 ${largeArc} 1 ${x2} ${y2}`,
                `Z`,
              ].join(" ")

              const colors = [
                "hsl(217, 91%, 60%)",
                "hsl(142, 71%, 45%)",
                "hsl(24, 95%, 53%)",
                "hsl(262, 83%, 58%)",
                "hsl(198, 70%, 50%)",
              ]

              return (
                <path
                  key={index}
                  d={pathData}
                  fill={item.color || colors[index % colors.length]}
                  className="transition-opacity hover:opacity-80"
                />
              )
            })}
          </svg>
          <div className="space-y-2">
            {data.map((item, index) => {
              const colors = [
                "hsl(217, 91%, 60%)",
                "hsl(142, 71%, 45%)",
                "hsl(24, 95%, 53%)",
                "hsl(262, 83%, 58%)",
                "hsl(198, 70%, 50%)",
              ]
              return (
                <div key={index} className="flex items-center gap-2">
                  <div
                    className="h-3 w-3 rounded-sm"
                    style={{
                      backgroundColor: item.color || colors[index % colors.length],
                    }}
                  />
                  <span className="text-sm">
                    {item.label}: <strong>{item.value}</strong> (
                    {((item.value / total) * 100).toFixed(1)}%)
                  </span>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    )
  }

  // Bar chart
  return (
    <div className={cn("space-y-4", className)}>
      {title && <h4 className="font-semibold">{title}</h4>}
      <div className="space-y-3" style={{ minHeight: height }}>
        {data.map((item, index) => {
          const percent = (item.value / maxValue) * 100
          const colors = [
            "bg-blue-500",
            "bg-green-500",
            "bg-orange-500",
            "bg-purple-500",
            "bg-cyan-500",
          ]
          return (
            <div key={index} className="space-y-1">
              <div className="flex items-center justify-between text-sm">
                <span className="font-medium">{item.label}</span>
                <span className="text-muted-foreground">{item.value}</span>
              </div>
              <div className="h-8 w-full rounded-full bg-muted overflow-hidden">
                <div
                  className={cn(
                    "h-full rounded-full transition-all duration-500",
                    colors[index % colors.length]
                  )}
                  style={{ width: `${percent}%` }}
                />
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
