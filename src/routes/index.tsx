import { createFileRoute, Link } from "@tanstack/react-router";
import { Phone, ArrowRight, Stethoscope, Activity, Accessibility, Heart, Clock, ShieldCheck, Sparkles, DollarSign, Car, Truck, Ambulance, CheckCircle2, MapPin, Mail } from "lucide-react";
import heroImage from "../assets/hero-transport.jpg";
import aboutImage from "../assets/about-team.jpg";
import { BookingForm } from "../components/site/BookingForm";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CareBridge Medical Transport | Safe NEMT in San Bernardino, CA" },
      { name: "description", content: "Safe, reliable non-emergency medical transportation. Wheelchair vans, dialysis transport, doctor appointments across San Bernardino & Southern California. Call (909) 555-7842." },
      { property: "og:title", content: "CareBridge Medical Transport — Safe Rides You Can Trust" },
      { property: "og:description", content: "Licensed & insured NEMT serving San Bernardino. Book a wheelchair, dialysis, or doctor-visit ride today." },
    ],
  }),
  component: HomePage,
});

const services = [
  { icon: Stethoscope, title: "Doctor Appointments", desc: "On-time rides to your physician, specialist, or clinic." },
  { icon: Activity, title: "Dialysis Transport", desc: "Reliable recurring transportation for treatment days." },
  { icon: Accessibility, title: "Wheelchair Transportation", desc: "ADA-compliant vans with hydraulic lifts and trained staff." },
  { icon: Heart, title: "Elderly Care Rides", desc: "Compassionate door-through-door service for seniors." },
];

const reasons = [
  { icon: Clock, title: "On-Time Pickups", desc: "Punctual scheduling you can count on, every single ride." },
  { icon: ShieldCheck, title: "Professional Drivers", desc: "Background-checked, CPR & first-aid certified team." },
  { icon: Sparkles, title: "Clean & Sanitized", desc: "Every vehicle disinfected between each passenger." },
  { icon: DollarSign, title: "Affordable Pricing", desc: "Transparent rates with insurance billing available." },
];

const fleet = [
  { icon: Car, title: "Standard Vehicles", desc: "Comfortable sedans for ambulatory passengers." },
  { icon: Truck, title: "Wheelchair Vans", desc: "Hydraulic lifts, secure tie-downs, ADA compliant." },
  { icon: Ambulance, title: "Stretcher Vehicles", desc: "Bariatric-capable stretcher transport with attendants." },
];

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-soft">
        <div className="absolute inset-0 -z-10 opacity-40">
          <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute top-1/3 -left-32 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
        </div>
        <div className="container-page py-14 md:py-24 grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent-foreground">
              <ShieldCheck className="h-3.5 w-3.5" /> Licensed & Insured NEMT
            </span>
            <h1 className="mt-5 font-display text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-[1.05] text-balance">
              Safe, Reliable Non-Emergency Medical Transportation in California
            </h1>
            <p className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl">
              Providing safe, comfortable, and on-time medical transportation for seniors, patients, and individuals with mobility needs.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-soft hover:shadow-glow hover:-translate-y-0.5 transition-all">
                Book a Ride <ArrowRight className="h-4 w-4" />
              </Link>
              <a href="tel:+19095557842" className="inline-flex items-center gap-2 rounded-full border-2 border-primary/20 bg-background px-7 py-3.5 text-sm font-semibold text-primary hover:bg-accent transition-colors">
                <Phone className="h-4 w-4" /> Call Now
              </a>
            </div>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-foreground">
              {["Licensed & Insured", "On-Time Service", "Professional Drivers"].map((t) => (
                <span key={t} className="inline-flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" /> {t}
                </span>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-primary rounded-3xl opacity-20 blur-2xl" />
            <img
              src={heroImage}
              alt="Caring medical transport professional helping an elderly patient into a wheelchair-accessible van"
              width={1280}
              height={960}
              className="relative rounded-3xl shadow-card w-full h-auto object-cover aspect-[4/3]"
              fetchPriority="high"
            />
            <div className="absolute -bottom-6 -left-6 hidden md:flex bg-background rounded-2xl shadow-card p-4 gap-3 items-center max-w-[240px]">
              <div className="h-12 w-12 rounded-full bg-accent flex items-center justify-center">
                <Heart className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Trusted by</p>
                <p className="font-display font-bold text-foreground">10,000+ Riders</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="container-page py-20 md:py-28">
        <div className="max-w-2xl mx-auto text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-primary">What we do</span>
          <h2 className="mt-2 font-display text-3xl md:text-4xl font-bold text-foreground text-balance">Our Services</h2>
          <p className="mt-3 text-muted-foreground">Comprehensive non-emergency medical transportation tailored to every patient's needs.</p>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s) => (
            <article key={s.title} className="group rounded-2xl bg-card border border-border p-6 shadow-soft hover:shadow-card hover:-translate-y-1 transition-all">
              <div className="h-12 w-12 rounded-xl bg-accent flex items-center justify-center group-hover:bg-gradient-primary transition-colors">
                <s.icon className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors" strokeWidth={2} />
              </div>
              <h3 className="mt-5 font-display text-lg font-bold text-foreground">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </article>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link to="/services" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all">
            View all services <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-surface py-20 md:py-28">
        <div className="container-page">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-primary">Why CareBridge</span>
            <h2 className="mt-2 font-display text-3xl md:text-4xl font-bold text-foreground text-balance">A higher standard of care, every ride</h2>
          </div>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {reasons.map((r) => (
              <div key={r.title} className="rounded-2xl bg-card border border-border p-6 shadow-soft">
                <r.icon className="h-8 w-8 text-primary" strokeWidth={2} />
                <h3 className="mt-4 font-display text-base font-bold text-foreground">{r.title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="container-page py-20 md:py-28 grid lg:grid-cols-2 gap-12 items-center">
        <img src={aboutImage} alt="Friendly CareBridge driver in uniform standing beside transport van" width={1024} height={768} loading="lazy" className="rounded-3xl shadow-card w-full h-auto object-cover aspect-[4/3]" />
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-primary">About us</span>
          <h2 className="mt-2 font-display text-3xl md:text-4xl font-bold text-foreground text-balance">Compassionate care, dependable rides</h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            For over five years, CareBridge Medical Transport has been the trusted partner of families, hospitals, and care facilities across San Bernardino. Our mission is simple: deliver safe, dignified, and on-time NEMT services so patients never miss the care they need.
          </p>
          <ul className="mt-6 space-y-2.5">
            {["Owner-operated by Michael Anderson", "Fully licensed & insured in California", "Insurance & private-pay accepted"].map((t) => (
              <li key={t} className="flex items-start gap-2.5 text-sm text-foreground">
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" /> {t}
              </li>
            ))}
          </ul>
          <Link to="/about" className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-soft hover:shadow-glow transition-all">
            Learn More <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* FLEET PREVIEW */}
      <section className="bg-surface py-20 md:py-28">
        <div className="container-page">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-primary">Our fleet</span>
            <h2 className="mt-2 font-display text-3xl md:text-4xl font-bold text-foreground text-balance">Modern vehicles for every need</h2>
          </div>
          <div className="mt-12 grid sm:grid-cols-3 gap-5">
            {fleet.map((f) => (
              <div key={f.title} className="rounded-2xl bg-card border border-border p-6 shadow-soft hover:shadow-card transition-all">
                <f.icon className="h-10 w-10 text-primary" strokeWidth={1.75} />
                <h3 className="mt-4 font-display text-lg font-bold text-foreground">{f.title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Link to="/fleet" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all">
              View Full Fleet <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-page py-20">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-primary p-10 md:p-16 text-center shadow-glow">
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle at 20% 20%, white 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
          <div className="relative">
            <h2 className="font-display text-3xl md:text-5xl font-extrabold text-primary-foreground text-balance">Need a Ride? We're Here to Help</h2>
            <p className="mt-4 text-primary-foreground/85 max-w-xl mx-auto">Book your next medical transport in minutes — or call our dispatch team directly.</p>
            <div className="mt-8 flex flex-wrap gap-3 justify-center">
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-background px-7 py-3.5 text-sm font-semibold text-primary hover:bg-background/90 transition-colors">
                Book Now <ArrowRight className="h-4 w-4" />
              </Link>
              <a href="tel:+19095557842" className="inline-flex items-center gap-2 rounded-full border-2 border-primary-foreground/40 px-7 py-3.5 text-sm font-semibold text-primary-foreground hover:bg-primary-foreground/10 transition-colors">
                <Phone className="h-4 w-4" /> (909) 555-7842
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT PREVIEW */}
      <section className="container-page pb-20 grid lg:grid-cols-2 gap-12">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-primary">Get in touch</span>
          <h2 className="mt-2 font-display text-3xl md:text-4xl font-bold text-foreground text-balance">Schedule your ride today</h2>
          <p className="mt-3 text-muted-foreground">Reach our dispatch team — we'll confirm pickup details within minutes.</p>
          <ul className="mt-8 space-y-5">
            <li className="flex gap-4"><div className="h-11 w-11 rounded-xl bg-accent flex items-center justify-center"><Phone className="h-5 w-5 text-primary" /></div><div><p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">Phone</p><a href="tel:+19095557842" className="font-display text-lg font-bold text-foreground hover:text-primary">(909) 555-7842</a></div></li>
            <li className="flex gap-4"><div className="h-11 w-11 rounded-xl bg-accent flex items-center justify-center"><Mail className="h-5 w-5 text-primary" /></div><div><p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">Email</p><a href="mailto:info@carebridgemedical.com" className="font-display text-lg font-bold text-foreground hover:text-primary break-all">info@carebridgemedical.com</a></div></li>
            <li className="flex gap-4"><div className="h-11 w-11 rounded-xl bg-accent flex items-center justify-center"><MapPin className="h-5 w-5 text-primary" /></div><div><p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">Office</p><p className="font-display text-base font-semibold text-foreground">1250 Medical Center Dr, Suite 210<br />San Bernardino, CA 92411</p></div></li>
          </ul>
        </div>
        <div className="rounded-3xl bg-card border border-border p-6 md:p-8 shadow-card">
          <h3 className="font-display text-xl font-bold text-foreground mb-1">Request a Ride</h3>
          <p className="text-sm text-muted-foreground mb-6">Fill out the form and we'll reach out promptly.</p>
          <BookingForm />
        </div>
      </section>
    </>
  );
}
