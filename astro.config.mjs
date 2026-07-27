// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	// TODO: cambiar a 'https://rafotijero.dev' cuando el dominio esté comprado
	// y conectado en Cloudflare. Mientras tanto apunta a la URL real donde
	// vive el sitio, para que canonical/sitemap/OG no referencien un dominio
	// que todavía no responde.
	site: 'https://portfolio.rafo-tijero.workers.dev',
	integrations: [sitemap()],
	vite: {
		plugins: [tailwindcss()],
	},
});
