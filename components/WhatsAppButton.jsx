/*
 Sağ alt köşede sabit WhatsApp butonu.
 phone -> uluslararası formatla +90... şeklinde ver.
 message parametresi opsiyonel başlangıç mesajı.
*/
export default function WhatsAppButton({ phone = "+905XXXXXXXXX", message = "Merhaba, iletişim kurmak istiyorum." }) {
  const url = `https://wa.me/${phone.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`
  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className="fixed right-4 bottom-6 z-50 flex items-center gap-3 p-3 rounded-full shadow-lg"
      style={{ backgroundColor: "#25D366", color: "white" }}
      aria-label="WhatsApp"
    >
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M20.52 3.48A11.94 11.94 0 0012 .99C6.48.99 1.99 5.48 1.99 10.99c0 1.94.51 3.84 1.48 5.52L.5 23l6.72-2.24A11.9 11.9 0 0012 21.99c5.52 0 10.01-4.49 10.01-10.01 0-3.01-1.17-5.84-3.49-7.5zM12 19.49c-1.3 0-2.57-.34-3.7-.98l-.26-.16-4.02 1.34 1.34-3.9-.17-.28A7.44 7.44 0 014.56 11C4.56 7.2 7.21 4.55 11.01 4.55c3.8 0 6.45 2.65 6.45 6.45 0 3.8-2.65 6.49-6.46 6.49z"/><path d="M17.33 14.71c-.28-.14-1.65-.82-1.9-.92-.25-.11-.43-.16-.61.15-.18.31-.69.92-.85 1.11-.16.19-.33.21-.61.07-.28-.14-1.19-.44-2.26-1.39-.84-.74-1.41-1.65-1.58-1.94-.16-.3-.02-.46.12-.6.12-.12.28-.33.42-.49.14-.16.18-.27.28-.46.09-.19.04-.36-.02-.5-.06-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.47-.16-.01-.35-.01-.54-.01s-.5.07-.76.36c-.26.29-1 1-1 2.44 0 1.43 1.02 2.81 1.16 3 .14.19 2.02 3.07 4.9 4.3 2.36 1 2.98.9 3.48.85.5-.05 1.63-.66 1.86-1.3.23-.64.23-1.19.16-1.3-.07-.11-.28-.17-.57-.31z"/></svg>
      <span className="hidden md:inline-block text-sm font-medium">WhatsApp</span>
    </a>
  )
}
