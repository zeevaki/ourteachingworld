import NavBar from "@/components/NavBar";
import Link from "next/link";
import { blogPosts } from "@/data/blog-posts";

const categoryColors: Record<string, string> = {
  "dual-language": "#065F46",
  "science-of-reading": "#0D9488",
  both: "#D97706",
  education: "#B45309",
};

const categoryLabels: Record<string, string> = {
  "dual-language": "Dual Language",
  "science-of-reading": "Science of Reading",
  both: "Both Programs",
  education: "Education",
};

export default function BlogPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <NavBar />

      {/* Hero */}
      <section
        className="relative px-6 py-28 text-center"
        style={{
          backgroundImage: "url('/kashmir.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(6,95,70,0.62)" }} />
        <div className="relative z-10 max-w-3xl mx-auto">
          <p className="text-white/70 font-bold text-sm uppercase tracking-widest mb-3">
            Research · Practice · Reflection
          </p>
          <h1
            className="text-5xl md:text-6xl font-black text-white mb-4 leading-tight"
            style={{ textShadow: "0 2px 20px rgba(0,0,0,0.5)" }}
          >
            OurTeachingWorld Blog
          </h1>
          <p className="text-white/90 text-lg font-semibold max-w-xl mx-auto">
            Short, research-backed reads for teachers who want to make a difference.
          </p>
        </div>
      </section>

      {/* Posts */}
      <section className="py-16 px-6 max-w-3xl mx-auto w-full">
        <div className="flex flex-col gap-6">
          {blogPosts.map((post) => {
            const color = categoryColors[post.category];
            const label = categoryLabels[post.category];
            return (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="bg-white rounded-3xl shadow border border-gray-100 p-7 hover:shadow-md transition-shadow group"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span
                    className="text-xs font-bold px-3 py-1 rounded-full text-white"
                    style={{ backgroundColor: color }}
                  >
                    {label}
                  </span>
                  <span className="text-xs text-gray-400 font-semibold ml-auto">{post.readTime}</span>
                </div>
                <h2 className="text-xl font-black text-gray-800 mb-2 group-hover:text-primary transition-colors">
                  {post.title}
                </h2>
                <p className="text-gray-500 font-semibold text-sm leading-relaxed mb-4">{post.subtitle}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-400 font-semibold">{post.date}</span>
                  <span className="text-primary font-black text-sm">Read more →</span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <footer className="bg-gray-800 text-gray-400 text-sm py-8 px-6 text-center mt-auto">
        <p className="font-bold text-white mb-1">OurTeachingWorld</p>
        <p>Empowering teachers with evidence-based research · ourteachingworld.com</p>
      </footer>
    </div>
  );
}
