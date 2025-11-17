export default function Contact() {
  return (
    <section id="contact" className="py-16 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">Visit us</h2>
          <p className="mt-4 text-gray-700">
            123 Market Street, Springfield
          </p>
          <p className="text-gray-700">Phone: (555) 123-4567</p>
          <p className="text-gray-700">Hours: 11:00 — 22:30 daily</p>
          <div className="mt-6">
            <iframe
              title="map"
              className="w-full h-64 rounded-xl border"
              src="https://maps.google.com/maps?q=Times%20Square&t=&z=13&ie=UTF8&iwloc=&output=embed"
            />
          </div>
        </div>
        <form className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Send a message</h3>
          <div className="mt-4 grid grid-cols-1 gap-4">
            <input className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500" placeholder="Your name" />
            <input className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500" placeholder="Phone or email" />
            <textarea className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500" rows="4" placeholder="Your message" />
            <button type="button" className="px-5 py-3 rounded-lg bg-red-600 text-white font-medium hover:bg-red-700">Send</button>
          </div>
        </form>
      </div>
    </section>
  );
}
