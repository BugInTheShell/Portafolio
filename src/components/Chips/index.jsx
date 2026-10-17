// Fila de chips: las herramientas tal como se escriben.
const Chips = ({ items, className = "" }) => {
  return (
    <ul className={`flex flex-wrap gap-2 ${className}`}>
      {items.map((item) => (
        <li key={item} className="tty-chip">
          {item}
        </li>
      ))}
    </ul>
  );
};

export default Chips;
