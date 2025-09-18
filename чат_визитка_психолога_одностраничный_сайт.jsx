import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send, ShieldCheck, Heart, Sparkles, Sun, Calendar, MessageCircle } from "lucide-react";

// ---- Simple animation variants ----
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.08 } })
};

export default function PsychologistLanding() {
  // ---- Editable profile data (replace placeholders) ----
  const profile = useMemo(
    () => ({
      name: "Анна Яковлева",
      title: "Анна Яковлева Психолог",
      tagline:
        "Помогаю справиться с тревогой, пройти через кризис, переработать травматический опыт и прийти к самоопределению.",
      portraitUrl:
        "https://optim.tildacdn.ink/tild3438-3063-4962-b238-626238393036/-/resize/920x/-/format/webp/__103__260.jpg.webp",




 // замените на ваше фото
      email: "hello@example.com", // замените на ваш email
      telegram: "https://t.me/your_username", // замените на ваш Telegram
      whatsapp: "https://wa.me/70000000000", // опционально: номер в формате 7XXXXXXXXXX
      city: "Москва",
      approaches: ["EMDR", "Транзактный анализ", "Элементы КПТ", "Коучинг"],
      fallbackPortraitUrl:
        "data:image/svg+xml;utf8,<?xml version='1.0'?><svg xmlns='http://www.w3.org/2000/svg' width='1200' height='1500'><defs><linearGradient id='g' x1='0' y1='0' x2='0' y2='1'><stop offset='0%' stop-color='%23fff7ed'/><stop offset='100%' stop-color='%23ffedd5'/></linearGradient></defs><rect width='100%' height='100%' fill='url(%23g)'/><circle cx='600' cy='520' r='220' fill='%23fed7aa'/><rect x='260' y='820' width='680' height='520' rx='260' fill='%23fdba74'/></svg>",
    }),
    []
  );

  const themes = {
    sand: { name: 'Песочный', brand: '#b7791f', bgEnd: '#fffbeb', blob1: '#ffe4e6', blob2: '#fef3c7', blob3: '#f5f5f4' },
    peach: { name: 'Персиковый', brand: '#d97706', bgEnd: '#fff1f2', blob1: '#fee2e2', blob2: '#fed7aa', blob3: '#f1f5f9' },
    sage: { name: 'Серо‑зелёный', brand: '#6b8e6b', bgEnd: '#f0fdf4', blob1: '#dcfce7', blob2: '#e2e8f0', blob3: '#f7fee7' }
  };
  const [theme, setTheme] = useState('sand');
  const palette = themes[theme];

  return (
    <div style={{ '--brand': palette.brand, '--bg-end': palette.bgEnd, '--blob1': palette.blob1, '--blob2': palette.blob2, '--blob3': palette.blob3 }} className="min-h-screen w-full bg-gradient-to-b from-white to-[var(--bg-end)] text-stone-800">
      {/* Subtle animated background blobs */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-[var(--blob1)] blur-3xl opacity-70 animate-pulse" />
        <div className="absolute top-1/3 -right-24 h-80 w-80 rounded-full bg-[var(--blob2)] blur-3xl opacity-60 animate-pulse" />
        <div className="absolute bottom-0 left-1/4 h-64 w-64 rounded-full bg-[var(--blob3)] blur-3xl opacity-60 animate-pulse" />
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40 backdrop-blur-md bg-white/60 border-b border-stone-200/60">
        <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-2xl bg-[var(--brand)] text-white grid place-items-center text-sm font-semibold">PSY</div>
            <span className="font-semibold tracking-wide">{profile.name}</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-stone-700">
            <a href="#about" className="hover:text-stone-800 transition">Обо мне</a>
            <a href="#help" className="hover:text-stone-800 transition">Чем помогаю</a>
            <a href="#benefits" className="hover:text-stone-800 transition">Почему со мной</a>
            <a href="#experience" className="hover:text-stone-800 transition">Опыт</a>
            <a href="#education" className="hover:text-stone-800 transition">Образование</a>
            <a href="#faq" className="hover:text-stone-800 transition">FAQ</a>
            <a href="#contact" className="hover:text-stone-800 transition">Контакты</a>
          </nav>
          <div className="flex items-center gap-2">
            <div className="hidden md:flex items-center gap-1 mr-2" aria-label="Цветовая схема">
              <button onClick={() => setTheme('sand')} className="h-7 w-7 rounded-full ring-1 ring-stone-300 hover:ring-stone-400 transition" style={{ background: themes.sand.brand }} title={themes.sand.name} />
              <button onClick={() => setTheme('peach')} className="h-7 w-7 rounded-full ring-1 ring-stone-300 hover:ring-stone-400 transition" style={{ background: themes.peach.brand }} title={themes.peach.name} />
              <button onClick={() => setTheme('sage')} className="h-7 w-7 rounded-full ring-1 ring-stone-300 hover:ring-stone-400 transition" style={{ background: themes.sage.brand }} title={themes.sage.name} />
            </div>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-xl bg-[var(--brand)] px-4 py-2 text-white text-sm shadow-md hover:shadow-lg transition"
            >
              <Mail className="h-4 w-4" /> Записаться
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative mx-auto max-w-7xl px-4 pt-14 pb-8 md:pt-20 md:pb-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/70 ring-1 ring-stone-200 px-3 py-1 text-xs text-stone-600 mb-4">
              <Sun className="h-3.5 w-3.5" /> {profile.city}
            </span>
            <h1 className="text-3xl md:text-5xl font-semibold leading-tight tracking-tight">
              {profile.title}
            </h1>
            <p className="mt-4 text-stone-700 text-base md:text-lg max-w-xl">
              {profile.tagline}
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 rounded-xl bg-[var(--brand)] px-5 py-3 text-white text-sm shadow-md hover:shadow-lg transition"
              >
                <Calendar className="h-4 w-4" /> Записаться на встречу
              </a>
              <a
                href={profile.telegram}
                className="inline-flex items-center gap-2 rounded-xl bg-white/80 ring-1 ring-stone-200 px-5 py-3 text-stone-800 text-sm hover:bg-white transition"
              >
                <Send className="h-4 w-4" /> Написать в Telegram
              </a>
            </div>
            <div className="mt-6 text-xs text-stone-500">
              Подходы: {profile.approaches.join(" • ")}
            </div>
          </motion.div>

          <motion.div
            className="relative"
            variants={fadeUp}
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="relative aspect-[4/5] w-full max-w-md md:ml-auto">
              <img
                referrerPolicy="no-referrer"
                src={profile.portraitUrl}
                onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = profile.fallbackPortraitUrl; }}
                alt="Портрет психолога"
                loading="eager"
                decoding="async"
                className="h-full w-full object-cover rounded-3xl shadow-xl border border-white/70"
              />
              <div className="absolute -bottom-4 -left-4 bg-white/80 backdrop-blur rounded-2xl px-4 py-3 shadow-md ring-1 ring-stone-200">
                <div className="text-xs text-stone-600">Формат</div>
                <div className="text-sm font-medium text-stone-800">Онлайн / очно</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How I Help */}
      {/* About */}
      <section id="about" className="mx-auto max-w-7xl px-4 py-12 md:py-16">
        <motion.h2
          className="text-2xl md:text-3xl font-semibold"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Обо мне
        </motion.h2>
        <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
          <motion.div className="rounded-2xl bg-white/80 ring-1 ring-stone-200 p-6 shadow-sm lg:col-span-2" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <p className="text-stone-700 text-sm md:text-base">
              Я Анна Яковлева поддерживающий психолог и член Ассоциации EMDR России. По первому образованию я экономист и более 16 лет строила карьеру в корпоративной среде. Этот опыт научил меня главному: понимать людей, видеть системные связи, строить доверие и вести диалог даже в самых напряжённых ситуациях.
            </p>
            <p className="mt-3 text-stone-700 text-sm md:text-base">
              Последние годы провожу индивидуальные консультации по разным жизненным запросам, свой путь в консультирование я начала с коучинга в 2023 году, а в 2025 году закончила Институт Практической Психологии и Психотерапии (ИППиП) по специальностям «Клиническая психология» и «Нейропсихология».
            </p>
            <p className="mt-3 text-stone-700 text-sm md:text-base">
              Нахожусь в длительной личной и групповой терапии, а также регулярно прохожу супервизии.
            </p>
            <p className="mt-3 text-stone-700 text-sm md:text-base">
              Я правда верю в исцеляющую силу людей.
            </p>
            <p className="mt-3 text-stone-700 text-sm md:text-base">
              Помогаю разобраться с тем, что беспокоит, приблизить желаемое к реальности и снова почувствовать радость и вкус к жизни. Работаю с тревогой и страхами, трудностями в отношениях, чувством вины, неприятием себя, эмоциональной зависимостью, вопросами самоопределения и самореализации.
            </p>
            <p className="mt-3 text-stone-700 text-sm md:text-base">
              Провожу индивидуальные консультации и создаю тёплую, комфортную и безопасную атмосферу. Бережно, уважительно, безоценочно. Полная конфиденциальность.
            </p>
          </motion.div>
          <motion.div className="rounded-2xl bg-white/80 ring-1 ring-stone-200 p-6 shadow-sm" variants={fadeUp} custom={0.5} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h3 className="font-medium">Формат встреч</h3>
            <ul className="mt-2 text-sm text-stone-700 space-y-2 list-disc pl-5">
              <li>Индивидуальные консультации (онлайн / очно в Москве)</li>
              <li>50 минут • обычно 1 раз в неделю</li>
              <li>EMDR, элементы КПТ, ТА, коучинг</li>
            </ul>
          </motion.div>
        </div>
      </section>

      <section id="help" className="mx-auto max-w-7xl px-4 py-12 md:py-16">
        <motion.h2
          className="text-2xl md:text-3xl font-semibold"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Чем я могу помочь
        </motion.h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: <ShieldCheck className="h-5 w-5" />, title: "Тревога и паника",
              text: "Техники стабилизации, дыхание, когнитивные инструменты, работа с телом и образом будущего."
            },
            {
              icon: <Heart className="h-5 w-5" />, title: "Кризисы и потери",
              text: "Поддержка в период перемен: утраты, развод, переезд, выгорание. Помогу выстроить опоры."
            },
            {
              icon: <Sparkles className="h-5 w-5" />, title: "Травматический опыт",
              text: "Бережная переработка травм и флэшбеков (в т.ч. EMDR — десенсибилизация и переработка движением глаз)."
            },
            {
              icon: <Sun className="h-5 w-5" />, title: "Самоопределение",
              text: "Возврат контакта с собой: ценности, границы, цели. Карта шагов и поддерживающие привычки."
            }
          ].map((c, i) => (
            <motion.div
              key={i}
              className="rounded-2xl bg-white/80 ring-1 ring-stone-200 p-5 shadow-sm hover:shadow-md transition"
              variants={fadeUp}
              custom={i * 0.5}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--brand)] text-white mb-3">
                {c.icon}
              </div>
              <h3 className="font-medium text-lg">{c.title}</h3>
              <p className="mt-2 text-sm text-stone-600">{c.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section id="benefits" className="mx-auto max-w-7xl px-4 py-12 md:py-16">
        <motion.h2
          className="text-2xl md:text-3xl font-semibold"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Почему со мной комфортно и эффективно
        </motion.h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Бережность и структура",
              text: "Сочетаю тепло и человеческое участие с понятной рамкой сессии и целями.",
            },
            {
              title: "Научные методы",
              text: "Использую подходы с доказанной эффективностью: EMDR, элементы КПТ, ТА, техники стабилизации.",
            },
            {
              title: "Фокус на результате",
              text: "Определяем запрос и измеримые ориентиры. Регулярно сверяем прогресс.",
            },
            {
              title: "Удобный формат",
              text: "Онлайн/очно. Конфиденциальность, этика, информированность.",
            },
            {
              title: "Индивидуальный темп",
              text: "Подбираем комфортную скорость и глубину работы, опираясь на ваши ресурсы.",
            },
            {
              title: "Поддержка между встречами",
              text: "Даю упражнения и инструменты самопомощи, если это помогает движению.",
            },
          ].map((b, i) => (
            <motion.div
              key={i}
              className="rounded-2xl bg-white/80 ring-1 ring-stone-200 p-5 shadow-sm"
              variants={fadeUp}
              custom={i * 0.4}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h3 className="font-medium">{b.title}</h3>
              <p className="mt-2 text-sm text-stone-600">{b.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="mx-auto max-w-7xl px-4 py-12 md:py-16">
        <motion.h2
          className="text-2xl md:text-3xl font-semibold"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Опыт и подход
        </motion.h2>
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
          <motion.div
            className="rounded-2xl bg-white/80 ring-1 ring-stone-200 p-6 shadow-sm"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="font-medium">Индивидуальная практика</h3>
            <p className="mt-2 text-sm text-stone-600">
              Провожу индивидуальные консультации для взрослых. Работаю с тревогой, последствиями травматических событий, 
              переживаниями потери и вопросами самоопределения. В работе — бережность и ясная структура.
            </p>
          </motion.div>
          <motion.div
            className="rounded-2xl bg-white/80 ring-1 ring-stone-200 p-6 shadow-sm"
            variants={fadeUp}
            custom={0.5}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="font-medium">Методы</h3>
            <p className="mt-2 text-sm text-stone-600">
              EMDR (десенсибилизация и переработка движением глаз), элементы КПТ, техники стабилизации, транзактный анализ, 
              работа с образом и телесной реакцией.
            </p>
          </motion.div>
          <motion.div
            className="rounded-2xl bg-white/80 ring-1 ring-stone-200 p-6 shadow-sm"
            variants={fadeUp}
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="font-medium">Как проходит работа</h3>
            <ul className="mt-2 text-sm text-stone-600 space-y-2 list-disc pl-5">
              <li><b>Знакомство:</b> формулируем запрос и цель, обсуждаем формат.</li>
              <li><b>Маршрут:</b> согласуем план и частоту встреч.</li>
              <li><b>Работа:</b> бережно двигаемся к цели, отслеживаем прогресс.</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="mx-auto max-w-7xl px-4 py-12 md:py-16">
        <motion.h2
          className="text-2xl md:text-3xl font-semibold"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Образование
        </motion.h2>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
          <motion.div className="rounded-2xl bg-white/80 ring-1 ring-stone-200 p-6 shadow-sm" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h3 className="font-medium">Высшее образование</h3>
            <ul className="mt-3 text-sm text-stone-700 space-y-2 list-disc pl-5">
              <li>«Клиническая психология», Институт Практической Психологии и Психотерапии, 2024–2025.</li>
              <li>«Нейропсихология», Институт Практической Психологии и Психотерапии, 2024–2025.</li>
              <li>Второе высшее (бакалавриат) «Психологическое консультирование», Московский Международный Университет, 2024–2027.</li>
              <li>Первое высшее, специальность «Экономика труда», Российский Государственный Социальный Университет, 2003–2009.</li>
            </ul>
          </motion.div>

          <motion.div className="rounded-2xl bg-white/80 ring-1 ring-stone-200 p-6 shadow-sm" variants={fadeUp} custom={0.4} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h3 className="font-medium">Дополнительное профессиональное образование</h3>
            <ul className="mt-3 text-sm text-stone-700 space-y-2 list-disc pl-5">
              <li>EMDR (ДПДГ), Ассоциация EMDR России, Москва — Надежда Градовская, 2025.</li>
              <li>«202. Транзактный анализ в психотерапии и консультировании», Московский Институт Психоанализа — Д.И. Шустов, Н.Л. Зуйкова, 2024–2027.</li>
              <li>Базовый курс «Наука и искусство трансформационного коучинга», Международный Эриксоновский Университет Коучинга, 2022.</li>
              <li>Компетенции коуча «Путь на ACC», Международный Эриксоновский Университет Коучинга, 2022–2023.</li>
            </ul>
          </motion.div>

          <motion.div className="rounded-2xl bg-white/80 ring-1 ring-stone-200 p-6 shadow-sm" variants={fadeUp} custom={0.8} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h3 className="font-medium">Повышение квалификации</h3>
            <ul className="mt-3 text-sm text-stone-700 space-y-2 list-disc pl-5">
              <li>«101. Транзактный анализ в психотерапии и консультировании», Московский Институт Психоанализа — Гусаковский В.Е., 2024.</li>
              <li>Продвинутый курс работы с убеждениями «Фокусы языка», тренер Роберт Дилтс (топовый консультант Кремниевой долины), 2023.</li>
              <li>Углублённое обучение «Пирамида нейролингвистических уровней», тренер Роберт Дилтс (топовый консультант Кремниевой долины), 2023.</li>
            </ul>
            <p className="mt-3 text-xs text-stone-500">Сертификаты и подтверждения — по запросу.</p>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mx-auto max-w-7xl px-4 py-12 md:py-16">
        <motion.h2
          className="text-2xl md:text-3xl font-semibold"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Частые вопросы
        </motion.h2>
        <div className="mt-6 divide-y divide-stone-200 rounded-2xl bg-white/80 ring-1 ring-stone-200">
          {[
            {
              q: "Сколько длится сессия и как часто встречаться?",
              a: "Обычно 50 минут, 1 раз в неделю. Частоту можно варьировать по запросу и ресурсу."
            },
            {
              q: "Можно ли онлайн?",
              a: "Да, провожу встречи онлайн в удобное вам время." 
            },
            {
              q: "Нужна ли подготовка к EMDR?",
              a: "Перед глубокой переработкой мы уделяем внимание стабилизации и техникам саморегуляции."
            },
            {
              q: "Работаете ли вы с острой травмой?",
              a: "Да, но сначала оцениваем безопасность и ресурсы. Формируем поэтапный план работы."
            },
          ].map((item, i) => (
            <details key={i} className="group p-5">
              <summary className="flex cursor-pointer list-none items-center justify-between text-base font-medium text-stone-800">
                {item.q}
                <span className="ml-4 text-stone-500 transition group-open:rotate-45">+</span>
              </summary>
              <p className="mt-2 text-sm text-stone-600">{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-7xl px-4 py-12 md:py-16">
        <motion.div
          className="rounded-3xl bg-white/80 ring-1 ring-stone-200 p-6 md:p-10 shadow-sm"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-3xl font-semibold">Связаться</h2>
          <p className="mt-2 text-stone-600 text-sm md:text-base max-w-2xl">
            Напишите мне удобным способом — отвечу и предложу свободные слоты.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-xl bg-[var(--brand)] px-5 py-3 text-white text-sm shadow-md hover:shadow-lg transition"
            >
              <Mail className="h-4 w-4" /> Email
            </a>
            <a
              href={profile.telegram}
              className="inline-flex items-center gap-2 rounded-xl bg-white/90 ring-1 ring-stone-200 px-5 py-3 text-stone-800 text-sm hover:bg-white transition"
            >
              <MessageCircle className="h-4 w-4" /> Telegram
            </a>
            <a
              href={profile.whatsapp}
              className="inline-flex items-center gap-2 rounded-xl bg-white/90 ring-1 ring-stone-200 px-5 py-3 text-stone-800 text-sm hover:bg-white transition"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="mx-auto max-w-7xl px-4 pb-10">
        <div className="text-xs text-stone-500">
          © {new Date().getFullYear()} {profile.name}. Психологическая помощь не является медицинской услугой. В экстренных случаях обращайтесь в службы неотложной помощи.
        </div>
      </footer>
    </div>
  );
}
