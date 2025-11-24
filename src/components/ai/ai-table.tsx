import { cn } from "../../lib/utils"

interface Column {
  header: string
  accessor: string
  align?: "left" | "center" | "right"
}

interface AITableProps {
  columns: Column[]
  data: Record<string, any>[]
  caption?: string
  className?: string
}

export function AITable({ columns, data, caption, className }: AITableProps) {
  return (
    <div className={cn("w-full overflow-x-auto rounded-lg border", className)}>
      <table className="w-full border-collapse">
        {caption && (
          <caption className="border-b bg-muted/30 px-4 py-2 text-left text-sm font-medium">
            {caption}
          </caption>
        )}
        <thead>
          <tr className="border-b bg-muted/50">
            {columns.map((column, index) => (
              <th
                key={index}
                className={cn(
                  "px-4 py-3 text-sm font-semibold",
                  column.align === "center" && "text-center",
                  column.align === "right" && "text-right",
                  !column.align && "text-left"
                )}
              >
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className="border-b last:border-b-0 transition-colors hover:bg-muted/30"
            >
              {columns.map((column, colIndex) => (
                <td
                  key={colIndex}
                  className={cn(
                    "px-4 py-3 text-sm",
                    column.align === "center" && "text-center",
                    column.align === "right" && "text-right",
                    !column.align && "text-left"
                  )}
                >
                  {row[column.accessor]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
