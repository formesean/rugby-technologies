import { ImageResponse } from "next/og";

export const alt =
  "Rugby Technologies — Practical technology, built around your business.";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <div
      style={{
        position: "relative",
        display: "flex",
        width: "100%",
        height: "100%",
        flexDirection: "column",
        overflow: "hidden",
        background: "#f7f4ec",
        color: "#17191f",
        padding: "64px 72px",
        fontFamily: "Arial",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(#17191f14 1px, transparent 1px), linear-gradient(90deg, #17191f14 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          opacity: 0.45,
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 62,
          right: -24,
          width: 280,
          height: 280,
          borderRadius: "35% 65% 61% 39% / 42% 35% 65% 58%",
          background: "#3d56d8",
        }}
      />
      <div
        style={{
          position: "absolute",
          right: 252,
          bottom: 62,
          width: 128,
          height: 128,
          borderRadius: 28,
          background: "#c9f06b",
          transform: "rotate(12deg)",
        }}
      />
      <div
        style={{
          position: "absolute",
          right: 58,
          bottom: 38,
          width: 106,
          height: 106,
          border: "20px solid #ff7a68",
          borderRadius: 999,
        }}
      />
      <div
        style={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          fontSize: 26,
          fontWeight: 700,
          letterSpacing: -1,
        }}
      >
        Rugby{" "}
        <span style={{ color: "#3d56d8", marginLeft: 8 }}>Technologies</span>
      </div>
      <div
        style={{
          position: "relative",
          display: "flex",
          marginTop: 88,
          color: "#3d56d8",
          fontFamily: "monospace",
          fontSize: 17,
          fontWeight: 700,
          letterSpacing: 2,
        }}
      >
        WEBSITES • SOFTWARE • AUTOMATION • CONSULTING
      </div>
      <div
        style={{
          position: "relative",
          display: "flex",
          maxWidth: 840,
          marginTop: 26,
          fontSize: 58,
          fontWeight: 700,
          letterSpacing: -2.5,
          lineHeight: 1.04,
        }}
      >
        Practical technology, built around your business.
      </div>
      <div
        style={{
          position: "relative",
          display: "flex",
          marginTop: "auto",
          color: "#62656f",
          fontSize: 22,
        }}
      >
        rugbyworks.tech
      </div>
    </div>,
    size,
  );
}
