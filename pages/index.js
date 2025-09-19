import YouTubeEmbed from '../components/YouTubeEmbed'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
        <div className="md:col-span-2 space-y-4">
          <h1 className="text-4xl sm:text-5xl font-extrabold">Psikolog Ece Erkan</h1>
          <p className="text-muted max-w-xl">Klinik psikolog — bireysel terapi, çift terapisi, çocuk ve ergen danışmanlığı. (Placeholder metin)</p>

          <div className="flex gap-3 mt-4">
            <Link href="/iletisim" className="px-5 py-3 bg-accent text-white rounded-md">Randevu Al</Link>
            <Link href="/hizmetler" className="px-5 py-3 border rounded-md">Hizmetler</Link>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <div className="w-40 h-40 rounded-full overflow-hidden shadow-lg">
            <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&q=80" alt="Profil" className="w-full h-full object-cover"/>
          </div>
        </div>
      </section>

      <section className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
        <YouTubeEmbed videoId="dQw4w9WgXcQ" title="Video 1 (placeholder)" />
        <YouTubeEmbed videoId="dQw4w9WgXcQ" title="Video 2 (placeholder)" />
      </section>

      <section id="egitimler" className="mt-16">
        <h2 className="text-2xl font-semibold mb-4">Eğitimler</h2>
        <p className="text-muted max-w-2xl">(Eğitimler listesi placeholder — daha sonra detayları ekleyebilirsin.)</p>
      </section>
    </div>
  )
}
