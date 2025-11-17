export default function About() {
  return (
    <section id="about" className="py-16 bg-amber-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <img src="/about-oven.jpg" alt="Our oven" className="rounded-2xl shadow-lg ring-1 ring-amber-200/60" />
        </div>
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">Tradition meets flavor</h2>
          <p className="mt-4 text-gray-700 leading-relaxed">
            Our dough ferments for 48 hours to develop deep flavor and a light, airy crust. We source San Marzano
            tomatoes and fior di latte mozzarella, and bake every pie in a 900°F wood-fired oven for that signature
            leopard spotting.
          </p>
          <p className="mt-3 text-gray-700">
            Family-owned and proudly serving the neighborhood since 1998.
          </p>
        </div>
      </div>
    </section>
  );
}
