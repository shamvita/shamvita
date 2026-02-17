import React from 'react';
import { CheckCircle, CaretRight } from '@phosphor-icons/react';

const FeaturedProject = ({ openCaseStudy }) => {
    return (
        <section className="section">
            <div className="container">
                <div className="featured-grid">
                    {/* Image Column */}
                    <div className="animate-fade-up">
                        <div
                            style={{
                                position: 'relative',
                                borderRadius: '24px',
                                overflow: 'visible',
                            }}
                        >
                            <div
                                style={{
                                    aspectRatio: '16/10',
                                    borderRadius: '24px',
                                    overflow: 'hidden',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    background: 'var(--color-surface)',
                                    border: '1px solid var(--color-border-light)',
                                }}
                            >
                                <img
                                    src="/showcase/chromaflow.png"
                                    alt="ChromaFlow Dashboard"
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                    }}
                                />
                            </div>

                            {/* Solid Status Badge (No Glass) */}
                            <div
                                className="animate-scale-in delay-300"
                                style={{
                                    position: 'absolute',
                                    bottom: '-16px',
                                    right: '24px',
                                    padding: '14px 20px',
                                    borderRadius: '14px',
                                    background: '#1D1D1F',
                                    color: 'white',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '12px',
                                    boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
                                }}
                            >
                                <div
                                    style={{
                                        width: '8px',
                                        height: '8px',
                                        background: '#22c55e',
                                        borderRadius: '50%',
                                        boxShadow: '0 0 8px #22c55e',
                                    }}
                                />
                                <div>
                                    <p
                                        style={{
                                            fontSize: '11px',
                                            textTransform: 'uppercase',
                                            letterSpacing: '0.05em',
                                            color: 'rgba(255,255,255,0.5)',
                                            fontWeight: 600,
                                        }}
                                    >
                                        Status
                                    </p>
                                    <p
                                        style={{
                                            fontSize: '14px',
                                            fontWeight: 700,
                                            color: 'white',
                                        }}
                                    >
                                        En Producción
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Content Column */}
                    <div
                        className="animate-fade-up delay-200"
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                        }}
                    >
                        <span
                            style={{
                                color: 'var(--color-brand)',
                                fontWeight: 700,
                                fontSize: '13px',
                                textTransform: 'uppercase',
                                letterSpacing: '0.06em',
                                marginBottom: '16px',
                            }}
                        >
                            Caso de Éxito
                        </span>
                        <h2
                            style={{
                                fontSize: 'clamp(28px, 4vw, 40px)',
                                lineHeight: 1.1,
                                fontWeight: 700,
                                letterSpacing: '-0.02em',
                                color: 'var(--color-text-primary)',
                                marginBottom: '20px',
                            }}
                        >
                            ChromaFlow: <br />
                            Retail Inteligente
                        </h2>
                        <p
                            style={{
                                fontSize: '17px',
                                lineHeight: 1.6,
                                color: 'var(--color-text-secondary)',
                                marginBottom: '28px',
                            }}
                        >
                            Una plataforma integral que sincroniza inventarios de
                            múltiples sucursales, automatiza la facturación y
                            elimina la "ceguera operativa" en tiempo real.
                        </p>

                        <ul
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '10px',
                                marginBottom: '32px',
                            }}
                        >
                            {[
                                'Sincronización Offline-First',
                                'Dashboard de Ventas en Vivo',
                                'Control de Manufactura Híbrida',
                            ].map((item, i) => (
                                <li
                                    key={i}
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '10px',
                                        fontSize: '15px',
                                        color: 'var(--color-text-primary)',
                                        fontWeight: 500,
                                    }}
                                >
                                    <CheckCircle
                                        size={20}
                                        weight="fill"
                                        style={{ color: 'var(--color-brand)' }}
                                    />
                                    {item}
                                </li>
                            ))}
                        </ul>

                        <a
                            href="/proyectos/chromaflow"
                            className="btn-primary no-underline"
                            style={{ alignSelf: 'flex-start' }}
                        >
                            Ver Caso de Estudio
                            <CaretRight size={18} weight="bold" />
                        </a>
                    </div>
                </div>
            </div>

            <style>{`
                .featured-grid {
                    display: grid;
                    grid-template-columns: 1fr;
                    gap: 48px;
                }
                @media (min-width: 900px) {
                    .featured-grid {
                        grid-template-columns: 1.2fr 0.8fr;
                        align-items: center;
                    }
                }
            `}</style>
        </section>
    );
};

export default FeaturedProject;
