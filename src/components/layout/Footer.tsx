import { Link } from "react-router-dom";
import logo from "../../assets/brand/logo.webp";
import { contactInfo } from "../../data/contact";

const navigationLinks = [
  { label: "Inicio", to: "/" },
  { label: "Nosotros", to: "/nosotros" },
  { label: "Soluciones", to: "/soluciones" },
  { label: "Proyectos", to: "/proyectos" },
  { label: "Contacto", to: "/contacto" },
];

const solutionLinks = [
  "Sistemas de gestión",
  "Sitios institucionales",
  "Automatización",
  "Dashboards",
  "Plataformas a medida",
];

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__grid">
        <div className="site-footer__brand">
          <img src={logo} alt="ModoBeta" loading="lazy" decoding="async" />
          <h2>ModoBeta</h2>
          <p>Software a medida para instituciones que trabajan con personas.</p>
        </div>

        <div>
          <h3>Navegación</h3>
          <ul className="footer-list">
            {navigationLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3>Soluciones</h3>
          <ul className="footer-list">
            {solutionLinks.map((link) => (
              <li key={link}>{link}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3>Contacto</h3>
          <ul className="footer-list">
            <li>
              <a href={contactInfo.whatsappLink} target="_blank" rel="noreferrer">
                WhatsApp
              </a>
            </li>
            <li>
              <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
            </li>
            <li>
              <a href={contactInfo.instagram} target="_blank" rel="noreferrer">
                Instagram
              </a>
            </li>
            <li>{contactInfo.location}</li>
          </ul>
        </div>
      </div>
      <div className="container site-footer__bottom">
        <span>© 2026 ModoBeta. Todos los derechos reservados.</span>
        <span>{contactInfo.domain}</span>
      </div>
    </footer>
  );
}
