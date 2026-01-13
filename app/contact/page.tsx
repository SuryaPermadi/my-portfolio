export default function Contact() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-24">
      <h1 className="text-3xl font-bold mb-6 text-indigo-600">Contact</h1>
      <form className="flex flex-col gap-4">
        <input type="text" placeholder="Nama" className="border border-gray-300 rounded-lg px-4 py-2" />
        <input type="email" placeholder="Email" className="border border-gray-300 rounded-lg px-4 py-2" />
        <textarea placeholder="Pesan" rows={4} className="border border-gray-300 rounded-lg px-4 py-2" />
        <button type="submit" className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition">
          Kirim Pesan
        </button>
      </form>
    </section>
  );
}
