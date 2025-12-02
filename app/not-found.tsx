import type { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import Navigation from '@/components/Navigation'

export const metadata: Metadata = {
  title: "Page Not Found – Cowboy Safari",
  robots: "noindex, nofollow",
}

export default function NotFound() {
  return (
    <div className="bg-gray-900 text-gray-300 min-h-screen">
      <Navigation />
      <div className="max-w-4xl mx-auto px-4 py-12 text-center">
        <h1 className="text-6xl md:text-8xl font-bold text-white mb-4">404</h1>
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Page Not Found</h2>
        <p className="text-gray-300 mb-8 text-lg">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <p className="text-gray-400 mb-8">
          Don't worry, you can still enjoy playing Cowboy Safari!
        </p>
        <Link href="/">
          <Button className="bg-amber-500 hover:bg-amber-600 text-white font-bold px-8 py-6 text-lg">
            Return to Home
          </Button>
        </Link>
      </div>
    </div>
  )
}

