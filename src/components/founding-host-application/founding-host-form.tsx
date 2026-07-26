"use client";

import { useState } from "react";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { foundingHostWhatsAppUrl } from "@/lib/contact-links";

type FormFields = {
  name: string;
  eventDescription: string;
  instagramOrWebsite: string;
  hostingFrequency: string;
  typicalGuests: string;
  whatsappNumber: string;
};

const INITIAL: FormFields = {
  name: "",
  eventDescription: "",
  instagramOrWebsite: "",
  hostingFrequency: "",
  typicalGuests: "",
  whatsappNumber: "",
};

const FIELD_CLASS =
  "w-full rounded-xl border border-ash/25 bg-bone/[0.03] px-4 py-3 text-[15px] text-bone placeholder:text-ash/70 outline-none transition-colors focus:border-ash/50";

const LABEL_CLASS =
  "font-mono text-[11px] uppercase tracking-[0.14em] text-ash";

function buildMailtoBody(fields: FormFields) {
  return [
    `Name: ${fields.name}`,
    `Event: ${fields.eventDescription}`,
    `Instagram or website: ${fields.instagramOrWebsite}`,
    `How often they host: ${fields.hostingFrequency}`,
    `Typical number of guests: ${fields.typicalGuests}`,
    `WhatsApp number: ${fields.whatsappNumber}`,
  ].join("\n");
}

export function FoundingHostForm() {
  const [fields, setFields] = useState<FormFields>(INITIAL);

  function updateField<K extends keyof FormFields>(key: K, value: FormFields[K]) {
    setFields((prev) => ({ ...prev, [key]: value }));
  }

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    const subject = "Founding Host application";
    const body = buildMailtoBody(fields);
    window.location.href = `mailto:partners@eventhouse.app?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="flex flex-col gap-2">
        <label htmlFor="fh-name" className={LABEL_CLASS}>Name</label>
        <input
          id="fh-name"
          type="text"
          required
          value={fields.name}
          onChange={(event) => updateField("name", event.target.value)}
          className={FIELD_CLASS}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="fh-event" className={LABEL_CLASS}>
          Describe your event in one sentence
        </label>
        <input
          id="fh-event"
          type="text"
          required
          value={fields.eventDescription}
          onChange={(event) => updateField("eventDescription", event.target.value)}
          className={FIELD_CLASS}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="fh-social" className={LABEL_CLASS}>
          Instagram or website
        </label>
        <input
          id="fh-social"
          type="text"
          value={fields.instagramOrWebsite}
          onChange={(event) => updateField("instagramOrWebsite", event.target.value)}
          className={FIELD_CLASS}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="fh-frequency" className={LABEL_CLASS}>
          How often do you host?
        </label>
        <input
          id="fh-frequency"
          type="text"
          value={fields.hostingFrequency}
          onChange={(event) => updateField("hostingFrequency", event.target.value)}
          className={FIELD_CLASS}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="fh-guests" className={LABEL_CLASS}>
          Typical number of guests
        </label>
        <input
          id="fh-guests"
          type="text"
          value={fields.typicalGuests}
          onChange={(event) => updateField("typicalGuests", event.target.value)}
          className={FIELD_CLASS}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="fh-whatsapp" className={LABEL_CLASS}>
          WhatsApp number
        </label>
        <input
          id="fh-whatsapp"
          type="tel"
          required
          value={fields.whatsappNumber}
          onChange={(event) => updateField("whatsappNumber", event.target.value)}
          className={FIELD_CLASS}
        />
      </div>

      <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
        <Button
          type="submit"
          className="h-11 rounded-full border-transparent bg-bone px-6 text-sm font-medium text-ink hover:bg-bone"
        >
          Apply to become a Founding Host
        </Button>
        <a
          href={foundingHostWhatsAppUrl()}
          className={cn(
            buttonVariants(),
            "h-11 rounded-full border-ash bg-transparent px-6 text-sm font-medium text-bone hover:border-bone/60 hover:bg-transparent",
          )}
        >
          Or message us on WhatsApp
        </a>
      </div>
    </form>
  );
}
