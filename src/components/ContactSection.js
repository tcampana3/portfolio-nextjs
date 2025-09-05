"use client";
import { useState } from "react";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  // Opens Gmail compose (prefilled). Falls back to mailto if popup is blocked.
  const onSubmit = (e) => {
    e.preventDefault();
    const to = "tony.campana.332@gmail.com";
    const su = encodeURIComponent(form.subject || `Message from ${form.name || "Portfolio"}`);
    const body = encodeURIComponent(`From: ${form.name} <${form.email}>\n\n${form.message}`);
    const gmailURL = `https://mail.google.com/mail/?view=cm&fs=1&to=${to}&su=${su}&body=${body}`;
    const mailtoURL = `mailto:${to}?subject=${su}&body=${body}`;
    const win = window.open(gmailURL, "_blank", "noopener,noreferrer");
    if (!win) window.location.href = mailtoURL;
  };

  return (
    <section id="contact" className="mb-12">
      <div
        className="rounded-2xl p-8 border shadow-sm"
        style={{ background: "var(--card)", borderColor: "var(--border)" }}
      >
        <h2 className="text-2xl font-semibold text-center mb-2">
          Get In Touch
        </h2>
        <p className="text-center text-sm" style={{ color: "var(--muted)" }}>
          Feel free to reach out if you're looking for a developer, have a
          question, or just want to connect.
        </p>

        <div className="mt-8 grid gap-8 md:grid-cols-2">
          {/* Left: Contact info */}
          <div className="space-y-6">
            <InfoRow
              icon="mail"
              title="Email"
              text="tony.campana.332@gmail.com"
              href="mailto:tony.campana.332@gmail.com"
            />
            {/* Optional Phone
            <InfoRow icon="phone" title="Phone" text="(224) 828-8681" href="tel:+12248288681" />
            */}
            <InfoRow icon="pin" title="Location" text="Huntley, IL, USA" />

            <div>
              <h3 className="font-semibold mb-3">Connect With Me</h3>
              <div className="flex items-center gap-3">
                <Social
                  href="https://github.com/tcampana3"
                  label="GitHub"
                  imgSrc="images/github_logo.png" // put your logo file in /public/images
                />
                <Social
                  href="https://www.linkedin.com/in/anthony-campana-5b7684253"
                  label="LinkedIn"
                  imgSrc="images/linkedin_logo.webp" // put your logo file in /public/images
                />
                {/* Add more:
                <Social href="https://x.com/yourhandle" label="X" imgSrc="/images/x.png" />
                <Social href="https://instagram.com/yourhandle" label="Instagram" imgSrc="/images/instagram.png" />
                */}
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <form onSubmit={onSubmit} className="grid gap-3">
            <div className="grid sm:grid-cols-2 gap-3">
              <Field label="Name">
                <input
                  name="name"
                  value={form.name}
                  onChange={update}
                  className="w-full rounded-md border px-3 py-2"
                  style={{
                    borderColor: "var(--border)",
                    background: "transparent",
                  }}
                  placeholder="Your name"
                  required
                />
              </Field>
              <Field label="Email">
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={update}
                  className="w-full rounded-md border px-3 py-2"
                  style={{
                    borderColor: "var(--border)",
                    background: "transparent",
                  }}
                  placeholder="you@example.com"
                  required
                />
              </Field>
            </div>

            <Field label="Subject">
              <input
                name="subject"
                value={form.subject}
                onChange={update}
                className="w-full rounded-md border px-3 py-2"
                style={{
                  borderColor: "var(--border)",
                  background: "transparent",
                }}
                placeholder="What's this about?"
              />
            </Field>

            <Field label="Message">
              <textarea
                name="message"
                value={form.message}
                onChange={update}
                rows={6}
                className="w-full rounded-md border px-3 py-2"
                style={{
                  borderColor: "var(--border)",
                  background: "transparent",
                }}
                placeholder="Say hello…"
                required
              />
            </Field>

            <button
              type="submit"
              className="mt-1 inline-flex justify-center rounded-lg px-4 py-2 text-white"
              style={{ background: "var(--accent)" }}
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

/* ---------- tiny helpers ---------- */

function Field({ label, children }) {
  return (
    <label className="text-sm">
      <span className="block mb-1 font-medium">{label}</span>
      {children}
    </label>
  );
}

function InfoRow({ icon, title, text, href }) {
  return (
    <div className="flex items-start gap-3">
      <Icon kind={icon} />
      <div>
        <div className="font-medium">{title}</div>
        {href ? (
          <a
            className="underline text-[var(--accent)]"
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
          >
            {text}
          </a>
        ) : (
          <div>{text}</div>
        )}
      </div>
    </div>
  );
}

function Social({ href, label, imgSrc }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      title={label}
      aria-label={label}
      className="h-9 w-9 grid place-items-center rounded-full border hover:opacity-80 transition bg-white"
      style={{ borderColor: "var(--border)" }}
    >
      <img src={imgSrc} alt={label} className="h-5 w-5 object-contain" />
    </a>
  );
}

function Icon({ kind }) {
  const common = "h-10 w-10 rounded-full grid place-items-center";
  const dot = { background: "var(--accent)", color: "#fff" };
  if (kind === "mail") return <div className={common} style={dot}>✉️</div>;
  if (kind === "phone") return <div className={common} style={dot}>📞</div>;
  if (kind === "pin") return <div className={common} style={dot}>📍</div>;
  return <div className={common} style={dot}>•</div>;
}
