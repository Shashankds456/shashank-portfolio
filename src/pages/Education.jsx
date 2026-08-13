import portfolioData from "../data/portfolioData";
import SectionTitle from "../components/SectionTitle";

function Education() {
  return (
    <section className="min-h-screen bg-[#050505] px-6 pb-24 pt-32">
      <div className="mx-auto max-w-7xl">

        <SectionTitle
          eyebrow="Academic Background"
          title="Education"
          description="My academic journey and educational background."
        />

        <div className="grid gap-6 lg:grid-cols-2">

          {portfolioData.education.map((education, index) => (
            <div
              key={education.degree}
              className="group rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/[0.05]"
            >

              <div className="flex items-start justify-between gap-4">

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-black/40 text-xl">
                  {index === 0 ? "🎓" : "📚"}
                </div>

                <span className="text-sm text-gray-600">
                  {education.duration}
                </span>

              </div>

              <h2 className="mt-7 text-2xl font-bold text-white">
                {education.degree}
              </h2>

              <p className="mt-3 text-base text-gray-400">
                {education.institution}
              </p>

              <div className="mt-7 border-t border-white/10 pt-5">

                <p className="text-xs uppercase tracking-[0.2em] text-gray-600">
                  Result
                </p>

                <p className="mt-2 text-lg font-semibold text-cyan-400">
                  {education.result}
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Education;