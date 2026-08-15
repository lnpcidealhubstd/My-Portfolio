import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { z } from "zod";

import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import { Ambient } from "@/components/site/Ambient";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
});

const contactSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(100, "Name is too long"),
  email: z.string().trim().email("Enter a valid email").max(255, "Email is too long"),
  company: z.string().trim().max(120, "Company name is too long").optional().or(z.literal("")),
  service: z.string().trim().min(2, "Tell me what you need").max(160, "Keep it under 160 characters"),
  message: z
    .string()
    .trim()
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message must be under 1000 characters"),
});

type FormState = {
  name: string;
  email: string;
  company: string;
  service: string;
  message: string;
};

type FieldErrors = Partial<Record<keyof FormState, string>>;

const EMPTY: FormState = { name: "", email: "", company: "", service: "", message: "" };

function ContactPage() {
  const [values, setValues] = useState<FormState>(EMPTY);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "sent">("idle");

  const update = (key: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValues((v) => ({ ...v, [key]: e.target.value }));
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === "submitting") return;

    const parsed = contactSchema.safeParse(values);
    if (!parsed.success) {
      const next: FieldErrors = {};
      for (const issue of parsed.error.issues) {
        const k = issue.path[0] as keyof FormState;
        if (k && !next[k]) next[k] = issue.message;
      }
      setErrors(next);
      toast.error("Please fix the highlighted fields", {
        description: "A few details need attention before sending.",
      });
      return;
    }

    setStatus("submitting");
    try {
      await new Promise((resolve, reject) => {
        setTimeout(() => {
          // Simulated delivery — swap with real endpoint when wired up.
          if (Math.random() < 0.03) reject(new Error("Network error"));
          else resolve(null);
        }, 700);
      });
      setStatus("sent");
      setValues(EMPTY);
      toast.success("Inquiry received", {
        description: "Thanks — I'll respond within two business days.",
      });
    } catch (err) {
      setStatus("idle");
      toast.error("Couldn't send your inquiry", {
        description: err instanceof Error ? err.message : "Please try again in a moment.",
      });
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <Nav />

      {/* HERO */}
      <section className="relative overflow-hidden bg-zinc-950">
        <Ambient />
        <div className="relative mx-auto max-w-7xl px-6 pt-28 pb-16 sm:pt-36">
          <Reveal>
            <div className="mb-6 text-xs uppercase tracking-[0.25em] text-zinc-400">Contact</div>
            <h1 className="max-w-4xl text-5xl font-medium leading-[1.02] sm:text-6xl lg:text-7xl">
              Let&apos;s build something extraordinary.
            </h1>
          </Reveal>
          <Reveal delay={100}>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-zinc-400">
              Outline the scope, the constraint, and the deadline. I respond within two business days.
            </p>
          </Reveal>
        </div>
      </section>

      {/* FORM + SOCIAL */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-12">
          {/* FORM */}
          <Reveal className="md:col-span-7">
            <div>
              <div className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-8 backdrop-blur-sm sm:p-12">
                <div className="mb-8 text-xs uppercase tracking-[0.25em] text-zinc-400">Send an inquiry</div>
                {status === "sent" ? (
                  <div className="rounded-lg border border-zinc-800 bg-zinc-900/60 p-10 text-center">
                    <div className="mb-2 text-xs uppercase tracking-[0.25em] text-zinc-400">Received</div>
                    <p className="text-xl text-zinc-100">Thanks. I&apos;ll be in touch shortly.</p>
                    <button
                      type="button"
                      onClick={() => setStatus("idle")}
                      className="mt-6 text-xs uppercase tracking-[0.2em] text-zinc-400 underline-offset-4 hover:text-zinc-100 hover:underline"
                    >
                      Send another inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate className="space-y-5">
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                      <Field
                        label="Name"
                        name="name"
                        placeholder="Jane Doe"
                        value={values.name}
                        onChange={update("name")}
                        error={errors.name}
                      />
                      <Field
                        label="Email"
                        name="email"
                        type="email"
                        placeholder="you@company.com"
                        value={values.email}
                        onChange={update("email")}
                        error={errors.email}
                      />
                    </div>
                    <Field
                      label="Company / Org"
                      name="company"
                      placeholder="Acme Inc."
                      value={values.company}
                      onChange={update("company")}
                      error={errors.company}
                    />
                    <Field
                      label="Service"
                      name="service"
                      placeholder="Product design, AI orchestration, ops…"
                      value={values.service}
                      onChange={update("service")}
                      error={errors.service}
                    />
                    <Field
                      label="Message"
                      name="message"
                      textarea
                      placeholder="Scope, constraints, and deadline."
                      value={values.message}
                      onChange={update("message")}
                      error={errors.message}
                    />
                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      className="inline-flex h-11 items-center justify-center rounded-md bg-zinc-100 px-6 text-xs uppercase tracking-[0.2em] text-zinc-950 transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
                    >
                      {status === "submitting" ? "Sending…" : "Send Inquiry →"}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </Reveal>

          {/* CONTACT INFO + SOCIAL */}
          <Reveal delay={100} className="md:col-span-4 md:col-start-9">
            <div>
              <div className="space-y-12">
                <div>
                  <div className="mb-6 text-xs uppercase tracking-[0.25em] text-zinc-400">Direct</div>
                  <a
                    href="mailto:centeno.lorenzo.nicholas@gmail.com"
                    className="group flex items-center gap-3 text-sm text-zinc-300 transition-colors hover:text-zinc-100"
                  >
                    <MailIcon className="size-4 text-zinc-400 transition-colors group-hover:text-zinc-100" />
                    centeno.lorenzo.nicholas@gmail.com
                  </a>
                </div>

                <div>
                  <div className="mb-6 text-xs uppercase tracking-[0.25em] text-zinc-400">Social</div>
                  <div className="grid grid-cols-1 gap-3">
                    <SocialLink href="https://www.linkedin.com" label="LinkedIn" icon={<LinkedInIcon className="size-4" />} />
                    <SocialLink href="https://www.facebook.com" label="Facebook" icon={<FacebookIcon className="size-4" />} />
                    <SocialLink href="https://www.instagram.com" label="Instagram" icon={<InstagramIcon className="size-4" />} />
                    <SocialLink href="https://www.tiktok.com" label="TikTok" icon={<TikTokIcon className="size-4" />} />
                    <SocialLink href="mailto:centeno.lorenzo.nicholas@gmail.com" label="Gmail" icon={<MailIcon className="size-4" />} />
                  </div>
                </div>

                <div>
                  <div className="mb-6 text-xs uppercase tracking-[0.25em] text-zinc-400">Availability</div>
                  <p className="text-sm leading-relaxed text-zinc-400">
                    Currently accepting select engagements for Q3–Q4 2026. Projects with defined scope, tight
                    timelines, and clear decision makers are preferred.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  textarea = false,
  placeholder,
  value,
  onChange,
  error,
}: {
  label: string;
  name: string;
  type?: string;
  textarea?: boolean;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  error?: string;
}) {
  const base =
    "w-full rounded-md border bg-zinc-900/50 px-4 text-sm text-zinc-100 placeholder:text-zinc-500 outline-none transition-colors focus:bg-zinc-900/80";
  const borderCls = error
    ? "border-red-500/60 focus:border-red-400"
    : "border-zinc-800 focus:border-zinc-500";

  return (
    <label className="block">
      <span className="mb-2 block text-[10px] uppercase tracking-[0.25em] text-zinc-400">{label}</span>
      {textarea ? (
        <textarea
          name={name}
          rows={5}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          aria-invalid={!!error}
          className={`${base} ${borderCls} resize-none py-3`}
        />
      ) : (
        <input
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          aria-invalid={!!error}
          className={`${base} ${borderCls} h-11`}
        />
      )}
      {error ? <span className="mt-2 block text-xs text-red-400">{error}</span> : null}
    </label>
  );
}


function SocialLink({ href, label, icon }: { href: string; label: string; icon: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-3 rounded-md border border-zinc-800 bg-zinc-900/40 px-4 py-3 text-sm text-zinc-300 transition-all hover:border-zinc-700 hover:bg-zinc-900/70 hover:text-zinc-100"
    >
      <span className="text-zinc-400 transition-colors group-hover:text-zinc-100">{icon}</span>
      <span className="text-xs uppercase tracking-[0.2em]">{label}</span>
      <span className="ml-auto text-zinc-500 transition-transform group-hover:translate-x-0.5 group-hover:text-zinc-100">
        →
      </span>
    </a>
  );
}

/* ── Icons ── */
function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678a6.162 6.162 0 100 12.324 6.162 6.162 0 100-12.324zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405a1.441 1.441 0 11-2.882 0 1.441 1.441 0 012.882 0z" />
    </svg>
  );
}

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
    </svg>
  );
}

function MailIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

