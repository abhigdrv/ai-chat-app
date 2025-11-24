# AI Chat Components Showcase

This document demonstrates all the data visualization and UI components available in the AI chat application.

## Table of Contents

1. [Tables](#tables)
2. [Cards (Stats & Info)](#cards)
3. [Lists & Grid Views](#lists)
4. [Badges & Tags](#badges)
5. [Timeline](#timeline)
6. [Accordion](#accordion)
7. [Charts](#charts)
8. [Maps](#maps)
9. [Image Gallery](#gallery)
10. [Key-Value Details](#details)

---

## Tables

Display structured data in a tabular format with sorting and alignment options.

### Usage

```tsx
<AITable
  caption="Recent Orders"
  columns={[
    { header: "Order ID", accessor: "id" },
    { header: "Customer", accessor: "customer" },
    { header: "Amount", accessor: "amount", align: "right" },
    { header: "Status", accessor: "status" }
  ]}
  data={[
    { id: "#1001", customer: "John Doe", amount: "$250", status: "Completed" },
    { id: "#1002", customer: "Jane Smith", amount: "$180", status: "Processing" }
  ]}
/>
```

### Features
- Optional caption
- Column alignment (left, center, right)
- Hover effects on rows
- Responsive with horizontal scroll

---

## Cards

### Stats Cards

Display key metrics with optional trends and icons.

```tsx
<AICard
  variant="stats"
  title="Total Revenue"
  value="$45,231"
  icon={DollarSign}
  trend={{ value: 12.5, isPositive: true }}
  description="Compared to last month"
/>
```

### Info Cards

General purpose cards for displaying information.

```tsx
<AICard
  variant="info"
  title="Project Status"
  icon={FileText}
>
  <p>Your project is currently in the development phase.</p>
</AICard>
```

### Features
- Three variants: default, stats, info
- Optional icons from lucide-react
- Trend indicators with positive/negative styling
- Hover shadow effects

---

## Lists

### List View

Vertical list with icons and metadata.

```tsx
<AIList
  variant="list"
  items={[
    {
      id: "1",
      title: "Complete project",
      description: "Finish the Q1 deliverables",
      icon: <Package className="h-5 w-5" />,
      meta: "Due today"
    }
  ]}
/>
```

### Grid View

Responsive grid layout for cards.

```tsx
<AIList
  variant="grid"
  columns={3}
  items={[
    {
      id: "1",
      title: "Electronics",
      description: "Laptops, phones, and more",
      meta: "234 items"
    }
  ]}
/>
```

### Features
- Two variants: list, grid
- Configurable grid columns (2, 3, 4)
- Optional icons and metadata
- Responsive breakpoints

---

## Badges

### Single Badge

```tsx
<AIBadge variant="success" size="md">
  Completed
</AIBadge>
```

### Badge Group

```tsx
<AIBadgeGroup
  badges={[
    { id: "1", label: "React", variant: "info" },
    { id: "2", label: "TypeScript", variant: "success" },
    { id: "3", label: "In Progress", variant: "warning" }
  ]}
/>
```

### Features
- Five color variants: default, success, warning, error, info
- Three sizes: sm, md, lg
- Automatic wrapping in groups

---

## Timeline

Display chronological events with status indicators.

```tsx
<AITimeline
  items={[
    {
      id: "1",
      title: "Project Kickoff",
      description: "Initial meeting and requirements",
      timestamp: "Jan 15, 2024",
      status: "completed"
    },
    {
      id: "2",
      title: "Development",
      description: "Building core features",
      timestamp: "Feb 1, 2024",
      status: "current"
    }
  ]}
/>
```

### Features
- Three status states: completed, current, pending
- Color-coded status indicators
- Optional icons for each item
- Connecting lines between items

---

## Accordion

Collapsible content sections.

```tsx
<AIAccordion
  items={[
    {
      id: "1",
      title: "What is your return policy?",
      content: "We offer a 30-day money-back guarantee..."
    }
  ]}
  allowMultiple={false}
  defaultOpen={["1"]}
/>
```

### Features
- Smooth expand/collapse animations
- Single or multiple open sections
- Default open items
- Hover effects

---

## Charts

### Bar Chart

```tsx
<AIChart
  type="bar"
  title="Monthly Revenue"
  data={[
    { label: "Jan", value: 12500 },
    { label: "Feb", value: 15200 },
    { label: "Mar", value: 18900 }
  ]}
/>
```

### Pie Chart

```tsx
<AIChart
  type="pie"
  title="Market Share"
  data={[
    { label: "Product A", value: 45 },
    { label: "Product B", value: 30 },
    { label: "Product C", value: 25 }
  ]}
/>
```

### Features
- Two chart types: bar, pie
- Automatic scaling
- Color-coded data
- Animated transitions
- Custom colors support

---

## Maps

Display location information with coordinates.

```tsx
<AIMap
  location={{
    name: "Main Store",
    address: "123 Main Street, San Francisco, CA 94105",
    coordinates: { lat: 37.7749, lng: -122.4194 }
  }}
/>
```

### Features
- Location name and address
- Coordinate display
- Map placeholder (ready for integration with real map APIs)
- "View on Map" action button

### Integration Notes
This component is ready to integrate with:
- Google Maps API
- Mapbox
- OpenStreetMap
- Apple Maps

---

## Gallery

Image gallery with lightbox viewer.

```tsx
<AIGallery
  columns={3}
  images={[
    { id: "1", url: "/image1.jpg", alt: "Image 1", caption: "Beautiful view" },
    { id: "2", url: "/image2.jpg", alt: "Image 2", caption: "City lights" }
  ]}
/>
```

### Features
- Responsive grid (2, 3, or 4 columns)
- Click to open lightbox
- Navigation between images in lightbox
- Caption overlays on hover
- Keyboard navigation (arrows, ESC)
- Image counter

---

## Details

Display key-value pairs in various layouts.

### Horizontal Layout

```tsx
<AIDetails
  title="Account Information"
  layout="horizontal"
  items={[
    { key: "Name", value: "John Doe" },
    { key: "Email", value: "john@example.com" }
  ]}
/>
```

### Grid Layout

```tsx
<AIDetails
  layout="grid"
  items={[
    { key: "Total Orders", value: "24" },
    { key: "Total Spent", value: "$3,450" }
  ]}
/>
```

### Vertical Layout (Default)

```tsx
<AIDetails
  layout="vertical"
  items={[
    { key: "Name", value: "John Doe", icon: <User /> },
    { key: "Location", value: "San Francisco", icon: <MapPin /> }
  ]}
/>
```

### Features
- Three layouts: vertical, horizontal, grid
- Optional icons for each field
- Optional title
- Responsive grid on mobile

---

## Component Integration

All components are exported from `src/components/ai/index.tsx`:

```tsx
import {
  AITable,
  AICard,
  AIList,
  AIBadge,
  AIBadgeGroup,
  AITimeline,
  AIAccordion,
  AIChart,
  AIMap,
  AIGallery,
  AIDetails,
} from './components/ai'
```

## Live Demo

To see all components in action, navigate to the **"Component Showcase"** conversation in the sidebar. This conversation demonstrates every component with real data.

## Styling

All components are built with:
- **Tailwind CSS** for styling
- **CSS Variables** for theming
- **Dark mode** support
- **Responsive design** with mobile-first approach
- **Smooth animations** using Tailwind transitions

## Best Practices

1. **Performance**: Components are optimized for rendering large datasets
2. **Accessibility**: Semantic HTML and ARIA attributes included
3. **Responsive**: All components adapt to different screen sizes
4. **Theming**: Uses CSS custom properties for easy customization
5. **Type Safety**: Full TypeScript support with proper interfaces

## Future Enhancements

Planned additions:
- Line charts and area charts
- Real-time data updates
- Export functionality (CSV, PDF)
- Advanced filtering and sorting
- Drag-and-drop gallery reordering
- Map integration with popular providers
- Data pagination for tables
- Custom themes and color schemes
