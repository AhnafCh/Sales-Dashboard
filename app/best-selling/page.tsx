"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { SidebarTrigger } from "@/components/ui/sidebar"
import {
  ShoppingBag,
  Star,
  Search,
  TrendingUp,
  Users,
  MessageSquare,
  Zap,
  Globe,
  Headphones,
  Bot,
  BarChart3,
} from "lucide-react"

export default function BestSelling() {
  const [searchTerm, setSearchTerm] = useState("")

  const products = [
    {
      id: 1,
      name: "Premium AI Chat Widget",
      description: "Advanced conversational AI widget with natural language processing",
      price: 299,
      originalPrice: 399,
      sales: 1247,
      rating: 4.8,
      reviews: 324,
      category: "Chat Solutions",
      icon: MessageSquare,
      features: ["Real-time responses", "Multi-language support", "Custom branding"],
      discount: 25,
    },
    {
      id: 2,
      name: "Voice Assistant Integration",
      description: "Seamless voice-to-text and text-to-voice AI assistant",
      price: 499,
      originalPrice: 599,
      sales: 892,
      rating: 4.9,
      reviews: 156,
      category: "Voice Solutions",
      icon: Headphones,
      features: ["Voice recognition", "Natural speech", "Call routing"],
      discount: 17,
    },
    {
      id: 3,
      name: "Multi-Language Support Pack",
      description: "Support for 50+ languages with cultural context awareness",
      price: 199,
      originalPrice: 249,
      sales: 2156,
      rating: 4.7,
      reviews: 543,
      category: "Language Tools",
      icon: Globe,
      features: ["50+ languages", "Cultural context", "Auto-translation"],
      discount: 20,
    },
    {
      id: 4,
      name: "Advanced Analytics Dashboard",
      description: "Comprehensive analytics and reporting for customer interactions",
      price: 399,
      originalPrice: 499,
      sales: 678,
      rating: 4.6,
      reviews: 234,
      category: "Analytics",
      icon: BarChart3,
      features: ["Real-time metrics", "Custom reports", "Data export"],
      discount: 20,
    },
    {
      id: 5,
      name: "Smart Bot Builder",
      description: "Drag-and-drop bot creation with advanced AI capabilities",
      price: 599,
      originalPrice: 799,
      sales: 445,
      rating: 4.8,
      reviews: 189,
      category: "Bot Solutions",
      icon: Bot,
      features: ["Visual builder", "AI training", "Integration APIs"],
      discount: 25,
    },
    {
      id: 6,
      name: "Team Collaboration Suite",
      description: "Enhanced team management and collaboration tools",
      price: 349,
      originalPrice: 449,
      sales: 567,
      rating: 4.5,
      reviews: 123,
      category: "Team Tools",
      icon: Users,
      features: ["Team chat", "Task management", "Performance tracking"],
      discount: 22,
    },
  ]

  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const categories = [
    "All",
    "Chat Solutions",
    "Voice Solutions",
    "Language Tools",
    "Analytics",
    "Bot Solutions",
    "Team Tools",
  ]
  const [selectedCategory, setSelectedCategory] = useState("All")

  const categoryFilteredProducts =
    selectedCategory === "All"
      ? filteredProducts
      : filteredProducts.filter((product) => product.category === selectedCategory)

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

      {/* Stats Overview */}
      <div className="grid md:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Products</CardTitle>
            <ShoppingBag className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{products.length}</div>
            <p className="text-xs text-muted-foreground">
              <TrendingUp className="h-3 w-3 inline mr-1 text-emerald-500" />
              +2 new this month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Sales</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5,985</div>
            <p className="text-xs text-muted-foreground">+18% from last month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg Rating</CardTitle>
            <Star className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4.7</div>
            <p className="text-xs text-muted-foreground">Based on 1,569 reviews</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Revenue</CardTitle>
            <Zap className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$2.1M</div>
            <p className="text-xs text-muted-foreground">This quarter</p>
          </CardContent>
        </Card>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <div className="flex gap-2 flex-wrap">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categoryFilteredProducts.map((product) => (
          <Card key={product.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <product.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">{product.name}</CardTitle>
                    <Badge variant="secondary" className="text-xs mt-1">
                      {product.category}
                    </Badge>
                  </div>
                </div>
                {product.discount > 0 && (
                  <Badge variant="destructive" className="text-xs">
                    -{product.discount}%
                  </Badge>
                )}
              </div>
              <CardDescription className="mt-2">{product.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {/* Features */}
                <div>
                  <h4 className="text-sm font-medium mb-2">Key Features:</h4>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <div className="w-1 h-1 bg-primary rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Rating and Sales */}
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 text-yellow-500 fill-current" />
                    <span className="font-medium">{product.rating}</span>
                    <span className="text-muted-foreground">({product.reviews})</span>
                  </div>
                  <div className="text-muted-foreground">{product.sales} sales</div>
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
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* No Results */}
      {categoryFilteredProducts.length === 0 && (
        <div className="text-center py-12">
          <ShoppingBag className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
          <h3 className="text-lg font-medium mb-2">No products found</h3>
          <p className="text-muted-foreground">Try adjusting your search or filter criteria</p>
        </div>
      )}
    </div>
  )
}
