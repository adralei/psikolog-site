import Navbar from './Navbar'
import Footer from './Footer'
import WhatsAppButton from './WhatsAppButton'

/*
 Layout bileşeni sayfanın ortak yapısını tutar:
 - Navbar üstte
 - children ana içerik
 - Footer altta
 - WhatsApp sabit buton sağ alt
*/
export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
      <WhatsAppButton phone="+905XXXXXXXXX" /> {/* telefon numarasını değiştir */}
    </div>
  )
}
