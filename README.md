# ModoBeta Landing Page

## ¿Qué es este proyecto?

Este proyecto es la landing institucional de **ModoBeta**, una empresa de desarrollo de software a medida para instituciones, centros interdisciplinarios, centros educativos, clínicas y profesionales.

El sitio comunica los servicios principales de ModoBeta, muestra proyectos realizados y facilita el contacto por WhatsApp, email e Instagram.

Está construido como una aplicación frontend multipágina con:

- React
- Vite
- TypeScript
- React Router DOM
- CSS global moderno
- Deploy preparado para Vercel

## ¿Cómo lo instalo?

Primero asegurate de tener instalado:

- Node.js `^20.19.0 || >=22.12.0`
- npm

Luego instalá las dependencias:

```bash
npm ci
```

En Windows PowerShell, si `npm` falla por la política de ejecución de scripts, usá:

```bash
npm.cmd ci
```

## ¿Cómo lo uso?

Para correr el proyecto en modo desarrollo:

```bash
npm run dev
```

En Windows PowerShell:

```bash
npm.cmd run dev
```

Para generar el build de producción:

```bash
npm run build
```

En Windows PowerShell:

```bash
npm.cmd run build
```

El build genera la carpeta `dist`.

Para previsualizar el build localmente:

```bash
npm run preview
```

## ¿Cómo contribuyo?

1. Revisá `AGENTS.md` antes de modificar el proyecto.
2. Creá una rama nueva para tus cambios.
3. Mantené la estructura actual del proyecto:
   - páginas en `src/pages/`
   - componentes en `src/components/`
   - datos editables en `src/data/`
   - estilos globales en `src/styles/global.css`
4. No edites manualmente `dist/`.
5. No agregues dependencias nuevas si el cambio puede resolverse con React y CSS.
6. Antes de cerrar cambios, ejecutá:

```bash
npm.cmd run build
```

Actualmente no hay scripts de lint o tests configurados en `package.json`.

## Deploy

El proyecto incluye `vercel.json` con configuración para Vercel:

- framework `vite`
- instalación con `npm ci`
- build con `npm run build`
- salida en `dist`
- fallback hacia `index.html` para rutas internas de React Router

Hecho by ModoBeta con mucho 💕 y ☕
