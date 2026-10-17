import { ICONS } from "./icons";

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
      className={`inline-block shrink-0 ${className}`}
      style={style}
    >
      <path fill="currentColor" d={toPath(rows, 1)} />
      {accent && <path className="fill-fosforo" d={accent} />}
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
          <PixelIcon key={`f${i}`} name="flecha" style={{ width: ".32em", height: ".2em", verticalAlign: ".12em" }} />,
          <span key={`s${i}`} className="sr-only">
            →
          </span>,
          " ",
          parte,
        ]
  );

export default PixelIcon;
