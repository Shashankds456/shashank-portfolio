import { Link, useParams } from "react-router-dom";
import SectionTitle from "../components/SectionTitle";
import portfolioData from "../data/portfolioData";

const skillCategories = {
  programming: {
    title: "Programming Languages",
    description:
      "Languages I use for software development and problem solving.",
    icon: "💻",
    dataKey: "programmingLanguages",
  },

  frontend: {
    title: "Frontend Technologies",
    description:
      "Technologies used to build responsive and interactive interfaces.",
    icon: "🎨",
    dataKey: "frontend",
  },

  backend: {
    title: "Backend Technologies",
    description:
      "Tools and technologies used for server-side development and APIs.",
    icon: "⚙️",
    dataKey: "backend",
  },

  databases: {
    title: "Databases",
    description:
      "Database technologies used for storing and managing application data.",
    icon: "🗄️",
    dataKey: "databases",
  },

  ai: {
    title: "Artificial Intelligence",
    description:
      "AI and machine-learning technologies used in my projects and internship.",
    icon: "🤖",
    dataKey: "artificialIntelligence",
  },

  tools: {
    title: "Developer Tools",
    description:
      "Tools I use for development, version control, and coding.",
    icon: "🛠️",
    dataKey: "developerTools",
  },
};

function SkillCategory() {
  const { category } = useParams();

  const selectedCategory = skillCategories[category];

  if (!selectedCategory) {
    return (
      <section className="min-h-screen bg-[#050505] px-6 pb-24 pt-32">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-4xl font-bold text-white">
            Skill category not found
          </h1>

          <Link
            to="/skills"
            className="mt-6 inline-flex rounded-xl border border-white/10 px-5 py-3 text-sm text-gray-300 transition hover:border-white/30 hover:text-white"
          >
            ← Back to Skills
          </Link>
        </div>
      </section>
    );
  }

  const skills = portfolioData.skills[selectedCategory.dataKey];

  return (
    <section className="min-h-screen bg-[#050505] px-6 pb-24 pt-32">
      <div className="mx-auto max-w-7xl">

        {/* Back button */}
        <Link
          to="/skills"
          className="mb-10 inline-flex items-center gap-2 text-sm text-gray-500 transition hover:text-cyan-400"
        >
          ← Back to Skills
        </Link>

        <SectionTitle
          eyebrow={`${selectedCategory.icon} Skill Category`}
          title={selectedCategory.title}
          description={selectedCategory.description}
        />

        {/* Skills */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {skills.map((skill) => (
            <div
              key={skill}
              className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/[0.05]"
            >
              <div className="flex items-center justify-between">
                <span className="text-base font-semibold text-white">
                  {skill}
                </span>

                <span className="text-cyan-400 opacity-0 transition group-hover:opacity-100">
                  ✓
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom navigation */}
        <div className="mt-14 border-t border-white/10 pt-8">
          <Link
            to="/skills"
            className="inline-flex rounded-xl bg-white px-6 py-3.5 font-semibold text-black transition hover:-translate-y-1 hover:bg-gray-200"
          >
            ← All Skills
          </Link>
        </div>

      </div>
    </section>
  );
}

export default SkillCategory;