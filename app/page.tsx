"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Share2, Star, Settings, HelpCircle, ThumbsUp, ThumbsDown, Heart, Bug, Maximize } from "lucide-react"

interface LanguageOption {
  code: string
  name: string
}

const languages: LanguageOption[] = [
  { code: "en", name: "English" },
  { code: "es", name: "Español" },
  { code: "fr", name: "Français" },
  { code: "ja", name: "日本語" },
  { code: "zh", name: "中文" },
]

const otherGames = [
  {
    title: "Wild Riders",
    description: "Bucking bronco runner action",
    id: "wild-riders",
  },
  {
    title: "Sky Zoo Manager",
    description: "Build & manage your floating zoo",
    id: "sky-zoo-manager",
  },
  {
    title: "Lasso Legend",
    description: "Precision lasso challenges",
    id: "lasso-legend",
  },
]

const animals = ["Zebra", "Buffalo", "Ostrich", "Elephant", "Lion", "Giraffe", "Rhino", "Cheetah"]

const faqItems = [
  {
    q: "What are the control options in Cowboy Safari?",
    a: "On desktop: press Spacebar to lasso/jump, hold to aim, release to land on an animal, and use arrow keys (← / →) to steer. On mobile: tap to jump, tap & hold to aim your lasso, and tilt or drag to steer.",
  },
  {
    q: "How do I unlock new animals?",
    a: "Unlock new animals by lassoing and taming them during runs. Different animals have unique behaviors. Upgrade your Sky Zoo habitats (up to level 8) to unlock rarer species. Complete special missions for legendary variants.",
  },
  {
    q: "Can I download the game?",
    a: "No. Cowboy Safari runs entirely in your browser (desktop and mobile). No installation needed — just tap Play and start riding!",
  },
  {
    q: "What animals are in the game?",
    a: "The game includes zebra, buffalo, ostrich, elephant, lion, and many secret/rare variants. Each animal has unique riding mechanics and behaviors.",
  },
  {
    q: "How can I unlock new maps or regions?",
    a: "Collect in-game coins and complete missions. Once you have enough coins, you unlock new map stops and access regions like Jungle and Mountain.",
  },
  {
    q: "What's a fast way to upgrade my zoo?",
    a: "Focus early on upgrading habitats—especially get them to level 4, which gives a big passive income boost. Smash crates for bonus coins during runs.",
  },
  {
    q: "What happens if I fall off an animal?",
    a: "If you get bucked off or crash, the run ends. You go back to your Sky Zoo where you can spend coins, upgrade, and start a new run.",
  },
  {
    q: "Are there special Boss Missions?",
    a: "Yes! Once you complete enough normal missions, special boss missions unlock. These are harder challenges but reward legendary or rare animals.",
  },
]

export default function Home() {
  const [selectedLanguage, setSelectedLanguage] = useState<string>("en")
  const [showLanguageMenu, setShowLanguageMenu] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [rating, setRating] = useState(4.6)

  useEffect(() => {
    setIsMobile(window.innerWidth < 768)
    window.addEventListener("resize", () => {
      setIsMobile(window.innerWidth < 768)
    })
  }, [])

  const handleShare = async () => {
    const shareText = "Just tamed a lion in Cowboy Safari — try it free in your browser!"
    const shareUrl = "https://cowboysafari.buzz"

    if (navigator.share) {
      try {
        await navigator.share({
          title: "Cowboy Safari",
          text: shareText,
          url: shareUrl,
        })
      } catch (err) {
        console.log("Share cancelled")
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(`${shareText}\n${shareUrl}`)
    }
  }

  return (
    <div className="bg-gray-900 text-gray-300 min-h-screen">
      {/* Top Navigation */}
      <nav className="sticky top-0 z-50 bg-gray-900 border-b border-gray-700 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <h1 className="text-xl md:text-2xl font-bold text-white">🤠 Cowboy Safari</h1>

          <div className="flex items-center gap-2 md:gap-4">
            {/* Language Selector */}
            <div className="relative">
              <button
                id="language-selector"
                onClick={() => setShowLanguageMenu(!showLanguageMenu)}
                className="px-3 py-1.5 text-xs md:text-sm bg-gray-800 hover:bg-gray-700 text-gray-300 rounded-lg font-medium transition-colors"
              >
                {selectedLanguage.toUpperCase()} ▾
              </button>
              {showLanguageMenu && (
                <div className="absolute top-full mt-1 right-0 bg-gray-800 border border-gray-700 rounded-lg shadow-lg z-10">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setSelectedLanguage(lang.code)
                        setShowLanguageMenu(false)
                      }}
                      className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-700 text-gray-300 first:rounded-t-lg last:rounded-b-lg"
                    >
                      {lang.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Settings Icon */}
            <button id="settings-button" className="p-2 hover:bg-gray-800 rounded-lg transition-colors" title="Settings">
              <Settings size={20} className="text-gray-300" />
            </button>

            {/* Help Icon */}
            <button id="help-button" className="p-2 hover:bg-gray-800 rounded-lg transition-colors" title="How to Play">
              <HelpCircle size={20} className="text-gray-300" />
            </button>
          </div>
        </div>
      </nav>

      {/* Game Canvas Area */}
      <div className="max-w-6xl mx-auto">
        {/* Game Title */}
        <div className="title-box text-center" style={{ marginTop: '0.2cm', marginBottom: '0.2cm' }}>
          <div className="title-game">
            <h1>Cowboy Safari</h1>
          </div>
        </div>

        {/* Game Container */}
        <div className="aspect-video overflow-hidden mb-2">
          <iframe
            id="iframehtml5"
            className="w-full h-full border-0"
            title="Cowboy Safari"
            src="https://gamea.azgame.io/cowboy-safari/"
            allowFullScreen
            style={{ display: 'block' }}
          />
        </div>

        {/* Rating & Buttons Area */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Rating Section */}
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              {[...Array(4)].map((_, i) => (
                <Star key={i} size={20} className="fill-amber-400 text-amber-400" />
              ))}
              <div className="relative inline-block">
                <Star size={20} className="text-amber-400" />
                <div className="absolute top-0 left-0 overflow-hidden" style={{ width: '50%' }}>
                  <Star size={20} className="fill-amber-400 text-amber-400" />
                </div>
              </div>
            </div>
            <span className="text-sm md:text-base text-gray-300 font-medium">26 votes 4.6/5</span>
          </div>

          {/* Buttons Group */}
          <div className="flex items-center gap-2">
            <button
              id="like-button"
              onClick={() => {}}
              className="flex items-center gap-1 px-3 py-2 bg-[#8B4513] hover:bg-[#A0522D] text-white rounded-lg transition-colors text-sm md:text-base"
              title="Like"
            >
              <ThumbsUp size={18} />
              <span>46</span>
            </button>
            <button
              id="dislike-button"
              onClick={() => {}}
              className="p-2 bg-[#8B4513] hover:bg-[#A0522D] text-white rounded-lg transition-colors"
              title="Dislike"
            >
              <ThumbsDown size={18} />
            </button>
            <button
              id="favorite-button"
              onClick={() => {}}
              className="p-2 bg-[#8B4513] hover:bg-[#A0522D] text-white rounded-lg transition-colors"
              title="Favorite"
            >
              <Heart size={18} />
            </button>
            <button
              id="share-button"
              onClick={() => {}}
              className="p-2 bg-[#8B4513] hover:bg-[#A0522D] text-white rounded-lg transition-colors"
              title="Share"
            >
              <Share2 size={18} />
            </button>
            <button
              id="report-bug-button"
              onClick={() => {}}
              className="p-2 bg-[#8B4513] hover:bg-[#A0522D] text-white rounded-lg transition-colors"
              title="Report Bug"
            >
              <Bug size={18} />
            </button>
            <button
              id="fullscreen-button"
              onClick={() => {}}
              className="p-2 bg-[#8B4513] hover:bg-[#A0522D] text-white rounded-lg transition-colors"
              title="Fullscreen"
            >
              <Maximize size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* How to Play Section */}
      <section className="px-4 py-12 md:py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 text-center">How to Play</h2>
          <p className="text-gray-300 text-center mb-8">
            Start a run, lasso an animal, stay on while it bucks, then bring it home.
          </p>

          {/* Controls */}
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            <Card className="p-6 bg-gray-800 border-gray-700">
              <h3 className="font-bold text-lg mb-4 text-white">🖥️ Desktop / Tablet</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>
                  <span className="font-semibold">Space</span> = Jump / Action
                </li>
                <li>
                  <span className="font-semibold">Click</span> = Lasso / Jump
                </li>
                <li>
                  <span className="font-semibold">Arrow Keys</span> = Steer
                </li>
              </ul>
            </Card>

            <Card className="p-6 bg-gray-800 border-gray-700">
              <h3 className="font-bold text-lg mb-4 text-white">📱 Mobile Controls</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>
                  <span className="font-semibold">Tap</span> = Jump
                </li>
                <li>
                  <span className="font-semibold">Tap & Hold</span> = Aim / Throw Lasso
                </li>
                <li>
                  <span className="font-semibold">Drag or Tilt</span> = Steer (if enabled)
                </li>
              </ul>
            </Card>
          </div>

          {/* Step by Step */}
          <div className="space-y-4">
            {[
              { step: 1, title: "Start", desc: "Tap Play. The cowboy runs automatically." },
              { step: 2, title: "Lasso", desc: "Hold to aim at a nearby animal, release to throw." },
              {
                step: 3,
                title: "Ride",
                desc: "Land on the animal and manage its patience bar — jump or switch animals if it bucks.",
              },
              { step: 4, title: "Return", desc: "Bring tamed animals back to your Sky Zoo for coins and upgrades." },
            ].map((item) => (
              <div key={item.step} className="flex gap-4 p-4 bg-gray-800 rounded-lg border border-gray-700">
                <div className="flex-shrink-0 w-8 h-8 bg-amber-400 text-white font-bold rounded-full flex items-center justify-center">
                  {item.step}
                </div>
                <div>
                  <h4 className="font-bold text-white">{item.title}</h4>
                  <p className="text-gray-300 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Games Section */}
      <section className="px-4 py-12 md:py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">More Games You'll Love</h2>

          <div className="grid md:grid-cols-3 gap-4 md:gap-6">
            {otherGames.map((game) => (
              <Card
                key={game.id}
                className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer border-gray-700 bg-gray-800 group"
              >
                <div className="bg-gradient-to-br from-amber-400 to-orange-400 h-32 md:h-40 flex items-center justify-center group-hover:scale-105 transition-transform">
                  <div className="text-5xl">🎮</div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg text-white mb-2">{game.title}</h3>
                  <p className="text-gray-300 text-sm">{game.description}</p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full mt-4 border-gray-600 text-gray-300 hover:bg-gray-700 bg-transparent"
                  >
                    Play Now
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Animal List Section */}
      <section className="px-4 py-12 md:py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 text-center">Animals in Cowboy Safari</h2>
          <p className="text-gray-300 text-center mb-8">
            Lasso, tame, and collect a variety of wild animals for your Sky Zoo
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {animals.map((animal) => (
              <Card key={animal} className="p-6 text-center border-gray-700 bg-gray-800 hover:bg-gray-700 transition-colors">
                <div className="text-4xl mb-3">
                  {animal === "Zebra"
                    ? "🦓"
                    : animal === "Buffalo"
                      ? "🐂"
                      : animal === "Ostrich"
                        ? "🐦"
                        : animal === "Elephant"
                          ? "🐘"
                          : animal === "Lion"
                            ? "🦁"
                            : animal === "Giraffe"
                              ? "🦒"
                              : animal === "Rhino"
                                ? "🦏"
                                : "🐆"}
                </div>
                <p className="font-semibold text-white">{animal}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-4 py-12 md:py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">Frequently Asked Questions</h2>

          <Accordion type="single" collapsible className="space-y-2">
            {faqItems.map((item, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`} className="border border-gray-700 rounded-lg px-4 bg-gray-800">
                <AccordionTrigger className="text-base md:text-lg font-semibold text-white hover:text-gray-300 py-4">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 pb-4">{item.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Rating & Share Section */}
      <section className="px-4 py-12 md:py-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="flex items-center justify-center gap-2 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={28}
                  className={i < Math.floor(rating) ? "fill-amber-400 text-amber-400" : "text-gray-600"}
                />
              ))}
            </div>
            <p className="text-2xl font-bold text-white mb-2">{rating} / 5</p>
            <p className="text-gray-300 mb-6">Based on 12,450+ player ratings</p>
            <p className="text-gray-300 mb-6">Loved this run? Tap the stars to rate — help other players find it!</p>

            <Button
              id="main-share-button"
              size="lg"
              className="bg-amber-500 hover:bg-amber-600 text-white font-bold mb-6"
              onClick={handleShare}
            >
              <Share2 size={20} className="mr-2" />
              Share Cowboy Safari
            </Button>

            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 max-w-2xl mx-auto">
              <p className="text-gray-300 mb-4">
                <span className="font-semibold">Suggested share lines:</span>
              </p>
              <div className="space-y-3 text-sm text-gray-300">
                <p className="italic">"Just tamed a lion in Cowboy Safari — try it free in your browser!"</p>
                <p className="italic">
                  "Cowboy Safari is addictive. Lasso animals and build a floating zoo — play now!"
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Internal Pages Links (SEO) */}
      <section className="px-4 py-12 md:py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-6">Learn More</h2>

          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <Card className="p-4 border-gray-700 bg-gray-800 hover:shadow-md transition-shadow cursor-pointer">
              <h3 className="font-bold text-white mb-2">Play Cowboy Safari Online Free</h3>
              <p className="text-gray-300 text-xs">
                Play Cowboy Safari online for free — an HTML5 endless runner where you lasso animals and upgrade a
                floating zoo. No install required.
              </p>
            </Card>

            <Card className="p-4 border-gray-700 bg-gray-800 hover:shadow-md transition-shadow cursor-pointer">
              <h3 className="font-bold text-white mb-2">How to Tame Animals</h3>
              <p className="text-gray-300 text-xs">
                Tame animals by successfully riding them until their patience bar fills. Learn zebra timing, buffalo
                stamina, and lion bursts.
              </p>
            </Card>

            <Card className="p-4 border-gray-700 bg-gray-800 hover:shadow-md transition-shadow cursor-pointer">
              <h3 className="font-bold text-white mb-2">Zones & Maps</h3>
              <p className="text-gray-300 text-xs">
                Unlock new regions like Savannah, Jungle and Mountain as you complete missions and collect coins.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
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
                  <a href="#" className="hover:text-amber-400">
                    Play Game
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-amber-400">
                    How to Play
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-amber-400">
                    Leaderboards
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-amber-400">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-amber-400">
                    Controls Guide
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-amber-400">
                    Animals List
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-amber-400">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-amber-400">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-amber-400">
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
    </div>
  )
}
