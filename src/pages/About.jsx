import { Link } from "react-router-dom";
import SectionTitle from "../components/SectionTitle";
import portfolioData from "../data/portfolioData";

function About() {
  return (
    <section className="min-h-screen bg-[#050505] px-6 pb-24 pt-32">
      <div className="mx-auto max-w-7xl">

        <SectionTitle
          eyebrow="About Me"
          title="Building Software with Purpose"
          description="A little more about my background, interests, and approach to software development."
        />

        <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">

          {/* Introduction */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 sm:p-9">

            <p className="text-sm font-medium uppercase tracking-[0.25em] text-cyan-400">
              Who I Am
            </p>

            <div className="mt-6 space-y-5 text-sm leading-8 text-gray-400">
              <p>
                I am an Information Science engineering graduate with
                hands-on experience in building AI-powered and web-based
                applications using technologies such as Java, Python,
                Flask, JavaScript, SQL, and MongoDB.
              </p>

              <p>
                During my internship at Mphasis, I contributed to an
                AI-powered enterprise log analysis application that
                combined Python, Flask, LLM integration, log parsing,
                normalization, pattern matching, and root-cause analysis.
              </p>

              <p>
                I enjoy solving practical problems through software and
                exploring technologies across artificial intelligence,
                backend development, web development, databases, and
                machine learning.
              </p>

              <p>
                My goal is to begin my career as a software developer,
                contribute to real-world products, and continuously
                strengthen my technical and problem-solving skills.
              </p>
            </div>

          </div>

          {/* Quick facts */}
          <div className="space-y-6">

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7">
              <p className="text-sm font-medium uppercase tracking-[0.25em] text-cyan-400">
                Education
              </p>

              <h3 className="mt-4 text-xl font-bold text-white">
                Bachelor of Engineering
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-500">
                MVJ College of Engineering, Bengaluru
              </p>

              <p className="mt-4 font-semibold text-cyan-400">
                CGPA: 7.75 / 10
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7">
              <p className="text-sm font-medium uppercase tracking-[0.25em] text-cyan-400">
                Experience
              </p>

              <h3 className="mt-4 text-xl font-bold text-white">
                Software Developer Intern
              </h3>

              <p className="mt-2 text-sm text-gray-500">
                Mphasis
              </p>

              <p className="mt-4 text-sm text-gray-400">
                Jan 2026 – Apr 2026
              </p>
            </div>

            <div className="rounded-3xl border border-cyan-400/15 bg-cyan-400/[0.03] p-7">
              <div className="flex items-center gap-3">
                <span className="h-2.5 w-2.5 rounded-full bg-cyan-400" />

                <p className="text-sm font-medium text-cyan-300">
                  Open to opportunities
                </p>
              </div>

              <p className="mt-4 text-sm leading-7 text-gray-500">
                Interested in software development, AI, backend,
                and web development opportunities.
              </p>
            </div>

          </div>

        </div>

        {/* Areas of interest */}
        <div className="mt-6 rounded-3xl border border-white/10 bg-white/[0.03] p-7 sm:p-9">

          <p className="text-sm font-medium uppercase tracking-[0.25em] text-cyan-400">
            Areas I Work With
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

            {[
              {
                title: "Artificial Intelligence",
                text: "LLMs, Ollama, machine learning, and AI-powered applications.",
                icon: "🤖",
              },
              {
                title: "Software Development",
                text: "Java, Python, problem solving, and application development.",
                icon: "💻",
              },
              {
                title: "Web Development",
                text: "React, JavaScript, Flask, HTML, CSS, and REST APIs.",
                icon: "🌐",
              },
              {
                title: "Databases",
                text: "SQL, MySQL, MongoDB, and database-backed applications.",
                icon: "🗄️",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/10 bg-black/30 p-5"
              >
                <div className="text-xl">
                  {item.icon}
                </div>

                <h3 className="mt-4 font-semibold text-white">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-500">
                  {item.text}
                </p>
              </div>
            ))}

          </div>
        </div>

        {/* CTA */}
        <div className="mt-6 flex flex-wrap gap-4">

          <Link
            to="/projects"
            className="rounded-xl bg-white px-6 py-3.5 font-semibold text-black transition hover:-translate-y-1 hover:bg-gray-200"
          >
            Explore My Projects →
          </Link>

          <Link
            to="/resume"
            className="rounded-xl border border-white/10 px-6 py-3.5 font-semibold text-gray-300 transition hover:-translate-y-1 hover:border-cyan-400/30 hover:text-cyan-400"
          >
            View Resume
          </Link>

          <Link
            to="/contact"
            className="rounded-xl border border-white/10 px-6 py-3.5 font-semibold text-gray-300 transition hover:-translate-y-1 hover:border-cyan-400/30 hover:text-cyan-400"
          >
            Contact Me
          </Link>

        </div>

      </div>
    </section>
  );
}

export default About;