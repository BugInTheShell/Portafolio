import { useEffect, useRef, useState } from "react";

const links = [
  { href: "#stack", n: 1, label: "stack" },
  { href: "#proyectos", n: 2, label: "proyectos" },
  { href: "#metodo", n: 3, label: "método" },
  { href: "#fuera", n: 4, label: "fuera", sr: " del editor" },
  { href: "#contacto", n: 5, label: "contacto" },
];

// Barra de estado estilo tmux: cada sección es una "ventana" y la activa va en vídeo inverso.
const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const toggleRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    ["inicio", ...links.map((l) => l.href.slice(1))].forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  // Escape cierra el menú y devuelve el foco al botón que lo abrió.
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key !== "Escape") return;
      setOpen(false);
      toggleRef.current?.focus();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey); 
  }, [open]);

  // Si el foco sale de la navegación, el menú se cierra para no tapar lo enfocado.
  const onBlur = (e) => {
    if (open && !e.currentTarget.contains(e.relatedTarget)) setOpen(false);
  };

  return (
    <header className="sticky top-(--crt-bezel) z-10 border-b border-linea bg-panel">
      <nav aria-label="Principal" onBlur={onBlur}>
        <div className="mx-auto flex h-11 max-w-[1120px] items-stretch justify-between px-4 md:px-8">
          <a
            href="#inicio"
            className="flex items-center font-tty text-[22px] whitespace-nowrap text-fosforo focus-visible:outline-offset-[-4px]"
          >
            Esteban Galván
            <span className="tty-cursor tty-blink" aria-hidden="true" />
          </a>

          <ul className="hidden items-stretch md:flex">
            {links.map((link) => {
              const isActive = active === link.href;
              return (
                <li key={link.href} className="flex">
                  <a
                    href={link.href}
                    aria-current={isActive ? "location" : undefined}
                    className={`flex items-center px-2 font-tty text-[20px] focus-visible:outline-offset-[-4px] ${
                      isActive ? "tty-rev focus-visible:outline-tinta" : "text-tenue hover:text-texto"
                    }`}
                  >
                    <span aria-hidden="true">{link.n}:</span>
                    {link.label}
                    {link.sr && <span className="sr-only">{link.sr}</span>}
                    <span aria-hidden="true" className="inline-block w-[1ch]">
                      {isActive ? "*" : ""}
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>

          <button
            ref={toggleRef}
            type="button"
            className="tty-key flex min-w-11 items-center justify-center text-fosforo focus-visible:outline-offset-[-4px] md:hidden"
            aria-expanded={open}
            aria-controls="menu-movil"
            onClick={() => setOpen(!open)}
          >
            <span aria-hidden="true">[</span>
            {open ? "cerrar" : "menú"}
            <span aria-hidden="true">]</span>
          </button>
        </div>

        {open && (
          <ul id="menu-movil" className="border-t border-linea bg-panel md:hidden">
            {links.map((link) => {
              const isActive = active === link.href;
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    aria-current={isActive ? "location" : undefined}
                    onClick={() => setOpen(false)}
                    className={`flex h-11 items-center px-4 font-tty text-[22px] focus-visible:outline-offset-[-4px] ${
                      isActive ? "tty-rev focus-visible:outline-tinta" : "text-texto"
                    }`}
                  >
                    <span aria-hidden="true">({link.n})&nbsp;</span>
                    {link.label}
                    {link.sr && <span className="sr-only">{link.sr}</span>}
                    <span aria-hidden="true" className="ml-2">
                      {isActive ? "*" : ""}
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        )}
      </nav>
    </header>
  );
};

export default NavBar;
