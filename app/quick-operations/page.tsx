"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { SidebarTrigger } from "@/components/ui/sidebar"
import {
  Zap,
  RefreshCw,
  Power,
  Settings,
  AlertTriangle,
  CheckCircle,
  Clock,
  Send,
  AirplayIcon as Broadcast,
  Users,
  MessageSquare,
  Shield,
  Database,
} from "lucide-react"

export default function QuickOperations() {
  const [broadcastMessage, setBroadcastMessage] = useState("")
  const [selectedAgent, setSelectedAgent] = useState("")
  const [maintenanceMode, setMaintenanceMode] = useState(false)

  const quickActions = [
    {
      title: "Restart All Agents",
      description: "Restart all AI agents to apply updates",
      icon: RefreshCw,
      action: "restart-agents",
      variant: "default" as const,
      dangerous: false,
    },
    {
      title: "Emergency Shutdown",
      description: "Immediately stop all AI operations",
      icon: Power,
      action: "emergency-shutdown",
      variant: "destructive" as const,
      dangerous: true,
    },
    {
      title: "Clear Cache",
      description: "Clear system cache and temporary data",
      icon: Database,
      action: "clear-cache",
      variant: "outline" as const,
      dangerous: false,
    },
    {
      title: "Maintenance Mode",
      description: "Enable maintenance mode for system updates",
      icon: Settings,
      action: "maintenance-mode",
      variant: "secondary" as const,
      dangerous: false,
    },
  ]

  const systemStatus = [
    { component: "AI Agents", status: "operational", uptime: "99.9%" },
    { component: "Database", status: "operational", uptime: "99.8%" },
    { component: "API Gateway", status: "operational", uptime: "99.9%" },
    { component: "Message Queue", status: "warning", uptime: "98.5%" },
    { component: "File Storage", status: "operational", uptime: "99.7%" },
    { component: "Authentication", status: "operational", uptime: "99.9%" },
  ]

  const recentOperations = [
    {
      id: 1,
      operation: "Agent Restart",
      user: "John Doe",
      timestamp: "2 minutes ago",
      status: "completed",
      details: "Restarted Sales agent due to memory leak",
    },
    {
      id: 2,
      operation: "Cache Clear",
      user: "Sarah Johnson",
      timestamp: "15 minutes ago",
      status: "completed",
      details: "Cleared knowledge base cache",
    },
    {
      id: 3,
      operation: "Broadcast Message",
      user: "Mike Chen",
      timestamp: "1 hour ago",
      status: "completed",
      details: "Sent maintenance notification to all users",
    },
    {
      id: 4,
      operation: "Database Backup",
      user: "System",
      timestamp: "2 hours ago",
      status: "in-progress",
      details: "Automated daily backup in progress",
    },
  ]

  const agents = [
    { name: "Sales", status: "active" },
    { name: "Support", status: "active" },
    { name: "Telco", status: "active" },
    { name: "Onboarding", status: "active" },
    { name: "AirVoice", status: "warning" },
  ]

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "operational":
        return <CheckCircle className="h-4 w-4 text-emerald-500" />
      case "warning":
        return <AlertTriangle className="h-4 w-4 text-yellow-500" />
      case "error":
        return <AlertTriangle className="h-4 w-4 text-red-500" />
      default:
        return <Clock className="h-4 w-4 text-gray-500" />
    }
  }

  const getStatusVariant = (status: string) => {
    switch (status) {
      case "completed":
        return "default"
      case "in-progress":
        return "secondary"
      case "failed":
        return "destructive"
      default:
        return "outline"
    }
  }

  const handleQuickAction = (action: string) => {
    console.log(`Executing action: ${action}`)
    // Handle the action
  }

  const handleBroadcast = () => {
    if (broadcastMessage.trim()) {
      console.log(`Broadcasting message: ${broadcastMessage}`)
      setBroadcastMessage("")
    }
  }

  const handleAgentRestart = () => {
    if (selectedAgent) {
      console.log(`Restarting agent: ${selectedAgent}`)
      setSelectedAgent("")
    }
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
          <p className="text-muted-foreground">Perform system operations and manage AI agents</p>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Quick Actions */}
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="h-5 w-5" />
                Quick Actions
              </CardTitle>
              <CardDescription>Perform common system operations</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                {quickActions.map((action, index) => {
                  const IconComponent = action.icon
                  return (
                    <Card
                      key={index}
                      className={`cursor-pointer hover:shadow-md transition-shadow ${action.dangerous ? "border-red-200 dark:border-red-800" : ""}`}
                    >
                      <CardContent className="p-4">
                        <div className="flex items-start gap-3">
                          <div
                            className={`p-2 rounded-lg ${action.dangerous ? "bg-red-100 dark:bg-red-950" : "bg-primary/10"}`}
                          >
                            <IconComponent
                              className={`h-5 w-5 ${action.dangerous ? "text-red-600 dark:text-red-400" : "text-primary"}`}
                            />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold mb-1">{action.title}</h4>
                            <p className="text-sm text-muted-foreground mb-3">{action.description}</p>
                            <Button
                              size="sm"
                              variant={action.variant}
                              onClick={() => handleQuickAction(action.action)}
                              className="w-full"
                            >
                              Execute
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </CardContent>
          </Card>

          {/* Individual Agent Control */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                Individual Agent Control
              </CardTitle>
              <CardDescription>Restart or configure specific AI agents</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-4">
                <Select value={selectedAgent} onValueChange={setSelectedAgent}>
                  <SelectTrigger className="flex-1">
                    <SelectValue placeholder="Select an agent" />
                  </SelectTrigger>
                  <SelectContent>
                    {agents.map((agent) => (
                      <SelectItem key={agent.name} value={agent.name}>
                        {agent.name} - {agent.status}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Button onClick={handleAgentRestart} disabled={!selectedAgent}>
                  <RefreshCw className="h-4 w-4 mr-2" />
                  Restart
                </Button>
              </div>

              <div className="grid md:grid-cols-5 gap-2">
                {agents.map((agent) => (
                  <div key={agent.name} className="text-center p-2 border rounded-lg">
                    <div className="font-medium text-sm">{agent.name}</div>
                    <Badge variant={agent.status === "active" ? "default" : "secondary"} className="text-xs mt-1">
                      {agent.status}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Broadcast Message */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Broadcast className="h-5 w-5" />
                Broadcast Message
              </CardTitle>
              <CardDescription>Send a message to all active users</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Textarea
                placeholder="Enter your broadcast message..."
                value={broadcastMessage}
                onChange={(e) => setBroadcastMessage(e.target.value)}
                className="min-h-[100px]"
              />
              <div className="flex gap-2">
                <Button onClick={handleBroadcast} disabled={!broadcastMessage.trim()}>
                  <Send className="h-4 w-4 mr-2" />
                  Send Broadcast
                </Button>
                <Button variant="outline">
                  <MessageSquare className="h-4 w-4 mr-2" />
                  Preview
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* System Status & Recent Operations */}
        <div className="space-y-6">
          {/* System Status */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5" />
                System Status
              </CardTitle>
              <CardDescription>Current status of system components</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {systemStatus.map((component, index) => (
                  <div key={index} className="flex items-center justify-between p-2 border rounded-lg">
                    <div className="flex items-center gap-2">
                      {getStatusIcon(component.status)}
                      <span className="font-medium text-sm">{component.component}</span>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium">{component.uptime}</div>
                      <div className="text-xs text-muted-foreground">uptime</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Recent Operations */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                Recent Operations
              </CardTitle>
              <CardDescription>Latest system operations and their status</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {recentOperations.map((operation) => (
                  <div key={operation.id} className="border rounded-lg p-3">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h4 className="font-semibold text-sm">{operation.operation}</h4>
                        <p className="text-xs text-muted-foreground">by {operation.user}</p>
                      </div>
                      <Badge variant={getStatusVariant(operation.status)} className="text-xs">
                        {operation.status}
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground mb-1">{operation.details}</p>
                    <p className="text-xs text-muted-foreground">{operation.timestamp}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
