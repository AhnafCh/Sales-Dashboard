"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { SidebarTrigger } from "@/components/ui/sidebar"
import {
  BarChart3,
  TrendingUp,
  TrendingDown,
  MessageSquare,
  Clock,
  Star,
  Download,
  Calendar,
  Filter,
} from "lucide-react"

export default function Analytics() {
  const metrics = [
    {
      title: "Total Conversations",
      value: "12,847",
      change: "+12.5%",
      trend: "up",
      icon: MessageSquare,
    },
    {
      title: "Customer Satisfaction",
      value: "4.8/5",
      change: "+0.2",
      trend: "up",
      icon: Star,
    },
    {
      title: "Avg Response Time",
      value: "1.2s",
      change: "-0.3s",
      trend: "up",
      icon: Clock,
    },
    {
      title: "Resolution Rate",
      value: "94.2%",
      change: "+2.1%",
      trend: "up",
      icon: TrendingUp,
    },
  ]

  const agentPerformance = [
    { name: "Sales AI", conversations: 3247, satisfaction: 4.9, responseTime: "0.8s", efficiency: 96 },
    { name: "Support AI", conversations: 2891, satisfaction: 4.7, responseTime: "1.1s", efficiency: 94 },
    { name: "Telco AI", conversations: 2156, satisfaction: 4.8, responseTime: "0.9s", efficiency: 95 },
    { name: "Onboarding AI", conversations: 1847, satisfaction: 4.9, responseTime: "1.0s", efficiency: 97 },
    { name: "AirVoice AI", conversations: 1234, satisfaction: 4.5, responseTime: "1.8s", efficiency: 89 },
  ]

  const channelStats = [
    { channel: "Website Chat", volume: 45, satisfaction: 4.8, color: "bg-blue-500" },
    { channel: "Email", volume: 28, satisfaction: 4.6, color: "bg-emerald-500" },
    { channel: "Phone", volume: 18, satisfaction: 4.9, color: "bg-purple-500" },
    { channel: "Social Media", volume: 9, satisfaction: 4.4, color: "bg-orange-500" },
  ]

  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <SidebarTrigger className="-ml-1" />
          <div>
            <h1 className="text-3xl font-bold text-foreground flex items-center gap-2">
              <BarChart3 className="h-8 w-8" />
              Analytics Dashboard
            </h1>
            <p className="text-muted-foreground">Comprehensive insights into your customer service performance</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <Calendar className="h-4 w-4 mr-2" />
            Last 30 Days
          </Button>
          <Button variant="outline" size="sm">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid md:grid-cols-4 gap-6 mb-8">
        {metrics.map((metric, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{metric.title}</CardTitle>
              <metric.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{metric.value}</div>
              <p className="text-xs text-muted-foreground flex items-center">
                {metric.trend === "up" ? (
                  <TrendingUp className="h-3 w-3 inline mr-1 text-emerald-500" />
                ) : (
                  <TrendingDown className="h-3 w-3 inline mr-1 text-red-500" />
                )}
                {metric.change} from last month
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Charts Row */}
      <div className="grid lg:grid-cols-2 gap-6 mb-8">
        {/* Conversation Volume Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Conversation Volume</CardTitle>
            <CardDescription>Daily conversation trends over the last 30 days</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64 flex items-end justify-between gap-2">
              {Array.from({ length: 30 }, (_, i) => {
                const height = Math.random() * 80 + 20
                return (
                  <div
                    key={i}
                    className="bg-primary rounded-t flex-1 transition-all hover:bg-primary/80"
                    style={{ height: `${height}%` }}
                    title={`Day ${i + 1}: ${Math.floor(height * 10)} conversations`}
                  />
                )
              })}
            </div>
          </CardContent>
        </Card>

        {/* Channel Distribution */}
        <Card>
          <CardHeader>
            <CardTitle>Channel Distribution</CardTitle>
            <CardDescription>Conversation volume by communication channel</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {channelStats.map((stat, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium">{stat.channel}</span>
                    <div className="flex items-center gap-2">
                      <span>{stat.volume}%</span>
                      <div className="flex items-center gap-1">
                        <Star className="h-3 w-3 text-yellow-500 fill-current" />
                        <span className="text-xs">{stat.satisfaction}</span>
                      </div>
                    </div>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div
                      className={`h-2 rounded-full ${stat.color} transition-all`}
                      style={{ width: `${stat.volume}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Agent Performance */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-2xl">AI Agent Performance</CardTitle>
          <CardDescription>Detailed performance metrics for each AI agent</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {agentPerformance.map((agent, index) => (
              <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <MessageSquare className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">{agent.name}</h4>
                    <p className="text-sm text-muted-foreground">
                      {agent.conversations.toLocaleString()} conversations handled
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-8">
                  <div className="text-center">
                    <p className="text-sm font-medium flex items-center gap-1">
                      <Star className="h-3 w-3 text-yellow-500 fill-current" />
                      {agent.satisfaction}
                    </p>
                    <p className="text-xs text-muted-foreground">Satisfaction</p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm font-medium">{agent.responseTime}</p>
                    <p className="text-xs text-muted-foreground">Response Time</p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm font-medium">{agent.efficiency}%</p>
                    <p className="text-xs text-muted-foreground">Efficiency</p>
                  </div>
                  <div className="w-24">
                    <Progress value={agent.efficiency} className="h-2" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Additional Insights */}
      <div className="grid lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Peak Hours</CardTitle>
            <CardDescription>Busiest times for customer support</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm">9:00 AM - 11:00 AM</span>
                <Badge>Peak</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">2:00 PM - 4:00 PM</span>
                <Badge variant="secondary">High</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">7:00 PM - 9:00 PM</span>
                <Badge variant="outline">Medium</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Top Issues</CardTitle>
            <CardDescription>Most common customer inquiries</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm">Billing Questions</span>
                <span className="text-sm text-muted-foreground">34%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Technical Support</span>
                <span className="text-sm text-muted-foreground">28%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Account Access</span>
                <span className="text-sm text-muted-foreground">22%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Feature Requests</span>
                <span className="text-sm text-muted-foreground">16%</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Customer Sentiment</CardTitle>
            <CardDescription>Overall sentiment analysis</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm">Positive</span>
                <div className="flex items-center gap-2">
                  <div className="w-16 bg-muted rounded-full h-2">
                    <div className="bg-emerald-500 h-2 rounded-full" style={{ width: "68%" }} />
                  </div>
                  <span className="text-sm text-muted-foreground">68%</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Neutral</span>
                <div className="flex items-center gap-2">
                  <div className="w-16 bg-muted rounded-full h-2">
                    <div className="bg-yellow-500 h-2 rounded-full" style={{ width: "24%" }} />
                  </div>
                  <span className="text-sm text-muted-foreground">24%</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Negative</span>
                <div className="flex items-center gap-2">
                  <div className="w-16 bg-muted rounded-full h-2">
                    <div className="bg-red-500 h-2 rounded-full" style={{ width: "8%" }} />
                  </div>
                  <span className="text-sm text-muted-foreground">8%</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
