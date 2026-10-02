import { motion } from "framer-motion";

const facts = [
  {
    title: "Vision",
    text: "Design AI-first web products that feel simple, trusted, and deeply human.",
  },
  {
    title: "Mission",
    text: "Build premium digital experiences for founders, creators, and teams.",
  },
  {
    title: "Philosophy",
    text: "Technology should feel simple, human, and intelligent.",
  },
  {
    title: "Approach",
    text: "Prototype fast, refine with empathy, deliver with clarity.",
  },
];

const AboutFounder = () => {
  return (
    <section id="about" className="bg-[#F5F5F2] text-black overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
        <div className="grid gap-14 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-10"
          >
            <div className="inline-flex items-center gap-3 rounded-full border border-black/10 bg-white/80 px-4 py-2 text-[0.8rem] font-semibold uppercase tracking-[0.35em] text-slate-900 shadow-sm shadow-black/5 backdrop-blur-sm">
              About the Founder
            </div>

            <div className="space-y-6">
              <h2 className="max-w-3xl text-5xl font-black leading-[0.95] tracking-[-0.03em] text-black sm:text-6xl lg:text-7xl">
                Building AI experiences for humans.
              </h2>
              <p className="max-w-2xl text-base leading-8 text-slate-700 sm:text-lg">
                Cristofer Sani blends editorial clarity, AI intelligence, and
                premium product craft to design web experiences that feel
                effortless, confident, and beautifully human.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <article className="rounded-[32px] border border-black/5 bg-white/90 p-8 shadow-[0_20px_60px_rgba(15,23,42,0.06)]">
                <p className="text-sm uppercase tracking-[0.3em] text-slate-500">
                  Founder
                </p>
                <h3 className="mt-4 text-3xl font-semibold text-black">
                  Cristofer Sani
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  AI Web Developer · Founder · Creative Developer
                </p>
              </article>

              <article className="rounded-[32px] border border-black/5 bg-white/90 p-8 shadow-[0_20px_60px_rgba(15,23,42,0.06)]">
                <p className="text-sm uppercase tracking-[0.3em] text-slate-500">
                  Personal mission
                </p>
                <p className="mt-4 text-sm leading-7 text-slate-700">
                  Create digital systems that feel calm, intelligent, and
                  intrinsically human in every interaction.
                </p>
              </article>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {facts.map((fact) => (
                <div
                  key={fact.title}
                  className="rounded-[28px] border border-black/5 bg-white/90 p-6 shadow-sm shadow-black/5"
                >
                  <p className="text-xs uppercase tracking-[0.28em] text-slate-500">
                    {fact.title}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-slate-700">
                    {fact.text}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.8,
              delay: 0.12,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative flex justify-center"
          >
            <div className="w-full max-w-[380px]">
              <div className="relative overflow-hidden rounded-[32px] border border-black/8 bg-slate-100 aspect-[4/5] shadow-lg">
                <img
                  src="/assets/images/cristofer/Cristofer-Sani.svg"
                  alt="Cristofer Sani"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutFounder;
