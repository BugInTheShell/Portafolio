// Fila de chips en mono: las herramientas tal como se escriben.
const Chips = ({ items }) => {
  return (
    <ul className="flex flex-wrap gap-2">
      {items.map((item) => (
        <li key={item} className="ink-chip">
          {item}
        </li>
      ))}
    </ul>
  );
};

export default Chips;
