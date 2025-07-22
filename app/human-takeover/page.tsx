"use client"

import { Label } from "@/components/ui/label"
import { SidebarTrigger } from "@/components/ui/sidebar"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  MessageSquare,
  Phone,
  Clock,
  User,
  Send,
  AlertTriangle,
  CheckCircle,
  Globe,
  Facebook,
  Instagram,
  Headphones,
  FileText,
  Languages,
} from "lucide-react"

export default function HumanTakeover() {
  const [activeConversations] = useState([
    {
      id: 1,
      customer: "Sarah Johnson",
      channel: "facebook",
      type: "chat",
      priority: "urgent",
      issue: "Payment processing error",
      duration: "12 min",
      aiHistory: 8,
      language: "English",
      lastMessage: "I need to speak with a human agent immediately!",
    },
    {
      id: 2,
      customer: "Miguel Rodriguez",
      channel: "phone",
      type: "call",
      priority: "high",
      issue: "Product return request",
      duration: "5 min",
      aiHistory: 3,
      language: "Spanish",
      lastMessage: "The AI couldn't understand my specific situation",
    },
    {
      id: 3,
      customer: "Emma Chen",
      channel: "website",
      type: "chat",
      priority: "medium",
      issue: "Technical support",
      duration: "18 min",
      aiHistory: 12,
      language: "English",
      lastMessage: "Can someone help me with the advanced settings?",
    },
  ])

  const [selectedConversation, setSelectedConversation] = useState(activeConversations[0])

  const getChannelIcon = (channel: string) => {
    switch (channel) {
      case "facebook":
        return <Facebook className="h-4 w-4 text-primary" />
      case "phone":
        return <Phone className="h-4 w-4 text-emerald-400" />
      case "website":
        return <Globe className="h-4 w-4 text-muted-foreground" />
      case "instagram":
        return <Instagram className="h-4 w-4 text-pink-600" />
      default:
        return <MessageSquare className="h-4 w-4 text-muted-foreground" />
    }
  }

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case "urgent":
        return <Badge variant="destructive">Urgent</Badge>
      case "high":
        return <Badge className="bg-orange-100 text-orange-800">High</Badge>
      case "medium":
        return <Badge variant="secondary">Medium</Badge>
      default:
        return <Badge variant="outline">Low</Badge>
    }
  }

  const aiConversationHistory = [
    { role: "customer", message: "Hi, I'm having trouble with my payment", time: "10:45 AM" },
    {
      role: "ai",
      message:
        "I'd be happy to help you with your payment issue. Can you tell me what specific problem you're experiencing?",
      time: "10:45 AM",
    },
    { role: "customer", message: "My card was charged but the order shows as failed", time: "10:46 AM" },
    {
      role: "ai",
      message: "I understand your concern. Let me check your recent transactions. Can you provide your order number?",
      time: "10:46 AM",
    },
    { role: "customer", message: "Order #12345. This is really frustrating!", time: "10:47 AM" },
    {
      role: "ai",
      message:
        "I can see the issue with order #12345. This appears to be a payment processing error that requires human assistance. Let me connect you with a specialist.",
      time: "10:48 AM",
    },
    { role: "customer", message: "I need to speak with a human agent immediately!", time: "10:49 AM" },
  ]

  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      {/* Header */}
      <div className="flex items-center gap-4 mb-6">
        <SidebarTrigger className="-ml-1" />
        <div>
          <h1 className="text-3xl font-bold text-foreground">Human Takeover Mode</h1>
          <p className="text-muted-foreground">Direct access to conversations requiring immediate intervention</p>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Active Conversations List */}
        <div className="lg:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-accent" />
                Active Takeovers ({activeConversations.length})
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="space-y-2">
                {activeConversations.map((conversation) => (
                  <div
                    key={conversation.id}
                    className={`p-4 cursor-pointer border-l-4 hover:bg-muted/30 ${
                      selectedConversation.id === conversation.id
                        ? "bg-blue-100 border-l-blue-500"
                        : conversation.priority === "urgent"
                          ? "border-l-red-500"
                          : conversation.priority === "high"
                            ? "border-l-orange-500"
                            : "border-l-gray-300"
                    }`}
                    onClick={() => setSelectedConversation(conversation)}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        {getChannelIcon(conversation.channel)}
                        <span className="font-semibold text-sm">{conversation.customer}</span>
                      </div>
                      {getPriorityBadge(conversation.priority)}
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">{conversation.issue}</p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Clock className="h-3 w-3" />
                        <span>{conversation.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Languages className="h-3 w-3" />
                        <span>{conversation.language}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Conversation Interface */}
        <div className="lg:col-span-2">
          <Card className="h-[600px] flex flex-col">
            <CardHeader className="border-b">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-2">
                    {getChannelIcon(selectedConversation.channel)}
                    <div>
                      <CardTitle className="text-lg">{selectedConversation.customer}</CardTitle>
                      <CardDescription className="flex items-center gap-2">
                        {selectedConversation.issue} • {selectedConversation.duration} active
                        <Languages className="h-3 w-3 ml-2" />
                        {selectedConversation.language}
                      </CardDescription>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {getPriorityBadge(selectedConversation.priority)}
                  <Button size="sm" variant="outline">
                    <FileText className="h-4 w-4 mr-2" />
                    View Context
                  </Button>
                </div>
              </div>
            </CardHeader>

            <Tabs defaultValue="conversation" className="flex-1 flex flex-col">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="conversation">Live Conversation</TabsTrigger>
                <TabsTrigger value="ai-history">AI History ({selectedConversation.aiHistory})</TabsTrigger>
                <TabsTrigger value="customer-info">Customer Info</TabsTrigger>
              </TabsList>

              <TabsContent value="conversation" className="flex-1 flex flex-col">
                <div className="flex-1 p-4 overflow-y-auto bg-muted/30">
                  <div className="space-y-4">
                    <div className="bg-blue-900/40 p-3 rounded-lg">
                      <p className="text-sm font-medium text-blue-800 mb-1">System Alert</p>
                      <p className="text-sm text-blue-700">
                        AI agent escalated this conversation due to payment processing complexity. Customer has been
                        waiting for human assistance.
                      </p>
                    </div>

                    <div className="bg-gray-50 p-3 rounded-lg border-l-4 border-l-gray-400">
                      <div className="flex items-center gap-2 mb-1">
                        <User className="h-4 w-4 text-muted-foreground" />
                        <span className="font-medium text-sm">{selectedConversation.customer}</span>
                        <span className="text-xs text-muted-foreground">10:49 AM</span>
                      </div>
                      <p className="text-sm">{selectedConversation.lastMessage}</p>
                    </div>

                    <div className="bg-emerald-900/30 p-3 rounded-lg border-l-4 border-l-green-500">
                      <div className="flex items-center gap-2 mb-1">
                        <Headphones className="h-4 w-4 text-green-600" />
                        <span className="font-medium text-sm">You (Human Agent)</span>
                        <span className="text-xs text-muted-foreground">Now</span>
                      </div>
                      <p className="text-sm italic text-muted-foreground">Typing...</p>
                    </div>
                  </div>
                </div>

                <div className="p-4 border-t bg-gray-50">
                  <div className="flex gap-2">
                    <Textarea placeholder="Type your response to the customer..." className="flex-1 min-h-[60px]" />
                    <div className="flex flex-col gap-2">
                      <Button size="sm">
                        <Send className="h-4 w-4 mr-2" />
                        Send
                      </Button>
                      <Button size="sm" variant="outline">
                        <Languages className="h-4 w-4 mr-2" />
                        Translate
                      </Button>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 mt-2">
                    <Button size="sm" variant="ghost">
                      Quick: Investigating...
                    </Button>
                    <Button size="sm" variant="ghost">
                      Quick: Escalating to specialist
                    </Button>
                    <Button size="sm" variant="ghost">
                      Quick: Processing refund
                    </Button>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="ai-history" className="flex-1 p-4 overflow-y-auto">
                <div className="space-y-3">
                  <div className="bg-blue-900/40 p-3 rounded-lg mb-4">
                    <p className="text-sm font-medium text-blue-800">AI Conversation Summary</p>
                    <p className="text-sm text-blue-700 mt-1">
                      Customer reported payment charged but order failed. AI identified payment processing error
                      requiring human intervention after 8 exchanges.
                    </p>
                  </div>

                  {aiConversationHistory.map((message, index) => (
                    <div
                      key={index}
                      className={`p-3 rounded-lg ${
                        message.role === "customer"
                          ? "bg-gray-100 border-l-4 border-l-gray-400"
                          : "bg-blue-100 border-l-4 border-l-blue-400"
                      }`}
                    >
                      <div className="flex items-center gap-2 mb-1">
                        {message.role === "customer" ? (
                          <User className="h-4 w-4 text-muted-foreground" />
                        ) : (
                          <MessageSquare className="h-4 w-4 text-primary" />
                        )}
                        <span className="font-medium text-sm">
                          {message.role === "customer" ? selectedConversation.customer : "AI Agent"}
                        </span>
                        <span className="text-xs text-muted-foreground">{message.time}</span>
                      </div>
                      <p className="text-sm">{message.message}</p>
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="customer-info" className="flex-1 p-4">
                <div className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Customer Profile</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label className="text-sm font-medium text-muted-foreground">Name</Label>
                          <p className="text-sm">{selectedConversation.customer}</p>
                        </div>
                        <div>
                          <Label className="text-sm font-medium text-muted-foreground">Customer ID</Label>
                          <p className="text-sm">CUST-789123</p>
                        </div>
                        <div>
                          <Label className="text-sm font-medium text-muted-foreground">Account Status</Label>
                          <Badge className="bg-green-100 text-green-800">Premium</Badge>
                        </div>
                        <div>
                          <Label className="text-sm font-medium text-muted-foreground">Language</Label>
                          <p className="text-sm">{selectedConversation.language}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Recent Orders</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center p-2 bg-red-50 rounded">
                          <span className="text-sm">Order #12345 - $89.99</span>
                          <Badge variant="destructive">Failed</Badge>
                        </div>
                        <div className="flex justify-between items-center p-2 bg-muted/30 rounded">
                          <span className="text-sm">Order #12344 - $45.50</span>
                          <Badge className="bg-green-100 text-green-800">Completed</Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Previous Interactions</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2 text-sm">
                        <p>• Last contact: 2 weeks ago (Shipping inquiry)</p>
                        <p>• Total interactions: 12</p>
                        <p>• Satisfaction rating: 4.8/5</p>
                        <p>• Preferred contact method: Chat</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </Card>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="mt-6 flex gap-4">
        <Button className="flex items-center gap-2">
          <CheckCircle className="h-4 w-4" />
          Mark Resolved
        </Button>
        <Button variant="outline" className="flex items-center gap-2 bg-transparent">
          <User className="h-4 w-4" />
          Transfer to Specialist
        </Button>
        <Button variant="outline" className="flex items-center gap-2 bg-transparent">
          <Clock className="h-4 w-4" />
          Schedule Follow-up
        </Button>
      </div>
    </div>
  )
}
