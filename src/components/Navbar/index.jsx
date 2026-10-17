import { useState } from "react";

const links = [
  { href: "#stack", label: "Stack" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#metodo", label: "Método" },
  { href: "#contacto", label: "Contacto" },
];

const NavBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-10 border-b border-linea bg-tinta/90 backdrop-blur-sm">
      <nav className="mx-auto flex h-16 max-w-[1120px] items-center justify-between px-4 md:px-8" aria-label="Principal">
        <a href="#inicio" className="font-mono text-lg font-semibold whitespace-nowrap lowercase">
          <span className="text-brasa">{">_"}</span> esteban galván
          <span className="ink-cursor" aria-hidden="true" />
        </a>

        <ul className="hidden gap-8 sm:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="ink-label transition-colors hover:text-hueso">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="ink-label sm:hidden"
          aria-expanded={open}
          aria-controls="menu-movil"
          onClick={() => setOpen(!open)}
        >
          {open ? "Cerrar" : "Menú"}
        </button>
      </nav>

      {open && (
        <ul id="menu-movil" className="border-t border-linea px-4 py-2 sm:hidden">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="ink-label block py-3 hover:text-hueso" onClick={() => setOpen(false)}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
};

export default NavBar;
