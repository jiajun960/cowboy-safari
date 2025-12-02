import type { Metadata } from 'next'
import { headers } from 'next/headers'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import Navigation from '@/components/Navigation'

export async function generateMetadata(): Promise<Metadata> {
  const headersList = await headers()
  // Always use https for canonical URL (production URL)
  const proto = 'https'
  
  return {
    title: "Contact Us - Cowboy Safari",
    description: "Get in touch with Cowboy Safari. Have questions, feedback, or need support? We're here to help!",
    alternates: {
      canonical: `${proto}://cowboysafari.buzz/contact`,
    },
  }
}

export default function Contact() {
  return (
    <div className="bg-gray-900 text-gray-300 min-h-screen">
      <Navigation />
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">Contact Us</h1>
        
        <p className="text-gray-400 mb-8">Last updated: December 2025</p>

        <div className="space-y-6 text-gray-300">
          <section>
            <p className="mb-4">
              Have questions, feedback, or need help while playing Cowboy Safari? We'd love to hear from you!
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Contact Email</h2>
            <p className="mb-4">
              You can reach us via email at:{' '}
              <a 
                href="mailto:yiner2396@gmail.com" 
                className="text-amber-400 hover:text-amber-500 underline"
              >
                yiner2396@gmail.com
              </a>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Response Time</h2>
            <p className="mb-4">
              We typically respond within 24–48 hours. Please include as much detail as possible when reporting bugs or gameplay issues so we can help you quickly.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Third-Party Game Issues</h2>
            <p className="mb-4">
              For issues related to the embedded game from azgame.io, please note that we do not control the game itself, but we will do our best to help guide you or forward feedback when necessary.
            </p>
          </section>

          <section className="pt-4">
            <p className="mb-4">
              We aim to make Cowboy Safari a fun and smooth experience for everyone.
            </p>
            <p className="mt-6 text-amber-400 font-medium">
              Thanks for playing and for reaching out!
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

