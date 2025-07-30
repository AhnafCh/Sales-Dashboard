"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Zap, Settings, RefreshCw, Play, Pause, AlertTriangle, CheckCircle, Clock, Send, Bot } from "lucide-react"

export default function QuickOperations() {
  const [broadcastMessage, setBroadcastMessage] = useState("")
  const [selectedAgents, setSelectedAgents] = useState<string[]>([])

  const quickActions = [
    {
      title: "Restart All Agents",
      description: "Restart all AI agents to apply updates",
      icon: RefreshCw,
      action: "restart",
      status: "ready",
    },
    {
      title: "Enable Maintenance Mode",
      description: "Put system in maintenance mode",
      icon: Settings,
      action: "maintenance",
      status: "ready",
    },
    {
      title: "Emergency Broadcast",
      description: "Send urgent message to all customers",
      icon: AlertTriangle,
      action: "broadcast",
      status: "ready",
    },
    {
      title: "Scale Up Resources",
      description: "Increase system capacity for high traffic",
      icon: Zap,
      action: "scale",
      status: "ready",
    },
  ]

  const agents = [
    { id: "sales", name: "Sales AI", status: "active", load: 78 },
    { id: "support", name: "Support AI", status: "active", load: 92 },
    { id: "telco", name: "Telco AI", status: "active", load: 65 },
    { id: "onboarding", name: "Onboarding AI", status: "active", load: 45 },
    { id: "airvoice", name: "AirVoice AI", status: "warning", load: 98 },
  ]

  const recentOperations = [
    {
      id: 1,
      action: "Agent Restart",
      target: "Support AI",
      timestamp: "2 minutes ago",
      status: "completed",
      user: "Admin",
    },
    {
      id: 2,
      action: "Broadcast Message",
      target: "All Customers",
      timestamp: "15 minutes ago",
      status: "completed",
      user: "Manager",
    },
    {
      id: 3,
      action: "Scale Resources",
      target: "System Wide",
      timestamp: "1 hour ago",
      status: "completed",
      user: "Admin",
    },
    {
      id: 4,
      action: "Maintenance Mode",
      target: "Channel Management",
      timestamp: "3 hours ago",
      status: "completed",
      user: "Tech Lead",
    },
  ]

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return <Badge className="bg-emerald-500 hover:bg-emerald-600">Active</Badge>
      case "warning":
        return <Badge className="bg-yellow-500 hover:bg-yellow-600">Warning</Badge>
      case "completed":
        return <Badge className="bg-blue-500 hover:bg-blue-600">Completed</Badge>
      default:
        return <Badge variant="outline">{status}</Badge>
    }
  }

  const getLoadColor = (load: number) => {
    if (load >= 90) return "text-red-500"
    if (load >= 70) return "text-yellow-500"
    return "text-emerald-500"
  }

  const toggleAgentSelection = (agentId: string) => {
    setSelectedAgents((prev) => (prev.includes(agentId) ? prev.filter((id) => id !== agentId) : [...prev, agentId]))
  }

  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <SidebarTrigger className="-ml-1" />
        <div>
          <h1 className="text-3xl font-bold text-foreground flex items-center gap-2">
            <Zap className="h-8 w-8" />
            Quick Operations
          </h1>
          <p className="text-muted-foreground">Perform system-wide operations and emergency actions</p>
        </div>
      </div>

      {/* System Status */}
      <div className="grid md:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">System Status</CardTitle>
            <CheckCircle className="h-4 w-4 text-emerald-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-emerald-500">Operational</div>
            <p className="text-xs text-muted-foreground">All systems running normally</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Agents</CardTitle>
            <Bot className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5</div>
            <p className="text-xs text-muted-foreground">1 needs attention</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">System Load</CardTitle>
            <Zap className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">76%</div>
            <p className="text-xs text-muted-foreground">Within normal range</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Uptime</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">99.9%</div>
            <p className="text-xs text-muted-foreground">Last 30 days</p>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-2xl">Quick Actions</CardTitle>
          <CardDescription>Perform common system operations with one click</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {quickActions.map((action, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow cursor-pointer">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <action.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-sm">{action.title}</h4>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground mb-3">{action.description}</p>
                  <Button size="sm" className="w-full">
                    Execute
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Agent Management */}
      <div className="grid lg:grid-cols-2 gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Agent Management</CardTitle>
            <CardDescription>Monitor and control individual AI agents</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {agents.map((agent) => (
                <div key={agent.id} className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={selectedAgents.includes(agent.id)}
                      onChange={() => toggleAgentSelection(agent.id)}
                      className="rounded"
                    />
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Bot className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-sm">{agent.name}</p>
                      <p className="text-xs text-muted-foreground">Load: {agent.load}%</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`text-sm font-medium ${getLoadColor(agent.load)}`}>{agent.load}%</span>
                    {getStatusBadge(agent.status)}
                  </div>
                </div>
              ))}
              <div className="flex gap-2 pt-2">
                <Button size="sm" disabled={selectedAgents.length === 0}>
                  <Play className="h-4 w-4 mr-2" />
                  Start
                </Button>
                <Button size="sm" variant="outline" disabled={selectedAgents.length === 0}>
                  <Pause className="h-4 w-4 mr-2" />
                  Pause
                </Button>
                <Button size="sm" variant="outline" disabled={selectedAgents.length === 0}>
                  <RefreshCw className="h-4 w-4 mr-2" />
                  Restart
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Broadcast Message</CardTitle>
            <CardDescription>Send a message to all active customers</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="message-type">Message Type</Label>
                <select className="w-full p-2 border rounded-md bg-background">
                  <option>Information</option>
                  <option>Warning</option>
                  <option>Emergency</option>
                  <option>Maintenance</option>
                </select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="broadcast-message">Message Content</Label>
                <Textarea
                  id="broadcast-message"
                  placeholder="Enter your message here..."
                  value={broadcastMessage}
                  onChange={(e) => setBroadcastMessage(e.target.value)}
                  className="min-h-[100px]"
                />
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" id="all-channels" className="rounded" />
                <Label htmlFor="all-channels" className="text-sm">
                  Send to all channels
                </Label>
              </div>
              <Button className="w-full" disabled={!broadcastMessage.trim()}>
                <Send className="h-4 w-4 mr-2" />
                Send Broadcast
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Operations */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Recent Operations</CardTitle>
          <CardDescription>History of system operations and changes</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {recentOperations.map((operation) => (
              <div key={operation.id} className="flex items-center justify-between p-3 border rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Zap className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-sm">{operation.action}</p>
                    <p className="text-xs text-muted-foreground">
                      Target: {operation.target} • By: {operation.user}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xs text-muted-foreground">{operation.timestamp}</span>
                  {getStatusBadge(operation.status)}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
