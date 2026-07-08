import { Button } from "../components/ui/Button";
import { ScrambleTitle } from "../components/ui/ScrambleTitle";

export function NotFound() {
  return (
    <section className="page-hero">
      <div className="container page-hero__content">
        <span className="eyebrow">404</span>
        <h1>
          <ScrambleTitle text="Página no encontrada" />
        </h1>
        <p>La ruta que buscás no existe o fue movida.</p>
        <Button to="/">Volver al inicio</Button>
      </div>
    </section>
  );
}
