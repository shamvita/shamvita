import React from 'react';

const ProjectCard = ({ title, tech, cat, image, onClick }) => {
    return (
        <div
            onClick={onClick}
            style={{
                cursor: 'pointer',
                transition: 'all 0.3s cubic-bezier(0.22, 1, 0.36, 1)',
                background: 'var(--color-surface)',
                borderRadius: '20px',
                padding: '12px',
                border: '1px solid transparent',
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow =
                    '0 12px 30px rgba(0,0,0,0.06)';
                e.currentTarget.style.borderColor = 'var(--color-border-light)';
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.borderColor = 'transparent';
            }}
        >
            {/* Image placeholder */}
            <div
                style={{
                    aspectRatio: '4/3',
                    borderRadius: '16px',
                    background:
                        'linear-gradient(145deg, var(--color-surface-elevated) 0%, var(--color-brand-light) 100%)',
                    border: '1px solid var(--color-border-light)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '16px',
                    overflow: 'hidden',
                    position: 'relative',
                }}
            >
                <div
                    style={{
                        position: 'absolute',
                        inset: 0,
                        background:
                            'radial-gradient(circle at 60% 40%, rgba(163,106,243,0.1) 0%, transparent 60%)',
                    }}
                />
                {image ? (
                    <img
                        src={image}
                        alt={title}
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            transition: 'transform 0.5s ease',
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
                        onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                    />
                ) : (
                    <span
                        style={{
                            color: 'var(--color-text-secondary)',
                            fontSize: '13px',
                            fontWeight: 600,
                            zIndex: 1,
                            opacity: 0.7,
                        }}
                    >
                        Project Preview
                    </span>
                )}
            </div>

            {/* Info */}
            <div style={{ padding: '0 4px 4px' }}>
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'flex-start',
                        marginBottom: '4px',
                    }}
                >
                    <h3
                        style={{
                            fontSize: '17px',
                            fontWeight: 600,
                            color: 'var(--color-text-primary)',
                            lineHeight: 1.3,
                        }}
                    >
                        {title}
                    </h3>
                </div>
                <p
                    style={{
                        fontSize: '14px',
                        color: 'var(--color-text-secondary)',
                        marginBottom: '12px',
                    }}
                >
                    {tech}
                </p>
                <span
                    className="badge"
                    style={{
                        fontSize: '11px',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                        background: 'var(--color-surface-elevated)',
                        color: 'var(--color-text-secondary)',
                        border: '1px solid var(--color-border-light)',
                    }}
                >
                    {cat}
                </span>
            </div>
        </div>
    );
};

export default ProjectCard;
