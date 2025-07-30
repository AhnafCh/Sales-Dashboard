"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Users, CreditCard, Bell, Shield, Package, Plus, Check, Star } from "lucide-react"

export default function UserConfig() {
  const [notifications, setNotifications] = useState({
    email: true,
    push: false,
    sms: true,
  })

  const [autoReplenish, setAutoReplenish] = useState(false)

  const tokenPackages = [
    { name: "Starter Pack", tokens: 10000, price: 29, popular: false },
    { name: "Professional Pack", tokens: 50000, price: 99, popular: true },
    { name: "Enterprise Pack", tokens: 200000, price: 299, popular: false },
  ]

  const currentSubscription = {
    plan: "Professional",
    tokensUsed: 32500,
    tokensTotal: 50000,
    renewalDate: "2024-02-15",
    status: "active",
  }

  const teamAffiliations = [
    { name: "Sales Team", role: "Member", status: "active" },
    { name: "Support Team", role: "Admin", status: "active" },
    { name: "Marketing Team", role: "Member", status: "pending" },
  ]

  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <SidebarTrigger className="-ml-1" />
        <div>
          <h1 className="text-3xl font-bold text-foreground">User Configuration</h1>
          <p className="text-muted-foreground">Manage your account settings and preferences</p>
        </div>
      </div>

      <div className="grid gap-6">
        {/* Current Subscription */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CreditCard className="h-5 w-5" />
              Current Subscription
            </CardTitle>
            <CardDescription>Your current plan and usage details</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label className="text-sm font-medium">Plan</Label>
                <div className="flex items-center gap-2">
                  <Badge variant="default">{currentSubscription.plan}</Badge>
                  <Badge variant={currentSubscription.status === "active" ? "default" : "secondary"}>
                    {currentSubscription.status}
                  </Badge>
                </div>
              </div>
              <div className="space-y-2">
                <Label className="text-sm font-medium">Token Usage</Label>
                <div className="text-2xl font-bold">
                  {currentSubscription.tokensUsed.toLocaleString()} / {currentSubscription.tokensTotal.toLocaleString()}
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div
                    className="bg-primary h-2 rounded-full"
                    style={{ width: `${(currentSubscription.tokensUsed / currentSubscription.tokensTotal) * 100}%` }}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label className="text-sm font-medium">Next Renewal</Label>
                <div className="text-lg font-semibold">{currentSubscription.renewalDate}</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Token Packages */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Package className="h-5 w-5" />
              Purchase Additional Tokens
            </CardTitle>
            <CardDescription>Buy extra token packages or set up automated replenishment</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Auto-replenish Toggle */}
            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div className="space-y-1">
                <Label className="text-sm font-medium">Automated Token Replenishment</Label>
                <p className="text-sm text-muted-foreground">
                  Automatically purchase tokens when your balance runs low
                </p>
              </div>
              <Switch checked={autoReplenish} onCheckedChange={setAutoReplenish} />
            </div>

            {/* Token Packages Grid */}
            <div className="grid md:grid-cols-3 gap-4">
              {tokenPackages.map((pkg, index) => (
                <Card key={index} className={`relative ${pkg.popular ? "border-primary" : ""}`}>
                  {pkg.popular && (
                    <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-primary text-primary-foreground">
                        <Star className="h-3 w-3 mr-1" />
                        Popular
                      </Badge>
                    </div>
                  )}
                  <CardContent className="p-6 text-center">
                    <h3 className="font-semibold text-lg mb-2">{pkg.name}</h3>
                    <div className="text-3xl font-bold mb-2">${pkg.price}</div>
                    <p className="text-muted-foreground mb-4">{pkg.tokens.toLocaleString()} tokens</p>
                    <Button className="w-full" variant={pkg.popular ? "default" : "outline"}>
                      <Plus className="h-4 w-4 mr-2" />
                      Purchase
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Team Affiliations */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              Team Affiliations
            </CardTitle>
            <CardDescription>Manage your team memberships and roles</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {teamAffiliations.map((team, index) => (
                <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="space-y-1">
                    <div className="font-medium">{team.name}</div>
                    <div className="text-sm text-muted-foreground">Role: {team.role}</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant={team.status === "active" ? "default" : "secondary"}>
                      {team.status === "active" && <Check className="h-3 w-3 mr-1" />}
                      {team.status}
                    </Badge>
                    <Button variant="outline" size="sm">
                      Manage
                    </Button>
                  </div>
                </div>
              ))}
              <Button variant="outline" className="w-full bg-transparent">
                <Plus className="h-4 w-4 mr-2" />
                Join New Team
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Notification Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bell className="h-5 w-5" />
              Notification Preferences
            </CardTitle>
            <CardDescription>Configure how you receive notifications</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <Label className="text-sm font-medium">Email Notifications</Label>
                <p className="text-sm text-muted-foreground">Receive updates via email</p>
              </div>
              <Switch
                checked={notifications.email}
                onCheckedChange={(checked) => setNotifications((prev) => ({ ...prev, email: checked }))}
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <Label className="text-sm font-medium">Push Notifications</Label>
                <p className="text-sm text-muted-foreground">Browser push notifications</p>
              </div>
              <Switch
                checked={notifications.push}
                onCheckedChange={(checked) => setNotifications((prev) => ({ ...prev, push: checked }))}
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <Label className="text-sm font-medium">SMS Notifications</Label>
                <p className="text-sm text-muted-foreground">Critical alerts via SMS</p>
              </div>
              <Switch
                checked={notifications.sms}
                onCheckedChange={(checked) => setNotifications((prev) => ({ ...prev, sms: checked }))}
              />
            </div>
          </CardContent>
        </Card>

        {/* Account Security */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5" />
              Account Security
            </CardTitle>
            <CardDescription>Manage your account security settings</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="current-password">Current Password</Label>
                <Input id="current-password" type="password" placeholder="Enter current password" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="new-password">New Password</Label>
                <Input id="new-password" type="password" placeholder="Enter new password" />
              </div>
            </div>
            <Button>Update Password</Button>
          </CardContent>
        </Card>

        {/* Save Changes */}
        <div className="flex justify-end gap-4">
          <Button variant="outline">Cancel</Button>
          <Button>Save Changes</Button>
        </div>
      </div>
    </div>
  )
}
