export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="max-w-5xl mx-auto px-4 py-8 text-sm text-muted">
        <div className="flex flex-col md:flex-row justify-between">
          <div>
            <div className="font-semibold">Psikolog Ece Erkan</div>
            <div>© {new Date().getFullYear()} Tüm hakları saklıdır.</div>
          </div>
          <div className="mt-4 md:mt-0">
            <div>Adres (örnek): İstanbul, Türkiye</div>
            <div className="mt-1">E-posta: info@ornek.com</div>
          </div>
        </div>
      </div>
    </footer>
  )
}
