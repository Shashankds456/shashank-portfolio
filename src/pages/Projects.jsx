import { Link } from "react-router-dom";
import portfolioData from "../data/portfolioData";
import SectionTitle from "../components/SectionTitle";

const projectRoutes = [
  "ai-log-analyzer",
  "crop-recommendation",
];

function Projects() {
  return (
    <section className="min-h-screen bg-[#050505] px-6 pb-24 pt-32">
      <div className="mx-auto max-w-7xl">

        <SectionTitle
          eyebrow="Selected Work"
          title="Projects"
          description="Explore the applications and intelligent software solutions I have built."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          {portfolioData.projects.map((project, index) => (
            <Link
              key={project.title}
              to={`/projects/${project.slug}`}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/[0.05]"
            >
              {/* Decorative glow */}
              <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-cyan-400/5 blur-3xl transition group-hover:bg-cyan-400/10" />

              <div className="relative">

                {/* Project number */}
                <div className="mb-8 flex items-center justify-between">
                  <span className="text-sm font-medium tracking-[0.25em] text-gray-600">
                    PROJECT {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="text-gray-600 transition group-hover:text-cyan-400">
                    ↗
                  </span>
                </div>

                {/* Title */}
                <h2 className="max-w-xl text-2xl font-bold text-white sm:text-3xl">
                  {project.title}
                </h2>

                {/* Description */}
                <p className="mt-5 max-w-xl text-sm leading-7 text-gray-400">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mt-7 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-lg border border-white/10 bg-black/40 px-3 py-1.5 text-xs text-gray-400"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                {/* View */}
                <div className="mt-8 flex items-center gap-2 text-sm font-medium text-gray-400 transition group-hover:text-cyan-400">
                  View Project
                  <span className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </div>

              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projects;