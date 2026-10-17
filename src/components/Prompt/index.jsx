// Línea de prompt decorativa: esteban@bugintheshell:~/cwd$ cmd   [tag]
// Es aria-hidden: el título de la sección ya dice lo mismo.
// host={false} omite "@bugintheshell" en columnas estrechas.
const Prompt = ({ cwd = "~", cmd, tag, host = true, typed = false, delay = 0, className = "" }) => {
  return (
    <p aria-hidden="true" className={`tty-prompt flex flex-wrap justify-between gap-x-4 ${className}`}>
      <span className="min-w-0">
        <span className="text-fosforo">
          esteban{host && <span className="max-sm:hidden">@bugintheshell</span>}
        </span>
        <span className="text-tenue">:</span>
        {cwd}
        <span className="text-tenue">$ </span>
        <span
          className={`tty-cmd ${typed ? "tty-type" : ""}`}
          data-cmd
          style={{ "--n": cmd.length, "--delay": `${delay}ms` }}
        >
          {cmd}
        </span>
      </span>
      {tag && <span className="tty-rev tty-rev-tenue px-[1ch] max-sm:hidden">{tag}</span>}
    </p>
  );
};

export default Prompt;
