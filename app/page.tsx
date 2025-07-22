"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { SidebarTrigger } from "@/components/ui/sidebar"
import {
  MessageSquare,
  Settings,
  Users,
  BarChart3,
  Phone,
  Globe,
  Zap,
  TrendingUp,
  Clock,
  CheckCircle,
  ShoppingBag,
  Star,
} from "lucide-react"
import Link from "next/link"

export default function Dashboard() {
  const [alerts] = useState([
    { id: 1, type: "urgent", message: "AI Agent 3 experiencing high error rate", time: "2 min ago" },
    { id: 2, type: "warning", message: "Knowledge base update required for Facebook channel", time: "15 min ago" },
  ])

  const agentStats = [
    { id: 1, name: "Sales", status: "active", conversations: 24, tokens: 85, performance: 94 },
    { id: 2, name: "Telco", status: "active", conversations: 18, tokens: 72, performance: 91 },
    { id: 3, name: "Onboarding", status: "active", conversations: 12, tokens: 68, performance: 96 },
    { id: 4, name: "AirVoice", status: "warning", conversations: 8, tokens: 45, performance: 78 },
    { id: 5, name: "Support", status: "active", conversations: 31, tokens: 91, performance: 89 },
  ]

  const bestSellingProducts = [
    { name: "Premium AI Chat Widget", price: 299, sales: 1247, rating: 4.8 },
    { name: "Voice Assistant Integration", price: 499, sales: 892, rating: 4.9 },
    { name: "Multi-Language Support Pack", price: 199, sales: 2156, rating: 4.7 },
  ]

  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      {/* Header with Sidebar Trigger */}
      <div className="flex items-center gap-4 mb-8">
        <SidebarTrigger className="-ml-1" />
        <div>
          <h1 className="text-3xl font-bold text-foreground">UniSense AI Dashboard</h1>
          <p className="text-muted-foreground">Manage your AI customer service operations</p>
        </div>
      </div>

      {/* Primary Navigation Cards */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Link href="/channel-management">
          <Card className="cursor-pointer hover:shadow-lg transition-shadow border-2 hover:border-primary">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Settings className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-xl">Channel Management</CardTitle>
                  <CardDescription>Connect platforms, manage knowledge bases, and configure AI agents</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <span>5 channels connected</span>
                <span>3 pending knowledge updates</span>
              </div>
            </CardContent>
          </Card>
        </Link>

        <Link href="/human-takeover">
          <Card className="cursor-pointer hover:shadow-lg transition-shadow border-2 hover:border-accent/50">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-accent/10 rounded-lg">
                  <Users className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <CardTitle className="text-xl">Human Takeover Mode</CardTitle>
                  <CardDescription>Direct access to conversations requiring immediate intervention</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <span>7 active takeovers</span>
                <Badge variant="destructive">3 urgent</Badge>
              </div>
            </CardContent>
          </Card>
        </Link>
      </div>

      {/* AI Agents Overview - Central Hub */}
      <Card className="mb-8">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-2xl">AI Agents Overview</CardTitle>
              <CardDescription>Real-time status and performance monitoring</CardDescription>
            </div>
            <div className="flex gap-2">
              <Link href="/live-monitoring">
                <Button variant="outline" size="sm">
                  <MessageSquare className="h-4 w-4 mr-2" />
                  Live Monitoring
                </Button>
              </Link>
              <Link href="/analytics">
                <Button variant="outline" size="sm">
                  <BarChart3 className="h-4 w-4 mr-2" />
                  Analytics
                </Button>
              </Link>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-5 gap-4">
            {agentStats.map((agent) => (
              <Card key={agent.id} className="relative">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-sm font-medium">{agent.name}</CardTitle>
                    <Badge variant={agent.status === "active" ? "success" : "warning"} className="text-xs">
                      {agent.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-xs text-muted-foreground mb-1">
                        <span>Active Conversations</span>
                        <span>{agent.conversations}</span>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs text-muted-foreground mb-1">
                        <span>Token Usage</span>
                        <span>{agent.tokens}%</span>
                      </div>
                      <Progress value={agent.tokens} className="h-2 bg-muted" />
                    </div>
                    <div>
                      <div className="flex justify-between text-xs text-muted-foreground mb-1">
                        <span>Performance</span>
                        <span>{agent.performance}%</span>
                      </div>
                      <Progress value={agent.performance} className="h-2 bg-muted" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Quick Stats Grid */}
      <div className="grid md:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Conversations</CardTitle>
            <MessageSquare className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,247</div>
            <p className="text-xs text-muted-foreground">
              <TrendingUp className="h-3 w-3 inline mr-1 text-success" />
              +12% from last hour
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Calls</CardTitle>
            <Phone className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">23</div>
            <p className="text-xs text-muted-foreground">
              <Clock className="h-3 w-3 inline mr-1" />
              Avg 4.2min wait
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Resolution Rate</CardTitle>
            <CheckCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">94.2%</div>
            <p className="text-xs text-muted-foreground">
              <TrendingUp className="h-3 w-3 inline mr-1 text-success" />
              +2.1% from yesterday
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">System Health</CardTitle>
            <Zap className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-success">Optimal</div>
            <p className="text-xs text-muted-foreground">
              <Globe className="h-3 w-3 inline mr-1" />
              All systems operational
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Best Selling Products Section */}
      <Card className="mb-8">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-2xl flex items-center gap-2">
                <ShoppingBag className="h-6 w-6" />
                Best Selling Products
              </CardTitle>
              <CardDescription>Popular AI solutions and add-ons</CardDescription>
            </div>
            <Link href="/best-selling">
              <Button variant="outline" size="sm">
                View All Products
              </Button>
            </Link>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4">
            {bestSellingProducts.map((product, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="font-semibold text-sm">{product.name}</h4>
                    <Badge variant="secondary" className="text-xs">
                      {product.sales} sales
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <Star className="h-3 w-3 text-accent fill-current" />
                      <span className="text-sm font-medium">{product.rating}</span>
                    </div>
                    <span className="text-lg font-bold text-primary">${product.price}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <div className="flex gap-4">
        <Link href="/live-monitoring">
          <Button className="flex items-center gap-2">
            <MessageSquare className="h-4 w-4" />
            Live Monitoring Workspace
          </Button>
        </Link>
        <Link href="/analytics">
          <Button variant="outline" className="flex items-center gap-2 bg-transparent">
            <BarChart3 className="h-4 w-4" />
            Advanced Analytics
          </Button>
        </Link>
        <Link href="/quick-operations">
          <Button variant="outline" className="flex items-center gap-2 bg-transparent">
            <Settings className="h-4 w-4" />
            Quick Operations
          </Button>
        </Link>
      </div>
    </div>
  )
}
