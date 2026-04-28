import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { SiteHeader } from "../components/site/SiteHeader";
import { SiteFooter } from "../components/site/SiteFooter";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <>
      <SiteHeader />
      <div className="flex min-h-[60vh] items-center justify-center bg-background px-4">
        <div className="max-w-md text-center">
          <h1 className="text-7xl font-bold text-primary">404</h1>
          <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <div className="mt-6">
            <Link
              to="/"
              className="inline-flex items-center justify-center rounded-full bg-gradient-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-soft"
            >
              Go home
            </Link>
          </div>
        </div>
      </div>
      <SiteFooter />
    </>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "CareBridge Medical Transport | NEMT in San Bernardino, CA" },
      { name: "description", content: "Safe, reliable non-emergency medical transportation in San Bernardino & Southern California. Wheelchair, dialysis, doctor appointments. Call (909) 555-7842." },
      { name: "author", content: "CareBridge Medical Transport" },
      { name: "theme-color", content: "#2E7D32" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "CareBridge Medical Transport" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:title", content: "CareBridge Medical Transport | NEMT in San Bernardino, CA" },
      { name: "twitter:title", content: "CareBridge Medical Transport | NEMT in San Bernardino, CA" },
      { property: "og:description", content: "Safe, reliable non-emergency medical transportation in San Bernardino & Southern California. Wheelchair, dialysis, doctor appointments. Call (909) 555-7842." },
      { name: "twitter:description", content: "Safe, reliable non-emergency medical transportation in San Bernardino & Southern California. Wheelchair, dialysis, doctor appointments. Call (909) 555-7842." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/d1e3fcb1-19c6-4793-a2cc-aaea61de219f/id-preview-5b8f24bb--2a80c363-087c-4d46-a43d-c50f891601b7.lovable.app-1777236285484.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/d1e3fcb1-19c6-4793-a2cc-aaea61de219f/id-preview-5b8f24bb--2a80c363-087c-4d46-a43d-c50f891601b7.lovable.app-1777236285484.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@600;700;800&display=swap" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MedicalBusiness",
          name: "CareBridge Medical Transport",
          image: "https://carebridgemedical.com/og.jpg",
          telephone: "+1-909-555-7842",
          email: "info@carebridgemedical.com",
          address: {
            "@type": "PostalAddress",
            streetAddress: "1250 Medical Center Dr, Suite 210",
            addressLocality: "San Bernardino",
            addressRegion: "CA",
            postalCode: "92411",
            addressCountry: "US",
          },
          openingHoursSpecification: [
            { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday"], opens: "06:00", closes: "20:00" },
            { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "07:00", closes: "17:00" },
          ],
          priceRange: "$$",
          areaServed: "San Bernardino, CA",
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <>
      <SiteHeader />
      <main>
        <Outlet />
      </main>
      <SiteFooter />
    </>
  );
}
