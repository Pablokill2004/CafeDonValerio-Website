import type { Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.css"
import localFont from "next/font/local";
import { Questrial } from "next/font/google";
import Navbar from "@/app/navbar/NavBar";;
import Footer from "@/components/others/Footer";

import  {ThemeProvider}  from "../components/theme_provider"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  
});


const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

// BODY FONT / New Farm - family
export const bodyFont = localFont({
  src: [
    { path: "../public/fonts/fonnts.com-New_Farm_Thin.otf", weight: "100" },
    { path: "../public/fonts/fonnts.com-New_Farm_Light.otf", weight: "300" },
    { path: "../public/fonts/fonnts.com-New_Farm_Regular.otf", weight: "400" },
    { path: "../public/fonts/fonnts.com-New_Farm_Medium.otf", weight: "500" },
    { path: "../public/fonts/fonnts.com-New_Farm_Bold.otf", weight: "700" },
  ],
  variable: "--font-body",
});

// TITLE FONT / (Fat Frank)
export const titleFont = localFont({
  src: "../public/fonts/fonnts.com-FatFrank_Heavy.otf",
  variable: "--font-title",
});

export const navbarFont = Questrial({
  subsets: ["latin",],
  weight: ["400"],
  variable: "--font-navbar",
});

/*

┌─────────────────────────────────────────────────────┐
│ 1. Sources loaded in Next.js                        │
│   - bodyFont → New Farm family                      │
│   - titleFont → FatFrank                            │
│   - navbarFont → Questrial (Google fonts)           │
│                                                     │
└─────────────────────────────────────────────────────┘

*/

/*
    ======== ENTRY POINT: RootLayout component ========
    - Wraps the entire application
    - Applies global styles and fonts
    - Renders the Header component and children content
*/

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return(
    // The `suppressHydrationWarning` attribute tells React to 
    // ignore the expected hydration mismatch on the <html> 
    // element. This is the standard solution when using theme
    //  providers like next-themes that apply attributes to the 
    // <html> tag on the client side during initialization.
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body
        className={`${geistSans.variable} 
                  ${geistMono.variable} 
                  ${bodyFont.variable} 
                  ${titleFont.variable} 
                  ${navbarFont.variable} 
                  antialiased w-full 
                   overflow-x-hidden`} 
      >
        {/* For dark and light mode */}
         <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >

            <Navbar />
            <div className=" mx-auto w-full">
            {children}
            </div>
            <Footer/>

          </ThemeProvider>

      </body>
    </html>
  );
}
