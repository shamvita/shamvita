import React from 'react';
import {
    CaretRight,
    Lightbulb,
    RocketLaunch,
    Timer,
    TrendUp,
} from '@phosphor-icons/react';

const Hero = ({ setView }) => {
    return (
        <section
            className="section-lg"
            style={{
                background: 'var(--color-surface-elevated)',
                paddingTop: '120px',
                paddingBottom: '96px',
            }}
        >
            <div className="container">
                {/* ─── Main Hero Bento ─── */}
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr',
                        gap: '16px',
                    }}
                    className="hero-bento"
                >
                    {/* ─── Top Row: Headline + Stats ─── */}
                    <div
                        style={{
                            display: 'grid',
                            gap: '16px',
                        }}
                        className="hero-top-row"
                    >
                        {/* Main Headline Cell */}
                        <div
                            className="bento-cell animate-fade-up"
                            style={{
                                padding: '56px 48px',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                            }}
                        >
                            <span
                                className="badge"
                                style={{
                                    alignSelf: 'flex-start',
                                    marginBottom: '24px',
                                }}
                            >
                                Ingeniería & Estrategia de Crecimiento
                            </span>
                            <h1
                                style={{
                                    fontSize: 'clamp(36px, 5vw, 56px)',
                                    fontWeight: 700,
                                    lineHeight: 1.08,
                                    letterSpacing: '-0.03em',
                                    color: 'var(--color-text-primary)',
                                    marginBottom: '20px',
                                }}
                            >
                                Transformamos operaciones digitales en{' '}
                                <span style={{ color: 'var(--color-brand)' }}>
                                    crecimiento medible.
                                </span>
                            </h1>
                            <p
                                style={{
                                    fontSize: '18px',
                                    lineHeight: 1.55,
                                    color: 'var(--color-text-secondary)',
                                    maxWidth: '540px',
                                    marginBottom: '32px',
                                }}
                            >
                                Diseñamos e implementamos sistemas escalables que
                                generan ROI en menos de 90 días.
                            </p>
                            <div
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '12px',
                                    alignItems: 'flex-start',
                                }}
                            >
                                <a
                                    href="https://wa.me/584269599721?text=Hola%2C%20me%20interesa%20agendar%20una%20llamada%20estrat%C3%A9gica%20con%20Shamvita."
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-primary no-underline"
                                    style={{
                                        padding: '14px 32px',
                                        fontSize: '16px',
                                        width: 'fit-content',
                                    }}
                                >
                                    Agendar llamada estratégica
                                    <CaretRight size={16} weight="bold" />
                                </a>
                                <span
                                    style={{
                                        fontSize: '13px',
                                        color: 'var(--color-text-tertiary)',
                                        marginLeft: '4px',
                                    }}
                                >
                                    30 minutos. Sin compromiso.
                                </span>
                                <a
                                    href="/proyectos"
                                    className="no-underline"
                                    style={{
                                        background: 'none',
                                        border: 'none',
                                        cursor: 'pointer',
                                        fontSize: '14px',
                                        fontWeight: 600,
                                        color: 'var(--color-text-secondary)',
                                        fontFamily: "'Fredoka', sans-serif",
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '6px',
                                        transition: 'color 0.2s',
                                        padding: 0,
                                        marginTop: '4px',
                                    }}
                                    onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-brand)'}
                                    onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-text-secondary)'}
                                >
                                    Ver casos de éxito
                                    <CaretRight size={14} weight="bold" />
                                </a>
                            </div>
                        </div>

                        {/* Stats Column */}
                        <div
                            style={{
                                display: 'grid',
                                gridTemplateRows: '1fr 1fr',
                                gap: '16px',
                            }}
                        >
                            {/* Stat Cell 1 */}
                            <div
                                className="bento-cell-dark animate-fade-up delay-100"
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-between',
                                    padding: '32px',
                                }}
                            >
                                <TrendUp
                                    size={28}
                                    weight="duotone"
                                    style={{
                                        color: 'var(--color-brand)',
                                        marginBottom: '16px',
                                    }}
                                />
                                <div>
                                    <div
                                        style={{
                                            fontSize: '44px',
                                            fontWeight: 700,
                                            lineHeight: 1,
                                            letterSpacing: '-0.04em',
                                        }}
                                    >
                                        +4
                                    </div>
                                    <div
                                        style={{
                                            fontSize: '14px',
                                            color: 'rgba(255,255,255,0.5)',
                                            marginTop: '4px',
                                            fontWeight: 500,
                                        }}
                                    >
                                        Proyectos con ROI medible
                                    </div>
                                </div>
                            </div>

                            {/* Stat Cell 2 */}
                            <div
                                className="bento-cell animate-fade-up delay-200"
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-between',
                                    padding: '32px',
                                    background: 'var(--color-brand-light)',
                                    borderColor: 'transparent',
                                }}
                            >
                                <Timer
                                    size={28}
                                    weight="duotone"
                                    style={{
                                        color: 'var(--color-brand)',
                                        marginBottom: '16px',
                                    }}
                                />
                                <div>
                                    <div
                                        style={{
                                            fontSize: '44px',
                                            fontWeight: 700,
                                            lineHeight: 1,
                                            letterSpacing: '-0.04em',
                                            color: 'var(--color-brand)',
                                        }}
                                    >
                                        &lt; 90 días
                                    </div>
                                    <div
                                        style={{
                                            fontSize: '14px',
                                            color: 'var(--color-text-secondary)',
                                            marginTop: '4px',
                                            fontWeight: 500,
                                        }}
                                    >
                                        Para ver resultados tangibles
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ─── Bottom Row: Trust Strip ─── */}
                    <div
                        style={{
                            display: 'grid',
                            gap: '16px',
                        }}
                        className="hero-bottom-row"
                    >
                        <div
                            className="bento-cell animate-fade-up delay-200"
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '16px',
                                padding: '24px 32px',
                            }}
                        >
                            <Lightbulb
                                size={24}
                                weight="duotone"
                                style={{ color: 'var(--color-brand)', flexShrink: 0 }}
                            />
                            <div>
                                <div
                                    style={{
                                        fontSize: '15px',
                                        fontWeight: 700,
                                        color: 'var(--color-text-primary)',
                                    }}
                                >
                                    Diseño Estratégico
                                </div>
                                <div
                                    style={{
                                        fontSize: '13px',
                                        color: 'var(--color-text-secondary)',
                                    }}
                                >
                                    Arquitectura pensada para escalar
                                </div>
                            </div>
                        </div>

                        <div
                            className="bento-cell animate-fade-up delay-300"
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '16px',
                                padding: '24px 32px',
                            }}
                        >
                            <RocketLaunch
                                size={24}
                                weight="duotone"
                                style={{ color: 'var(--color-brand)', flexShrink: 0 }}
                            />
                            <div>
                                <div
                                    style={{
                                        fontSize: '15px',
                                        fontWeight: 700,
                                        color: 'var(--color-text-primary)',
                                    }}
                                >
                                    Entrega Ágil
                                </div>
                                <div
                                    style={{
                                        fontSize: '13px',
                                        color: 'var(--color-text-secondary)',
                                    }}
                                >
                                    MVPs funcionales en semanas
                                </div>
                            </div>
                        </div>

                        <div
                            className="bento-cell animate-fade-up delay-400"
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '16px',
                                padding: '24px 32px',
                            }}
                        >
                            <TrendUp
                                size={24}
                                weight="duotone"
                                style={{ color: 'var(--color-brand)', flexShrink: 0 }}
                            />
                            <div>
                                <div
                                    style={{
                                        fontSize: '15px',
                                        fontWeight: 700,
                                        color: 'var(--color-text-primary)',
                                    }}
                                >
                                    ROI Medible
                                </div>
                                <div
                                    style={{
                                        fontSize: '13px',
                                        color: 'var(--color-text-secondary)',
                                    }}
                                >
                                    Resultados con métricas reales
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                .hero-top-row {
                    grid-template-columns: 1fr;
                }
                .hero-bottom-row {
                    grid-template-columns: 1fr;
                }
                @media (min-width: 768px) {
                    .hero-top-row {
                        grid-template-columns: 1.6fr 1fr;
                    }
                    .hero-bottom-row {
                        grid-template-columns: repeat(3, 1fr);
                    }
                }
            `}</style>
        </section>
    );
};

export default Hero;
