import { notFound } from "next/navigation";
import NavBar from "@/components/NavBar";
import Link from "next/link";
import { blogPosts, getPostBySlug } from "@/data/blog-posts";

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

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

function renderContent(content: string) {
  const lines = content.split("\n");
  const elements: React.ReactNode[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    if (line.startsWith("## ")) {
      elements.push(
        <h2 key={i} className="text-2xl font-black text-gray-800 mt-10 mb-4">
          {line.slice(3)}
        </h2>
      );
    } else if (line.startsWith("**") && line.endsWith("**")) {
      elements.push(
        <p key={i} className="font-black text-gray-800 text-base mb-2">
          {line.slice(2, -2)}
        </p>
      );
    } else if (line.startsWith("- ")) {
      elements.push(
        <li key={i} className="text-gray-600 font-semibold text-base ml-4 mb-1">
          {line.slice(2)}
        </li>
      );
    } else if (line.trim() === "") {
      // skip blank lines
    } else {
      // Replace **bold** inline
      const parts = line.split(/(\*\*[^*]+\*\*)/g).map((part, j) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          return <strong key={j}>{part.slice(2, -2)}</strong>;
        }
        return part;
      });
      elements.push(
        <p key={i} className="text-gray-600 font-semibold text-base leading-relaxed mb-4">
          {parts}
        </p>
      );
    }
    i++;
  }

  return elements;
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const color = categoryColors[post.category];
  const label = categoryLabels[post.category];

  const related = blogPosts.filter(
    (p) =>
      p.slug !== post.slug &&
      (p.category === post.category || p.category === "both" || post.category === "both")
  );

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
          <span
            className="inline-block text-xs font-black uppercase tracking-widest px-3 py-1 rounded-full mb-4 text-white"
            style={{ backgroundColor: color }}
          >
            {label}
          </span>
          <h1
            className="text-4xl md:text-5xl font-black text-white mb-4 leading-tight"
            style={{ textShadow: "0 2px 20px rgba(0,0,0,0.5)" }}
          >
            {post.title}
          </h1>
          <p className="text-white/85 font-semibold text-lg max-w-xl mx-auto">{post.subtitle}</p>
          <p className="text-white/60 text-sm font-semibold mt-4">{post.date} · {post.readTime}</p>
        </div>
      </section>

      <main className="flex-1 py-12 px-6 max-w-2xl mx-auto w-full">
        {/* Back */}
        <Link href="/blog" className="text-primary font-bold text-sm hover:underline mb-6 block">
          ← Back to Blog
        </Link>

        <hr className="border-gray-100 mb-8" />

        {/* Content */}
        <article>{renderContent(post.content)}</article>

        <hr className="border-gray-100 mt-12 mb-8" />

        {/* Related */}
        {related.length > 0 && (
          <section>
            <h2 className="text-xl font-black text-gray-800 mb-4">Keep Reading</h2>
            <div className="flex flex-col gap-4">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/blog/${r.slug}`}
                  className="bg-white rounded-2xl shadow border border-gray-100 p-5 hover:shadow-md transition-shadow group flex gap-4 items-start"
                >
                  <span className="text-3xl mt-0.5">{r.emoji}</span>
                  <div>
                    <h3 className="font-black text-gray-800 text-sm group-hover:text-primary transition-colors mb-1">
                      {r.title}
                    </h3>
                    <p className="text-gray-400 text-xs font-semibold">{r.readTime}</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>

      <footer className="bg-gray-800 text-gray-400 text-sm py-8 px-6 text-center">
        <p className="font-bold text-white mb-1">OurTeachingWorld</p>
        <p>Empowering teachers with evidence-based research · ourteachingworld.com</p>
      </footer>
    </div>
  );
}
