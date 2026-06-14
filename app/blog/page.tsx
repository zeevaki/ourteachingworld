import NavBar from "@/components/NavBar";
import Link from "next/link";
import { blogPosts } from "@/data/blog-posts";

const categoryColors: Record<string, string> = {
  "dual-language": "#059669",
  "science-of-reading": "#0EA5E9",
  both: "#8B5CF6",
  education: "#F59E0B",
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
      <section className="bg-primary py-16 px-6 text-center text-white">
        <div className="text-5xl mb-3">✍️</div>
        <h1 className="text-4xl font-black mb-3">OurTeachingWorld Blog</h1>
        <p className="text-white/85 font-semibold text-lg max-w-xl mx-auto">
          Short, research-backed reads for teachers who want to get better every week.
        </p>
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
                  <span className="text-4xl">{post.emoji}</span>
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
