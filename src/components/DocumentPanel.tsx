import { useState } from "react"
import type { AttachedFile } from "../types/chat"
import { ScrollArea } from "./ui/scroll-area"
import { Button } from "./ui/button"
import { FilePreviewModal } from "./FilePreviewModal"
import { X, FileText, Image, FileSpreadsheet, File, Download, Eye, ChevronRight, ChevronLeft } from "lucide-react"
import { cn } from "../lib/utils"

interface DocumentPanelProps {
  files: AttachedFile[]
  onClose: () => void
  isOpen: boolean
}

export function DocumentPanel({ files, onClose, isOpen }: DocumentPanelProps) {
  const [selectedFile, setSelectedFile] = useState<AttachedFile | null>(null)
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [previewFile, setPreviewFile] = useState<AttachedFile | null>(null)
  const [showPreviewModal, setShowPreviewModal] = useState(false)

  const getFileIcon = (file: AttachedFile) => {
    const type = file.type.toLowerCase()
    if (type.includes("image")) return <Image className="h-5 w-5" />
    if (type.includes("pdf")) return <FileText className="h-5 w-5 text-red-500" />
    if (type.includes("sheet") || type.includes("excel")) return <FileSpreadsheet className="h-5 w-5 text-green-500" />
    if (type.includes("word") || type.includes("document")) return <FileText className="h-5 w-5 text-blue-500" />
    return <File className="h-5 w-5" />
  }

  const getFileTypeLabel = (file: AttachedFile) => {
    const type = file.type.toLowerCase()
    if (type.includes("image")) return "Image"
    if (type.includes("pdf")) return "PDF"
    if (type.includes("sheet") || type.includes("excel")) return "Spreadsheet"
    if (type.includes("word") || type.includes("document")) return "Document"
    return "File"
  }

  const handleViewFile = (file: AttachedFile) => {
    setPreviewFile(file)
    setShowPreviewModal(true)
  }

  const handleDownloadFile = (file: AttachedFile) => {
    if (file.url) {
      const link = document.createElement("a")
      link.href = file.url
      link.download = file.name
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    } else {
      alert("Download URL not available for this file")
    }
  }

  if (!isOpen) return null

  return (
    <>
      <div
        className={cn(
          "flex h-full border-l bg-card transition-all duration-300 flex-shrink-0",
          isCollapsed ? "w-16" : "w-80"
        )}
      >
      {/* Collapse/Expand Button */}
      <div className="flex flex-col items-center border-r p-2">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="mb-2"
        >
          {isCollapsed ? <ChevronLeft className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
        </Button>
      </div>

      {/* Panel Content */}
      {!isCollapsed && (
        <div className="flex flex-1 flex-col">
          {/* Header */}
          <div className="flex items-center justify-between border-b p-4">
            <div>
              <h3 className="font-semibold">Documents</h3>
              <p className="text-xs text-muted-foreground">{files.length} files</p>
            </div>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="h-4 w-4" />
            </Button>
          </div>

          {/* File List */}
          <ScrollArea className="flex-1 p-2">
            <div className="space-y-2">
              {files.map((file) => (
                <button
                  key={file.id}
                  onClick={() => setSelectedFile(file)}
                  className={cn(
                    "w-full rounded-lg border p-3 text-left transition-all hover:bg-accent cursor-pointer",
                    selectedFile?.id === file.id && "bg-accent border-primary"
                  )}
                >
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5">{getFileIcon(file)}</div>
                    <div className="flex-1 overflow-hidden">
                      <div className="truncate text-sm font-medium">{file.name}</div>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <span>{getFileTypeLabel(file)}</span>
                        <span>•</span>
                        <span>{(file.size / 1024).toFixed(1)} KB</span>
                      </div>
                    </div>
                  </div>

                  {/* File Preview Thumbnail */}
                  {file.type.includes("image") && file.url && (
                    <div className="mt-2 overflow-hidden rounded border">
                      <img
                        src={file.url}
                        alt={file.name}
                        className="h-32 w-full object-cover"
                      />
                    </div>
                  )}
                </button>
              ))}
            </div>
          </ScrollArea>

          {/* Preview Section */}
          {selectedFile && (
            <div className="border-t p-4">
              <div className="mb-2 flex items-center justify-between">
                <h4 className="text-sm font-semibold">Quick Preview</h4>
                <div className="flex gap-1">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8"
                    onClick={() => handleViewFile(selectedFile)}
                    title="Open full preview"
                  >
                    <Eye className="h-3 w-3" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8"
                    onClick={() => handleDownloadFile(selectedFile)}
                    title="Download file"
                  >
                    <Download className="h-3 w-3" />
                  </Button>
                </div>
              </div>

              <div className="rounded-lg border bg-muted/50 p-4">
                {selectedFile.type.includes("image") && selectedFile.url ? (
                  <div
                    className="cursor-pointer"
                    onClick={() => handleViewFile(selectedFile)}
                  >
                    <img
                      src={selectedFile.url}
                      alt={selectedFile.name}
                      className="w-full rounded hover:opacity-90 transition-opacity"
                    />
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center py-8 text-center">
                    {getFileIcon(selectedFile)}
                    <p className="mt-2 text-sm font-medium">{selectedFile.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {getFileTypeLabel(selectedFile)} • {(selectedFile.size / 1024).toFixed(1)} KB
                    </p>
                    <Button
                      className="mt-4"
                      size="sm"
                      onClick={() => handleViewFile(selectedFile)}
                    >
                      <Eye className="mr-2 h-3 w-3" />
                      Open Preview
                    </Button>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      )}
    </div>

    <FilePreviewModal
      file={previewFile}
      open={showPreviewModal}
      onClose={() => {
        setShowPreviewModal(false)
        setPreviewFile(null)
      }}
    />
    </>
  )
}
