# AI Components Documentation

This project integrates shadcn/ui AI components inspired by https://www.shadcn.io/ai to enhance the chat experience.

## Implemented Components

### 1. AIMessage
A clean message container component for displaying both user and assistant messages.

**Features:**
- Role-based styling (user vs assistant)
- Avatar support
- Timestamp display
- Alternating backgrounds for better readability

**Usage:**
```tsx
<AIMessage role="user" avatar={avatarComponent} timestamp="10:30 AM">
  Message content here
</AIMessage>
```

### 2. AICodeBlock
Enhanced code block with syntax highlighting and copy functionality.

**Features:**
- Syntax highlighting for multiple languages
- Copy to clipboard button
- Language badge display
- Optional filename display
- Hover-activated copy button

**Usage:**
```tsx
<AICodeBlock
  code="const hello = 'world'"
  language="typescript"
  filename="example.ts"
/>
```

### 3. AILoader
Multiple loading indicators for AI responses.

**Variants:**
- `dots`: Pulsing dots animation (default)
- `pulse`: Single pulsing dot with text
- `typing`: Bouncing dots to indicate typing

**Usage:**
```tsx
<AILoader variant="typing" />
```

### 4. AIPromptInput
Advanced input component for sending messages with file attachments.

**Features:**
- Auto-resizing textarea
- Multi-file upload support
- File badges with remove functionality
- Enter to send, Shift+Enter for new line
- Disabled state support

**Usage:**
```tsx
<AIPromptInput
  onSubmit={(message, files) => handleSend(message, files)}
  disabled={isTyping}
  placeholder="Send a message..."
/>
```

### 5. AIConversation
Scrollable container for organizing conversation messages.

**Features:**
- Centered max-width layout
- Smooth scrolling
- Integrates with ScrollArea component

**Usage:**
```tsx
<AIConversation>
  {messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}
</AIConversation>
```

### 6. AIImage
Smart image component with loading states and error handling.

**Features:**
- Loading spinner while image loads
- Error state handling
- Optional caption support
- Responsive container

**Usage:**
```tsx
<AIImage
  src="/path/to/image.jpg"
  alt="Description"
  caption="Image caption"
/>
```

### 7. AISources
Display sources/references used in AI responses.

**Features:**
- Numbered source list
- Web and document type indicators
- External link icons
- Hover effects

**Usage:**
```tsx
<AISources
  sources={[
    { id: '1', title: 'Documentation', url: 'https://...', type: 'web' },
    { id: '2', title: 'Research Paper', url: 'https://...', type: 'document' }
  ]}
/>
```

### 8. AISuggestion
Suggested prompts for users to get started.

**Features:**
- Multiple suggestion buttons
- Click to use suggestion
- Lightbulb icon indicator
- Flexible wrapping layout

**Usage:**
```tsx
<AISuggestion
  suggestions={[
    "Explain quantum computing",
    "Write a Python function",
    "Best practices for React"
  ]}
  onSelect={(suggestion) => handleSuggestion(suggestion)}
/>
```

## Integration

All AI components are exported from `src/components/ai/index.tsx` for easy importing:

```tsx
import {
  AIMessage,
  AICodeBlock,
  AILoader,
  AIPromptInput,
  AIConversation,
  AIImage,
  AISources,
  AISuggestion,
} from './components/ai'
```

## Component Architecture

The AI components follow these principles:

1. **Composable**: Each component is designed to work independently or together
2. **Styled with Tailwind**: All styling uses Tailwind CSS classes
3. **TypeScript**: Full type safety with TypeScript interfaces
4. **Accessible**: Semantic HTML and ARIA attributes where needed
5. **Responsive**: Mobile-first responsive design

## Dependencies

- `ai` - Vercel AI SDK core
- `@ai-sdk/react` - React hooks for AI interactions
- `react-markdown` - Markdown rendering
- `remark-gfm` - GitHub Flavored Markdown support
- `react-syntax-highlighter` - Code syntax highlighting
- `@tailwindcss/typography` - Typography plugin for prose classes

## Future Enhancements

Components that could be added:

- **AI Branch**: Show conversation branching
- **AI Inline Citation**: Inline reference markers
- **AI Reasoning**: Display AI reasoning process
- **AI Response**: Structured AI response container
- **AI Task**: Task status indicators
- **AI Tool**: Tool usage display
- **AI Web Preview**: Preview web links in chat
- **AI Actions**: Quick action buttons for messages
