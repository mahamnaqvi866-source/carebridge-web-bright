import { createFileRoute, Link } from "@tanstack/react-router";
import { ShieldCheck, Award, HeartHandshake, Users, ArrowRight, CheckCircle2 } from "lucide-react";
import aboutImage from "../assets/about-team.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About CareBridge | Trusted NEMT Provider in San Bernardino, CA" },
      { name: "description", content: "Learn about CareBridge Medical Transport — a licensed, insured non-emergency medical transportation provider serving San Bernardino & Southern California for 5+ years." },
      { property: "og:title", content: "About CareBridge Medical Transport" },
      { property: "og:description", content: "5+ years of safe, compassionate NEMT services led by owner Michael Anderson." },
      { property: "og:image", content: aboutImage },
      { name: "twitter:image", content: aboutImage },
      { property: "og:url", content: "https://carebridge-web-bright.lovable.app/about" },
    ],
    links: [{ rel: "canonical", href: "https://carebridge-web-bright.lovable.app/about" }],
  }),
  component: AboutPage,
});

const badges = [
  { icon: ShieldCheck, title: "Licensed & Insured", desc: "Fully compliant California NEMT operator." },
  { icon: Award, title: "5+ Years Experience", desc: "Trusted by thousands of patients and care facilities." },
  { icon: HeartHandshake, title: "Compassionate Care", desc: "Door-through-door service with dignity and respect." },
  { icon: Users, title: "Trained Team", desc: "CPR & first-aid certified, background-checked drivers." },
];

function AboutPage() {
  return (
    <>
      <section className="bg-gradient-soft py-16 md:py-24">
        <div className="container-page text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent-foreground">About Us</span>
          <h1 className="mt-5 font-display text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground text-balance">About CareBridge Medical Transport</h1>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
            A locally owned non-emergency medical transportation company committed to safe, dignified, and on-time rides across Southern California.
          </p>
        </div>
      </section>

      <section className="container-page py-16 md:py-24 grid lg:grid-cols-2 gap-12 items-center">
        <img src={aboutImage} alt="CareBridge medical transport driver beside professional NEMT van" width={1024} height={768} loading="lazy" className="rounded-3xl shadow-card w-full h-auto object-cover aspect-[4/3]" />
        <div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-balance">Our Story</h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            Founded by Michael Anderson, <strong className="text-foreground">CareBridge Medical Transport</strong> was built on a simple belief: getting to medical care should never be the hardest part of someone's day. For over five years, our team has delivered <strong className="text-foreground">non-emergency medical transportation</strong> to seniors, dialysis patients, wheelchair users, and families throughout San Bernardino and the Inland Empire.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            From routine doctor appointments to recurring dialysis treatments, our <strong className="text-foreground">NEMT services</strong> combine modern, sanitized vehicles with trained, compassionate drivers — so every passenger arrives safely, comfortably, and on time.
          </p>
          <div className="mt-7 grid sm:grid-cols-2 gap-3">
            {["Door-through-door service", "Insurance billing accepted", "Wheelchair & stretcher capable", "Same-day scheduling available"].map((t) => (
              <div key={t} className="flex items-center gap-2.5 text-sm text-foreground"><CheckCircle2 className="h-5 w-5 text-primary shrink-0" /> {t}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-16 md:py-24">
        <div className="container-page">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-balance">Why families trust CareBridge</h2>
            <p className="mt-3 text-muted-foreground">Credentials, experience, and a culture of care.</p>
          </div>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {badges.map((b) => (
              <div key={b.title} className="rounded-2xl bg-card border border-border p-6 shadow-soft text-center">
                <div className="mx-auto h-14 w-14 rounded-2xl bg-accent flex items-center justify-center">
                  <b.icon className="h-7 w-7 text-primary" strokeWidth={2} />
                </div>
                <h3 className="mt-5 font-display text-base font-bold text-foreground">{b.title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-16">
        <div className="rounded-3xl bg-gradient-primary p-10 md:p-14 text-center shadow-glow">
          <h2 className="font-display text-3xl md:text-4xl font-extrabold text-primary-foreground text-balance">Ready to ride with confidence?</h2>
          <p className="mt-3 text-primary-foreground/85 max-w-xl mx-auto">Schedule a pickup or speak with our dispatch team today.</p>
          <div className="mt-7 flex flex-wrap gap-3 justify-center">
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-background px-7 py-3.5 text-sm font-semibold text-primary">Contact Us <ArrowRight className="h-4 w-4" /></Link>
            <Link to="/services" className="inline-flex items-center gap-2 rounded-full border-2 border-primary-foreground/40 px-7 py-3.5 text-sm font-semibold text-primary-foreground">View Services</Link>
          </div>
        </div>
      </section>
    </>
  );
}
