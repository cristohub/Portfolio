import React from "react";
import { motion } from "framer-motion";

const float = (delay: number, range = 7) => ({
  animate: {
    y: [0, -range, 0],
    transition: { duration: 3.2 + delay * 0.5, repeat: Infinity, ease: "easeInOut", delay },
  },
});

interface SelectionFrameProps {
  children: React.ReactNode;
  color?: string;
  rotate?: number;
}

const SelectionFrame: React.FC<SelectionFrameProps> = ({
  children,
  color = "#1abcfe",
  rotate = 0,
}) => {
  const dot: React.CSSProperties = {
    position: "absolute",
    width: 8,
    height: 8,
    background: "white",
    border: `2px solid ${color}`,
    borderRadius: 1,
  };
  return (
    <div style={{ position: "relative", display: "inline-block", transform: `rotate(${rotate}deg)` }}>
      <div style={{ border: `2px solid ${color}`, borderRadius: 6, overflow: "hidden" }}>
        {children}
      </div>
      <div style={{ ...dot, top: -4, left: -4 }} />
      <div style={{ ...dot, top: -4, right: -4 }} />
      <div style={{ ...dot, bottom: -4, left: -4 }} />
      <div style={{ ...dot, bottom: -4, right: -4 }} />
      <div style={{ ...dot, top: -4, left: "calc(50% - 4px)" }} />
      <div style={{ ...dot, bottom: -4, left: "calc(50% - 4px)" }} />
    </div>
  );
};

interface CursorProps {
  color: string;
  name: string;
}

const FigmaCursor: React.FC<CursorProps> = ({ color, name }) => (
  <div style={{ position: "relative", display: "inline-block" }}>
    <svg width="16" height="16" viewBox="0 0 16 16" fill={color} style={{ filter: "drop-shadow(0 1px 3px rgba(0,0,0,0.25))" }}>
      <path d="M2 0.5l12 8-5.5 1.5-2 5.5z" />
    </svg>
    <span
      style={{
        position: "absolute",
        top: 14,
        left: 8,
        background: color,
        color: "white",
        fontSize: 11,
        padding: "2px 7px",
        borderRadius: 4,
        fontWeight: 700,
        whiteSpace: "nowrap",
        boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
      }}
    >
      {name}
    </span>
  </div>
);

const FooterHero: React.FC = () => {
  return (
    <div
      style={{
        background: "#e8e8e8",
        position: "relative",
        overflow: "hidden",
        minHeight: "260px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* ── Logo central ── */}
      <motion.div {...float(0, 5)} style={{ position: "relative", zIndex: 2 }}>
        <img
          src="/Logo.png"
          alt="Logo"
          style={{
            width: "96px",
            height: "96px",
            objectFit: "contain",
            borderRadius: "22px",
            boxShadow: "0 10px 36px rgba(0,0,0,0.20)",
          }}
        />
      </motion.div>

      {/* ── Tarjeta cita (arriba izquierda) ── */}
      <motion.div
        {...float(0.3)}
        style={{ position: "absolute", left: "3%", top: "5%", zIndex: 3 }}
      >
        <div
          style={{
            background: "#fffde7",
            borderRadius: 12,
            padding: "10px 14px",
            boxShadow: "0 4px 16px rgba(0,0,0,0.10)",
            maxWidth: "170px",
          }}
        >
          <p style={{ margin: 0, fontSize: "0.78rem", fontWeight: 600, color: "#222", lineHeight: 1.4 }}>
            Código limpio,<br />experiencia increíble
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: 6, marginTop: 6 }}>
            <img
              src="/Cristofer-Sani.png"
              alt="Cristofer"
              style={{ width: 20, height: 20, borderRadius: "50%", objectFit: "cover", background: "#ddd" }}
            />
            <span style={{ fontSize: "0.68rem", color: "#666" }}>Cristofer Sani</span>
          </div>
        </div>
      </motion.div>

      {/* ── Cursor rojo Cristofer (arriba centro-izq) ── */}
      <motion.div
        {...float(0.6, 5)}
        style={{ position: "absolute", left: "26%", top: "6%", zIndex: 4 }}
      >
        <FigmaCursor color="#ef4444" name="Cristofer" />
      </motion.div>

      {/* ── Aa con frame Figma (abajo izquierda) ── */}
      <motion.div
        {...float(1.1, 6)}
        style={{ position: "absolute", left: "7%", bottom: "12%", zIndex: 3 }}
      >
        <SelectionFrame color="#1abcfe" rotate={-7}>
          <div style={{ background: "white", padding: "6px 12px" }}>
            <span style={{ fontSize: "1.4rem", fontWeight: 800, color: "#1abcfe" }}>Aa</span>
          </div>
        </SelectionFrame>
      </motion.div>

      {/* ── React pill (izquierda) ── */}
      <motion.div
        {...float(0.2, 5)}
        style={{
          position: "absolute",
          left: "2%",
          top: "50%",
          background: "#20232a",
          color: "#61dafb",
          borderRadius: 20,
          padding: "5px 14px",
          fontWeight: 700,
          fontSize: "0.8rem",
          zIndex: 3,
          boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
          whiteSpace: "nowrap",
        }}
      >
        ⚛ React
      </motion.div>

      {/* ── TypeScript con frame (abajo centro-izq) ── */}
      <motion.div
        {...float(0.8, 5)}
        style={{ position: "absolute", left: "26%", bottom: "7%", zIndex: 3 }}
      >
        <SelectionFrame color="#3178c6" rotate={0}>
          <div style={{ background: "#3178c6", padding: "4px 12px" }}>
            <span style={{ color: "white", fontWeight: 800, fontSize: "0.78rem" }}>TS TypeScript</span>
          </div>
        </SelectionFrame>
      </motion.div>

      {/* ── Frontend pill (arriba derecha) ── */}
      <motion.div
        {...float(0.5, 7)}
        style={{
          position: "absolute",
          right: "8%",
          top: "12%",
          background: "#3b82f6",
          color: "white",
          borderRadius: 20,
          padding: "5px 16px",
          fontWeight: 600,
          fontSize: "0.83rem",
          zIndex: 3,
          boxShadow: "0 2px 10px rgba(59,130,246,0.35)",
        }}
      >
        Frontend
      </motion.div>

      {/* ── Figma pill (derecha centro) ── */}
      <motion.div
        {...float(1.4, 6)}
        style={{
          position: "absolute",
          right: "2%",
          top: "46%",
          background: "#9333ea",
          color: "white",
          borderRadius: 20,
          padding: "5px 16px",
          fontWeight: 600,
          fontSize: "0.83rem",
          zIndex: 3,
          boxShadow: "0 2px 10px rgba(147,51,234,0.3)",
        }}
      >
        ✦ Figma
      </motion.div>

      {/* ── AI Tools frame (abajo derecha) ── */}
      <motion.div
        {...float(0.4, 6)}
        style={{ position: "absolute", right: "10%", bottom: "10%", zIndex: 3 }}
      >
        <SelectionFrame color="#f59e0b" rotate={3}>
          <div style={{ background: "white", padding: "4px 12px" }}>
            <span style={{ color: "#f59e0b", fontWeight: 700, fontSize: "0.72rem", letterSpacing: "0.08em" }}>
              🤖 AI TOOLS
            </span>
          </div>
        </SelectionFrame>
      </motion.div>

      {/* ── Cursor verde WebDev (abajo derecha) ── */}
      <motion.div
        {...float(1.0, 5)}
        style={{ position: "absolute", right: "27%", bottom: "5%", zIndex: 4 }}
      >
        <FigmaCursor color="#10b981" name="Web Dev" />
      </motion.div>
    </div>
  );
};

export default FooterHero;
