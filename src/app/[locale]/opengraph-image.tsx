import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Arona Tounkara — Fullstack developer & co-founder";

export default async function Image({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const subtitle =
    locale === "fr"
      ? "Développeur fullstack & co-founder — Dakar"
      : "Fullstack developer & co-founder — Dakar";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#FFFFFF",
          padding: "80px 90px",
        }}
      >
        {/* Top eyebrow */}
        <div
          style={{
            display: "flex",
            fontSize: 24,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#5B6472",
            fontWeight: 600,
          }}
        >
          Portfolio · 2026 · Dakar
        </div>

        {/* Name */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 150,
              fontWeight: 700,
              letterSpacing: -6,
              color: "#0A0F1A",
              lineHeight: 1,
            }}
          >
            Arona Tounkara
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 34,
              fontSize: 40,
              color: "#2A3244",
            }}
          >
            {subtitle}
          </div>
        </div>

        {/* Accent rule + url */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", height: 6, width: 220, background: "#1D4ED8" }} />
          <div
            style={{
              display: "flex",
              marginTop: 26,
              fontSize: 26,
              color: "#5B6472",
              letterSpacing: 1,
            }}
          >
            arona.terangadev.com
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
