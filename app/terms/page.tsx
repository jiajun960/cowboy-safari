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
  const pathname = '/terms'
  const canonicalUrl = `${baseUrl}${pathname}`
  
  return {
    title: "Terms of Service - Cowboy Safari",
    description: "Read the terms of service for Cowboy Safari. Understand your rights and responsibilities when playing our free browser game.",
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      url: canonicalUrl,
      title: "Terms of Service - Cowboy Safari",
      description: "Read the terms of service for Cowboy Safari. Understand your rights and responsibilities when playing our free browser game.",
      type: "website",
    },
  }
}

export default function Terms() {
  return (
    <div className="bg-gray-900 text-gray-300 min-h-screen">
      <Navigation />
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">Terms of Service</h1>
        
        <p className="text-gray-400 mb-8">Last updated: December 2025</p>

        <div className="space-y-6 text-gray-300">
          <section>
            <p className="mb-4">
              Welcome to Cowboy Safari. By accessing or using our website, you agree to the following terms. We keep things simple so players can enjoy the game without confusion.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Use of the Site</h2>
            <p className="mb-4">
              Cowboy Safari provides access to an online mini-game through an embedded iframe.
            </p>
            <p className="mb-4">
              You may play the game for personal, non-commercial use.
            </p>
            <p className="mb-4">
              You agree not to misuse the site, attempt to interfere with gameplay, or engage in any activity that harms other players or the service.
            </p>
            <p>
              We do not sell, rent, or trade any user data for marketing purposes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Third-Party Game Content</h2>
            <p className="mb-4">
              The game featured on Cowboy Safari is provided by a third-party service (azgame.io).
            </p>
            <p className="mb-4">
              We do not own, operate, or control the game itself.
            </p>
            <p className="mb-4">
              Any gameplay issues, bugs, performance problems, or content within the embedded game are the responsibility of the third-party provider.
            </p>
            <p>
              We embed only reputable game providers to ensure a safe and enjoyable experience, but we cannot guarantee their availability or behavior.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">No Warranties</h2>
            <p className="mb-4">
              Cowboy Safari is provided "as is."
            </p>
            <p>
              We do not guarantee that the game or website will always be available, error-free, or uninterrupted. Use of the site is at your own discretion.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Limitation of Liability</h2>
            <p className="mb-4">
              To the fullest extent allowed by law, Cowboy Safari is not liable for:
            </p>
            <ul className="list-disc list-inside mb-4 space-y-2 ml-4" role="list">
              <li>gameplay results or lost progress</li>
              <li>errors, downtime, or interruptions</li>
              <li>actions or data collected by third-party game providers</li>
              <li>any damages arising from use of the site or embedded content</li>
            </ul>
            <p>
              In simple terms: you're responsible for how you use the site, and we are not accountable for third-party content.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Changes to These Terms</h2>
            <p className="mb-4">
              We may update these Terms from time to time as the website evolves.
            </p>
            <p>
              If changes are made, the "Last updated" date will be refreshed. Continued use of the site means you accept the updated terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Contact</h2>
            <p>
              If you have questions about these Terms, you can reach us at{' '}
              <a 
                href="mailto:yiner2396@gmail.com" 
                className="text-amber-400 hover:text-amber-500 underline"
              >
                yiner2396@gmail.com
              </a>.
            </p>
          </section>

          <section className="pt-4">
            <p className="mt-6 text-amber-400 font-medium">
              Thanks for visiting Cowboy Safari and have fun exploring the game!
            </p>
          </section>

          <section className="pt-4 border-t border-gray-700">
            <h2 className="text-2xl font-bold text-white mb-4">Related Information</h2>
            <p className="mb-4 text-gray-300">
              For questions about these terms, please{' '}
              <Link href="/contact" className="text-amber-400 hover:text-amber-500 underline">
                contact us
              </Link>.
              {' '}Learn more about how we handle your data in our{' '}
              <Link href="/privacy" className="text-amber-400 hover:text-amber-500 underline">
                Privacy Policy
              </Link>.
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

