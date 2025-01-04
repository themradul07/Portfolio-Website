"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { useEffect, useState } from "react"

export function ThemeProvider({
    children,
    ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
    const [isClient, setIsClient] = useState(false)
        useEffect(() => {
            setIsClient(true)
        }, [])
     
        if (!isClient) {
            return null;
        }
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
