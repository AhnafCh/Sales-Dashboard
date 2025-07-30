"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Settings, CreditCard, Users, Shield, Package, Zap, CheckCircle, AlertCircle, Plus } from "lucide-react"

export default function UserConfig() {
  const [autoReplenish, setAutoReplenish] = useState(false)
  const [notifications, setNotifications] = useState(true)

  const tokenPackages = [
    { name: "Starter Pack", tokens: 10000, price: 29, popular: false },
    { name: "Professional Pack", tokens: 50000, price: 99, popular: true },
    { name: "Enterprise Pack", tokens: 200000, price: 299, popular: false },
  ]

  const teamMembers = [
    { name: "John Doe", email: "john@company.com", role: "Admin", status: "active" },
    { name: "Jane Smith", email: "jane@company.com", role: "Manager", status: "active" },
    { name: "Mike Johnson", email: "mike@company.com", role: "Agent", status: "inactive" },
  ]

  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <SidebarTrigger className="-ml-1" />
        <div>
          <h1 className="text-3xl font-bold text-foreground">User Configuration</h1>
          <p className="text-muted-foreground">Manage your account, team, and subscription settings</p>
        </div>
      </div>

      {/* Account Overview */}
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Current Plan</CardTitle>
            <Package className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Premium</div>
            <p className="text-xs text-muted-foreground">
              <CheckCircle className="h-3 w-3 inline mr-1 text-emerald-500" />
              Active until Dec 2024
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Token Balance</CardTitle>
            <Zap className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">47,250</div>
            <p className="text-xs text-muted-foreground">
              <AlertCircle className="h-3 w-3 inline mr-1 text-yellow-500" />
              Running low - consider refill
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Team Members</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">2 active, 1 inactive</p>
          </CardContent>
        </Card>
      </div>

      {/* Token Management */}
      <Card className="mb-8">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Zap className="h-6 w-6" />
                Token Management
              </CardTitle>
              <CardDescription>Purchase additional tokens or set up automatic replenishment</CardDescription>
            </div>
            <div className="flex items-center space-x-2">
              <Label htmlFor="auto-replenish">Auto-replenish</Label>
              <Switch id="auto-replenish" checked={autoReplenish} onCheckedChange={setAutoReplenish} />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm text-muted-foreground mb-2">
                <span>Token Usage This Month</span>
                <span>72,750 / 100,000</span>
              </div>
              <Progress value={72.75} className="h-3" />
            </div>

            <div className="grid md:grid-cols-3 gap-4 mt-6">
              {tokenPackages.map((pkg, index) => (
                <Card key={index} className={`relative ${pkg.popular ? "border-primary" : ""}`}>
                  {pkg.popular && (
                    <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-primary">
                      Most Popular
                    </Badge>
                  )}
                  <CardContent className="p-4">
                    <div className="text-center">
                      <h4 className="font-semibold text-lg">{pkg.name}</h4>
                      <div className="text-2xl font-bold text-primary mt-2">${pkg.price}</div>
                      <p className="text-sm text-muted-foreground">{pkg.tokens.toLocaleString()} tokens</p>
                      <Button className="w-full mt-4" variant={pkg.popular ? "default" : "outline"}>
                        Purchase
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Team Management */}
      <Card className="mb-8">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Users className="h-6 w-6" />
                Team Management
              </CardTitle>
              <CardDescription>Manage team members and their access levels</CardDescription>
            </div>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Add Member
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {teamMembers.map((member, index) => (
              <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-sm font-medium">
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                  <div>
                    <p className="font-medium">{member.name}</p>
                    <p className="text-sm text-muted-foreground">{member.email}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Badge variant={member.status === "active" ? "default" : "secondary"}>{member.status}</Badge>
                  <Badge variant="outline">{member.role}</Badge>
                  <Button variant="ghost" size="sm">
                    Edit
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Account Settings */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Settings className="h-5 w-5" />
              Account Settings
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="company-name">Company Name</Label>
              <Input id="company-name" defaultValue="Acme Corporation" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="contact-email">Contact Email</Label>
              <Input id="contact-email" type="email" defaultValue="admin@acme.com" />
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Email Notifications</Label>
                <p className="text-sm text-muted-foreground">Receive updates about your account</p>
              </div>
              <Switch checked={notifications} onCheckedChange={setNotifications} />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CreditCard className="h-5 w-5" />
              Billing Information
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-4 border rounded-lg">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Premium Plan</p>
                  <p className="text-sm text-muted-foreground">$99/month</p>
                </div>
                <Badge>Active</Badge>
              </div>
            </div>
            <div className="p-4 border rounded-lg">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Payment Method</p>
                  <p className="text-sm text-muted-foreground">•••• •••• •••• 4242</p>
                </div>
                <Button variant="outline" size="sm">
                  Update
                </Button>
              </div>
            </div>
            <Button className="w-full bg-transparent" variant="outline">
              <Shield className="h-4 w-4 mr-2" />
              View Billing History
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
