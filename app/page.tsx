import Link from "next/link";
import NavBar from "@/components/NavBar";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />

      {/* Hero */}
      <section
        className="relative flex flex-col items-center justify-center text-center px-6 py-28"
        style={{
          backgroundImage: "url('/kashmir.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "480px",
        }}
      >
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(6,95,70,0.62)" }} />
        <div className="relative z-10 max-w-3xl mx-auto">
          <p className="text-white/80 font-bold text-sm uppercase tracking-widest mb-3">
            For Teachers Everywhere
          </p>
          <h1
            className="text-5xl md:text-6xl font-black text-white mb-4 leading-tight"
            style={{ textShadow: "0 2px 20px rgba(0,0,0,0.4)" }}
          >
            Teaching That Matters!
          </h1>
          <p className="text-white/90 text-lg font-semibold mb-8 max-w-xl mx-auto">
            Explore the world&apos;s most powerful, research-backed programs — Dual Language Education and the Science of Reading. Built for teachers who believe every child deserves the best.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/dual-language"
              className="bg-white text-primary font-black px-6 py-3 rounded-2xl hover:bg-primary-light transition-colors shadow-md"
            >
              Dual Language Program →
            </Link>
            <Link
              href="/science-of-reading"
              className="bg-accent text-white font-black px-6 py-3 rounded-2xl hover:opacity-90 transition-opacity shadow-md"
            >
              Science of Reading →
            </Link>
          </div>
        </div>
      </section>

      {/* Mission strip */}
      <section className="bg-primary text-white py-6 px-6 text-center">
        <p className="font-bold text-base max-w-2xl mx-auto">
          🌍 OurTeachingWorld brings together the best evidence-based research so every teacher — regardless of school or country — can give every student a fair chance.
        </p>
      </section>

      {/* Two program cards */}
      <section className="py-20 px-6 max-w-5xl mx-auto w-full">
        <h2 className="text-3xl font-black text-gray-800 text-center mb-3">Two Programs. One Mission.</h2>
        <p className="text-gray-500 font-semibold text-center mb-12">
          Together, these programs unlock every child&apos;s full potential.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-3xl shadow-md border border-gray-100 p-8 flex flex-col">
            <div className="text-5xl mb-4">🌐</div>
            <h3 className="text-2xl font-black text-primary mb-2">Dual Language Education</h3>
            <p className="text-gray-600 font-semibold mb-4 flex-1">
              Students learn academic content in two languages simultaneously — developing full biliteracy, stronger cognitive skills, and a deep appreciation for multiple cultures. Research consistently shows dual language students outperform their monolingual peers by 3rd grade.
            </p>
            <ul className="text-sm text-gray-500 font-semibold space-y-1 mb-6">
              <li>✅ Higher reading &amp; math achievement</li>
              <li>✅ Stronger executive function &amp; problem-solving</li>
              <li>✅ Best program for English Language Learners</li>
              <li>✅ Celebrates home languages and cultures</li>
            </ul>
            <Link
              href="/dual-language"
              className="bg-primary text-white font-black py-3 px-6 rounded-2xl text-center hover:bg-primary-dark transition-colors"
            >
              Explore the Research →
            </Link>
          </div>

          <div className="bg-white rounded-3xl shadow-md border border-gray-100 p-8 flex flex-col">
            <div className="text-5xl mb-4">📖</div>
            <h3 className="text-2xl font-black text-accent mb-2">Science of Reading</h3>
            <p className="text-gray-600 font-semibold mb-4 flex-1">
              Decades of cognitive science, linguistics, and neuroscience converge on one clear finding: children learn to read best through explicit, systematic instruction in phonemic awareness, phonics, fluency, vocabulary, and comprehension.
            </p>
            <ul className="text-sm text-gray-500 font-semibold space-y-1 mb-6">
              <li>✅ Reduces reading failure by up to 95%</li>
              <li>✅ Transforms outcomes for struggling readers</li>
              <li>✅ Most effective approach for students with dyslexia</li>
              <li>✅ Backed by 50+ years of research</li>
            </ul>
            <Link
              href="/science-of-reading"
              className="bg-accent text-white font-black py-3 px-6 rounded-2xl text-center hover:opacity-90 transition-opacity"
            >
              Explore the Research →
            </Link>
          </div>
        </div>
      </section>

      {/* Stats banner */}
      <section className="bg-gray-800 text-white py-16 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { stat: "65%", label: "of 4th graders not reading at grade level (NAEP 2022)" },
            { stat: "95%", label: "reduction in reading failure with structured literacy" },
            { stat: "3rd Grade", label: "when dual language students begin to outperform peers" },
            { stat: "1 in 5", label: "students has dyslexia — Science of Reading is the answer" },
          ].map((item) => (
            <div key={item.stat}>
              <div className="text-4xl font-black text-primary mb-2">{item.stat}</div>
              <div className="text-sm text-gray-300 font-semibold leading-tight">{item.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Blog teaser */}
      <section className="py-20 px-6 max-w-4xl mx-auto w-full text-center">
        <h2 className="text-3xl font-black text-gray-800 mb-3">Read the Latest</h2>
        <p className="text-gray-500 font-semibold mb-8">
          Short, practical insights for teachers — backed by research, written for the classroom.
        </p>
        <Link
          href="/blog"
          className="inline-block bg-primary text-white font-black px-8 py-4 rounded-2xl hover:bg-primary-dark transition-colors text-lg shadow-md"
        >
          Visit the Blog →
        </Link>
      </section>

      {/* Programs in action */}
      <section className="bg-primary-light py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-black text-gray-800 mb-3">See These Programs in Action</h2>
          <p className="text-gray-600 font-semibold mb-8">
            OurTeachingWorld is the research home. Visit our student-facing tools to see Dual Language and Science of Reading working together in real classrooms.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="https://ourreadingworld.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-primary font-black px-6 py-3 rounded-2xl hover:shadow-md transition-shadow border border-primary/20"
            >
              📖 OurReadingWorld.com
            </a>
            <a
              href="https://ourmathworld.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-accent font-black px-6 py-3 rounded-2xl hover:shadow-md transition-shadow border border-accent/20"
            >
              🔢 OurMathWorld.com
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-400 text-sm py-8 px-6 text-center">
        <p className="font-bold text-white mb-1">OurTeachingWorld</p>
        <p>Empowering teachers with evidence-based research · ourteachingworld.com</p>
      </footer>
    </div>
  );
}
