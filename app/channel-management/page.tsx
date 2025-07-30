"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Progress } from "@/components/ui/progress"
import { SidebarTrigger } from "@/components/ui/sidebar"
import {
  Settings,
  MessageSquare,
  Mail,
  Phone,
  Globe,
  Facebook,
  Plus,
  Edit,
  Trash2,
  Upload,
  Download,
  RefreshCw,
  CheckCircle,
  AlertCircle,
  Clock,
} from "lucide-react"

export default function ChannelManagement() {
  const [channels, setChannels] = useState([
    {
      id: 1,
      name: "Website Chat",
      type: "Web Chat",
      status: "active",
      connected: true,
      messages: 1247,
      lastSync: "2 min ago",
      icon: MessageSquare,
      color: "text-blue-500",
    },
    {
      id: 2,
      name: "Support Email",
      type: "Email",
      status: "active",
      connected: true,
      messages: 892,
      lastSync: "5 min ago",
      icon: Mail,
      color: "text-green-500",
    },
    {
      id: 3,
      name: "Phone Support",
      type: "Voice",
      status: "active",
      connected: true,
      messages: 456,
      lastSync: "1 min ago",
      icon: Phone,
      color: "text-purple-500",
    },
    {
      id: 4,
      name: "Facebook Messenger",
      type: "Social",
      status: "warning",
      connected: true,
      messages: 234,
      lastSync: "15 min ago",
      icon: Facebook,
      color: "text-blue-600",
    },
    {
      id: 5,
      name: "WhatsApp Business",
      type: "Messaging",
      status: "inactive",
      connected: false,
      messages: 0,
      lastSync: "Never",
      icon: MessageSquare,
      color: "text-green-600",
    },
  ])

  const knowledgeBases = [
    {
      id: 1,
      name: "Product Documentation",
      articles: 156,
      lastUpdated: "2 hours ago",
      status: "up-to-date",
      coverage: 94,
    },
    {
      id: 2,
      name: "FAQ Database",
      articles: 89,
      lastUpdated: "1 day ago",
      status: "needs-update",
      coverage: 87,
    },
    {
      id: 3,
      name: "Troubleshooting Guide",
      articles: 234,
      lastUpdated: "3 hours ago",
      status: "up-to-date",
      coverage: 91,
    },
    {
      id: 4,
      name: "Policy & Procedures",
      articles: 67,
      lastUpdated: "1 week ago",
      status: "outdated",
      coverage: 76,
    },
  ]

  const aiAgents = [
    {
      id: 1,
      name: "Sales",
      status: "active",
      conversations: 24,
      successRate: 94,
      avgResponseTime: "1.2s",
      knowledgeBase: "Product Documentation",
    },
    {
      id: 2,
      name: "Telco",
      status: "active",
      conversations: 18,
      successRate: 91,
      avgResponseTime: "1.8s",
      knowledgeBase: "Troubleshooting Guide",
    },
    {
      id: 3,
      name: "Onboarding",
      status: "active",
      conversations: 12,
      successRate: 96,
      avgResponseTime: "1.1s",
      knowledgeBase: "FAQ Database",
    },
    {
      id: 4,
      name: "AirVoice",
      status: "warning",
      conversations: 8,
      successRate: 78,
      avgResponseTime: "2.3s",
      knowledgeBase: "Product Documentation",
    },
    {
      id: 5,
      name: "Support",
      status: "active",
      conversations: 31,
      successRate: 89,
      avgResponseTime: "1.5s",
      knowledgeBase: "Policy & Procedures",
    },
  ]

  const toggleChannelStatus = (channelId: number) => {
    setChannels(
      channels.map((channel) =>
        channel.id === channelId
          ? { ...channel, connected: !channel.connected, status: channel.connected ? "inactive" : "active" }
          : channel,
      ),
    )
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "active":
        return <CheckCircle className="h-4 w-4 text-emerald-500" />
      case "warning":
        return <AlertCircle className="h-4 w-4 text-yellow-500" />
      case "inactive":
        return <Clock className="h-4 w-4 text-gray-500" />
      default:
        return <AlertCircle className="h-4 w-4 text-red-500" />
    }
  }

  const getKnowledgeBaseStatus = (status: string) => {
    switch (status) {
      case "up-to-date":
        return { variant: "default" as const, color: "text-emerald-500" }
      case "needs-update":
        return { variant: "secondary" as const, color: "text-yellow-500" }
      case "outdated":
        return { variant: "destructive" as const, color: "text-red-500" }
      default:
        return { variant: "outline" as const, color: "text-gray-500" }
    }
  }

  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <SidebarTrigger className="-ml-1" />
        <div>
          <h1 className="text-3xl font-bold text-foreground flex items-center gap-2">
            <Settings className="h-8 w-8" />
            Channel Management
          </h1>
          <p className="text-muted-foreground">Connect platforms, manage knowledge bases, and configure AI agents</p>
        </div>
      </div>

      {/* Connected Channels */}
      <Card className="mb-6">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                <Globe className="h-5 w-5" />
                Connected Channels
              </CardTitle>
              <CardDescription>Manage your communication channels and their status</CardDescription>
            </div>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Add Channel
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {channels.map((channel) => {
              const IconComponent = channel.icon
              return (
                <Card key={channel.id} className="relative">
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className={`p-2 bg-muted rounded-lg ${channel.color}`}>
                          <IconComponent className="h-5 w-5" />
                        </div>
                        <div>
                          <h4 className="font-semibold">{channel.name}</h4>
                          <p className="text-sm text-muted-foreground">{channel.type}</p>
                        </div>
                      </div>
                      {getStatusIcon(channel.status)}
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Messages</span>
                        <span className="font-medium">{channel.messages}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Last Sync</span>
                        <span className="font-medium">{channel.lastSync}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Active</span>
                        <Switch checked={channel.connected} onCheckedChange={() => toggleChannelStatus(channel.id)} />
                      </div>
                    </div>

                    <div className="flex gap-2 mt-4">
                      <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                        <Edit className="h-3 w-3 mr-1" />
                        Edit
                      </Button>
                      <Button size="sm" variant="outline">
                        <RefreshCw className="h-3 w-3" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </CardContent>
      </Card>

      {/* Knowledge Bases */}
      <Card className="mb-6">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                <Upload className="h-5 w-5" />
                Knowledge Bases
              </CardTitle>
              <CardDescription>Manage AI training data and documentation</CardDescription>
            </div>
            <div className="flex gap-2">
              <Button variant="outline">
                <Download className="h-4 w-4 mr-2" />
                Export
              </Button>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Add Knowledge Base
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {knowledgeBases.map((kb) => {
              const statusConfig = getKnowledgeBaseStatus(kb.status)
              return (
                <div key={kb.id} className="border rounded-lg p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="font-semibold">{kb.name}</h4>
                      <p className="text-sm text-muted-foreground">
                        {kb.articles} articles • Last updated {kb.lastUpdated}
                      </p>
                    </div>
                    <Badge variant={statusConfig.variant}>{kb.status.replace("-", " ")}</Badge>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Coverage</span>
                      <span className="font-medium">{kb.coverage}%</span>
                    </div>
                    <Progress value={kb.coverage} className="h-2" />
                  </div>

                  <div className="flex gap-2 mt-4">
                    <Button size="sm" variant="outline">
                      <Edit className="h-3 w-3 mr-1" />
                      Edit
                    </Button>
                    <Button size="sm" variant="outline">
                      <Upload className="h-3 w-3 mr-1" />
                      Update
                    </Button>
                    <Button size="sm" variant="outline">
                      <RefreshCw className="h-3 w-3 mr-1" />
                      Sync
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="ml-auto text-red-500 hover:text-red-600 bg-transparent"
                    >
                      <Trash2 className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
              )
            })}
          </div>
        </CardContent>
      </Card>

      {/* AI Agents Configuration */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Settings className="h-5 w-5" />
            AI Agents Configuration
          </CardTitle>
          <CardDescription>Configure and monitor your AI agents performance</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {aiAgents.map((agent) => (
              <Card key={agent.id} className="relative">
                <CardContent className="p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="font-semibold">{agent.name}</h4>
                      <p className="text-sm text-muted-foreground">AI Agent</p>
                    </div>
                    <Badge variant={agent.status === "active" ? "default" : "secondary"}>{agent.status}</Badge>
                  </div>

                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Active Conversations</span>
                      <span className="font-medium">{agent.conversations}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Success Rate</span>
                      <span className="font-medium">{agent.successRate}%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Avg Response</span>
                      <span className="font-medium">{agent.avgResponseTime}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Knowledge Base</span>
                      <span className="font-medium text-xs">{agent.knowledgeBase}</span>
                    </div>
                  </div>

                  <Progress value={agent.successRate} className="mt-3 h-2" />

                  <div className="flex gap-2 mt-4">
                    <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                      <Edit className="h-3 w-3 mr-1" />
                      Configure
                    </Button>
                    <Button size="sm" variant="outline">
                      <RefreshCw className="h-3 w-3" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
