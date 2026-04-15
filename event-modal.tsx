"use client"

import { X, Clock, MapPin, Users, Sparkles, Coffee, MessageCircle, Camera, Music, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect } from "react"

interface EventModalProps {
  isOpen: boolean
  onClose: () => void
}

const scheduleItems = [
  {
    time: "09:30",
    title: "Karşılama ve Kayıt",
    description: "Misafirlerin karşılanması ve kayıt işlemleri",
    icon: Coffee,
  },
  {
    time: "10:00",
    title: "Açılış Konuşması",
    description: "İTÜ GAE Takım Kaptanı hoş geldiniz konuşması",
    icon: Users,
  },
  {
    time: "10:30",
    title: "Arıba XI Örtü Açılışı",
    description: "Yeni nesil güneş enerjili aracımızın büyük tanıtımı",
    icon: Sparkles,
    highlight: true,
  },
  {
    time: "11:15",
    title: "Teknik Sunum",
    description: "Aracın tasarım ve mühendislik detayları",
    icon: Award,
  },
  {
    time: "12:00",
    title: "Soru & Cevap",
    description: "Takım üyeleri ile interaktif oturum",
    icon: MessageCircle,
  },
  {
    time: "12:45",
    title: "Fotoğraf Çekimi",
    description: "Araç ile fotoğraf çekimi fırsatı",
    icon: Camera,
  },
  {
    time: "13:30",
    title: "Kokteyl ve Networking",
    description: "Sponsorlar ve misafirlerle tanışma",
    icon: Music,
  },
]

export function EventModal({ isOpen, onClose }: EventModalProps) {
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    if (isOpen) {
      window.addEventListener("keydown", handleEscape)
    }
    return () => window.removeEventListener("keydown", handleEscape)
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[100] w-screen h-screen overflow-y-auto">
      {/* Full-Screen Sunrise Background */}
      <div className="fixed inset-0">
        {/* Sky gradient */}
        <div 
          className="absolute inset-0"
          style={{
            background: `
              linear-gradient(
                to top,
                oklch(0.85 0.18 70) 0%,
                oklch(0.88 0.15 75) 15%,
                oklch(0.9 0.12 80) 30%,
                oklch(0.92 0.08 90) 50%,
                oklch(0.9 0.06 220) 75%,
                oklch(0.85 0.08 240) 100%
              )
            `
          }}
        />
        
        {/* Sun glow */}
        <div 
          className="absolute left-1/2 -translate-x-1/2 bottom-0"
          style={{
            width: '1200px',
            height: '600px',
            background: 'radial-gradient(ellipse at center bottom, oklch(0.95 0.15 85 / 0.9) 0%, oklch(0.9 0.18 70 / 0.5) 40%, transparent 70%)',
          }}
        />

        {/* God rays */}
        <div className="absolute inset-0 overflow-hidden opacity-25">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute bottom-0 left-1/2 origin-bottom"
              style={{
                width: '6px',
                height: '100%',
                background: 'linear-gradient(to top, oklch(0.95 0.15 85 / 0.7), transparent 85%)',
                transform: `translateX(-50%) rotate(${-55 + i * 10}deg)`,
              }}
            />
          ))}
        </div>

        {/* Light warm overlay */}
        <div className="absolute inset-0 bg-amber-50/10" />
      </div>

      {/* Fixed Header with Close Buttons */}
      <div className="fixed top-0 left-0 right-0 z-20 flex items-center justify-between px-4 sm:px-6 py-4 bg-gradient-to-b from-amber-100/80 to-transparent backdrop-blur-sm">
        {/* Go Back Button */}
        <Button
          variant="ghost"
          onClick={onClose}
          className="px-5 py-2 rounded-full bg-white/90 border border-amber-200 hover:bg-white text-slate-800 shadow-md font-semibold"
        >
          Geri Dön
        </Button>

        {/* Title in header */}
        <span className="hidden sm:block text-slate-800 font-bold text-lg">Etkinlik Akışı</span>

        {/* Close Button */}
        <Button
          variant="ghost"
          size="icon"
          onClick={onClose}
          className="w-11 h-11 rounded-full bg-white/90 border border-amber-200 hover:bg-white text-slate-800 shadow-md"
        >
          <X className="w-5 h-5" />
        </Button>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-3xl mx-auto px-4 sm:px-6 pt-24 pb-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/95 border border-amber-200 shadow-lg mb-6">
            <Clock className="w-5 h-5 text-amber-600" />
            <span className="text-slate-800 text-sm font-bold tracking-wide">04 Temmuz 2026 | Hilton Maslak</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-slate-900">
            Etkinlik Akışı
          </h2>
          <p className="text-slate-700 text-lg max-w-xl mx-auto font-medium">
            Arıba XI lansmanının detaylı programı
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div 
            className="absolute left-[27px] sm:left-[31px] top-0 bottom-0 w-[3px] rounded-full"
            style={{
              background: 'linear-gradient(to bottom, oklch(0.7 0.15 50) 0%, oklch(0.65 0.18 45) 50%, oklch(0.7 0.15 50) 100%)'
            }}
          />

          {/* Timeline items */}
          <div className="space-y-5">
            {scheduleItems.map((item, index) => (
              <div
                key={index}
                className={`relative flex gap-4 sm:gap-6 ${item.highlight ? 'scale-[1.02]' : ''}`}
              >
                {/* Time dot */}
                <div className={`
                  relative z-10 flex-shrink-0 w-14 sm:w-16 h-14 sm:h-16 rounded-full 
                  flex items-center justify-center shadow-lg
                  ${item.highlight 
                    ? 'bg-gradient-to-br from-amber-400 to-orange-500 shadow-amber-400/50' 
                    : 'bg-white border-2 border-amber-300'
                  }
                `}>
                  <item.icon className={`w-6 h-6 ${item.highlight ? 'text-white' : 'text-slate-700'}`} />
                </div>

                {/* Content card - High opacity solid background */}
                <div 
                  className={`
                    flex-1 rounded-2xl p-5 sm:p-6 shadow-lg
                    ${item.highlight 
                      ? 'bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-400 shadow-amber-200/50' 
                      : 'bg-white/95 border border-amber-200/80 hover:border-amber-300 transition-colors'
                    }
                  `}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 mb-2">
                    <span className={`
                      text-sm font-bold px-3 py-1.5 rounded-full w-fit
                      ${item.highlight 
                        ? 'bg-amber-500 text-white' 
                        : 'bg-slate-800 text-white'
                      }
                    `}>
                      {item.time}
                    </span>
                    <h3 className={`text-lg sm:text-xl font-bold ${item.highlight ? 'text-slate-900' : 'text-slate-800'}`}>
                      {item.title}
                    </h3>
                  </div>
                  <p className={`text-sm sm:text-base font-medium ${item.highlight ? 'text-slate-700' : 'text-slate-600'}`}>
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer note */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-4 rounded-full bg-white/95 border border-amber-200 shadow-lg">
            <MapPin className="w-5 h-5 text-amber-600" />
            <span className="text-slate-800 text-sm font-semibold">Hilton Istanbul Maslak, Büyükdere Cad. No:201</span>
          </div>
        </div>
      </div>
    </div>
  )
}
