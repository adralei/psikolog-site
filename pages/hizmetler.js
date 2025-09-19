import ServiceCard from '../components/ServiceCard'

const terapiList = [
  { title: "Bireysel Psikoterapi", description: "Bireysel terapi ile duygusal süreçlerinizi keşfedin." },
  { title: "Çift ve Aile Terapisi", description: "İlişki dinamikleri, iletişim sorunları ve aile içi uyum." },
  { title: "Çocuk ve Ergen Psikolojisi", description: "Gelişimsel destek, davranış problemleri, sınav kaygısı." },
  { title: "Psikoterapi (Bilişsel Davranışçı)", description: "CBT temelli uygulamalar ile düşünce-davranış değişikliği." },
  { title: "EMDR Terapisi", description: "Travma odaklı çalışmalar için EMDR yöntemleri." },
  { title: "Çevrimiçi Danışmanlık", description: "Uzaktan video seanslarıyla destek." },
]

export default function Hizmetler() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Hizmetler</h1>
      <p className="text-muted mb-8">Aşağıdaki terapi türleri sadece örnek. İçerikleri daha sonra düzenleyebilirsin.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {terapiList.map((t, i) => (
          <ServiceCard key={i} title={t.title} description={t.description} href="#" />
        ))}
      </div>
    </div>
  )
}
