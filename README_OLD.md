# AI Chat App

A modern, feature-rich AI chat application built with React, Vite, TypeScript, Tailwind CSS, and shadcn/ui components.

## Features

- **Modern Chat Interface**: Clean and intuitive chat UI with message history
- **File Upload Support**: Attach multiple files to your messages
- **Document Preview Panel**: Dedicated right-side panel to view and manage all files in conversation
  - Collapsible panel with file count badge
  - Support for images, PDFs, Word documents, Excel spreadsheets
  - Thumbnail previews for images
  - File type icons and metadata display
  - Easy file selection and preview
- **Search Functionality**: Search through all conversations and messages
- **Markdown Support**: Full markdown rendering with syntax highlighting
- **Code Highlighting**: Beautiful syntax highlighting for code blocks
- **Typing Indicators**: Visual feedback when AI is responding
- **Dark/Light Mode**: Toggle between dark and light themes with improved contrast
- **Conversation Management**: Create, select, and manage multiple conversations
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Interactive Elements**: Proper cursor pointers and hover states

## Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - High-quality UI components
- **Lucide React** - Beautiful icons
- **React Markdown** - Markdown rendering
- **React Syntax Highlighter** - Code syntax highlighting

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Navigate to the project directory:
```bash
cd ai-chat-app
```

2. Install dependencies (if not already installed):
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## Project Structure

```
ai-chat-app/
├── src/
│   ├── components/
│   │   ├── ui/              # shadcn/ui components
│   │   │   ├── button.tsx
│   │   │   ├── input.tsx
│   │   │   ├── card.tsx
│   │   │   ├── badge.tsx
│   │   │   └── scroll-area.tsx
│   │   ├── ChatArea.tsx     # Main chat display area
│   │   ├── ChatInput.tsx    # Message input with file upload
│   │   ├── ChatMessage.tsx  # Individual message component
│   │   ├── Sidebar.tsx      # Conversation list and search
│   │   └── TypingIndicator.tsx # Typing animation
│   ├── data/
│   │   └── dummyData.ts     # Sample conversation data
│   ├── lib/
│   │   └── utils.ts         # Utility functions
│   ├── types/
│   │   └── chat.ts          # TypeScript type definitions
│   ├── App.tsx              # Main app component
│   ├── main.tsx             # App entry point
│   └── index.css            # Global styles with Tailwind
├── public/
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── tailwind.config.js
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Features in Detail

### Chat Interface
- Messages displayed with user/assistant avatars
- Timestamps for each message
- Markdown rendering with GitHub Flavored Markdown support
- Code blocks with syntax highlighting
- Smooth auto-scrolling to latest messages

### File Upload
- Click the paperclip icon to attach files
- Multiple file selection support
- File badges showing name and size
- Easy removal of attached files before sending

### Search
- Real-time search across all conversations
- Searches both conversation titles and message content
- Instant filtering of conversation list

### Conversation Management
- Create new conversations with the "New Chat" button
- Automatic conversation titling based on first message
- Click any conversation to view its messages
- Conversation list shows last message preview and date

### Dark/Light Mode
- Toggle between themes with the sun/moon icon
- Persistent theme preference
- Smooth transitions between modes

## Dummy Data

The app comes with pre-populated dummy conversations covering:
- React Hooks Tutorial
- TypeScript Best Practices
- CSS Grid vs Flexbox

These demonstrate the app's features including code highlighting, markdown formatting, and file attachments.

## Customization

### Adding New Conversations
Edit `src/data/dummyData.ts` to add more sample conversations.

### Styling
- Global styles: `src/index.css`
- Tailwind configuration: `tailwind.config.js`
- Component-specific styles use Tailwind utility classes

### AI Response Logic
The dummy response generator is in `App.tsx` (`generateDummyResponse` function). Replace this with actual API calls to integrate with a real AI backend.

## Integration with AI Backend

To connect to a real AI API:

1. Replace the `handleSendMessage` function in `App.tsx`
2. Remove the `setTimeout` and `generateDummyResponse` logic
3. Add your API call:

```typescript
const handleSendMessage = async (content: string, files: AttachedFile[]) => {
  // Add user message
  const userMessage: Message = { /* ... */ }
  setConversations(/* update with user message */)

  setIsTyping(true)

  try {
    // Call your AI API
    const response = await fetch('YOUR_API_ENDPOINT', {
      method: 'POST',
      body: JSON.stringify({ message: content, files }),
    })
    const data = await response.json()

    // Add assistant message
    const assistantMessage: Message = {
      id: `msg${Date.now()}_ai`,
      role: "assistant",
      content: data.response,
      timestamp: new Date(),
    }
    setConversations(/* update with assistant message */)
  } catch (error) {
    console.error('Error calling AI API:', error)
  } finally {
    setIsTyping(false)
  }
}
```

## License

MIT

## Contributing

Feel free to submit issues and enhancement requests!
