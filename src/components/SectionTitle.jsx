function SectionTitle({ eyebrow, title, description }) {
  return (
    <div className="mb-12">
      {eyebrow && (
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
          {eyebrow}
        </p>
      )}

      <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>

      {description && (
        <p className="mt-4 max-w-2xl text-base leading-7 text-gray-400">
          {description}
        </p>
      )}
    </div>
  );
}

export default SectionTitle;