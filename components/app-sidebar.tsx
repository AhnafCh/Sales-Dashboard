"use client"

import type * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  BarChart3,
  MessageSquare,
  Settings,
  Users,
  Home,
  Monitor,
  Zap,
  Bell,
  HelpCircle,
  User,
  CreditCard,
  ShoppingBag,
  ChevronUp,
  PanelLeftClose,
  PanelLeftOpen,
} from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  useSidebar,
} from "@/components/ui/sidebar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

// Navigation items
const navigationItems = [
  {
    title: "Dashboard",
    url: "/",
    icon: Home,
  },
  {
    title: "Live Monitoring",
    url: "/live-monitoring",
    icon: Monitor,
    badge: "Live",
  },
  {
    title: "Human Takeover",
    url: "/human-takeover",
    icon: Users,
    badge: "7",
  },
  {
    title: "Channel Management",
    url: "/channel-management",
    icon: Settings,
  },
  {
    title: "Analytics",
    url: "/analytics",
    icon: BarChart3,
  },
  {
    title: "Quick Operations",
    url: "/quick-operations",
    icon: Zap,
  },
  {
    title: "Best Selling Products",
    url: "/best-selling",
    icon: ShoppingBag,
  },
]

// AI Agents
const aiAgents = [
  { name: "Sales", status: "active", conversations: 24, performance: 94, icon: MessageSquare },
  { name: "Telco", status: "active", conversations: 18, performance: 91, icon: MessageSquare },
  { name: "Onboarding", status: "active", conversations: 12, performance: 96, icon: MessageSquare },
  { name: "AirVoice", status: "warning", conversations: 8, performance: 78, icon: MessageSquare },
  { name: "Support", status: "active", conversations: 31, performance: 89, icon: MessageSquare },
]

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname()
  const { state, toggleSidebar } = useSidebar()

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <div className="flex items-center justify-between px-4 py-2">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <MessageSquare className="h-4 w-4" />
            </div>
            <div className="grid flex-1 text-left text-sm leading-tight group-data-[collapsible=icon]:hidden">
              <span className="truncate font-semibold text-sidebar-foreground">UniSense AI</span>
              <span className="truncate text-xs text-sidebar-foreground/70">Customer Service</span>
            </div>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleSidebar}
            className="h-6 w-6 text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
          >
            {state === "expanded" ? <PanelLeftClose className="h-4 w-4" /> : <PanelLeftOpen className="h-4 w-4" />}
            <span className="sr-only">Toggle Sidebar</span>
          </Button>
        </div>
      </SidebarHeader>

      <SidebarContent>
        {/* Main Navigation */}
        <SidebarGroup>
          <SidebarGroupLabel className="text-sidebar-foreground/70">Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    isActive={pathname === item.url}
                    tooltip={state === "collapsed" ? item.title : undefined}
                  >
                    <Link href={item.url} className="text-sidebar-foreground hover:text-sidebar-accent-foreground">
                      <item.icon className="h-4 w-4" />
                      <span className="group-data-[collapsible=icon]:hidden">{item.title}</span>
                      {item.badge && (
                        <Badge
                          variant={item.badge === "Live" ? "default" : "secondary"}
                          className={`ml-auto group-data-[collapsible=icon]:hidden ${
                            item.badge === "Live"
                              ? "bg-emerald-600 text-white hover:bg-emerald-700"
                              : "bg-sidebar-accent text-sidebar-accent-foreground"
                          }`}
                        >
                          {item.badge}
                        </Badge>
                      )}
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* AI Agents Status */}
        <SidebarGroup>
          <SidebarGroupLabel className="text-sidebar-foreground/70">AI Agents</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {aiAgents.map((agent) => (
                <SidebarMenuItem key={agent.name}>
                  <SidebarMenuButton
                    tooltip={state === "collapsed" ? `${agent.name} - ${agent.conversations} conversations` : undefined}
                    className="text-sidebar-foreground hover:text-sidebar-accent-foreground"
                  >
                    <div className="flex items-center gap-2">
                      <agent.icon className="h-4 w-4" />
                      <div
                        className={`w-2 h-2 rounded-full ${
                          agent.status === "active" ? "bg-emerald-500" : "bg-amber-500"
                        } group-data-[collapsible=icon]:hidden`}
                      />
                    </div>
                    <span className="group-data-[collapsible=icon]:hidden">{agent.name}</span>
                    <div className="ml-auto flex items-center gap-1 group-data-[collapsible=icon]:hidden">
                      <span className="text-xs text-sidebar-foreground/70">{agent.conversations}</span>
                    </div>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Quick Actions */}
        <SidebarGroup>
          <SidebarGroupLabel className="text-sidebar-foreground/70">Quick Actions</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton
                  tooltip={state === "collapsed" ? "Alerts - 3 urgent" : undefined}
                  className="text-sidebar-foreground hover:text-sidebar-accent-foreground"
                >
                  <Bell className="h-4 w-4" />
                  <span className="group-data-[collapsible=icon]:hidden">Alerts</span>
                  <Badge
                    variant="destructive"
                    className="ml-auto group-data-[collapsible=icon]:hidden bg-red-600 text-white hover:bg-red-700"
                  >
                    3
                  </Badge>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton
                  tooltip={state === "collapsed" ? "Help & Support" : undefined}
                  className="text-sidebar-foreground hover:text-sidebar-accent-foreground"
                >
                  <HelpCircle className="h-4 w-4" />
                  <span className="group-data-[collapsible=icon]:hidden">Help & Support</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton
                  tooltip={state === "collapsed" ? "John Doe - Premium Plan" : undefined}
                  className="text-sidebar-foreground hover:text-sidebar-accent-foreground"
                >
                  <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                    <User className="size-4" />
                  </div>
                  <div className="grid flex-1 text-left text-sm leading-tight group-data-[collapsible=icon]:hidden">
                    <span className="truncate font-semibold text-sidebar-foreground">John Doe</span>
                    <span className="truncate text-xs text-sidebar-foreground/70">Premium Plan</span>
                  </div>
                  <ChevronUp className="ml-auto size-4 group-data-[collapsible=icon]:hidden" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg bg-popover text-popover-foreground border-border"
                side="bottom"
                align="end"
                sideOffset={4}
              >
                <DropdownMenuItem
                  asChild
                  className="text-popover-foreground hover:bg-accent hover:text-accent-foreground"
                >
                  <Link href="/user-config">
                    <Settings className="mr-2 h-4 w-4" />
                    Account Settings
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem
                  asChild
                  className="text-popover-foreground hover:bg-accent hover:text-accent-foreground"
                >
                  <Link href="/user-config">
                    <CreditCard className="mr-2 h-4 w-4" />
                    Billing & Tokens
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="text-popover-foreground hover:bg-accent hover:text-accent-foreground">
                  <span>Sign out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
