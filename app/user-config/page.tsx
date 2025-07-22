"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { User, CreditCard, Plus, Trash2, Edit, Crown, Zap, DollarSign, Shield } from "lucide-react"

export default function UserConfig() {
  const [autoReplenish, setAutoReplenish] = useState(true)
  const [teamMembers] = useState([
    { id: 1, name: "John Doe", email: "john@company.com", role: "Admin", status: "active", joinDate: "2024-01-15" },
    {
      id: 2,
      name: "Sarah Wilson",
      email: "sarah@company.com",
      role: "Manager",
      status: "active",
      joinDate: "2024-02-01",
    },
    { id: 3, name: "Mike Johnson", email: "mike@company.com", role: "Agent", status: "active", joinDate: "2024-02-15" },
    { id: 4, name: "Emma Davis", email: "emma@company.com", role: "Agent", status: "pending", joinDate: "2024-03-01" },
  ])

  const [tokenPackages] = useState([
    { id: 1, name: "Starter Pack", tokens: 10000, price: 29, popular: false },
    { id: 2, name: "Professional Pack", tokens: 50000, price: 99, popular: true },
    { id: 3, name: "Enterprise Pack", tokens: 200000, price: 299, popular: false },
    { id: 4, name: "Unlimited Pack", tokens: 1000000, price: 999, popular: false },
  ])

  const [usageHistory] = useState([
    { month: "January", used: 45000, limit: 100000, cost: 135 },
    { month: "February", used: 62000, limit: 100000, cost: 186 },
    { month: "March", used: 38000, limit: 100000, cost: 114 },
    { month: "April", used: 71000, limit: 100000, cost: 213 },
  ])

  const getRoleBadge = (role: string) => {
    switch (role) {
      case "Admin":
        return (
          <Badge className="bg-red-100 text-red-800">
            <Crown className="w-3 h-3 mr-1" />
            Admin
          </Badge>
        )
      case "Manager":
        return (
          <Badge className="bg-blue-100 text-blue-800">
            <Shield className="w-3 h-3 mr-1" />
            Manager
          </Badge>
        )
      case "Agent":
        return (
          <Badge variant="secondary">
            <User className="w-3 h-3 mr-1" />
            Agent
          </Badge>
        )
      default:
        return <Badge variant="outline">{role}</Badge>
    }
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return <Badge className="bg-green-100 text-green-800">Active</Badge>
      case "pending":
        return <Badge className="bg-yellow-100 text-yellow-800">Pending</Badge>
      case "inactive":
        return <Badge variant="secondary">Inactive</Badge>
      default:
        return <Badge variant="outline">{status}</Badge>
    }
  }

  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Account Settings</h1>
        <p className="text-gray-600">Manage your profile, team, and subscription settings</p>
      </div>

      <Tabs defaultValue="profile" className="space-y-6">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="team">Team</TabsTrigger>
          <TabsTrigger value="subscription">Subscription</TabsTrigger>
          <TabsTrigger value="tokens">Tokens</TabsTrigger>
          <TabsTrigger value="billing">Billing</TabsTrigger>
        </TabsList>

        <TabsContent value="profile" className="space-y-6">
          <div className="grid lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Personal Information</CardTitle>
                <CardDescription>Update your personal details and contact information</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label>First Name</Label>
                    <Input defaultValue="John" />
                  </div>
                  <div>
                    <Label>Last Name</Label>
                    <Input defaultValue="Doe" />
                  </div>
                </div>
                <div>
                  <Label>Email Address</Label>
                  <Input type="email" defaultValue="john.doe@company.com" />
                </div>
                <div>
                  <Label>Phone Number</Label>
                  <Input type="tel" defaultValue="+1 (555) 123-4567" />
                </div>
                <div>
                  <Label>Company</Label>
                  <Input defaultValue="Acme Corporation" />
                </div>
                <div>
                  <Label>Job Title</Label>
                  <Input defaultValue="Customer Success Manager" />
                </div>
                <Button className="w-full">Save Changes</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Account Preferences</CardTitle>
                <CardDescription>Configure your account settings and preferences</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Email Notifications</Label>
                    <p className="text-sm text-gray-600">Receive email alerts for important events</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>SMS Notifications</Label>
                    <p className="text-sm text-gray-600">Get SMS alerts for urgent issues</p>
                  </div>
                  <Switch />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Weekly Reports</Label>
                    <p className="text-sm text-gray-600">Receive weekly performance summaries</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Marketing Communications</Label>
                    <p className="text-sm text-gray-600">Receive product updates and tips</p>
                  </div>
                  <Switch />
                </div>
                <div>
                  <Label>Time Zone</Label>
                  <select className="w-full p-2 border rounded-md mt-1">
                    <option>UTC-8 (Pacific Time)</option>
                    <option>UTC-5 (Eastern Time)</option>
                    <option>UTC+0 (GMT)</option>
                    <option>UTC+1 (Central European Time)</option>
                  </select>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="team" className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold">Team Members</h3>
              <p className="text-gray-600">Manage your team and their access permissions</p>
            </div>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Invite Member
            </Button>
          </div>

          <Card>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="border-b">
                    <tr>
                      <th className="text-left p-4">Member</th>
                      <th className="text-left p-4">Role</th>
                      <th className="text-left p-4">Status</th>
                      <th className="text-left p-4">Join Date</th>
                      <th className="text-left p-4">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {teamMembers.map((member) => (
                      <tr key={member.id} className="border-b hover:bg-gray-50">
                        <td className="p-4">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                              <User className="w-4 h-4 text-blue-600" />
                            </div>
                            <div>
                              <p className="font-medium">{member.name}</p>
                              <p className="text-sm text-gray-600">{member.email}</p>
                            </div>
                          </div>
                        </td>
                        <td className="p-4">{getRoleBadge(member.role)}</td>
                        <td className="p-4">{getStatusBadge(member.status)}</td>
                        <td className="p-4 text-sm text-gray-600">{member.joinDate}</td>
                        <td className="p-4">
                          <div className="flex items-center gap-2">
                            <Button size="sm" variant="outline">
                              <Edit className="h-3 w-3" />
                            </Button>
                            <Button size="sm" variant="outline">
                              <Trash2 className="h-3 w-3" />
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Team Permissions</CardTitle>
              <CardDescription>Configure role-based access controls</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Crown className="w-4 h-4 text-red-600" />
                      Admin
                    </h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Full system access</li>
                      <li>• Manage team members</li>
                      <li>• Billing and subscriptions</li>
                      <li>• System configuration</li>
                    </ul>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Shield className="w-4 h-4 text-blue-600" />
                      Manager
                    </h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Monitor conversations</li>
                      <li>• Manage AI agents</li>
                      <li>• View analytics</li>
                      <li>• Human takeover</li>
                    </ul>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <User className="w-4 h-4 text-gray-600" />
                      Agent
                    </h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Handle conversations</li>
                      <li>• View customer info</li>
                      <li>• Basic reporting</li>
                      <li>• Limited access</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="subscription" className="space-y-6">
          <div className="grid lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Crown className="h-5 w-5 text-yellow-600" />
                  Current Plan
                </CardTitle>
                <CardDescription>Your active subscription details</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-lg">Premium Plan</span>
                  <Badge className="bg-yellow-100 text-yellow-800">Active</Badge>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Monthly Price</span>
                    <span className="font-semibold">$299/month</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Token Allowance</span>
                    <span className="font-semibold">100,000 tokens</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Team Members</span>
                    <span className="font-semibold">Up to 10</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Next Billing</span>
                    <span className="font-semibold">April 15, 2024</span>
                  </div>
                </div>
                <div className="pt-4 border-t">
                  <Button className="w-full bg-transparent" variant="outline">
                    Change Plan
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Usage Overview</CardTitle>
                <CardDescription>Current month usage statistics</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-gray-600">Tokens Used</span>
                    <span className="text-sm font-semibold">71,000 / 100,000</span>
                  </div>
                  <Progress value={71} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-gray-600">API Calls</span>
                    <span className="text-sm font-semibold">12,847</span>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-gray-600">Active Agents</span>
                    <span className="text-sm font-semibold">5 / 5</span>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-gray-600">Team Members</span>
                    <span className="text-sm font-semibold">4 / 10</span>
                  </div>
                </div>
                <div className="pt-4 border-t">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Estimated Cost</span>
                    <span className="font-semibold text-lg">$213</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Available Plans</CardTitle>
              <CardDescription>Upgrade or downgrade your subscription</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-4 border rounded-lg">
                  <h4 className="font-semibold mb-2">Starter</h4>
                  <p className="text-2xl font-bold mb-2">
                    $99<span className="text-sm font-normal">/month</span>
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1 mb-4">
                    <li>• 25,000 tokens/month</li>
                    <li>• 3 AI agents</li>
                    <li>• Up to 5 team members</li>
                    <li>• Basic analytics</li>
                  </ul>
                  <Button variant="outline" className="w-full bg-transparent">
                    Current Plan
                  </Button>
                </div>
                <div className="p-4 border-2 border-blue-500 rounded-lg relative">
                  <Badge className="absolute -top-2 left-4 bg-blue-500">Current</Badge>
                  <h4 className="font-semibold mb-2">Premium</h4>
                  <p className="text-2xl font-bold mb-2">
                    $299<span className="text-sm font-normal">/month</span>
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1 mb-4">
                    <li>• 100,000 tokens/month</li>
                    <li>• 5 AI agents</li>
                    <li>• Up to 10 team members</li>
                    <li>• Advanced analytics</li>
                  </ul>
                  <Button className="w-full">Current Plan</Button>
                </div>
                <div className="p-4 border rounded-lg">
                  <h4 className="font-semibold mb-2">Enterprise</h4>
                  <p className="text-2xl font-bold mb-2">
                    $999<span className="text-sm font-normal">/month</span>
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1 mb-4">
                    <li>• 500,000 tokens/month</li>
                    <li>• Unlimited AI agents</li>
                    <li>• Unlimited team members</li>
                    <li>• Custom integrations</li>
                  </ul>
                  <Button variant="outline" className="w-full bg-transparent">
                    Upgrade
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="tokens" className="space-y-6">
          <div className="grid lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="h-5 w-5 text-yellow-600" />
                  Token Balance
                </CardTitle>
                <CardDescription>Your current token usage and balance</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">29,000</div>
                  <p className="text-gray-600">Tokens Remaining</p>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-gray-600">Monthly Usage</span>
                    <span className="text-sm font-semibold">71,000 / 100,000</span>
                  </div>
                  <Progress value={71} className="h-3" />
                </div>
                <div className="grid grid-cols-2 gap-4 pt-4 border-t">
                  <div className="text-center">
                    <div className="text-lg font-semibold">71,000</div>
                    <p className="text-xs text-gray-600">Used This Month</p>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-semibold">2,847</div>
                    <p className="text-xs text-gray-600">Daily Average</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Auto-Replenishment</CardTitle>
                <CardDescription>Automatically purchase tokens when running low</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Enable Auto-Replenishment</Label>
                    <p className="text-sm text-gray-600">Automatically buy tokens when balance is low</p>
                  </div>
                  <Switch checked={autoReplenish} onCheckedChange={setAutoReplenish} />
                </div>
                {autoReplenish && (
                  <>
                    <div>
                      <Label>Trigger Threshold</Label>
                      <select className="w-full p-2 border rounded-md mt-1">
                        <option>When balance drops below 10,000 tokens</option>
                        <option>When balance drops below 5,000 tokens</option>
                        <option>When balance drops below 2,000 tokens</option>
                      </select>
                    </div>
                    <div>
                      <Label>Purchase Amount</Label>
                      <select className="w-full p-2 border rounded-md mt-1">
                        <option>Professional Pack (50,000 tokens - $99)</option>
                        <option>Starter Pack (10,000 tokens - $29)</option>
                        <option>Enterprise Pack (200,000 tokens - $299)</option>
                      </select>
                    </div>
                    <div className="p-3 bg-blue-50 rounded-lg">
                      <p className="text-sm text-blue-800">
                        <strong>Next auto-purchase:</strong> Professional Pack will be purchased when your balance drops
                        below 10,000 tokens.
                      </p>
                    </div>
                  </>
                )}
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Purchase Additional Tokens</CardTitle>
              <CardDescription>Buy token packages to extend your usage</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {tokenPackages.map((pkg) => (
                  <div
                    key={pkg.id}
                    className={`p-4 border rounded-lg relative ${pkg.popular ? "border-blue-500 border-2" : ""}`}
                  >
                    {pkg.popular && <Badge className="absolute -top-2 left-4 bg-blue-500">Most Popular</Badge>}
                    <h4 className="font-semibold mb-2">{pkg.name}</h4>
                    <p className="text-2xl font-bold mb-2">${pkg.price}</p>
                    <p className="text-sm text-gray-600 mb-4">{pkg.tokens.toLocaleString()} tokens</p>
                    <p className="text-xs text-gray-500 mb-4">
                      ${((pkg.price / pkg.tokens) * 1000).toFixed(3)} per 1K tokens
                    </p>
                    <Button className={`w-full ${pkg.popular ? "" : "variant-outline"}`}>Purchase</Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="billing" className="space-y-6">
          <div className="grid lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CreditCard className="h-5 w-5" />
                  Payment Method
                </CardTitle>
                <CardDescription>Manage your billing information</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3 p-3 border rounded-lg">
                  <div className="w-10 h-6 bg-blue-600 rounded flex items-center justify-center text-white text-xs font-bold">
                    VISA
                  </div>
                  <div className="flex-1">
                    <p className="font-medium">•••• •••• •••• 4242</p>
                    <p className="text-sm text-gray-600">Expires 12/26</p>
                  </div>
                  <Button size="sm" variant="outline">
                    <Edit className="h-3 w-3" />
                  </Button>
                </div>
                <Button variant="outline" className="w-full bg-transparent">
                  <Plus className="h-4 w-4 mr-2" />
                  Add Payment Method
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Billing Address</CardTitle>
                <CardDescription>Your billing information</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label>Company Name</Label>
                  <Input defaultValue="Acme Corporation" />
                </div>
                <div>
                  <Label>Address</Label>
                  <Input defaultValue="123 Business St" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label>City</Label>
                    <Input defaultValue="San Francisco" />
                  </div>
                  <div>
                    <Label>ZIP Code</Label>
                    <Input defaultValue="94105" />
                  </div>
                </div>
                <Button className="w-full">Update Address</Button>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Usage History</CardTitle>
              <CardDescription>Your monthly usage and billing history</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="border-b">
                    <tr>
                      <th className="text-left p-3">Month</th>
                      <th className="text-left p-3">Tokens Used</th>
                      <th className="text-left p-3">Token Limit</th>
                      <th className="text-left p-3">Usage %</th>
                      <th className="text-left p-3">Cost</th>
                      <th className="text-left p-3">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {usageHistory.map((usage, index) => (
                      <tr key={index} className="border-b hover:bg-gray-50">
                        <td className="p-3 font-medium">{usage.month}</td>
                        <td className="p-3">{usage.used.toLocaleString()}</td>
                        <td className="p-3">{usage.limit.toLocaleString()}</td>
                        <td className="p-3">
                          <div className="flex items-center gap-2">
                            <div className="w-16 bg-gray-200 rounded-full h-2">
                              <div
                                className="bg-blue-500 h-2 rounded-full"
                                style={{ width: `${(usage.used / usage.limit) * 100}%` }}
                              ></div>
                            </div>
                            <span className="text-sm">{Math.round((usage.used / usage.limit) * 100)}%</span>
                          </div>
                        </td>
                        <td className="p-3 font-semibold">${usage.cost}</td>
                        <td className="p-3">
                          <Badge className="bg-green-100 text-green-800">Paid</Badge>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Invoices</CardTitle>
              <CardDescription>Download your billing invoices</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {["March 2024", "February 2024", "January 2024"].map((month, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-blue-100 rounded flex items-center justify-center">
                        <DollarSign className="w-4 h-4 text-blue-600" />
                      </div>
                      <div>
                        <p className="font-medium">Invoice - {month}</p>
                        <p className="text-sm text-gray-600">Premium Plan</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-semibold">$299.00</span>
                      <Button size="sm" variant="outline">
                        Download
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
