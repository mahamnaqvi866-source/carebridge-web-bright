import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { BookingForm } from "../components/site/BookingForm";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact CareBridge | Book Medical Transport in San Bernardino, CA" },
      { name: "description", content: "Contact CareBridge Medical Transport at (909) 555-7842 to book non-emergency medical transportation in San Bernardino & Southern California. Email, phone, and online form." },
      { property: "og:title", content: "Contact CareBridge Medical Transport" },
      { property: "og:description", content: "Book a wheelchair, dialysis, or doctor-visit ride. Call (909) 555-7842 or use our online form." },
      { property: "og:url", content: "https://carebridge-web-bright.lovable.app/contact" },
    ],
    links: [{ rel: "canonical", href: "https://carebridge-web-bright.lovable.app/contact" }],
  }),
  component: ContactPage,
});

const contactItems = [
  { icon: Phone, label: "Phone", value: "(909) 555-7842", href: "tel:+19095557842" },
  { icon: Mail, label: "Email", value: "info@carebridgemedical.com", href: "mailto:info@carebridgemedical.com" },
  { icon: MapPin, label: "Address", value: "1250 Medical Center Dr, Suite 210\nSan Bernardino, CA 92411" },
  { icon: Clock, label: "Hours", value: "Mon–Fri: 6:00 AM – 8:00 PM\nSat: 7:00 AM – 5:00 PM\nSun: Closed" },
];

function ContactPage() {
  return (
    <>
      <section className="bg-gradient-soft py-16 md:py-24">
        <div className="container-page text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent-foreground">Contact Us</span>
          <h1 className="mt-5 font-display text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground text-balance">Contact Us</h1>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
            Reach out to schedule a ride, request a quote, or speak with our dispatch team. We're here to help.
          </p>
        </div>
      </section>

      <section className="container-page py-16 md:py-24 grid lg:grid-cols-5 gap-10">
        <div className="lg:col-span-2">
          <h2 className="font-display text-2xl font-bold text-foreground">Get in touch</h2>
          <p className="mt-2 text-muted-foreground">We respond to all inquiries within one business hour.</p>

          <ul className="mt-8 space-y-5" itemScope itemType="https://schema.org/MedicalBusiness">
            {contactItems.map((c) => (
              <li key={c.label} className="flex gap-4">
                <div className="h-12 w-12 rounded-xl bg-accent flex items-center justify-center shrink-0">
                  <c.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground font-bold">{c.label}</p>
                  {c.href ? (
                    <a href={c.href} className="font-display text-base font-semibold text-foreground hover:text-primary whitespace-pre-line break-words">{c.value}</a>
                  ) : (
                    <p className="font-display text-base font-semibold text-foreground whitespace-pre-line">{c.value}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-10 rounded-2xl overflow-hidden shadow-card border border-border">
            <iframe
              title="CareBridge Medical Transport — San Bernardino, CA location map"
              src="https://www.google.com/maps?q=1250+Medical+Center+Dr,+San+Bernardino,+CA+92411&output=embed"
              width="100%"
              height="320"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block border-0"
              aria-label="Google Map showing CareBridge Medical Transport in San Bernardino, California"
            />
          </div>
        </div>

        <div className="lg:col-span-3">
          <div className="rounded-3xl bg-card border border-border p-6 md:p-10 shadow-card">
            <h2 className="font-display text-2xl font-bold text-foreground">Request a Ride</h2>
            <p className="mt-2 text-sm text-muted-foreground mb-6">Complete the form and our dispatch team will confirm your booking shortly.</p>
            <BookingForm />
          </div>
        </div>
      </section>
    </>
  );
}
