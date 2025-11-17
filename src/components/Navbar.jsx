import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white/70 backdrop-blur border-b border-gray-200/60">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <img src="/pizza-logo.svg" alt="Pizzeria" className="h-8 w-8" />
          <span className="font-semibold text-lg">Bella Napoli</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-gray-700">
          <a href="#menu" className="hover:text-red-600">Menu</a>
          <a href="#about" className="hover:text-red-600">About</a>
          <a href="#contact" className="hover:text-red-600">Contact</a>
        </nav>
        <button className="md:hidden p-2 rounded-md hover:bg-gray-100" aria-label="Toggle Menu">
          <Menu className="h-5 w-5" />
        </button>
      </div>
    </header>
  );
}
