import { Wind, BatteryCharging, Sun } from "lucide-react"

const features = [
  {
    icon: Wind,
    title: "Aerodinamik Tasarım",
    description: "0.09 sürtünme katsayısı ile sınıfının en aerodinamik güneş enerjili aracı. CFD simülasyonları ile optimize edilmiş gövde yapısı.",
    stat: "Cd 0.09",
  },
  {
    icon: BatteryCharging,
    title: "Batarya Verimliliği",
    description: "Yüksek kapasiteli lityum-iyon batarya sistemi ile 500+ km menzil. Rejeneratif frenleme ile enerji geri kazanımı.",
    stat: "500+ km",
  },
  {
    icon: Sun,
    title: "Güneş Panelleri",
    description: "6m² yüksek verimli monokristal silikon güneş hücreleri. %24 dönüşüm verimliliği ile maksimum enerji üretimi.",
    stat: "%24 Verim",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      {/* Background - continuing from sunrise to a warm light theme */}
      <div className="absolute inset-0 bg-gradient-to-b from-amber-50 via-white to-slate-50" />
      
      {/* Subtle warm glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-200/30 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-orange-100/40 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber-400/50 bg-amber-100/50 mb-6">
            <span className="text-amber-700 text-sm font-medium tracking-wide uppercase">Teknik Özellikler</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-800 mb-6 text-balance">
            Araç Hakkında
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto text-pretty">
            Yılların AR-GE çalışmasının ürünü, mühendislik mükemmelliğinin simgesi yeni nesil güneş enerjili aracımız.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white/70 backdrop-blur-sm border border-amber-200/50 rounded-2xl p-8 hover:border-amber-400/60 hover:shadow-xl hover:shadow-amber-100/50 transition-all duration-300"
            >
              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-amber-100/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-amber-100 to-orange-100 border border-amber-300/50 flex items-center justify-center mb-6">
                  <feature.icon className="w-7 h-7 text-amber-600" />
                </div>

                {/* Stat */}
                <div className="text-3xl font-bold bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent mb-3">
                  {feature.stat}
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-slate-800 mb-3">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 sm:mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-2xl sm:text-3xl font-bold text-amber-600 mb-2">180 kg</div>
            <div className="text-sm text-slate-500">Toplam Ağırlık</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-bold text-amber-600 mb-2">110 km/h</div>
            <div className="text-sm text-slate-500">Maksimum Hız</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-bold text-orange-500 mb-2">1.2 kW</div>
            <div className="text-sm text-slate-500">Güneş Panel Gücü</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-bold text-orange-500 mb-2">5 kWh</div>
            <div className="text-sm text-slate-500">Batarya Kapasitesi</div>
          </div>
        </div>
      </div>
    </section>
  )
}
