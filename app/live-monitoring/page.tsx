"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
  MessageSquare,
  Phone,
  Search,
  Filter,
  AlertTriangle,
  Volume2,
  Languages,
  Clock,
  TrendingUp,
  Users,
  Headphones,
  Globe,
  Facebook,
  Instagram,
  Play,
} from "lucide-react"
import { SidebarTrigger } from "@/components/ui/sidebar"

export default function LiveMonitoring() {
  const [activeFilter, setActiveFilter] = useState("all")

  const [liveConversations] = useState([
    {
      id: 1,
      customer: "John Smith",
      channel: "phone",
      agent: "Telco",
      duration: "3:45",
      status: "active",
      language: "English",
      sentiment: "neutral",
      issue: "Billing inquiry",
      transcript: "Customer is asking about their monthly charges...",
    },
    {
      id: 2,
      customer: "Maria Garcia",
      channel: "facebook",
      agent: "Support",
      duration: "8:12",
      status: "escalation-needed",
      language: "Spanish",
      sentiment: "frustrated",
      issue: "Product defect",
      transcript: "El producto llegó dañado y necesito una solución...",
    },
    {
      id: 3,
      customer: "David Chen",
      channel: "website",
      agent: "Sales",
      duration: "1:23",
      status: "active",
      language: "English",
      sentiment: "positive",
      issue: "Feature question",
      transcript: "I love the new features! Can you tell me more about...",
    },
    {
      id: 4,
      customer: "Sophie Laurent",
      channel: "instagram",
      agent: "Support",
      duration: "12:34",
      status: "knowledge-gap",
      language: "French",
      sentiment: "confused",
      issue: "Technical support",
      transcript: "Je ne comprends pas comment utiliser cette fonction...",
    },
  ])

  const [knowledgeGaps] = useState([
    { id: 1, query: "International shipping policies", frequency: 8, channel: "Facebook", urgency: "high" },
    { id: 2, query: "Product warranty terms", frequency: 5, channel: "Website", urgency: "medium" },
    { id: 3, query: "Bulk order discounts", frequency: 12, channel: "Instagram", urgency: "high" },
    { id: 4, query: "Account deletion process", frequency: 3, channel: "Phone", urgency: "low" },
  ])

  const getChannelIcon = (channel: string) => {
    switch (channel) {
      case "phone":
        return <Phone className="h-4 w-4 text-emerald-400" />
      case "facebook":
        return <Facebook className="h-4 w-4 text-primary" />
      case "website":
        return <Globe className="h-4 w-4 text-muted-foreground" />
      case "instagram":
        return <Instagram className="h-4 w-4 text-pink-600" />
      default:
        return <MessageSquare className="h-4 w-4 text-muted-foreground" />
    }
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return <Badge className="bg-emerald-900/40 text-emerald-300">Active</Badge>
      case "escalation-needed":
        return <Badge variant="destructive">Escalation Needed</Badge>
      case "knowledge-gap":
        return <Badge className="bg-amber-900/40 text-amber-300">Knowledge Gap</Badge>
      default:
        return <Badge variant="secondary">{status}</Badge>
    }
  }

  const getSentimentColor = (sentiment: string) => {
    switch (sentiment) {
      case "positive":
        return "text-emerald-400"
      case "neutral":
        return "text-muted-foreground"
      case "frustrated":
        return "text-red-400"
      case "confused":
        return "text-amber-400"
      default:
        return "text-muted-foreground"
    }
  }

  const filteredConversations =
    activeFilter === "all" ? liveConversations : liveConversations.filter((conv) => conv.status === activeFilter)

  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      {/* Header */}
      <div className="flex items-center gap-4 mb-6">
        <SidebarTrigger className="-ml-1" />
        <div>
          <h1 className="text-3xl font-bold text-foreground">Live Monitoring Workspace</h1>
          <p className="text-muted-foreground">Real-time AI performance monitoring and intervention</p>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid md:grid-cols-4 gap-4 mb-6">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Active Conversations</p>
                <p className="text-2xl font-bold">{liveConversations.length}</p>
              </div>
              <MessageSquare className="h-8 w-8 text-primary" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Escalations Needed</p>
                <p className="text-2xl font-bold text-red-400">
                  {liveConversations.filter((c) => c.status === "escalation-needed").length}
                </p>
              </div>
              <AlertTriangle className="h-8 w-8 text-red-400" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Knowledge Gaps</p>
                <p className="text-2xl font-bold text-amber-400">
                  {liveConversations.filter((c) => c.status === "knowledge-gap").length}
                </p>
              </div>
              <TrendingUp className="h-8 w-8 text-amber-400" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Avg Response Time</p>
                <p className="text-2xl font-bold">2.3s</p>
              </div>
              <Clock className="h-8 w-8 text-emerald-400" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters and Search */}
      <Card className="mb-6">
        <CardContent className="p-4">
          <div className="flex items-center gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input placeholder="Search conversations, customers, or issues..." className="pl-10" />
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant={activeFilter === "all" ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveFilter("all")}
              >
                All ({liveConversations.length})
              </Button>
              <Button
                variant={activeFilter === "escalation-needed" ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveFilter("escalation-needed")}
              >
                Escalations ({liveConversations.filter((c) => c.status === "escalation-needed").length})
              </Button>
              <Button
                variant={activeFilter === "knowledge-gap" ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveFilter("knowledge-gap")}
              >
                Knowledge Gaps ({liveConversations.filter((c) => c.status === "knowledge-gap").length})
              </Button>
              <Button variant="outline" size="sm">
                <Filter className="h-4 w-4 mr-2" />
                More Filters
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Live Conversations */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Live Conversations</CardTitle>
              <CardDescription>Real-time monitoring of AI agent interactions</CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <div className="space-y-0">
                {filteredConversations.map((conversation) => (
                  <div key={conversation.id} className="p-4 border-b hover:bg-muted/30 cursor-pointer">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-3">
                        {getChannelIcon(conversation.channel)}
                        <div>
                          <h3 className="font-semibold">{conversation.customer}</h3>
                          <p className="text-sm text-muted-foreground">{conversation.issue}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        {getStatusBadge(conversation.status)}
                        <Badge variant="outline" className="text-xs">
                          {conversation.duration}
                        </Badge>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 mb-3 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Headphones className="h-3 w-3" />
                        <span>{conversation.agent}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Languages className="h-3 w-3" />
                        <span>{conversation.language}</span>
                      </div>
                      <div className={`flex items-center gap-1 ${getSentimentColor(conversation.sentiment)}`}>
                        <div className="w-2 h-2 rounded-full bg-current"></div>
                        <span className="capitalize">{conversation.sentiment}</span>
                      </div>
                    </div>

                    <div className="bg-muted/30 p-3 rounded-lg mb-3">
                      <p className="text-sm">{conversation.transcript}</p>
                      {conversation.language !== "English" && (
                        <p className="text-xs text-muted-foreground mt-2 italic">
                          Translation:{" "}
                          {conversation.language === "Spanish"
                            ? "The product arrived damaged and I need a solution..."
                            : conversation.language === "French"
                              ? "I don't understand how to use this feature..."
                              : ""}
                        </p>
                      )}
                    </div>

                    <div className="flex items-center gap-2">
                      {conversation.channel === "phone" && (
                        <>
                          <Button size="sm" variant="outline">
                            <Play className="h-3 w-3 mr-1" />
                            Listen
                          </Button>
                          <Button size="sm" variant="outline">
                            <Volume2 className="h-3 w-3 mr-1" />
                            Audio
                          </Button>
                        </>
                      )}
                      <Button size="sm" variant="outline">
                        <Languages className="h-3 w-3 mr-1" />
                        Translate
                      </Button>
                      {conversation.status === "escalation-needed" && (
                        <Button size="sm" variant="destructive">
                          <Users className="h-3 w-3 mr-1" />
                          Take Over
                        </Button>
                      )}
                      {conversation.status === "knowledge-gap" && (
                        <Button size="sm" className="bg-yellow-600 hover:bg-yellow-700">
                          <TrendingUp className="h-3 w-3 mr-1" />
                          Add Knowledge
                        </Button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Knowledge Gap Alerts */}
        <div className="lg:col-span-1">
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-amber-400" />
                Knowledge Gap Alerts
              </CardTitle>
              <CardDescription>Immediate attention required</CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <div className="space-y-0">
                {knowledgeGaps.map((gap) => (
                  <div key={gap.id} className="p-4 border-b">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-medium text-sm">{gap.query}</h4>
                      <Badge
                        variant={
                          gap.urgency === "high" ? "destructive" : gap.urgency === "medium" ? "secondary" : "outline"
                        }
                        className="text-xs"
                      >
                        {gap.urgency}
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between text-xs text-muted-foreground mb-3">
                      <span>{gap.frequency} queries today</span>
                      <span>{gap.channel}</span>
                    </div>
                    <Button size="sm" className="w-full">
                      Add Knowledge
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button className="w-full justify-start bg-transparent" variant="outline">
                <MessageSquare className="h-4 w-4 mr-2" />
                View All Conversations
              </Button>
              <Button className="w-full justify-start bg-transparent" variant="outline">
                <TrendingUp className="h-4 w-4 mr-2" />
                Performance Analytics
              </Button>
              <Button className="w-full justify-start bg-transparent" variant="outline">
                <Users className="h-4 w-4 mr-2" />
                Agent Management
              </Button>
              <Button className="w-full justify-start bg-transparent" variant="outline">
                <AlertTriangle className="h-4 w-4 mr-2" />
                System Alerts
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
