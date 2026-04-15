"use client"

import { X, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect } from "react"

interface TeamModalProps {
  isOpen: boolean
  onClose: () => void
}

interface TeamMember {
  name: string
  role: string
  isLead?: boolean
}

interface TeamCategory {
  name: string
  members: TeamMember[]
  accentColor: "blue" | "yellow"
}

const teamCategories: TeamCategory[] = [
  {
    name: "Project Management",
    accentColor: "yellow",
    members: [
      { name: "Bora Akyol", role: "Project Manager", isLead: true },
      { name: "Ekip Üyesi", role: "Asst. Project Manager" },
      { name: "Ekip Üyesi", role: "Operations Coordinator" },
    ],
  },
  {
    name: "Mechanics & Aerodynamics",
    accentColor: "blue",
    members: [
      { name: "Mert Güngör", role: "Team Lead", isLead: true },
      { name: "Ekip Üyesi", role: "Aerodynamics Engineer" },
      { name: "Ekip Üyesi", role: "Mechanical Design" },
      { name: "Ekip Üyesi", role: "Simulation Specialist" },
    ],
  },
  {
    name: "Power Systems",
    accentColor: "yellow",
    members: [
      { name: "Ali Eren Dağ", role: "Team Lead", isLead: true },
      { name: "Ekip Üyesi", role: "Battery Engineer" },
      { name: "Ekip Üyesi", role: "Power Electronics" },
    ],
  },
  {
    name: "Embedded Systems",
    accentColor: "blue",
    members: [
      { name: "Mustafa Çağşak", role: "Team Lead", isLead: true },
      { name: "Ekip Üyesi", role: "Software Developer" },
      { name: "Ekip Üyesi", role: "Hardware Engineer" },
    ],
  },
  {
    name: "Materials & Production",
    accentColor: "yellow",
    members: [
      { name: "Emir Aydın Şengül", role: "Team Lead", isLead: true },
      { name: "Ekip Üyesi", role: "Composites Specialist" },
      { name: "Ekip Üyesi", role: "Manufacturing Tech" },
    ],
  },
  {
    name: "Business Development",
    accentColor: "blue",
    members: [
      { name: "Enes Çelik", role: "Team Lead", isLead: true },
      { name: "Ekip Üyesi", role: "Marketing Specialist" },
      { name: "Ekip Üyesi", role: "Sponsorship Manager" },
    ],
  },
]

export function TeamModal({ isOpen, onClose }: TeamModalProps) {
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
      {/* Full-Screen Opaque Sunrise Background */}
      <div 
        className="fixed inset-0"
        style={{
          background: `
            linear-gradient(
              to top,
              oklch(0.88 0.16 65) 0%,
              oklch(0.90 0.14 70) 10%,
              oklch(0.92 0.12 75) 25%,
              oklch(0.94 0.08 80) 40%,
              oklch(0.95 0.05 85) 55%,
              oklch(0.93 0.04 180) 75%,
              oklch(0.90 0.06 210) 100%
            )
          `
        }}
      >
        {/* Warm sun glow overlay - solid colors */}
        <div 
          className="absolute left-1/2 -translate-x-1/2 bottom-0 w-full h-[50%]"
          style={{
            background: 'radial-gradient(ellipse 80% 100% at center bottom, oklch(0.95 0.12 80) 0%, oklch(0.92 0.10 75) 50%, transparent 100%)',
          }}
        />

        {/* Subtle god ray accents - very light */}
        <div className="absolute inset-0 overflow-hidden opacity-15">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute bottom-0 left-1/2 origin-bottom"
              style={{
                width: '8px',
                height: '100%',
                background: 'linear-gradient(to top, oklch(0.98 0.08 75), transparent 70%)',
                transform: `translateX(-50%) rotate(${-35 + i * 10}deg)`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Fixed Header with Close Buttons */}
      <div className="fixed top-0 left-0 right-0 z-20 flex items-center justify-between px-4 sm:px-6 py-4 bg-gradient-to-b from-amber-200/90 via-amber-100/70 to-transparent">
        {/* Go Back Button */}
        <Button
          variant="ghost"
          onClick={onClose}
          className="px-5 py-2 rounded-full bg-white/90 border border-amber-200 hover:bg-white text-slate-800 shadow-md font-semibold"
        >
          Geri Dön
        </Button>

        {/* Title in header */}
        <span className="hidden sm:block text-slate-800 font-bold text-lg">Arıba XI Ekibi</span>

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
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 pt-24 pb-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/95 border border-amber-200 shadow-lg mb-6">
            <Users className="w-5 h-5 text-amber-600" />
            <span className="text-slate-800 text-sm font-bold tracking-wide">30+ Mühendislik Öğrencisi</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-slate-900">
            Arıba XI Ekibi
          </h2>
          <p className="text-slate-700 text-lg max-w-xl mx-auto font-medium">
            Geleceğin mühendisleri, bugünün yenilikçileri
          </p>
        </div>

        {/* Team Categories */}
        <div className="space-y-10">
          {teamCategories.map((category, catIndex) => (
            <div key={catIndex}>
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div 
                  className={`h-1 flex-1 rounded-full ${
                    category.accentColor === "yellow" 
                      ? "bg-gradient-to-r from-amber-400 to-orange-400" 
                      : "bg-gradient-to-r from-sky-400 to-blue-500"
                  }`}
                />
                <h3 className="text-xl sm:text-2xl font-bold text-slate-800 whitespace-nowrap px-2">
                  {category.name}
                </h3>
                <div 
                  className={`h-1 flex-1 rounded-full ${
                    category.accentColor === "yellow" 
                      ? "bg-gradient-to-l from-amber-400 to-orange-400" 
                      : "bg-gradient-to-l from-sky-400 to-blue-500"
                  }`}
                />
              </div>

              {/* Team Members Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {category.members.map((member, memberIndex) => (
                  <div
                    key={memberIndex}
                    className={`
                      relative rounded-2xl p-4 sm:p-5 text-center transition-all duration-300
                      ${member.isLead 
                        ? "bg-white/95 border-2 shadow-xl hover:shadow-2xl" 
                        : "bg-white/85 border shadow-lg hover:shadow-xl hover:bg-white/95"
                      }
                      ${member.isLead && category.accentColor === "yellow" 
                        ? "border-amber-400 shadow-amber-200/40" 
                        : member.isLead && category.accentColor === "blue"
                        ? "border-sky-400 shadow-sky-200/40"
                        : "border-amber-200/60"
                      }
                    `}
                  >
                    {/* Photo Placeholder */}
                    <div 
                      className={`
                        w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-3 rounded-full 
                        flex items-center justify-center
                        ${member.isLead 
                          ? category.accentColor === "yellow"
                            ? "bg-gradient-to-br from-amber-100 to-orange-100 ring-4 ring-amber-400/50"
                            : "bg-gradient-to-br from-sky-100 to-blue-100 ring-4 ring-sky-400/50"
                          : "bg-gradient-to-br from-slate-100 to-slate-200 ring-2 ring-slate-300/50"
                        }
                      `}
                    >
                      <span 
                        className={`
                          text-xl sm:text-2xl font-bold
                          ${member.isLead
                            ? category.accentColor === "yellow" ? "text-amber-600" : "text-sky-600"
                            : "text-slate-500"
                          }
                        `}
                      >
                        {member.name.split(" ").map(n => n[0]).join("").slice(0, 2)}
                      </span>
                    </div>

                    {/* Name */}
                    <h4 className={`font-bold text-slate-900 mb-1 text-sm sm:text-base ${member.isLead ? "text-base sm:text-lg" : ""}`}>
                      {member.name}
                    </h4>

                    {/* Role */}
                    <p className={`text-xs sm:text-sm ${member.isLead ? "text-slate-700 font-medium" : "text-slate-600"}`}>
                      {member.role}
                    </p>

                    {/* Lead Badge */}
                    {member.isLead && (
                      <div 
                        className={`
                          absolute -top-2 -right-2 px-2 py-1 rounded-full text-xs font-bold text-white shadow-md
                          ${category.accentColor === "yellow" 
                            ? "bg-gradient-to-r from-amber-500 to-orange-500" 
                            : "bg-gradient-to-r from-sky-500 to-blue-500"
                          }
                        `}
                      >
                        Lead
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-4 rounded-full bg-white/95 border border-amber-200 shadow-lg">
            <span className="text-slate-800 text-sm font-semibold">İTÜ Güneş Enerjili Araç Takımı | 2026</span>
          </div>
        </div>
      </div>
    </div>
  )
}
