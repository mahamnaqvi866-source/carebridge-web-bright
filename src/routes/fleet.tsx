import { createFileRoute, Link } from "@tanstack/react-router";
import { ShieldCheck, Sparkles, Wrench, Phone, ArrowRight } from "lucide-react";
import sedanImg from "../assets/fleet-sedan.jpg";
import wheelchairImg from "../assets/fleet-wheelchair-van.jpg";
import stretcherImg from "../assets/fleet-stretcher.jpg";

export const Route = createFileRoute("/fleet")({
  head: () => ({
    meta: [
      { title: "Our Fleet | Wheelchair Vans & Stretcher Vehicles | CareBridge NEMT" },
      { name: "description", content: "Modern, sanitized fleet of wheelchair vans, stretcher vehicles, and standard medical transport sedans serving San Bernardino, CA. ADA-compliant & insured." },
      { property: "og:title", content: "CareBridge Fleet — Safe, Modern, Comfortable Vehicles" },
      { property: "og:description", content: "ADA-compliant wheelchair vans, stretcher transport, and standard sedans — all sanitized and inspected." },
      { property: "og:image", content: wheelchairImg },
      { name: "twitter:image", content: wheelchairImg },
      { property: "og:url", content: "https://carebridge-web-bright.lovable.app/fleet" },
    ],
    links: [{ rel: "canonical", href: "https://carebridge-web-bright.lovable.app/fleet" }],
  }),
  component: FleetPage,
});

const vehicles = [
  {
    image: sedanImg,
    title: "Standard Vehicles",
    desc: "Comfortable, climate-controlled sedans for ambulatory passengers attending routine medical appointments.",
    features: ["Spacious, climate-controlled cabin", "Up to 4 passenger seats", "Ideal for routine appointments", "Trained, courteous drivers"],
  },
  {
    image: wheelchairImg,
    title: "Wheelchair Accessible Vans",
    desc: "ADA-compliant vans with hydraulic lifts and four-point securement, designed for safe wheelchair transportation across California.",
    features: ["Hydraulic lift & low-floor ramp", "4-point wheelchair securement", "Accommodates motorized chairs", "Companion rider seating"],
  },
  {
    image: stretcherImg,
    title: "Stretcher Transport Vehicles",
    desc: "Specialized stretcher vehicles for non-ambulatory patients, including hospital discharge and inter-facility transfers.",
    features: ["Bariatric-capable stretcher", "Trained transport attendants", "Inter-facility transfers", "Direct case-manager coordination"],
  },
  {
    image: sedanImg,
    title: "Long Distance Vehicles",
    desc: "Comfortable, fuel-efficient vehicles equipped for long-distance non-emergency medical transport across California and neighboring states.",
    features: ["Extended-range comfort seating", "Rest-stop coordination", "Two-driver option for long trips", "Door-through-door service"],
  },
];

const standards = [
  { icon: ShieldCheck, title: "Inspected & Insured", desc: "Every vehicle undergoes regular safety inspections and carries full commercial insurance." },
  { icon: Sparkles, title: "Sanitized Between Rides", desc: "Hospital-grade disinfection between every passenger for your safety." },
  { icon: Wrench, title: "Maintained & Modern", desc: "Newer model vehicles on a strict preventative-maintenance schedule." },
];

function FleetPage() {
  return (
    <>
      <section className="bg-gradient-soft py-16 md:py-24">
        <div className="container-page text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent-foreground">Our Fleet</span>
          <h1 className="mt-5 font-display text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground text-balance">Our Fleet — Safe, Modern & Comfortable Vehicles</h1>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
            From wheelchair-accessible vans to stretcher transport, every CareBridge vehicle is inspected, sanitized, and ready to deliver a safe ride.
          </p>
        </div>
      </section>

      <section className="container-page py-16 md:py-24 space-y-10">
        {vehicles.map((v, i) => (
          <article key={v.title} className={`grid lg:grid-cols-2 gap-10 items-center ${i % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""}`}>
            <div>
              <img src={v.image} alt={`${v.title} — CareBridge medical transport vehicle`} width={1024} height={768} loading="lazy" className="rounded-3xl shadow-card w-full h-auto object-cover aspect-[4/3]" />
            </div>
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-balance">{v.title}</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">{v.desc}</p>
              <ul className="mt-6 grid sm:grid-cols-2 gap-2.5">
                {v.features.map((f) => (
                  <li key={f} className="flex items-center gap-2.5 text-sm text-foreground">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" /> {f}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </section>

      <section className="bg-surface py-16 md:py-24">
        <div className="container-page">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-balance">Our standards never change</h2>
            <p className="mt-3 text-muted-foreground">Every vehicle, every ride.</p>
          </div>
          <div className="mt-12 grid md:grid-cols-3 gap-5">
            {standards.map((s) => (
              <div key={s.title} className="rounded-2xl bg-card border border-border p-7 shadow-soft text-center">
                <div className="mx-auto h-14 w-14 rounded-2xl bg-accent flex items-center justify-center">
                  <s.icon className="h-7 w-7 text-primary" strokeWidth={2} />
                </div>
                <h3 className="mt-5 font-display text-lg font-bold text-foreground">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-20">
        <div className="rounded-3xl bg-gradient-primary p-10 md:p-14 text-center shadow-glow">
          <h2 className="font-display text-3xl md:text-4xl font-extrabold text-primary-foreground text-balance">Ready to book your ride?</h2>
          <div className="mt-7 flex flex-wrap gap-3 justify-center">
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-background px-7 py-3.5 text-sm font-semibold text-primary">Book Now <ArrowRight className="h-4 w-4" /></Link>
            <a href="tel:+19095557842" className="inline-flex items-center gap-2 rounded-full border-2 border-primary-foreground/40 px-7 py-3.5 text-sm font-semibold text-primary-foreground"><Phone className="h-4 w-4" /> (909) 555-7842</a>
          </div>
        </div>
      </section>
    </>
  );
}
