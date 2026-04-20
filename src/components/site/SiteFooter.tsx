import { Link } from "@tanstack/react-router";
import { HeartPulse, Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="bg-foreground text-background mt-24">
      <div className="container-page py-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary">
              <HeartPulse className="h-5 w-5 text-primary-foreground" strokeWidth={2.5} />
            </span>
            <span className="flex flex-col leading-tight">
              <span className="font-display text-lg font-bold">CareBridge</span>
              <span className="text-xs uppercase tracking-wider opacity-70">Medical Transport</span>
            </span>
          </div>
          <p className="mt-4 text-sm opacity-75 leading-relaxed">
            Safe, reliable non-emergency medical transportation serving San Bernardino and Southern California.
          </p>
          <div className="flex gap-3 mt-5" aria-label="Social media">
            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
              <a key={i} href="#" aria-label="Social link" className="h-9 w-9 rounded-full bg-background/10 hover:bg-primary flex items-center justify-center transition-colors">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-display text-sm font-bold uppercase tracking-wider mb-4">Navigation</h3>
          <ul className="space-y-2.5 text-sm opacity-80">
            {[
              { to: "/", label: "Home" },
              { to: "/about", label: "About Us" },
              { to: "/services", label: "Services" },
              { to: "/fleet", label: "Our Fleet" },
              { to: "/contact", label: "Contact" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="hover:text-primary transition-colors">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-bold uppercase tracking-wider mb-4">Contact</h3>
          <ul className="space-y-3 text-sm opacity-85">
            <li className="flex gap-3"><Phone className="h-4 w-4 mt-0.5 text-primary shrink-0" /><a href="tel:+19095557842" className="hover:text-primary">(909) 555-7842</a></li>
            <li className="flex gap-3"><Mail className="h-4 w-4 mt-0.5 text-primary shrink-0" /><a href="mailto:info@carebridgemedical.com" className="hover:text-primary break-all">info@carebridgemedical.com</a></li>
            <li className="flex gap-3"><MapPin className="h-4 w-4 mt-0.5 text-primary shrink-0" /><span>1250 Medical Center Dr, Suite 210<br />San Bernardino, CA 92411</span></li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-bold uppercase tracking-wider mb-4">Hours</h3>
          <ul className="space-y-2 text-sm opacity-85">
            <li className="flex gap-3"><Clock className="h-4 w-4 mt-0.5 text-primary shrink-0" /><span><strong className="font-semibold">Mon–Fri</strong><br />6:00 AM – 8:00 PM</span></li>
            <li className="flex gap-3 pl-7"><span><strong className="font-semibold">Saturday</strong><br />7:00 AM – 5:00 PM</span></li>
            <li className="flex gap-3 pl-7"><span><strong className="font-semibold">Sunday</strong><br />Closed</span></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-background/10">
        <div className="container-page py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs opacity-70">
          <p>© {new Date().getFullYear()} CareBridge Medical Transport. All rights reserved.</p>
          <p>Licensed & Insured NEMT Provider · Owner: Michael Anderson</p>
        </div>
      </div>
    </footer>
  );
}
