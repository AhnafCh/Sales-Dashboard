import type React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const badgeVariants = cva("inline-flex items-center rounded-md px-2 py-0.5 text-xs font-medium transition-colors", {
  variants: {
    intent: {
      info: "bg-blue-600 text-white hover:bg-blue-700",
      success: "bg-emerald-600 text-white hover:bg-emerald-700",
      warning: "bg-amber-600 text-white hover:bg-amber-700",
      error: "bg-red-600 text-white hover:bg-red-700",
      default: "bg-muted text-foreground hover:bg-muted/80",
    },
  },
  defaultVariants: {
    intent: "default",
  },
})

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement>, VariantProps<typeof badgeVariants> {}

export function Badge({ className, intent, ...props }: BadgeProps) {
  return <span className={cn(badgeVariants({ intent }), className)} {...props} />
}
