export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 px-4 py-8 md:py-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div>
            <h4 className="font-bold text-white mb-4">Cowboy Safari</h4>
            <p className="text-sm">Free browser game. Ride wild animals and build your Sky Zoo.</p>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4">Game</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/#" className="hover:text-amber-400">
                  Play Game
                </a>
              </li>
              <li>
                <a href="/#how-to-play" className="hover:text-amber-400">
                  How to Play
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/#faq" className="hover:text-amber-400">
                  FAQ
                </a>
              </li>
              <li>
                <a href="/#how-to-play" className="hover:text-amber-400">
                  Controls Guide
                </a>
              </li>
              <li>
                <a href="/#animals" className="hover:text-amber-400">
                  Animals List
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/privacy" className="hover:text-amber-400">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms" className="hover:text-amber-400">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-amber-400">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center text-sm">
          <p className="mb-2">Available in English, Spanish, French, Japanese and Chinese</p>
          <p className="text-gray-500">© 2025 Cowboy Safari. All rights reserved. Built with ❤️ for gamers.</p>
        </div>
      </div>
    </footer>
  )
}

