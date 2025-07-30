"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { SidebarTrigger } from "@/components/ui/sidebar"
import {
  BarChart3,
  TrendingUp,
  TrendingDown,
  Users,
  MessageSquare,
  Clock,
  Target,
  Star,
  Calendar,
  Download,
  Filter,
} from "lucide-react"

export default function Analytics() {
  const [timeRange, setTimeRange] = useState("7d")
  const [selectedMetric, setSelectedMetric] = useState("conversations")

  const overviewStats = {
    totalConversations: { value: 12470, change: 12.5, trend: "up" },
    avgResponseTime: { value: "2.3s", change: -8.2, trend: "down" },
    resolutionRate: { value: "94.2%", change: 2.1, trend: "up" },
    customerSatisfaction: { value: 4.7, change: 0.3, trend: "up" },
  }

  const agentPerformance = [
    { name: "Sales", conversations: 1247, resolution: 94, satisfaction: 4.8, avgTime: "1.2s" },
    { name: "Support", conversations: 2156, resolution: 89, satisfaction: 4.6, avgTime: "1.5s" },
    { name: "Telco", conversations: 892, resolution: 91, satisfaction: 4.7, avgTime: "1.8s" },
    { name: "Onboarding", conversations: 678, resolution: 96, satisfaction: 4.9, avgTime: "1.1s" },
    { name: "AirVoice", conversations: 445, resolution: 78, satisfaction: 4.2, avgTime: "2.3s" },
  ]

  const channelMetrics = [
    { channel: "Web Chat", conversations: 3456, resolution: 92, avgTime: "1.4s", satisfaction: 4.6 },
    { channel: "Email", conversations: 2134, resolution: 88, avgTime: "2.1s", satisfaction: 4.5 },
    { channel: "Phone", conversations: 1789, resolution: 95, avgTime: "1.8s", satisfaction: 4.8 },
    { channel: "Social Media", conversations: 567, resolution: 85, avgTime: "2.5s", satisfaction: 4.3 },
  ]

  const topIssues = [
    { issue: "Billing Questions", count: 1234, trend: "up", change: 15.2 },
    { issue: "Technical Support", count: 987, trend: "down", change: -8.5 },
    { issue: "Account Management", count: 756, trend: "up", change: 23.1 },
    { issue: "Product Information", count: 543, trend: "stable", change: 1.2 },
    { issue: "Refund Requests", count: 432, trend: "down", change: -12.3 },
  ]

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case "up":
        return <TrendingUp className="h-4 w-4 text-emerald-500" />
      case "down":
        return <TrendingDown className="h-4 w-4 text-red-500" />
      default:
        return <div className="h-4 w-4" />
    }
  }

  const getTrendColor = (trend: string) => {
    switch (trend) {
      case "up":
        return "text-emerald-500"
      case "down":
        return "text-red-500"
      default:
        return "text-gray-500"
    }
  }

  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <SidebarTrigger className="-ml-1" />
        <div className="flex-1">
          <h1 className="text-3xl font-bold text-foreground flex items-center gap-2">
            <BarChart3 className="h-8 w-8" />
            Advanced Analytics
          </h1>
          <p className="text-muted-foreground">Comprehensive insights into your AI customer service performance</p>
        </div>
        <div className="flex gap-2">
          <Select value={timeRange} onValueChange={setTimeRange}>
            <SelectTrigger className="w-32">
              <Calendar className="h-4 w-4 mr-2" />
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="24h">Last 24h</SelectItem>
              <SelectItem value="7d">Last 7 days</SelectItem>
              <SelectItem value="30d">Last 30 days</SelectItem>
              <SelectItem value="90d">Last 90 days</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
        </div>
      </div>

      {/* Overview Stats */}
      <div className="grid md:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Conversations</p>
                <p className="text-2xl font-bold">{overviewStats.totalConversations.value.toLocaleString()}</p>
              </div>
              <MessageSquare className="h-8 w-8 text-primary" />
            </div>
            <div className="flex items-center gap-1 mt-2">
              {getTrendIcon(overviewStats.totalConversations.trend)}
              <span className={`text-sm font-medium ${getTrendColor(overviewStats.totalConversations.trend)}`}>
                {overviewStats.totalConversations.change > 0 ? "+" : ""}
                {overviewStats.totalConversations.change}%
              </span>
              <span className="text-sm text-muted-foreground">vs last period</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Avg Response Time</p>
                <p className="text-2xl font-bold">{overviewStats.avgResponseTime.value}</p>
              </div>
              <Clock className="h-8 w-8 text-blue-500" />
            </div>
            <div className="flex items-center gap-1 mt-2">
              {getTrendIcon(overviewStats.avgResponseTime.trend)}
              <span className={`text-sm font-medium ${getTrendColor(overviewStats.avgResponseTime.trend)}`}>
                {overviewStats.avgResponseTime.change}%
              </span>
              <span className="text-sm text-muted-foreground">vs last period</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Resolution Rate</p>
                <p className="text-2xl font-bold">{overviewStats.resolutionRate.value}</p>
              </div>
              <Target className="h-8 w-8 text-emerald-500" />
            </div>
            <div className="flex items-center gap-1 mt-2">
              {getTrendIcon(overviewStats.resolutionRate.trend)}
              <span className={`text-sm font-medium ${getTrendColor(overviewStats.resolutionRate.trend)}`}>
                +{overviewStats.resolutionRate.change}%
              </span>
              <span className="text-sm text-muted-foreground">vs last period</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Customer Satisfaction</p>
                <p className="text-2xl font-bold">{overviewStats.customerSatisfaction.value}/5</p>
              </div>
              <Star className="h-8 w-8 text-yellow-500" />
            </div>
            <div className="flex items-center gap-1 mt-2">
              {getTrendIcon(overviewStats.customerSatisfaction.trend)}
              <span className={`text-sm font-medium ${getTrendColor(overviewStats.customerSatisfaction.trend)}`}>
                +{overviewStats.customerSatisfaction.change}
              </span>
              <span className="text-sm text-muted-foreground">vs last period</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Agent Performance */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              AI Agent Performance
            </CardTitle>
            <CardDescription>Performance metrics for each AI agent</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {agentPerformance.map((agent, index) => (
                <div key={index} className="border rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-semibold">{agent.name}</h4>
                    <Badge variant="outline">{agent.conversations} conversations</Badge>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div>
                      <p className="text-muted-foreground">Resolution Rate</p>
                      <p className="font-medium">{agent.resolution}%</p>
                      <Progress value={agent.resolution} className="h-1 mt-1" />
                    </div>
                    <div>
                      <p className="text-muted-foreground">Satisfaction</p>
                      <div className="flex items-center gap-1">
                        <Star className="h-3 w-3 text-yellow-500 fill-current" />
                        <span className="font-medium">{agent.satisfaction}</span>
                      </div>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Avg Time</p>
                      <p className="font-medium">{agent.avgTime}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Channel Performance */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageSquare className="h-5 w-5" />
              Channel Performance
            </CardTitle>
            <CardDescription>Performance breakdown by communication channel</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {channelMetrics.map((channel, index) => (
                <div key={index} className="border rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-semibold">{channel.channel}</h4>
                    <Badge variant="outline">{channel.conversations} conversations</Badge>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div>
                      <p className="text-muted-foreground">Resolution Rate</p>
                      <p className="font-medium">{channel.resolution}%</p>
                      <Progress value={channel.resolution} className="h-1 mt-1" />
                    </div>
                    <div>
                      <p className="text-muted-foreground">Satisfaction</p>
                      <div className="flex items-center gap-1">
                        <Star className="h-3 w-3 text-yellow-500 fill-current" />
                        <span className="font-medium">{channel.satisfaction}</span>
                      </div>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Avg Time</p>
                      <p className="font-medium">{channel.avgTime}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Top Issues */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Filter className="h-5 w-5" />
            Top Customer Issues
          </CardTitle>
          <CardDescription>Most common issues and their trends</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {topIssues.map((issue, index) => (
              <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                <div className="flex items-center gap-3">
                  <span className="text-sm font-medium text-muted-foreground">#{index + 1}</span>
                  <div>
                    <h4 className="font-semibold">{issue.issue}</h4>
                    <p className="text-sm text-muted-foreground">{issue.count} occurrences</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {getTrendIcon(issue.trend)}
                  <span className={`text-sm font-medium ${getTrendColor(issue.trend)}`}>
                    {issue.change > 0 ? "+" : ""}
                    {issue.change}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
