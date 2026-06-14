import NavBar from "@/components/NavBar";
import Link from "next/link";

const pillars = [
  {
    emoji: "📚",
    title: "Biliteracy",
    color: "#059669",
    description:
      "Students develop full literacy in both languages — reading, writing, speaking, and listening. They are not learning half of each language; they are becoming fully literate in two. This is the most powerful academic gift a school can give.",
  },
  {
    emoji: "🏆",
    title: "Academic Achievement",
    color: "#0EA5E9",
    description:
      "Content — math, science, social studies — is taught in both languages. Students build deep conceptual knowledge that transfers across languages. By 5th grade, dual language students consistently score 15–20 percentile points higher than peers in monolingual programs.",
  },
  {
    emoji: "🌍",
    title: "Sociocultural Competence",
    color: "#8B5CF6",
    description:
      "Students learn to navigate and appreciate multiple cultures. They develop empathy, global awareness, and the ability to build bridges across communities. In a diverse world, this is not a bonus — it is a survival skill.",
  },
  {
    emoji: "🧠",
    title: "Metalinguistic Awareness",
    color: "#F59E0B",
    description:
      "Knowing two languages gives students a unique window into how language itself works. They understand grammar, sentence structure, and word patterns more deeply than monolingual peers — a skill that boosts reading comprehension in both languages.",
  },
  {
    emoji: "➕",
    title: "Additive Bilingualism",
    color: "#EF4444",
    description:
      "Dual language adds a new language without subtracting the home language. This stands in direct contrast to subtractive models where students lose their heritage language while learning English. Preserving the home language preserves identity, family connection, and community.",
  },
];

const strategies = [
  {
    title: "90/10 and 70/30 Models",
    description:
      "In the 90/10 model, instruction begins with 90% in the target language and 10% in English, gradually shifting to 50/50 by upper grades. In 70/30, the split starts at 70% target language. Both models produce stronger biliteracy than programs that try to teach both languages equally from Day 1.",
  },
  {
    title: "Language Separation",
    description:
      "Languages are kept separate by teacher, time of day, or physical space — never mixed in a single lesson. This prevents language mixing (code-switching as a crutch) and pushes students to develop full proficiency in each language independently.",
  },
  {
    title: "Preview-Review",
    description:
      "A key concept is introduced briefly in Language A (preview), taught fully in Language B, then reviewed again in Language A. This bridges comprehension gaps without compromising the language separation principle.",
  },
  {
    title: "Cognate Instruction",
    description:
      "English and Spanish share over 10,000 cognates — words that look and mean the same thing (information / información, family / familia). Teaching students to recognize and use cognates dramatically accelerates vocabulary growth in both languages.",
  },
  {
    title: "Cross-Linguistic Transfer",
    description:
      "Skills learned in one language transfer to the other. A student who masters phonemic awareness in Spanish carries that skill into English reading. Teachers intentionally leverage these transfers to accelerate literacy in both languages simultaneously.",
  },
];

const quotes = [
  {
    text: "After 5 years in a dual language program, students outperform comparison students in both reading and math — in both languages — with the advantage growing larger every year.",
    author: "Thomas & Collier, 2012 — 30-year longitudinal study",
  },
  {
    text: "Dual language education is the only program model that has been shown to close the achievement gap for English Language Learners over time.",
    author: "Howard, Sugarman & Christian — Center for Applied Linguistics",
  },
  {
    text: "The cognitive advantages of bilingualism — including better attention, task-switching, and working memory — are not side effects. They are the result of the constant mental exercise of managing two languages.",
    author: "Dr. Ellen Bialystok — York University",
  },
];

export default function DualLanguagePage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <NavBar />

      {/* Hero */}
      <section
        className="relative px-6 py-24 text-center"
        style={{
          backgroundImage: "url('/kashmir.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center top",
        }}
      >
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(5,150,105,0.65)" }} />
        <div className="relative z-10 max-w-3xl mx-auto">
          <div className="text-6xl mb-4">🌐</div>
          <h1 className="text-5xl font-black text-white mb-4" style={{ textShadow: "0 2px 16px rgba(0,0,0,0.4)" }}>
            Dual Language Education
          </h1>
          <p className="text-white/90 text-lg font-semibold max-w-xl mx-auto">
            The most powerful, research-proven program for developing biliteracy, academic excellence, and global citizens.
          </p>
        </div>
      </section>

      {/* What is it */}
      <section className="py-16 px-6 max-w-3xl mx-auto w-full">
        <h2 className="text-3xl font-black text-gray-800 mb-4">What Is Dual Language Education?</h2>
        <p className="text-gray-600 font-semibold text-lg leading-relaxed mb-4">
          Dual language education — also called two-way immersion — is a program model where students develop literacy and academic skills in two languages simultaneously. Unlike transitional bilingual programs that phase out the home language, or ESL pull-out models that isolate English learners, dual language fully develops both languages.
        </p>
        <p className="text-gray-600 font-semibold text-lg leading-relaxed">
          The program serves both native English speakers and native speakers of another language (most commonly Spanish) in the same classroom, with the goal that all students become biliterate and bicultural by the end of elementary school.
        </p>
      </section>

      {/* Research stats */}
      <section className="bg-primary text-white py-14 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-black text-center mb-10">What the Research Says</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              { stat: "30 years", label: "The Thomas & Collier study followed 210,000 students — the largest longitudinal study in U.S. education history" },
              { stat: "50th+ percentile", label: "By 5th grade, dual language students score at or above the 50th percentile in both languages" },
              { stat: "#1", label: "Dual language is the only program model proven to close the achievement gap for English Language Learners" },
            ].map((item) => (
              <div key={item.stat}>
                <div className="text-5xl font-black mb-2">{item.stat}</div>
                <div className="text-white/80 font-semibold text-sm leading-snug">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5 Pillars */}
      <section className="py-16 px-6 max-w-4xl mx-auto w-full">
        <h2 className="text-3xl font-black text-gray-800 mb-2 text-center">The 5 Pillars</h2>
        <p className="text-gray-500 font-semibold text-center mb-10">
          Every strong dual language program is built on these five foundations.
        </p>
        <div className="flex flex-col gap-5">
          {pillars.map((p) => (
            <div key={p.title} className="bg-white rounded-2xl shadow border border-gray-100 p-6 flex gap-5 items-start">
              <div className="text-4xl mt-0.5">{p.emoji}</div>
              <div>
                <h3 className="text-xl font-black mb-2" style={{ color: p.color }}>{p.title}</h3>
                <p className="text-gray-600 font-semibold text-sm leading-relaxed">{p.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Quotes */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-black text-gray-800 mb-10 text-center">Voices from the Research</h2>
          <div className="flex flex-col gap-6">
            {quotes.map((q) => (
              <blockquote key={q.author} className="bg-white rounded-2xl shadow border-l-4 border-primary p-6">
                <p className="text-gray-700 font-semibold text-base italic mb-3 leading-relaxed">&ldquo;{q.text}&rdquo;</p>
                <cite className="text-primary font-bold text-sm not-italic">— {q.author}</cite>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* Strategies */}
      <section className="py-16 px-6 max-w-4xl mx-auto w-full">
        <h2 className="text-3xl font-black text-gray-800 mb-2 text-center">Key Strategies</h2>
        <p className="text-gray-500 font-semibold text-center mb-10">
          These evidence-based strategies make dual language programs work in real classrooms.
        </p>
        <div className="grid md:grid-cols-2 gap-5">
          {strategies.map((s) => (
            <div key={s.title} className="bg-white rounded-2xl shadow border border-gray-100 p-6">
              <h3 className="font-black text-gray-800 text-base mb-2">{s.title}</h3>
              <p className="text-gray-500 font-semibold text-sm leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary-light py-14 px-6 text-center">
        <h2 className="text-2xl font-black text-gray-800 mb-3">Ready to go deeper?</h2>
        <p className="text-gray-600 font-semibold mb-6">
          Read our blog for practical insights, or explore how the Science of Reading pairs with dual language.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/blog" className="bg-primary text-white font-black px-6 py-3 rounded-2xl hover:bg-primary-dark transition-colors">
            Read the Blog →
          </Link>
          <Link href="/science-of-reading" className="bg-white text-accent font-black px-6 py-3 rounded-2xl border border-accent/30 hover:shadow-md transition-shadow">
            Science of Reading →
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
