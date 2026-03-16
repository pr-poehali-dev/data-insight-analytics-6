import { motion } from "framer-motion"
import Icon from "@/components/ui/icon"

const cases = [
  {
    id: "depo",
    client: "ДЕПО",
    category: "SMM / Контент-маркетинг",
    title: "Продвижение крупнейшего фудмолла страны",
    description:
      "Фудмолл «ДЕПО» — крупнейший в России: 76 ресторанных концепций и 60 лавок. Задача — освещать жизнь фудмолла 24/7, выстроить SMM и разработать сезонную дизайн-концепцию для соцсетей.",
    solution: [
      "Концепт «контент-завода» с автоматизацией публикаций и базой визуальных решений",
      "AI-технологии: нейросети для идей, обработки фото/видео и аналитики трендов",
      "Привлечение медийных личностей для расширения охвата",
      "Эксклюзивный контент: закулисье, эфиры с шефами, конкурсы",
    ],
    results: [
      { metric: "ER", value: "8,5%", label: "вовлечённость аудитории" },
      { metric: "Рост", value: "×3", label: "охват за 6 месяцев" },
      { metric: "Стиль", value: "100%", label: "узнаваемый визуальный бренд" },
    ],
    tags: ["HoReCa", "SMM", "AI-контент", "Брендинг"],
    gradient: "from-orange-500/20 to-red-600/10",
    accentColor: "text-orange-400",
    borderColor: "border-orange-500/30",
  },
]

export default function Cases() {
  return (
    <section id="success-stories" className="relative py-24 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-green-400 text-sm font-medium tracking-widest uppercase mb-4">
            Кейсы
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Реальные результаты
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Проекты, которые принесли клиентам измеримый рост
          </p>
        </motion.div>

        <div className="space-y-12">
          {cases.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className={`rounded-2xl border ${item.borderColor} bg-gradient-to-br ${item.gradient} backdrop-blur-sm overflow-hidden`}
            >
              <div className="p-8 md:p-12">
                <div className="flex flex-wrap items-center gap-3 mb-6">
                  <span className={`text-xs font-semibold uppercase tracking-widest ${item.accentColor} bg-white/5 px-3 py-1 rounded-full`}>
                    {item.category}
                  </span>
                  {item.tags.map((tag) => (
                    <span key={tag} className="text-xs text-gray-400 bg-white/5 px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="grid md:grid-cols-2 gap-10">
                  <div>
                    <p className="text-gray-400 text-sm uppercase tracking-widest mb-2">{item.client}</p>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">{item.title}</h3>
                    <p className="text-gray-300 leading-relaxed mb-8">{item.description}</p>

                    <div>
                      <p className="text-white font-semibold mb-3 flex items-center gap-2">
                        <Icon name="Zap" size={16} className={item.accentColor} />
                        Наше решение
                      </p>
                      <ul className="space-y-2">
                        {item.solution.map((s, i) => (
                          <li key={i} className="flex items-start gap-3 text-gray-300 text-sm">
                            <Icon name="ChevronRight" size={14} className={`mt-0.5 flex-shrink-0 ${item.accentColor}`} />
                            {s}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex flex-col justify-center">
                    <p className="text-white font-semibold mb-6 flex items-center gap-2">
                      <Icon name="TrendingUp" size={16} className={item.accentColor} />
                      Результаты
                    </p>
                    <div className="grid grid-cols-1 gap-4">
                      {item.results.map((r) => (
                        <div
                          key={r.metric}
                          className="flex items-center gap-4 bg-white/5 rounded-xl p-4 border border-white/10"
                        >
                          <div className={`text-3xl font-bold ${item.accentColor} min-w-[80px]`}>
                            {r.value}
                          </div>
                          <div>
                            <div className="text-white text-sm font-medium">{r.metric}</div>
                            <div className="text-gray-400 text-xs">{r.label}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
