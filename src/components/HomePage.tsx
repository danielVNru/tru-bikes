"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Menu,
  MessageSquare,
  Minus,
  Phone,
  Plus,
  Send,
  ShoppingCart,
  X,
} from "lucide-react";

import {
  BRAND_STATS,
  CITIES,
  GALLERY,
  GEO,
  NAV_LINKS,
  PRODUCTS,
  SOCIAL_LINKS,
  SPEC_HEADERS,
  formatPrice,
} from "./home/constants";
import { useHomePage } from "./home/hooks/useHomePage";

export default function HomePage() {
  const {
    cart,
    cartOpen,
    menuOpen,
    addedId,
    activeSpecTab,
    selectedCity,
    slide,
    feedbackOpen,
    feedbackSent,
    form,
    cartCount,
    cartTotal,
    cityDealers,
    setCartOpen,
    setMenuOpen,
    setActiveSpecTab,
    setSelectedCity,
    setSlide,
    setFeedbackOpen,
    setForm,
    addToCart,
    updateQty,
    removeItem,
    submitFeedback,
  } = useHomePage();

  return (
    <div className="min-h-screen bg-background text-foreground" style={{ fontFamily: "'Inter', sans-serif" }}>
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between h-16">
          <Link href="#" className="flex items-center">
            <Image
              src="/logo.png"
              alt="TRU Bikes"
              width={160}
              height={32}
              className="h-8 w-auto object-contain"
              style={{ filter: "invert(1)" }}
              priority
            />
          </Link>

          <nav className="hidden md:flex items-center gap-7">
            {NAV_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-xs font-semibold tracking-[0.18em] uppercase text-muted-foreground hover:text-foreground transition-colors"
              >
                {label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setCartOpen(true)}
              className="relative flex items-center gap-2 border border-primary text-primary hover:bg-primary hover:text-background transition-all duration-200 px-4 py-2 text-xs font-bold tracking-[0.18em] uppercase"
            >
              <ShoppingCart size={15} />
              <span className="hidden sm:inline">Корзина</span>
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-primary text-background text-[10px] w-5 h-5 flex items-center justify-center font-black">
                  {cartCount}
                </span>
              )}
            </button>

            <button
              onClick={() => setMenuOpen((open) => !open)}
              className="md:hidden text-foreground p-1"
              aria-label="Меню"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden border-t border-border bg-card px-6 py-5 flex flex-col gap-5">
            {NAV_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="text-xs font-semibold tracking-[0.18em] uppercase text-muted-foreground hover:text-foreground transition-colors"
              >
                {label}
              </Link>
            ))}
          </div>
        )}
      </header>

      <section className="relative h-screen min-h-[620px] flex items-end pb-20 overflow-hidden">
        <Image
          src="/homePage/banner/main.jpg"
          alt="Гонщик на велосипеде TRU мчится по лесному трейлу"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 w-full">
          <p className="text-primary text-[11px] font-bold tracking-[0.55em] uppercase mb-5">
            Российское производство
          </p>
          <h1
            className="text-white text-[4.5rem] sm:text-[7rem] md:text-[9.5rem] font-black leading-none tracking-tight mb-5"
            style={{ fontFamily: "'Oswald', sans-serif" }}
          >
            ЕДЬ
            <br />
            ИНАЧЕ
          </h1>
          <p className="text-white/60 text-base max-w-md mb-3 leading-relaxed">
            Настоящие велосипеды. Смелые идеи. Собственный инжиниринг.
          </p>
          <p className="text-white/40 text-sm max-w-sm mb-9 leading-relaxed">
            TRU - локальный производитель для тех, кто знает, зачем едет.
          </p>
          <Link
            href="#collection"
            className="inline-flex items-center gap-3 bg-primary text-background px-8 py-4 text-xs font-bold tracking-[0.22em] uppercase hover:bg-foreground hover:text-background transition-all duration-200"
          >
            Коллекция 2026
            <ChevronDown size={15} />
          </Link>
        </div>

        <div className="absolute bottom-6 right-8 hidden sm:flex flex-col items-center gap-2">
          <div className="w-px h-14 bg-white/20" />
          <span className="text-white/25 text-[10px] tracking-[0.3em] uppercase" style={{ writingMode: "vertical-rl" }}>
            Scroll
          </span>
        </div>
      </section>

      <section id="collection" className="py-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="flex items-baseline justify-between mb-12">
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight" style={{ fontFamily: "'Oswald', sans-serif" }}>
              КОЛЛЕКЦИЯ <span className="text-primary">2026</span>
            </h2>
            <span className="text-muted-foreground text-xs tracking-[0.2em] uppercase hidden sm:block">
              {PRODUCTS.length} модели
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
            {PRODUCTS.map((product) => (
              <div key={product.id} className="bg-card flex flex-col group relative">
                {product.tag && (
                  <span className="absolute top-4 left-4 z-10 bg-primary text-background text-[10px] font-black px-2.5 py-1 tracking-[0.2em] uppercase">
                    {product.tag}
                  </span>
                )}
                <div className="relative aspect-[4/3] overflow-hidden bg-zinc-900">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <p className="text-muted-foreground text-[10px] tracking-[0.2em] uppercase mb-1.5">
                    {product.subtitle}
                  </p>
                  <h3 className="text-xl font-black mb-4" style={{ fontFamily: "'Oswald', sans-serif" }}>
                    {product.name}
                  </h3>
                  <ul className="space-y-1.5 mb-5 flex-1">
                    {product.specs.map((spec) => (
                      <li key={spec} className="text-xs text-muted-foreground flex gap-2 leading-snug">
                        <span className="text-primary shrink-0 mt-px">-</span>
                        {spec}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <span className="text-xl font-black" style={{ fontFamily: "'Oswald', sans-serif" }}>
                      {formatPrice(product.price)}
                    </span>
                    <button
                      onClick={() => addToCart(product)}
                      className={`px-4 py-2 text-[10px] font-black tracking-[0.2em] uppercase transition-all duration-200 ${
                        addedId === product.id
                          ? "bg-green-700 text-white"
                          : "bg-primary text-background hover:bg-foreground hover:text-background"
                      }`}
                    >
                      {addedId === product.id ? "Добавлено" : "В корзину"}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-16">
          <div className="flex items-baseline justify-between mb-8">
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight" style={{ fontFamily: "'Oswald', sans-serif" }}>
              ФОТО<span className="text-primary">ГАЛЕРЕЯ</span>
            </h2>
            <span className="text-muted-foreground text-xs tracking-[0.2em] uppercase hidden sm:block">
              {slide + 1} / {GALLERY.length}
            </span>
          </div>
        </div>

        <div className="relative overflow-hidden bg-zinc-950" style={{ height: "clamp(300px, 55vw, 680px)" }}>
          {GALLERY.map((galleryImage, index) => (
            <div
              key={galleryImage.url}
              className="absolute inset-0 transition-opacity duration-500"
              style={{ opacity: index === slide ? 1 : 0, pointerEvents: index === slide ? "auto" : "none" }}
            >
              <Image
                src={galleryImage.url}
                alt={galleryImage.caption}
                fill
                className="object-cover"
                sizes="100vw"
                priority={index === 0}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>
          ))}

          <div className="absolute bottom-6 left-8 right-24">
            <p className="text-white/90 text-sm font-semibold tracking-wide">{GALLERY[slide]?.caption}</p>
          </div>

          <div className="absolute bottom-4 right-6 flex gap-2">
            <button
              onClick={() => setSlide((current) => (current - 1 + GALLERY.length) % GALLERY.length)}
              className="w-10 h-10 flex items-center justify-center border border-white/30 text-white hover:bg-primary hover:border-primary transition-all duration-200"
              aria-label="Предыдущее фото"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => setSlide((current) => (current + 1) % GALLERY.length)}
              className="w-10 h-10 flex items-center justify-center border border-white/30 text-white hover:bg-primary hover:border-primary transition-all duration-200"
              aria-label="Следующее фото"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        <div className="flex gap-px bg-border overflow-x-auto">
          {GALLERY.map((galleryImage, index) => (
            <button
              key={galleryImage.url}
              onClick={() => setSlide(index)}
              className="relative shrink-0 overflow-hidden transition-opacity duration-200"
              style={{ width: "clamp(80px, 16.666%, 200px)", aspectRatio: "16/9" }}
              aria-label={`Фото ${index + 1}`}
            >
              <Image
                src={galleryImage.url.replace("w=1400&h=800", "w=320&h=180")}
                alt={galleryImage.caption}
                fill
                className="object-cover transition-transform duration-300 hover:scale-105"
                style={{ opacity: index === slide ? 1 : 0.45 }}
                sizes="200px"
              />
              {index === slide && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />}
            </button>
          ))}
        </div>
      </section>

      <section id="brand" className="border-t border-border py-8 md:py-24 bg-card">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-stretch">
          <div className="relative overflow-hidden min-h-[380px] md:min-h-0">
            <Image
              src="https://images.unsplash.com/photo-1675798227643-da319f8ee8f7?w=900&h=760&fit=crop&auto=format"
              alt="Мастер собирает велосипед TRU в мастерской"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0" style={{ background: "rgba(192,139,40,0.12)", mixBlendMode: "multiply" }} />
          </div>

          <div className="bg-card p-10 md:p-16 flex flex-col justify-center py-20 md:py-24">
            <p className="text-primary text-[11px] font-bold tracking-[0.55em] uppercase mb-7">О бренде</p>
            <h2 className="text-4xl sm:text-5xl font-black leading-none mb-6" style={{ fontFamily: "'Oswald', sans-serif" }}>
              СДЕЛАНО
              <br />
              В РОССИИ.
              <br />
              ДЛЯ ТРЕЙЛОВ
              <br />
              РОССИИ.
            </h2>
            <p className="text-primary/80 text-sm font-semibold tracking-wide mb-6 italic">
              Настоящие велосипеды. Смелые идеи. Собственный инжиниринг.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-5 text-sm">
              Велосипеды TRU - это профессионализм и многолетний опыт в велоиндустрии,
              помноженные на настоящую любовь к велосипедам.
            </p>
            <p className="text-muted-foreground leading-relaxed text-sm">
              Мы работали в крупных велосипедных компаниях и брендах, но всегда оставались
              в первую очередь велоэнтузиастами. Поэтому точно знали, что действительно нужно
              велосипедистам сегодня.
            </p>
            <p className="text-muted-foreground leading-relaxed text-sm mt-4">
              В какой-то момент стало очевидно: создать велосипед именно таким, каким мы хотим
              его видеть, можно только в условиях полной свободы и независимости.
              Так появилась наша команда и собственный бренд велосипедов TRU.
            </p>

            <div className="grid grid-cols-3 gap-6 mt-10 pt-8 border-t border-border">
              {BRAND_STATS.map(([value, label]) => (
                <div key={label}>
                  <p className="text-3xl font-black text-primary" style={{ fontFamily: "'Oswald', sans-serif" }}>
                    {value}
                  </p>
                  <p className="text-[10px] text-muted-foreground uppercase tracking-[0.2em] mt-1">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="specs" className="py-24 border-t border-border">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight mb-2" style={{ fontFamily: "'Oswald', sans-serif" }}>
            ГЕОМЕТРИЯ <span className="text-primary">И СПЕКИ</span>
          </h2>
          <p className="text-muted-foreground text-xs tracking-[0.2em] uppercase mb-10">
            Все размеры в мм, если не указано иное
          </p>

          <div className="flex flex-wrap gap-px mb-8">
            {PRODUCTS.map((product, index) => (
              <button
                key={product.id}
                onClick={() => setActiveSpecTab(index)}
                className={`px-5 py-3 text-xs font-black tracking-[0.15em] uppercase transition-colors ${
                  activeSpecTab === index
                    ? "bg-primary text-background"
                    : "bg-card text-muted-foreground hover:text-foreground"
                }`}
              >
                {product.name.replace("TRU ", "")}
              </button>
            ))}
          </div>

          <div className="mb-6 flex flex-wrap gap-x-6 gap-y-2">
            {PRODUCTS[activeSpecTab]?.specs.map((spec) => (
              <span key={spec} className="text-xs text-muted-foreground">
                <span className="text-primary mr-1.5">.</span>
                {spec}
              </span>
            ))}
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse min-w-[560px]">
              <thead>
                <tr className="border-b border-border">
                  {SPEC_HEADERS.map((header) => (
                    <th
                      key={header}
                      className="text-left py-3 pr-6 last:pr-0 text-muted-foreground text-[10px] tracking-[0.2em] uppercase font-normal"
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {GEO.map((row, index) => (
                  <tr key={row.size} className={`border-b border-border ${index % 2 === 0 ? "bg-white/[0.025]" : ""}`}>
                    <td className="py-3 pr-6 font-black text-primary text-base" style={{ fontFamily: "'Oswald', sans-serif" }}>
                      {row.size}
                    </td>
                    {[row.reach, row.stack, row.tt, row.cs, row.bb, row.hta, row.sta].map((value, ind) => (
                      <td key={`${row.size}-${value}-${ind}`} className="py-3 pr-6 last:pr-0 font-mono text-sm text-foreground/75">
                        {value}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section id="dealers" className="py-24 border-t border-border bg-card">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight mb-3" style={{ fontFamily: "'Oswald', sans-serif" }}>
            ГДЕ <span className="text-primary">КУПИТЬ</span>
          </h2>
          <p className="text-muted-foreground text-sm mb-10">Выберите город - покажем ближайших дилеров.</p>

          <div className="flex flex-wrap gap-2 mb-10">
            {CITIES.map((city) => (
              <button
                key={city}
                onClick={() => setSelectedCity(city)}
                className={`px-3 py-2.5 text-xs font-bold tracking-[0.15em] uppercase transition-all duration-150 border ${
                  selectedCity === city
                    ? "bg-primary text-background border-primary"
                    : "bg-transparent text-muted-foreground border-border hover:border-primary/50 hover:text-foreground"
                }`}
              >
                {city}
              </button>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px">
            {cityDealers.map((dealer) => (
              <div key={`${dealer.city}-${dealer.name}-${dealer.address}`} className="bg-card p-6 hover:bg-white/5 transition-colors group">
                <div className="flex items-start justify-between mb-3">
                  <p className="font-black text-lg" style={{ fontFamily: "'Oswald', sans-serif" }}>
                    {dealer.name}
                  </p>
                  <ChevronRight
                    size={16}
                    className="text-muted-foreground group-hover:text-primary transition-colors mt-1 shrink-0"
                  />
                </div>
                <div className="flex items-start gap-2 text-muted-foreground text-xs mb-2">
                  <MapPin size={13} className="mt-0.5 shrink-0 text-primary" />
                  <span>{dealer.address}</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <Phone size={13} className="shrink-0 text-primary" />
                  <Link
                    href={`tel:${dealer.phone.replace(/\s+/g, "")}`}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {dealer.phone}
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {cityDealers.length === 0 && (
            <div className="py-16 text-center text-muted-foreground text-sm">
              В этом городе пока нет официальных дилеров.
              <button
                onClick={() => setFeedbackOpen(true)}
                className="ml-1 text-primary underline underline-offset-4 hover:text-foreground transition-colors"
              >
                Напишите нам
              </button>
              , и мы поможем.
            </div>
          )}
        </div>
      </section>

      <section id="contacts" className="border-t border-border">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-stretch min-h-[440px]">
          <div className="relative overflow-hidden min-h-[300px] md:min-h-0 bg-zinc-900">
            <iframe
              title="TRU Bikes на карте"
              src="https://www.openstreetmap.org/export/embed.html?bbox=37.575%2C55.672%2C37.615%2C55.692&layer=mapnik&marker=55.6820%2C37.5950"
              className="absolute inset-0 w-full h-full border-0"
              style={{ filter: "grayscale(0.8) invert(0.88) sepia(0.15) contrast(1.1)" }}
              loading="lazy"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/90 to-transparent p-5 pointer-events-none">
              <p className="text-xs text-muted-foreground tracking-widest uppercase">Адрес</p>
              <p className="font-bold text-foreground text-sm mt-1">ул. Нагорная, 27, Москва</p>
            </div>
          </div>

          <div className="bg-card p-10 md:p-16 flex flex-col justify-center py-16">
            <p className="text-primary text-[11px] font-bold tracking-[0.55em] uppercase mb-7">Контакты</p>
            <h2 className="text-4xl font-black leading-none mb-8" style={{ fontFamily: "'Oswald', sans-serif" }}>
              СВЯЖИТЕСЬ
              <br />
              С НАМИ
            </h2>

            <div className="space-y-5 mb-8">
              <div>
                <p className="text-[10px] text-muted-foreground tracking-[0.25em] uppercase mb-1">Адрес</p>
                <p className="text-sm text-foreground">Россия, Москва, улица Нагорная, 27</p>
              </div>
              <div>
                <p className="text-[10px] text-muted-foreground tracking-[0.25em] uppercase mb-1">Телефон</p>
                <Link href="tel:+74951234567" className="text-sm text-foreground hover:text-primary transition-colors">
                  +7 (495) 123-45-67
                </Link>
              </div>
              <div>
                <p className="text-[10px] text-muted-foreground tracking-[0.25em] uppercase mb-1">Email</p>
                <Link href="mailto:hello@trubikes.ru" className="text-sm text-foreground hover:text-primary transition-colors">
                  hello@trubikes.ru
                </Link>
              </div>
              <div>
                <p className="text-[10px] text-muted-foreground tracking-[0.25em] uppercase mb-1">Режим работы</p>
                <p className="text-sm text-foreground">Пн-Пт: 10:00-19:00</p>
              </div>
            </div>

            <button
              onClick={() => setFeedbackOpen(true)}
              className="inline-flex items-center gap-3 bg-primary text-background px-8 py-4 text-xs font-bold tracking-[0.22em] uppercase hover:bg-foreground hover:text-background transition-all duration-200 w-fit"
            >
              <MessageSquare size={15} />
              Написать нам
            </button>

            <div className="flex gap-2 mt-8 pt-8 border-t border-border">
              {SOCIAL_LINKS.map(({ label, href }) => (
                <Link
                  key={label}
                  href={href}
                  className="w-10 h-10 border border-border flex items-center justify-center text-[11px] font-black text-muted-foreground hover:border-primary hover:text-primary transition-all tracking-wider"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-8 bg-background">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <Image
            src="/logo.png"
            alt="TRU Bikes"
            width={120}
            height={24}
            className="h-6 w-auto object-contain"
            style={{ filter: "invert(1)", opacity: 0.4 }}
          />
          <p className="text-muted-foreground/60 text-[11px]">© 2026 TRU Bikes · Россия, Москва, ул. Нагорная, 27</p>
        </div>
      </footer>

      {cartOpen && (
        <div className="fixed inset-0 z-50 flex">
          <div className="flex-1 bg-black/60 backdrop-blur-sm" onClick={() => setCartOpen(false)} />
          <div className="w-full max-w-md bg-card border-l border-border flex flex-col overflow-hidden">
            <div className="flex items-center justify-between px-6 py-5 border-b border-border shrink-0">
              <h2 className="font-black text-xl tracking-tight" style={{ fontFamily: "'Oswald', sans-serif" }}>
                КОРЗИНА {cartCount > 0 && <span className="text-primary">({cartCount})</span>}
              </h2>
              <button onClick={() => setCartOpen(false)} className="text-muted-foreground hover:text-foreground transition-colors">
                <X size={20} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-6 py-5 space-y-4">
              {cart.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center py-20">
                  <ShoppingCart size={40} className="text-white/15 mb-5" />
                  <p className="text-muted-foreground text-sm">Корзина пуста</p>
                  <button
                    onClick={() => setCartOpen(false)}
                    className="mt-6 text-xs text-primary underline underline-offset-4 tracking-[0.18em] uppercase hover:text-foreground transition-colors"
                  >
                    Перейти к каталогу
                  </button>
                </div>
              ) : (
                cart.map((item) => (
                  <div key={item.id} className="flex gap-4 border-b border-border pb-4 last:border-0">
                    <div className="w-20 h-16 bg-zinc-800 overflow-hidden shrink-0">
                      <Image src={item.image} alt={item.name} width={80} height={64} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-black text-sm truncate mb-0.5" style={{ fontFamily: "'Oswald', sans-serif" }}>
                        {item.name}
                      </p>
                      <p className="text-muted-foreground text-xs mb-3">{item.subtitle}</p>
                      <div className="flex items-center gap-3">
                        <div className="flex items-center border border-border">
                          <button
                            onClick={() => updateQty(item.id, -1)}
                            className="px-2.5 py-1.5 text-muted-foreground hover:text-foreground transition-colors"
                          >
                            <Minus size={11} />
                          </button>
                          <span className="text-sm font-black w-6 text-center">{item.qty}</span>
                          <button
                            onClick={() => updateQty(item.id, 1)}
                            className="px-2.5 py-1.5 text-muted-foreground hover:text-foreground transition-colors"
                          >
                            <Plus size={11} />
                          </button>
                        </div>
                        <button onClick={() => removeItem(item.id)} className="text-muted-foreground hover:text-destructive transition-colors">
                          <X size={14} />
                        </button>
                      </div>
                    </div>
                    <div className="shrink-0 text-right">
                      <p className="font-black text-sm" style={{ fontFamily: "'Oswald', sans-serif" }}>
                        {formatPrice(item.price * item.qty)}
                      </p>
                    </div>
                  </div>
                ))
              )}
            </div>

            {cart.length > 0 && (
              <div className="px-6 py-6 border-t border-border shrink-0">
                <div className="flex justify-between items-baseline mb-6">
                  <span className="text-muted-foreground text-xs tracking-[0.2em] uppercase">Итого</span>
                  <span className="font-black text-2xl" style={{ fontFamily: "'Oswald', sans-serif" }}>
                    {formatPrice(cartTotal)}
                  </span>
                </div>
                <button className="w-full bg-primary text-background py-4 font-black text-xs tracking-[0.25em] uppercase hover:bg-foreground hover:text-background transition-all duration-200">
                  Оформить заказ
                </button>
                <p className="text-center text-[11px] text-muted-foreground mt-3">Доставка по всей России · самовывоз у дилеров</p>
              </div>
            )}
          </div>
        </div>
      )}

      {feedbackOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={() => setFeedbackOpen(false)} />
          <div className="relative w-full max-w-md bg-card border border-border">
            <div className="flex items-center justify-between px-6 py-5 border-b border-border">
              <h2 className="font-black text-xl tracking-tight" style={{ fontFamily: "'Oswald', sans-serif" }}>
                ОБРАТНАЯ СВЯЗЬ
              </h2>
              <button onClick={() => setFeedbackOpen(false)} className="text-muted-foreground hover:text-foreground transition-colors">
                <X size={20} />
              </button>
            </div>

            {feedbackSent ? (
              <div className="px-6 py-16 text-center">
                <div className="w-12 h-12 bg-primary/20 flex items-center justify-center mx-auto mb-4">
                  <Send size={20} className="text-primary" />
                </div>
                <p className="font-black text-lg mb-2" style={{ fontFamily: "'Oswald', sans-serif" }}>
                  Сообщение отправлено
                </p>
                <p className="text-muted-foreground text-sm">Мы свяжемся с вами в ближайшее время.</p>
              </div>
            ) : (
              <form onSubmit={submitFeedback} className="px-6 py-6 space-y-4">
                <div>
                  <label className="block text-[10px] text-muted-foreground tracking-[0.25em] uppercase mb-1.5">Имя</label>
                  <input
                    required
                    value={form.name}
                    onChange={(event) => setForm((prev) => ({ ...prev, name: event.target.value }))}
                    placeholder="Ваше имя"
                    className="w-full bg-muted border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[10px] text-muted-foreground tracking-[0.25em] uppercase mb-1.5">
                    Телефон или Email
                  </label>
                  <input
                    required
                    value={form.contact}
                    onChange={(event) => setForm((prev) => ({ ...prev, contact: event.target.value }))}
                    placeholder="+7 (___) ___-__-__ или name@mail.ru"
                    className="w-full bg-muted border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[10px] text-muted-foreground tracking-[0.25em] uppercase mb-1.5">Сообщение</label>
                  <textarea
                    required
                    rows={4}
                    value={form.message}
                    onChange={(event) => setForm((prev) => ({ ...prev, message: event.target.value }))}
                    placeholder="Вопрос, пожелание или запрос на тест-драйв..."
                    className="w-full bg-muted border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary text-background py-4 font-black text-xs tracking-[0.25em] uppercase hover:bg-foreground hover:text-background transition-all duration-200 flex items-center justify-center gap-2"
                >
                  <Send size={14} />
                  Отправить
                </button>
                <p className="text-center text-[11px] text-muted-foreground">Ответим в течение рабочего дня</p>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
