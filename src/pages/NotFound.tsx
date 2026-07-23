import { Button } from "../components/ui/Button";
import { useLocation } from "react-router-dom";
import { Seo } from "../components/seo/Seo";
import { ScrambleTitle } from "../components/ui/ScrambleTitle";
import { pageSeo } from "../data/site";

export function NotFound() {
  const location = useLocation();

  return (
    <>
      <Seo {...pageSeo.notFound} path={location.pathname} noindex />
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
    </>
  );
}
