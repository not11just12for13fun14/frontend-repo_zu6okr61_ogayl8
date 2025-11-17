import { useEffect, useState } from "react";

const API_BASE = import.meta.env.VITE_BACKEND_URL || "";

export default function Menu() {
  const [pizzas, setPizzas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function load() {
      try {
        setLoading(true);
        const res = await fetch(`${API_BASE}/api/menu`);
        if (!res.ok) throw new Error("Failed to load menu");
        const data = await res.json();
        setPizzas(data);
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  return (
    <section id="menu" className="py-16 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Our Menu</h2>
            <p className="text-gray-600 mt-2">Classic favorites and chef specials made fresh daily.</p>
          </div>
          <div className="text-sm text-gray-500">
            {loading ? "Loading..." : `${pizzas.length} items`}
          </div>
        </div>

        {error && (
          <div className="mb-6 rounded-lg bg-red-50 text-red-700 px-4 py-3 border border-red-200">
            {error}
          </div>
        )}

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pizzas.map((p) => (
            <article key={p.id} className="rounded-2xl border border-gray-200 shadow-sm overflow-hidden bg-white">
              <img src={p.image || "/pizza-default.jpg"} alt={p.name} className="h-40 w-full object-cover" />
              <div className="p-4">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-lg font-semibold text-gray-900">{p.name}</h3>
                  <span className="text-red-600 font-semibold">${p.price.toFixed(2)}</span>
                </div>
                <p className="mt-2 text-sm text-gray-600 line-clamp-3">{p.description}</p>
                <div className="mt-3 flex gap-2 text-xs">
                  {p.vegetarian && <span className="px-2 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">Vegetarian</span>}
                  {p.spicy && <span className="px-2 py-1 rounded-full bg-orange-50 text-orange-700 border border-orange-200">Spicy</span>}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
