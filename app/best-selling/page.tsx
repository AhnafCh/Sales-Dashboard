"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { SidebarTrigger } from "@/components/ui/sidebar"
import {
  ShoppingBag,
  Star,
  Search,
  Filter,
  TrendingUp,
  MessageSquare,
  Zap,
  Globe,
  Headphones,
  BarChart3,
  Shield,
} from "lucide-react"

export default function BestSellingProducts() {
  const [searchTerm, setSearchTerm] = useState("")
  const [categoryFilter, setCategoryFilter] = useState("all")
  const [sortBy, setSortBy] = useState("sales")

  const products = [
    {
      id: 1,
      name: "Premium AI Chat Widget",
      description: "Advanced conversational AI widget with natural language processing and multi-language support",
      price: 299,
      originalPrice: 399,
      sales: 1247,
      rating: 4.8,
      reviews: 324,
      category: "widgets",
      features: ["Multi-language", "24/7 Support", "Custom Branding", "Analytics"],
      badge: "Best Seller",
      icon: MessageSquare,
    },
    {
      id: 2,
      name: "Voice Assistant Integration",
      description: "Seamless voice-to-text and text-to-voice capabilities for enhanced customer interactions",
      price: 499,
      originalPrice: 599,
      sales: 892,
      rating: 4.9,
      reviews: 156,
      category: "integrations",
      features: ["Voice Recognition", "Text-to-Speech", "Multiple Accents", "Real-time Processing"],
      badge: "Premium",
      icon: Headphones,
    },
    {
      id: 3,
      name: "Multi-Language Support Pack",
      description: "Comprehensive language pack supporting 50+ languages with cultural context awareness",
      price: 199,
      originalPrice: 249,
      sales: 2156,
      rating: 4.7,
      reviews: 543,
      category: "language",
      features: ["50+ Languages", "Cultural Context", "Auto-Detection", "Translation API"],
      badge: "Popular",
      icon: Globe,
    },
    {
      id: 4,
      name: "Advanced Analytics Dashboard",
      description: "Comprehensive analytics and reporting tools for customer service performance tracking",
      price: 399,
      originalPrice: 499,
      sales: 678,
      rating: 4.6,
      reviews: 234,
      category: "analytics",
      features: ["Real-time Reports", "Custom Metrics", "Data Export", "Predictive Analytics"],
      badge: "New",
      icon: BarChart3,
    },
    {
      id: 5,
      name: "Enterprise Security Suite",
      description: "Advanced security features including encryption, audit logs, and compliance tools",
      price: 799,
      originalPrice: 999,
      sales: 445,
      rating: 4.9,
      reviews: 89,
      category: "security",
      features: ["End-to-End Encryption", "Audit Logs", "Compliance Tools", "SSO Integration"],
      badge: "Enterprise",
      icon: Shield,
    },
    {
      id: 6,
      name: "AI Performance Optimizer",
      description: "Intelligent system optimization for improved response times and accuracy",
      price: 349,
      originalPrice: 449,
      sales: 567,
      rating: 4.5,
      reviews: 178,
      category: "optimization",
      features: ["Auto-Optimization", "Performance Monitoring", "Resource Management", "Scalability"],
      badge: "Trending",
      icon: Zap,
    },
  ]

  const categories = [
    { value: "all", label: "All Categories" },
    { value: "widgets", label: "Widgets" },
    { value: "integrations", label: "Integrations" },
    { value: "language", label: "Language" },
    { value: "analytics", label: "Analytics" },
    { value: "security", label: "Security" },
    { value: "optimization", label: "Optimization" },
  ]

  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = categoryFilter === "all" || product.category === categoryFilter
    return matchesSearch && matchesCategory
  })

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "sales":
        return b.sales - a.sales
      case "rating":
        return b.rating - a.rating
      case "price-low":
        return a.price - b.price
      case "price-high":
        return b.price - a.price
      default:
        return 0
    }
  })

  const getBadgeVariant = (badge: string) => {
    switch (badge) {
      case "Best Seller":
        return "default"
      case "Premium":
        return "secondary"
      case "Popular":
        return "outline"
      case "New":
        return "destructive"
      case "Enterprise":
        return "default"
      case "Trending":
        return "secondary"
      default:
        return "outline"
    }
  }

  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <SidebarTrigger className="-ml-1" />
        <div>
          <h1 className="text-3xl font-bold text-foreground flex items-center gap-2">
            <ShoppingBag className="h-8 w-8" />
            Best Selling Products
          </h1>
          <p className="text-muted-foreground">Discover our most popular AI solutions and add-ons</p>
        </div>
      </div>

      {/* Filters and Search */}
      <Card className="mb-6">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <div className="flex gap-4">
              <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                <SelectTrigger className="w-48">
                  <Filter className="h-4 w-4 mr-2" />
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category.value} value={category.value}>
                      {category.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-48">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="sales">Sort by Sales</SelectItem>
                  <SelectItem value="rating">Sort by Rating</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Products Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sortedProducts.map((product) => {
          const IconComponent = product.icon
          return (
            <Card key={product.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{product.name}</CardTitle>
                      <Badge variant={getBadgeVariant(product.badge)} className="mt-1">
                        {product.badge}
                      </Badge>
                    </div>
                  </div>
                </div>
                <CardDescription className="mt-2">{product.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Features */}
                <div className="flex flex-wrap gap-1">
                  {product.features.map((feature, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {feature}
                    </Badge>
                  ))}
                </div>

                {/* Rating and Reviews */}
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 text-yellow-500 fill-current" />
                    <span className="font-medium">{product.rating}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">({product.reviews} reviews)</span>
                  <div className="flex items-center gap-1 ml-auto">
                    <TrendingUp className="h-3 w-3 text-emerald-500" />
                    <span className="text-sm text-muted-foreground">{product.sales} sales</span>
                  </div>
                </div>

                {/* Pricing */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-primary">${product.price}</span>
                    {product.originalPrice > product.price && (
                      <span className="text-sm text-muted-foreground line-through">${product.originalPrice}</span>
                    )}
                  </div>
                  <Button>Add to Cart</Button>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Results Summary */}
      <div className="text-center text-muted-foreground mt-8">
        Showing {sortedProducts.length} of {products.length} products
      </div>
    </div>
  )
}
