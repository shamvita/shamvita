import satori from 'satori';
import sharp from 'sharp';
import fs from 'node:fs';
import path from 'node:path';

const FONT_PATH = path.resolve('src/fonts/Fredoka-SemiBold.ttf');

let fontDataCache: ArrayBuffer | null = null;

function getFontData(): ArrayBuffer {
    if (!fontDataCache) {
        fontDataCache = fs.readFileSync(FONT_PATH).buffer as ArrayBuffer;
    }
    return fontDataCache;
}

// ─── Shared Design Tokens ───
const BRAND = '#A36AF3';
const BG_DARK = '#0A0A0F';
const BG_GRADIENT_END = '#14142B';
const TEXT_PRIMARY = '#FFFFFF';
const TEXT_SECONDARY = '#A0A0B8';
const WIDTH = 1200;
const HEIGHT = 630;

// ─── Dot Pattern (subtle background texture) ───
function dotPattern(color: string, opacity: number) {
    return {
        position: 'absolute' as const,
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: `radial-gradient(circle, ${color} 1px, transparent 1px)`,
        backgroundSize: '32px 32px',
        opacity,
    };
}

// ─── Accent Orb (glowing brand circle) ───
function accentOrb(x: string, y: string, size: number, color: string, blur: number) {
    return {
        position: 'absolute' as const,
        left: x,
        top: y,
        width: `${size}px`,
        height: `${size}px`,
        borderRadius: '50%',
        background: color,
        filter: `blur(${blur}px)`,
        opacity: 0.3,
    };
}

// ─── OG Image Templates ───

export function ogHome() {
    return {
        type: 'div',
        props: {
            style: {
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                background: `linear-gradient(135deg, ${BG_DARK} 0%, ${BG_GRADIENT_END} 50%, ${BG_DARK} 100%)`,
                fontFamily: 'Fredoka',
                position: 'relative',
                overflow: 'hidden',
            },
            children: [
                // Dot pattern
                { type: 'div', props: { style: dotPattern('rgba(163,106,243,0.08)', 1) } },
                // Accent orbs
                { type: 'div', props: { style: accentOrb('-5%', '20%', 400, BRAND, 120) } },
                { type: 'div', props: { style: accentOrb('70%', '60%', 300, '#6366F1', 100) } },
                // Content
                {
                    type: 'div',
                    props: {
                        style: {
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            zIndex: 10,
                            textAlign: 'center',
                            padding: '0 80px',
                        },
                        children: [
                            // Badge
                            {
                                type: 'div',
                                props: {
                                    style: {
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '8px',
                                        padding: '8px 20px',
                                        borderRadius: '980px',
                                        background: 'rgba(163,106,243,0.15)',
                                        border: '1px solid rgba(163,106,243,0.3)',
                                        marginBottom: '32px',
                                    },
                                    children: [
                                        {
                                            type: 'span',
                                            props: {
                                                style: { color: BRAND, fontSize: '16px', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase' },
                                                children: '⚡ Software Studio',
                                            },
                                        },
                                    ],
                                },
                            },
                            // Title
                            {
                                type: 'div',
                                props: {
                                    style: {
                                        fontSize: '72px',
                                        fontWeight: 600,
                                        color: TEXT_PRIMARY,
                                        letterSpacing: '-0.03em',
                                        lineHeight: 1.1,
                                        marginBottom: '20px',
                                    },
                                    children: 'Shamvita',
                                },
                            },
                            // Subtitle
                            {
                                type: 'div',
                                props: {
                                    style: {
                                        fontSize: '28px',
                                        color: TEXT_SECONDARY,
                                        lineHeight: 1.4,
                                        maxWidth: '700px',
                                    },
                                    children: 'Partner Estratégico de Crecimiento Digital',
                                },
                            },
                            // Accent line
                            {
                                type: 'div',
                                props: {
                                    style: {
                                        width: '80px',
                                        height: '4px',
                                        borderRadius: '2px',
                                        background: `linear-gradient(90deg, ${BRAND}, #6366F1)`,
                                        marginTop: '36px',
                                    },
                                },
                            },
                        ],
                    },
                },
                // Bottom bar
                {
                    type: 'div',
                    props: {
                        style: {
                            position: 'absolute',
                            bottom: '32px',
                            left: '48px',
                            right: '48px',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            zIndex: 10,
                        },
                        children: [
                            { type: 'span', props: { style: { color: TEXT_SECONDARY, fontSize: '16px' }, children: 'shamvita.com' } },
                            { type: 'span', props: { style: { color: 'rgba(163,106,243,0.6)', fontSize: '14px' }, children: 'ROI en < 90 días' } },
                        ],
                    },
                },
            ],
        },
    };
}

export function ogProyectos() {
    return {
        type: 'div',
        props: {
            style: {
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                background: `linear-gradient(145deg, ${BG_DARK} 0%, ${BG_GRADIENT_END} 100%)`,
                fontFamily: 'Fredoka',
                position: 'relative',
                overflow: 'hidden',
                padding: '60px 80px',
            },
            children: [
                // Grid pattern
                { type: 'div', props: { style: { ...dotPattern('rgba(163,106,243,0.05)', 1), backgroundSize: '48px 48px' } } },
                // Orbs
                { type: 'div', props: { style: accentOrb('75%', '-10%', 350, BRAND, 130) } },
                { type: 'div', props: { style: accentOrb('-10%', '70%', 250, '#22C55E', 100) } },
                // Content
                {
                    type: 'div',
                    props: {
                        style: { display: 'flex', flexDirection: 'column', zIndex: 10 },
                        children: [
                            // Badge
                            {
                                type: 'div',
                                props: {
                                    style: {
                                        display: 'flex',
                                        alignItems: 'center',
                                        padding: '8px 18px',
                                        borderRadius: '980px',
                                        background: 'rgba(163,106,243,0.12)',
                                        border: '1px solid rgba(163,106,243,0.25)',
                                        marginBottom: '28px',
                                        alignSelf: 'flex-start',
                                    },
                                    children: [
                                        { type: 'span', props: { style: { color: BRAND, fontSize: '14px', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase' }, children: 'Portafolio' } },
                                    ],
                                },
                            },
                            // Title
                            {
                                type: 'div',
                                props: {
                                    style: { fontSize: '64px', fontWeight: 600, color: TEXT_PRIMARY, letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: '16px' },
                                    children: 'Nuestro Trabajo',
                                },
                            },
                            // Subtitle
                            {
                                type: 'div',
                                props: {
                                    style: { fontSize: '24px', color: TEXT_SECONDARY, lineHeight: 1.5 },
                                    children: 'Soluciones técnicas entregadas con éxito',
                                },
                            },
                            // Project count pills
                            {
                                type: 'div',
                                props: {
                                    style: { display: 'flex', gap: '12px', marginTop: '40px' },
                                    children: ['ERP', 'POS', 'E-commerce', 'Landing'].map((tag) => ({
                                        type: 'div',
                                        props: {
                                            style: {
                                                padding: '10px 20px',
                                                borderRadius: '12px',
                                                background: 'rgba(255,255,255,0.06)',
                                                border: '1px solid rgba(255,255,255,0.1)',
                                                color: TEXT_SECONDARY,
                                                fontSize: '15px',
                                                fontWeight: 600,
                                            },
                                            children: tag,
                                        },
                                    })),
                                },
                            },
                        ],
                    },
                },
                // Bottom
                {
                    type: 'div',
                    props: {
                        style: { position: 'absolute', bottom: '32px', left: '80px', right: '80px', display: 'flex', justifyContent: 'space-between', zIndex: 10 },
                        children: [
                            { type: 'span', props: { style: { color: TEXT_SECONDARY, fontSize: '16px' }, children: 'shamvita.com' } },
                            { type: 'span', props: { style: { color: 'rgba(163,106,243,0.6)', fontSize: '14px' }, children: '4 proyectos destacados' } },
                        ],
                    },
                },
            ],
        },
    };
}

export function ogContacto() {
    return {
        type: 'div',
        props: {
            style: {
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                background: `linear-gradient(160deg, ${BG_DARK} 0%, #1A0F2E 50%, ${BG_DARK} 100%)`,
                fontFamily: 'Fredoka',
                position: 'relative',
                overflow: 'hidden',
            },
            children: [
                // Large accent circle
                {
                    type: 'div',
                    props: {
                        style: {
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            width: '500px',
                            height: '500px',
                            borderRadius: '50%',
                            border: '1px solid rgba(163,106,243,0.15)',
                            opacity: 0.8,
                        },
                    },
                },
                {
                    type: 'div',
                    props: {
                        style: {
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            width: '350px',
                            height: '350px',
                            borderRadius: '50%',
                            border: '1px solid rgba(163,106,243,0.1)',
                            opacity: 0.6,
                        },
                    },
                },
                // Orbs
                { type: 'div', props: { style: accentOrb('30%', '20%', 300, BRAND, 150) } },
                // Content
                {
                    type: 'div',
                    props: {
                        style: { display: 'flex', flexDirection: 'column', alignItems: 'center', zIndex: 10, textAlign: 'center', padding: '0 80px' },
                        children: [
                            // Icon circle
                            {
                                type: 'div',
                                props: {
                                    style: {
                                        width: '80px',
                                        height: '80px',
                                        borderRadius: '50%',
                                        background: `linear-gradient(135deg, ${BRAND}, #6366F1)`,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        marginBottom: '32px',
                                        fontSize: '36px',
                                    },
                                    children: '💬',
                                },
                            },
                            { type: 'div', props: { style: { fontSize: '60px', fontWeight: 600, color: TEXT_PRIMARY, letterSpacing: '-0.03em', marginBottom: '16px' }, children: 'Hablemos' } },
                            { type: 'div', props: { style: { fontSize: '24px', color: TEXT_SECONDARY, lineHeight: 1.5, maxWidth: '600px' }, children: 'Agenda tu diagnóstico gratuito de 30 minutos' } },
                            // CTA pill
                            {
                                type: 'div',
                                props: {
                                    style: {
                                        marginTop: '40px',
                                        padding: '14px 32px',
                                        borderRadius: '980px',
                                        background: `linear-gradient(135deg, ${BRAND}, #8F52E0)`,
                                        color: '#FFFFFF',
                                        fontSize: '18px',
                                        fontWeight: 600,
                                    },
                                    children: 'Agendar Llamada →',
                                },
                            },
                        ],
                    },
                },
                // Bottom
                {
                    type: 'div',
                    props: {
                        style: { position: 'absolute', bottom: '32px', left: '48px', right: '48px', display: 'flex', justifyContent: 'center', zIndex: 10 },
                        children: [
                            { type: 'span', props: { style: { color: TEXT_SECONDARY, fontSize: '16px' }, children: 'shamvita.com' } },
                        ],
                    },
                },
            ],
        },
    };
}

export function ogCaseStudy(project: {
    title: string;
    client: string;
    service: string;
    stack: string[];
    results: { label: string; value: string }[];
}) {
    return {
        type: 'div',
        props: {
            style: {
                width: '100%',
                height: '100%',
                display: 'flex',
                background: `linear-gradient(150deg, ${BG_DARK} 0%, ${BG_GRADIENT_END} 100%)`,
                fontFamily: 'Fredoka',
                position: 'relative',
                overflow: 'hidden',
            },
            children: [
                // Dot pattern
                { type: 'div', props: { style: dotPattern('rgba(163,106,243,0.04)', 1) } },
                // Orbs
                { type: 'div', props: { style: accentOrb('70%', '-15%', 400, BRAND, 140) } },
                { type: 'div', props: { style: accentOrb('-5%', '80%', 200, '#3B82F6', 80) } },
                // Left content
                {
                    type: 'div',
                    props: {
                        style: { display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '60px 70px', flex: 1, zIndex: 10 },
                        children: [
                            // Client badge
                            {
                                type: 'div',
                                props: {
                                    style: {
                                        display: 'flex',
                                        alignItems: 'center',
                                        padding: '6px 16px',
                                        borderRadius: '980px',
                                        background: 'rgba(163,106,243,0.12)',
                                        border: '1px solid rgba(163,106,243,0.25)',
                                        marginBottom: '24px',
                                        alignSelf: 'flex-start',
                                    },
                                    children: [
                                        { type: 'span', props: { style: { color: BRAND, fontSize: '13px', fontWeight: 600, letterSpacing: '0.04em', textTransform: 'uppercase' }, children: `${project.client} — ${project.service}` } },
                                    ],
                                },
                            },
                            // Title
                            {
                                type: 'div',
                                props: {
                                    style: { fontSize: '48px', fontWeight: 600, color: TEXT_PRIMARY, letterSpacing: '-0.03em', lineHeight: 1.15, marginBottom: '28px', maxWidth: '650px' },
                                    children: project.title,
                                },
                            },
                            // Stack tags
                            {
                                type: 'div',
                                props: {
                                    style: { display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '36px' },
                                    children: project.stack.map((tech) => ({
                                        type: 'div',
                                        props: {
                                            style: {
                                                padding: '6px 14px',
                                                borderRadius: '8px',
                                                background: 'rgba(255,255,255,0.06)',
                                                border: '1px solid rgba(255,255,255,0.1)',
                                                color: TEXT_SECONDARY,
                                                fontSize: '13px',
                                                fontWeight: 600,
                                            },
                                            children: tech,
                                        },
                                    })),
                                },
                            },
                            // Results row
                            {
                                type: 'div',
                                props: {
                                    style: { display: 'flex', gap: '32px' },
                                    children: project.results.slice(0, 3).map((r) => ({
                                        type: 'div',
                                        props: {
                                            style: { display: 'flex', flexDirection: 'column' },
                                            children: [
                                                { type: 'div', props: { style: { fontSize: '32px', fontWeight: 600, color: BRAND, letterSpacing: '-0.02em' }, children: r.value } },
                                                { type: 'div', props: { style: { fontSize: '13px', color: TEXT_SECONDARY, marginTop: '4px' }, children: r.label } },
                                            ],
                                        },
                                    })),
                                },
                            },
                        ],
                    },
                },
                // Right accent bar
                {
                    type: 'div',
                    props: {
                        style: {
                            position: 'absolute',
                            right: 0,
                            top: 0,
                            bottom: 0,
                            width: '6px',
                            background: `linear-gradient(180deg, ${BRAND}, #6366F1, transparent)`,
                        },
                    },
                },
                // Bottom
                {
                    type: 'div',
                    props: {
                        style: { position: 'absolute', bottom: '28px', left: '70px', right: '70px', display: 'flex', justifyContent: 'space-between', zIndex: 10 },
                        children: [
                            { type: 'span', props: { style: { color: TEXT_SECONDARY, fontSize: '14px' }, children: 'shamvita.com' } },
                            { type: 'span', props: { style: { color: 'rgba(163,106,243,0.5)', fontSize: '13px' }, children: 'Caso de Éxito' } },
                        ],
                    },
                },
            ],
        },
    };
}


// ─── Render Function ───
export async function renderOgImage(element: any): Promise<Buffer> {
    const fontData = getFontData();

    const svg = await satori(element, {
        width: WIDTH,
        height: HEIGHT,
        fonts: [
            {
                name: 'Fredoka',
                data: fontData,
                weight: 600,
                style: 'normal',
            },
        ],
    });

    const png = await sharp(Buffer.from(svg))
        .resize(WIDTH, HEIGHT)
        .png()
        .toBuffer();

    return png;
}
