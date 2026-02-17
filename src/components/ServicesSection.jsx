import React from 'react';
import { Factory, Globe, TrendUp, ArrowRight, Gear, Code, ChartBar } from '@phosphor-icons/react';

const solutions = [
    {
        icon: Factory,
        title: 'Digitalización Industrial',
        description:
            'Transformamos operaciones físicas en sistemas digitales. Especialistas en ERPs , automatización de procesos y gestión de inventarios complejos.',
        tag: 'Operaciones',
        isPrimary: true,
        features: ['Implementación ERP', 'Control de Manufactura', 'Logística Inteligente']
    },
    {
        icon: Globe,
        title: 'Plataformas de Alto Rendimiento',
        description:
            'Desarrollo de SaaS, Web Apps y E-commerce diseñados para escalar millones de transacciones sin fricción.',
        tag: 'Tecnología',
        isPrimary: false,
    },
    {
        icon: TrendUp,
        title: 'Ingeniería de Crecimiento',
        description:
            'No solo código, sino estrategia. Auditorías técnicas, optimización de conversión (CRO) y arquitectura de datos para la toma de decisiones.',
        tag: 'Estrategia',
        isPrimary: false,
    },
];

const ServicesSection = () => {
    return (
        <section
            id="soluciones"
            className="section"
            style={{
                borderBottom: '1px solid var(--color-border-light)',
                position: 'relative',
                overflow: 'hidden'
            }}
        >
            {/* Background Gradient */}
            <div
                style={{
                    position: 'absolute',
                    top: '20%',
                    right: '-10%',
                    width: '600px',
                    height: '600px',
                    background: 'radial-gradient(circle, rgba(163, 106, 243, 0.08) 0%, rgba(0,0,0,0) 70%)',
                    zIndex: 0,
                    pointerEvents: 'none'
                }}
            />

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                {/* Section Header */}
                <div
                    className="animate-fade-up"
                    style={{ marginBottom: '56px', maxWidth: '600px' }}
                >
                    <span
                        style={{
                            fontSize: '13px',
                            fontWeight: 700,
                            textTransform: 'uppercase',
                            letterSpacing: '0.06em',
                            color: 'var(--color-brand)',
                            marginBottom: '12px',
                            display: 'block',
                        }}
                    >
                        Soluciones Estratégicas
                    </span>
                    <h2
                        style={{
                            fontSize: 'clamp(28px, 4vw, 40px)',
                            fontWeight: 700,
                            lineHeight: 1.1,
                            letterSpacing: '-0.02em',
                            color: 'var(--color-text-primary)',
                            marginBottom: '16px'
                        }}
                    >
                        Infraestructura digital para <span style={{ color: 'var(--color-brand)' }}>dominio de mercado.</span>
                    </h2>
                    <p style={{
                        fontSize: '16px',
                        color: 'var(--color-text-secondary)',
                        lineHeight: 1.6
                    }}>
                        Dejamos atrás las "horas de desarrollo" para enfocarnos en activos digitales que generan ventaja competitiva real.
                    </p>
                </div>

                {/* Bento Grid */}
                <div className="solutions-bento">
                    {solutions.map((item, i) => {
                        const Icon = item.icon;
                        return (
                            <div
                                key={i}
                                className={`bento-cell animate-fade-up delay-${(i + 1) * 100}`}
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-between',
                                    background: item.isPrimary ? '#1D1D1F' : 'var(--color-surface)', // Dark card designed for primary
                                    border: item.isPrimary ? '1px solid rgba(255,255,255,0.08)' : '1px solid var(--color-border-light)',
                                    color: item.isPrimary ? 'white' : 'var(--color-text-primary)',
                                    gridRow: item.isPrimary ? 'span 2' : 'span 1',
                                    padding: '32px',
                                    position: 'relative',
                                    overflow: 'hidden'
                                }}
                            >
                                <div>
                                    <div
                                        style={{
                                            width: '48px',
                                            height: '48px',
                                            borderRadius: '12px',
                                            background: item.isPrimary
                                                ? 'rgba(163, 106, 243, 0.2)'
                                                : 'var(--color-brand-light)',
                                            color: 'var(--color-brand)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            marginBottom: '24px',
                                        }}
                                    >
                                        <Icon size={24} weight="duotone" />
                                    </div>

                                    <h3
                                        style={{
                                            fontSize: item.isPrimary ? '28px' : '20px',
                                            fontWeight: 700,
                                            marginBottom: '12px',
                                            lineHeight: 1.2,
                                        }}
                                    >
                                        {item.title}
                                    </h3>

                                    <p
                                        style={{
                                            fontSize: '15px',
                                            color: item.isPrimary
                                                ? 'rgba(255,255,255,0.7)'
                                                : 'var(--color-text-secondary)',
                                            lineHeight: 1.6,
                                            marginBottom: '24px'
                                        }}
                                    >
                                        {item.description}
                                    </p>

                                    {item.isPrimary && (
                                        <ul style={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            gap: '12px',
                                            marginTop: '32px',
                                            padding: 0,
                                            listStyle: 'none'
                                        }}>
                                            {item.features.map((feat, idx) => (
                                                <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '14px', color: 'rgba(255,255,255,0.9)' }}>
                                                    <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--color-brand)' }} />
                                                    {feat}
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>

                                {!item.isPrimary && (
                                    <div style={{
                                        marginTop: 'auto',
                                        display: 'flex',
                                        justifyContent: 'flex-end'
                                    }}>
                                        <div
                                            style={{
                                                width: '32px',
                                                height: '32px',
                                                borderRadius: '50%',
                                                background: 'var(--color-surface-elevated)',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                color: 'var(--color-text-tertiary)'
                                            }}
                                        >
                                            <ArrowRight size={14} weight="bold" />
                                        </div>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>

            <style>{`
                .solutions-bento {
                    display: grid;
                    grid-template-columns: 1fr;
                    gap: 24px;
                }
                @media (min-width: 900px) {
                    .solutions-bento {
                        grid-template-columns: 1.2fr 1fr;
                        grid-template-rows: 240px 240px;
                    }
                }
            `}</style>
        </section>
    );
};

export default ServicesSection;
