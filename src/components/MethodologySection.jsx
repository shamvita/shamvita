import React from 'react';
import { Stack, Database, ShieldCheck, ArrowRight } from '@phosphor-icons/react';

const pillars = [
    {
        icon: Stack,
        title: 'Desacoplamiento de Procesos',
        description:
            'Diseñamos sistemas modulares donde cada componente cumple una función crítica sin comprometer la estabilidad global.',
        tag: 'Arquitectura',
    },
    {
        icon: Database,
        title: 'Sincronización Real-Time',
        description:
            'Flujos de datos bidireccionales que garantizan información idéntica en cada punto de tu infraestructura.',
        tag: 'Datos',
    },
    {
        icon: ShieldCheck,
        title: 'Seguridad por Diseño',
        description:
            'Integridad de datos como base fundamental, aplicando cifrado y validación estricta en cada capa del stack.',
        tag: 'Seguridad',
    },
];

const MethodologySection = () => {
    return (
        <section
            className="section"
            style={{
                borderBottom: '1px solid var(--color-border-light)',
                background: 'var(--color-surface)' // Slightly different bg to distinguish sections
            }}
        >
            <div className="container">
                {/* Section Header */}
                <div
                    className="animate-fade-up"
                    style={{ marginBottom: '80px', maxWidth: '700px' }}
                >
                    <span
                        style={{
                            fontSize: '13px',
                            fontWeight: 700,
                            textTransform: 'uppercase',
                            letterSpacing: '0.06em',
                            color: 'var(--color-brand)',
                            marginBottom: '16px',
                            display: 'block',
                        }}
                    >
                        Metodología
                    </span>
                    <h2
                        style={{
                            fontSize: 'clamp(32px, 5vw, 48px)',
                            fontWeight: 700,
                            lineHeight: 1.1,
                            letterSpacing: '-0.02em',
                            color: 'var(--color-text-primary)',
                        }}
                    >
                        Ingeniería precisa. <br />
                        <span style={{ color: 'var(--color-brand)', opacity: 0.8 }}>Sin deuda técnica.</span>
                    </h2>
                </div>

                {/* Linear List Layout */}
                <div className="methodology-list">
                    {pillars.map((pillar, i) => {
                        const Icon = pillar.icon;
                        return (
                            <div
                                key={i}
                                className={`methodology-row animate-fade-up delay-${(i + 1) * 100}`}
                                style={{
                                    borderTop: '1px solid var(--color-border-light)',
                                    padding: '48px 0',
                                    display: 'grid',
                                    gridTemplateColumns: '1fr',
                                    gap: '24px',
                                    transition: 'background 0.3s ease',
                                }}
                            >
                                <div className="flex items-center gap-4 md:col-span-1">
                                    <div
                                        style={{
                                            width: '48px',
                                            height: '48px',
                                            borderRadius: '50%',
                                            background: 'var(--color-surface-elevated)',
                                            border: '1px solid var(--color-border-light)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            color: 'var(--color-brand)',
                                        }}
                                    >
                                        <Icon size={24} weight="duotone" />
                                    </div>
                                    <span
                                        style={{
                                            fontSize: '14px',
                                            fontWeight: 600,
                                            textTransform: 'uppercase',
                                            letterSpacing: '0.05em',
                                            color: 'var(--color-text-tertiary)',
                                        }}
                                    >
                                        0{i + 1}
                                    </span>
                                </div>

                                <div className="md:col-span-2">
                                    <h3
                                        style={{
                                            fontSize: '24px',
                                            fontWeight: 600,
                                            color: 'var(--color-text-primary)',
                                            marginBottom: '8px',
                                        }}
                                    >
                                        {pillar.title}
                                    </h3>
                                </div>

                                <div className="md:col-span-3 max-w-lg">
                                    <p
                                        style={{
                                            fontSize: '16px',
                                            color: 'var(--color-text-secondary)',
                                            lineHeight: 1.6,
                                        }}
                                    >
                                        {pillar.description}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                    {/* Closing Border */}
                    <div style={{ borderTop: '1px solid var(--color-border-light)' }} />
                </div>
            </div>

            <style>{`
                .methodology-list {
                    width: 100%;
                }
                .methodology-row:hover {
                    /* Subtle interaction */
                    background: linear-gradient(90deg, rgba(163, 106, 243, 0.03) 0%, rgba(0,0,0,0) 100%); 
                }
                @media (min-width: 768px) {
                    .methodology-row {
                        grid-template-columns: 1fr 2fr 3fr;
                        align-items: center;
                        gap: 40px;
                        padding: 64px 0; /* More breathing room on desktop */
                    }
                }
            `}</style>
        </section>
    );
};

export default MethodologySection;
