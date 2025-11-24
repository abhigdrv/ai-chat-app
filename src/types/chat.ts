export interface Message {
  id: string
  role: "user" | "assistant"
  content: string
  timestamp: Date
  files?: AttachedFile[]
}

export interface AttachedFile {
  id: string
  name: string
  size: number
  type: string
  url?: string
}

export interface Conversation {
  id: string
  title: string
  messages: Message[]
  createdAt: Date
  updatedAt: Date
}
