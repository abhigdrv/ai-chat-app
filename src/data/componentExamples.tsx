import {
  TrendingUp,
  Users,
  ShoppingCart,
  DollarSign,
  Calendar,
  Mail,
  Phone,
  MapPin,
  Package,
  CheckCircle,
} from "lucide-react"
import {
  AITable,
  AICard,
  AIList,
  AIBadgeGroup,
  AITimeline,
  AIAccordion,
  AIChart,
  AIMap,
  AIGallery,
  AIDetails,
} from "../components/ai"

export const componentExamplesMessage = `I'll demonstrate various data visualization components available in the chat:

## Sales Dashboard

Here's an overview of your sales metrics:

<AICard variant="stats" title="Total Revenue" value="$45,231" trend={{ value: 12.5, isPositive: true }} description="Compared to last month" />

## Product Performance

<AIChart
  type="bar"
  title="Top Products"
  data={[
    { label: "Product A", value: 245 },
    { label: "Product B", value: 189 },
    { label: "Product C", value: 156 },
    { label: "Product D", value: 98 }
  ]}
/>

## Customer Data

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
    { id: "#1002", customer: "Jane Smith", amount: "$180", status: "Processing" },
    { id: "#1003", customer: "Bob Johnson", amount: "$420", status: "Shipped" }
  ]}
/>

## Project Timeline

<AITimeline
  items={[
    {
      id: "1",
      title: "Project Kickoff",
      description: "Initial meeting and requirements gathering",
      timestamp: "Jan 15, 2024",
      status: "completed"
    },
    {
      id: "2",
      title: "Design Phase",
      description: "UI/UX design and prototyping",
      timestamp: "Jan 22, 2024",
      status: "completed"
    },
    {
      id: "3",
      title: "Development",
      description: "Building core features",
      timestamp: "Feb 1, 2024",
      status: "current"
    },
    {
      id: "4",
      title: "Testing & Launch",
      description: "QA testing and deployment",
      timestamp: "Feb 15, 2024",
      status: "pending"
    }
  ]}
/>

## FAQ Section

<AIAccordion
  items={[
    {
      id: "1",
      title: "What is your return policy?",
      content: "We offer a 30-day money-back guarantee on all products. Items must be unused and in original packaging."
    },
    {
      id: "2",
      title: "How long does shipping take?",
      content: "Standard shipping takes 5-7 business days. Express shipping is available for 2-3 day delivery."
    },
    {
      id: "3",
      title: "Do you ship internationally?",
      content: "Yes, we ship to over 50 countries worldwide. International shipping times vary by destination."
    }
  ]}
/>

## Customer Details

<AIDetails
  title="Account Information"
  layout="grid"
  items={[
    { key: "Name", value: "John Doe" },
    { key: "Email", value: "john@example.com" },
    { key: "Phone", value: "+1 (555) 123-4567" },
    { key: "Member Since", value: "January 2024" },
    { key: "Total Orders", value: "24" },
    { key: "Total Spent", value: "$3,450" }
  ]}
/>

## Store Location

<AIMap
  location={{
    name: "Main Store",
    address: "123 Main Street, San Francisco, CA 94105",
    coordinates: { lat: 37.7749, lng: -122.4194 }
  }}
/>

## Product Gallery

<AIGallery
  columns={3}
  images={[
    { id: "1", url: "/test.png", alt: "Product 1", caption: "Premium Quality" },
    { id: "2", url: "/test.png", alt: "Product 2", caption: "Best Seller" },
    { id: "3", url: "/test.png", alt: "Product 3", caption: "New Arrival" },
    { id: "4", url: "/test.png", alt: "Product 4", caption: "Limited Edition" }
  ]}
/>

## Product Categories

<AIList
  variant="grid"
  columns={3}
  items={[
    { id: "1", title: "Electronics", description: "Laptops, phones, and more", meta: "234 items" },
    { id: "2", title: "Clothing", description: "Fashion for all seasons", meta: "567 items" },
    { id: "3", title: "Home & Garden", description: "Decor and essentials", meta: "189 items" }
  ]}
/>

## Market Share

<AIChart
  type="pie"
  title="Market Distribution"
  data={[
    { label: "North America", value: 45 },
    { label: "Europe", value: 30 },
    { label: "Asia", value: 20 },
    { label: "Other", value: 5 }
  ]}
/>

## Tags & Categories

<AIBadgeGroup
  badges={[
    { id: "1", label: "React", variant: "info" },
    { id: "2", label: "TypeScript", variant: "success" },
    { id: "3", label: "Tailwind", variant: "default" },
    { id: "4", label: "Vite", variant: "warning" }
  ]}
/>

These components can be used to display structured data in a visually appealing way!`

// Example component rendering helpers
export const renderTableExample = () => (
  <AITable
    caption="Recent Orders"
    columns={[
      { header: "Order ID", accessor: "id" },
      { header: "Customer", accessor: "customer" },
      { header: "Amount", accessor: "amount", align: "right" },
      { header: "Status", accessor: "status" },
    ]}
    data={[
      { id: "#1001", customer: "John Doe", amount: "$250", status: "Completed" },
      { id: "#1002", customer: "Jane Smith", amount: "$180", status: "Processing" },
      { id: "#1003", customer: "Bob Johnson", amount: "$420", status: "Shipped" },
    ]}
  />
)

export const renderCardsExample = () => (
  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
    <AICard
      variant="stats"
      title="Total Revenue"
      value="$45,231"
      icon={DollarSign}
      trend={{ value: 12.5, isPositive: true }}
      description="Compared to last month"
    />
    <AICard
      variant="stats"
      title="Active Users"
      value="2,345"
      icon={Users}
      trend={{ value: 8.2, isPositive: true }}
      description="Growing steadily"
    />
    <AICard
      variant="stats"
      title="Total Orders"
      value="1,234"
      icon={ShoppingCart}
      trend={{ value: -3.1, isPositive: false }}
      description="Slight decrease"
    />
    <AICard
      variant="stats"
      title="Conversion Rate"
      value="3.24%"
      icon={TrendingUp}
      trend={{ value: 1.5, isPositive: true }}
      description="Above average"
    />
  </div>
)

export const renderListExample = () => (
  <AIList
    variant="list"
    items={[
      {
        id: "1",
        title: "Complete project proposal",
        description: "Draft and submit the Q1 project proposal",
        icon: <Package className="h-5 w-5 text-blue-500" />,
        meta: "Due today",
      },
      {
        id: "2",
        title: "Review pull requests",
        description: "Check and approve pending code reviews",
        icon: <CheckCircle className="h-5 w-5 text-green-500" />,
        meta: "3 pending",
      },
      {
        id: "3",
        title: "Client meeting",
        description: "Discuss project requirements with client",
        icon: <Calendar className="h-5 w-5 text-orange-500" />,
        meta: "2:00 PM",
      },
    ]}
  />
)

export const renderTimelineExample = () => (
  <AITimeline
    items={[
      {
        id: "1",
        title: "Order Placed",
        description: "Your order has been confirmed",
        timestamp: "Jan 15, 10:30 AM",
        status: "completed",
      },
      {
        id: "2",
        title: "Processing",
        description: "Preparing your items for shipment",
        timestamp: "Jan 15, 2:00 PM",
        status: "completed",
      },
      {
        id: "3",
        title: "Shipped",
        description: "Package is on its way",
        timestamp: "Jan 16, 9:00 AM",
        status: "current",
      },
      {
        id: "4",
        title: "Delivered",
        description: "Estimated delivery",
        timestamp: "Jan 18",
        status: "pending",
      },
    ]}
  />
)

export const renderChartExample = () => (
  <div className="space-y-6">
    <AIChart
      type="bar"
      title="Monthly Revenue"
      data={[
        { label: "Jan", value: 12500 },
        { label: "Feb", value: 15200 },
        { label: "Mar", value: 18900 },
        { label: "Apr", value: 16400 },
        { label: "May", value: 21000 },
      ]}
    />
    <AIChart
      type="pie"
      title="Traffic Sources"
      data={[
        { label: "Organic", value: 45 },
        { label: "Direct", value: 25 },
        { label: "Social", value: 20 },
        { label: "Referral", value: 10 },
      ]}
    />
  </div>
)

export const renderGalleryExample = () => (
  <AIGallery
    columns={3}
    images={[
      { id: "1", url: "/test.png", alt: "Image 1", caption: "Beautiful landscape" },
      { id: "2", url: "/test.png", alt: "Image 2", caption: "City skyline" },
      { id: "3", url: "/test.png", alt: "Image 3", caption: "Nature scene" },
      { id: "4", url: "/test.png", alt: "Image 4", caption: "Urban architecture" },
      { id: "5", url: "/test.png", alt: "Image 5", caption: "Sunset view" },
      { id: "6", url: "/test.png", alt: "Image 6", caption: "Mountain range" },
    ]}
  />
)

export const renderDetailsExample = () => (
  <AIDetails
    title="User Profile"
    layout="horizontal"
    items={[
      { key: "Name", value: "John Doe", icon: <Users className="h-4 w-4" /> },
      { key: "Email", value: "john@example.com", icon: <Mail className="h-4 w-4" /> },
      { key: "Phone", value: "+1 (555) 123-4567", icon: <Phone className="h-4 w-4" /> },
      { key: "Location", value: "San Francisco, CA", icon: <MapPin className="h-4 w-4" /> },
    ]}
  />
)

export const renderMapExample = () => (
  <AIMap
    location={{
      name: "Company Headquarters",
      address: "123 Tech Street, San Francisco, CA 94105",
      coordinates: { lat: 37.7749, lng: -122.4194 },
    }}
  />
)

export const renderAccordionExample = () => (
  <AIAccordion
    items={[
      {
        id: "1",
        title: "Getting Started",
        content:
          "Learn the basics of our platform with our comprehensive getting started guide. We'll walk you through account setup, navigation, and key features.",
      },
      {
        id: "2",
        title: "Pricing Information",
        content:
          "We offer flexible pricing plans to suit businesses of all sizes. Choose from monthly or annual billing, with discounts available for longer commitments.",
      },
      {
        id: "3",
        title: "Support & Resources",
        content:
          "Access our knowledge base, video tutorials, and live chat support. Our team is available 24/7 to help you succeed.",
      },
    ]}
  />
)

export const renderBadgesExample = () => (
  <AIBadgeGroup
    badges={[
      { id: "1", label: "New Feature", variant: "success" },
      { id: "2", label: "In Progress", variant: "warning" },
      { id: "3", label: "Completed", variant: "success" },
      { id: "4", label: "Urgent", variant: "error" },
      { id: "5", label: "Info", variant: "info" },
    ]}
  />
)
