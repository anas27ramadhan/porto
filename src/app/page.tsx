export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white p-8">
      <div className="max-w-3xl mx-auto bg-gray-800 rounded-2xl shadow-xl p-10 border border-gray-600">
        <header className="text-center">
          <img
            src="/PHOTOPRIB.jpg"
            alt=""
            className="w-32 h-32 rounded-full mx-auto shadow-lg border-4 border-blue-400 object-cover"
          />
          <h1 className="text-4xl font-bold text-blue-400 mt-4">Anas Ramadhan</h1>
          <p className="text-gray-400">UI/UX Designer</p>
        </header>

        {/* Tentang Saya */}
        <section className="mt-8">
          <h2 className="text-xl font-semibold border-b-2 border-blue-400 inline-block pb-1">
            Tentang Saya
          </h2>
          <p className="mt-4 text-gray-300">
            Saya adalah developer yang bersemangat dan suka dalam membangun aplikasi web modern
            serta desain yang menarik.
          </p>
        </section>

        {/* Pengalaman Kerja */}
        <section className="mt-8">
          <h2 className="text-xl font-semibold border-b-2 border-blue-400 inline-block pb-1">
            Pengalaman Kerja 
          </h2>
          <ul className="mt-4 list-disc list-inside space-y-2 text-gray-300">
            <li>Membuat Design Figma</li>
            <li>Membuat Web Sisfo Sarpras</li>
          </ul>
        </section>

        {/* Skill */}
        <section className="mt-8">
          <h2 className="text-xl font-semibold border-b-2 border-blue-400 inline-block pb-1">
            Skill
          </h2>
          <ul className="mt-4 list-disc list-inside text-gray-300">
            <li>UI/UX Design Designer</li>
          </ul>
        </section>

        {/* Asal Sekolah */}
        <section className="mt-8">
          <h2 className="text-xl font-semibold border-b-2 border-blue-400 inline-block pb-1">
            Asal Sekolah
          </h2>
          <p className="mt-4 text-gray-300">SMK Taruna Bhakti</p>
        </section>

        {/* Bahasa */}
        <section className="mt-8">
          <h2 className="text-xl font-semibold border-b-2 border-blue-400 inline-block pb-1">
            Bahasa
          </h2>
          <ul className="mt-4 list-disc list-inside text-gray-300">
            <li>Indonesia</li>
            <li>Inggris</li>
          </ul>
        </section>

        {/* Kontak */}
        <section className="mt-8">
          <h2 className="text-xl font-semibold border-b-2 border-blue-400 inline-block pb-1">
            Kontak
          </h2>
          <p>Email  : <span className="text-blue-400">Anas46ramadhan@Gmail.com</span></p>
          <p>Github : <span className="text-blue-400">anas27ramadhan</span></p>
          <p>Telp : <span className="text-blue-400">082211355592</span></p>
        </section>
      </div>
    </main>
  );
}
