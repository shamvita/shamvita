import React, { useState } from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import MethodologySection from './MethodologySection';
import FeaturedProject from './FeaturedProject';
import ProjectCard from './ProjectCard';
import CaseStudy from './CaseStudy';
import ContactForm from './ContactForm';
import Footer from './Footer';

const CASE_STUDIES = {
    'chromaflow': {
        title: "ChromaFlow: El futuro del retail de pinturas",
        client: "Grupo Comercial de Jesús",
        service: "Desarrollo APP para coloristas",
        challenge: "El cliente operaba con hojas de cálculo y un software antiguo que no permitía la venta offline ni la sincronización de inventario entre sus 5 sucursales. Esto generaba pérdidas por falta de stock y errores humanos en la facturación.",
        solution: "Desarrollamos una aplicación de escritorio multiplataforma (Electron) con un frontend reactivo en Vue.js. Implementamos una base de datos local que se sincroniza automáticamente con un servidor central cuando hay conexión a internet.",
        results: [
            { label: "Tiempo de facturación", value: "-40%" },
            { label: "Visibilidad de stock", value: "100%" },
            { label: "Ventas mensuales", value: "+15%" }
        ],
        stack: ['Electron', 'Vue 3', 'Node.js', 'PostgreSQL', 'Tailwind'],
        image: "/showcase/chromaflow.png",
        imageText: "Screenshot del Dashboard de Ventas",
        relatedProjectId: 'comercial-de-jesus',
        relatedProjectNote: "Implementación estratégica para Grupo de Pinturas",
        innovations: [
            { title: "Sincronización Offline", description: "Venta continua sin internet con balanceo local.", icon: "Lightning", tag: "Infraestructura", color: "#A36AF3" },
            { title: "Dashboard en Vivo", description: "Métricas de ventas en tiempo real por sucursal.", icon: "ChartLine", tag: "Analytics", color: "#22C55E" },
            { title: "Manufactura Híbrida", description: "Control de fórmulas por peso y volumen.", icon: "Cpu", tag: "Operaciones", color: "#F59E0B" }
        ]
    },
    'comercial-de-jesus': {
        title: "Digitalización Integral para Grupo Retail de Pinturas",
        client: "Grupo Comercial de Jesús",
        service: "Inventario & Manufactura",
        challenge: "El grupo enfrentaba 'ceguera operativa': inventarios aislados que causaban fuga de ventas, costos desconocidos en la fabricación de colores ('a pepa de ojo'), y total dependencia de fórmulas manuales o memoria de empleados.",
        solution: "Arquitectura Multi-Compañía en la Nube basada en sistema de invetario en hono.js y postgres. Implementamos visibilidad de stock cruzado (Venta de Grupo), lógica de manufactura híbrida (Arquitectónica vs Automotriz).",
        results: [
            { label: "Recuperación de ventas", value: "Alta" },
            { label: "Control de margen", value: "100%" },
            { label: "Retención de clientes", value: "Máxima" }
        ],
        stack: ['React/Vue', 'Hono.js', 'postgres'],
        image: "/showcase/djesus.png",
        imageText: "Interfaz Shop Floor ChromaFlow",
        relatedProjectId: 'chromaflow',
        relatedProjectNote: "Tecnología POS y Control de Manufactura",
        innovations: [
            { title: "Venta Cruzada", description: "Call center centralizado con stock multi-sucursal.", icon: "ArrowsLeftRight", tag: "Logística", color: "#3B82F6" },
            { title: "Costeo Dinámico", description: "Cálculo real de margen por fórmula preparada.", icon: "Graph", tag: "Finanzas", color: "#10B981" },
            { title: "ADN Digital", description: "Etiquetado único para replicación exacta de color.", icon: "Fingerprint", tag: "Calidad", color: "#EF4444" },
            { title: "Shop Floor Táctil", description: "Terminales simplificadas para operarios de planta.", icon: "Monitor", tag: "UX Industrial", color: "#6366F1" }
        ]
    },
    'compuplaza': {
        title: "CompuPlaza: Modernización del Retail Tecnológico",
        client: "CompuPlaza",
        service: "E-commerce & Automatización",
        challenge: "La tienda dependía exclusivamente de WhatsApp para gestionar ventas y consultas. No existía un catálogo digital actualizado, lo que obligaba al equipo a responder manualmente disponibilidad y precios fluctuantes.",
        solution: "Desarrollamos una plataforma de e-commerce a medida que centraliza el inventario y automatiza el flujo de ventas. Integramos una lógica de precios dinámica vinculada a la tasa oficial BCV y un sistema de redirección inteligente a WhatsApp.",
        results: [
            { label: "Automatización de precios", value: "100%" },
            { label: "Carga de trabajo manual", value: "-60%" },
            { label: "Conversión de ventas", value: "+25%" }
        ],
        stack: ['Laravel', 'PostgreSQL', 'BCV API Integration'],
        image: "/showcase/compuplaza.png",
        imageText: "Catálogo Digital y Flujo Automatizado",
        innovations: [
            { title: "Sincronización BCV", description: "Actualización automática de precios según tasa oficial.", icon: "Lightning", tag: "Fintech", color: "#F59E0B" },
            { title: "Venta Directa", description: "WhatsApp Business con carrito autogestionado.", icon: "WhatsappLogo", tag: "CRM", color: "#22C55E" },
            { title: "Filtros Técnicos", description: "Búsqueda avanzada por especificaciones de hardware.", icon: "MagnifyingGlass", tag: "E-commerce", color: "#3B82F6" },
            { title: "Pagos Cashea", description: "Integración de visualización de cuotas sin interés.", icon: "CreditCard", tag: "Pagos", color: "#A36AF3" }
        ]
    }
};

const PORTFOLIO_ITEMS = [
    { id: 'chromaflow', title: "ChromaFlow", tech: "Electron + Vue", cat: "POS", image: "/showcase/chromaflow.png" },
    { id: 'comercial-de-jesus', title: "Comercial de Jesús", tech: "CRM + INVENTARIO", cat: "ERP", image: "/showcase/djesus.png" },
    { id: 'compuplaza', title: "CompuPlaza", tech: "Laravel + PostgreSQL", cat: "E-commerce", image: "/showcase/compuplaza.png" },
    { id: 'lex-system', title: "Lex System", tech: "Go + React", cat: "Web App" },
    { id: 'inventario-pro', title: "Inventario Pro", tech: "Node.js + SQL", cat: "ERP" },
    { id: 'dashboard-ventas', title: "Dashboard Ventas", tech: "TypeScript", cat: "Web App" },
];

const FILTER_CATEGORIES = ['Todos', 'ERP', 'POS', 'Web Apps', 'Mobile'];

/* ─── Portfolio View ─── */
const PortfolioView = ({ openCaseStudy }) => (
    <div className="section animate-fade-up">
        <div className="container">
            {/* Header */}
            <div
                style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'space-between',
                    alignItems: 'flex-end',
                    marginBottom: '48px',
                    gap: '20px',
                }}
            >
                <div>
                    <h1
                        style={{
                            fontSize: '36px',
                            fontWeight: 600,
                            color: 'var(--color-text-primary)',
                            letterSpacing: '-0.02em',
                        }}
                    >
                        Nuestro Trabajo
                    </h1>
                    <p
                        style={{
                            fontSize: '16px',
                            color: 'var(--color-text-secondary)',
                            marginTop: '6px',
                        }}
                    >
                        Soluciones técnicas entregadas con éxito.
                    </p>
                </div>
                <div
                    style={{
                        display: 'flex',
                        gap: '6px',
                        overflowX: 'auto',
                        paddingBottom: '4px',
                    }}
                >
                    {FILTER_CATEGORIES.map((cat) => (
                        <button
                            key={cat}
                            style={{
                                padding: '8px 16px',
                                borderRadius: '980px',
                                fontSize: '13px',
                                fontWeight: 600,
                                whiteSpace: 'nowrap',
                                border: 'none',
                                cursor: 'pointer',
                                fontFamily: "'Fredoka', sans-serif",
                                transition: 'all 0.2s',
                                background:
                                    cat === 'Todos'
                                        ? 'var(--color-brand)'
                                        : 'var(--color-surface)',
                                color:
                                    cat === 'Todos'
                                        ? 'white'
                                        : 'var(--color-text-secondary)',
                            }}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>

            {/* Grid */}
            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                    gap: '32px',
                }}
            >
                {PORTFOLIO_ITEMS.map((item, i) => (
                    <div
                        key={i}
                        className={`animate-fade-up delay-${Math.min((i + 1) * 100, 400)}`}
                    >
                        <ProjectCard
                            title={item.title}
                            tech={item.tech}
                            cat={item.cat}
                            image={item.image}
                            onClick={() => openCaseStudy(item.id)}
                        />
                    </div>
                ))}
            </div>
        </div>
    </div>
);

/* ─── Home View ─── */
const HomeView = ({ setView, openCaseStudy }) => (
    <div>
        <Hero setView={setView} />
        <MethodologySection />
        <FeaturedProject openCaseStudy={openCaseStudy} />
    </div>
);

/* ─── App ─── */
const App = () => {
    const [view, setView] = useState('home');
    const [selectedProject, setSelectedProject] = useState(null);

    const openCaseStudy = (id) => {
        setSelectedProject(CASE_STUDIES[id] || CASE_STUDIES['chromaflow']);
        setView('case-study');
        window.scrollTo(0, 0);
    };

    return (
        <div
            style={{
                minHeight: '100vh',
                background: 'var(--color-surface-elevated)',
            }}
        >
            <Navbar view={view} setView={setView} />

            {view === 'home' && (
                <HomeView setView={setView} openCaseStudy={openCaseStudy} />
            )}
            {view === 'portfolio' && (
                <PortfolioView openCaseStudy={openCaseStudy} />
            )}
            {view === 'case-study' && (
                <CaseStudy
                    project={selectedProject}
                    CASE_STUDIES={CASE_STUDIES}
                    setView={setView}
                    openCaseStudy={openCaseStudy}
                />
            )}
            {view === 'contact' && <ContactForm />}

            <Footer />
        </div>
    );
};

export default App;
