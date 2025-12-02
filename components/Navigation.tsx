"use client"

import { useState } from "react"
import Link from "next/link"
import { Settings, HelpCircle } from "lucide-react"

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

export default function Navigation() {
  const [selectedLanguage, setSelectedLanguage] = useState<string>("en")
  const [showLanguageMenu, setShowLanguageMenu] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-gray-900 border-b border-gray-700 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/">
          <h1 className="text-xl md:text-2xl font-bold text-white cursor-pointer hover:text-amber-400 transition-colors">
            🤠 Cowboy Safari
          </h1>
        </Link>

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
  )
}

