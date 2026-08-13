import { Link } from "react-router-dom";
import portfolioData from "../data/portfolioData";
import SectionTitle from "../components/SectionTitle";

function Experience() {
  const experience = portfolioData.experience[0];

  return (
    <section className="min-h-screen bg-[#050505] px-6 pb-24 pt-32">
      <div className="mx-auto max-w-7xl">

        <SectionTitle
          eyebrow="Professional Experience"
          title="Experience"
          description="My professional journey and hands-on software development experience."
        />

        {/* Experience Timeline */}
        <div className="relative">

          {/* Timeline line */}
          <div className="absolute left-4 top-0 hidden h-full w-px bg-white/10 md:block" />

          <div className="relative md:pl-14">

            {/* Timeline dot */}
            <div className="absolute left-0 top-8 hidden h-9 w-9 items-center justify-center rounded-full border border-cyan-400/30 bg-cyan-400/10 md:flex">
              <span className="h-2.5 w-2.5 rounded-full bg-cyan-400" />
            </div>

            {/* Experience Card */}
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 sm:p-9">

              {/* Header */}
              <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-start">

                <div>
                  <p className="text-sm font-medium uppercase tracking-[0.25em] text-cyan-400">
                    {experience.duration}
                  </p>

                  <h2 className="mt-3 text-2xl font-bold text-white sm:text-3xl">
                    {experience.role}
                  </h2>

                  <p className="mt-2 text-lg text-gray-400">
                    {experience.company}
                  </p>
                </div>

                <div className="w-fit rounded-xl border border-cyan-400/20 bg-cyan-400/[0.05] px-4 py-2 text-sm text-cyan-300">
                  Internship
                </div>

              </div>

              {/* Responsibilities */}
              <div className="mt-10">

                <p className="text-sm font-medium uppercase tracking-[0.25em] text-cyan-400">
                  Responsibilities
                </p>

                <div className="mt-5 space-y-4">

                  {experience.responsibilities.map((responsibility) => (
                    <div
                      key={responsibility}
                      className="flex gap-4"
                    >
                      <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-cyan-400" />

                      <p className="text-sm leading-7 text-gray-400">
                        {responsibility}
                      </p>
                    </div>
                  ))}

                </div>

              </div>

              {/* Technologies */}
              <div className="mt-10 border-t border-white/10 pt-8">

                <p className="text-sm font-medium uppercase tracking-[0.25em] text-cyan-400">
                  Technologies & Areas
                </p>

                <div className="mt-5 flex flex-wrap gap-2">

                  {experience.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-xl border border-white/10 bg-black/40 px-4 py-2 text-sm text-gray-300"
                    >
                      {technology}
                    </span>
                  ))}

                </div>

              </div>

            </div>

          </div>
        </div>

        {/* Related Work + Certificate */}
        <div className="mt-12 grid gap-6 lg:grid-cols-2">

          {/* Related Project */}
          <div className="rounded-3xl border border-cyan-400/15 bg-cyan-400/[0.03] p-7 sm:p-9">

            <p className="text-sm font-medium uppercase tracking-[0.25em] text-cyan-400">
              Related Work
            </p>

            <h2 className="mt-3 text-2xl font-bold text-white">
              AI-Based Unified Log Analyzer
            </h2>

            <p className="mt-4 text-sm leading-7 text-gray-500">
              An AI-powered enterprise diagnostics project involving
              log analysis, error classification, and root-cause analysis.
            </p>

            <Link
              to="/projects/ai-log-analyzer"
              className="mt-6 inline-flex rounded-xl bg-white px-5 py-3 font-semibold text-black transition hover:-translate-y-1 hover:bg-gray-200"
            >
              View Project →
            </Link>

          </div>

          {/* Internship Certificate */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 sm:p-9">

            <p className="text-sm font-medium uppercase tracking-[0.25em] text-cyan-400">
              Internship Certificate
            </p>

            <h2 className="mt-3 text-2xl font-bold text-white">
              Mphasis Internship Completion Certificate
            </h2>

            <p className="mt-3 text-sm text-gray-500">
              Software Developer Intern
            </p>

            <p className="mt-2 text-sm text-gray-500">
              20 January 2026 – 21 April 2026
            </p>

            <a
              href="/certificates/internship%20certificate.pdf"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex rounded-xl border border-cyan-400/20 bg-cyan-400/[0.05] px-5 py-3 font-semibold text-cyan-400 transition hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-cyan-400/10"
            >
              View Certificate ↗
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Experience;