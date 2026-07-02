# ModoBeta Landing Page

Landing page institucional para ModoBeta, empresa de desarrollo de software a medida.

## Tecnologias

- React
- Vite
- React Router DOM
- TypeScript
- CSS moderno
- Deploy preparado para Vercel

## Requisitos

- Node.js `^20.19.0 || >=22.12.0`
- npm

## Instalacion

```bash
npm ci
```

## Desarrollo

```bash
npm run dev
```

## Build

```bash
npm run build
```

El build genera la carpeta `dist`.

## Deploy en Vercel

El proyecto incluye `vercel.json` con:

- framework preset `vite`
- instalacion con `npm ci`
- build command `npm run build`
- output directory `dist`
- fallback de React Router hacia `index.html` para rutas internas

### Opcion recomendada: GitHub + Vercel

1. Subir el repositorio a GitHub.
2. Entrar a Vercel y elegir **Add New Project**.
3. Importar el repositorio.
4. Confirmar la configuracion:
   - Framework Preset: `Vite`
   - Install Command: `npm ci`
   - Build Command: `npm run build`
   - Output Directory: `dist`
5. Crear el proyecto.
6. Cada push a la rama principal desplegara produccion.

### Opcion CLI

```bash
npm i -g vercel
vercel login
vercel
vercel --prod
```
