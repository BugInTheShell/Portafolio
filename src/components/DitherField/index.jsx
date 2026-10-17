// Sombreado punteado del hero hecho con píxeles: tres bandas de dither
// (50%, 25%, 12.5%) que se desvanecen desde la esquina superior derecha.
const DitherField = () => {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0">
      <i className="dither dither-50" />
      <i className="dither dither-25" />
      <i className="dither dither-12" />
    </div>
  );
};

export default DitherField;
