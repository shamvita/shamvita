import type { APIRoute } from 'astro';
import { ogProyectos, renderOgImage } from '../../utils/og-utils';

export const GET: APIRoute = async () => {
    const png = await renderOgImage(ogProyectos());
    return new Response(png, {
        headers: {
            'Content-Type': 'image/png',
            'Cache-Control': 'public, max-age=31536000, immutable',
        },
    });
};
