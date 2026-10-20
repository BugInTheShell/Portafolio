import { useEffect, useRef, useState } from "react";
import "./Navbar.scss";

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
    <header className="navbar">
      <nav aria-label="Principal" onBlur={onBlur}>
        <div className="navbar__bar">
          <a href="#inicio" className="navbar__brand">
            Esteban Galván
            <span className="cursor cursor--blink" aria-hidden="true" />
          </a>

          <ul className="navbar__list">
            {links.map((link) => {
              const isActive = active === link.href;
              return (
                <li key={link.href} className="navbar__item">
                  <a
                    href={link.href}
                    aria-current={isActive ? "location" : undefined}
                    className={`navbar__link${isActive ? " navbar__link--active" : ""}`}
                  >
                    <span aria-hidden="true">{link.n}:</span>
                    {link.label}
                    {link.sr && <span className="visually-hidden">{link.sr}</span>}
                    <span aria-hidden="true" className="navbar__marker">
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
            className="navbar__toggle"
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
          <ul id="menu-movil" className="navbar__menu">
            {links.map((link) => {
              const isActive = active === link.href;
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    aria-current={isActive ? "location" : undefined}
                    onClick={() => setOpen(false)}
                    className={`navbar__menu-link${isActive ? " navbar__menu-link--active" : ""}`}
                  >
                    <span aria-hidden="true">({link.n})&nbsp;</span>
                    {link.label}
                    {link.sr && <span className="visually-hidden">{link.sr}</span>}
                    <span aria-hidden="true" className="navbar__menu-marker">
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
