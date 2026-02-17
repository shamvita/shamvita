import React, { useEffect } from 'react';
import {
    ArrowLeft,
    Desktop,
    Stack,
    ShieldCheck,
    PaperPlaneRight,
    CaretRight,
    ArrowsLeftRight,
    Graph,
    Fingerprint,
    Monitor,
    Lightning,
    ChartLine,
    Cpu,
    WhatsappLogo,
    MagnifyingGlass,
    CreditCard,
} from '@phosphor-icons/react';

const ICON_MAP = {
    ArrowsLeftRight,
    Graph,
    Fingerprint,
    Monitor,
    Lightning,
    ChartLine,
    Cpu,
    WhatsappLogo,
    MagnifyingGlass,
    CreditCard,
};

const ValueModule = ({ item, isLarge }) => {
    const Icon = ICON_MAP[item.icon] || Stack;
    return (
        <div
            className="value-module"
            style={{
                gridColumn: isLarge ? 'span 2' : 'span 1',
                padding: '32px',
                background: 'var(--color-surface)',
                borderRadius: '24px',
                border: '1px solid var(--color-border-light)',
                transition: 'all 0.3s cubic-bezier(0.22, 1, 0.36, 1)',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
                position: 'relative',
                overflow: 'hidden',
                cursor: 'pointer',
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.borderColor = item.color || 'var(--color-brand)';
                e.currentTarget.style.boxShadow = '0 12px 30px rgba(0,0,0,0.06)';
                const link = e.currentTarget.querySelector('.arch-link');
                if (link) link.style.opacity = '1';
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'none';
                e.currentTarget.style.borderColor = 'var(--color-border-light)';
                e.currentTarget.style.boxShadow = 'none';
                const link = e.currentTarget.querySelector('.arch-link');
                if (link) link.style.opacity = '0';
            }}
        >
            <div className="flex justify-between items-start">
                <div
                    style={{
                        width: '48px',
                        height: '48px',
                        background: `${item.color}15`,
                        borderRadius: '12px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: item.color || 'var(--color-brand)',
                    }}
                >
                    <Icon size={24} weight="duotone" />
                </div>
                <span
                    style={{
                        fontSize: '11px',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                        padding: '4px 10px',
                        borderRadius: '6px',
                        background: 'var(--color-surface-elevated)',
                        color: 'var(--color-text-secondary)',
                        border: '1px solid var(--color-border-light)',
                    }}
                >
                    {item.tag}
                </span>
            </div>
            <div>
                <h4
                    style={{
                        fontSize: '18px',
                        fontWeight: 700,
                        color: 'var(--color-text-primary)',
                        marginBottom: '6px',
                    }}
                >
                    {item.title}
                </h4>
                <p
                    style={{
                        fontSize: '14px',
                        lineHeight: 1.5,
                        color: 'var(--color-text-secondary)',
                    }}
                >
                    {item.description}
                </p>
            </div>
            <div
                className="arch-link"
                style={{
                    position: 'absolute',
                    bottom: '24px',
                    right: '24px',
                    fontSize: '13px',
                    fontWeight: 600,
                    color: item.color || 'var(--color-brand)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    opacity: 0,
                    transition: 'opacity 0.2s ease',
                }}
            >

            </div>
        </div>
    );
};

const CaseStudy = ({ project, CASE_STUDIES }) => {
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [project]);

    if (!project) return null;

    return (
        <div className="animate-fade-in">
            {/* Dark Hero Banner */}
            <div
                style={{
                    background: '#1D1D1F',
                    color: 'white',
                    padding: '80px 0',
                }}
            >
                <div className="container">
                    <a
                        href="/proyectos"
                        className="no-underline"
                        style={{
                            background: 'transparent',
                            border: 'none',
                            color: 'rgba(255,255,255,0.6)',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                            fontSize: '14px',
                            cursor: 'pointer',
                            marginBottom: '32px',
                            fontFamily: 'inherit',
                        }}
                    >
                        <ArrowLeft size={16} weight="bold" />
                        Volver al Portafolio
                    </a>
                    <h1
                        style={{
                            fontSize: 'clamp(32px, 5vw, 56px)',
                            fontWeight: 700,
                            marginBottom: '24px',
                            lineHeight: 1.1,
                        }}
                    >
                        {project.title}
                    </h1>
                    <div className="flex gap-8 text-sm opacity-80">
                        <div>
                            <span className="block text-xs uppercase tracking-wider opacity-60 mb-1">
                                Cliente
                            </span>
                            {project.client}
                        </div>
                        <div>
                            <span className="block text-xs uppercase tracking-wider opacity-60 mb-1">
                                Servicio
                            </span>
                            {project.service}
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="section" style={{ paddingBottom: '40px' }}>
                <div
                    className="container"
                    style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr',
                        gap: '48px',
                    }}
                >
                    <div
                        className="case-layout"
                        style={{
                            display: 'grid',
                            gap: '48px',
                        }}
                    >
                        <div
                            className="case-main"
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '48px',
                            }}
                        >
                            {/* Challenge & Solution */}
                            <div>
                                <h3 className="section-title">El Reto</h3>
                                <p className="section-text">
                                    {project.challenge}
                                </p>
                            </div>
                            <div>
                                <h3 className="section-title">La Solución</h3>
                                <p className="section-text">
                                    {project.solution}
                                </p>
                                {/* Solution Visual Placeholder */}
                                <div
                                    style={{
                                        width: '100%',
                                        aspectRatio: '16/9',
                                        background: 'var(--color-surface)',
                                        borderRadius: '16px',
                                        marginTop: '24px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        border: '1px solid var(--color-border-light)',
                                        overflow: 'hidden',
                                    }}
                                >
                                    {project.image ? (
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            style={{
                                                width: '100%',
                                                height: '100%',
                                                objectFit: 'cover',
                                            }}
                                        />
                                    ) : (
                                        <span
                                            style={{
                                                color: 'var(--color-text-tertiary)',
                                                fontWeight: 500,
                                            }}
                                        >
                                            {project.imageText}
                                        </span>
                                    )}
                                </div>
                            </div>

                            {/* Innovations Value Modules */}
                            {project.innovations && (
                                <div>
                                    <h3 className="section-title">Valor e Innovación</h3>
                                    <div
                                        style={{
                                            display: 'grid',
                                            gridTemplateColumns: 'repeat(2, 1fr)',
                                            gap: '24px',
                                            marginTop: '20px',
                                        }}
                                    >
                                        {project.innovations.map((inn, i) => (
                                            <ValueModule
                                                key={i}
                                                item={inn}
                                                isLarge={i === 0 && project.innovations.length % 2 !== 0}
                                            />
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Impact Metrics */}
                            {project.results && (
                                <div>
                                    <h3 className="section-title">Impacto</h3>
                                    <div
                                        style={{
                                            display: 'grid',
                                            gridTemplateColumns:
                                                'repeat(3, 1fr)',
                                            gap: '24px',
                                            marginTop: '16px',
                                        }}
                                    >
                                        {project.results.map((res, i) => (
                                            <div
                                                key={i}
                                                style={{
                                                    padding: '24px',
                                                    textAlign: 'center',
                                                    background:
                                                        'var(--color-brand-light)',
                                                    borderRadius: '20px',
                                                }}
                                            >
                                                <div
                                                    style={{
                                                        fontSize: '32px',
                                                        fontWeight: 700,
                                                        color: 'var(--color-brand)',
                                                        marginBottom: '4px',
                                                    }}
                                                >
                                                    {res.value}
                                                </div>
                                                <div
                                                    style={{
                                                        fontSize: '13px',
                                                        color: 'var(--color-text-secondary)',
                                                        fontWeight: 600,
                                                    }}
                                                >
                                                    {res.label}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Sidebar */}
                        <div
                            className="case-sidebar"
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '32px',
                            }}
                        >
                            {/* Tech Stack */}
                            <div className="card">
                                <h4
                                    style={{
                                        fontSize: '14px',
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.05em',
                                        marginBottom: '16px',
                                        color: 'var(--color-text-secondary)',
                                    }}
                                >
                                    Tecnología
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                    {project.stack.map((tech, i) => (
                                        <span key={i} className="badge">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* CTA */}
                            <div
                                className="card"
                                style={{
                                    background: '#1D1D1F',
                                    color: 'white',
                                }}
                            >
                                <h4
                                    style={{
                                        fontSize: '18px',
                                        fontWeight: 600,
                                        marginBottom: '8px',
                                    }}
                                >
                                    ¿Listo para escalar?
                                </h4>
                                <p
                                    style={{
                                        fontSize: '14px',
                                        opacity: 0.8,
                                        marginBottom: '16px',
                                        lineHeight: 1.5,
                                    }}
                                >
                                    Construyamos algo similar para tu empresa.
                                </p>
                                <a
                                    href="https://wa.me/584269599721?text=Hola%2C%20me%20interesa%20un%20proyecto%20similar.%20Vi%20su%20portafolio%20en%20shamvita.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-primary no-underline"
                                    style={{
                                        width: '100%',
                                        justifyContent: 'center',
                                    }}
                                >
                                    Empezar ahora
                                    <PaperPlaneRight size={18} weight="bold" />
                                </a>
                            </div>

                            {/* Related Project */}
                            {project.relatedProjectId && (
                                <a
                                    href={`/proyectos/${project.relatedProjectId}`}
                                    className="card no-underline"
                                    style={{
                                        cursor: 'pointer',
                                        transition:
                                            'transform 0.2s, box-shadow 0.2s',
                                        display: 'block'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.transform =
                                            'translateY(-2px)';
                                        e.currentTarget.style.boxShadow =
                                            '0 10px 20px rgba(0,0,0,0.08)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform =
                                            'none';
                                        e.currentTarget.style.boxShadow =
                                            'none';
                                    }}
                                >
                                    <h4
                                        style={{
                                            fontSize: '12px',
                                            textTransform: 'uppercase',
                                            letterSpacing: '0.05em',
                                            color: 'var(--color-text-secondary)',
                                            marginBottom: '8px',
                                        }}
                                    >
                                        Proyecto Relacionado
                                    </h4>
                                    <h5
                                        style={{
                                            fontSize: '16px',
                                            fontWeight: 600,
                                            color: 'var(--color-text-primary)',
                                            marginBottom: '4px',
                                        }}
                                    >
                                        {
                                            CASE_STUDIES[
                                                project.relatedProjectId
                                            ].title
                                        }
                                    </h5>
                                    <p
                                        style={{
                                            fontSize: '13px',
                                            color: 'var(--color-text-secondary)',
                                        }}
                                    >
                                        {project.relatedProjectNote}
                                    </p>
                                    <div
                                        style={{
                                            marginTop: '12px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '4px',
                                            fontSize: '13px',
                                            color: 'var(--color-brand)',
                                            fontWeight: 600,
                                        }}
                                    >
                                        Ver Caso
                                        <CaretRight size={14} weight="bold" />
                                    </div>
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
        .section-title {
          fontSize: 24px;
          fontWeight: 600;
          color: var(--color-text-primary);
          marginBottom: 16px;
        }
        .section-text {
          fontSize: 16px;
          lineHeight: 1.6;
          color: var(--color-text-secondary);
        }
        .card {
          padding: 24px;
          background: var(--color-surface);
          border: 1px solid var(--color-border-light);
          border-radius: 20px;
        }
        @media (min-width: 1024px) {
          .case-layout {
            grid-template-columns: 1fr 320px;
          }
          .case-sidebar {
            position: sticky;
            top: 100px;
            height: fit-content;
          }
        }
      `}</style>
        </div>
    );
};

export default CaseStudy;
