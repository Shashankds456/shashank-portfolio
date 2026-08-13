import SectionTitle from "../components/SectionTitle";

function Resume() {
  const resumePath = "/resume/Shashankds_resume.pdf";

  return (
    <section className="min-h-screen bg-[#050505] px-6 pb-24 pt-32">
      <div className="mx-auto max-w-7xl">

        <SectionTitle
          eyebrow="Curriculum Vitae"
          title="Resume"
          description="View my resume online or download a copy for your reference."
        />

        {/* Resume actions */}
        <div className="mb-8 flex flex-wrap gap-4">

          <a
            href={resumePath}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 font-semibold text-black transition hover:-translate-y-1 hover:bg-gray-200"
          >
            👁 View Resume
          </a>

          <a
            href={resumePath}
            download="Shashankds_resume.pdf"
            className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-6 py-3.5 font-semibold text-gray-200 transition hover:-translate-y-1 hover:border-cyan-400/30 hover:text-cyan-400"
          >
            ↓ Download Resume
          </a>

        </div>

        {/* Resume viewer */}
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03]">

          <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
            <span className="text-sm text-gray-500">
              Resume Preview
            </span>

            <span className="text-xs text-gray-600">
              PDF
            </span>
          </div>

          <div className="h-[850px] w-full bg-white">
            <iframe
              src={resumePath}
              title="Shashank D S Resume"
              className="h-full w-full"
            />
          </div>

        </div>

      </div>
    </section>
  );
}

export default Resume;