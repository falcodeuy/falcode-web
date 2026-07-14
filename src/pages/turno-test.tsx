import React from "react";
import type { HeadFC, PageProps } from "gatsby";
import "../styles/main.scss";

const TurnoTestPage: React.FC<PageProps> = () => {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
        background: "#f5f5f5",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "960px",
          background: "#fff",
          borderRadius: "12px",
          boxShadow: "0 4px 24px rgba(0, 0, 0, 0.08)",
          overflow: "hidden",
          padding: "1rem",
        }}
      >
        <iframe
          src="https://turnolink.app/embed/detailing-aeroespacial/services"
          title="Reservar turno"
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
          style={{
            width: "100%",
            height: "800px",
            border: 0,
            borderRadius: "12px",
            display: "block",
          }}
        />
      </div>
    </main>
  );
};

export default TurnoTestPage;

export const Head: HeadFC = () => <title>Turno test</title>;
