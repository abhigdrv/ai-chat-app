import type { Conversation, Message } from "../types/chat"

export const dummyMessages: Message[] = [
  {
    id: "1",
    role: "user",
    content: "Hello! Can you help me understand how React hooks work?",
    timestamp: new Date(Date.now() - 3600000),
  },
  {
    id: "2",
    role: "assistant",
    content: `Sure! React Hooks are functions that let you use state and other React features in functional components. Here are the most common hooks:

## useState
\`\`\`javascript
const [count, setCount] = useState(0);
\`\`\`

This hook lets you add state to functional components.

## useEffect
\`\`\`javascript
useEffect(() => {
  // Side effect code here
  return () => {
    // Cleanup code here
  };
}, [dependencies]);
\`\`\`

This hook lets you perform side effects in functional components.

## useContext
Used to consume context values without prop drilling.

Would you like me to explain any specific hook in more detail?`,
    timestamp: new Date(Date.now() - 3500000),
  },
  {
    id: "3",
    role: "user",
    content: "Yes, can you explain useEffect in more detail with examples?",
    timestamp: new Date(Date.now() - 3000000),
  },
  {
    id: "4",
    role: "assistant",
    content: `Absolutely! Let me break down \`useEffect\` with practical examples:

### Basic Structure
\`\`\`javascript
useEffect(() => {
  // Effect logic
}, [dependencies]);
\`\`\`

### Example 1: Running on Every Render
\`\`\`javascript
useEffect(() => {
  console.log('Component rendered');
});
\`\`\`

### Example 2: Running Once (Component Mount)
\`\`\`javascript
useEffect(() => {
  console.log('Component mounted');
}, []); // Empty dependency array
\`\`\`

### Example 3: Watching Specific Values
\`\`\`javascript
useEffect(() => {
  console.log('Count changed:', count);
}, [count]); // Runs when count changes
\`\`\`

### Example 4: Cleanup Function
\`\`\`javascript
useEffect(() => {
  const timer = setInterval(() => {
    console.log('Tick');
  }, 1000);

  return () => clearInterval(timer); // Cleanup
}, []);
\`\`\`

The cleanup function is crucial for preventing memory leaks!`,
    timestamp: new Date(Date.now() - 2500000),
  },
  {
    id: "5",
    role: "user",
    content: "That's really helpful! Can you also show me how to fetch data with useEffect?",
    timestamp: new Date(Date.now() - 1800000),
    files: [
      {
        id: "file1",
        name: "test.js",
        size: 91,
        type: "application/javascript",
        url: "/test.js",
      },
      {
        id: "file2",
        name: "test.png",
        size: 356037,
        type: "image/png",
        url: "/test.png",
      },
      {
        id: "file3",
        name: "tes.pdf",
        size: 1201892,
        type: "application/pdf",
        url: "/tes.pdf",
      },
    ],
  },
  {
    id: "6",
    role: "assistant",
    content: `Great question! Here's a comprehensive example of data fetching with \`useEffect\`:

\`\`\`javascript
import { useState, useEffect } from 'react';

function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    async function fetchUser() {
      try {
        setLoading(true);
        const response = await fetch(\`/api/users/\${userId}\`);

        if (!response.ok) {
          throw new Error('Failed to fetch user');
        }

        const data = await response.json();

        if (isMounted) {
          setUser(data);
          setError(null);
        }
      } catch (err) {
        if (isMounted) {
          setError(err.message);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    fetchUser();

    return () => {
      isMounted = false; // Cleanup flag
    };
  }, [userId]); // Re-fetch when userId changes

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!user) return <div>No user found</div>;

  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
    </div>
  );
}
\`\`\`

**Key points:**
1. Use a cleanup flag (\`isMounted\`) to prevent state updates on unmounted components
2. Handle loading and error states
3. Include dependencies in the dependency array
4. Clean up async operations`,
    timestamp: new Date(Date.now() - 1200000),
  },
]

export const dummyConversations: Conversation[] = [
  {
    id: "conv1",
    title: "React Hooks Tutorial",
    messages: dummyMessages,
    createdAt: new Date(Date.now() - 3600000),
    updatedAt: new Date(Date.now() - 1200000),
  },
  {
    id: "conv2",
    title: "TypeScript Best Practices",
    messages: [
      {
        id: "msg1",
        role: "user",
        content: "What are some TypeScript best practices? I'm attaching my project files for review.",
        timestamp: new Date(Date.now() - 7200000),
        files: [
          {
            id: "file4",
            name: "test.xlsx",
            size: 6154,
            type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
            url: "/test.xlsx",
          },
          {
            id: "file5",
            name: "test.png",
            size: 356037,
            type: "image/png",
            url: "/test.png",
          },
          {
            id: "file6",
            name: "tes.pdf",
            size: 1201892,
            type: "application/pdf",
            url: "/tes.pdf",
          },
        ],
      },
      {
        id: "msg2",
        role: "assistant",
        content: `Here are some essential TypeScript best practices:

1. **Enable strict mode** in tsconfig.json
2. **Use interfaces for object shapes**
3. **Avoid \`any\` type** - use \`unknown\` if needed
4. **Use union types** instead of enums when possible
5. **Leverage type inference** - don't over-annotate
6. **Use const assertions** for literal types
7. **Utilize utility types** like Pick, Omit, Partial`,
        timestamp: new Date(Date.now() - 7100000),
      },
    ],
    createdAt: new Date(Date.now() - 7200000),
    updatedAt: new Date(Date.now() - 7100000),
  },
  {
    id: "conv3",
    title: "CSS Grid vs Flexbox",
    messages: [
      {
        id: "msg1",
        role: "user",
        content: "When should I use CSS Grid vs Flexbox?",
        timestamp: new Date(Date.now() - 86400000),
      },
      {
        id: "msg2",
        role: "assistant",
        content: `Great question! Here's when to use each:

**Use Flexbox when:**
- Arranging items in a single direction (row or column)
- You need flexible item sizes
- Aligning items within a container
- Creating navigation bars, button groups

**Use Grid when:**
- Creating two-dimensional layouts
- You need precise control over rows and columns
- Building complex page layouts
- Creating responsive designs with grid areas`,
        timestamp: new Date(Date.now() - 86300000),
      },
    ],
    createdAt: new Date(Date.now() - 86400000),
    updatedAt: new Date(Date.now() - 86300000),
  },
  {
    id: "conv4",
    title: "Component Showcase",
    messages: [
      {
        id: "demo1",
        role: "user",
        content: "Can you show me examples of data visualization components?",
        timestamp: new Date(Date.now() - 172800000),
      },
      {
        id: "demo2",
        role: "assistant",
        content: "This conversation demonstrates all available data visualization components! Scroll through to see tables, charts, cards, timelines, galleries, and more in action.",
        timestamp: new Date(Date.now() - 172700000),
      },
    ],
    createdAt: new Date(Date.now() - 172800000),
    updatedAt: new Date(Date.now() - 172700000),
  },
]
