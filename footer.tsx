import Link from "next/link"
import { Instagram, Twitter, Linkedin, Youtube, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="relative border-t border-amber-200/50 bg-gradient-to-b from-slate-50 to-amber-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo & Description */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center shadow-md">
                <span className="text-white font-bold text-sm">GAE</span>
              </div>
              <div>
                <p className="font-bold text-slate-800">İTÜ GAE</p>
                <p className="text-xs text-slate-500">Solar Car Team</p>
              </div>
            </Link>
            <p className="text-slate-600 text-sm leading-relaxed">
              İstanbul Teknik Üniversitesi Güneş Enerjili Araç Ekibi, sürdürülebilir mobilite için yenilikçi çözümler geliştiriyor.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-slate-800 mb-4">Hızlı Bağlantılar</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#about" className="text-slate-600 hover:text-amber-600 transition-colors text-sm">
                  Araç Hakkında
                </Link>
              </li>
              <li>
                <Link href="#event" className="text-slate-600 hover:text-amber-600 transition-colors text-sm">
                  Lansman Etkinliği
                </Link>
              </li>
              <li>
                <Link href="#team" className="text-slate-600 hover:text-amber-600 transition-colors text-sm">
                  Ekibimiz
                </Link>
              </li>
              <li>
                <Link href="#sponsors" className="text-slate-600 hover:text-amber-600 transition-colors text-sm">
                  Sponsorlar
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="font-semibold text-slate-800 mb-4">İletişim</h4>
            <div className="flex items-center gap-2 text-slate-600 text-sm mb-4">
              <Mail className="w-4 h-4" />
              <span>info@itugae.com</span>
            </div>
            <div className="flex items-center gap-4">
              <Link href="#" className="text-slate-500 hover:text-amber-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-slate-500 hover:text-amber-600 transition-colors">
                <Twitter className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-slate-500 hover:text-amber-600 transition-colors">
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-slate-500 hover:text-amber-600 transition-colors">
                <Youtube className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-amber-200/50 mt-8 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} İTÜ Güneş Enerjili Araç Ekibi. Tüm hakları saklıdır.
          </p>
          <p className="text-slate-400 text-xs">
            Sürdürülebilir gelecek için mühendislik.
          </p>
        </div>
      </div>
    </footer>
  )
}
