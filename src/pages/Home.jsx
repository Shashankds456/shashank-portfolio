import { Link } from "react-router-dom";
import portfolioData from "../data/portfolioData";

function Home() {
    const { personal, summary, projects } = portfolioData;

    return (
        <section className="relative min-h-screen overflow-hidden bg-[#050505]">
            {/* Background glow */}
            <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[120px]" />

            <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-6 pb-20 pt-32">
                <div className="grid w-full items-center gap-16 lg:grid-cols-[1.2fr_0.8fr]">

                    {/* Left side */}
                    <div>
                        {/* Status */}
                        <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2">
                            <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />

                            <span className="text-sm text-gray-400">
                                Available for Software Developer opportunities
                            </span>
                        </div>

                        {/* Introduction */}
                        <p className="mb-4 text-sm font-medium uppercase tracking-[0.35em] text-cyan-400">
                            Hello, I'm
                        </p>

                        <h1 className="font-serif text-4xl font-bold tracking-wide text-white sm:text-5xl lg:text-6xl">
                            {personal.name}
                        </h1>

                        <div className="mt-6 flex flex-wrap items-center gap-3 text-xl text-gray-300 sm:text-2xl">
                            <span>Software Developer</span>
                            <span className="text-cyan-400">•</span>
                            <span>Software Testing</span>
                            
                        </div>

                        <p className="mt-8 max-w-2xl text-base leading-8 text-gray-400 sm:text-lg">
                            {summary}
                        </p>

                        {/* Buttons */}
                        <div className="mt-10 flex flex-wrap gap-4">
                            <Link
                                to="/work"
                                className="rounded-xl bg-white px-6 py-3.5 font-semibold text-black transition hover:-translate-y-1 hover:bg-gray-200"
                            >
                                Explore My Work →
                            </Link>

                            <Link
                                to="/resume"
                                className="rounded-xl border border-white/15 bg-white/[0.03] px-6 py-3.5 font-semibold text-white transition hover:-translate-y-1 hover:border-white/30 hover:bg-white/[0.07]"
                            >
                                View Resume
                            </Link>
                        </div>

                        {/* Social links */}
                        <div className="mt-8 flex items-center gap-6">
                            <a
                                href={personal.github}
                                target="_blank"
                                rel="noreferrer"
                                className="text-sm text-gray-500 transition hover:text-white"
                            >
                                GitHub ↗
                            </a>

                            <a
                                href={personal.linkedin}
                                target="_blank"
                                rel="noreferrer"
                                className="text-sm text-gray-500 transition hover:text-white"
                            >
                                LinkedIn ↗
                            </a>

                            <a
                                href={`mailto:${personal.email}`}
                                className="text-sm text-gray-500 transition hover:text-white"
                            >
                                Email ↗
                            </a>

                            <a
                                href={`tel:${personal.phone}`}
                                className="text-sm text-gray-500 transition hover:text-white"
                            >
                                Call ↗
                            </a>
                        </div>
                    </div>

                    {/* Right side */}
                    <div className="relative">
                        <div className="relative mx-auto max-w-md">

                            {/* Main card */}
                            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 shadow-2xl backdrop-blur-xl">

                                {/* Card header */}
                                <div className="flex items-center justify-between border-b border-white/10 pb-5">
                                    <div>
                                        <p className="text-xs uppercase tracking-[0.25em] text-gray-500">
                                            Developer Profile
                                        </p>

                                        <p className="mt-2 text-lg font-semibold text-white">
                                            SHASHANK D S
                                        </p>
                                    </div>

                                    <div className="flex gap-1.5">
                                        <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                                        <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
                                        <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
                                    </div>
                                </div>

                                {/* Profile details */}
                                <div className="space-y-4 py-6">

                                    <div className="rounded-2xl border border-white/5 bg-black/40 p-4">
                                        <p className="text-xs text-gray-500">
                                            CURRENT FOCUS
                                        </p>

                                        <p className="mt-2 text-sm font-medium text-white">
                                            AI-powered & web-based applications
                                        </p>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">

                                        <div className="rounded-2xl border border-white/5 bg-black/40 p-4">
                                            <p className="text-2xl font-bold text-white">
                                                {String(projects.length).padStart(2, "0")}
                                            </p>

                                            <p className="mt-1 text-xs text-gray-500">
                                                Featured Projects
                                            </p>
                                        </div>

                                        <div className="rounded-2xl border border-white/5 bg-black/40 p-4">
                                            <p className="text-2xl font-bold text-white">
                                                AI
                                            </p>

                                            <p className="mt-1 text-xs text-gray-500">
                                                LLM Experience
                                            </p>
                                        </div>

                                    </div>

                                    <div className="rounded-2xl border border-cyan-400/10 bg-cyan-400/[0.03] p-4">
                                        <div className="flex items-center gap-3">
                                            <span className="h-2 w-2 rounded-full bg-cyan-400" />

                                            <span className="text-sm text-gray-300">
                                                Software Developer Intern
                                            </span>
                                        </div>

                                        <p className="mt-2 text-xs text-gray-500">
                                            Mphasis • Jan 2026 – Apr 2026
                                        </p>
                                    </div>

                                </div>

                                {/* Technologies */}
                                <div className="border-t border-white/10 pt-5">
                                    <p className="mb-3 text-xs uppercase tracking-[0.2em] text-gray-500">
                                        Technologies
                                    </p>

                                    <div className="flex flex-wrap gap-2">
                                        {[
                                            "Java",
                                            "Python",
                                            "Flask",
                                            "JavaScript",
                                            "SQL",
                                            "React.js",
                                            "LLMs",
                                        ].map((technology) => (
                                            <span
                                                key={technology}
                                                className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-gray-400"
                                            >
                                                {technology}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                            </div>

                            {/* Decorative element */}
                            <div className="absolute -bottom-5 -right-5 -z-10 h-32 w-32 rounded-full bg-cyan-500/10 blur-3xl" />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Home;