"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Plus, Facebook, Twitter, Instagram, Globe, MessageSquare, Upload, AlertCircle, Settings } from "lucide-react"
import { SidebarTrigger } from "@/components/ui/sidebar"

export default function ChannelManagement() {
  const [connectedChannels] = useState([
    { id: 1, name: "Facebook Page", type: "facebook", status: "connected", knowledge: "complete", conversations: 156 },
    { id: 2, name: "Company Website", type: "website", status: "connected", knowledge: "pending", conversations: 89 },
    {
      id: 3,
      name: "Instagram Business",
      type: "instagram",
      status: "connected",
      knowledge: "complete",
      conversations: 234,
    },
    { id: 4, name: "Twitter Support", type: "twitter", status: "pending", knowledge: "none", conversations: 0 },
    {
      id: 5,
      name: "WhatsApp Business",
      type: "whatsapp",
      status: "connected",
      knowledge: "updating",
      conversations: 67,
    },
  ])

  const [knowledgeBase] = useState([
    { id: 1, channel: "Facebook Page", documents: 12, status: "processed", lastUpdate: "2 hours ago" },
    { id: 2, channel: "Company Website", documents: 8, status: "processing", lastUpdate: "30 min ago" },
    { id: 3, channel: "Instagram Business", documents: 15, status: "processed", lastUpdate: "1 day ago" },
    { id: 4, channel: "WhatsApp Business", documents: 6, status: "updating", lastUpdate: "5 min ago" },
  ])

  const getChannelIcon = (type: string) => {
    switch (type) {
      case "facebook":
        return <Facebook className="h-5 w-5 text-primary" />
      case "twitter":
        return <Twitter className="h-5 w-5 text-blue-400" />
      case "instagram":
        return <Instagram className="h-5 w-5 text-pink-400" />
      case "website":
        return <Globe className="h-5 w-5 text-muted-foreground" />
      case "whatsapp":
        return <MessageSquare className="h-5 w-5 text-emerald-400" />
      default:
        return <Globe className="h-5 w-5 text-muted-foreground" />
    }
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "connected":
        return <Badge className="bg-emerald-900/40 text-emerald-300">Connected</Badge>
      case "pending":
        return <Badge variant="secondary">Pending</Badge>
      case "processing":
        return <Badge className="bg-amber-900/40 text-amber-300">Processing</Badge>
      case "updating":
        return <Badge className="bg-blue-900/40 text-blue-300">Updating</Badge>
      case "complete":
        return <Badge className="bg-emerald-900/40 text-emerald-300">Complete</Badge>
      case "none":
        return <Badge variant="destructive">Not Set</Badge>
      default:
        return <Badge variant="secondary">{status}</Badge>
    }
  }

  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <SidebarTrigger className="-ml-1" />
        <div>
          <h1 className="text-3xl font-bold text-foreground">Channel Management</h1>
          <p className="text-muted-foreground">Connect platforms and manage knowledge bases</p>
        </div>
      </div>

      {/* Remove the AI Agent Configuration tab since it's not needed */}
      <Tabs defaultValue="connections" className="space-y-6">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="connections">Platform Connections</TabsTrigger>
          <TabsTrigger value="knowledge">Knowledge Base</TabsTrigger>
        </TabsList>

        <TabsContent value="connections" className="space-y-6">
          {/* Available Integrations */}
          <Card>
            <CardHeader>
              <CardTitle>Available Integrations</CardTitle>
              <CardDescription>Connect new platforms to expand your AI customer service reach</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                <Card className="cursor-pointer hover:shadow-md transition-shadow border-dashed border-2">
                  <CardContent className="p-6 text-center">
                    <Facebook className="h-8 w-8 text-primary mx-auto mb-3" />
                    <h3 className="font-semibold mb-2">Facebook Pages</h3>
                    <p className="text-sm text-muted-foreground mb-4">Connect your Facebook business pages</p>
                    <Button size="sm" className="w-full">
                      <Plus className="h-4 w-4 mr-2" />
                      Connect
                    </Button>
                  </CardContent>
                </Card>

                <Card className="cursor-pointer hover:shadow-md transition-shadow border-dashed border-2">
                  <CardContent className="p-6 text-center">
                    <Globe className="h-8 w-8 text-muted-foreground mx-auto mb-3" />
                    <h3 className="font-semibold mb-2">Website Chat</h3>
                    <p className="text-sm text-muted-foreground mb-4">Embed AI chat on your website</p>
                    <Button size="sm" className="w-full">
                      <Plus className="h-4 w-4 mr-2" />
                      Connect
                    </Button>
                  </CardContent>
                </Card>

                <Card className="cursor-pointer hover:shadow-md transition-shadow border-dashed border-2">
                  <CardContent className="p-6 text-center">
                    <MessageSquare className="h-8 w-8 text-emerald-400 mx-auto mb-3" />
                    <h3 className="font-semibold mb-2">WhatsApp Business</h3>
                    <p className="text-sm text-muted-foreground mb-4">Connect WhatsApp Business API</p>
                    <Button size="sm" className="w-full">
                      <Plus className="h-4 w-4 mr-2" />
                      Connect
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>

          {/* Connected Channels */}
          <Card>
            <CardHeader>
              <CardTitle>Connected Channels</CardTitle>
              <CardDescription>Manage your active platform connections</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {connectedChannels.map((channel) => (
                  <div key={channel.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center gap-4">
                      {getChannelIcon(channel.type)}
                      <div>
                        <h3 className="font-semibold">{channel.name}</h3>
                        <p className="text-sm text-muted-foreground">{channel.conversations} conversations this week</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-sm text-muted-foreground">Status:</span>
                          {getStatusBadge(channel.status)}
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-muted-foreground">Knowledge:</span>
                          {getStatusBadge(channel.knowledge)}
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        <Settings className="h-4 w-4 mr-2" />
                        Configure
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="knowledge" className="space-y-6">
          {/* Knowledge Base Upload */}
          <Card>
            <CardHeader>
              <CardTitle>Channel Knowledge Management</CardTitle>
              <CardDescription>Upload and manage training documents for each connected platform</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <Label htmlFor="channel-select">Select Channel</Label>
                  <select className="w-full p-2 border rounded-md">
                    <option>Facebook Page</option>
                    <option>Company Website</option>
                    <option>Instagram Business</option>
                    <option>WhatsApp Business</option>
                  </select>

                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                    <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Upload Training Documents</h3>
                    <p className="text-muted-foreground mb-4">Drag and drop files or click to browse</p>
                    <Button>
                      <Upload className="h-4 w-4 mr-2" />
                      Choose Files
                    </Button>
                    <p className="text-xs text-gray-500 mt-2">Supports PDF, DOC, TXT files up to 10MB each</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-semibold">Processing Status</h3>
                  {knowledgeBase.map((kb) => (
                    <div key={kb.id} className="p-4 border rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium">{kb.channel}</h4>
                        {getStatusBadge(kb.status)}
                      </div>
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <span>{kb.documents} documents</span>
                        <span>Updated {kb.lastUpdate}</span>
                      </div>
                      {kb.status === "processing" && <Progress value={65} className="mt-2" />}
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Knowledge Gap Alerts */}
          <Card>
            <CardHeader>
              <CardTitle>Knowledge Gap Alerts</CardTitle>
              <CardDescription>Areas where AI agents need additional training data</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 bg-muted/30 border border-yellow-200 rounded-lg">
                  <AlertCircle className="h-5 w-5 text-yellow-600" />
                  <div className="flex-1">
                    <p className="font-medium">Product return policy questions</p>
                    <p className="text-sm text-muted-foreground">
                      Facebook Page - 12 unanswered queries in the last 24 hours
                    </p>
                  </div>
                  <Button size="sm" variant="outline">
                    Add Knowledge
                  </Button>
                </div>

                <div className="flex items-center gap-3 p-3 bg-muted/30 border border-yellow-200 rounded-lg">
                  <AlertCircle className="h-5 w-5 text-yellow-600" />
                  <div className="flex-1">
                    <p className="font-medium">Shipping information for international orders</p>
                    <p className="text-sm text-muted-foreground">Website Chat - 8 escalations to human agents</p>
                  </div>
                  <Button size="sm" variant="outline">
                    Add Knowledge
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
