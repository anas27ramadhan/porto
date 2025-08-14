export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300 text-gray-900 p-8">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-10 border border-blue-200">
        <header className="text-center">
          <img
            src=""
            alt="Foto Profil"
            className="w-32 h-32 rounded-full mx-auto shadow-lg border-4 border-blue-500 object-cover"
          />
          <h1 className="text-4xl font-bold text-blue-700 mt-4">Anas Ramadhan</h1>
          <p className="text-gray-500">Frontend | UI/UX Designer</p>
        </header>

        {/* Tentang Saya */}
        <section className="mt-8">
          <h2 className="text-xl font-semibold border-b-2 border-blue-500 inline-block pb-1">
            Tentang Saya
          </h2>
          <p className="mt-4 text-gray-700">
            Saya adalah developer yang bersemangat dan suka dalam membangun aplikasi web modern
            serta desain yang menarik.
          </p>
        </section>

        {/* Pengalaman Kerja */}
        <section className="mt-8">
          <h2 className="text-xl font-semibold border-b-2 border-blue-500 inline-block pb-1">
            Pengalaman Kerja 
          </h2>
          <ul className="mt-4 list-disc list-inside space-y-2 text-gray-700">
            <li>Membuat Design Figma</li>
            <li>Membuat Web Sisfo Sarpras</li>
          </ul>
        </section>

        {/* Skill */}
        <section className="mt-8">
          <h2 className="text-xl font-semibold border-b-2 border-blue-500 inline-block pb-1">
            Skill
          </h2>
          <ul className="mt-4 list-disc list-inside text-gray-700">
            <li>UI/UX Design Designer</li>
          </ul>
        </section>

        {/* Asal Sekolah */}
        <section className="mt-8">
          <h2 className="text-xl font-semibold border-b-2 border-blue-500 inline-block pb-1">
            Asal Sekolah
          </h2>
          <p className="mt-4 text-gray-700">SMK Taruna Bhakti</p>
        </section>

        {/* Bahasa */}
        <section className="mt-8">
          <h2 className="text-xl font-semibold border-b-2 border-blue-500 inline-block pb-1">
            Bahasa
          </h2>
          <ul className="mt-4 list-disc list-inside text-gray-700">
            <li>Indonesia (Lancar)</li>
          </ul>
        </section>

        {/* Kontak */}
        <section className="mt-8">
          <h2 className="text-xl font-semibold border-b-2 border-blue-500 inline-block pb-1">
            Kontak
          </h2>
          <p>Email  : <span className="text-blue-700">Anas46ramadhan@Gmail.com</span></p>
          <p>Github : <span className="text-blue-700">anas27ramadhan</span></p>
        </section>
      </div>
    </main>
  );
}
