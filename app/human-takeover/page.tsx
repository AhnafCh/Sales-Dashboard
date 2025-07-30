"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { UserCheck, MessageSquare, AlertTriangle, Send, Phone, Mail, Globe, User, Bot, ArrowRight } from "lucide-react"

export default function HumanTakeover() {
  const [selectedConversation, setSelectedConversation] = useState<string | null>(null)
  const [message, setMessage] = useState("")

  const urgentConversations = [
    {
      id: "urgent-001",
      customer: "Alex Rodriguez",
      agent: "Telco",
      channel: "Web Chat",
      issue: "Billing dispute - third escalation",
      duration: "00:15:42",
      priority: "urgent",
      sentiment: "very negative",
      context: "Customer has been charged incorrectly for 3 months running. Previous agents failed to resolve.",
      lastMessages: [
        {
          sender: "customer",
          message: "This is absolutely ridiculous! I've been overcharged for 3 months!",
          time: "2 min ago",
        },
        {
          sender: "ai",
          message: "I understand your frustration. Let me review your billing history...",
          time: "1 min ago",
        },
        { sender: "customer", message: "I want to speak to a human RIGHT NOW!", time: "30 sec ago" },
      ],
    },
    {
      id: "urgent-002",
      customer: "Sarah Mitchell",
      agent: "Support",
      channel: "Email",
      issue: "Service outage affecting business operations",
      duration: "00:08:15",
      priority: "urgent",
      sentiment: "negative",
      context: "Customer's business is down due to API service interruption. Revenue impact estimated at $10k/hour.",
      lastMessages: [
        {
          sender: "customer",
          message: "Our entire system is down because your API is not responding!",
          time: "5 min ago",
        },
        { sender: "ai", message: "I'm checking the system status for you...", time: "4 min ago" },
        { sender: "customer", message: "We're losing money every minute this is down!", time: "2 min ago" },
      ],
    },
    {
      id: "urgent-003",
      customer: "David Kim",
      agent: "Sales",
      channel: "Phone",
      issue: "Contract cancellation threat - high value client",
      duration: "00:22:18",
      priority: "urgent",
      sentiment: "negative",
      context: "Enterprise client ($50k/year) threatening to cancel due to recent service issues.",
      lastMessages: [
        { sender: "customer", message: "We're seriously considering switching to your competitor", time: "3 min ago" },
        { sender: "ai", message: "I'd like to understand your concerns better...", time: "2 min ago" },
        { sender: "customer", message: "I need to speak with someone who can make decisions", time: "1 min ago" },
      ],
    },
  ]

  const getChannelIcon = (channel: string) => {
    switch (channel) {
      case "Web Chat":
        return MessageSquare
      case "Email":
        return Mail
      case "Phone":
        return Phone
      default:
        return Globe
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "urgent":
        return "bg-red-500"
      case "high":
        return "bg-orange-500"
      case "medium":
        return "bg-yellow-500"
      default:
        return "bg-green-500"
    }
  }

  const handleTakeOver = (conversationId: string) => {
    setSelectedConversation(conversationId)
  }

  const handleSendMessage = () => {
    if (message.trim()) {
      // Handle sending message
      setMessage("")
    }
  }

  const selectedConv = urgentConversations.find((conv) => conv.id === selectedConversation)

  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <SidebarTrigger className="-ml-1" />
        <div>
          <h1 className="text-3xl font-bold text-foreground flex items-center gap-2">
            <UserCheck className="h-8 w-8" />
            Human Takeover Mode
          </h1>
          <p className="text-muted-foreground">
            Direct intervention for conversations requiring immediate human attention
          </p>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Urgent Conversations List */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-red-500" />
              Urgent Interventions Required
            </CardTitle>
            <CardDescription>Conversations that need immediate human attention</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {urgentConversations.map((conversation) => {
              const ChannelIcon = getChannelIcon(conversation.channel)
              const isSelected = selectedConversation === conversation.id

              return (
                <div
                  key={conversation.id}
                  className={`border rounded-lg p-4 cursor-pointer transition-colors ${
                    isSelected ? "border-primary bg-primary/5" : "hover:bg-muted/50"
                  }`}
                  onClick={() => handleTakeOver(conversation.id)}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-3 h-3 rounded-full ${getPriorityColor(conversation.priority)} animate-pulse`}
                      />
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
                      <Badge variant="destructive">{conversation.priority.toUpperCase()}</Badge>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <p className="text-sm font-medium text-red-600">{conversation.issue}</p>
                    <p className="text-xs text-muted-foreground">{conversation.context}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">Duration: {conversation.duration}</span>
                      <span className="text-xs text-red-500 font-medium">Sentiment: {conversation.sentiment}</span>
                    </div>
                  </div>

                  {!isSelected && (
                    <Button size="sm" className="w-full mt-3">
                      Take Over Conversation
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  )}
                </div>
              )
            })}
          </CardContent>
        </Card>

        {/* Conversation Interface */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageSquare className="h-5 w-5" />
              {selectedConv ? `Conversation with ${selectedConv.customer}` : "Select a Conversation"}
            </CardTitle>
            {selectedConv && (
              <CardDescription>
                {selectedConv.issue} • {selectedConv.channel}
              </CardDescription>
            )}
          </CardHeader>
          <CardContent>
            {selectedConv ? (
              <div className="space-y-4">
                {/* Context Banner */}
                <div className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
                  <h4 className="font-semibold text-red-800 dark:text-red-200 mb-2">Context & Background</h4>
                  <p className="text-sm text-red-700 dark:text-red-300">{selectedConv.context}</p>
                </div>

                {/* Message History */}
                <div className="space-y-3 max-h-96 overflow-y-auto">
                  {selectedConv.lastMessages.map((msg, index) => (
                    <div
                      key={index}
                      className={`flex gap-3 ${msg.sender === "customer" ? "justify-start" : "justify-end"}`}
                    >
                      <div
                        className={`flex gap-2 max-w-[80%] ${msg.sender === "customer" ? "flex-row" : "flex-row-reverse"}`}
                      >
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center ${
                            msg.sender === "customer" ? "bg-blue-100 dark:bg-blue-900" : "bg-gray-100 dark:bg-gray-800"
                          }`}
                        >
                          {msg.sender === "customer" ? <User className="h-4 w-4" /> : <Bot className="h-4 w-4" />}
                        </div>
                        <div
                          className={`rounded-lg p-3 ${
                            msg.sender === "customer"
                              ? "bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800"
                              : "bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700"
                          }`}
                        >
                          <p className="text-sm">{msg.message}</p>
                          <p className="text-xs text-muted-foreground mt-1">{msg.time}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Message Input */}
                <div className="space-y-3">
                  <Textarea
                    placeholder="Type your response as a human agent..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="min-h-[100px]"
                  />
                  <div className="flex gap-2">
                    <Button onClick={handleSendMessage} className="flex-1">
                      <Send className="h-4 w-4 mr-2" />
                      Send Message
                    </Button>
                    <Button variant="outline">Transfer to Specialist</Button>
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="grid grid-cols-2 gap-2">
                  <Button variant="outline" size="sm">
                    Escalate to Manager
                  </Button>
                  <Button variant="outline" size="sm">
                    Schedule Callback
                  </Button>
                  <Button variant="outline" size="sm">
                    Apply Credit
                  </Button>
                  <Button variant="outline" size="sm">
                    Create Ticket
                  </Button>
                </div>
              </div>
            ) : (
              <div className="text-center py-12">
                <MessageSquare className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">No Conversation Selected</h3>
                <p className="text-muted-foreground">
                  Select an urgent conversation from the list to begin human intervention
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
