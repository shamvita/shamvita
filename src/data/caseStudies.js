export const CASE_STUDIES = {
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
    },
    'willarp': {
        title: "Willarp: Estrategia Digital para Asesores",
        client: "Willarp (William Pérez)",
        service: "Landing Page & Personal Branding",
        challenge: "El cliente necesitaba una presencia digital profesional y minimalista para captar leads cualificados. Su marca personal requería transmitir confianza y modernidad sin distracciones visuales.",
        solution: "Diseñamos una Landing Page de alto rendimiento utilizando Next.js y Tailwind CSS. Nos enfocamos en una estética limpia ('International Typographical Style'), con copywriting persuasivo y una clara llamada a la acción.",
        results: [
            { label: "Velocidad de carga", value: "0.8s" },
            { label: "Percepción de marca", value: "Premium" },
            { label: "Leads cualificados", value: "Alta" }
        ],
        stack: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
        image: "/showcase/willarp.png",
        imageText: "Interfaz Minimalista de Conversión",
        relatedProjectId: 'compuplaza', // Linking to another retail/commercial project
        relatedProjectNote: "Otra solución de alto impacto comercial",
        innovations: [
            { title: "Diseño Suizo", description: "Estética basada en grillas y tipografía pura.", icon: "Monitor", tag: "UI/UX", color: "#3B82F6" },
            { title: "Copywriting", description: "Mensajes estratégicos para asesores de marketing.", icon: "ChartLine", tag: "Estrategia", color: "#10B981" },
            { title: "Performance", description: "Core Web Vitals optimizados al 100%.", icon: "Lightning", tag: "Tech", color: "#F59E0B" }
        ],
        testimonial: {
            quote: "Working with José was fantastic. He perfectly captured Willarp's vision and created a modern landing page that conveys professionalism. The minimalist design highlights our services without complications.",
            author: "William Pérez",
            role: "Founder of Willarp"
        }
    }
};

export const PORTFOLIO_ITEMS = [
    { id: 'chromaflow', title: "ChromaFlow", tech: "Electron + Vue", cat: "POS", image: "/showcase/chromaflow.png" },
    { id: 'comercial-de-jesus', title: "Comercial de Jesús", tech: "CRM + INVENTARIO", cat: "ERP", image: "/showcase/djesus.png" },
    { id: 'compuplaza', title: "CompuPlaza", tech: "Laravel + PostgreSQL", cat: "E-commerce", image: "/showcase/compuplaza.png" },
    { id: 'willarp', title: "Willarp", tech: "Next.js + Tailwind", cat: "Landing Page", image: "/showcase/willarp.png" },
];
