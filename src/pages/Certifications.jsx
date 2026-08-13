import portfolioData from "../data/portfolioData";
import SectionTitle from "../components/SectionTitle";

function Certifications() {
  return (
    <section className="min-h-screen bg-[#050505] px-6 pb-24 pt-32">
      <div className="mx-auto max-w-7xl">

        <SectionTitle
          eyebrow="Credentials"
          title="Certifications"
          description="Technical certifications and training completed during my academic and professional journey."
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">

          {portfolioData.certifications.map((certificate) => (
            <div
              key={certificate.name}
              className="group rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/[0.05]"
            >

              {/* Icon */}
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-black/40 text-xl">
                📜
              </div>

              {/* Certificate name */}
              <h2 className="mt-6 text-lg font-bold leading-7 text-white">
                {certificate.name}
              </h2>

              {/* Issuer */}
              <p className="mt-3 text-sm text-gray-500">
                {certificate.issuer}
              </p>

              {/* Score */}
              {certificate.score && (
                <div className="mt-6 border-t border-white/10 pt-4">
                  <span className="text-xs uppercase tracking-[0.2em] text-gray-600">
                    Score
                  </span>

                  <p className="mt-1 font-semibold text-cyan-400">
                    {certificate.score}
                  </p>
                </div>
              )}

              {/* Certificate file */}
              {certificate.issuer
                .toLowerCase()
                .includes("mphasis") && (
                <a
                  href="/certificates/internship%20certificate.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center rounded-xl border border-cyan-400/20 bg-cyan-400/[0.05] px-4 py-2.5 text-sm font-medium text-cyan-400 transition hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-cyan-400/10"
                >
                  View Certificate ↗
                </a>
              )}

              {/* Online verification link */}
              {certificate.link && (
                <a
                  href={certificate.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center rounded-xl border border-cyan-400/20 bg-cyan-400/[0.05] px-4 py-2.5 text-sm font-medium text-cyan-400 transition hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-cyan-400/10"
                >
                  Verify Certificate ↗
                </a>
              )}

            </div>
          ))}

        </div>

        {/* Achievements */}
        <div className="mt-14 rounded-3xl border border-cyan-400/15 bg-cyan-400/[0.03] p-7 sm:p-9">

          <p className="text-sm font-medium uppercase tracking-[0.25em] text-cyan-400">
            Achievements
          </p>

          <div className="mt-6 space-y-4">

            {portfolioData.achievements.map((achievement) => (
              <div
                key={achievement}
                className="flex gap-4"
              >
                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-cyan-400" />

                <p className="text-sm leading-7 text-gray-400">
                  {achievement}
                </p>
              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}

export default Certifications;