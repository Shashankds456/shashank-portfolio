import { Link } from "react-router-dom";
import SectionTitle from "../components/SectionTitle";

const skillCategories = [
  {
    title: "Programming Languages",
    description:
      "Languages I use for software development and problem solving.",
    path: "/skills/programming",
    icon: "💻",
  },
  {
    title: "Frontend Technologies",
    description:
      "Technologies used to build responsive and interactive interfaces.",
    path: "/skills/frontend",
    icon: "🎨",
  },
  {
    title: "Backend Technologies",
    description:
      "Tools and technologies used for server-side development and APIs.",
    path: "/skills/backend",
    icon: "⚙️",
  },
  {
    title: "Databases",
    description:
      "Database technologies used for storing and managing application data.",
    path: "/skills/databases",
    icon: "🗄️",
  },
  {
    title: "Artificial Intelligence",
    description:
      "AI and machine-learning technologies used in my projects and internship.",
    path: "/skills/ai",
    icon: "🤖",
  },
  {
    title: "Developer Tools",
    description:
      "Tools I use for development, version control, and coding.",
    path: "/skills/tools",
    icon: "🛠️",
  },
];

function Skills() {
  return (
    <section className="min-h-screen bg-[#050505] px-6 pb-24 pt-32">
      <div className="mx-auto max-w-7xl">

        <SectionTitle
          eyebrow="Technical Skills"
          title="What I Work With"
          description="Choose a category to explore the technologies and tools I work with."
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category) => (
            <Link
              key={category.path}
              to={category.path}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/[0.05]"
            >
              <div className="absolute -right-16 -top-16 h-32 w-32 rounded-full bg-cyan-400/5 blur-3xl transition group-hover:bg-cyan-400/10" />

              <div className="relative">

                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-black/40 text-xl">
                  {category.icon}
                </div>

                <h2 className="text-xl font-bold text-white">
                  {category.title}
                </h2>

                <p className="mt-3 min-h-[72px] text-sm leading-6 text-gray-500">
                  {category.description}
                </p>

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

      </div>
    </section>
  );
}

export default Skills;