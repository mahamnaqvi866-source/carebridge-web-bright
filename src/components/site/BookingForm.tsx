import { useState } from "react";
import { z } from "zod";
import { CheckCircle2, Loader2 } from "lucide-react";

const schema = z.object({
  fullName: z.string().trim().min(2, "Name is required").max(100),
  phone: z.string().trim().min(7, "Valid phone required").max(30),
  pickup: z.string().trim().min(3, "Pickup location required").max(200),
  dropoff: z.string().trim().min(3, "Drop-off location required").max(200),
  datetime: z.string().min(1, "Date & time required"),
  message: z.string().trim().max(1000).optional(),
});

type FormState = z.infer<typeof schema>;

export function BookingForm() {
  const [values, setValues] = useState<FormState>({
    fullName: "",
    phone: "",
    pickup: "",
    dropoff: "",
    datetime: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  const setField = <K extends keyof FormState>(k: K, v: FormState[K]) => {
    setValues((prev) => ({ ...prev, [k]: v }));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(values);
    if (!parsed.success) {
      const errs: Partial<Record<keyof FormState, string>> = {};
      parsed.error.issues.forEach((i) => {
        errs[i.path[0] as keyof FormState] = i.message;
      });
      setErrors(errs);
      return;
    }
    setErrors({});
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 900));
    setSubmitting(false);
    setDone(true);
  };

  if (done) {
    return (
      <div className="rounded-2xl bg-accent/60 border border-primary/20 p-8 text-center">
        <CheckCircle2 className="h-12 w-12 text-primary mx-auto mb-3" />
        <h3 className="font-display text-xl font-bold text-foreground">Request received</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          Thank you, {values.fullName.split(" ")[0]}. Our dispatch team will call you at {values.phone} shortly to confirm your ride.
        </p>
      </div>
    );
  }

  const inputCls = "w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/70 focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition";

  return (
    <form onSubmit={onSubmit} className="grid gap-4" noValidate>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="fullName" className="block text-sm font-medium text-foreground mb-1.5">Full Name</label>
          <input id="fullName" type="text" autoComplete="name" className={inputCls} value={values.fullName} onChange={(e) => setField("fullName", e.target.value)} aria-invalid={!!errors.fullName} />
          {errors.fullName && <p className="mt-1 text-xs text-destructive">{errors.fullName}</p>}
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-1.5">Phone Number</label>
          <input id="phone" type="tel" autoComplete="tel" className={inputCls} value={values.phone} onChange={(e) => setField("phone", e.target.value)} aria-invalid={!!errors.phone} />
          {errors.phone && <p className="mt-1 text-xs text-destructive">{errors.phone}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="pickup" className="block text-sm font-medium text-foreground mb-1.5">Pickup Location</label>
        <input id="pickup" type="text" className={inputCls} value={values.pickup} onChange={(e) => setField("pickup", e.target.value)} aria-invalid={!!errors.pickup} />
        {errors.pickup && <p className="mt-1 text-xs text-destructive">{errors.pickup}</p>}
      </div>

      <div>
        <label htmlFor="dropoff" className="block text-sm font-medium text-foreground mb-1.5">Drop-off Location</label>
        <input id="dropoff" type="text" className={inputCls} value={values.dropoff} onChange={(e) => setField("dropoff", e.target.value)} aria-invalid={!!errors.dropoff} />
        {errors.dropoff && <p className="mt-1 text-xs text-destructive">{errors.dropoff}</p>}
      </div>

      <div>
        <label htmlFor="datetime" className="block text-sm font-medium text-foreground mb-1.5">Date & Time</label>
        <input id="datetime" type="datetime-local" className={inputCls} value={values.datetime} onChange={(e) => setField("datetime", e.target.value)} aria-invalid={!!errors.datetime} />
        {errors.datetime && <p className="mt-1 text-xs text-destructive">{errors.datetime}</p>}
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1.5">Message <span className="text-muted-foreground font-normal">(optional)</span></label>
        <textarea id="message" rows={4} className={inputCls} value={values.message} onChange={(e) => setField("message", e.target.value)} placeholder="Wheelchair, oxygen, or special requirements…" />
      </div>

      <button type="submit" disabled={submitting} className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-soft hover:shadow-glow hover:-translate-y-0.5 transition-all disabled:opacity-70">
        {submitting ? <><Loader2 className="h-4 w-4 animate-spin" /> Sending…</> : "Request Ride"}
      </button>
    </form>
  );
}
