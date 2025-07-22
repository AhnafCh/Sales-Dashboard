"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Search,
  Filter,
  Download,
  Clock,
  Bell,
  Settings,
  MessageSquare,
  Users,
  FileText,
  Send,
  Plus,
  Trash2,
} from "lucide-react"
import { SidebarTrigger } from "@/components/ui/sidebar"

export default function QuickOperations() {
  const [activeFilters, setActiveFilters] = useState({
    channel: "all",
    status: "all",
    priority: "all",
    dateRange: "7d",
  })

  const [reminders] = useState([
    { id: 1, title: "Follow up with Sarah Johnson", due: "2024-01-15 10:00", priority: "high", type: "customer" },
    {
      id: 2,
      title: "Update knowledge base - shipping policies",
      due: "2024-01-15 14:00",
      priority: "medium",
      type: "system",
    },
    { id: 3, title: "Review AI agent performance metrics", due: "2024-01-16 09:00", priority: "low", type: "review" },
  ])

  const [conversations] = useState([
    {
      id: 1,
      customer: "John Doe",
      channel: "facebook",
      status: "resolved",
      priority: "medium",
      date: "2024-01-14",
      issue: "Product inquiry",
    },
    {
      id: 2,
      customer: "Jane Smith",
      channel: "website",
      status: "active",
      priority: "high",
      date: "2024-01-14",
      issue: "Technical support",
    },
    {
      id: 3,
      customer: "Mike Johnson",
      channel: "phone",
      status: "escalated",
      priority: "urgent",
      date: "2024-01-14",
      issue: "Billing dispute",
    },
    {
      id: 4,
      customer: "Sarah Wilson",
      channel: "instagram",
      status: "resolved",
      priority: "low",
      date: "2024-01-13",
      issue: "General inquiry",
    },
  ])

  const filteredConversations = conversations.filter((conv) => {
    if (activeFilters.channel !== "all" && conv.channel !== activeFilters.channel) return false
    if (activeFilters.status !== "all" && conv.status !== activeFilters.status) return false
    if (activeFilters.priority !== "all" && conv.priority !== activeFilters.priority) return false
    return true
  })

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return <Badge className="bg-blue-900/40 text-blue-300">Active</Badge>
      case "resolved":
        return <Badge className="bg-emerald-900/40 text-emerald-300">Resolved</Badge>
      case "escalated":
        return <Badge variant="destructive">Escalated</Badge>
      default:
        return <Badge variant="secondary">{status}</Badge>
    }
  }

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case "urgent":
        return <Badge variant="destructive">Urgent</Badge>
      case "high":
        return <Badge className="bg-orange-900/40 text-orange-300">High</Badge>
      case "medium":
        return <Badge variant="secondary">Medium</Badge>
      case "low":
        return <Badge variant="outline">Low</Badge>
      default:
        return <Badge variant="outline">{priority}</Badge>
    }
  }

  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      {/* Header */}
      <div className="flex items-center gap-4 mb-6">
        <SidebarTrigger className="-ml-1" />
        <div>
          <h1 className="text-3xl font-bold text-foreground">Quick Operations</h1>
          <p className="text-muted-foreground">Filters, exports, reminders, and bulk operations</p>
        </div>
      </div>

      <Tabs defaultValue="filters" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="filters">Advanced Filters</TabsTrigger>
          <TabsTrigger value="exports">Export Center</TabsTrigger>
          <TabsTrigger value="reminders">Reminders</TabsTrigger>
          <TabsTrigger value="bulk">Bulk Operations</TabsTrigger>
        </TabsList>

        <TabsContent value="filters" className="space-y-6">
          {/* Filter Controls */}
          <Card>
            <CardHeader>
              <CardTitle>Advanced Conversation Filters</CardTitle>
              <CardDescription>Filter conversations across all channels and time periods</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-4 gap-4 mb-6">
                <div>
                  <Label>Channel</Label>
                  <Select
                    value={activeFilters.channel}
                    onValueChange={(value) => setActiveFilters({ ...activeFilters, channel: value })}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Channels</SelectItem>
                      <SelectItem value="facebook">Facebook</SelectItem>
                      <SelectItem value="website">Website</SelectItem>
                      <SelectItem value="phone">Phone</SelectItem>
                      <SelectItem value="instagram">Instagram</SelectItem>
                      <SelectItem value="whatsapp">WhatsApp</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label>Status</Label>
                  <Select
                    value={activeFilters.status}
                    onValueChange={(value) => setActiveFilters({ ...activeFilters, status: value })}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Status</SelectItem>
                      <SelectItem value="active">Active</SelectItem>
                      <SelectItem value="resolved">Resolved</SelectItem>
                      <SelectItem value="escalated">Escalated</SelectItem>
                      <SelectItem value="pending">Pending</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label>Priority</Label>
                  <Select
                    value={activeFilters.priority}
                    onValueChange={(value) => setActiveFilters({ ...activeFilters, priority: value })}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Priorities</SelectItem>
                      <SelectItem value="urgent">Urgent</SelectItem>
                      <SelectItem value="high">High</SelectItem>
                      <SelectItem value="medium">Medium</SelectItem>
                      <SelectItem value="low">Low</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label>Date Range</Label>
                  <Select
                    value={activeFilters.dateRange}
                    onValueChange={(value) => setActiveFilters({ ...activeFilters, dateRange: value })}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="24h">Last 24 hours</SelectItem>
                      <SelectItem value="7d">Last 7 days</SelectItem>
                      <SelectItem value="30d">Last 30 days</SelectItem>
                      <SelectItem value="90d">Last 90 days</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="flex items-center gap-4 mb-4">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input placeholder="Search by customer name, issue, or keywords..." className="pl-10" />
                  </div>
                </div>
                <Button>
                  <Filter className="h-4 w-4 mr-2" />
                  Apply Filters
                </Button>
                <Button variant="outline">Clear All</Button>
              </div>

              <div className="text-sm text-muted-foreground mb-4">
                Showing {filteredConversations.length} of {conversations.length} conversations
              </div>
            </CardContent>
          </Card>

          {/* Filtered Results */}
          <Card>
            <CardHeader>
              <CardTitle>Filtered Conversations</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="border-b">
                    <tr>
                      <th className="text-left p-3">Customer</th>
                      <th className="text-left p-3">Channel</th>
                      <th className="text-left p-3">Issue</th>
                      <th className="text-left p-3">Status</th>
                      <th className="text-left p-3">Priority</th>
                      <th className="text-left p-3">Date</th>
                      <th className="text-left p-3">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredConversations.map((conversation) => (
                      <tr key={conversation.id} className="border-b hover:bg-muted/30">
                        <td className="p-3 font-medium">{conversation.customer}</td>
                        <td className="p-3 capitalize">{conversation.channel}</td>
                        <td className="p-3">{conversation.issue}</td>
                        <td className="p-3">{getStatusBadge(conversation.status)}</td>
                        <td className="p-3">{getPriorityBadge(conversation.priority)}</td>
                        <td className="p-3">{conversation.date}</td>
                        <td className="p-3">
                          <Button size="sm" variant="outline">
                            View
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="exports" className="space-y-6">
          <div className="grid lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Export Conversations</CardTitle>
                <CardDescription>Download conversation data and transcripts</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label>Export Format</Label>
                  <Select defaultValue="csv">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="csv">CSV (Spreadsheet)</SelectItem>
                      <SelectItem value="excel">Excel Workbook</SelectItem>
                      <SelectItem value="pdf">PDF Report</SelectItem>
                      <SelectItem value="json">JSON Data</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label>Date Range</Label>
                  <Select defaultValue="7d">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="24h">Last 24 hours</SelectItem>
                      <SelectItem value="7d">Last 7 days</SelectItem>
                      <SelectItem value="30d">Last 30 days</SelectItem>
                      <SelectItem value="custom">Custom Range</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label>Include Data</Label>
                  <div className="space-y-2 mt-2">
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="transcripts" defaultChecked />
                      <Label htmlFor="transcripts">Full Transcripts</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="metadata" defaultChecked />
                      <Label htmlFor="metadata">Conversation Metadata</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="analytics" />
                      <Label htmlFor="analytics">Performance Analytics</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="satisfaction" />
                      <Label htmlFor="satisfaction">Satisfaction Scores</Label>
                    </div>
                  </div>
                </div>

                <Button className="w-full">
                  <Download className="h-4 w-4 mr-2" />
                  Export Conversations
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Export Analytics</CardTitle>
                <CardDescription>Download performance reports and insights</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <Button className="w-full justify-start bg-transparent" variant="outline">
                    <Download className="h-4 w-4 mr-2" />
                    Channel Performance Report
                  </Button>
                  <Button className="w-full justify-start bg-transparent" variant="outline">
                    <Download className="h-4 w-4 mr-2" />
                    AI Agent Metrics
                  </Button>
                  <Button className="w-full justify-start bg-transparent" variant="outline">
                    <Download className="h-4 w-4 mr-2" />
                    Customer Satisfaction Survey
                  </Button>
                  <Button className="w-full justify-start bg-transparent" variant="outline">
                    <Download className="h-4 w-4 mr-2" />
                    Knowledge Gap Analysis
                  </Button>
                  <Button className="w-full justify-start bg-transparent" variant="outline">
                    <Download className="h-4 w-4 mr-2" />
                    Peak Hours Analysis
                  </Button>
                </div>

                <div className="pt-4 border-t">
                  <h4 className="font-medium mb-3">Scheduled Exports</h4>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between p-2 bg-muted/30 rounded">
                      <span className="text-sm">Weekly Performance Report</span>
                      <Badge variant="outline">Active</Badge>
                    </div>
                    <div className="flex items-center justify-between p-2 bg-muted/30 rounded">
                      <span className="text-sm">Monthly Analytics Summary</span>
                      <Badge variant="outline">Active</Badge>
                    </div>
                  </div>
                  <Button size="sm" className="w-full mt-3 bg-transparent" variant="outline">
                    <Plus className="h-4 w-4 mr-2" />
                    Schedule New Export
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="reminders" className="space-y-6">
          <div className="grid lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Active Reminders</CardTitle>
                <CardDescription>Manage your scheduled tasks and follow-ups</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {reminders.map((reminder) => (
                    <div key={reminder.id} className="flex items-start gap-3 p-3 border rounded-lg">
                      <Bell className="h-5 w-5 text-primary mt-0.5" />
                      <div className="flex-1">
                        <h4 className="font-medium">{reminder.title}</h4>
                        <div className="flex items-center gap-2 mt-1 text-sm text-muted-foreground">
                          <Clock className="h-3 w-3" />
                          <span>{reminder.due}</span>
                          {getPriorityBadge(reminder.priority)}
                        </div>
                      </div>
                      <div className="flex items-center gap-1">
                        <Button size="sm" variant="outline">
                          Edit
                        </Button>
                        <Button size="sm" variant="ghost">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Create New Reminder</CardTitle>
                <CardDescription>Set up follow-ups and task reminders</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label>Reminder Title</Label>
                  <Input placeholder="Enter reminder title..." />
                </div>

                <div>
                  <Label>Description</Label>
                  <Textarea placeholder="Add details about this reminder..." />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label>Due Date</Label>
                    <Input type="date" />
                  </div>
                  <div>
                    <Label>Due Time</Label>
                    <Input type="time" />
                  </div>
                </div>

                <div>
                  <Label>Priority</Label>
                  <Select defaultValue="medium">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="low">Low</SelectItem>
                      <SelectItem value="medium">Medium</SelectItem>
                      <SelectItem value="high">High</SelectItem>
                      <SelectItem value="urgent">Urgent</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label>Reminder Type</Label>
                  <Select defaultValue="general">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="customer">Customer Follow-up</SelectItem>
                      <SelectItem value="system">System Task</SelectItem>
                      <SelectItem value="review">Performance Review</SelectItem>
                      <SelectItem value="general">General Reminder</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button className="w-full">
                  <Plus className="h-4 w-4 mr-2" />
                  Create Reminder
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="bulk" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Bulk Operations</CardTitle>
              <CardDescription>Perform actions on multiple conversations at once</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h4 className="font-medium mb-3">Select Conversations</h4>
                  <div className="space-y-2 max-h-64 overflow-y-auto border rounded-lg p-3">
                    {conversations.map((conversation) => (
                      <div key={conversation.id} className="flex items-center space-x-3">
                        <input type="checkbox" id={`conv-${conversation.id}`} />
                        <Label htmlFor={`conv-${conversation.id}`} className="flex-1 cursor-pointer">
                          <div className="flex items-center justify-between">
                            <span>
                              {conversation.customer} - {conversation.issue}
                            </span>
                            <div className="flex items-center gap-2">
                              {getStatusBadge(conversation.status)}
                              <span className="text-sm text-muted-foreground">{conversation.date}</span>
                            </div>
                          </div>
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-3">Bulk Actions</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-3">
                      <Button className="w-full justify-start bg-transparent" variant="outline">
                        <MessageSquare className="h-4 w-4 mr-2" />
                        Mark as Resolved
                      </Button>
                      <Button className="w-full justify-start bg-transparent" variant="outline">
                        <Users className="h-4 w-4 mr-2" />
                        Assign to Agent
                      </Button>
                      <Button className="w-full justify-start bg-transparent" variant="outline">
                        <Settings className="h-4 w-4 mr-2" />
                        Change Priority
                      </Button>
                    </div>
                    <div className="space-y-3">
                      <Button className="w-full justify-start bg-transparent" variant="outline">
                        <FileText className="h-4 w-4 mr-2" />
                        Export Selected
                      </Button>
                      <Button className="w-full justify-start bg-transparent" variant="outline">
                        <Send className="h-4 w-4 mr-2" />
                        Send Follow-up
                      </Button>
                      <Button className="w-full justify-start bg-transparent" variant="outline">
                        <Bell className="h-4 w-4 mr-2" />
                        Set Reminders
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">0 conversations selected</span>
                    <div className="flex gap-2">
                      <Button variant="outline">Select All</Button>
                      <Button disabled>Apply Actions</Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
