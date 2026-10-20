import "./DitherField.scss";

// Sombreado punteado del hero hecho con píxeles: tres bandas de dither
// (50%, 25%, 12.5%) que se desvanecen desde la esquina superior derecha.
const DitherField = () => {
  return (
    <div aria-hidden="true" className="dither">
      <i className="dither__band dither__band--50" />
      <i className="dither__band dither__band--25" />
      <i className="dither__band dither__band--12" />
    </div>
  );
};

export default DitherField;
