import { Link } from "react-router-dom";

const workItems = [
  {
    title: "Skills",
    description:
      "Explore my programming, frontend, backend, database, AI, and developer tools.",
    path: "/skills",
    icon: "💻",
  },
  {
    title: "Projects",
    description:
      "Explore my AI and machine learning projects with technologies and source code.",
    path: "/projects",
    icon: "🚀",
  },
  {
    title: "Experience",
    description:
      "Learn about my Software Developer internship experience at Mphasis.",
    path: "/experience",
    icon: "💼",
  },
  {
    title: "Education",
    description:
      "View my engineering and pre-university educational background.",
    path: "/education",
    icon: "🎓",
  },
  {
    title: "Certifications",
    description:
      "View my professional training and technical certifications.",
    path: "/certifications",
    icon: "📜",
  },
  {
    title: "Resume",
    description:
      "View my complete resume online or download the PDF.",
    path: "/resume",
    icon: "📄",
  },
];

function Work() {
  return (
    <section className="min-h-screen bg-[#050505] px-6 pb-24 pt-32">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-14 max-w-3xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.35em] text-cyan-400">
            Explore
          </p>

          <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl">
            My Work
          </h1>

          <p className="mt-5 text-base leading-8 text-gray-400 sm:text-lg">
            Explore my technical skills, projects, professional experience,
            education, certifications, and resume.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {workItems.map((item) => (
            <Link
              key={item.title}
              to={item.path}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/[0.05]"
            >
              {/* Glow */}
              <div className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-cyan-400/10 blur-3xl transition group-hover:bg-cyan-400/20" />

              <div className="relative">

                {/* Icon */}
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-black/40 text-xl">
                  {item.icon}
                </div>

                {/* Title */}
                <h2 className="text-xl font-bold text-white">
                  {item.title}
                </h2>

                {/* Description */}
                <p className="mt-3 min-h-[72px] text-sm leading-6 text-gray-500">
                  {item.description}
                </p>

                {/* Link */}
                <div className="mt-6 flex items-center gap-2 text-sm font-medium text-gray-400 transition group-hover:text-cyan-400">
                  Explore
                  <span className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Contact */}
        <div className="mt-16 rounded-3xl border border-white/10 bg-white/[0.02] p-8 text-center sm:p-12">
          <p className="text-sm uppercase tracking-[0.3em] text-gray-500">
            Have an opportunity or suggestion?
          </p>

          <h2 className="mt-4 text-2xl font-bold text-white sm:text-3xl">
            Let's connect.
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-gray-500">
            If you would like to discuss an opportunity, collaboration,
            project, or have a suggestion, feel free to get in touch.
          </p>

          <Link
            to="/contact"
            className="mt-7 inline-flex rounded-xl bg-white px-6 py-3.5 font-semibold text-black transition hover:-translate-y-1 hover:bg-gray-200"
          >
            Contact Me →
          </Link>
        </div>

      </div>
    </section>
  );
}

export default Work;