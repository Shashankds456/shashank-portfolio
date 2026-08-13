import portfolioData from "../data/portfolioData";

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black px-6 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">

        <div>
          <p className="text-lg font-bold tracking-wider text-white">
            {portfolioData.personal.name}
          </p>

          <p className="mt-1 text-sm text-gray-500">
            Software Developer • AI • Web Development
          </p>
        </div>

        <div className="flex items-center gap-5 text-sm">
          <a
            href={`mailto:${portfolioData.personal.email}`}
            className="text-gray-400 transition hover:text-white"
          >
            Email
          </a>

          <a
            href={portfolioData.personal.linkedin}
            target="_blank"
            rel="noreferrer"
            className="text-gray-400 transition hover:text-white"
          >
            LinkedIn ↗
          </a>

          <a
            href={portfolioData.personal.github}
            target="_blank"
            rel="noreferrer"
            className="text-gray-400 transition hover:text-white"
          >
            GitHub ↗
          </a>
        </div>
      </div>

      <div className="mx-auto mt-8 max-w-7xl border-t border-white/5 pt-6 text-center">
        <p className="text-xs text-gray-600">
          © {new Date().getFullYear()} {portfolioData.personal.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;