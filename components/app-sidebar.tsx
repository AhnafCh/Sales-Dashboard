"use client"

import type * as React from "react"
import {
  AudioWaveform,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Settings2,
  Users,
  ShoppingCart,
  BarChart3,
  MessageSquare,
  Zap,
  Eye,
  UserCheck,
  Headphones,
  Phone,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarRail, useSidebar } from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import Image from "next/image"

// This is sample data.
const data = {
  user: {
    name: "John Doe",
    email: "john@unisense.ai",
    avatar: "/placeholder.svg?height=32&width=32",
  },
  teams: [
    {
      name: "UniSense AI",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Sales Team",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Support Team",
      logo: Command,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Live Monitoring",
      url: "/live-monitoring",
      icon: Eye,
      isActive: false,
    },
    {
      title: "Human Takeover",
      url: "/human-takeover",
      icon: UserCheck,
      isActive: false,
    },
    {
      title: "Channel Management",
      url: "/channel-management",
      icon: MessageSquare,
      isActive: false,
    },
    {
      title: "Analytics",
      url: "/analytics",
      icon: BarChart3,
      isActive: false,
    },
    {
      title: "Quick Operations",
      url: "/quick-operations",
      icon: Zap,
      isActive: false,
    },
    {
      title: "User Configuration",
      url: "/user-config",
      icon: Settings2,
      isActive: false,
    },
    {
      title: "Best Selling Products",
      url: "/best-selling",
      icon: ShoppingCart,
      isActive: false,
    },
  ],
  projects: [
    {
      name: "Sales",
      url: "#",
      icon: Frame,
    },
    {
      name: "Telco",
      url: "#",
      icon: Phone,
    },
    {
      name: "Onboarding",
      url: "#",
      icon: Users,
    },
    {
      name: "AirVoice",
      url: "#",
      icon: Headphones,
    },
    {
      name: "Support",
      url: "#",
      icon: Bot,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { state, toggleSidebar } = useSidebar()
  const isCollapsed = state === "collapsed"

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              src="/components/images/unisense-ai-logo.png"
              alt="UniSense AI"
              width={32}
              height={32}
              className="rounded-md"
            />
            {!isCollapsed && <span className="font-semibold text-foreground">UniSense AI</span>}
          </div>
          <Button variant="ghost" size="icon" onClick={toggleSidebar} className="h-8 w-8">
            {isCollapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
          </Button>
        </div>
        <TeamSwitcher teams={data.teams} />
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
