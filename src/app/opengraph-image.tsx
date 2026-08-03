import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { siteDescription, siteName } from "@/lib/site-metadata";

export const alt = `${siteName} — social events app`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const logo = await readFile(
    join(
      process.cwd(),
      "public/logo/Mark_Transparent/e_mark_light_1024.png",
    ),
  );
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0e0b10",
          padding: "64px",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logoSrc} width={140} height={140} alt="" />
        <div
          style={{
            marginTop: 36,
            fontSize: 72,
            fontWeight: 600,
            color: "#f2eee7",
            letterSpacing: "-0.02em",
          }}
        >
          {siteName}
        </div>
        <div
          style={{
            marginTop: 20,
            maxWidth: 920,
            fontSize: 30,
            lineHeight: 1.45,
            color: "rgba(242, 238, 231, 0.78)",
            textAlign: "center",
          }}
        >
          {siteDescription}
        </div>
      </div>
    ),
    { ...size },
  );
}
