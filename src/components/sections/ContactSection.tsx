import { useState, type FormEvent } from "react";
import { BriefcaseBusiness, Camera, Mail, MapPin, MessageCircle, Send } from "lucide-react";
import { contactInfo } from "../../data/contact";
import { Button } from "../ui/Button";
import { SectionHeader } from "../ui/SectionHeader";

const solutionTypes = [
  "Sitio web",
  "Sistema de gestión",
  "Automatización",
  "Plataforma a medida",
  "No estoy seguro todavía",
];

const initialForm = {
  name: "",
  organization: "",
  email: "",
  phone: "",
  solutionType: solutionTypes[0],
  message: "",
};

const contactItems = [
  {
    label: "Email",
    value: contactInfo.email,
    href: `mailto:${contactInfo.email}`,
    icon: Mail,
  },
  {
    label: "Instagram",
    value: contactInfo.instagramLabel,
    href: contactInfo.instagram,
    external: true,
    icon: Camera,
  },
  {
    label: "LinkedIn",
    value: contactInfo.linkedinLabel,
    href: contactInfo.linkedin,
    external: true,
    icon: BriefcaseBusiness,
  },
  {
    label: "Ubicación",
    value: contactInfo.location,
    icon: MapPin,
  },
];

type ContactSectionProps = {
  compact?: boolean;
};

export function ContactSection({ compact = false }: ContactSectionProps) {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("");

  const updateField = (field: keyof typeof initialForm, value: string) => {
    setForm((currentForm) => ({ ...currentForm, [field]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!form.name.trim() || !form.message.trim()) {
      setStatus("Completá tu nombre y mensaje para preparar la consulta.");
      return;
    }

    const message = `
Hola ModoBeta, quiero consultar por una solución digital.

Nombre: ${form.name}
Institución o profesión: ${form.organization}
Email: ${form.email}
Teléfono: ${form.phone}
Tipo de solución: ${form.solutionType}
Mensaje: ${form.message}
`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`${contactInfo.whatsappBaseUrl}?text=${encodedMessage}`, "_blank");
    setStatus("Consulta preparada. Se abrió WhatsApp con tu mensaje.");
  };

  return (
    <section className={`section contact-section ${compact ? "contact-section--compact" : ""}`}>
      <div className="container contact-section__grid">
        <div>
          <SectionHeader
            eyebrow="Contacto"
            title="Hablemos de tu proyecto"
            description="Contanos qué necesitás mejorar, ordenar o digitalizar. Podemos ayudarte a pensar una solución adecuada para tu institución, centro o práctica profesional."
          />
          <div className="contact-list">
            {contactItems.map((item) => {
              const ContactIcon = item.icon;
              const content = (
                <>
                  <ContactIcon className="contact-list__icon" aria-hidden="true" strokeWidth={1.9} />
                  <span>
                    <strong>{item.label}</strong>
                    <small>{item.value}</small>
                  </span>
                </>
              );

              return item.href ? (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noreferrer" : undefined}
                >
                  {content}
                </a>
              ) : (
                <div key={item.label}>{content}</div>
              );
            })}
          </div>
          {compact ? (
            <Button href={contactInfo.whatsappLink} newTab icon={MessageCircle} iconPosition="left">
              Hablemos por WhatsApp
            </Button>
          ) : null}
        </div>

        {!compact ? (
          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <div className="form-grid">
              <label>
                Nombre
                <input
                  name="name"
                  autoComplete="name"
                  value={form.name}
                  onChange={(event) => updateField("name", event.target.value)}
                  required
                />
              </label>
              <label>
                Institución o profesión
                <input
                  name="organization"
                  autoComplete="organization"
                  value={form.organization}
                  onChange={(event) =>
                    updateField("organization", event.target.value)
                  }
                />
              </label>
              <label>
                Email
                <input
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={form.email}
                  onChange={(event) => updateField("email", event.target.value)}
                />
              </label>
              <label>
                Teléfono
                <input
                  name="phone"
                  autoComplete="tel"
                  value={form.phone}
                  onChange={(event) => updateField("phone", event.target.value)}
                />
              </label>
            </div>
            <label>
              Tipo de solución
              <select
                name="solutionType"
                value={form.solutionType}
                onChange={(event) => updateField("solutionType", event.target.value)}
              >
                {solutionTypes.map((type) => (
                  <option key={type}>{type}</option>
                ))}
              </select>
            </label>
            <label>
              Mensaje
              <textarea
                name="message"
                rows={6}
                value={form.message}
                onChange={(event) => updateField("message", event.target.value)}
                required
              />
            </label>
            {status ? <p className="form-status" role="status">{status}</p> : null}
            <Button type="submit" icon={Send}>Enviar consulta</Button>
          </form>
        ) : null}
      </div>
    </section>
  );
}
