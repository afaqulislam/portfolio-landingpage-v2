export function OgImageContent() {
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#050505",
        color: "#fafafa",
        fontFamily: "monospace",
      }}
    >
      <div
        style={{
          display: "flex",
          width: "112px",
          height: "112px",
          borderRadius: "28px",
          border: "3px solid rgb(0 0 255 / 0.75)",
          color: "#3d3dff",
          fontSize: "56px",
          fontWeight: 700,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        AUI
      </div>
      <div
        style={{
          marginTop: "36px",
          fontSize: "52px",
          fontWeight: 700,
          letterSpacing: "2px",
        }}
      >
        Afaq Ul Islam
      </div>
      <div
        style={{
          marginTop: "14px",
          color: "rgba(250,250,250,0.6)",
          fontSize: "26px",
          letterSpacing: "6px",
          textTransform: "uppercase",
        }}
      >
        Agentic AI Engineer &middot; Neofyx
      </div>
    </div>
  );
}