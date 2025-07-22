"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Download, TrendingUp, TrendingDown, MessageSquare, Clock, Users, Star, PieChart } from "lucide-react"
import { SidebarTrigger } from "@/components/ui/sidebar"

export default function Analytics() {
  const [timeRange, setTimeRange] = useState("7d")
  const [selectedMetric, setSelectedMetric] = useState("volume")

  const metrics = {
    volume: { current: 12847, previous: 11234, change: 14.4 },
    responseTime: { current: 2.3, previous: 2.8, change: -17.9 },
    satisfaction: { current: 4.6, previous: 4.4, change: 4.5 },
    resolution: { current: 94.2, previous: 91.8, change: 2.6 },
  }

  const channelData = [
    { channel: "Facebook", volume: 3456, satisfaction: 4.7, avgTime: "2.1s", resolution: 96.2 },
    { channel: "Website Chat", volume: 4123, satisfaction: 4.5, avgTime: "1.8s", resolution: 94.8 },
    { channel: "Instagram", volume: 2890, satisfaction: 4.8, avgTime: "2.4s", resolution: 95.1 },
    { channel: "Phone", volume: 1678, satisfaction: 4.3, avgTime: "3.2s", resolution: 89.7 },
    { channel: "WhatsApp", volume: 700, satisfaction: 4.9, avgTime: "1.9s", resolution: 97.3 },
  ]

  const intentData = [
    { intent: "Product Information", count: 2847, percentage: 22.1 },
    { intent: "Order Status", count: 2156, percentage: 16.8 },
    { intent: "Technical Support", count: 1923, percentage: 15.0 },
    { intent: "Billing Inquiry", count: 1678, percentage: 13.1 },
    { intent: "Returns/Refunds", count: 1456, percentage: 11.3 },
    { intent: "Account Issues", count: 1234, percentage: 9.6 },
    { intent: "General Inquiry", count: 987, percentage: 7.7 },
    { intent: "Complaints", count: 566, percentage: 4.4 },
  ]

  const peakHours = [
    { hour: "9 AM", volume: 456 },
    { hour: "10 AM", volume: 623 },
    { hour: "11 AM", volume: 789 },
    { hour: "12 PM", volume: 834 },
    { hour: "1 PM", volume: 912 },
    { hour: "2 PM", volume: 1023 },
    { hour: "3 PM", volume: 1156 },
    { hour: "4 PM", volume: 987 },
    { hour: "5 PM", volume: 756 },
  ]

  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <SidebarTrigger className="-ml-1" />
          <div>
            <h1 className="text-3xl font-bold text-foreground">Advanced Analytics</h1>
            <p className="text-muted-foreground">Business intelligence and performance insights</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Select value={timeRange} onValueChange={setTimeRange}>
            <SelectTrigger className="w-32">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="24h">Last 24h</SelectItem>
              <SelectItem value="7d">Last 7 days</SelectItem>
              <SelectItem value="30d">Last 30 days</SelectItem>
              <SelectItem value="90d">Last 90 days</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid md:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Message Volume</CardTitle>
            <MessageSquare className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{metrics.volume.current.toLocaleString()}</div>
            <div className="flex items-center text-xs text-muted-foreground">
              <TrendingUp className="h-3 w-3 mr-1 text-emerald-400" />
              <span className="text-emerald-400">+{metrics.volume.change}%</span>
              <span className="ml-1">from last period</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg Response Time</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{metrics.responseTime.current}s</div>
            <div className="flex items-center text-xs text-muted-foreground">
              <TrendingDown className="h-3 w-3 mr-1 text-emerald-400" />
              <span className="text-emerald-400">{metrics.responseTime.change}%</span>
              <span className="ml-1">improvement</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Satisfaction Score</CardTitle>
            <Star className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{metrics.satisfaction.current}/5</div>
            <div className="flex items-center text-xs text-muted-foreground">
              <TrendingUp className="h-3 w-3 mr-1 text-emerald-400" />
              <span className="text-emerald-400">+{metrics.satisfaction.change}%</span>
              <span className="ml-1">from last period</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Resolution Rate</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{metrics.resolution.current}%</div>
            <div className="flex items-center text-xs text-muted-foreground">
              <TrendingUp className="h-3 w-3 mr-1 text-emerald-400" />
              <span className="text-emerald-400">+{metrics.resolution.change}%</span>
              <span className="ml-1">from last period</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="channels">Channel Performance</TabsTrigger>
          <TabsTrigger value="intents">Intent Analysis</TabsTrigger>
          <TabsTrigger value="satisfaction">Satisfaction</TabsTrigger>
          <TabsTrigger value="operations">Operations</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Message Volume Chart */}
            <Card>
              <CardHeader>
                <CardTitle>Message Volume Trend</CardTitle>
                <CardDescription>Daily conversation volume over time</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-64 flex items-end justify-between gap-2 p-4">
                  {[1200, 1450, 1100, 1800, 1650, 1900, 2100].map((value, index) => (
                    <div key={index} className="flex flex-col items-center gap-2">
                      <div
                        className="bg-blue-500 rounded-t w-8 transition-all hover:bg-blue-600"
                        style={{ height: `${(value / 2100) * 200}px` }}
                      ></div>
                      <span className="text-xs text-muted-foreground">
                        {new Date(Date.now() - (6 - index) * 24 * 60 * 60 * 1000).toLocaleDateString("en-US", {
                          weekday: "short",
                        })}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Peak Hours */}
            <Card>
              <CardHeader>
                <CardTitle>Peak Hours Analysis</CardTitle>
                <CardDescription>Conversation volume by hour of day</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {peakHours.map((hour, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <span className="text-sm font-medium w-16">{hour.hour}</span>
                      <div className="flex-1 bg-muted/30 rounded-full h-2">
                        <div
                          className="bg-green-500 h-2 rounded-full transition-all"
                          style={{ width: `${(hour.volume / 1156) * 100}%` }}
                        ></div>
                      </div>
                      <span className="text-sm text-muted-foreground w-12">{hour.volume}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sales Completion */}
          <Card>
            <CardHeader>
              <CardTitle>Sales Completion Tracking</CardTitle>
              <CardDescription>AI-assisted sales conversions and completion rates</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-400">156</div>
                  <p className="text-sm text-muted-foreground">Sales Completed</p>
                  <p className="text-xs text-emerald-400">+23% vs last period</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">$47,890</div>
                  <p className="text-sm text-muted-foreground">Revenue Generated</p>
                  <p className="text-xs text-primary">+18% vs last period</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400">12.3%</div>
                  <p className="text-sm text-muted-foreground">Conversion Rate</p>
                  <p className="text-xs text-purple-400">+2.1% vs last period</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="channels" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Channel Performance Comparison</CardTitle>
              <CardDescription>Detailed metrics across all connected platforms</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-3">Channel</th>
                      <th className="text-left p-3">Volume</th>
                      <th className="text-left p-3">Satisfaction</th>
                      <th className="text-left p-3">Avg Response</th>
                      <th className="text-left p-3">Resolution Rate</th>
                      <th className="text-left p-3">Performance</th>
                    </tr>
                  </thead>
                  <tbody>
                    {channelData.map((channel, index) => (
                      <tr key={index} className="border-b hover:bg-muted/30">
                        <td className="p-3 font-medium">{channel.channel}</td>
                        <td className="p-3">{channel.volume.toLocaleString()}</td>
                        <td className="p-3">
                          <div className="flex items-center gap-1">
                            <Star className="h-4 w-4 text-yellow-500 fill-current" />
                            <span>{channel.satisfaction}</span>
                          </div>
                        </td>
                        <td className="p-3">{channel.avgTime}</td>
                        <td className="p-3">{channel.resolution}%</td>
                        <td className="p-3">
                          <Badge
                            className={
                              channel.resolution > 95
                                ? "bg-emerald-900/40 text-emerald-300"
                                : channel.resolution > 90
                                  ? "bg-amber-900/40 text-amber-300"
                                  : "bg-red-900/40 text-red-300"
                            }
                          >
                            {channel.resolution > 95
                              ? "Excellent"
                              : channel.resolution > 90
                                ? "Good"
                                : "Needs Improvement"}
                          </Badge>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="intents" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Intent Categorization</CardTitle>
              <CardDescription>Analysis of customer inquiry types and patterns</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid lg:grid-cols-2 gap-6">
                <div className="space-y-4">
                  {intentData.map((intent, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm font-medium">{intent.intent}</span>
                          <span className="text-sm text-muted-foreground">{intent.count}</span>
                        </div>
                        <div className="bg-muted/30 rounded-full h-2">
                          <div
                            className="bg-blue-500 h-2 rounded-full transition-all"
                            style={{ width: `${intent.percentage}%` }}
                          ></div>
                        </div>
                      </div>
                      <span className="text-sm text-muted-foreground w-12">{intent.percentage}%</span>
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-center">
                  <div className="relative w-48 h-48">
                    <PieChart className="w-full h-full text-gray-300" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-2xl font-bold">8</div>
                        <div className="text-sm text-muted-foreground">Categories</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="satisfaction" className="space-y-6">
          <div className="grid lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Satisfaction Survey Results</CardTitle>
                <CardDescription>Customer feedback and ratings distribution</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[5, 4, 3, 2, 1].map((rating) => (
                    <div key={rating} className="flex items-center gap-3">
                      <div className="flex items-center gap-1 w-16">
                        <span className="text-sm">{rating}</span>
                        <Star className="h-3 w-3 text-yellow-500 fill-current" />
                      </div>
                      <div className="flex-1 bg-muted/30 rounded-full h-2">
                        <div
                          className="bg-yellow-500 h-2 rounded-full transition-all"
                          style={{
                            width: `${rating === 5 ? 65 : rating === 4 ? 25 : rating === 3 ? 8 : rating === 2 ? 2 : 0}%`,
                          }}
                        ></div>
                      </div>
                      <span className="text-sm text-muted-foreground w-12">
                        {rating === 5 ? "65%" : rating === 4 ? "25%" : rating === 3 ? "8%" : rating === 2 ? "2%" : "0%"}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Satisfaction Trends</CardTitle>
                <CardDescription>Weekly satisfaction score progression</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-48 flex items-end justify-between gap-2 p-4">
                  {[4.2, 4.3, 4.1, 4.4, 4.5, 4.6, 4.6].map((value, index) => (
                    <div key={index} className="flex flex-col items-center gap-2">
                      <div
                        className="bg-yellow-500 rounded-t w-8 transition-all hover:bg-yellow-600"
                        style={{ height: `${(value / 5) * 160}px` }}
                      ></div>
                      <span className="text-xs text-muted-foreground">{value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="operations" className="space-y-6">
          <div className="grid lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>User Activity Patterns</CardTitle>
                <CardDescription>Customer engagement and interaction patterns</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                    <span className="font-medium">New Users</span>
                    <span className="text-2xl font-bold text-primary">2,847</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                    <span className="font-medium">Returning Users</span>
                    <span className="text-2xl font-bold text-emerald-400">8,234</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
                    <span className="font-medium">Active Sessions</span>
                    <span className="text-2xl font-bold text-purple-400">1,456</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Export Options</CardTitle>
                <CardDescription>Download analytics data in various formats</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full justify-start bg-transparent" variant="outline">
                  <Download className="h-4 w-4 mr-2" />
                  Export as CSV
                </Button>
                <Button className="w-full justify-start bg-transparent" variant="outline">
                  <Download className="h-4 w-4 mr-2" />
                  Export as Excel
                </Button>
                <Button className="w-full justify-start bg-transparent" variant="outline">
                  <Download className="h-4 w-4 mr-2" />
                  Export as PDF Report
                </Button>
                <Button className="w-full justify-start bg-transparent" variant="outline">
                  <Download className="h-4 w-4 mr-2" />
                  Export Raw Data (JSON)
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
