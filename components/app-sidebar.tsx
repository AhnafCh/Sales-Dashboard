"use client"

import type * as React from "react"
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
  Users,
  ShoppingCart,
  BarChart3,
  MessageSquare,
  Zap,
  Monitor,
  PanelLeftClose,
  PanelLeftOpen,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarRail, useSidebar } from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "UniSense AI",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Dashboard",
      url: "/",
      icon: SquareTerminal,
      isActive: true,
    },
    {
      title: "Live Monitoring",
      url: "/live-monitoring",
      icon: Monitor,
    },
    {
      title: "Human Takeover",
      url: "/human-takeover",
      icon: MessageSquare,
    },
    {
      title: "Channel Management",
      url: "/channel-management",
      icon: Settings2,
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
      title: "User Config",
      url: "/user-config",
      icon: Users,
    },
    {
      title: "Best Selling",
      url: "/best-selling",
      icon: ShoppingCart,
    },
  ],
  projects: [
    {
      name: "Sales Agent",
      url: "#",
      icon: Frame,
    },
    {
      name: "Telco Agent",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Onboarding Agent",
      url: "#",
      icon: Map,
    },
    {
      name: "AirVoice Agent",
      url: "#",
      icon: BookOpen,
    },
    {
      name: "Support Agent",
      url: "#",
      icon: Bot,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { state, toggleSidebar } = useSidebar()

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <div className="flex items-center justify-between">
          <TeamSwitcher teams={data.teams} />
          <Button variant="ghost" size="icon" onClick={toggleSidebar} className="h-7 w-7">
            {state === "expanded" ? <PanelLeftClose className="h-4 w-4" /> : <PanelLeftOpen className="h-4 w-4" />}
            <span className="sr-only">Toggle Sidebar</span>
          </Button>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
