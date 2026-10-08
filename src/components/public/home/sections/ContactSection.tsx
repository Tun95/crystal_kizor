// src/components/public/home/sections/ContactSection.tsx
import { useRef, useState, type SyntheticEvent } from "react";
import { env } from "../../../../config/env";
import { enquiryOptions } from "../../../../data/ecosystem";
import { useEnquiry } from "../../../../hooks/Hooks";
import { trackEvent } from "../../../../utilities/analytics/analytics";

type Status = "idle" | "sending" | "sent" | "mailto" | "error";
interface Errors {
  name?: string;
  email?: string;
  message?: string;
}

const emailOk = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v);

const ContactSection = () => {
  const { enquiry, setEnquiry } = useEnquiry();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  // Honeypot: kept out of `form` so autofill or bots never block real users silently.
  const [hp, setHp] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");
  const started = useRef(false);

  const option = enquiryOptions.find((o) => o.id === enquiry)!;

  const update = (key: keyof typeof form, value: string) => {
    if (!started.current) {
      started.current = true;
      trackEvent("form_start", { enquiry });
    }
    setForm((f) => ({ ...f, [key]: value }));
  };

  const validate = (): Errors => {
    const e: Errors = {};
    if (form.name.trim().length < 2) e.name = "Enter your name.";
    if (!emailOk(form.email.trim()))
      e.email = "Enter a valid email address, like name@example.com.";
    if (form.message.trim().length < 10)
      e.message = "Write at least a sentence so Crystal can reply properly.";
    return e;
  };

  const submit = async (ev: SyntheticEvent<HTMLFormElement>) => {
    ev.preventDefault();
    if (env.isDevelopment) console.log("[contact] submit fired");

    // Bots fill the hidden field. Pretend it worked so they move on.
    if (hp) {
      setStatus("sent");
      return;
    }

    const e = validate();
    setErrors(e);
    if (Object.keys(e).length) {
      trackEvent("form_error", { enquiry, fields: Object.keys(e).join(",") });
      return;
    }

    const payload = {
      _subject: `[${option.label}] Enquiry from ${form.name.trim()}`,
      enquiry: option.label,
      name: form.name.trim(),
      email: form.email.trim(),
      message: form.message.trim(),
    };

    if (env.formEndpoint) {
      setStatus("sending");
      try {
        if (env.isDevelopment)
          console.log("[contact] posting to", env.formEndpoint);
        const res = await fetch(env.formEndpoint, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(payload),
        });
        if (env.isDevelopment)
          console.log("[contact] response status", res.status);
        if (!res.ok) throw new Error(String(res.status));
        setStatus("sent");
        trackEvent("generate_lead", { enquiry });
      } catch (err) {
        if (env.isDevelopment) console.error("[contact] send failed", err);
        setStatus("error");
        trackEvent("form_failure", { enquiry });
      }
      return;
    }

    // No endpoint configured: open the visitor's email app, pre-filled.
    const subject = encodeURIComponent(payload._subject);
    const body = encodeURIComponent(
      `${payload.message}\n\nFrom: ${payload.name} (${payload.email})`,
    );
    window.location.href = `mailto:${env.contactEmail}?subject=${subject}&body=${body}`;
    setStatus("mailto");
    trackEvent("generate_lead", { enquiry, method: "mailto" });
  };

  const field =
    "mt-2 w-full border-[1.5px] border-ink bg-white px-4 py-3 text-[1.05rem] outline-offset-2 placeholder:text-soft/70";

  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="py-20 md:py-28"
    >
      <div className="wrap grid gap-12 md:grid-cols-12 md:gap-14">
        <div className="md:col-span-5">
          <h2 id="contact-title" className="text-[clamp(2.1rem,4.4vw,3.6rem)]">
            Tell Crystal what you are working on.
          </h2>
          <p className="mt-6 max-w-[40ch] text-soft">
            Choose the closest fit and your message goes to the right place.
            Every enquiry is read by a person.
          </p>
        </div>

        <div className="md:col-span-7">
          {status === "sent" || status === "mailto" ? (
            <div
              role="status"
              className="border-[1.5px] border-ink bg-white p-8"
            >
              <h3 className="text-[1.7rem] font-medium">
                {status === "sent"
                  ? "Message sent."
                  : "Your email app should be open."}
              </h3>
              <p className="mt-3 max-w-[46ch]">
                {status === "sent"
                  ? "Thank you. Crystal will reply to the email address you gave."
                  : `If nothing opened, write to ${env.contactEmail} and mention "${option.label}".`}
              </p>
            </div>
          ) : (
            <form
              onSubmit={submit}
              noValidate
              aria-busy={status === "sending"}
              className="relative overflow-hidden border-[1.5px] border-ink bg-white p-6 md:p-8"
            >
              <fieldset>
                <legend className="font-display font-semibold">
                  I am getting in touch about
                </legend>
                <div className="mt-3 flex flex-wrap gap-2">
                  {enquiryOptions.map((o) => (
                    <label key={o.id} className="cursor-pointer">
                      <input
                        type="radio"
                        name="enquiry"
                        value={o.id}
                        checked={enquiry === o.id}
                        onChange={() => {
                          setEnquiry(o.id);
                          trackEvent("select_enquiry", { enquiry: o.id });
                        }}
                        className="peer sr-only"
                      />
                      <span className="block border-[1.5px] border-ink px-4 py-2 font-display text-[0.95rem] peer-checked:bg-ink peer-checked:text-chalk peer-focus-visible:outline peer-focus-visible:outline-[3px] peer-focus-visible:outline-offset-2 peer-focus-visible:outline-ochre">
                        {o.label}
                      </span>
                    </label>
                  ))}
                </div>
              </fieldset>

              <div className="mt-7 grid gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="font-display font-semibold">
                    Your name
                  </label>
                  <input
                    id="name"
                    autoComplete="name"
                    className={field}
                    value={form.name}
                    onChange={(e) => update("name", e.target.value)}
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? "name-err" : undefined}
                  />
                  {errors.name && (
                    <p
                      id="name-err"
                      className="mt-1 text-[0.95rem] text-[#a3261b]"
                    >
                      {errors.name}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="email" className="font-display font-semibold">
                    Your email
                  </label>
                  <input
                    id="email"
                    type="email"
                    autoComplete="email"
                    className={field}
                    value={form.email}
                    onChange={(e) => update("email", e.target.value)}
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "email-err" : undefined}
                  />
                  {errors.email && (
                    <p
                      id="email-err"
                      className="mt-1 text-[0.95rem] text-[#a3261b]"
                    >
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              <div className="mt-6">
                <label htmlFor="message" className="font-display font-semibold">
                  Your message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className={field}
                  placeholder={option.placeholder}
                  value={form.message}
                  onChange={(e) => update("message", e.target.value)}
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? "message-err" : undefined}
                />
                {errors.message && (
                  <p
                    id="message-err"
                    className="mt-1 text-[0.95rem] text-[#a3261b]"
                  >
                    {errors.message}
                  </p>
                )}
              </div>

              {/* Honeypot: hidden from people and screen readers, bots fill it */}
              <div
                className="absolute left-[-9999px] top-0 h-0 w-0 overflow-hidden"
                aria-hidden="true"
              >
                <label>
                  Leave this field empty
                  <input
                    name="hp_field"
                    tabIndex={-1}
                    autoComplete="off"
                    value={hp}
                    onChange={(e) => setHp(e.target.value)}
                  />
                </label>
              </div>

              {status === "error" && (
                <p role="alert" className="mt-5 text-[#a3261b]">
                  The message did not send. Check your connection and try again,
                  or write to {env.contactEmail}.
                </p>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className="btn btn-ink mt-7 w-full sm:w-auto disabled:cursor-wait disabled:opacity-60"
              >
                {status === "sending" ? "Sending…" : "Send message"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
