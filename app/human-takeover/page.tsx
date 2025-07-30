"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { SidebarTrigger } from "@/components/ui/sidebar"
import {
  Users,
  MessageSquare,
  Clock,
  AlertTriangle,
  CheckCircle,
  Phone,
  Mail,
  Globe,
  User,
  Send,
  Mic,
  Paperclip,
} from "lucide-react"

export default function HumanTakeover() {
  const [selectedConversation, setSelectedConversation] = useState<number | null>(1)
  const [message, setMessage] = useState("")

  const takeovers = [
    {
      id: 1,
      customer: "Sarah Johnson",
      issue: "Complex billing inquiry",
      channel: "Website Chat",
      priority: "high",
      duration: "00:15:32",
      agent: "AI Support",
      reason: "Customer requested human agent",
      status: "active",
      sentiment: "frustrated",
    },
    {
      id: 2,
      customer: "Mike Chen",
      issue: "Technical integration problem",
      channel: "Email",
      priority: "urgent",
      duration: "00:08:45",
      agent: "AI Technical",
      reason: "Complex technical issue",
      status: "pending",
      sentiment: "neutral",
    },
    {
      id: 3,
      customer: "Emma Davis",
      issue: "Account access issues",
      channel: "Phone",
      priority: "urgent",
      duration: "00:22:18",
      agent: "AI Support",
      reason: "Security verification required",
      status: "active",
      sentiment: "angry",
    },
    {
      id: 4,
      customer: "Alex Rodriguez",
      issue: "Feature request discussion",
      channel: "Website Chat",
      priority: "normal",
      duration: "00:05:12",
      agent: "AI Sales",
      reason: "Custom solution needed",
      status: "waiting",
      sentiment: "positive",
    },
  ]

  const conversationHistory = [
    {
      id: 1,
      sender: "customer",
      message: "Hi, I'm having trouble understanding my latest bill. There are charges I don't recognize.",
      timestamp: "10:30 AM",
    },
    {
      id: 2,
      sender: "ai",
      message:
        "I'd be happy to help you understand your bill. Can you tell me which specific charges you're concerned about?",
      timestamp: "10:30 AM",
    },
    {
      id: 3,
      sender: "customer",
      message:
        "There's a $50 charge for 'Premium Features' but I never signed up for that. And there's another $25 for 'Additional Storage' which I also didn't request.",
      timestamp: "10:32 AM",
    },
    {
      id: 4,
      sender: "ai",
      message:
        "I understand your concern about these charges. Let me look into your account details to clarify these items for you.",
      timestamp: "10:32 AM",
    },
    {
      id: 5,
      sender: "customer",
      message:
        "This is really frustrating. I've been a loyal customer for 3 years and now I'm being charged for things I didn't order. I want to speak to a human representative right now.",
      timestamp: "10:35 AM",
    },
    {
      id: 6,
      sender: "system",
      message: "Customer has requested human takeover. Transferring to human agent...",
      timestamp: "10:35 AM",
    },
  ]

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "urgent":
        return "text-red-500 bg-red-50 border-red-200"
      case "high":
        return "text-orange-500 bg-orange-50 border-orange-200"
      default:
        return "text-blue-500 bg-blue-50 border-blue-200"
    }
  }

  const getSentimentColor = (sentiment: string) => {
    switch (sentiment) {
      case "angry":
        return "text-red-500"
      case "frustrated":
        return "text-orange-500"
      case "neutral":
        return "text-yellow-500"
      case "positive":
        return "text-emerald-500"
      default:
        return "text-gray-500"
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

  const selectedTakeover = takeovers.find((t) => t.id === selectedConversation)

  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <SidebarTrigger className="-ml-1" />
        <div>
          <h1 className="text-3xl font-bold text-foreground flex items-center gap-2">
            <Users className="h-8 w-8" />
            Human Takeover
          </h1>
          <p className="text-muted-foreground">Manage conversations requiring human intervention</p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid md:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Takeovers</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">7</div>
            <p className="text-xs text-muted-foreground">3 urgent, 2 high priority</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg Response Time</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2.3min</div>
            <p className="text-xs text-muted-foreground">
              <CheckCircle className="h-3 w-3 inline mr-1 text-emerald-500" />
              Within SLA
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Resolution Rate</CardTitle>
            <CheckCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">94%</div>
            <p className="text-xs text-muted-foreground">Last 24 hours</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Escalations</CardTitle>
            <AlertTriangle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">Today</p>
          </CardContent>
        </Card>
      </div>

      {/* Main Content */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Takeover Queue */}
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle>Takeover Queue</CardTitle>
            <CardDescription>Conversations requiring human attention</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {takeovers.map((takeover) => (
                <div
                  key={takeover.id}
                  className={`p-3 border rounded-lg cursor-pointer transition-colors ${
                    selectedConversation === takeover.id ? "border-primary bg-primary/5" : "hover:bg-muted/50"
                  }`}
                  onClick={() => setSelectedConversation(takeover.id)}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      {getChannelIcon(takeover.channel)}
                      <span className="font-medium text-sm">{takeover.customer}</span>
                    </div>
                    <Badge className={getPriorityColor(takeover.priority)}>{takeover.priority}</Badge>
                  </div>
                  <p className="text-xs text-muted-foreground mb-1">{takeover.issue}</p>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-muted-foreground">{takeover.duration}</span>
                    <span className={getSentimentColor(takeover.sentiment)}>{takeover.sentiment}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Conversation View */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>{selectedTakeover ? selectedTakeover.customer : "Select a conversation"}</CardTitle>
                {selectedTakeover && (
                  <CardDescription>
                    {selectedTakeover.issue} • {selectedTakeover.channel} • {selectedTakeover.duration}
                  </CardDescription>
                )}
              </div>
              {selectedTakeover && (
                <div className="flex items-center gap-2">
                  <Badge className={getPriorityColor(selectedTakeover.priority)}>{selectedTakeover.priority}</Badge>
                  <Badge variant="outline">{selectedTakeover.status}</Badge>
                </div>
              )}
            </div>
          </CardHeader>
          <CardContent>
            {selectedTakeover ? (
              <div className="space-y-4">
                {/* Customer Info */}
                <div className="p-3 bg-muted/50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <User className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">{selectedTakeover.customer}</p>
                      <p className="text-sm text-muted-foreground">Reason for takeover: {selectedTakeover.reason}</p>
                    </div>
                  </div>
                </div>

                {/* Conversation History */}
                <div className="space-y-3 max-h-96 overflow-y-auto">
                  {conversationHistory.map((msg) => (
                    <div
                      key={msg.id}
                      className={`flex ${msg.sender === "customer" ? "justify-start" : msg.sender === "ai" ? "justify-end" : "justify-center"}`}
                    >
                      <div
                        className={`max-w-[80%] p-3 rounded-lg ${
                          msg.sender === "customer"
                            ? "bg-muted text-foreground"
                            : msg.sender === "ai"
                              ? "bg-primary text-primary-foreground"
                              : "bg-yellow-100 text-yellow-800 text-sm"
                        }`}
                      >
                        <p className="text-sm">{msg.message}</p>
                        <p className="text-xs opacity-70 mt-1">{msg.timestamp}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Message Input */}
                <div className="space-y-3">
                  <Textarea
                    placeholder="Type your response..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="min-h-[100px]"
                  />
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="sm">
                        <Paperclip className="h-4 w-4" />
                        Attach
                      </Button>
                      <Button variant="outline" size="sm">
                        <Mic className="h-4 w-4" />
                        Voice
                      </Button>
                    </div>
                    <Button onClick={() => setMessage("")}>
                      <Send className="h-4 w-4 mr-2" />
                      Send
                    </Button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center py-12">
                <MessageSquare className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-medium mb-2">No conversation selected</h3>
                <p className="text-muted-foreground">Select a conversation from the queue to start helping customers</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
