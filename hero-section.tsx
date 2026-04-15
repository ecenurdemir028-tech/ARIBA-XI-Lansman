"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export function HeroSection() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    // Set launch date to 60 days from now for demo
    const launchDate = new Date()
    launchDate.setDate(launchDate.getDate() + 60)

    const timer = setInterval(() => {
      const now = new Date().getTime()
      const distance = launchDate.getTime() - now

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20">
      {/* Sunrise Background Gradient */}
      <div 
        className="absolute inset-0"
        style={{
          background: `linear-gradient(
            to top,
            oklch(0.95 0.12 70) 0%,
            oklch(0.85 0.18 60) 15%,
            oklch(0.75 0.2 50) 30%,
            oklch(0.65 0.18 45) 45%,
            oklch(0.55 0.12 40) 55%,
            oklch(0.4 0.08 250) 70%,
            oklch(0.25 0.06 260) 85%,
            oklch(0.15 0.04 270) 100%
          )`
        }}
      />

      {/* Sun Orb - positioned low on horizon behind car */}
      <div 
        className="absolute left-1/2 -translate-x-1/2"
        style={{ bottom: '28%' }}
      >
        {/* Outer glow rings */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-20"
          style={{ background: 'radial-gradient(circle, oklch(0.95 0.2 70) 0%, transparent 70%)' }}
        />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full opacity-40"
          style={{ background: 'radial-gradient(circle, oklch(0.9 0.2 65) 0%, transparent 60%)' }}
        />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full opacity-60"
          style={{ background: 'radial-gradient(circle, oklch(0.95 0.15 75) 0%, oklch(0.9 0.2 60) 40%, transparent 70%)' }}
        />
        {/* Sun core */}
        <div 
          className="relative w-[150px] h-[150px] rounded-full"
          style={{ 
            background: 'radial-gradient(circle, oklch(1 0.05 90) 0%, oklch(0.98 0.15 80) 50%, oklch(0.95 0.2 65) 100%)',
            boxShadow: '0 0 60px 30px oklch(0.95 0.2 70 / 0.6), 0 0 120px 60px oklch(0.9 0.18 60 / 0.4), 0 0 200px 100px oklch(0.85 0.15 55 / 0.2)'
          }}
        />
      </div>

      {/* God Rays / Sunbeams */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg className="absolute w-full h-full" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
          <defs>
            <linearGradient id="rayGradient1" x1="0%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="oklch(0.95 0.15 70 / 0.4)" />
              <stop offset="50%" stopColor="oklch(0.9 0.12 65 / 0.15)" />
              <stop offset="100%" stopColor="oklch(0.85 0.1 60 / 0)" />
            </linearGradient>
            <linearGradient id="rayGradient2" x1="0%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="oklch(0.9 0.18 60 / 0.3)" />
              <stop offset="60%" stopColor="oklch(0.85 0.15 55 / 0.1)" />
              <stop offset="100%" stopColor="oklch(0.8 0.1 50 / 0)" />
            </linearGradient>
          </defs>
          {/* Central rays */}
          <polygon points="960,750 800,0 880,0" fill="url(#rayGradient1)" opacity="0.6" />
          <polygon points="960,750 1040,0 1120,0" fill="url(#rayGradient1)" opacity="0.6" />
          <polygon points="960,750 920,0 1000,0" fill="url(#rayGradient2)" opacity="0.7" />
          {/* Side rays */}
          <polygon points="960,750 500,0 620,0" fill="url(#rayGradient1)" opacity="0.4" />
          <polygon points="960,750 1300,0 1420,0" fill="url(#rayGradient1)" opacity="0.4" />
          <polygon points="960,750 200,0 350,0" fill="url(#rayGradient2)" opacity="0.25" />
          <polygon points="960,750 1570,0 1720,0" fill="url(#rayGradient2)" opacity="0.25" />
          {/* Far side rays */}
          <polygon points="960,750 0,200 0,400" fill="url(#rayGradient1)" opacity="0.2" />
          <polygon points="960,750 1920,200 1920,400" fill="url(#rayGradient1)" opacity="0.2" />
        </svg>
      </div>

      {/* Horizon line glow */}
      <div 
        className="absolute left-0 right-0 h-32"
        style={{ 
          bottom: '22%',
          background: 'linear-gradient(to top, oklch(0.95 0.15 70 / 0.5), transparent)'
        }}
      />

      {/* Atmospheric haze near horizon */}
      <div 
        className="absolute left-0 right-0 h-48"
        style={{ 
          bottom: '15%',
          background: 'linear-gradient(to top, oklch(0.9 0.1 75 / 0.3), transparent)'
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Pre-title */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm mb-8">
          <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
          <span className="text-amber-100 text-sm font-medium tracking-wide uppercase drop-shadow-md">Yeni Araç Lansmanı</span>
        </div>

        {/* Title */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
          <span 
            className="block text-slate-900/90"
            style={{
              textShadow: '0 2px 10px oklch(0.95 0.1 70 / 0.5), 0 0 40px oklch(0.9 0.15 65 / 0.3)'
            }}
          >
            Güneşin Gücüyle
          </span>
          <span 
            className="block bg-clip-text text-transparent"
            style={{
              backgroundImage: 'linear-gradient(135deg, oklch(0.95 0.2 85) 0%, oklch(0.9 0.22 70) 25%, oklch(0.8 0.24 50) 50%, oklch(0.72 0.26 40) 75%, oklch(0.65 0.24 30) 100%)',
              filter: 'drop-shadow(0 0 30px oklch(0.9 0.2 60 / 0.7)) drop-shadow(0 0 60px oklch(0.85 0.18 50 / 0.4))',
            }}
          >
            Geleceği Aydınlatıyoruz
          </span>
        </h1>

        {/* Event Details Subtitle */}
        <p 
          className="text-xl sm:text-2xl md:text-3xl max-w-3xl mx-auto mb-12 font-medium tracking-wide"
          style={{
            color: 'oklch(0.99 0.03 85)',
            textShadow: '0 2px 20px oklch(0.9 0.15 70 / 0.8), 0 0 40px oklch(0.85 0.2 60 / 0.5), 0 1px 3px oklch(0.2 0 0 / 0.3)'
          }}
        >
          Arıba XI lansmanı 04.07.2026 tarihinde Hilton Maslak&apos;ta
        </p>

        {/* Solar Car Silhouette - Dark silhouette against bright sun */}
        <div className="relative w-full max-w-4xl mx-auto mb-12">
          <div className="relative aspect-[16/6]">
            {/* Ground shadow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-6 bg-gradient-to-r from-transparent via-slate-900/30 to-transparent blur-lg" />
            
            {/* Car SVG Silhouette - Dark silhouette with edge lighting */}
            <svg
              viewBox="0 0 900 280"
              className="w-full h-full"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Filters */}
              <defs>
                <filter id="edgeGlow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
                <filter id="softGlow" x="-30%" y="-30%" width="160%" height="160%">
                  <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
                {/* Edge light gradient - warm sun backlight */}
                <linearGradient id="edgeLightTop" x1="0%" y1="100%" x2="0%" y2="0%">
                  <stop offset="0%" stopColor="oklch(0.15 0.02 260)" />
                  <stop offset="70%" stopColor="oklch(0.2 0.02 260)" />
                  <stop offset="100%" stopColor="oklch(0.9 0.2 65)" />
                </linearGradient>
                <linearGradient id="edgeLightSide" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="oklch(0.85 0.18 60)" />
                  <stop offset="30%" stopColor="oklch(0.2 0.02 260)" />
                  <stop offset="70%" stopColor="oklch(0.2 0.02 260)" />
                  <stop offset="100%" stopColor="oklch(0.85 0.18 60)" />
                </linearGradient>
                <linearGradient id="cockpitLight" x1="0%" y1="100%" x2="0%" y2="0%">
                  <stop offset="0%" stopColor="oklch(0.15 0.02 260)" />
                  <stop offset="60%" stopColor="oklch(0.2 0.02 260)" />
                  <stop offset="100%" stopColor="oklch(0.95 0.18 70)" />
                </linearGradient>
              </defs>

              {/* Main body silhouette - filled dark with edge lighting */}
              <path
                d="M50 195 
                   C60 190, 80 185, 120 180
                   L180 175
                   C220 172, 280 168, 350 165
                   L400 163
                   C450 161, 520 160, 580 162
                   L650 165
                   C720 170, 780 178, 820 185
                   L850 195
                   C855 198, 855 205, 850 210
                   L800 215
                   C750 218, 680 220, 600 222
                   L500 224
                   C400 225, 300 224, 200 222
                   L120 218
                   C80 216, 55 212, 50 205
                   C48 200, 48 198, 50 195
                   Z"
                fill="oklch(0.12 0.02 260)"
                stroke="url(#edgeLightSide)"
                strokeWidth="2"
              />

              {/* Top edge highlight - sun backlight rim */}
              <path
                d="M100 185
                   C150 175, 250 165, 380 160
                   L500 158
                   C620 160, 720 168, 800 182"
                stroke="oklch(0.95 0.18 70)"
                strokeWidth="2.5"
                fill="none"
                filter="url(#edgeGlow)"
              />

              {/* Cockpit silhouette with rim light */}
              <path
                d="M380 160
                   C390 145, 410 125, 440 115
                   C460 108, 490 105, 520 108
                   C550 112, 575 125, 590 145
                   C600 158, 600 162, 595 165"
                fill="oklch(0.1 0.02 260)"
                stroke="url(#cockpitLight)"
                strokeWidth="2"
              />

              {/* Cockpit top rim - brightest edge light */}
              <path
                d="M410 130
                   C425 118, 455 110, 490 110
                   C525 110, 555 118, 570 130"
                stroke="oklch(0.98 0.15 75)"
                strokeWidth="3"
                fill="none"
                filter="url(#edgeGlow)"
              />

              {/* Rear fin silhouette */}
              <path
                d="M50 195
                   L20 190
                   C10 188, 5 185, 8 180
                   L25 175
                   C35 172, 45 175, 50 180"
                fill="oklch(0.1 0.02 260)"
                stroke="oklch(0.7 0.2 45)"
                strokeWidth="1.5"
              />
              {/* Tail light */}
              <circle 
                cx="15" 
                cy="185" 
                r="4" 
                fill="oklch(0.6 0.28 25)" 
                filter="url(#edgeGlow)"
                className="animate-pulse"
                style={{ animationDuration: '1.5s' }}
              />

              {/* Solar panel surface - subtle grid catching light */}
              <g opacity="0.3">
                <path d="M150 178 L750 172" stroke="oklch(0.9 0.15 70)" strokeWidth="0.5" strokeDasharray="20 10" />
                <path d="M130 183 L780 178" stroke="oklch(0.85 0.12 65)" strokeWidth="0.5" strokeDasharray="20 10" />
              </g>

              {/* Wheel areas - dark with subtle rim */}
              <ellipse
                cx="780"
                cy="205"
                rx="35"
                ry="18"
                fill="oklch(0.08 0.02 260)"
                stroke="oklch(0.4 0.05 260)"
                strokeWidth="1"
              />
              <ellipse
                cx="150"
                cy="205"
                rx="30"
                ry="15"
                fill="oklch(0.08 0.02 260)"
                stroke="oklch(0.4 0.05 260)"
                strokeWidth="1"
              />

              {/* Accent light reflections on body */}
              <path
                d="M200 175 C300 168, 400 165, 500 165"
                stroke="oklch(0.9 0.15 70 / 0.4)"
                strokeWidth="1"
                fill="none"
                filter="url(#softGlow)"
              />
              <path
                d="M500 165 C600 165, 700 170, 780 180"
                stroke="oklch(0.9 0.15 70 / 0.4)"
                strokeWidth="1"
                fill="none"
                filter="url(#softGlow)"
              />

              {/* Front light point */}
              <circle cx="840" cy="198" r="3" fill="oklch(0.95 0.15 75)" filter="url(#edgeGlow)" />
            </svg>
          </div>
        </div>

        {/* Countdown Timer */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-10">
          <TimeUnit value={timeLeft.days} label="Gün" />
          <TimeUnit value={timeLeft.hours} label="Saat" />
          <TimeUnit value={timeLeft.minutes} label="Dakika" />
          <TimeUnit value={timeLeft.seconds} label="Saniye" />
        </div>

        {/* CTA Button */}
        <Button
          size="lg"
          className="bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 text-white font-semibold px-8 py-6 text-lg rounded-full hover:opacity-90 transition-all shadow-[0_0_30px_oklch(0.75_0.2_50_/_0.5),0_4px_20px_oklch(0.7_0.2_45_/_0.3)] hover:shadow-[0_0_40px_oklch(0.8_0.22_55_/_0.6),0_6px_25px_oklch(0.75_0.2_50_/_0.4)]"
        >
          RSVP / Kayıt Ol
        </Button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600 animate-bounce">
        <span className="text-xs uppercase tracking-widest">Keşfet</span>
        <ChevronDown className="w-5 h-5" />
      </div>
    </section>
  )
}

function TimeUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl bg-white/20 border border-white/30 backdrop-blur-sm flex items-center justify-center shadow-lg">
        <span className="text-2xl sm:text-3xl font-bold text-slate-800 drop-shadow-sm">
          {value.toString().padStart(2, "0")}
        </span>
      </div>
      <span className="text-xs sm:text-sm text-slate-600 mt-2 uppercase tracking-wider">
        {label}
      </span>
    </div>
  )
}
