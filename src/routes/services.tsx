import { createFileRoute, Link } from "@tanstack/react-router";
import { Stethoscope, Activity, Accessibility, Heart, Hospital, Calendar, ArrowRight, Phone } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "NEMT Services | Wheelchair, Dialysis & Medical Transport | CareBridge" },
      { name: "description", content: "CareBridge NEMT services: wheelchair transportation, dialysis transport, doctor appointments, hospital discharge & elderly rides in San Bernardino, CA. Call (909) 555-7842." },
      { property: "og:title", content: "Our NEMT Services — CareBridge Medical Transport" },
      { property: "og:description", content: "Wheelchair-accessible, dialysis, doctor visit, and hospital discharge transportation across Southern California." },
      { property: "og:url", content: "https://carebridge-web-bright.lovable.app/services" },
    ],
    links: [{ rel: "canonical", href: "https://carebridge-web-bright.lovable.app/services" }],
  }),
  component: ServicesPage,
});

const services = [
  {
    icon: Stethoscope,
    title: "Doctor Appointment Transportation",
    desc: "Reliable, on-time rides to and from your physician, specialist, or outpatient clinic. Our drivers help with door-to-door assistance and wait times can be arranged for short visits.",
    features: ["Same-day & advance booking", "Door-through-door assistance", "Wait-and-return service available"],
  },
  {
    icon: Activity,
    title: "Dialysis Transport",
    desc: "Recurring, dependable medical transportation for dialysis patients. We coordinate weekly schedules so you never miss treatment, with trained drivers familiar with post-treatment care needs.",
    features: ["Recurring scheduling", "Trained dialysis-aware drivers", "Comfortable post-treatment ride"],
  },
  {
    icon: Accessibility,
    title: "Wheelchair Transportation",
    desc: "ADA-compliant wheelchair vans equipped with hydraulic lifts and four-point securement systems. Safe, comfortable wheelchair transportation across San Bernardino and Southern California.",
    features: ["Hydraulic lifts & ramps", "4-point safety securement", "Bariatric wheelchairs accommodated"],
  },
  {
    icon: Heart,
    title: "Elderly Care Rides",
    desc: "Compassionate non-emergency medical transportation for seniors, with patient drivers who provide gentle assistance from front door to appointment and back home safely.",
    features: ["Patient, courteous drivers", "Help with mobility aids", "Companion rider welcome"],
  },
  {
    icon: Hospital,
    title: "Hospital Discharge & Admission",
    desc: "Coordinated transport from hospitals or rehabilitation facilities to home, skilled nursing facilities, or follow-up care locations. We work directly with case managers.",
    features: ["Direct facility coordination", "Stretcher transport available", "Insurance billing supported"],
  },
  {
    icon: Calendar,
    title: "Recurring & Long-Distance",
    desc: "Standing-order rides for ongoing care, plus long-distance medical transport throughout California. Predictable scheduling and consistent driver assignments where possible.",
    features: ["Weekly/monthly recurring", "California-wide service", "Consistent driver matching"],
  },
];

function ServicesPage() {
  return (
    <>
      <section className="bg-gradient-soft py-16 md:py-24">
        <div className="container-page text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent-foreground">Our Services</span>
          <h1 className="mt-5 font-display text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground text-balance">Non-Emergency Medical Transportation Services</h1>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
            Comprehensive NEMT services tailored to every patient — from wheelchair transportation to dialysis transport across San Bernardino and California.
          </p>
        </div>
      </section>

      <section className="container-page py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((s) => (
            <article key={s.title} className="group rounded-3xl bg-card border border-border p-7 md:p-8 shadow-soft hover:shadow-card transition-all">
              <div className="flex items-start gap-5">
                <div className="h-14 w-14 rounded-2xl bg-accent flex items-center justify-center shrink-0 group-hover:bg-gradient-primary transition-colors">
                  <s.icon className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-colors" strokeWidth={2} />
                </div>
                <div>
                  <h2 className="font-display text-xl md:text-2xl font-bold text-foreground">{s.title}</h2>
                  <p className="mt-3 text-muted-foreground leading-relaxed">{s.desc}</p>
                  <ul className="mt-5 space-y-2">
                    {s.features.map((f) => (
                      <li key={f} className="flex items-center gap-2.5 text-sm text-foreground">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary" /> {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="container-page pb-20">
        <div className="rounded-3xl bg-gradient-primary p-10 md:p-14 text-center shadow-glow">
          <h2 className="font-display text-3xl md:text-4xl font-extrabold text-primary-foreground text-balance">Not sure which service fits?</h2>
          <p className="mt-3 text-primary-foreground/85 max-w-xl mx-auto">Call our dispatch team — we'll help you choose the right transport for your needs.</p>
          <div className="mt-7 flex flex-wrap gap-3 justify-center">
            <a href="tel:+19095557842" className="inline-flex items-center gap-2 rounded-full bg-background px-7 py-3.5 text-sm font-semibold text-primary"><Phone className="h-4 w-4" /> (909) 555-7842</a>
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border-2 border-primary-foreground/40 px-7 py-3.5 text-sm font-semibold text-primary-foreground">Book Online <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </section>
    </>
  );
}
