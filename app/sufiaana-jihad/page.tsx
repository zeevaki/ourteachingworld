import NavBar from "@/components/NavBar";
import Link from "next/link";

const pillars = [
  {
    emoji: "🕊️",
    title: "Striving Without Violence",
    description:
      "Jihad — before it was weaponized by politics — meant striving. The inner struggle for truth, justice, and integrity. The Sufiaana Jihad of an educator is fought in classrooms, in writing, in documentation, in refusing to be silenced. No weapon. No army. Just relentless, love-driven truth.",
  },
  {
    emoji: "🌹",
    title: "The Sufi Tradition of Resistance",
    description:
      "The great Sufi poets — Rumi, Bulleh Shah, Shah Hussain, Rabia al-Adawiyya — were not accepted by the orthodoxy of their time. They dressed differently, spoke differently, loved differently. They were called scandalous, immoral, dangerous. History now calls them visionaries. The establishment's discomfort was never evidence that they were wrong.",
  },
  {
    emoji: "🎨",
    title: "Expression Is Not Negotiable",
    description:
      "How an educator dresses, wears their hair, colors their world — none of this determines the value of their ideas. Credibility assigned by appearance is credibility assigned by bias. The Sufiaana Jihad educator refuses the costume of institutional acceptability. Bold expression is not a distraction from serious thinking. It is serious thinking made visible.",
  },
  {
    emoji: "🌍",
    title: "Post-Nationalist, Pro-Human",
    description:
      "Borders drawn by colonial powers in 1947, 1916, 1884 — these are not sacred. They are wounds. The Sufiaana Jihad educator does not pledge allegiance to nation-states that have consistently failed their most vulnerable people. The allegiance is to humanity, to children, to truth — not to flags or armies or the institutions that protect them.",
  },
  {
    emoji: "📜",
    title: "Documentation as Resistance",
    description:
      "When the law does not protect you, you document. When agencies do not listen, you build a record. Every incident written down, timestamped, witnessed — becomes evidence that cannot be dismissed as paranoia. Non-violent resistance has always depended on meticulous, patient documentation. This is not passive. This is strategic.",
  },
  {
    emoji: "🏫",
    title: "The Classroom as Sacred Space",
    description:
      "Sufis understood that teaching is a spiritual act. Every child who leaves a classroom feeling seen, heard, and capable of critical thought is a small revolution. The educator who shows up — despite the racism, the doubt, the slurs, the institutional indifference — and still teaches with love and rigor is practicing the deepest form of Sufiaana Jihad.",
  },
];

const thinkers = [
  {
    name: "Bulleh Shah (1680–1757)",
    quote: "Tear down the mosque, tear down the temple, tear down everything in sight — but do not break a human heart, for that is where God resides.",
    note: "Punjabi Sufi poet, considered scandalous by both Muslim and Hindu orthodoxy of his time. Expelled from his community. Remembered as a saint.",
  },
  {
    name: "Frantz Fanon",
    quote: "Each generation must discover its mission, fulfill it or betray it, in relative opacity.",
    note: "Martinican-Algerian philosopher on colonialism and identity. His work on how colonized people are made to distrust their own perceptions remains urgently relevant.",
  },
  {
    name: "bell hooks",
    quote: "The function of art is to do more than tell it like it is — it's to imagine what is possible.",
    note: "On the intersection of appearance, identity, and intellectual authority — and how women, especially women of color, are routinely disqualified by how they look rather than what they think.",
  },
  {
    name: "Edward Said",
    quote: "The intellectual's role is to speak truth to power.",
    note: "Palestinian-American intellectual who argued that the most important work of any thinker is to refuse the comfort of institutional approval — to say what must be said even when it costs something.",
  },
];

export default function SufianaJihadPage() {
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
          <p className="text-amber-200 font-bold text-sm uppercase tracking-widest mb-3">
            A Framework for Educators Who Fit No Box
          </p>
          <h1
            className="text-6xl font-black text-white mb-4 leading-tight"
            style={{ textShadow: "0 2px 20px rgba(0,0,0,0.5)" }}
          >
            Sufiaana Jihad
          </h1>
          <p className="text-amber-100 text-lg font-semibold mb-4 max-w-xl mx-auto leading-relaxed">
            <span className="font-black">Sufiaana</span> — in the spirit of the Sufi: with love, with poetry, with discipline, with inner truth.
          </p>
          <p className="text-amber-100 text-lg font-semibold max-w-xl mx-auto leading-relaxed">
            <span className="font-black">Jihad</span> — the original meaning: to strive, to struggle, to fight for what is right. Without weapons. Without hatred. With everything else.
          </p>
        </div>
      </section>

      {/* What this is */}
      <section className="py-16 px-6 max-w-3xl mx-auto w-full">
        <h2 className="text-3xl font-black text-gray-800 mb-6">What Is Sufiaana Jihad?</h2>
        <p className="text-gray-600 font-semibold text-lg leading-relaxed mb-5">
          There is a category of educator that no union defends, no advocacy organization claims, and no existing framework fully describes. They are too modern for the conservative establishment and too rooted for the progressive one. They dress boldly and think rigorously. They pray and they question. They love their students fiercely and refuse to be quiet about the systems that harm them. They have been called troublemakers, radicals, morally questionable — by the very institutions that were built to protect them.
        </p>
        <p className="text-gray-600 font-semibold text-lg leading-relaxed mb-5">
          Sufiaana Jihad is the name for what they are already doing. It is a non-violent, love-driven, truth-seeking resistance against every system — institutional, political, cultural, religious — that tries to silence an educator for who they are rather than what they do. It is Sufi in its discipline, its poetry, its refusal of orthodoxy. It is Jihad in its relentlessness, its courage, its refusal to stop.
        </p>
        <p className="text-gray-600 font-semibold text-lg leading-relaxed">
          This is not victimhood. This is a framework. And it has a long, distinguished history — even if it has never before been given this name.
        </p>
      </section>

      {/* Stats / reality */}
      <section className="bg-amber-900 text-white py-14 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-black text-center mb-10">The Reality Educators Face</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              { stat: "55%", label: "of teachers from minority backgrounds report experiencing discrimination in their schools (Learning Policy Institute, 2023)" },
              { stat: "1 in 3", label: "Muslim educators in the U.S. report being treated with suspicion by colleagues or administration (ISPU, 2022)" },
              { stat: "78%", label: "of women educators say their appearance affects how seriously their ideas are taken in professional settings (AAUW, 2021)" },
            ].map((item) => (
              <div key={item.stat}>
                <div className="text-5xl font-black text-amber-300 mb-2">{item.stat}</div>
                <div className="text-amber-100 font-semibold text-sm leading-snug">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The appearance problem */}
      <section className="py-16 px-6 max-w-3xl mx-auto w-full">
        <h2 className="text-3xl font-black text-gray-800 mb-4">The Costume of Credibility</h2>
        <p className="text-gray-600 font-semibold text-lg leading-relaxed mb-5">
          There is an unspoken dress code for being taken seriously as an intellectual. Blazers. Muted colors. Hair that does not distract. Clothing that signals membership in the club of people whose ideas deserve consideration. Research on what psychologists call <strong>"appearance-based credibility bias"</strong> confirms what many educators already know from lived experience: how you look shapes whether your ideas are heard before you open your mouth.
        </p>
        <p className="text-gray-600 font-semibold text-lg leading-relaxed mb-5">
          For women — particularly brown women, Muslim women, women who do not dress in the manner the institution expects — this bias is compounding. A 2019 study published in the <em>Journal of Applied Psychology</em> found that women who violated appearance-based professional norms were rated as less competent, less trustworthy, and less deserving of institutional support — regardless of the actual quality of their work.
        </p>
        <p className="text-gray-600 font-semibold text-lg leading-relaxed">
          The Sufiaana Jihad educator does not accept this bargain. Bold expression — colorful, cultural, personal, unconventional — is not a liability to be managed. It is a refusal to participate in a system that demands conformity as the price of being heard. The ideas stand on their own. They do not require a blazer.
        </p>
      </section>

      {/* 6 Pillars */}
      <section className="bg-amber-50 py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-black text-gray-800 mb-2 text-center">The Six Pillars</h2>
          <p className="text-gray-500 font-semibold text-center mb-10">
            What Sufiaana Jihad looks like in practice.
          </p>
          <div className="flex flex-col gap-5">
            {pillars.map((p) => (
              <div key={p.title} className="bg-white rounded-2xl shadow border border-amber-100 p-6 flex gap-5 items-start">
                <div className="text-4xl mt-0.5">{p.emoji}</div>
                <div>
                  <h3 className="text-xl font-black text-amber-900 mb-2">{p.title}</h3>
                  <p className="text-gray-600 font-semibold text-sm leading-relaxed">{p.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Thinkers */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-black text-gray-800 mb-2 text-center">Voices Across Time</h2>
          <p className="text-gray-500 font-semibold text-center mb-10">
            Sufiaana Jihad has no single founder. It has a lineage.
          </p>
          <div className="flex flex-col gap-6">
            {thinkers.map((t) => (
              <blockquote key={t.name} className="bg-white rounded-2xl shadow border-l-4 border-amber-700 p-6">
                <p className="text-gray-700 font-semibold text-base italic mb-3 leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
                <cite className="text-amber-800 font-black text-sm not-italic block mb-2">— {t.name}</cite>
                <p className="text-gray-400 font-semibold text-xs leading-relaxed">{t.note}</p>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* Post-nationalist section */}
      <section className="bg-amber-900 text-white py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-black mb-5">On Nationalism, Borders, and Belonging</h2>
          <p className="text-amber-100 font-semibold text-lg leading-relaxed mb-5">
            The borders drawn by colonial powers in 1947 across South Asia — and in 1916 across the Middle East, and in 1884 across Africa — were not acts of liberation. They were acts of administration. They divided communities, created minorities overnight, and produced the nationalistic violence that continues to this day. To refuse to celebrate these borders is not treason. It is historical honesty.
          </p>
          <p className="text-amber-100 font-semibold text-lg leading-relaxed mb-5">
            Many of the most important intellectuals of the 20th and 21st centuries have held versions of this position — from Hannah Arendt on statelessness to Mahmood Mamdani on colonial citizenship to countless poets and thinkers across South Asia who grieved 1947 as a wound rather than celebrated it as a birth. To hold this position while wearing a colorful wig in a Dallas classroom is not a contradiction. It is intellectual courage in its fullest form.
          </p>
          <p className="text-amber-100 font-semibold text-lg leading-relaxed">
            Sufiaana Jihad is not nationalist. It is not anti-nationalist either, in the reactive sense. It simply begins from the premise that human beings matter more than the states that claim them — and that an educator's first allegiance is to the child in front of them, not to any flag on the wall.
          </p>
        </div>
      </section>

      {/* Call to educators */}
      <section className="py-16 px-6 max-w-3xl mx-auto w-full text-center">
        <h2 className="text-3xl font-black text-gray-800 mb-4">If This Is You</h2>
        <p className="text-gray-600 font-semibold text-lg leading-relaxed mb-6 max-w-xl mx-auto">
          If you have been doubted because of how you dress. Dismissed because of where you are from. Suspected because of what you believe. Silenced because you refused to be quiet about what you saw — you are not alone, you are not wrong, and what you are doing has a name.
        </p>
        <p className="text-gray-600 font-semibold text-lg leading-relaxed mb-10 max-w-xl mx-auto">
          Document everything. Keep teaching. Keep expressing. Keep striving. That is the Sufiaana Jihad.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/blog" className="bg-amber-800 text-white font-black px-6 py-3 rounded-2xl hover:bg-amber-900 transition-colors">
            Read the Blog →
          </Link>
          <Link href="/dual-language" className="bg-white text-amber-800 font-black px-6 py-3 rounded-2xl border border-amber-200 hover:shadow-md transition-shadow">
            Our Research →
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
