import NavBar from "@/components/NavBar";
import Link from "next/link";

const pillars = [
  {
    emoji: "👂",
    title: "Phonemic Awareness",
    color: "#065F46",
    teks: "The ability to hear and manipulate individual sounds (phonemes) in spoken words.",
    description:
      "Before children can read, they must understand that spoken words are made of individual sounds. Phonemic awareness is purely oral — it has nothing to do with letters. It includes skills like blending sounds (c-a-t = cat), segmenting (cat = c-a-t), and substituting sounds (change /c/ in cat to /b/ → bat). Research shows it is the single strongest predictor of early reading success.",
  },
  {
    emoji: "🔤",
    title: "Phonics",
    color: "#0D9488",
    teks: "The relationship between letters (graphemes) and sounds (phonemes).",
    description:
      "Phonics instruction teaches students the alphabetic code — which letters represent which sounds, and how to decode written words. Systematic, explicit phonics (teaching letter-sound relationships in a deliberate sequence) is dramatically more effective than incidental or embedded phonics. The National Reading Panel confirmed this in 2000; brain imaging research has confirmed it since.",
  },
  {
    emoji: "📖",
    title: "Fluency",
    color: "#059669",
    teks: "Reading with accuracy, appropriate rate, and expression.",
    description:
      "Fluency is the bridge between word recognition and comprehension. When students read fluently, decoding becomes automatic — freeing cognitive resources for understanding meaning. Fluency develops through repeated reading, modeling by teachers, and oral reading practice. Struggling readers who are not fluent spend so much mental energy decoding that they cannot comprehend what they read.",
  },
  {
    emoji: "🗝️",
    title: "Vocabulary",
    color: "#D97706",
    teks: "Knowledge of words — their meanings, relationships, and usage.",
    description:
      "Vocabulary knowledge is one of the strongest predictors of reading comprehension. Students who encounter a word they cannot understand cannot comprehend the sentence it appears in — no matter how well they can decode. Vocabulary is best taught through direct instruction of high-value words, wide reading, and deliberate word study including roots, prefixes, and suffixes.",
  },
  {
    emoji: "💡",
    title: "Comprehension",
    color: "#B45309",
    teks: "The ability to construct meaning from text.",
    description:
      "Comprehension is the ultimate goal of reading. It requires both strong word recognition (decoding) and strong language comprehension (background knowledge, vocabulary, reasoning). The Simple View of Reading, proposed by Gough & Tunmer in 1986, captures this in one formula: Reading = Decoding × Language Comprehension. If either component is zero, reading comprehension is zero.",
  },
];

const quotes = [
  {
    text: "The research is overwhelming and it has been for decades. Explicit, systematic phonics instruction is not one approach among many — it is the approach that the evidence demands.",
    author: "Dr. Mark Seidenberg — Language at the Speed of Sight",
  },
  {
    text: "Reading is not a natural act. The human brain was never designed to read. We must teach children to read — explicitly and systematically. When we do, nearly every child can learn.",
    author: "Dr. Sally Shaywitz — Overcoming Dyslexia",
  },
  {
    text: "For 30 years, the reading wars have been fought in classrooms while children suffered the consequences. The science was never in doubt. The question was always whether we were willing to listen to it.",
    author: "Emily Hanford — American Public Media",
  },
];

const myths = [
  {
    myth: "\"Good readers guess words from context clues.\"",
    truth:
      "Research shows that skilled readers recognize nearly every word instantly and accurately — they almost never guess. It is struggling readers who rely on context because their decoding is weak. Teaching children to guess trains exactly the wrong skill.",
  },
  {
    myth: "\"Children learn to read naturally, just like they learn to speak.\"",
    truth:
      "Speaking is wired into the human brain through evolution. Reading is not. It is a cultural invention only 5,000 years old — far too recent to be automatic. Every child must be explicitly taught to read. Waiting for it to happen naturally leaves struggling readers behind.",
  },
  {
    myth: "\"Reading lots of books is enough — phonics is boring and mechanical.\"",
    truth:
      "Wide reading is vital for fluency and vocabulary — but it cannot substitute for phonics. A child who cannot decode cannot read widely. Phonics provides the foundation on which all reading is built. Without it, the mansion has no floor.",
  },
];

export default function ScienceOfReadingPage() {
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
          <div className="text-6xl mb-4">📖</div>
          <h1 className="text-5xl font-black text-white mb-4" style={{ textShadow: "0 2px 16px rgba(0,0,0,0.4)" }}>
            Science of Reading
          </h1>
          <p className="text-white/90 text-lg font-semibold max-w-xl mx-auto">
            Fifty years of cognitive science, neuroscience, and linguistics have produced one clear answer about how children learn to read. Here it is.
          </p>
        </div>
      </section>

      {/* What is it */}
      <section className="py-16 px-6 max-w-3xl mx-auto w-full">
        <h2 className="text-3xl font-black text-gray-800 mb-4">What Is the Science of Reading?</h2>
        <p className="text-gray-600 font-semibold text-lg leading-relaxed mb-4">
          The Science of Reading is not a single program or curriculum. It is the body of evidence — drawn from thousands of peer-reviewed studies across multiple disciplines — about how human beings learn to read and what teaching methods work best. This evidence is remarkably consistent and has been since the 1980s.
        </p>
        <p className="text-gray-600 font-semibold text-lg leading-relaxed mb-4">
          The core finding: reading is a learned skill that requires explicit, systematic instruction. The brain must be taught to connect letters to sounds (phonics), to hear the sounds in spoken words (phonemic awareness), to read with ease and expression (fluency), to know what words mean (vocabulary), and to build understanding from text (comprehension).
        </p>
        <p className="text-gray-600 font-semibold text-lg leading-relaxed">
          Programs that skip or downplay any of these five pillars produce weaker readers. Programs that teach all five — explicitly and systematically — produce dramatically better outcomes for all students, including those with dyslexia, those learning English as a second language, and those living in poverty.
        </p>
      </section>

      {/* Stats */}
      <section className="bg-accent text-white py-14 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-black text-center mb-10">The Reading Crisis in Numbers</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              { stat: "65%", label: "of U.S. 4th graders are not reading proficiently (NAEP 2022) — a number that has barely changed in 30 years" },
              { stat: "1 in 5", label: "students has dyslexia. With Science of Reading instruction, nearly all of them can learn to read." },
              { stat: "95%", label: "of children can learn to read if they receive structured literacy instruction (International Dyslexia Association)" },
            ].map((item) => (
              <div key={item.stat}>
                <div className="text-5xl font-black mb-2">{item.stat}</div>
                <div className="text-white/80 font-semibold text-sm leading-snug">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Simple View */}
      <section className="py-16 px-6 max-w-3xl mx-auto w-full">
        <h2 className="text-3xl font-black text-gray-800 mb-4">The Simple View of Reading</h2>
        <div className="bg-white rounded-3xl shadow border border-gray-100 p-8 text-center">
          <p className="text-2xl font-black text-gray-800 mb-2">
            Reading Comprehension =
          </p>
          <p className="text-3xl font-black text-primary mb-1">Decoding</p>
          <p className="text-2xl font-black text-gray-400 mb-1">×</p>
          <p className="text-3xl font-black text-accent mb-6">Language Comprehension</p>
          <p className="text-gray-600 font-semibold text-sm leading-relaxed">
            Proposed by Gough &amp; Tunmer (1986) and confirmed by decades of research. If a child cannot decode, they cannot read — no matter how strong their language comprehension. If a child cannot understand language, they cannot comprehend text — no matter how fluently they decode. Both components are essential. Both must be taught.
          </p>
        </div>
      </section>

      {/* 5 Pillars */}
      <section className="py-4 px-6 max-w-4xl mx-auto w-full">
        <h2 className="text-3xl font-black text-gray-800 mb-2 text-center">The 5 Pillars</h2>
        <p className="text-gray-500 font-semibold text-center mb-10">
          Identified by the National Reading Panel (2000) and confirmed by research since.
        </p>
        <div className="flex flex-col gap-5">
          {pillars.map((p) => (
            <div key={p.title} className="bg-white rounded-2xl shadow border border-gray-100 p-6 flex gap-5 items-start">
              <div className="text-4xl mt-0.5">{p.emoji}</div>
              <div>
                <h3 className="text-xl font-black mb-1" style={{ color: p.color }}>{p.title}</h3>
                <p className="text-xs font-bold text-gray-400 mb-2 uppercase tracking-wide">{p.teks}</p>
                <p className="text-gray-600 font-semibold text-sm leading-relaxed">{p.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Myths */}
      <section className="bg-gray-50 py-16 px-6 mt-10">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-black text-gray-800 mb-2 text-center">Myths vs. Research</h2>
          <p className="text-gray-500 font-semibold text-center mb-10">
            Some widely-used beliefs about reading have no scientific support. Here is what the research actually says.
          </p>
          <div className="flex flex-col gap-5">
            {myths.map((m) => (
              <div key={m.myth} className="bg-white rounded-2xl shadow border border-gray-100 p-6">
                <p className="font-black text-gray-700 mb-3 text-base">{m.myth}</p>
                <div className="flex gap-3 items-start">
                  <span className="text-primary font-black text-sm mt-0.5">✓ Research says:</span>
                  <p className="text-gray-600 font-semibold text-sm leading-relaxed flex-1">{m.truth}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quotes */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-black text-gray-800 mb-10 text-center">Voices from the Research</h2>
          <div className="flex flex-col gap-6">
            {quotes.map((q) => (
              <blockquote key={q.author} className="bg-white rounded-2xl shadow border-l-4 border-accent p-6">
                <p className="text-gray-700 font-semibold text-base italic mb-3 leading-relaxed">&ldquo;{q.text}&rdquo;</p>
                <cite className="text-accent font-bold text-sm not-italic">— {q.author}</cite>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-accent-light py-14 px-6 text-center">
        <h2 className="text-2xl font-black text-gray-800 mb-3">Want to learn more?</h2>
        <p className="text-gray-600 font-semibold mb-6">
          Read our blog or explore how the Science of Reading pairs with Dual Language Education.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/blog" className="bg-accent text-white font-black px-6 py-3 rounded-2xl hover:opacity-90 transition-opacity">
            Read the Blog →
          </Link>
          <Link href="/dual-language" className="bg-white text-primary font-black px-6 py-3 rounded-2xl border border-primary/30 hover:shadow-md transition-shadow">
            Dual Language →
          </Link>
        </div>
      </section>

      <footer className="bg-gray-800 text-gray-400 text-sm py-8 px-6 text-center">
        <p className="font-bold text-white mb-1">OurTeachingWorld</p>
        <p>Empowering teachers with evidence-based research · ourteachingworld.com</p>
      </footer>
    </div>
  );
}
