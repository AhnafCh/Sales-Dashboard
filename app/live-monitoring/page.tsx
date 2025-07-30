"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { SidebarTrigger } from "@/components/ui/sidebar"
import {
  Monitor,
  MessageSquare,
  Users,
  Clock,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  Phone,
  Mail,
  Globe,
  Pause,
  Play,
  RefreshCw,
} from "lucide-react"

export default function LiveMonitoring() {
  const [isLive, setIsLive] = useState(true)
  const [lastUpdate, setLastUpdate] = useState(new Date())

  useEffect(() => {
    if (isLive) {
      const interval = setInterval(() => {
        setLastUpdate(new Date())
      }, 5000)
      return () => clearInterval(interval)
    }
  }, [isLive])

  const conversations = [
    {
      id: 1,
      customer: "Sarah Johnson",
      agent: "Sales AI",
      channel: "Website Chat",
      status: "active",
      duration: "00:03:24",
      sentiment: "positive",
      priority: "normal",
      lastMessage: "I'm interested in your premium package...",
    },
    {
      id: 2,
      customer: "Mike Chen",
      agent: "Support AI",
      channel: "Email",
      status: "waiting",
      duration: "00:01:45",
      sentiment: "neutral",
      priority: "high",
      lastMessage: "My account seems to be locked...",
    },
    {
      id: 3,
      customer: "Emma Davis",
      agent: "Telco AI",
      channel: "Phone",
      status: "active",
      duration: "00:07:12",
      sentiment: "negative",
      priority: "urgent",
      lastMessage: "This is the third time I'm calling about this issue...",
    },
    {
      id: 4,
      customer: "Alex Rodriguez",
      agent: "Onboarding AI",
      channel: "Website Chat",
      status: "resolved",
      duration: "00:12:33",
      sentiment: "positive",
      priority: "normal",
      lastMessage: "Thank you for the help! Everything is working now.",
    },
  ]

  const agentMetrics = [
    { name: "Sales", active: 12, queue: 3, avgResponse: "1.2s", satisfaction: 94 },
    { name: "Support", active: 8, queue: 7, avgResponse: "2.1s", satisfaction: 89 },
    { name: "Telco", active: 15, queue: 2, avgResponse: "0.8s", satisfaction: 92 },
    { name: "Onboarding", active: 6, queue: 1, avgResponse: "1.5s", satisfaction: 96 },
    { name: "AirVoice", active: 4, queue: 5, avgResponse: "3.2s", satisfaction: 78 },
  ]

  const getSentimentColor = (sentiment: string) => {
    switch (sentiment) {
      case "positive":
        return "text-emerald-500"
      case "negative":
        return "text-red-500"
      default:
        return "text-yellow-500"
    }
  }

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case "urgent":
        return <Badge variant="destructive">Urgent</Badge>
      case "high":
        return <Badge className="bg-orange-500 hover:bg-orange-600">High</Badge>
      default:
        return <Badge variant="secondary">Normal</Badge>
    }
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return <Badge className="bg-emerald-500 hover:bg-emerald-600">Active</Badge>
      case "waiting":
        return <Badge className="bg-yellow-500 hover:bg-yellow-600">Waiting</Badge>
      case "resolved":
        return <Badge variant="secondary">Resolved</Badge>
      default:
        return <Badge variant="outline">{status}</Badge>
    }
  }

  const getChannelIcon = (channel: string) => {
    switch (channel) {
      case "Phone":
        return <Phone className="h-4 w-4" />
      case "Email":
        return <Mail className="h-4 w-4" />
      case "Website Chat":
        return <MessageSquare className="h-4 w-4" />
      default:
        return <Globe className="h-4 w-4" />
    }
  }

  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <SidebarTrigger className="-ml-1" />
          <div>
            <h1 className="text-3xl font-bold text-foreground flex items-center gap-2">
              <Monitor className="h-8 w-8" />
              Live Monitoring
            </h1>
            <p className="text-muted-foreground">Real-time customer service monitoring and oversight</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" onClick={() => setIsLive(!isLive)}>
            {isLive ? <Pause className="h-4 w-4 mr-2" /> : <Play className="h-4 w-4 mr-2" />}
            {isLive ? "Pause" : "Resume"}
          </Button>
          <Button variant="outline" size="sm">
            <RefreshCw className="h-4 w-4 mr-2" />
            Refresh
          </Button>
        </div>
      </div>

      {/* Live Status */}
      <div className="flex items-center gap-2 mb-6">
        <div className={`w-3 h-3 rounded-full ${isLive ? "bg-emerald-500 animate-pulse" : "bg-gray-500"}`} />
        <span className="text-sm font-medium">{isLive ? "Live Monitoring Active" : "Monitoring Paused"}</span>
        <span className="text-xs text-muted-foreground">Last updated: {lastUpdate.toLocaleTimeString()}</span>
      </div>

      {/* Real-time Stats */}
      <div className="grid md:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Conversations</CardTitle>
            <MessageSquare className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">45</div>
            <p className="text-xs text-muted-foreground">
              <TrendingUp className="h-3 w-3 inline mr-1 text-emerald-500" />
              +8 from last hour
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Queue Length</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">18</div>
            <p className="text-xs text-muted-foreground">
              <Clock className="h-3 w-3 inline mr-1" />
              Avg wait: 2.3min
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Response Time</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1.6s</div>
            <p className="text-xs text-muted-foreground">
              <CheckCircle className="h-3 w-3 inline mr-1 text-emerald-500" />
              Within target
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Alerts</CardTitle>
            <AlertTriangle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-500">3</div>
            <p className="text-xs text-muted-foreground">2 high priority</p>
          </CardContent>
        </Card>
      </div>

      {/* Agent Performance */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-2xl">Agent Performance</CardTitle>
          <CardDescription>Real-time metrics for all AI agents</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {agentMetrics.map((agent, index) => (
              <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <MessageSquare className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">{agent.name} AI</h4>
                    <p className="text-sm text-muted-foreground">
                      {agent.active} active • {agent.queue} in queue
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="text-center">
                    <p className="text-sm font-medium">{agent.avgResponse}</p>
                    <p className="text-xs text-muted-foreground">Avg Response</p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm font-medium">{agent.satisfaction}%</p>
                    <p className="text-xs text-muted-foreground">Satisfaction</p>
                  </div>
                  <div className="w-20">
                    <Progress value={agent.satisfaction} className="h-2" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Live Conversations */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Live Conversations</CardTitle>
          <CardDescription>Monitor ongoing customer interactions in real-time</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {conversations.map((conversation) => (
              <div
                key={conversation.id}
                className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    {getChannelIcon(conversation.channel)}
                    <div>
                      <h4 className="font-medium">{conversation.customer}</h4>
                      <p className="text-sm text-muted-foreground">
                        {conversation.agent} • {conversation.channel}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <p className="text-sm font-medium">{conversation.duration}</p>
                    <p className={`text-xs ${getSentimentColor(conversation.sentiment)}`}>{conversation.sentiment}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    {getPriorityBadge(conversation.priority)}
                    {getStatusBadge(conversation.status)}
                  </div>
                  <Button variant="outline" size="sm">
                    View
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
