# AGENTS.md

## Alcance

Este archivo define instrucciones locales para trabajar en el repositorio ModoBeta.
Tiene prioridad sobre preferencias globales cuando una regla aplique especificamente a este proyecto.

ModoBeta es una landing institucional multipagina para una empresa de desarrollo de software a medida. El objetivo principal del sitio es comunicar servicios, mostrar proyectos y llevar al usuario a contacto por WhatsApp, email o Instagram.

## Estructura Del Proyecto

- `src/main.tsx`: punto de entrada de React. Importa `src/styles/global.css`.
- `src/App.tsx`: define las rutas principales con React Router.
- `src/pages/`: paginas de alto nivel:
  - `Home.tsx`: home principal con hero, previews y contacto compacto.
  - `AboutPage.tsx`: informacion institucional.
  - `SolutionsPage.tsx`: servicios y soluciones.
  - `ProjectsPage.tsx`: portfolio.
  - `ContactPage.tsx`: contacto.
  - `NotFound.tsx`: ruta 404.
- `src/components/layout/`: estructura comun del sitio:
  - `Layout.tsx`: envuelve header, main, footer y la capa decorativa de fondo.
  - `Header.tsx`: navegacion principal.
  - `Footer.tsx`: pie del sitio.
- `src/components/home/`: secciones especificas de la home.
  - `Hero.tsx`: hero principal con dashboard dinamico animado.
- `src/components/sections/`: secciones reutilizables del sitio, como servicios, proyectos, valores, proceso y contacto.
- `src/components/ui/`: componentes UI base (`Button`, `Card`, `SectionHeader`).
- `src/data/`: datos editables del sitio: contacto, servicios, proyectos, problemas, clientes, valores y proceso.
- `src/styles/global.css`: estilos globales, tokens visuales, layout, responsive, fondos y animaciones. Es la fuente principal del sistema visual.
- `src/assets/`: imagenes fuente y optimizadas organizadas por uso:
  - `src/assets/brand/`: marca, logo fuente, favicon fuente y logo WebP usado por la UI.
  - `src/assets/projects/`: capturas de proyectos optimizadas para la web.
  - `src/assets/content/`: imagenes de contenido disponibles para uso futuro.
- `public/`: assets publicos estaticos como favicons, manifest e iconos PWA.
- `dist/`: salida generada por build. No editar manualmente.
- `vercel.json`: configuracion de deploy en Vercel para Vite y fallback de React Router.

## Stack Actual

- React 19
- Vite
- TypeScript
- React Router DOM
- CSS global moderno
- Deploy preparado para Vercel

No se usa Tailwind, CSS Modules, backend ni base de datos en este repositorio.

## Convenciones De Codigo

- Usar TypeScript y archivos `.tsx` para componentes React.
- Componentes en `PascalCase`.
- Hooks con prefijo `use` si se agregan.
- Utilidades y variables en `camelCase`.
- Preferir componentes funcionales.
- Mantener paginas delgadas y delegar secciones en `src/components/`.
- Mantener datos editables en `src/data/` cuando sean contenido, listas, contactos o proyectos.
- Usar los componentes existentes (`Button`, `Card`, `SectionHeader`) antes de crear variantes nuevas.
- Mantener estilos en `src/styles/global.css` siguiendo las clases existentes tipo BEM:
  - `bloque`
  - `bloque__elemento`
  - `bloque--modificador`
- Reutilizar variables CSS definidas en `:root`.
- Mantener el color cian como acento principal:
  - `--color-primary: #00e5ff`
  - `--color-primary-hover: #00d2ee`
- Mantener el oro tecnologico como detalle secundario y sutil:
  - `--color-accent: #ffd600`
  - `--color-accent-hover: #ffea00`
- Las animaciones deben ser sobrias, funcionales y respetar `prefers-reduced-motion`.
- Evitar animar demasiados elementos a la vez.

## UI Y Diseño

- Estetica actual: fondo negro, superficies carbon, cian electrico dominante y oro en microdetalles.
- El sitio debe sentirse moderno, tecnologico, institucional y cercano.
- Mantener buena legibilidad sobre fondo oscuro.
- No cambiar la paleta completa sin pedido explicito.
- No convertir el sitio en una landing generica de SaaS; debe conservar tono de software a medida para instituciones reales.
- El hero actual tiene un dashboard dinamico a la derecha con escenas de:
  - Agenda
  - Informes
  - Mensajeria
  - Automatizacion
- No volver a agregar etiquetas flotantes alrededor del dashboard del hero.
- La capa decorativa `background-circuitry` vive en `Layout.tsx` y se mueve lento con scroll mediante `--circuit-scroll`.
- El favicon de la pestana del navegador se genera desde `src/assets/brand/pestana.png`.
- Los iconos instalables/PWA se generan desde `src/assets/brand/Logo.png`.

## Comandos Importantes

Instalar dependencias:

```bash
npm ci
```

Desarrollo:

```bash
npm run dev
```

En Windows PowerShell, si `npm` falla por execution policy, usar:

```bash
npm.cmd run dev
```

Build de produccion:

```bash
npm run build
```

En Windows PowerShell, preferir:

```bash
npm.cmd run build
```

Preview local del build:

```bash
npm run preview
```

No hay scripts de lint, format ni test definidos actualmente en `package.json`. No reportar lint/tests como ejecutados si no existen.

## Deploy

El deploy esta preparado para Vercel.

`vercel.json` define:

- framework `vite`
- instalacion con `npm ci`
- build con `npm run build`
- salida `dist`
- rewrite a `index.html` para rutas internas de React Router

No modificar `vercel.json` sin verificar que las rutas internas sigan funcionando.

## Restricciones

- No editar `node_modules/`.
- No editar `dist/` manualmente; se regenera con build.
- No hardcodear secretos, tokens, credenciales ni claves API.
- No agregar dependencias nuevas si el efecto puede resolverse con React y CSS.
- No introducir backend, autenticacion, base de datos o formularios persistentes sin pedido explicito.
- No restaurar imagenes eliminadas salvo pedido explicito del usuario. Se quitaron referencias a:
  - `src/assets/hero.png`
  - `src/assets/modobeta_soft.png`
  - `src/assets/organizacion.png`
  - `src/assets/organizacion2.png`
  - `src/assets/tablet dashboar*.png`
- Antes de usar un asset, confirmar que existe en `src/assets/` o `public/`.
- Usar WebP optimizado para imagenes importadas por React cuando sea posible.
- Mantener `src/assets/brand/Logo.png` como fuente de iconos instalables y `src/assets/brand/pestana.png` como fuente de favicon.
- Mantener el formulario/contacto orientado a WhatsApp mientras no exista backend.
- Evitar textos que prometan funcionalidades sensibles no implementadas, como seguridad avanzada, cumplimiento legal o integraciones productivas reales.
- No cambiar datos de contacto sin confirmacion del usuario.
- No reemplazar las capturas reales de proyectos existentes salvo pedido explicito.

## Contexto Del Negocio

ModoBeta desarrolla software a medida para instituciones y profesionales que trabajan con personas.

Audiencias principales:

- centros educativos
- centros interdisciplinarios
- clinicas y servicios de salud
- profesionales independientes
- equipos administrativos o institucionales

Problemas que el sitio debe comunicar:

- procesos desorganizados
- informacion dispersa en papeles, planillas, chats o archivos
- perdida de tiempo administrativo
- comunicacion poco clara con equipos, familias, pacientes o usuarios
- herramientas genericas que no se adaptan al flujo real de trabajo

Soluciones principales:

- sistemas de gestion a medida
- sitios web institucionales
- automatizacion de procesos
- dashboards administrativos
- plataformas para centros interdisciplinarios
- soluciones para educacion

Tono recomendado:

- profesional
- claro
- cercano
- sobrio
- orientado a resolver problemas reales

Evitar:

- lenguaje exageradamente corporativo
- promesas tecnicas no verificables
- claims de seguridad/compliance sin base
- copy demasiado generico o frio

## Verificacion Antes De Cerrar Cambios

Cuando se modifique codigo o estilos, correr como minimo:

```bash
npm.cmd run build
```

Si se toca UI, revisar visualmente en navegador cuando sea posible:

- home
- desktop
- mobile
- consola sin errores
- sin imagenes rotas
- sin overflow horizontal

Si una verificacion no se pudo ejecutar, decirlo explicitamente en la respuesta final.

## Cuándo Actualizar Este Archivo

Actualizar `AGENTS.md` si cambia cualquiera de estos puntos:

- stack principal
- scripts disponibles
- estructura de carpetas
- sistema visual
- rutas principales
- estrategia de deploy
- reglas de negocio
- restricciones sobre assets o datos de contacto
