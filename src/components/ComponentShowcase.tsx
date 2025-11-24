import {
  TrendingUp,
  Users,
  ShoppingCart,
  DollarSign,
  Package,
  CheckCircle,
  Calendar,
  Mail,
  Phone,
  MapPin,
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
} from "./ai"

export function ComponentShowcase() {
  return (
    <div className="space-y-8">
      {/* Stats Cards */}
      <section>
        <h3 className="mb-4 text-lg font-semibold">Sales Dashboard</h3>
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
      </section>

      {/* Charts */}
      <section className="space-y-6">
        <h3 className="text-lg font-semibold">Performance Metrics</h3>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
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
      </section>

      {/* Table */}
      <section>
        <h3 className="mb-4 text-lg font-semibold">Recent Orders</h3>
        <AITable
          caption="Last 5 customer orders"
          columns={[
            { header: "Order ID", accessor: "id" },
            { header: "Customer", accessor: "customer" },
            { header: "Product", accessor: "product" },
            { header: "Amount", accessor: "amount", align: "right" },
            { header: "Status", accessor: "status" },
          ]}
          data={[
            {
              id: "#1001",
              customer: "John Doe",
              product: "Laptop",
              amount: "$1,250",
              status: "✅ Completed",
            },
            {
              id: "#1002",
              customer: "Jane Smith",
              product: "Headphones",
              amount: "$180",
              status: "⏳ Processing",
            },
            {
              id: "#1003",
              customer: "Bob Johnson",
              product: "Monitor",
              amount: "$420",
              status: "🚚 Shipped",
            },
            {
              id: "#1004",
              customer: "Alice Brown",
              product: "Keyboard",
              amount: "$95",
              status: "✅ Completed",
            },
            {
              id: "#1005",
              customer: "Charlie Wilson",
              product: "Mouse",
              amount: "$45",
              status: "📦 Pending",
            },
          ]}
        />
      </section>

      {/* Timeline */}
      <section>
        <h3 className="mb-4 text-lg font-semibold">Project Progress</h3>
        <AITimeline
          items={[
            {
              id: "1",
              title: "Project Kickoff",
              description: "Initial meeting and requirements gathering",
              timestamp: "Jan 15, 2024",
              status: "completed",
            },
            {
              id: "2",
              title: "Design Phase",
              description: "UI/UX design and prototyping completed",
              timestamp: "Jan 22, 2024",
              status: "completed",
            },
            {
              id: "3",
              title: "Development",
              description: "Building core features and functionality",
              timestamp: "Feb 1, 2024",
              status: "current",
            },
            {
              id: "4",
              title: "Testing & QA",
              description: "Quality assurance and bug fixes",
              timestamp: "Feb 12, 2024",
              status: "pending",
            },
            {
              id: "5",
              title: "Launch",
              description: "Production deployment",
              timestamp: "Feb 20, 2024",
              status: "pending",
            },
          ]}
        />
      </section>

      {/* Lists */}
      <section className="space-y-6">
        <h3 className="text-lg font-semibold">Task Management</h3>
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

        <h3 className="text-lg font-semibold">Product Categories</h3>
        <AIList
          variant="grid"
          columns={3}
          items={[
            {
              id: "1",
              title: "Electronics",
              description: "Laptops, phones, tablets and more",
              meta: "234 items",
            },
            {
              id: "2",
              title: "Clothing",
              description: "Fashion for all seasons",
              meta: "567 items",
            },
            {
              id: "3",
              title: "Home & Garden",
              description: "Furniture, decor and essentials",
              meta: "189 items",
            },
            {
              id: "4",
              title: "Sports",
              description: "Equipment and athletic wear",
              meta: "345 items",
            },
            {
              id: "5",
              title: "Books",
              description: "Fiction, non-fiction and more",
              meta: "892 items",
            },
            {
              id: "6",
              title: "Toys",
              description: "Fun for all ages",
              meta: "423 items",
            },
          ]}
        />
      </section>

      {/* Accordion */}
      <section>
        <h3 className="mb-4 text-lg font-semibold">Frequently Asked Questions</h3>
        <AIAccordion
          items={[
            {
              id: "1",
              title: "What is your return policy?",
              content:
                "We offer a 30-day money-back guarantee on all products. Items must be unused and in original packaging. Simply contact our support team to initiate a return.",
            },
            {
              id: "2",
              title: "How long does shipping take?",
              content:
                "Standard shipping takes 5-7 business days within the continental US. Express shipping (2-3 days) and overnight options are available at checkout. International shipping times vary by destination.",
            },
            {
              id: "3",
              title: "Do you ship internationally?",
              content:
                "Yes! We ship to over 50 countries worldwide. International shipping costs and delivery times are calculated at checkout based on your location.",
            },
            {
              id: "4",
              title: "How can I track my order?",
              content:
                "Once your order ships, you'll receive a tracking number via email. You can use this number to track your package on our website or directly with the shipping carrier.",
            },
          ]}
        />
      </section>

      {/* Details */}
      <section>
        <h3 className="mb-4 text-lg font-semibold">Account Information</h3>
        <AIDetails
          layout="grid"
          items={[
            { key: "Full Name", value: "John Doe", icon: <Users className="h-4 w-4" /> },
            { key: "Email", value: "john@example.com", icon: <Mail className="h-4 w-4" /> },
            {
              key: "Phone",
              value: "+1 (555) 123-4567",
              icon: <Phone className="h-4 w-4" />,
            },
            {
              key: "Location",
              value: "San Francisco, CA",
              icon: <MapPin className="h-4 w-4" />,
            },
            { key: "Member Since", value: "January 2024" },
            { key: "Total Orders", value: "24" },
            { key: "Total Spent", value: "$3,450" },
            { key: "Loyalty Points", value: "1,250" },
          ]}
        />
      </section>

      {/* Badges */}
      <section>
        <h3 className="mb-4 text-lg font-semibold">Project Tags</h3>
        <AIBadgeGroup
          badges={[
            { id: "1", label: "React", variant: "info" },
            { id: "2", label: "TypeScript", variant: "info" },
            { id: "3", label: "Tailwind CSS", variant: "info" },
            { id: "4", label: "Vite", variant: "success" },
            { id: "5", label: "In Progress", variant: "warning" },
            { id: "6", label: "High Priority", variant: "error" },
          ]}
        />
      </section>

      {/* Gallery */}
      <section>
        <h3 className="mb-4 text-lg font-semibold">Product Gallery</h3>
        <AIGallery
          columns={3}
          images={[
            { id: "1", url: "/test.png", alt: "Product 1", caption: "Premium Quality" },
            { id: "2", url: "/test.png", alt: "Product 2", caption: "Best Seller" },
            { id: "3", url: "/test.png", alt: "Product 3", caption: "New Arrival" },
            { id: "4", url: "/test.png", alt: "Product 4", caption: "Limited Edition" },
            { id: "5", url: "/test.png", alt: "Product 5", caption: "Customer Favorite" },
            { id: "6", url: "/test.png", alt: "Product 6", caption: "On Sale" },
          ]}
        />
      </section>

      {/* Map */}
      <section>
        <h3 className="mb-4 text-lg font-semibold">Store Location</h3>
        <AIMap
          location={{
            name: "Main Store",
            address: "123 Tech Street, San Francisco, CA 94105",
            coordinates: { lat: 37.7749, lng: -122.4194 },
          }}
        />
      </section>
    </div>
  )
}
