import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { domains, projects, skills } from "@/data/portfolio";

const pages: Record<string, { title: string; eyebrow: string; copy: string }> = {
  about: { title: "About", eyebrow: "Professional profile", copy: "A placeholder for the engineer’s professional narrative, principles and focus areas. Add verified personal background here—this template deliberately does not invent it." },
  "application-security": { title: "Application Security", eyebrow: "Secure delivery lifecycle", copy: "A practical program connects code assurance, testing, cloud posture and operational feedback to make risk visible before it becomes exposure." },
  skills: { title: "Skills", eyebrow: "Security capabilities", copy: "A structured matrix for application security engineering, automation and platform hardening." },
  projects: { title: "Projects", eyebrow: "Example case studies", copy: "Demonstration case-study frameworks. Replace with approved, anonymized evidence before presenting as personal work." },
  "security-labs": { title: "Security Labs", eyebrow: "Learning environment", copy: "A safe space to document reproducible lab work, defensive testing methods and lessons learned. Never place live credentials, targets, or exploit payloads here." },
  experience: { title: "Experience", eyebrow: "Professional history", copy: "Add verified roles, responsibilities and outcomes here. No employment history has been fabricated in this template." },
  certifications: { title: "Certifications", eyebrow: "Credentials", copy: "Add only earned certifications, issuer names and valid verification links. This portfolio currently makes no certification claims." },
  contact: { title: "Contact", eyebrow: "Secure communication", copy: "Use an approved, privacy-reviewed contact endpoint before collecting messages. The homepage demonstration form intentionally does not transmit data." }
};
export function generateStaticParams() { return Object.keys(pages).map(page => ({ page })); }
export default async function PortfolioPage({ params }: { params: Promise<{ page: string }> }) { const { page } = await params; const info = pages[page]; if (!info) notFound(); const cards = page === "application-security" || page === "security-labs" ? domains.map(d => ({ title: d.title, copy: d.summary })) : page === "projects" ? projects.map(p => ({ title: p[0], copy: p[2] })) : page === "skills" ? skills.map(s => ({ title: s, copy: "Capability represented in the portfolio." })) : []; return <><Header /><main><section className="bg-navy py-20 text-white"><div className="shell"><p className="eyebrow text-teal-300">{info.eyebrow}</p><h1 className="mt-4 text-5xl font-bold">{info.title}</h1><p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">{info.copy}</p></div></section>{cards.length > 0 && <section className="shell grid gap-5 py-16 md:grid-cols-2 lg:grid-cols-3">{cards.map(card => <article className="card" key={card.title}><h2 className="text-xl font-bold">{card.title}</h2><p className="mt-3 text-slate-600">{card.copy}</p></article>)}</section>}</main></>; }
