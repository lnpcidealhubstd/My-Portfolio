export type ContactFormPayload = {
  name: string;
  email: string;
  company: string;
  service: string;
  message: string;
};

/**
 * In this repo we don't have a real backend contact handler.
 *
 * This function creates a deterministic "mailto:" URL so the form actually
 * results in an email being composed.
 */
export function toMailto(payload: ContactFormPayload) {
  const subject = `Contact inquiry — ${payload.service}`.trim();

  const body = [
    `Name: ${payload.name}`,
    `Email: ${payload.email}`,
    `Company/Org: ${payload.company}`,
    `Service: ${payload.service}`,
    "",
    payload.message,
  ].join("\n");

  return `mailto:centeno.lorenzo.nicholas@gmail.com?subject=${encodeURIComponent(
    subject,
  )}&body=${encodeURIComponent(body)}`;
}
