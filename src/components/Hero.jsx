export default function Hero() {
  return (
    <section className="relative pt-28 pb-20 bg-gradient-to-br from-red-50 via-white to-amber-50 overflow-hidden">
      <div className="absolute -top-24 -right-24 h-72 w-72 bg-red-100 rounded-full blur-3xl opacity-60" />
      <div className="absolute -bottom-24 -left-24 h-72 w-72 bg-amber-100 rounded-full blur-3xl opacity-60" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900">
            Wood‑Fired Pizzas, crafted with love
          </h1>
          <p className="mt-4 text-gray-600 text-lg leading-relaxed">
            Fresh dough, San Marzano tomatoes, and the finest mozzarella. Baked to perfection in our Neapolitan oven.
          </p>
          <div className="mt-6 flex gap-3">
            <a href="#menu" className="inline-flex items-center px-5 py-3 rounded-full bg-red-600 text-white font-medium shadow hover:bg-red-700">
              View Menu
            </a>
            <a href="#contact" className="inline-flex items-center px-5 py-3 rounded-full border border-gray-300 text-gray-700 font-medium bg-white hover:bg-gray-50">
              Book a Table
            </a>
          </div>
          <div className="mt-6 text-sm text-gray-500">Open daily • 11:00 — 22:30</div>
        </div>
        <div className="relative">
          <img src="/hero-pizza.jpg" alt="Wood-fired pizza" className="rounded-2xl shadow-2xl ring-1 ring-gray-200/70" />
          <div className="absolute -bottom-4 -left-4 bg-white rounded-xl px-4 py-3 shadow-md ring-1 ring-gray-200 text-sm">
            20+ artisan pizzas • Free delivery over $30
          </div>
        </div>
      </div>
    </section>
  );
}
