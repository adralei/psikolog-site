/*
 Terapi türleri için kart bileşeni:
 - title: terapi başlığı
 - description: kısa açıklama
 - onDetails: buton tıklama handler (ya da link)
*/
export default function ServiceCard({ title, description, href = "#" }) {
  return (
    <div className="border rounded-lg p-5 shadow-sm hover:shadow-md transition">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm text-muted mb-4">{description}</p>
      <a href={href} className="inline-block px-4 py-2 text-sm border rounded-md hover:bg-gray-50">Detaylı Bilgi</a>
    </div>
  )
}
