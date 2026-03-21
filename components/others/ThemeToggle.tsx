"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import {cn} from "@/lib/utils"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function ModeToggle() {
  const { setTheme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className={cn("inline-flex \
      text-white \
      items-center \
      justify-center \
      whitespace-nowrap \
      rounded-md \
      text-sm \
      font-medium \
      ring-offset-background \
      transition-colors \
      hover:bg-secondary \
      hover:text-black \
      focus-visible:outline-none \
      focus-visible:ring-2 \
      focus-visible:ring-ring \
      focus-visible:ring-offset-2 \
      disabled:pointer-events-none \
      bg-trasnparent \
      hover:bg-primary \
      dark:hover:text-white \
      dark:hover:bg-muted \
      h-10 \
      w-10")}>
          <Sun className="text-2xl scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
          <Moon className="absolute text-2xl scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
          <span className="sr-only">Toggle theme</span>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default ModeToggle;