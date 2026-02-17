import React, { useState } from 'react';
import { List, X } from '@phosphor-icons/react';
import ShamvitaLogo from './ShamvitaLogo';

const Navbar = () => {
    const [mobileMenu, setMobileMenu] = useState(false);

    // Using window.location.pathname to determine active state
    const currentPath = typeof window !== 'undefined' ? window.location.pathname : '';

    const navLinks = [
        { label: 'Soluciones', href: '/#soluciones' },
        { label: 'Casos de éxito', href: '/proyectos' },
    ];

    return (
        <nav
            className="navbar-solid sticky top-0 z-50"
            style={{ transition: 'background 0.2s ease' }}
        >
            <div className="container">
                <div className="flex justify-between h-14 items-center">
                    {/* Logo */}
                    <a
                        href="/"
                        className="flex items-center gap-2.5 cursor-pointer no-underline group"
                    >
                        <ShamvitaLogo size={28} variant="dark" />
                        <span
                            className="group-hover:text-brand transition-colors"
                            style={{
                                fontFamily: "'Fredoka', sans-serif",
                                fontWeight: 700,
                                fontSize: '20px',
                                letterSpacing: '-0.02em',
                                color: 'var(--color-text-primary)',
                            }}
                        >
                            Shamvita
                        </span>
                    </a>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="no-underline"
                                style={{
                                    fontFamily: "'Fredoka', sans-serif",
                                    fontSize: '15px',
                                    fontWeight: currentPath.startsWith(link.href) ? 600 : 500,
                                    color:
                                        currentPath.startsWith(link.href)
                                            ? 'var(--color-text-primary)'
                                            : 'var(--color-text-secondary)',
                                    transition: 'color 0.2s',
                                }}
                            >
                                {link.label}
                            </a>
                        ))}
                        <a
                            href="https://wa.me/584269599721?text=Hola%2C%20me%20interesa%20agendar%20una%20llamada%20estrat%C3%A9gica%20con%20Shamvita."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary no-underline"
                            style={{ padding: '10px 24px', fontSize: '14px' }}
                        >
                            Agendar llamada
                        </a>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        className="md:hidden bg-transparent border-none cursor-pointer p-1"
                        onClick={() => setMobileMenu(!mobileMenu)}
                        style={{ color: 'var(--color-text-primary)' }}
                    >
                        {mobileMenu ? (
                            <X size={24} weight="bold" />
                        ) : (
                            <List size={24} weight="bold" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileMenu && (
                <div
                    className="md:hidden animate-fade-in"
                    style={{
                        padding: '16px 24px 24px',
                        borderTop: '1px solid var(--color-border-light)',
                        background: 'var(--color-surface-elevated)',
                    }}
                >
                    <div className="flex flex-col gap-1">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="no-underline text-left"
                                style={{
                                    fontFamily: "'Fredoka', sans-serif",
                                    fontSize: '17px',
                                    fontWeight: 600,
                                    color: 'var(--color-text-primary)',
                                    padding: '16px 0',
                                    borderBottom: '1px solid var(--color-border-light)',
                                    display: 'block'
                                }}
                            >
                                {link.label}
                            </a>
                        ))}
                        <a
                            href="https://wa.me/584269599721?text=Hola%2C%20me%20interesa%20agendar%20una%20llamada%20estrat%C3%A9gica%20con%20Shamvita."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary no-underline block text-center"
                            style={{ marginTop: '20px', width: '100%' }}
                        >
                            Agendar llamada
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
