"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { SidebarTrigger } from "@/components/ui/sidebar"
import {
  Eye,
  MessageSquare,
  Users,
  Clock,
  AlertTriangle,
  CheckCircle,
  Phone,
  Mail,
  Globe,
  Zap,
  TrendingUp,
  Activity,
} from "lucide-react"

export default function LiveMonitoring() {
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const activeConversations = [
    {
      id: "conv-001",
      customer: "Sarah Johnson",
      agent: "Sales",
      channel: "Web Chat",
      duration: "00:03:45",
      status: "active",
      priority: "high",
      lastMessage: "I need help with pricing for the enterprise plan...",
      sentiment: "neutral",
    },
    {
      id: "conv-002",
      customer: "Mike Chen",
      agent: "Support",
      channel: "Email",
      duration: "00:12:30",
      status: "waiting",
      priority: "medium",
      lastMessage: "The integration is not working as expected...",
      sentiment: "negative",
    },
    {
      id: "conv-003",
      customer: "Emma Davis",
      agent: "Onboarding",
      channel: "Phone",
      duration: "00:07:22",
      status: "active",
      priority: "low",
      lastMessage: "Thank you for the detailed explanation...",
      sentiment: "positive",
    },
    {
      id: "conv-004",
      customer: "Alex Rodriguez",
      agent: "Telco",
      channel: "Web Chat",
      duration: "00:01:15",
      status: "escalated",
      priority: "urgent",
      lastMessage: "This is the third time I'm contacting about this issue...",
      sentiment: "negative",
    },
    {
      id: "conv-005",
      customer: "Lisa Wang",
      agent: "AirVoice",
      channel: "Voice",
      duration: "00:05:33",
      status: "active",
      priority: "medium",
      lastMessage: "Voice transcription in progress...",
      sentiment: "neutral",
    },
  ]

  const systemMetrics = {
    totalConversations: 1247,
    activeAgents: 5,
    avgResponseTime: "2.3s",
    resolutionRate: 94.2,
    customerSatisfaction: 4.7,
    systemLoad: 67,
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-emerald-500"
      case "waiting":
        return "bg-yellow-500"
      case "escalated":
        return "bg-red-500"
      default:
        return "bg-gray-500"
    }
  }

  const getStatusVariant = (status: string) => {
    switch (status) {
      case "active":
        return "default"
      case "waiting":
        return "secondary"
      case "escalated":
        return "destructive"
      default:
        return "outline"
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "urgent":
        return "text-red-500"
      case "high":
        return "text-orange-500"
      case "medium":
        return "text-yellow-500"
      case "low":
        return "text-green-500"
      default:
        return "text-gray-500"
    }
  }

  const getSentimentColor = (sentiment: string) => {
    switch (sentiment) {
      case "positive":
        return "text-emerald-500"
      case "negative":
        return "text-red-500"
      case "neutral":
        return "text-gray-500"
      default:
        return "text-gray-500"
    }
  }

  const getChannelIcon = (channel: string) => {
    switch (channel) {
      case "Web Chat":
        return MessageSquare
      case "Email":
        return Mail
      case "Phone":
        return Phone
      case "Voice":
        return Phone
      default:
        return Globe
    }
  }

  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <SidebarTrigger className="-ml-1" />
        <div>
          <h1 className="text-3xl font-bold text-foreground flex items-center gap-2">
            <Eye className="h-8 w-8" />
            Live Monitoring Workspace
          </h1>
          <p className="text-muted-foreground">
            Real-time monitoring of AI agents and customer interactions - {currentTime.toLocaleTimeString()}
          </p>
        </div>
      </div>

      {/* System Overview */}
      <div className="grid md:grid-cols-6 gap-4 mb-8">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Conversations</p>
                <p className="text-2xl font-bold">{systemMetrics.totalConversations}</p>
              </div>
              <MessageSquare className="h-8 w-8 text-primary" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Active Agents</p>
                <p className="text-2xl font-bold">{systemMetrics.activeAgents}</p>
              </div>
              <Users className="h-8 w-8 text-emerald-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Avg Response</p>
                <p className="text-2xl font-bold">{systemMetrics.avgResponseTime}</p>
              </div>
              <Clock className="h-8 w-8 text-blue-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Resolution Rate</p>
                <p className="text-2xl font-bold">{systemMetrics.resolutionRate}%</p>
              </div>
              <CheckCircle className="h-8 w-8 text-emerald-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Satisfaction</p>
                <p className="text-2xl font-bold">{systemMetrics.customerSatisfaction}/5</p>
              </div>
              <TrendingUp className="h-8 w-8 text-yellow-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">System Load</p>
                <p className="text-2xl font-bold">{systemMetrics.systemLoad}%</p>
              </div>
              <Activity className="h-8 w-8 text-orange-500" />
            </div>
            <Progress value={systemMetrics.systemLoad} className="mt-2 h-1" />
          </CardContent>
        </Card>
      </div>

      {/* Active Conversations */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageSquare className="h-5 w-5" />
            Active Conversations
          </CardTitle>
          <CardDescription>Real-time view of ongoing customer interactions</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {activeConversations.map((conversation) => {
              const ChannelIcon = getChannelIcon(conversation.channel)
              return (
                <div key={conversation.id} className="border rounded-lg p-4 hover:bg-muted/50 transition-colors">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className={`w-3 h-3 rounded-full ${getStatusColor(conversation.status)}`} />
                      <div>
                        <h4 className="font-semibold">{conversation.customer}</h4>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <ChannelIcon className="h-4 w-4" />
                          <span>{conversation.channel}</span>
                          <span>•</span>
                          <span>Agent: {conversation.agent}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant={getStatusVariant(conversation.status)}>{conversation.status}</Badge>
                      <span className={`text-sm font-medium ${getPriorityColor(conversation.priority)}`}>
                        {conversation.priority.toUpperCase()}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <p className="text-sm text-muted-foreground mb-1">Last message:</p>
                      <p className="text-sm">{conversation.lastMessage}</p>
                    </div>
                    <div className="flex items-center gap-4 ml-4">
                      <div className="text-center">
                        <p className="text-xs text-muted-foreground">Duration</p>
                        <p className="text-sm font-mono">{conversation.duration}</p>
                      </div>
                      <div className="text-center">
                        <p className="text-xs text-muted-foreground">Sentiment</p>
                        <p className={`text-sm font-medium ${getSentimentColor(conversation.sentiment)}`}>
                          {conversation.sentiment}
                        </p>
                      </div>
                      <Button size="sm" variant="outline">
                        Take Over
                      </Button>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <div className="flex gap-4">
        <Button className="flex items-center gap-2">
          <AlertTriangle className="h-4 w-4" />
          View Alerts
        </Button>
        <Button variant="outline" className="flex items-center gap-2 bg-transparent">
          <Zap className="h-4 w-4" />
          System Health
        </Button>
        <Button variant="outline" className="flex items-center gap-2 bg-transparent">
          <Users className="h-4 w-4" />
          Agent Performance
        </Button>
      </div>
    </div>
  )
}
