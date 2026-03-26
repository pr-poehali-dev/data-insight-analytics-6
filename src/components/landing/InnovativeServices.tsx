import { motion } from "framer-motion"
import { useState } from "react"
import { Instagram, Youtube } from "lucide-react"
import AnimatedButton from "./AnimatedButton"
import { services } from "./servicesData"

export default function InnovativeServices() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="services" className="py-24 bg-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">Инструменты, которые приносят деньги</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Подбираем только то, что даёт измеримый результат в вашей нише — без лишнего и без воздуха.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8">
          {/* Top row - Paid Social and Yandex Direct */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.slice(0, 2).map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
                className="bg-gray-900/30 border border-gray-800 rounded-2xl p-8 backdrop-blur-sm hover:border-gray-700 transition-all duration-300 group"
              >
                <div className="aspect-video bg-gray-900 rounded-lg mb-6 overflow-hidden relative border border-gray-800">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 p-4">
                    {/* Yandex Direct Mockup */}
                    {service.mockup === "yandex-direct" && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="w-full h-full p-2"
                      >
                        <div className="bg-gray-800 rounded-lg p-3 h-full">
                          <div className="flex items-center space-x-2 mb-4">
                            <div className="w-8 h-8 rounded-full bg-[#FC3F1D] flex items-center justify-center font-bold text-white text-sm">Я</div>
                            <div>
                              <div className="text-xs text-white">Яндекс Директ</div>
                              <div className="text-xs text-gray-400">Панель управления</div>
                            </div>
                          </div>
                          <div className="space-y-2">
                            <div className="flex justify-between text-xs">
                              <span className="text-gray-400">Показы</span>
                              <motion.span
                                animate={{ opacity: [0.5, 1, 0.5] }}
                                transition={{ duration: 2, repeat: Infinity }}
                                className="text-green-400"
                              >
                                +18.4K
                              </motion.span>
                            </div>
                            <div className="flex justify-between text-xs">
                              <span className="text-gray-400">Клики</span>
                              <motion.span
                                animate={{ opacity: [0.5, 1, 0.5] }}
                                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                                className="text-blue-400"
                              >
                                1 583
                              </motion.span>
                            </div>
                            <div className="flex justify-between text-xs">
                              <span className="text-gray-400">CTR</span>
                              <span className="text-gray-300">8,6%</span>
                            </div>
                            <div className="flex justify-between text-xs">
                              <span className="text-gray-400">CPC</span>
                              <span className="text-green-400">₽12.4</span>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {/* Content Factory Mockup */}
                    {service.mockup === "social" && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="w-full h-full p-2"
                      >
                        <div className="bg-gray-800 rounded-lg p-3 h-full flex flex-col justify-between">
                          <div className="flex justify-between items-center mb-2">
                            <div className="text-xs text-gray-400">Контент-план / неделя</div>
                            <motion.div
                              animate={{ opacity: [0.5, 1, 0.5] }}
                              transition={{ duration: 2, repeat: Infinity }}
                              className="text-xs text-green-400 font-medium"
                            >
                              ● В работе
                            </motion.div>
                          </div>
                          <div className="space-y-1.5 mb-2">
                            {[
                              { label: "Reels / Видео", color: "bg-pink-600", w: "90%" },
                              { label: "Посты", color: "bg-blue-600", w: "75%" },
                              { label: "Сторис", color: "bg-purple-600", w: "100%" },
                              { label: "Shorts / TikTok", color: "bg-red-600", w: "65%" },
                            ].map((item, i) => (
                              <div key={i} className="flex items-center space-x-2">
                                <div className="text-xs text-gray-400 w-24 shrink-0">{item.label}</div>
                                <div className="flex-1 bg-gray-700 rounded h-3 overflow-hidden">
                                  <motion.div
                                    initial={{ width: "0%" }}
                                    whileInView={{ width: item.w }}
                                    transition={{ duration: 1, delay: 0.3 + i * 0.15 }}
                                    viewport={{ once: true }}
                                    className={`${item.color} h-full rounded`}
                                  />
                                </div>
                              </div>
                            ))}
                          </div>
                          <div className="flex justify-between items-end">
                            <div>
                              <div className="text-xs text-gray-400 mb-0.5">Охват</div>
                              <motion.div
                                animate={{ scale: [1, 1.08, 1] }}
                                transition={{ duration: 2, repeat: Infinity }}
                                className="text-base font-bold text-green-400"
                              >
                                +41%
                              </motion.div>
                            </div>
                            <div className="flex items-end space-x-1 h-8">
                              {[3, 5, 4, 7, 6, 8, 5].map((h, i) => (
                                <motion.div
                                  key={i}
                                  initial={{ height: "4px" }}
                                  whileInView={{ height: `${h * 4}px` }}
                                  transition={{ duration: 0.8, delay: 1.0 + i * 0.08 }}
                                  viewport={{ once: true }}
                                  className="bg-pink-500 w-1 rounded-t"
                                />
                              ))}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}


                  </div>
                </div>

                <div className="flex flex-col justify-between h-auto">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed text-sm">{service.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Middle row - Email/SMS, SEO, Analytics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.slice(2, 5).map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: (index + 2) * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-gray-900/30 border border-gray-800 rounded-2xl p-8 backdrop-blur-sm hover:border-gray-700 transition-all duration-300 group"
              >
                <div className="aspect-video bg-gray-900 rounded-lg mb-6 overflow-hidden relative border border-gray-800">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 p-4">
                    {/* Email/SMS Mockup */}
                    {service.mockup === "email" && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1, delay: (index + 2) * 0.2 }}
                        className="w-full h-full p-2"
                      >
                        <div className="bg-gray-800 rounded-lg p-3 h-full">
                          <div className="space-y-2 mb-3">
                            <motion.div
                              animate={{ width: ["100%", "90%", "100%"] }}
                              transition={{ duration: 3, repeat: Infinity }}
                              className="bg-gray-700 h-2 rounded"
                            ></motion.div>
                            <motion.div
                              animate={{ width: ["75%", "85%", "75%"] }}
                              transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                              className="bg-gray-700 h-2 rounded"
                            ></motion.div>
                          </div>
                          <div className="space-y-1 mb-3">
                            <div className="bg-gray-700 h-1 w-full rounded"></div>
                            <div className="bg-gray-700 h-1 w-full rounded"></div>
                            <div className="bg-gray-700 h-1 w-2/3 rounded"></div>
                          </div>
                          <div className="flex justify-between items-center">
                            <div className="bg-gray-700 h-6 w-20 rounded"></div>
                            <motion.div
                              whileHover={{ scale: 1.05 }}
                              className="bg-blue-600 h-8 w-24 rounded text-xs flex items-center justify-center text-white cursor-pointer"
                            >
                              Отправить
                            </motion.div>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {/* SEO Mockup */}
                    {service.mockup === "seo" && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1, delay: (index + 2) * 0.2 }}
                        className="w-full h-full p-2"
                      >
                        <div className="bg-gray-800 rounded-lg p-3 h-full">
                          <div className="text-xs text-gray-400 mb-2">SEO-отчет</div>
                          <div className="grid grid-cols-2 gap-2 mb-2">
                            <div className="bg-gray-700 rounded p-2">
                              <div className="text-xs text-gray-400">Трафик</div>
                              <motion.div
                                animate={{ width: ["60%", "80%", "60%"] }}
                                transition={{ duration: 3, repeat: Infinity }}
                                className="bg-gray-600 h-1 rounded mt-1"
                              ></motion.div>
                            </div>
                            <div className="bg-gray-700 rounded p-2">
                              <div className="text-xs text-gray-400">Позиции</div>
                              <motion.div
                                animate={{ width: ["75%", "90%", "75%"] }}
                                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                                className="bg-green-600 h-1 rounded mt-1"
                              ></motion.div>
                            </div>
                          </div>
                          <div className="bg-gray-700 rounded p-2">
                            <div className="text-xs text-gray-400">Аудит сайта</div>
                            <div className="space-y-1 mt-1">
                              <div className="bg-gray-600 h-1 w-full rounded"></div>
                              <div className="bg-gray-600 h-1 w-2/3 rounded"></div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {/* Analytics Mockup */}
                    {service.mockup === "analytics" && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1, delay: (index + 2) * 0.2 }}
                        className="w-full h-full p-2"
                      >
                        <div className="bg-gray-800 rounded-lg p-3 h-full">
                          <div className="text-xs text-gray-400 mb-2">Показатели</div>
                          <div className="grid grid-cols-2 gap-2 mb-2">
                            <div className="bg-gray-700 rounded p-2">
                              <div className="text-xs text-gray-400">Позиция</div>
                              <motion.div
                                animate={{ color: ["#10b981", "#3b82f6", "#10b981"] }}
                                transition={{ duration: 2, repeat: Infinity }}
                                className="text-xs font-bold mt-1"
                              >
                                #1
                              </motion.div>
                            </div>
                            <div className="bg-gray-700 rounded p-2">
                              <div className="text-xs text-gray-400">Показы</div>
                              <div className="text-xs text-white mt-1">12.5K</div>
                            </div>
                          </div>
                          <div className="grid grid-cols-2 gap-2">
                            <div className="bg-gray-700 rounded p-2">
                              <div className="text-xs text-gray-400">Клики</div>
                              <motion.div
                                animate={{ scale: [1, 1.1, 1] }}
                                transition={{ duration: 2, repeat: Infinity }}
                                className="text-xs text-white mt-1"
                              >
                                2.1K
                              </motion.div>
                            </div>
                            <div className="bg-gray-700 rounded p-2">
                              <div className="text-xs text-gray-400">Посетители</div>
                              <div className="text-xs text-white mt-1">1.8K</div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </div>
                </div>

                <div className="flex flex-col justify-between h-auto">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed text-sm">{service.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom row - Web Development (full width) */}
          {services.slice(5).map((service) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-gray-900/30 border border-gray-800 rounded-2xl p-8 backdrop-blur-sm hover:border-gray-700 transition-all duration-300 group"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed text-sm mb-6">{service.description}</p>

                    {/* Trust Badges */}
                    {service.badges && (
                      <div className="flex flex-wrap gap-3 mb-6">
                        {service.badges.map((badge, badgeIndex) => (
                          <div
                            key={badgeIndex}
                            className="flex items-center space-x-2 bg-gray-800/50 px-3 py-2 rounded-lg border border-gray-700/50"
                          >
                            <div className="text-green-400">{badge.icon}</div>
                            <span className="text-xs text-gray-300">{badge.text}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="flex justify-end items-center">
                    <a href="#services">
                      <AnimatedButton className="bg-white text-black hover:bg-gray-100 px-6 py-2">
                        <span className="flex items-center">Подробнее</span>
                      </AnimatedButton>
                    </a>
                  </div>
                </div>

                <div className="md:col-span-2">
                  <div className="aspect-[16/9] bg-gray-900 rounded-lg overflow-hidden relative border border-gray-800">
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 p-4">
                      {/* Web Development Mockup */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="w-full h-full"
                      >
                        {/* Browser Chrome */}
                        <div className="bg-gray-700 rounded-t-lg p-2 mb-2">
                          <div className="flex items-center space-x-2">
                            <div className="flex space-x-1">
                              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                              <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            </div>
                            <div className="bg-gray-600 text-gray-300 text-xs px-2 py-1 rounded flex-1 text-center">
                              www.moimarketing.ru
                            </div>
                          </div>
                        </div>
                        {/* Website Content */}
                        <div className="bg-gray-800 rounded-b-lg p-3 h-[calc(100%-36px)] grid grid-cols-3 gap-3">
                          <div className="col-span-3 flex justify-between items-center mb-2">
                            <motion.div
                              animate={{ width: ["60px", "80px", "60px"] }}
                              transition={{ duration: 3, repeat: Infinity }}
                              className="bg-gray-700 h-4 rounded"
                            ></motion.div>
                            <div className="flex space-x-2">
                              <div className="bg-gray-700 h-3 w-12 rounded"></div>
                              <div className="bg-gray-700 h-3 w-12 rounded"></div>
                              <div className="bg-gray-700 h-3 w-12 rounded"></div>
                            </div>
                          </div>
                          <motion.div
                            animate={{ opacity: [0.7, 1, 0.7] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="col-span-3 h-20 bg-gray-700 rounded mb-3"
                          ></motion.div>
                          <div className="bg-gray-700 h-24 rounded"></div>
                          <div className="bg-gray-700 h-24 rounded"></div>
                          <div className="bg-gray-700 h-24 rounded"></div>
                          <div className="col-span-3 grid grid-cols-4 gap-2">
                            <div className="bg-gray-700 h-8 rounded"></div>
                            <div className="bg-gray-700 h-8 rounded"></div>
                            <div className="bg-gray-700 h-8 rounded"></div>
                            <div className="bg-gray-700 h-8 rounded"></div>
                          </div>
                        </div>
                      </motion.div>
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