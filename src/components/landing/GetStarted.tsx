import { useState } from "react"
import { motion } from "framer-motion"
import Icon from "@/components/ui/icon"
import AnimatedButton from "./AnimatedButton"

const SEND_LEAD_URL = "https://functions.poehali.dev/a9ef7b53-81c8-4b70-ba02-9da64cb6869d"

export default function GetStarted() {
  const [form, setForm] = useState({ name: "", phone: "", message: "" })
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")
    try {
      const res = await fetch(SEND_LEAD_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus("success")
        setForm({ name: "", phone: "", message: "" })
      } else {
        setStatus("error")
      }
    } catch {
      setStatus("error")
    }
  }

  return (
    <section id="get-started" className="relative py-24 px-4">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-green-400 text-sm font-medium tracking-widest uppercase mb-4">
            Оставить заявку
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Начнём работу
          </h2>
          <p className="text-gray-400 text-lg">
            Оставьте контакты — мы свяжемся в течение рабочего дня
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8"
        >
          {status === "success" ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Check" size={32} className="text-green-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Заявка отправлена!</h3>
              <p className="text-gray-400">Мы свяжемся с вами в ближайшее время</p>
              <button
                onClick={() => setStatus("idle")}
                className="mt-6 text-sm text-gray-500 hover:text-gray-300 transition-colors"
              >
                Отправить ещё одну
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Имя *</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Как вас зовут?"
                  required
                  className="w-full px-4 py-3 bg-gray-800/60 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Телефон *</label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+7 999 000-00-00"
                  required
                  className="w-full px-4 py-3 bg-gray-800/60 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">О вашем проекте</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Расскажите кратко о бизнесе и задаче..."
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-800/60 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-colors resize-none"
                />
              </div>

              {status === "error" && (
                <p className="text-red-400 text-sm flex items-center gap-2">
                  <Icon name="AlertCircle" size={16} />
                  Что-то пошло не так. Попробуйте ещё раз или напишите нам напрямую.
                </p>
              )}

              <AnimatedButton
                type="submit"
                disabled={status === "loading"}
                className="w-full bg-white text-black hover:bg-gray-100 py-4 text-base font-semibold disabled:opacity-50"
              >
                {status === "loading" ? "Отправляем..." : "Отправить заявку"}
              </AnimatedButton>

              <p className="text-xs text-gray-500 text-center">
                Нажимая кнопку, вы соглашаетесь на обработку персональных данных
              </p>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  )
}
