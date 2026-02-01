export default function Section({ title, subtitle, children }) {
  return (
    <section className="py-8">
      <div className="mb-4">
        <h2 className="text-xl font-semibold">{title}</h2>
        {subtitle ? <p className="mt-1 text-sm text-white/70">{subtitle}</p> : null}
      </div>
      {children}
    </section>
  );
}
