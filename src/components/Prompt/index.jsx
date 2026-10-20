import "./Prompt.scss";

// Línea de prompt decorativa: esteban@bugintheshell:~/cwd$ cmd   [tag]
// Es aria-hidden: el título de la sección ya dice lo mismo.
// host={false} omite "@bugintheshell" en columnas estrechas.
const Prompt = ({ cwd = "~", cmd, tag, host = true, typed = false, delay = 0, className = "" }) => {
  return (
    <p aria-hidden="true" className={`prompt ${className}`.trim()}>
      <span className="prompt__line">
        <span className="prompt__user">
          esteban{host && <span className="prompt__host">@bugintheshell</span>}
        </span>
        <span className="prompt__separator">:</span>
        {cwd}
        <span className="prompt__separator">$ </span>
        <span
          className={`prompt__cmd${typed ? " prompt__cmd--typed" : ""}`}
          data-cmd
          style={{ "--n": cmd.length, "--delay": `${delay}ms` }}
        >
          {cmd}
        </span>
      </span>
      {tag && <span className="prompt__tag">{tag}</span>}
    </p>
  );
};

export default Prompt;
