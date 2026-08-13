import { Link, useParams } from "react-router-dom";
import portfolioData from "../data/portfolioData";
import SectionTitle from "../components/SectionTitle";


function ProjectDetails() {
    const { projectId } = useParams();

    const project = portfolioData.projects.find(
        (item) => item.slug === projectId
    );

    if (!project) {
        return (
            <section className="min-h-screen bg-[#050505] px-6 pb-24 pt-32">
                <div className="mx-auto max-w-7xl">
                    <h1 className="text-4xl font-bold text-white">
                        Project not found
                    </h1>

                    <Link
                        to="/projects"
                        className="mt-6 inline-flex rounded-xl border border-white/10 px-5 py-3 text-sm text-gray-300 transition hover:border-white/30 hover:text-white"
                    >
                        ← Back to Projects
                    </Link>
                </div>
            </section>
        );
    }

    return (
        <section className="min-h-screen bg-[#050505] px-6 pb-24 pt-32">
            <div className="mx-auto max-w-7xl">

                {/* Back */}
                <Link
                    to="/projects"
                    className="mb-10 inline-flex items-center gap-2 text-sm text-gray-500 transition hover:text-cyan-400"
                >
                    ← Back to Projects
                </Link>

                {/* Header */}
                <SectionTitle
                    eyebrow="Project Details"
                    title={project.title}
                    description={project.description}
                />

                {/* Main content */}
                <div className="grid gap-6 lg:grid-cols-[1.5fr_0.8fr]">

                    {/* Left */}
                    <div className="space-y-6">

                        {/* Overview */}
                        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 sm:p-8">
                            <p className="text-sm font-medium uppercase tracking-[0.25em] text-cyan-400">
                                Overview
                            </p>

                            <p className="mt-5 text-base leading-8 text-gray-400">
                                {project.details}
                            </p>
                        </div>

                        {/* Problem */}
                        {project.problem && (
                            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 sm:p-8">
                                <p className="text-sm font-medium uppercase tracking-[0.25em] text-cyan-400">
                                    Problem
                                </p>

                                <p className="mt-5 text-base leading-8 text-gray-400">
                                    {project.problem}
                                </p>
                            </div>
                        )}

                        {/* Objective */}
                        {project.objective && (
                            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 sm:p-8">
                                <p className="text-sm font-medium uppercase tracking-[0.25em] text-cyan-400">
                                    Objective
                                </p>

                                <p className="mt-5 text-base leading-8 text-gray-400">
                                    {project.objective}
                                </p>
                            </div>
                        )}

                    </div>

                    {project.features && project.features.length > 0 && (
                        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 sm:p-8">
                            <p className="text-sm font-medium uppercase tracking-[0.25em] text-cyan-400">
                                Key Features
                            </p>

                            <div className="mt-6 grid gap-3 sm:grid-cols-2">
                                {project.features.map((feature) => (
                                    <div
                                        key={feature}
                                        className="flex items-center gap-3 rounded-xl border border-white/10 bg-black/30 px-4 py-3"
                                    >
                                        <span className="text-cyan-400">✓</span>

                                        <span className="text-sm text-gray-300">
                                            {feature}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Right */}
                    <div className="space-y-6">

                        {/* Technologies */}
                        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7">
                            <p className="text-sm font-medium uppercase tracking-[0.25em] text-cyan-400">
                                Technologies
                            </p>

                            <div className="mt-6 flex flex-wrap gap-2">
                                {project.technologies.map((technology) => (
                                    <span
                                        key={technology}
                                        className="rounded-xl border border-white/10 bg-black/40 px-3 py-2 text-sm text-gray-300"
                                    >
                                        {technology}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Source code */}
                        <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/[0.03] p-7">
                            <p className="text-sm font-medium uppercase tracking-[0.25em] text-cyan-400">
                                Source Code
                            </p>

                            <p className="mt-4 text-sm leading-6 text-gray-500">
                                Explore the complete project source code on GitHub.
                            </p>

                            <a
                                href={project.github}
                                target="_blank"
                                rel="noreferrer"
                                className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-white px-5 py-3.5 font-semibold text-black transition hover:-translate-y-1 hover:bg-gray-200"
                            >
                                View Source Code ↗
                            </a>
                        </div>

                    </div>

                </div>

                {/* Bottom */}
                <div className="mt-12 border-t border-white/10 pt-8">
                    <Link
                        to="/projects"
                        className="inline-flex rounded-xl border border-white/10 px-6 py-3.5 text-sm font-medium text-gray-300 transition hover:border-white/30 hover:text-white"
                    >
                        ← All Projects
                    </Link>
                </div>

            </div>
        </section>
    );
}

export default ProjectDetails;