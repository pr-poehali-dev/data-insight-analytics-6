import { Shield, CheckCircle, DollarSign } from "lucide-react"

export interface ServiceBadge {
  icon: React.ReactNode
  text: string
}

export interface Service {
  title: string
  description: string
  mockup: string
  badges?: ServiceBadge[]
}

export const services: Service[] = [
  {
    title: "Контент завод в социальных сетях",
    description:
      "Создаём системный поток контента: фото, видео, тексты и сторис — без пауз и без потери качества. Соцсети работают как канал продаж, а не просто витрина.",
    mockup: "social",
  },
  {
    title: "Яндекс Директ",
    description:
      "Показываем рекламу людям, которые уже ищут ваш продукт в Яндексе. Платите только за результат — переходы и заявки, не за охват.",
    mockup: "yandex-direct",
  },
  {
    title: "Email / SMS",
    description: "Возвращаем ушедших клиентов и увеличиваем повторные покупки. Один хороший сценарий окупается месяцами.",
    mockup: "email",
  },
  {
    title: "SEO",
    description:
      "Приводим клиентов из поиска без затрат на клик. Долгосрочный актив, который работает даже когда вы не платите за рекламу.",
    mockup: "seo",
  },
  {
    title: "Аналитика",
    description:
      "Настраиваем сквозную аналитику: видите, какой канал приносит деньги, а какой — только тратит бюджет.",
    mockup: "analytics",
  },
  {
    title: "Веб-разработка",
    description:
      "Делаем сайты, которые продают, а не просто существуют. Скорость, конверсия и удобство — в основе каждого проекта.",
    mockup: "web-dev",
    badges: [
      { icon: <Shield className="w-4 h-4" />, text: "SSL-защита" },
      { icon: <DollarSign className="w-4 h-4" />, text: "Без абонплаты" },
      { icon: <CheckCircle className="w-4 h-4" />, text: "Uptime 99.9%" },
    ],
  },
]