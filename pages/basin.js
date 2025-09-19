import YouTubeEmbed from '../components/YouTubeEmbed'

/*
 Basın sayfası: medya içerikleri.
 YouTube embed placeholder'ları koydum.
*/
export default function Basin() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Basın & Medya</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <YouTubeEmbed videoId="dQw4w9WgXcQ" title="Basın Video 1" />
        <YouTubeEmbed videoId="dQw4w9WgXcQ" title="Basın Video 2" />
      </div>
    </div>
  )
}
