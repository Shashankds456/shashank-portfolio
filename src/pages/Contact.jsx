import SectionTitle from "../components/SectionTitle";
import portfolioData from "../data/portfolioData";

function Contact() {
    const { personal } = portfolioData;
    return (
        <section className="min-h-screen bg-[#050505] px-6 pb-24 pt-32">
            <div className="mx-auto max-w-7xl">

                <SectionTitle
                    eyebrow="Get In Touch"
                    title="Let's Connect"
                    description="Have an opportunity, suggestion, question, or just want to say hello? Send me a message."
                />

                <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">

                    {/* Contact Form */}
                    <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 sm:p-9">

                        <div className="mb-8">
                            <p className="text-sm font-medium uppercase tracking-[0.25em] text-cyan-400">
                                Send a Message
                            </p>

                            <h2 className="mt-3 text-2xl font-bold text-white">
                                Have something to share?
                            </h2>

                            <p className="mt-3 text-sm leading-7 text-gray-500">
                                Fill out the form and I'll get back to you as soon as possible.
                            </p>
                        </div>

                        <form
                            action="https://formspree.io/f/mgawyrvd"
                            method="POST"
                            className="space-y-6"
                        >

                            {/* Name */}
                            <div>
                                <label
                                    htmlFor="name"
                                    className="mb-2 block text-sm font-medium text-gray-300"
                                >
                                    Name
                                </label>

                                <input
                                    id="name"
                                    type="text"
                                    name="name"
                                    required
                                    placeholder="Your name"
                                    className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3.5 text-white outline-none placeholder:text-gray-700 transition focus:border-cyan-400/40"
                                />
                            </div>

                            {/* Email */}
                            <div>
                                <label
                                    htmlFor="email"
                                    className="mb-2 block text-sm font-medium text-gray-300"
                                >
                                    Email
                                </label>

                                <input
                                    id="email"
                                    type="email"
                                    name="email"
                                    required
                                    placeholder="your@email.com"
                                    className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3.5 text-white outline-none placeholder:text-gray-700 transition focus:border-cyan-400/40"
                                />
                            </div>

                            {/* Subject */}
                            <div>
                                <label
                                    htmlFor="subject"
                                    className="mb-2 block text-sm font-medium text-gray-300"
                                >
                                    Subject
                                </label>

                                <input
                                    id="subject"
                                    type="text"
                                    name="subject"
                                    placeholder="Job opportunity / Suggestion / Hello"
                                    className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3.5 text-white outline-none placeholder:text-gray-700 transition focus:border-cyan-400/40"
                                />
                            </div>

                            {/* Message */}
                            <div>
                                <label
                                    htmlFor="message"
                                    className="mb-2 block text-sm font-medium text-gray-300"
                                >
                                    Message
                                </label>

                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    rows="6"
                                    placeholder="Write your message here..."
                                    className="w-full resize-none rounded-xl border border-white/10 bg-black/40 px-4 py-3.5 text-white outline-none placeholder:text-gray-700 transition focus:border-cyan-400/40"
                                />
                            </div>

                            {/* Submit */}
                            <button
                                type="submit"
                                className="inline-flex w-full items-center justify-center rounded-xl bg-white px-6 py-3.5 font-semibold text-black transition hover:-translate-y-1 hover:bg-gray-200"
                            >
                                Send Message →
                            </button>

                            <p className="text-center text-xs text-gray-600">
                                Your message will be sent securely through the contact form.
                            </p>

                        </form>
                    </div>

                    {/* Contact Information */}
                    <div className="space-y-5">

                        {/* Email */}
                        <a
                            href={`mailto:${personal.email}`}
                            className="block rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition hover:-translate-y-1 hover:border-cyan-400/30"
                        >
                            <p className="text-sm uppercase tracking-[0.25em] text-cyan-400">
                                Email
                            </p>

                            <p className="mt-4 text-lg font-semibold text-white">
                                {personal.email}
                            </p>

                            <p className="mt-2 text-sm text-gray-500">
                                Send me an email directly →
                            </p>
                        </a>

                        <a
                            href={`tel:${personal.phone}`}
                            className="block rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition hover:-translate-y-1 hover:border-cyan-400/30"
                        >
                            <p className="text-sm uppercase tracking-[0.25em] text-cyan-400">
                                Phone
                            </p>

                            <p className="mt-4 text-lg font-semibold text-white">
                                {personal.phone}
                            </p>

                            <p className="mt-2 text-sm text-gray-500">
                                Call me directly →
                            </p>
                        </a>

                        {/* LinkedIn */}
                        <a
                            href="https://www.linkedin.com/in/shashank3041/"
                            target="_blank"
                            rel="noreferrer"
                            className="block rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition hover:-translate-y-1 hover:border-cyan-400/30"
                        >
                            <p className="text-sm uppercase tracking-[0.25em] text-cyan-400">
                                LinkedIn
                            </p>

                            <p className="mt-4 text-lg font-semibold text-white">
                                Connect with me
                            </p>

                            <p className="mt-2 text-sm text-gray-500">
                                View my professional profile →
                            </p>
                        </a>

                        {/* GitHub */}
                        <a
                            href="https://github.com/Shashankds456"
                            target="_blank"
                            rel="noreferrer"
                            className="block rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition hover:-translate-y-1 hover:border-cyan-400/30"
                        >
                            <p className="text-sm uppercase tracking-[0.25em] text-cyan-400">
                                GitHub
                            </p>

                            <p className="mt-4 text-lg font-semibold text-white">
                                Shashankds456
                            </p>

                            <p className="mt-2 text-sm text-gray-500">
                                Explore my projects and source code →
                            </p>
                        </a>

                        {/* Availability */}
                        <div className="rounded-3xl border border-cyan-400/15 bg-cyan-400/[0.03] p-7">

                            <div className="flex items-center gap-3">
                                <span className="h-2.5 w-2.5 rounded-full bg-cyan-400" />

                                <p className="text-sm font-medium text-cyan-300">
                                    Open to opportunities
                                </p>
                            </div>

                            <p className="mt-4 text-sm leading-7 text-gray-500">
                                Currently interested in software development,
                                AI, and web development opportunities.
                            </p>

                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
}

export default Contact;