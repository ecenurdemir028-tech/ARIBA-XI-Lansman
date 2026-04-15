"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Instagram, Twitter, Linkedin, Youtube } from "lucide-react"
import { Button } from "@/components/ui/button"
import { EventModal } from "@/components/event-modal"
import { TeamModal } from "@/components/team-modal"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isEventModalOpen, setIsEventModalOpen] = useState(false)
  const [isTeamModalOpen, setIsTeamModalOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-md border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-sm md:text-base">GAE</span>
            </div>
            <div className="hidden sm:block">
              <p className="font-bold text-slate-800 text-sm md:text-base drop-shadow-sm">İTÜ GAE</p>
              <p className="text-xs text-slate-600">Solar Car Team</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="#about" className="text-slate-700 hover:text-amber-600 transition-colors text-sm font-medium">
              Araç Hakkında
            </Link>
            <button 
              onClick={() => setIsEventModalOpen(true)}
              className="text-slate-700 hover:text-amber-600 transition-colors text-sm font-medium"
            >
              Etkinlik
            </button>
            <button 
              onClick={() => setIsTeamModalOpen(true)}
              className="text-slate-700 hover:text-amber-600 transition-colors text-sm font-medium"
            >
              Ekip
            </button>
          </div>

          {/* Social Links - Desktop */}
          <div className="hidden md:flex items-center gap-4">
            <Link href="#" className="text-slate-600 hover:text-amber-600 transition-colors">
              <Instagram className="w-5 h-5" />
            </Link>
            <Link href="#" className="text-slate-600 hover:text-amber-600 transition-colors">
              <Twitter className="w-5 h-5" />
            </Link>
            <Link href="#" className="text-slate-600 hover:text-amber-600 transition-colors">
              <Linkedin className="w-5 h-5" />
            </Link>
            <Link href="#" className="text-slate-600 hover:text-amber-600 transition-colors">
              <Youtube className="w-5 h-5" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-slate-800"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-6 border-t border-white/20 mt-2 pt-4 bg-white/10 backdrop-blur-md">
            <div className="flex flex-col gap-4">
              <Link
                href="#about"
                className="text-slate-700 hover:text-amber-600 transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                Araç Hakkında
              </Link>
              <button
                className="text-slate-700 hover:text-amber-600 transition-colors font-medium text-left"
                onClick={() => {
                  setIsOpen(false)
                  setIsEventModalOpen(true)
                }}
              >
                Etkinlik
              </button>
              <button
                className="text-slate-700 hover:text-amber-600 transition-colors font-medium text-left"
                onClick={() => {
                  setIsOpen(false)
                  setIsTeamModalOpen(true)
                }}
              >
                Ekip
              </button>
              <div className="flex items-center gap-4 pt-4 border-t border-white/20">
                <Link href="#" className="text-slate-600 hover:text-amber-600 transition-colors">
                  <Instagram className="w-5 h-5" />
                </Link>
                <Link href="#" className="text-slate-600 hover:text-amber-600 transition-colors">
                  <Twitter className="w-5 h-5" />
                </Link>
                <Link href="#" className="text-slate-600 hover:text-amber-600 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </Link>
                <Link href="#" className="text-slate-600 hover:text-amber-600 transition-colors">
                  <Youtube className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Event Modal */}
      <EventModal isOpen={isEventModalOpen} onClose={() => setIsEventModalOpen(false)} />

      {/* Team Modal */}
      <TeamModal isOpen={isTeamModalOpen} onClose={() => setIsTeamModalOpen(false)} />
    </nav>
  )
}
