/*
 Basit iletişim formu (frontend tarafı).
 Form backend'e bağlamak istersen action veya API route ekleyebilirsin.
*/
export default function Iletisim() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">İletişim</h1>
      <p className="text-muted mb-6">Randevu veya sorularınız için lütfen formu doldurun. (Bu bir frontend placeholder.)</p>

      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">İsim</label>
          <input className="w-full border rounded-md px-3 py-2" placeholder="Adınız" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">E-posta</label>
            <input className="w-full border rounded-md px-3 py-2" placeholder="ornek@eposta.com" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Telefon</label>
            <input className="w-full border rounded-md px-3 py-2" placeholder="+90 5xx xxx xx xx" />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Mesaj</label>
          <textarea className="w-full border rounded-md px-3 py-2 h-32" placeholder="Mesajınız..." />
        </div>

        <div>
          <button type="button" className="px-5 py-2 bg-accent text-white rounded-md">Gönder</button>
        </div>
      </form>
    </div>
  )
}
