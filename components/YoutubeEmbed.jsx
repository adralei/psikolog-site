/*
 YouTube embed placeholder bileşeni.
 videoId props ile gerçek video ekleyebilirsin.
 Responsive 16:9 iframe kutusu yapar.
*/
export default function YouTubeEmbed({ videoId = "dQw4w9WgXcQ", title = "Video" }) {
  return (
    <div className="w-full aspect-video bg-black rounded-md overflow-hidden shadow">
      <iframe
        title={title}
        src={`https://www.youtube.com/embed/${videoId}`}
        className="w-full h-full"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  )
}
