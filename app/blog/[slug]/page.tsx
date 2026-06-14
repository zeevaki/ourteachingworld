import { notFound } from "next/navigation";
import NavBar from "@/components/NavBar";
import Link from "next/link";
import { blogPosts, getPostBySlug } from "@/data/blog-posts";

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

      <main className="flex-1 py-12 px-6 max-w-2xl mx-auto w-full">
        {/* Back */}
        <Link href="/blog" className="text-primary font-bold text-sm hover:underline mb-6 block">
          ← Back to Blog
        </Link>

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-5xl">{post.emoji}</span>
            <div>
              <span
                className="text-xs font-bold px-3 py-1 rounded-full text-white"
                style={{ backgroundColor: color }}
              >
                {label}
              </span>
            </div>
          </div>
          <h1 className="text-3xl font-black text-gray-800 mb-3 leading-tight">{post.title}</h1>
          <p className="text-gray-500 font-semibold text-lg mb-3 leading-relaxed">{post.subtitle}</p>
          <div className="flex items-center gap-4 text-xs text-gray-400 font-semibold">
            <span>{post.date}</span>
            <span>·</span>
            <span>{post.readTime}</span>
          </div>
        </div>

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
