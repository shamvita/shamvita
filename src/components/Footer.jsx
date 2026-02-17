import React from 'react';
import ShamvitaLogo from './ShamvitaLogo';

const Footer = () => {

    const currentYear = new Date().getFullYear();

    return (
        <footer
            style={{
                borderTop: '1px solid var(--color-border-light)',
                background: 'var(--color-surface)',
                padding: '48px 24px',
                marginTop: '80px',
            }}
        >
            <div
                className="container"
                style={{ textAlign: 'center' }}
            >
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '8px',
                        marginBottom: '12px',
                    }}
                >
                    <ShamvitaLogo size={20} variant="dark" />
                    <span
                        style={{
                            fontWeight: 600,
                            letterSpacing: '-0.01em',
                            fontSize: '15px',
                            color: 'var(--color-text-primary)',
                        }}
                    >
                        Shamvita
                    </span>
                </div>
                <p
                    style={{
                        fontSize: '13px',
                        color: 'var(--color-text-tertiary)',
                    }}
                >
                    &copy; {currentYear} Shamvita Software Studio. Todos los
                    derechos reservados.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
