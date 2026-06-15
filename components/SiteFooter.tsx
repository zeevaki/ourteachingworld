const sites = [
  { name: "OurReadingWorld", url: "https://ourreadingworld.com", emoji: "📖" },
  { name: "OurMathWorld", url: "https://ourmathworld.com", emoji: "🔢" },
  { name: "OurTeachingWorld", url: "https://ourteachingworld.com", emoji: "🎓" },
  { name: "OurSufiWorld", url: "https://oursufiworld.com", emoji: "🌹" },
];

export default function SiteFooter() {
  return (
    <footer className="bg-gray-900 text-gray-400 text-sm py-10 px-6">
      <div className="max-w-4xl mx-auto">
        <p className="text-white font-black text-center mb-2">The OurWorld Family</p>
        <p className="text-gray-500 font-semibold text-center text-xs mb-6">
          Four sites. One vision. Education, research, spirituality, and love — for every teacher and student on earth.
        </p>
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {sites.map((site) => (
            <a
              key={site.name}
              href={site.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 hover:bg-gray-700 transition-colors px-4 py-2 rounded-xl font-bold text-xs flex items-center gap-2"
            >
              <span>{site.emoji}</span>
              <span className="text-white">{site.name}</span>
            </a>
          ))}
        </div>
        <p className="text-center text-gray-600 text-xs">
          © {new Date().getFullYear()} OurWorld · Built with love for classrooms everywhere
        </p>
      </div>
    </footer>
  );
}
