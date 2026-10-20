import "./Chips.scss";

// Fila de chips: las herramientas tal como se escriben.
const Chips = ({ items, className = "" }) => {
  return (
    <ul className={`chips ${className}`.trim()}>
      {items.map((item) => (
        <li key={item} className="chips__item">
          {item}
        </li>
      ))}
    </ul>
  );
};

export default Chips;
