"use client"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  SidebarSeparator,
  useSidebar,
} from "@/components/ui/sidebar"
import {
  Gauge,
  MessageSquare,
  Users,
  Settings,
  BarChart,
  PackageSearch,
  LayoutList,
  PanelLeftClose,
  PanelLeftOpen,
} from "lucide-react"

const navItems = [
  {
    title: "Dashboard",
    href: "/",
    icon: Gauge,
  },
  {
    title: "Live Monitoring",
    href: "/live-monitoring",
    icon: MessageSquare,
  },
  {
    title: "Quick Operations",
    href: "/quick-operations",
    icon: LayoutList,
  },
  {
    title: "Human Take-over",
    href: "/human-takeover",
    icon: Users,
  },
  {
    title: "Channel Management",
    href: "/channel-management",
    icon: PackageSearch,
  },
  {
    title: "Analytics",
    href: "/analytics",
    icon: BarChart,
  },
  {
    title: "User / Subscription",
    href: "/user-config",
    icon: Settings,
  },
  {
    title: "Best Selling",
    href: "/best-selling",
    icon: PackageSearch,
  },
]

export function AppSidebar() {
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="flex items-center justify-between px-4 py-3">
        {/* Logo / Title – hidden in icon-only mode */}
        <span className="text-lg font-semibold group-data-[collapsible=icon]:hidden">UniSense</span>
        {/* Collapse / Expand button */}
        <CollapseButton />
      </SidebarHeader>

      <SidebarSeparator />

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild tooltip={item.title}>
                    <a href={item.href}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      {/* Rail lets users drag to resize / click to expand */}
      <SidebarRail />
    </Sidebar>
  )
}

/**
 * A small button that toggles the sidebar state.
 * It lives inside the header so we always have a control - even in icon mode.
 */
function CollapseButton() {
  const { state, toggleSidebar } = useSidebar()

  return (
    <button
      type="button"
      aria-label={state === "expanded" ? "Collapse sidebar" : "Expand sidebar"}
      onClick={toggleSidebar}
      className="inline-flex size-8 items-center justify-center rounded-md hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sidebar-ring"
    >
      {state === "expanded" ? <PanelLeftClose className="size-4" /> : <PanelLeftOpen className="size-4 -rotate-180" />}
    </button>
  )
}
