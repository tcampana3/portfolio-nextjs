export default function ExperienceCard({ e }) {
  return (
    <article
      className="rounded-2xl p-5 border shadow-sm"
      style={{ background: "var(--card)", borderColor: "var(--border)" }}
    >
      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
        <h3 className="text-lg font-medium">{e.company}</h3>
        <span className="text-xs" style={{ color: "var(--muted)" }}>{e.period}</span>
      </div>
      <p className="text-sm" style={{ color: "var(--muted)" }}>{e.title}</p>
      <ul className="list-disc ms-5 mt-3 space-y-1.5 text-sm">
        {e.bullets.map((b, i) => <li key={i}>{b}</li>)}
      </ul>
    </article>
  );
}
