export default function Section({ title, children }) {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-semibold mb-6 text-slate-900 dark:text-[var(--text)]">{title}</h2>
      <div className="grid gap-6">{children}</div>
    </section>
  );
}
