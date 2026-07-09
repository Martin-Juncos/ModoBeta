import {
  Blocks,
  BriefcaseBusiness,
  Camera,
  Folder,
  Globe,
  Home,
  Mail,
  MapPin,
  MessageCircle,
  Navigation,
  PanelTop,
  Users,
  Workflow,
} from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../../assets/brand/logo.webp";
import { contactInfo } from "../../data/contact";

const navigationLinks = [
  { label: "Inicio", to: "/", icon: Home },
  { label: "Nosotros", to: "/nosotros", icon: Users },
  { label: "Soluciones", to: "/soluciones", icon: Blocks },
  { label: "Proyectos", to: "/proyectos", icon: Folder },
  { label: "Contacto", to: "/contacto", icon: MessageCircle },
];

const solutionLinks = [
  { label: "Sistemas de gestión", icon: PanelTop },
  { label: "Sitios institucionales", icon: Globe },
  { label: "Automatización", icon: Workflow },
  { label: "Dashboards", icon: Blocks },
  { label: "Plataformas a medida", icon: PanelTop },
];

const contactLinks = [
  {
    label: "WhatsApp",
    href: contactInfo.whatsappLink,
    external: true,
    icon: MessageCircle,
  },
  {
    label: contactInfo.email,
    href: `mailto:${contactInfo.email}`,
    icon: Mail,
  },
  {
    label: "Instagram",
    href: contactInfo.instagram,
    external: true,
    icon: Camera,
  },
  {
    label: "LinkedIn",
    href: contactInfo.linkedin,
    external: true,
    icon: BriefcaseBusiness,
  },
  {
    label: contactInfo.location,
    icon: MapPin,
  },
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
          <h3>
            <Navigation className="site-footer__heading-icon" aria-hidden="true" strokeWidth={2} />
            Navegación
          </h3>
          <ul className="footer-list">
            {navigationLinks.map((link) => {
              const LinkIcon = link.icon;

              return (
                <li key={link.to}>
                  <Link to={link.to}>
                    <LinkIcon className="footer-list__icon" aria-hidden="true" strokeWidth={1.9} />
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div>
          <h3>
            <Blocks className="site-footer__heading-icon" aria-hidden="true" strokeWidth={2} />
            Soluciones
          </h3>
          <ul className="footer-list">
            {solutionLinks.map((link) => {
              const SolutionIcon = link.icon;

              return (
                <li key={link.label}>
                  <SolutionIcon className="footer-list__icon" aria-hidden="true" strokeWidth={1.9} />
                  {link.label}
                </li>
              );
            })}
          </ul>
        </div>

        <div>
          <h3>
            <MessageCircle className="site-footer__heading-icon" aria-hidden="true" strokeWidth={2} />
            Contacto
          </h3>
          <ul className="footer-list">
            {contactLinks.map((link) => {
              const ContactIcon = link.icon;
              const content = (
                <>
                  <ContactIcon className="footer-list__icon" aria-hidden="true" strokeWidth={1.9} />
                  {link.label}
                </>
              );

              return (
                <li key={link.label}>
                  {link.href ? (
                    <a
                      href={link.href}
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noreferrer" : undefined}
                    >
                      {content}
                    </a>
                  ) : (
                    content
                  )}
                </li>
              );
            })}
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
