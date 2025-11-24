import type { AttachedFile } from "../types/chat"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog"
import { Download, FileText, Image as ImageIcon, FileSpreadsheet, File } from "lucide-react"
import { Button } from "./ui/button"

interface FilePreviewModalProps {
  file: AttachedFile | null
  open: boolean
  onClose: () => void
}

export function FilePreviewModal({ file, open, onClose }: FilePreviewModalProps) {
  if (!file) return null

  const getFileIcon = (file: AttachedFile) => {
    const type = file.type.toLowerCase()
    if (type.includes("image")) return <ImageIcon className="h-8 w-8" />
    if (type.includes("pdf")) return <FileText className="h-8 w-8 text-red-500" />
    if (type.includes("sheet") || type.includes("excel")) return <FileSpreadsheet className="h-8 w-8 text-green-500" />
    if (type.includes("word") || type.includes("document")) return <FileText className="h-8 w-8 text-blue-500" />
    return <File className="h-8 w-8" />
  }

  const renderPreview = () => {
    const type = file.type.toLowerCase()

    // Image preview
    if (type.includes("image") && file.url) {
      return (
        <div className="flex items-center justify-center bg-muted/20 rounded-lg p-4" style={{ minHeight: "60vh" }}>
          <img
            src={file.url}
            alt={file.name}
            className="max-w-full max-h-[70vh] object-contain rounded"
          />
        </div>
      )
    }

    // PDF preview (using iframe)
    if (type.includes("pdf") && file.url) {
      return (
        <div className="w-full rounded-lg overflow-hidden bg-muted/20" style={{ height: "70vh" }}>
          <iframe
            src={file.url}
            className="w-full h-full border-0"
            title={file.name}
          />
        </div>
      )
    }

    // Excel/Word preview placeholder with better message
    if (type.includes("sheet") || type.includes("excel") || type.includes("word") || type.includes("document")) {
      return (
        <div className="flex flex-col items-center justify-center bg-muted/20 rounded-lg p-12" style={{ minHeight: "60vh" }}>
          {getFileIcon(file)}
          <h3 className="mt-4 text-lg font-semibold">{file.name}</h3>
          <p className="text-sm text-muted-foreground mt-2">
            {type.includes("sheet") || type.includes("excel") ? "Excel Spreadsheet" : "Word Document"}
          </p>
          <p className="text-sm text-muted-foreground">
            {(file.size / 1024).toFixed(1)} KB
          </p>
          <div className="mt-6 space-y-2 text-center">
            <p className="text-sm text-muted-foreground">
              Preview for this file type is not available in browser.
            </p>
            <p className="text-sm text-muted-foreground">
              Click download to view in the appropriate application.
            </p>
          </div>
          <Button className="mt-6" onClick={() => handleDownload()}>
            <Download className="mr-2 h-4 w-4" />
            Download File
          </Button>
        </div>
      )
    }

    // Generic file fallback
    return (
      <div className="flex flex-col items-center justify-center bg-muted/20 rounded-lg p-12" style={{ minHeight: "60vh" }}>
        {getFileIcon(file)}
        <h3 className="mt-4 text-lg font-semibold">{file.name}</h3>
        <p className="text-sm text-muted-foreground mt-2">
          {(file.size / 1024).toFixed(1)} KB
        </p>
        <p className="text-sm text-muted-foreground mt-4">
          Preview not available for this file type
        </p>
        <Button className="mt-6" onClick={() => handleDownload()}>
          <Download className="mr-2 h-4 w-4" />
          Download File
        </Button>
      </div>
    )
  }

  const handleDownload = () => {
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

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent onClose={onClose} className="max-w-6xl max-h-[90vh] overflow-hidden">
        <DialogHeader>
          <DialogTitle className="pr-8">{file.name}</DialogTitle>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span>{file.type}</span>
            <span>•</span>
            <span>{(file.size / 1024).toFixed(1)} KB</span>
          </div>
        </DialogHeader>
        <div className="px-6 pb-6">
          {renderPreview()}
        </div>
        <div className="flex justify-end gap-2 px-6 pb-6 pt-2 border-t">
          <Button variant="outline" onClick={onClose}>
            Close
          </Button>
          {file.url && (
            <Button onClick={handleDownload}>
              <Download className="mr-2 h-4 w-4" />
              Download
            </Button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
