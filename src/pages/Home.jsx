import {
  ArrowDown,
  ArrowRight,
  BadgeCheck,
  Check,
  Headphones,
  Heart,
  Shirt,
  ShoppingBag,
  Sparkles,
  Truck,
} from "lucide-react";

const categories = [
  {
    name: "Style for everyone",
    description: "Fresh looks for every day",
    icon: Shirt,
    color: "from-orange-50 via-white to-rose-50",
    iconColor: "text-orange-500",
    number: "01",
  },
  {
    name: "Everyday essentials",
    description: "Little things that make life easier",
    icon: ShoppingBag,
    color: "from-sky-50 via-white to-indigo-50",
    iconColor: "text-indigo-500",
    number: "02",
  },
  {
    name: "Thoughtful extras",
    description: "Find your next favorite thing",
    icon: Heart,
    color: "from-emerald-50 via-white to-teal-50",
    iconColor: "text-emerald-500",
    number: "03",
  },
];

const benefits = [
  {
    title: "Free & easy delivery",
    description: "Free shipping on orders over $75.",
    icon: Truck,
  },
  {
    title: "Quality you can trust",
    description: "A carefully selected mix of everyday favorites.",
    icon: BadgeCheck,
  },
  {
    title: "Friendly support",
    description: "We're here whenever you need a hand.",
    icon: Headphones,
  },
];

const stats = [
  {
    value: "10K+",
    label: "Happy customers",
  },
  {
    value: "500+",
    label: "Products available",
  },
  {
    value: "4.9/5",
    label: "Customer rating",
  },
];

const Home = () => {
  return (
    <main className="overflow-hidden bg-white text-slate-900">
      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="relative overflow-hidden bg-slate-50">
        {/* Background decoration */}
        <div className="absolute -right-32 -top-32 h-[500px] w-[500px] rounded-full bg-orange-200/30 blur-3xl" />

        <div className="absolute -bottom-40 -left-40 h-[450px] w-[450px] rounded-full bg-rose-100/40 blur-3xl" />

        <div className="mx-auto grid min-h-[650px] max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-20">
          {/* Hero Content */}
          <div className="relative z-10 max-w-2xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-orange-600 shadow-sm">
              <Sparkles size={14} />
              <span>Discover something you love</span>
            </div>

            <h1 className="text-5xl font-black leading-[1.02] tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">
              Shopping made
              <span className="block bg-gradient-to-r from-orange-500 to-rose-500 bg-clip-text text-transparent">
                simple & joyful.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
              Discover thoughtfully selected styles, everyday essentials, and
              little things that make life better — all in one beautiful place.
            </p>

            {/* CTA */}
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="#collections"
                className="group inline-flex items-center gap-3 rounded-xl bg-orange-500 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-orange-500/20 transition-all duration-300 hover:-translate-y-1 hover:bg-orange-600 hover:shadow-xl hover:shadow-orange-500/30"
              >
                Explore collections
                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>

              <a
                href="#about"
                className="group inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3.5 text-sm font-semibold text-slate-700 shadow-sm transition-all hover:border-orange-200 hover:text-orange-600 hover:shadow-md"
              >
                Our story
                <ArrowDown
                  size={15}
                  className="transition-transform group-hover:translate-y-0.5"
                />
              </a>
            </div>

            {/* Trust indicators */}
            <div className="mt-10 flex flex-wrap gap-6 border-t border-slate-200 pt-7">
              <div className="flex items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-100 text-orange-600">
                  <Check size={16} strokeWidth={3} />
                </span>
                <span className="text-sm font-medium text-slate-600">
                  Carefully selected
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                  <Check size={16} strokeWidth={3} />
                </span>
                <span className="text-sm font-medium text-slate-600">
                  Secure shopping
                </span>
              </div>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="relative mx-auto flex h-[420px] w-full max-w-lg items-center justify-center sm:h-[500px]">
            {/* Decorative circle */}
            <div className="absolute h-[300px] w-[300px] rounded-full bg-orange-200/60 sm:h-[390px] sm:w-[390px]" />

            {/* Decorative blobs */}
            <div className="absolute right-[5%] top-[8%] h-24 w-24 rotate-12 rounded-3xl bg-rose-200/70 transition-transform duration-500 hover:rotate-6" />

            <div className="absolute bottom-[7%] left-[5%] h-20 w-20 rounded-full bg-yellow-200 transition-transform duration-500 hover:scale-110" />

            {/* Main card */}
            <div className="group relative flex h-72 w-72 -rotate-3 flex-col items-center justify-center overflow-visible rounded-[2.5rem] bg-gradient-to-br from-orange-500 via-orange-400 to-rose-400 text-white shadow-2xl shadow-orange-900/20 transition-transform duration-500 hover:rotate-0 hover:scale-[1.02] sm:h-80 sm:w-80">
              {/* Inner shine */}
              <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-white/20 via-transparent to-transparent" />

              <div className="relative mb-5 flex h-20 w-20 items-center justify-center rounded-3xl border border-white/30 bg-white/15 shadow-inner backdrop-blur-md">
                <ShoppingBag size={40} strokeWidth={1.6} />
              </div>

              <p className="relative text-xs font-bold uppercase tracking-[0.25em] text-orange-50">
                ShopEase edit
              </p>

              <p className="relative mt-2 text-center text-3xl font-black leading-tight sm:text-4xl">
                Good things
                <br />
                live here.
              </p>

              {/* Floating heart */}
              <div className="absolute -right-7 top-10 flex h-16 w-16 rotate-[12deg] items-center justify-center rounded-2xl bg-white text-orange-500 shadow-xl transition-all duration-300 group-hover:rotate-[20deg] group-hover:scale-110 sm:-right-9 sm:h-20 sm:w-20">
                <Heart size={28} fill="currentColor" />
              </div>
            </div>

            {/* Floating info card */}
            <div className="absolute bottom-4 right-0 rounded-2xl border border-white/80 bg-white/90 px-5 py-4 shadow-xl backdrop-blur-md transition-transform duration-300 hover:-translate-y-1 sm:bottom-8">
              <p className="text-xs font-medium text-slate-500">
                Curated for you
              </p>

              <p className="mt-1 text-sm font-bold text-slate-900">
                A little more joy
              </p>

              <div className="mt-2 flex gap-1">
                {[1, 2, 3, 4, 5].map((item) => (
                  <span
                    key={item}
                    className="h-1.5 w-5 rounded-full bg-orange-400"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          STATS
      ====================================================== */}
      <section className="relative z-10 mx-auto -mt-7 max-w-6xl px-4 sm:px-6">
        <div className="grid overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl shadow-slate-200/50 sm:grid-cols-3">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`group p-6 text-center transition-colors hover:bg-orange-50/50 ${
                index !== stats.length - 1
                  ? "border-b border-slate-200 sm:border-b-0 sm:border-r"
                  : ""
              }`}
            >
              <p className="text-2xl font-black text-slate-900 transition-colors group-hover:text-orange-500">
                {stat.value}
              </p>

              <p className="mt-1 text-xs font-medium uppercase tracking-wider text-slate-500">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* =====================================================
          COLLECTIONS
      ====================================================== */}
      <section
        id="collections"
        className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24"
      >
        <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-orange-500">
              Explore our world
            </p>

            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
              Find something for you.
            </h2>
          </div>

          <p className="max-w-md text-sm leading-6 text-slate-500 sm:text-base">
            From everyday essentials to things you didn't know you needed,
            discover products selected with you in mind.
          </p>
        </div>

        {/* Category cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {categories.map(
            ({ name, description, icon: Icon, color, iconColor, number }) => (
              <a
                key={name}
                href="#about"
                className={`group relative min-h-[280px] overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br ${color} p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-slate-300 hover:shadow-2xl hover:shadow-slate-200/60`}
              >
                {/* Number */}
                <span className="absolute right-6 top-5 text-5xl font-black text-slate-900/[0.04]">
                  {number}
                </span>

                {/* Icon */}
                <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:shadow-md">
                  <Icon
                    size={26}
                    className={`${iconColor} transition-transform duration-300 group-hover:scale-110`}
                    strokeWidth={1.8}
                  />
                </div>

                {/* Content */}
                <div className="absolute bottom-7 left-7 right-7">
                  <h3 className="text-xl font-bold text-slate-950">
                    {name}
                  </h3>

                  <p className="mt-2 max-w-xs text-sm leading-6 text-slate-600">
                    {description}
                  </p>

                  <div className="mt-5 flex items-center gap-2 text-sm font-bold text-slate-900 transition-all duration-300 group-hover:gap-3 group-hover:text-orange-600">
                    Explore
                    <ArrowRight size={16} />
                  </div>
                </div>

                {/* Decorative circle */}
                <div className="absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-white/40 transition-transform duration-500 group-hover:scale-125" />
              </a>
            )
          )}
        </div>
      </section>

      {/* =====================================================
          BENEFITS
      ====================================================== */}
      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-4 md:grid-cols-3">
            {benefits.map(({ title, description, icon: Icon }) => (
              <div
                key={title}
                className="group flex items-start gap-4 rounded-2xl border border-transparent bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-orange-100 hover:shadow-lg"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-orange-500 transition-all duration-300 group-hover:bg-orange-500 group-hover:text-white">
                  <Icon size={21} />
                </div>

                <div>
                  <h3 className="text-sm font-bold text-slate-900">
                    {title}
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-slate-500">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          ABOUT
      ====================================================== */}
      <section
        id="about"
        className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-24"
      >
        {/* About visual */}
        <div className="relative">
          <div className="absolute -inset-4 rounded-[2.5rem] bg-orange-100/60 blur-2xl" />

          <div className="group relative min-h-[380px] overflow-hidden rounded-[2rem] bg-slate-950 p-8 shadow-2xl sm:p-10">
            {/* Background decorations */}
            <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-orange-500/20 blur-3xl transition-transform duration-700 group-hover:scale-125" />

            <div className="absolute -bottom-24 -right-10 h-72 w-72 rounded-full bg-rose-500/10 blur-3xl" />

            <div className="relative flex h-full min-h-[315px] flex-col justify-between">
              <div>
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500 text-white shadow-lg shadow-orange-500/20">
                  <ShoppingBag size={27} />
                </div>

                <p className="mt-7 text-xs font-bold uppercase tracking-[0.2em] text-orange-400">
                  Why ShopEase?
                </p>

                <h3 className="mt-3 max-w-md text-3xl font-black leading-tight text-white sm:text-4xl">
                  Less searching.
                  <br />
                  More loving what you find.
                </h3>
              </div>

              {/* Mini stats */}
              <div className="mt-8 grid grid-cols-2 gap-3">
                <div className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                  <p className="text-xl font-black text-white">500+</p>
                  <p className="mt-1 text-xs text-slate-400">
                    Products to explore
                  </p>
                </div>

                <div className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                  <p className="text-xl font-black text-white">4.9/5</p>
                  <p className="mt-1 text-xs text-slate-400">
                    Customer satisfaction
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* About content */}
        <div className="max-w-xl">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-orange-500">
            A little about us
          </p>

          <h2 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-slate-950 sm:text-4xl">
            Shopping should feel easy.
            <span className="text-orange-500"> And delightful.</span>
          </h2>

          <p className="mt-6 text-base leading-7 text-slate-600">
            ShopEase is your friendly online destination for the things you
            need, the things you love, and the unexpected finds in between.
          </p>

          <p className="mt-4 text-base leading-7 text-slate-600">
            We bring everyday categories together into one simple shopping
            experience, so discovering something great feels effortless.
          </p>

          {/* Feature list */}
          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            {[
              "Curated products",
              "Secure checkout",
              "Fast delivery",
              "Friendly support",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-2 text-sm font-semibold text-slate-700"
              >
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-orange-100 text-orange-500">
                  <Check size={12} strokeWidth={3} />
                </span>
                {item}
              </div>
            ))}
          </div>

          <a
            href="#collections"
            className="group mt-8 inline-flex items-center gap-2 text-sm font-bold text-orange-600"
          >
            Find your next favorite
            <ArrowRight
              size={17}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ====================================================== */}
      <section className="px-4 pb-16 sm:px-6 lg:px-8 lg:pb-24">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-orange-500 px-6 py-14 text-center shadow-2xl shadow-orange-500/20 sm:px-10 sm:py-16">
          {/* Decorations */}
          <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-white/10" />

          <div className="absolute -bottom-32 -right-20 h-80 w-80 rounded-full bg-white/10" />

          <div className="relative">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15 text-white backdrop-blur">
              <Sparkles size={23} />
            </div>

            <h2 className="mt-5 text-3xl font-black text-white sm:text-4xl">
              Ready to find something you love?
            </h2>

            <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-orange-50 sm:text-base">
              Explore our collections and discover products that fit your
              everyday life.
            </p>

            <a
              href="#collections"
              className="mt-7 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-orange-600 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-slate-950 hover:text-white"
            >
              Start exploring
              <ArrowRight size={17} />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
