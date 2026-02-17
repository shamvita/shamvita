import type { APIRoute, GetStaticPaths } from 'astro';
import { CASE_STUDIES } from '../../data/caseStudies';
import { ogCaseStudy, renderOgImage } from '../../utils/og-utils';

export const getStaticPaths: GetStaticPaths = () => {
    return Object.keys(CASE_STUDIES).map((id) => ({
        params: { id },
        props: { project: (CASE_STUDIES as Record<string, typeof CASE_STUDIES[keyof typeof CASE_STUDIES]>)[id] },
    }));
};

export const GET: APIRoute = async ({ props }) => {
    const { project } = props as { project: (typeof CASE_STUDIES)[keyof typeof CASE_STUDIES] };

    const png = await renderOgImage(
        ogCaseStudy({
            title: project.title,
            client: project.client,
            service: project.service,
            stack: project.stack,
            results: project.results,
        })
    );

    return new Response(png, {
        headers: {
            'Content-Type': 'image/png',
            'Cache-Control': 'public, max-age=31536000, immutable',
        },
    });
};
