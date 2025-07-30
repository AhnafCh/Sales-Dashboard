"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { SidebarTrigger } from "@/components/ui/sidebar"
import {
  Settings,
  MessageSquare,
  Phone,
  Mail,
  Globe,
  Facebook,
  Twitter,
  Plus,
  Edit,
  Trash2,
  CheckCircle,
  AlertCircle,
  Clock,
} from "lucide-react"

export default function ChannelManagement() {
  const [channels] = useState([
    {
      id: 1,
      name: "Website Chat",
      type: "chat",
      status: "active",
      connections: 1247,
      lastSync: "2 minutes ago",
      icon: MessageSquare,
      config: { autoResponse: true, businessHours: true },
    },
    {
      id: 2,
      name: "Phone Support",
      type: "voice",
      status: "active",
      connections: 892,
      lastSync: "5 minutes ago",
      icon: Phone,
      config: { autoResponse: false, businessHours: true },
    },
    {
      id: 3,
      name: "Email Support",
      type: "email",
      status: "active",
      connections: 2156,
      lastSync: "1 minute ago",
      icon: Mail,
      config: { autoResponse: true, businessHours: false },
    },
    {
      id: 4,
      name: "Facebook Messenger",
      type: "social",
      status: "warning",
      connections: 567,
      lastSync: "15 minutes ago",
      icon: Facebook,
      config: { autoResponse: true, businessHours: true },
    },
    {
      id: 5,
      name: "Twitter DM",
      type: "social",
      status: "inactive",
      connections: 234,
      lastSync: "2 hours ago",
      icon: Twitter,
      config: { autoResponse: false, businessHours: false },
    },
  ])

  const knowledgeBases = [
    {
      id: 1,
      name: "General FAQ",
      articles: 156,
      lastUpdated: "2 days ago",
      status: "current",
      coverage: 94,
    },
    {
      id: 2,
      name: "Technical Documentation",
      articles: 89,
      lastUpdated: "1 week ago",
      status: "needs_update",
      coverage: 78,
    },
    {
      id: 3,
      name: "Billing & Pricing",
      articles: 45,
      lastUpdated: "3 days ago",
      status: "current",
      coverage: 96,
    },
    {
      id: 4,
      name: "Product Features",
      articles: 123,
      lastUpdated: "5 days ago",
      status: "needs_update",
      coverage: 82,
    },
  ]

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return <Badge className="bg-emerald-500 hover:bg-emerald-600">Active</Badge>
      case "warning":
        return <Badge className="bg-yellow-500 hover:bg-yellow-600">Warning</Badge>
      case "inactive":
        return <Badge variant="secondary">Inactive</Badge>
      default:
        return <Badge variant="outline">{status}</Badge>
    }
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
        return <Clock className="h-4 w-4 text-gray-500" />
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
          <p className="text-muted-foreground">Configure communication channels and knowledge bases</p>
        </div>
      </div>

      {/* Overview Stats */}
      <div className="grid md:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Channels</CardTitle>
            <MessageSquare className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5</div>
            <p className="text-xs text-muted-foreground">3 active, 1 warning, 1 inactive</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Connections</CardTitle>
            <Globe className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5,096</div>
            <p className="text-xs text-muted-foreground">Last 24 hours</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Knowledge Articles</CardTitle>
            <Settings className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">413</div>
            <p className="text-xs text-muted-foreground">Across 4 knowledge bases</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg Coverage</CardTitle>
            <CheckCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">87.5%</div>
            <p className="text-xs text-muted-foreground">Knowledge base coverage</p>
          </CardContent>
        </Card>
      </div>

      {/* Communication Channels */}
      <Card className="mb-8">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-2xl">Communication Channels</CardTitle>
              <CardDescription>Manage and configure your customer communication channels</CardDescription>
            </div>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Add Channel
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {channels.map((channel) => (
              <div key={channel.id} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <channel.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="font-medium">{channel.name}</h4>
                      {getStatusIcon(channel.status)}
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {channel.connections.toLocaleString()} connections • Last sync: {channel.lastSync}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <div className="flex items-center gap-2 mb-1">
                      <Label htmlFor={`auto-${channel.id}`} className="text-xs">
                        Auto Response
                      </Label>
                      <Switch id={`auto-${channel.id}`} checked={channel.config.autoResponse} size="sm" />
                    </div>
                    <div className="flex items-center gap-2">
                      <Label htmlFor={`hours-${channel.id}`} className="text-xs">
                        Business Hours
                      </Label>
                      <Switch id={`hours-${channel.id}`} checked={channel.config.businessHours} size="sm" />
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {getStatusBadge(channel.status)}
                    <Button variant="outline" size="sm">
                      <Edit className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Knowledge Base Management */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-2xl">Knowledge Base Management</CardTitle>
              <CardDescription>Manage AI training data and knowledge articles</CardDescription>
            </div>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Create Knowledge Base
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            {knowledgeBases.map((kb) => (
              <Card key={kb.id} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{kb.name}</CardTitle>
                    <Badge variant={kb.status === "current" ? "default" : "secondary"}>
                      {kb.status === "current" ? "Current" : "Needs Update"}
                    </Badge>
                  </div>
                  <CardDescription>
                    {kb.articles} articles • Updated {kb.lastUpdated}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Coverage</span>
                        <span>{kb.coverage}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div
                          className="bg-primary h-2 rounded-full transition-all"
                          style={{ width: `${kb.coverage}%` }}
                        />
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                        <Edit className="h-4 w-4 mr-2" />
                        Edit
                      </Button>
                      <Button variant="outline" size="sm">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
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
