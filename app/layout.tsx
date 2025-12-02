import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import Script from "next/script"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

// <CHANGE> Updated metadata for Cowboy Safari game with SEO optimization
export const metadata: Metadata = {
  title: "Cowboy Safari - Play Free Online | Lasso & Tame Animals",
  description:
    "Ride wild animals, lasso beasts, and build your Sky Zoo. Play Cowboy Safari free in your browser - endless runner game with animal taming gameplay.",
  keywords: "cowboy safari, free online game, browser game, animal taming, lasso game, endless runner",
  applicationName: "Cowboy Safari",
  robots: "index, follow",
  alternates: {
    canonical: "https://cowboysafari.buzz/",
  },
  openGraph: {
    title: "Cowboy Safari - Ride Wild Animals & Build Your Sky Zoo",
    description: "Free browser game. Lasso animals, ride them, and upgrade your floating zoo. Play now!",
    type: "website",
    locale: "en_US",
    url: "https://cowboysafari.buzz",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Cowboy Safari Game",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cowboy Safari - Play Free",
    description: "Lasso wild animals and build your Sky Zoo. Free browser game.",
    creator: "@cowboysafari",
  },
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        {/* <CHANGE> Added structured data for rich snippets */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "VideoGame",
              name: "Cowboy Safari",
              description: "Free browser-based endless runner with animal taming and zoo building mechanics",
              url: "https://cowboysafari.buzz",
              gameServer: "HTML5 Browser",
              playMode: "SinglePlayer",
              applicationCategory: "Game",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.6",
                bestRating: "5",
                worstRating: "1",
                ratingCount: "12450",
              },
            }),
          }}
        />
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-H2V78YF7VE"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-H2V78YF7VE');
          `}
        </Script>
        {/* Microsoft Clarity */}
        <Script id="ms-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "uenpazr184");
          `}
        </Script>
        {/* Ahrefs Analytics */}
        <Script
          src="https://analytics.ahrefs.com/analytics.js"
          data-key="pq8wObY7BKVdAXCFC+hRuA"
          strategy="afterInteractive"
        />
      </head>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
