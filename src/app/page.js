import Section from "@/components/Section";
import ContactSection from "@/components/ContactSection";
import Link from "next/link";
import Image from "next/image";
import { withBasePath } from "@/components/withBasePath";

export default function AboutPage() {
  return (
    <>
      {/* HERO — goes first */}
      <section className="mb-10">
        <div
          className="rounded-2xl p-8 border shadow-sm bg-[var(--card)] flex flex-col items-center text-center"
          style={{ borderColor: "var(--border)" }}
        >
          {/* Headshot */}
          <Image
            src={withBasePath("/images/profile.JPG")}
            alt="Anthony Campana headshot"
            width={128}
            height={128}
            className="rounded-full object-cover shadow-md mb-4"
          />

          {/* Name & title */}
          <h1 className="text-3xl md:text-4xl font-semibold">
            Anthony Campana
          </h1>
          <p className="mt-2 text-lg text-slate-600 dark:text-[var(--muted)]">
            Software Engineer
          </p>

          {/* CTAs */}
          <div className="mt-6 flex gap-3">
            <Link
              href="/projects"
              className="px-4 py-2 rounded-lg text-white"
              style={{ background: "var(--accent)" }}
            >
              View Projects
            </Link>
            <Link
              href="/#contact"
              className="px-4 py-2 rounded-lg border"
              style={{ borderColor: "var(--border)" }}
            >
              Contact
            </Link>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <Section title="About Me">
        <div
          className="rounded-2xl p-6 border shadow-sm"
          style={{ background: "var(--card)", borderColor: "var(--border)" }}
        >
          {/* Everything inside this card is the new grid */}
          <div className="grid gap-6">
            {/* Contact lines */}
            <div>
              <p>
                Email:{" "}
                <a
                  className="underline text-[var(--accent)]"
                  href="mailto:tony.campana.332@gmail.com"
                >
                  tony.campana.332@gmail.com
                </a>
              </p>
              <p>
                LinkedIn:{" "}
                <a
                  className="underline text-[var(--accent)]"
                  href="https://www.linkedin.com/in/anthony-campana-5b7684253"
                  target="_blank"
                >
                  linkedin.com/in/anthony-campana
                </a>
              </p>
              <p>
                GitHub:{" "}
                <a
                  className="underline text-[var(--accent)]"
                  href="https://github.com/tcampana3"
                  target="_blank"
                >
                  github.com/tcampana3
                </a>
              </p>
            </div>

            {/* Intro */}
            <div>
              <h2 className="text-xl font-semibold">About Me</h2>
              <p className="mt-2">
                I am a Computer Science senior at Iowa State University graduating 
                in December 2025 and actively seeking a full time Software Engineering position starting in early 2026. 
                I have experience with backend, frontend, and full stack applications and websites. My background includes class projects, 
                personal projects, and internships where I’ve applied software development skills in practical settings.
              </p>
            </div>

            {/* Technical Skills */}
            <div>
              <h3 className="text-lg font-semibold">Technical Skills</h3>
              <p className="mt-1">
                <strong>Languages:</strong> Python, Java, C, C++, JavaScript,
                HTML, CSS, R
              </p>
              <p>
                <strong>Frameworks and Libraries:</strong> Next.js, Spring Boot,
                React, Node.js, Express.js, Bootstrap, Tailwind
              </p>
              <p>
                <strong>Databases:</strong> MongoDB, MySQL
              </p>
              <p>
                <strong>Cloud and Tools:</strong> AWS (S3, EC2, CloudWatch,
                Secrets Manager), Azure (Functions, Key Vault), Git, Agile Scrum
              </p>
            </div>

            {/* Experience highlights */}
            <div>
              <h3 className="text-lg font-semibold">Highlights</h3>
              <ul className="list-disc ms-5 mt-2 space-y-1.5">
                <li>
                  At Motorola, built AWS automation with logs, metrics, and
                  alarms, and later engineered an on prem file share to reduce
                  storage spend at about 15 TB scale.
                </li>
                <li>
                  At Kingland, led a 15 person analyst team and mentored five
                  directly, raising quality by about 10 to 20 percent.
                </li>
              </ul>
            </div>

            {/* Strengths */}
            <div>
              <h3 className="text-lg font-semibold">Strengths</h3>
              <p className="mt-1">
                I have a solid foundation in data structures, algorithms, object oriented programming, and object oriented analysis and design. 
                I learn quickly, pick up new tools when needed, and I don’t mind digging into documentation or debugging until I solve a problem. 
                I enjoy working with others through mentoring and collaboration, but I am also comfortable working independently to deliver results. 
                My coursework at Iowa State has given me experience across the full development process, including gathering requirements, creating diagrams, designing, building, and reviewing software.
              </p>
            </div>

            {/* What's Next */}
            <div>
              <h3 className="text-lg font-semibold">What’s Next</h3>
              <p className="mt-1">
                I am seeking a full time software engineering role beginning in 2026 with interest 
                in backend and full stack development. I want to continue growing my skills, 
                contribute to teams that build useful and reliable applications, and help ship features that make an impact.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* CONTACT */}
      <ContactSection />
    </>
  );
}
