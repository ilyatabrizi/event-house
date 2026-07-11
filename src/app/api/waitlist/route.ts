import { addToWaitlist } from "@/lib/waitlist-store";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let email: unknown;
  try {
    ({ email } = await request.json());
  } catch {
    return Response.json({ error: "Invalid request body." }, { status: 400 });
  }

  if (
    typeof email !== "string" ||
    email.length > 254 ||
    !EMAIL_PATTERN.test(email.trim())
  ) {
    return Response.json(
      { error: "Enter a valid email address." },
      { status: 400 },
    );
  }

  try {
    const { duplicate } = await addToWaitlist(email.trim().toLowerCase());
    return Response.json({ ok: true, duplicate }, { status: duplicate ? 200 : 201 });
  } catch (error) {
    console.error("waitlist: failed to store entry", error);
    return Response.json(
      { error: "Could not join the waitlist. Try again." },
      { status: 500 },
    );
  }
}
