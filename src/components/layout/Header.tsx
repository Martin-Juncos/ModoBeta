import { useEffect, useState } from "react";
import { Blocks, Folder, Home, Menu, MessageCircle, Users, X } from "lucide-react";
import { Link, NavLink, useLocation } from "react-router-dom";
import devsWordmark from "../../assets/brand/devs-co-header-wordmark.png";
import headerWordmark from "../../assets/brand/modobeta-header-wordmark.png";
import logo from "../../assets/brand/logo.webp";
import { contactInfo } from "../../data/contact";
import { Button } from "../ui/Button";

const navItems = [
  { label: "Inicio", to: "/", icon: Home },
  { label: "Nosotros", to: "/nosotros", icon: Users },
  { label: "Soluciones", to: "/soluciones", icon: Blocks },
  { label: "Proyectos", to: "/proyectos", icon: Folder },
  { label: "Contacto", to: "/contacto", icon: MessageCircle },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link className="brand" to="/" aria-label="Ir al inicio de ModoBeta">
          <img className="brand__icon" src={logo} alt="" aria-hidden="true" />
          <span className="brand__wordmark-stack" aria-hidden="true">
            <img
              className="brand__wordmark brand__wordmark--modo"
              src={headerWordmark}
              alt=""
              decoding="async"
            />
            <img
              className="brand__wordmark brand__wordmark--devs"
              src={devsWordmark}
              alt=""
              decoding="async"
            />
          </span>
        </Link>

        <nav
          id="mobile-navigation"
          className={`site-nav ${isOpen ? "site-nav--open" : ""}`}
          aria-label="Navegación principal"
        >
          {navItems.map((item) => {
            const NavIcon = item.icon;

            return (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  isActive ? "site-nav__link site-nav__link--active" : "site-nav__link"
                }
              >
                <NavIcon className="site-nav__icon" aria-hidden="true" strokeWidth={2} />
                {item.label}
              </NavLink>
            );
          })}
        </nav>

        <div className="site-header__actions">
          <Button
            href={contactInfo.whatsappLink}
            newTab
            className="site-header__cta"
            icon={MessageCircle}
            iconPosition="left"
          >
            Hablemos
          </Button>
          <button
            className="menu-button"
            type="button"
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsOpen((currentValue) => !currentValue)}
          >
            {isOpen ? (
              <X className="menu-button__icon" aria-hidden="true" strokeWidth={2} />
            ) : (
              <Menu className="menu-button__icon" aria-hidden="true" strokeWidth={2} />
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
