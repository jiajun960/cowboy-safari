import type { Metadata } from 'next'
import { headers } from 'next/headers'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import Navigation from '@/components/Navigation'

export async function generateMetadata(): Promise<Metadata> {
  const headersList = await headers()
  // Always use https for canonical URL (production URL)
  const proto = 'https'
  const baseUrl = `${proto}://cowboysafari.buzz`
  const pathname = '/privacy'
  const canonicalUrl = `${baseUrl}${pathname}`
  
  return {
    title: "Privacy Policy - Cowboy Safari",
    description: "Learn how Cowboy Safari handles your information. We are transparent about data collection, cookies, analytics, and third-party services.",
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      url: canonicalUrl,
      title: "Privacy Policy - Cowboy Safari",
      description: "Learn how Cowboy Safari handles your information. We are transparent about data collection, cookies, analytics, and third-party services.",
      type: "website",
    },
  }
}

export default function Privacy() {
  return (
    <div className="bg-gray-900 text-gray-300 min-h-screen">
      <Navigation />
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">Privacy Policy</h1>
        
        <p className="text-gray-400 mb-8">Last updated: December 2025</p>

        <div className="space-y-6 text-gray-300">
          <section>
            <p className="mb-4">
              Welcome to Cowboy Safari. We want to be transparent about how we handle information when you visit or play our game.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Information We Collect</h2>
            <p className="mb-4">
              We automatically receive basic technical data such as your device type, browser version, pages you visit, and approximate location (city or region). This information helps us keep the game fast, stable, and enjoyable for all players.
            </p>
            <p className="mb-4">
              We do not collect personal information such as your name, phone number, or any data that can identify you individually.
            </p>
            <p>
              We do not sell or share player information for marketing purposes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Cookies & Analytics</h2>
            <p className="mb-4">
              We use analytics tools—including Google Analytics, Microsoft Clarity, and other analytics services—to understand gameplay behavior and improve performance. These services may store cookies on your device.
            </p>
            <p>
              You can disable cookies at any time through your browser settings.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Third-Party Game Provider</h2>
            <p className="mb-4">
              Cowboy Safari includes an embedded game provided by azgame.io through an iframe.
            </p>
            <p>
              This third-party provider may collect usage data according to their own privacy policies, which we do not control. We only embed services from providers we consider reputable and widely trusted in the gaming space.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Your Choices</h2>
            <p className="mb-4">
              You can block cookies, use a private browser mode, or clear your browsing data at any time.
            </p>
            <p>
              If you have questions about this policy or want to reach out, you can contact us at{' '}
              <a 
                href="mailto:yiner2396@gmail.com" 
                className="text-amber-400 hover:text-amber-500 underline"
              >
                yiner2396@gmail.com
              </a>.
            </p>
          </section>

          <section className="pt-4">
            <p className="mb-4">
              We aim to keep our privacy practices simple, transparent, and player-friendly.
            </p>
            <p className="text-amber-400 font-medium">
              Thanks for being part of the ride!
            </p>
          </section>

          <section className="pt-4 border-t border-gray-700">
            <h2 className="text-2xl font-bold text-white mb-4">Related Information</h2>
            <p className="mb-4 text-gray-300">
              For questions about our privacy practices, please{' '}
              <Link href="/contact" className="text-amber-400 hover:text-amber-500 underline">
                contact us
              </Link>.
              {' '}You can also review our{' '}
              <Link href="/terms" className="text-amber-400 hover:text-amber-500 underline">
                Terms of Service
              </Link>
              {' '}to understand your rights and responsibilities when using Cowboy Safari.
            </p>
          </section>
        </div>

        <div className="mt-12 text-center">
          <Link href="/">
            <Button className="bg-amber-500 hover:bg-amber-600 text-white font-bold px-8 py-6 text-lg">
              Return to Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

