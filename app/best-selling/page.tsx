"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, Star, TrendingUp, ShoppingCart, Eye, Heart, Share2, Package, DollarSign, Users } from "lucide-react"

export default function BestSellingProducts() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")

  const [bestSellers] = useState([
    {
      id: 1,
      name: "Premium AI Chat Widget",
      category: "Widgets",
      price: 299,
      sales: 1247,
      rating: 4.8,
      reviews: 324,
      image: "/placeholder.svg?height=200&width=200",
      description: "Advanced AI-powered chat widget with customizable themes and real-time analytics.",
      trending: true,
      featured: true,
    },
    {
      id: 2,
      name: "Voice Assistant Integration",
      category: "Integrations",
      price: 499,
      sales: 892,
      rating: 4.9,
      reviews: 156,
      image: "/placeholder.svg?height=200&width=200",
      description: "Seamless voice assistant integration for hands-free customer support.",
      trending: true,
      featured: false,
    },
    {
      id: 3,
      name: "Multi-Language Support Pack",
      category: "Add-ons",
      price: 199,
      sales: 2156,
      rating: 4.7,
      reviews: 445,
      image: "/placeholder.svg?height=200&width=200",
      description: "Support for 50+ languages with automatic translation capabilities.",
      trending: false,
      featured: true,
    },
    {
      id: 4,
      name: "Advanced Analytics Dashboard",
      category: "Analytics",
      price: 399,
      sales: 756,
      rating: 4.6,
      reviews: 189,
      image: "/placeholder.svg?height=200&width=200",
      description: "Comprehensive analytics with custom reports and data visualization.",
      trending: false,
      featured: false,
    },
    {
      id: 5,
      name: "CRM Integration Suite",
      category: "Integrations",
      price: 599,
      sales: 634,
      rating: 4.8,
      reviews: 98,
      image: "/placeholder.svg?height=200&width=200",
      description: "Connect with popular CRM systems like Salesforce, HubSpot, and more.",
      trending: true,
      featured: false,
    },
    {
      id: 6,
      name: "Custom Branding Package",
      category: "Customization",
      price: 149,
      sales: 1834,
      rating: 4.5,
      reviews: 267,
      image: "/placeholder.svg?height=200&width=200",
      description: "White-label solution with custom branding and styling options.",
      trending: false,
      featured: true,
    },
  ])

  const [categories] = useState([
    { id: "all", name: "All Products", count: 6 },
    { id: "widgets", name: "Widgets", count: 1 },
    { id: "integrations", name: "Integrations", count: 2 },
    { id: "add-ons", name: "Add-ons", count: 1 },
    { id: "analytics", name: "Analytics", count: 1 },
    { id: "customization", name: "Customization", count: 1 },
  ])

  const filteredProducts = bestSellers.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "all" || product.category.toLowerCase() === selectedCategory
    return matchesSearch && matchesCategory
  })

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < Math.floor(rating) ? "text-yellow-400 fill-current" : "text-gray-300"}`}
      />
    ))
  }

  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground">Best Selling Products</h1>
        <p className="text-muted-foreground">Discover our most popular AI customer service solutions</p>
      </div>

      {/* Stats Overview */}
      <div className="grid md:grid-cols-4 gap-4 mb-6">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Products</p>
                <p className="text-2xl font-bold">24</p>
              </div>
              <Package className="h-8 w-8 text-primary" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Sales</p>
                <p className="text-2xl font-bold">8,519</p>
              </div>
              <ShoppingCart className="h-8 w-8 text-emerald-400" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Revenue</p>
                <p className="text-2xl font-bold">$2.8M</p>
              </div>
              <DollarSign className="h-8 w-8 text-purple-400" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Avg Rating</p>
                <p className="text-2xl font-bold">4.7</p>
              </div>
              <Star className="h-8 w-8 text-yellow-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Search and Filters */}
      <Card className="mb-6">
        <CardContent className="p-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search products..."
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            <div className="flex gap-2">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category.id)}
                >
                  {category.name} ({category.count})
                </Button>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="grid" className="space-y-6">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="grid">Grid View</TabsTrigger>
          <TabsTrigger value="list">List View</TabsTrigger>
        </TabsList>

        <TabsContent value="grid" className="space-y-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-2 left-2 flex gap-2">
                    {product.featured && <Badge className="bg-purple-100 text-purple-800">Featured</Badge>}
                    {product.trending && (
                      <Badge className="bg-emerald-900/40 text-emerald-300">
                        <TrendingUp className="w-3 h-3 mr-1" />
                        Trending
                      </Badge>
                    )}
                  </div>
                  <div className="absolute top-2 right-2 flex gap-2">
                    <Button size="sm" variant="secondary" className="h-8 w-8 p-0">
                      <Heart className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="secondary" className="h-8 w-8 p-0">
                      <Share2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-lg">{product.name}</CardTitle>
                      <Badge variant="outline" className="mt-1">
                        {product.category}
                      </Badge>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-emerald-400">${product.price}</div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-4">{product.description}</p>

                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex">{renderStars(product.rating)}</div>
                    <span className="text-sm font-medium">{product.rating}</span>
                    <span className="text-sm text-muted-foreground">({product.reviews} reviews)</span>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">{product.sales} sales</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Eye className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">View Details</span>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button className="flex-1">
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Purchase
                    </Button>
                    <Button variant="outline">
                      <Eye className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="list" className="space-y-6">
          <Card>
            <CardContent className="p-0">
              <div className="space-y-0">
                {filteredProducts.map((product) => (
                  <div key={product.id} className="flex items-center gap-4 p-6 border-b hover:bg-muted/30">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="font-semibold text-lg">{product.name}</h3>
                          <div className="flex items-center gap-2 mt-1">
                            <Badge variant="outline">{product.category}</Badge>
                            {product.featured && <Badge className="bg-purple-100 text-purple-800">Featured</Badge>}
                            {product.trending && (
                              <Badge className="bg-emerald-900/40 text-emerald-300">
                                <TrendingUp className="w-3 h-3 mr-1" />
                                Trending
                              </Badge>
                            )}
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-emerald-400">${product.price}</div>
                          <div className="text-sm text-muted-foreground">{product.sales} sales</div>
                        </div>
                      </div>

                      <p className="text-muted-foreground text-sm mb-3">{product.description}</p>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-2">
                            <div className="flex">{renderStars(product.rating)}</div>
                            <span className="text-sm font-medium">{product.rating}</span>
                            <span className="text-sm text-muted-foreground">({product.reviews})</span>
                          </div>
                        </div>

                        <div className="flex gap-2">
                          <Button size="sm" variant="outline">
                            <Eye className="h-4 w-4 mr-2" />
                            View
                          </Button>
                          <Button size="sm">
                            <ShoppingCart className="h-4 w-4 mr-2" />
                            Purchase
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Featured Products Section */}
      <Card>
        <CardHeader>
          <CardTitle>Featured This Month</CardTitle>
          <CardDescription>Hand-picked products with special offers</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4">
            {filteredProducts
              .filter((p) => p.featured)
              .slice(0, 3)
              .map((product) => (
                <div key={product.id} className="p-4 border rounded-lg">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-32 object-cover rounded-lg mb-3"
                  />
                  <h4 className="font-semibold mb-2">{product.name}</h4>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      {renderStars(product.rating).slice(0, 5)}
                      <span className="text-sm ml-1">{product.rating}</span>
                    </div>
                    <span className="font-bold text-emerald-400">${product.price}</span>
                  </div>
                </div>
              ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
