import { ICONS } from "./icons";
import "./PixelIcon.scss";

// Une los píxeles contiguos de cada fila en un solo rectángulo.
function toPath(rows, digit) {
  return rows
    .map((row, y) =>
      [...row.matchAll(new RegExp(`${digit}+`, "g"))]
        .map((m) => `M${m.index} ${y}h${m[0].length}v1h-${m[0].length}z`)
        .join("")
    )
    .join("");
}

const PixelIcon = ({ name, cell = 2, className = "", style }) => {
  const rows = ICONS[name] ?? ICONS.chip;
  const w = rows[0].length;
  const h = rows.length;
  const accent = toPath(rows, 2);

  return (
    <svg
      viewBox={`0 0 ${w} ${h}`}
      width={w * cell}
      height={h * cell}
      shapeRendering="crispEdges"
      aria-hidden="true"
      focusable="false"
      className={`pixel-icon ${className}`.trim()}
      style={style}
    >
      <path fill="currentColor" d={toPath(rows, 1)} />
      {accent && <path className="pixel-icon__accent" d={accent} />}
    </svg>
  );
};

// Sustituye " → " por la flecha en píxeles, sin perder el texto para lectores de pantalla.
export const ConFlechas = ({ text }) =>
  text.split(" → ").flatMap((parte, i) =>
    i === 0
      ? [parte]
      : [
          " ",
          <PixelIcon key={`f${i}`} name="flecha" className="pixel-icon--inline" />,
          <span key={`s${i}`} className="visually-hidden">
            →
          </span>,
          " ",
          parte,
        ]
  );

export default PixelIcon;
