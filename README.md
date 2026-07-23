# Portfolio — Rafael Tijero Fuentes

Sitio personal construido con [Astro](https://astro.build) + Tailwind CSS. Pensado
para vivir en `rafotijero.dev` una vez comprado el dominio.

## Estructura

```
src/
├── components/     # Header, Hero, About, TechStack, Experience, Certifications, Projects, Contact, Footer
├── data/           # Contenido (experiencia, certificaciones, stack, sobre mí) — editar aquí, no en los componentes
├── layouts/         # Layout.astro: <head>, meta/SEO, shell HTML
├── pages/
│   └── index.astro # Ensambla todas las secciones
└── styles/
    └── global.css  # Tokens de diseño (colores, tipografía) vía Tailwind v4 @theme

.github/workflows/   # CI: build en cada push/PR (validación, sin deploy configurado aún)
public/cv/           # CV descargable (PDF)
```

## Desarrollo local

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # genera ./dist (sitio 100% estático)
npm run preview   # sirve ./dist localmente para verificar el build
```

## Contenido

Todo el texto vive en `src/data/*.ts`, separado de los componentes. **`src/data/*.ts`
es la fuente de verdad** de los datos (fechas, certificaciones, experiencia): si algo
cambia, se edita primero ahí y luego se refleja en el CV en LaTeX
(`../Documentos Personales/CV - Perfil Developer/LaTeX/CV_Rafael_Tijero_Developer.pdf`),
no al revés. El PDF compilado se copia manualmente a `public/cv/` para que quede
disponible en la descarga del sitio.

La sección **Proyectos** está a propósito en estado "En construcción"
(`src/components/Projects.astro`) hasta tener case studies reales listos.

## Despliegue

El plan es publicarlo en Cloudflare (dominio + Pages), pendiente de configurar.
El trabajo pendiente se trackea en los [Issues](../../issues) del repo, no aquí.
