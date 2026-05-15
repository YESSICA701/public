/* ============================================
   PREMIUMAQUA - INTERACTIVE FEATURES
   ============================================ */

// ============ DATA LAYER ============

const PARKS_DATA = [
    {
        id: 1,
        name: "FIBERGLASS",
        type: "extreme",
        rating: 4.9,
        description: "We are a company specialized in the manufacturing of fiberglass products with more than 20 years of experience. If you have any project in mind, contact us for advice and to provide you with the necessary information about our slides and other products.",
        descriptionEs: "Somos una empresa especializada en la fabricación de productos en fibra de vidrio con más de 20 años de experiencia. Si tiene algún proyecto pensado, contáctenos para asesorarle y brindarle la información necesaria sobre nuestros toboganes y demás productos.",
        fullDescription: "FIBERGLASS is a pioneer in fiberglass technology, offering innovative solutions for construction, transportation, and industrial sectors. Its reinforced plastic products deliver exceptional strength, durability, and corrosion resistance. With more than 25 years of experience, the company has become a trusted partner for businesses seeking reliable composite materials under demanding conditions.",
        fullDescriptionEs: "FIBERGLASS es pionera en tecnología de fibra de vidrio, ofreciendo soluciones innovadoras para construcción, transporte e industria. Sus productos de plástico reforzado ofrecen resistencia excepcional, durabilidad y protección contra la corrosión. Con más de 25 años de experiencia, la empresa se ha convertido en un aliado confiable para negocios que necesitan materiales compuestos de alto rendimiento.",
        highlights: [
            "Advanced fiberglass composites",
            "Corrosion-resistant materials",
            "Custom engineering solutions",
            "ISO 9001 certified production"
        ],
        highlightsEs: [
            "Composites avanzados de fibra de vidrio",
            "Materiales resistentes a la corrosión",
            "Soluciones de ingeniería personalizadas",
            "Producción certificada ISO 9001"
        ],
        products: [
            "Gym equipment",
            "Decorative accessories",
            "Beach chairs",
            "Pedal boats"
        ],
        productsEs: [
            "Equipo de gimnasio",
            "Accesorios decorativos",
            "Sillas playeras",
            "Botes a pedales",
        ],
        stats: {
            experience: "25+",
            projects: "5000+",
            countries: "40+",
            certifications: "15+"
        },
        statsEs: {
            experience: "25+",
            projects: "5000+",
            countries: "40+",
            certifications: "15+"
        },
        price: 49.99,
        location: "Industrial Complex, Spain",
        locationEs: "cochabamba, Quillacollo, Bolivia", 
        image: "img/fiberglass/fiberglass0.png",
        video: "videos/video_fiberglass.mp4",
        gallery: [
            "img/fiberglass/fiberglass1.jpeg",
            "img/fiberglass/fiberglass2.jpeg",
            "img/fiberglass/fiberglass3.jpeg",
            "img/fiberglass/fiberglass4.jpeg"
        ],
        contactLinks: {
            website: "https://fiberglassbolivia.com/",
            facebook: "https://www.facebook.com/profile.php?id=100065452810900",
            whatsapp: "https://wa.me/59171232509",
            email: "mailto:fiberglasbolivia@gmail.com"
        }
    },
    {
        id: 2,
        name: "MONTENEGRO",
        type: "luxury",
        rating: 4.8,
        description: "We are a company specialized in the construction of aquatic pools, mega playgrounds, and monumental works. Differentiating ourselves from the competition, combining the artistic and construction aspects in each of our creations.",
        descriptionEs: "Somos una empresa especializada en la construcción de piscinas acuáticas, mega parques infantiles y obras monumentales. Diferenciándonos de la competencia, combinando la parte artística y de construcción en cada una de nuestras obras.",
        fullDescription: "MONTENEGRO specializes in premium reinforced plastic solutions, combining careful craftsmanship with cutting-edge composite technology. Its high-end materials are ideal for applications that require superior performance, aesthetics, and long service life in architecture, automotive, and exclusive design projects.",
        fullDescriptionEs: "MONTENEGRO se especializa en soluciones premium de plástico reforzado, combinando un trabajo cuidadoso con tecnología compuesta de vanguardia. Sus materiales de alta gama son ideales para aplicaciones que requieren rendimiento superior, estética y larga vida útil en arquitectura, automotriz y proyectos de diseño exclusivo.",
        highlights: [
            "High-end composite materials",
            "Luxury finish options",
            "Custom color matching",
            "Architectural applications"
        ],
        highlightsEs: [
            "Materiales compuestos de alta gama",
            "Opciones de acabado de lujo",
            "Coincidencia personalizada de colores",
            "Aplicaciones arquitectónicas"
        ],
        products: [
            "Water parks",
            "Playgrounds",
            "Decorative waterfalls",
            "Luxury swimming pools"
        ],
        productsEs: [
            "Parques acuáticos",
            "Parques infantiles",
            "Cascadas decorativas",
            "Piscinas de lujo"
        ],
        stats: {
            experience: "30+",
            projects: "2000+",
            countries: "25+",
            certifications: "12+"
        },
        statsEs: {
            experience: "30+",
            projects: "2000+",
            countries: "25+",
            certifications: "12+"
        },
        price: 79.99,
        location: "Premium Facilities, Italy",
        locationEs: "calle Manuel Angel Anaya y avenida Juan Pablo II,  (km 4 1/2 av. Blanco Galindo) , Cochabamba, Bolivia,",
        image: "img/montenegro/montenegro0.png",
        video: "videos/video_montenegro2.mp4",
        gallery: [
            "img/montenegro/montenegro12.jpg",
            "img/montenegro/montenegro3.jpg",
            "img/montenegro/montenegro2.jpg"
        ],
        contactLinks: {
            website: "https://constructoramontenegro.net/",
            facebook: "https://www.facebook.com/constructoramontenegro/?locale=es_LA",
            whatsapp: "https://wa.me/59168125855",
            email: "mailto:constructoramontenegro@hotmail.com"
        }
    },
    {
        id: 3,
        name: "AQUAPARK",
        type: "family",
        rating: 4.7,
        description: "At AquaPark, we pride ourselves on being leaders in the construction of recreational paradises. From beach-style pools to extreme rides, we transform spaces into unforgettable experiences with quality and durability.",
        descriptionEs: "En AquaPark, nos enorgullecemos de ser líderes en la construcción de paraísos recreativos. Desde piscinas tipo playa hasta juegos extremos, transformamos espacios en experiencias inolvidables con calidad y durabilidad.",
        fullDescription: "AQUAPARK leads in water-resistant composite solutions, providing durable materials specifically designed for marine and aquatic applications. Our products withstand harsh water environments, UV exposure, and chemical corrosion while maintaining structural integrity. Trusted by marine engineers, boat builders, and waterfront construction companies worldwide.",
        fullDescriptionEs: "AQUAPARK lidera en soluciones compuestas resistentes al agua, proporcionando materiales duraderos diseñados específicamente para aplicaciones marinas y acuáticas. Nuestros productos resisten ambientes acuáticos difíciles, exposición UV y corrosión química mientras mantienen su integridad estructural. Confiados por ingenieros marinos, constructores de barcos y empresas de construcción costera en todo el mundo.",
        highlights: [
            "Marine-grade composites",
            "Water environment durability",
            "UV-resistant formulations",
            "Boat and marine applications"
        ],
        highlightsEs: [
            "Composites de grado marino",
            "Durabilidad en ambientes acuáticos",
            "Formulaciones resistentes a UV",
            "Aplicaciones en botes y marina"
        ],
        products: [
            "Aquatic slides",
            "Pool structures",
            "Marine components",
            "Humidity-resistant coatings"
        ],
        productsEs: [
            "Piscinas tipo playa ",
            "Toboganes varios modelos y tamaños",
            "Cascadas decorativas",
            "Puente colgante",
        ],
        stats: {
            experience: "20+",
            projects: "3500+",
            countries: "35+",
            certifications: "18+"
        },
        statsEs: {
            experience: "20+",
            projects: "3500+",
            countries: "35+",
            certifications: "18+"
        },
        price: 59.99,
        location: "Santa Cruz - Bolivia",
        locationEs: "Santa Cruz - Bolivia",
        image: "img/aquapark/aquapark0.png",
        video: "videos/video_aquapark.mp4",
        gallery: [
            "img/aquapark/aquapark13.png",
            "img/aquapark/aquapark2.jpg",
            "img/aquapark/aquapark3.jpg"
        ],
        contactLinks: {
            website: "https://constructoraaquapark.net/",
            facebook: "https://www.facebook.com/constructoraaquaparc",
            instagram: null,
            whatsapp: "https://wa.me/59172029386",
            email: "mailto:info@constructoraaquapark.com"
        }
    },
    {
        id: 4,
        name: "FIBROTEK",
        type: "Solicitado",
        rating: 4.8,
        description: "At Fibrotek Company, we are leaders in the design, manufacture, and installation of fiberglass structures and other durable materials, offering practical, creative, and long-lasting solutions for various sectors.",
        descriptionEs: "En Fibrotek Company, somos líderes en el diseño, fabricación e instalación de estructuras en fibra de vidrio y otros materiales resistentes, ofreciendo soluciones prácticas, creativas y duraderas para distintos sectores.",
        fullDescription: "FIBROTEK develops textile-reinforced composite technology by combining advanced textile engineering with fiberglass materials. Its solutions deliver an excellent balance of strength, flexibility, and lightweight performance for aerospace, automotive, and other demanding technical applications.",
        fullDescriptionEs: "FIBROTEK desarrolla tecnología de compuestos reforzados con textiles al combinar ingeniería textil avanzada con materiales de fibra de vidrio. Sus soluciones ofrecen un gran equilibrio entre resistencia, flexibilidad y ligereza para aplicaciones aeroespaciales, automotrices y otros usos técnicos exigentes.",
        highlights: [
            "Textile-fiberglass hybrids",
            "Superior strength-to-weight ratio",
            "Flexible composite solutions",
            "Aerospace-grade materials"
        ],
        highlightsEs: [
            "Híbridos textil-fibra de vidrio",
            "Relación resistencia-peso superior",
            "Soluciones compuestas flexibles",
            "Materiales de grado aeroespacial"
        ],
        products: [
            "Reinforced sheets",
            "Lightweight profiles",
            "Technical textile parts",
            "Specialty laminates"
        ],
        productsEs: [
            "Esculturas decorativas",
            "Botes a pedal",
            "Baños porttiles",
            "Carritos heladeros",
        ],
        stats: {
            experience: "15+",
            projects: "1800+",
            countries: "22+",
            certifications: "10+"
        },
        statsEs: {
            experience: "15+",
            projects: "1800+",
            countries: "22+",
            certifications: "10+"
        },
        price: 69.99,
        location: " La Paz, Bolivia",
        locationEs: " La Paz, Bolivia",
        image: "img/fibrotek/fibrotek0.png",
        video: "videos/video_fibrotek.mp4",
        gallery: [
            "img/fibrotek/fibrotek1.jpg",
            "img/fibrotek/fibrotek2.jpg",
            "img/fibrotek/fibrotek3.jpg"
        ],
        contactLinks: {
            website: "https://fibrotekcompany.net/",
            facebook: "https://www.facebook.com/Fibrotekcompany/?_rdc=1&_rdr#",
            instagram: "https://www.instagram.com/fibrotekcompany/",
            whatsapp: "https://wa.me/59168124071",
            email: "mailto:info@fibrotekcompany.net"
        }
    },
    {
        id: 5,
        name: "REFORPLAZ",
        type: "family",
        rating: 4.6,
        description: "Versatile manufacturer with practical reinforced plastic solutions for general production, custom pieces, and reliable daily use.",
        descriptionEs: "INDUSTRIAS REFORPLAZ es una empresa especializada en el diseño y fabricación de productos elaborados en fibra de vidrio y mármol reconstituido. Desarrollamos soluciones innovadoras para proyectos recreativos, arquitectónicos e industriales, combinando tecnología, creatividad y experiencia técnica.",
        fullDescription: "REFORPLAZ offers versatile reinforced plastic solutions that balance performance and affordability. Its materials are ideal for general manufacturing, consumer products, and cost-conscious applications where reliability matters. The brand stands out for consistent quality and timely delivery for businesses of all sizes.",
        fullDescriptionEs: "REFORPLAZ ofrece soluciones versátiles de plástico reforzado que equilibran rendimiento y accesibilidad. Sus materiales son ideales para fabricación general, productos de consumo y aplicaciones donde el costo importa sin dejar de lado la confiabilidad. La marca destaca por su calidad constante y entregas oportunas para empresas de distintos tamaños.",
        highlights: [
            "Balanced performance-cost ratio",
            "Wide range of applications",
            "Consistent quality standards",
            "General-purpose reinforced plastics"
        ],
        highlightsEs: [
            "Relación rendimiento-costo equilibrada",
            "Amplio rango de aplicaciones",
            "Estándares de calidad consistentes",
            "Plásticos reforzados de uso general"
        ],
        products: [
            "Water tanks",
            "Fiberglass roofs",
            "Sanitary modules",
            "General-use containers"
        ],
        productsEs: [
            "Tanques de agua",
            "Obras monumentales",
            "Gimnasio al aire libre",
            "Ajedrez gigante",
        ],
        stats: {
            experience: "18+",
            projects: "4000+",
            countries: "30+",
            certifications: "8+"
        },
        statsEs: {
            experience: "18+",
            projects: "4000+",
            countries: "30+",
            certifications: "8+"
        },
        price: 39.99,
        location: "Santa Cruz - Bolivia Z/Satélite Norte",
        locationEs: "Santa Cruz - Bolivia Z/Satélite Norte",
        image: "img/reforplaz/reforplaz0.png",
        video: "videos/video_reforplaz2.mp4",
        gallery: [
            "img/reforplaz/reforplaz10.jpeg",
            "img/reforplaz/reforplaz12.jpeg",
            "img/reforplaz/reforplaz13.jpeg"
        ],
        contactLinks: {
            website: "https://reforplaz.com/",
            facebook: "https://www.facebook.com/reforplaz/?locale=es_LA",
            instagram: "https://www.instagram.com/reforplazindustrias/",
            whatsapp: "https://wa.me/59171512374",
            email: "mailto:reforplaz2015@gmail.com"
        }
    }
];

const BRAND_DETAIL_CONTENT = {
    1: {
        taglineEs: 'Fibra de vidrio confiable para proyectos que exigen resistencia y detalle.',
        taglineEn: 'Reliable fiberglass solutions for projects that demand strength and detail.',
        categoryEs: 'Fabricacion en fibra de vidrio',
        categoryEn: 'Fiberglass manufacturing',
        founded: '1999',
        originEs: 'Nace como una empresa enfocada en transformar la fibra de vidrio en soluciones utiles para espacios recreativos, comerciales y decorativos.',
        originEn: 'It began as a company focused on turning fiberglass into useful solutions for recreational, commercial, and decorative spaces.',
        missionEs: 'Disenar y fabricar piezas duraderas con asesoria cercana para cada cliente y cada proyecto.',
        missionEn: 'To design and manufacture durable pieces with close guidance for every client and project.',
        visionEs: 'Consolidarse como una marca referente en soluciones de fibra de vidrio versatiles y de larga vida util.',
        visionEn: 'To become a benchmark brand in versatile, long-lasting fiberglass solutions.',
        differentiatorEs: 'Combina experiencia tecnica, variedad de productos y respuesta directa para proyectos personalizados.',
        differentiatorEn: 'It combines technical experience, product variety, and direct response for custom projects.',
        primaryCtaEs: 'Explorar sitio',
        primaryCtaEn: 'Explore site',
        primaryCtaType: 'website',
        mapUrl: 'https://maps.google.com/?q=Quillacollo+Cochabamba+Bolivia'
    },
    2: {
        taglineEs: 'Obras acuaticas y monumentales con fuerte presencia visual.',
        taglineEn: 'Aquatic and monumental works with strong visual presence.',
        categoryEs: 'Construccion acuatica y monumental',
        categoryEn: 'Aquatic and monumental construction',
        founded: '1994',
        originEs: 'Surge para integrar construccion y expresion artistica en piscinas, parques infantiles y proyectos de alto impacto.',
        originEn: 'It was created to combine construction and artistic expression in pools, playgrounds, and high-impact projects.',
        missionEs: 'Crear espacios memorables que unan funcionalidad, estetica y durabilidad.',
        missionEn: 'To create memorable spaces that combine functionality, aesthetics, and durability.',
        visionEs: 'Ser la marca elegida para proyectos recreativos y monumentales que buscan diferenciarse.',
        visionEn: 'To be the preferred brand for recreational and monumental projects that seek differentiation.',
        differentiatorEs: 'Su valor esta en mezclar ejecucion constructiva con identidad visual en cada obra.',
        differentiatorEn: 'Its value lies in blending construction execution with visual identity in every project.',
        primaryCtaEs: 'Explorar sitio',
        primaryCtaEn: 'Explore site',
        primaryCtaType: 'website',
        mapUrl: 'https://maps.google.com/?q=Juan+Pablo+II+Cochabamba+Bolivia'
    },
    3: {
        taglineEs: 'Experiencias recreativas que convierten espacios en destinos memorables.',
        taglineEn: 'Recreational experiences that turn spaces into memorable destinations.',
        categoryEs: 'Parques acuaticos y recreacion',
        categoryEn: 'Water parks and recreation',
        founded: '2005',
        originEs: 'AQUAPARK se desarrolla a partir de la necesidad de ofrecer soluciones integrales para piscinas, juegos y entornos acuaticos de alto uso.',
        originEn: 'AQUAPARK grew from the need to provide integrated solutions for pools, rides, and high-use aquatic environments.',
        missionEs: 'Construir escenarios recreativos seguros, atractivos y duraderos para familias, municipios y emprendimientos.',
        missionEn: 'To build safe, attractive, and durable recreational environments for families, municipalities, and businesses.',
        visionEs: 'Liderar el desarrollo de espacios acuaticos de referencia en Bolivia y la region.',
        visionEn: 'To lead the development of benchmark aquatic spaces in Bolivia and the region.',
        differentiatorEs: 'Aporta una propuesta integral: diseno, construccion y componentes para experiencias acuaticas completas.',
        differentiatorEn: 'It delivers an end-to-end proposal: design, construction, and components for complete aquatic experiences.',
        primaryCtaEs: 'Explorar sitio',
        primaryCtaEn: 'Explore site',
        primaryCtaType: 'website',
        mapUrl: 'https://maps.google.com/?q=Santa+Cruz+Bolivia'
    },
    4: {
        taglineEs: 'Soluciones creativas y resistentes para proyectos funcionales y decorativos.',
        taglineEn: 'Creative and durable solutions for functional and decorative projects.',
        categoryEs: 'Diseno y fabricacion en fibra de vidrio',
        categoryEn: 'Fiberglass design and manufacturing',
        founded: '2008',
        originEs: 'La marca nace para atender proyectos que requieren piezas visibles, utiles y fabricadas con materiales de larga duracion.',
        originEn: 'The brand was born to serve projects that need visible, practical pieces made with long-lasting materials.',
        missionEs: 'Ofrecer estructuras y piezas en fibra de vidrio con enfoque practico, creativo y comercial.',
        missionEn: 'To offer fiberglass structures and pieces with a practical, creative, and commercial approach.',
        visionEs: 'Ser una referencia nacional en piezas especiales y soluciones resistentes para diversos sectores.',
        visionEn: 'To be a national reference for special pieces and durable solutions across sectors.',
        differentiatorEs: 'Se distingue por su flexibilidad para producir desde piezas decorativas hasta soluciones de uso diario.',
        differentiatorEn: 'It stands out for its flexibility, from decorative pieces to everyday-use solutions.',
        primaryCtaEs: 'Explorar sitio',
        primaryCtaEn: 'Explore site',
        primaryCtaType: 'website',
        mapUrl: 'https://maps.google.com/?q=La+Paz+Bolivia'
    },
    5: {
        taglineEs: 'Productos versatiles para obras, espacios publicos y necesidades comerciales.',
        taglineEn: 'Versatile products for construction, public spaces, and commercial needs.',
        categoryEs: 'Soluciones industriales y recreativas',
        categoryEn: 'Industrial and recreational solutions',
        founded: '2015',
        originEs: 'REFORPLAZ se enfoca en fabricar soluciones de fibra de vidrio y marmol reconstituido para aplicaciones practicas y visuales.',
        originEn: 'REFORPLAZ focuses on manufacturing fiberglass and reconstituted marble solutions for practical and visual applications.',
        missionEs: 'Desarrollar productos funcionales con buena presentacion, durabilidad y respuesta comercial oportuna.',
        missionEn: 'To develop functional products with strong presentation, durability, and timely commercial response.',
        visionEs: 'Expandir su presencia como proveedor confiable para proyectos recreativos, arquitectonicos e industriales.',
        visionEn: 'To expand as a trusted supplier for recreational, architectural, and industrial projects.',
        differentiatorEs: 'Ofrece un portafolio amplio que mezcla utilidad diaria con piezas especiales para espacios de alto trafico.',
        differentiatorEn: 'It offers a broad portfolio that mixes everyday utility with special pieces for high-traffic spaces.',
        primaryCtaEs: 'Explorar sitio',
        primaryCtaEn: 'Explore site',
        primaryCtaType: 'website',
        mapUrl: 'https://maps.google.com/?q=Satelite+Norte+Santa+Cruz+Bolivia'
    }
};

const HOME_VIDEO_SHOWCASE = [
    {
        id: 'demo-1',
        title: 'Demostracion visual de juegos acuaticos',
        titleEn: 'Aquatic games visual demo',
        eyebrow: 'Demo principal',
        eyebrowEn: 'Main demo',
        description: 'Una muestra breve para comunicar color, movimiento y experiencia familiar en un formato mas comercial.',
        descriptionEn: 'A short sample built to communicate color, motion, and family experience in a more commercial format.',
        ctaLabel: 'Ver portafolio',
        ctaLabelEn: 'View portfolio',
        href: 'html/proyectos.html',
        video: 'videos/juegos_acuaticos.mp4'
    },
    {
        id: 'demo-2',
        title: 'Presentacion dinamica de espacios recreativos',
        titleEn: 'Dynamic presentation of recreation spaces',
        eyebrow: 'Impacto visual',
        eyebrowEn: 'Visual impact',
        description: 'Una pieza pensada para mostrar recorridos, energia y presencia visual sin ocupar un espacio inmenso en inicio.',
        descriptionEn: 'A piece designed to show movement, energy, and visual presence without taking an oversized space on the homepage.',
        ctaLabel: 'Explorar proyectos',
        ctaLabelEn: 'Explore projects',
        href: 'html/proyectos.html',
        video: 'videos/juegos_acuaticos2.mp4'
    },
    {
        id: 'demo-3',
        title: 'Muestra comercial para captar atencion',
        titleEn: 'Commercial showcase to capture attention',
        eyebrow: 'Formato promocional',
        eyebrowEn: 'Promotional format',
        description: 'Un video de apoyo para reforzar la propuesta con una presentacion corta, clara y mas cercana a marketing publicitario.',
        descriptionEn: 'A support video that reinforces the proposal with a short, clear presentation closer to advertising marketing.',
        ctaLabel: 'Conocer mas',
        ctaLabelEn: 'Learn more',
        href: 'html/por-que-visitar.html',
        video: 'videos/juegos_acuaticos3.mp4'
    }
];

const FEATURED_BRANDS_LIMIT = 5;
const HOME_PREVIEW_LIMIT = 5;
const SUPPORTED_LANGUAGES = ['es', 'en'];

const BRAND_COLORS = [
    { primary: '#1d4f91', secondary: '#35b8f2', accent: '#ffd34d', bg: 'rgba(29, 79, 145, 0.08)', soft: '#edf6ff', border: 'rgba(29, 79, 145, 0.2)', shadow: 'rgba(29, 79, 145, 0.16)' },
    { primary: '#f97316', secondary: '#111827', accent: '#cbd5e1', bg: 'rgba(249, 115, 22, 0.08)', soft: '#fff4ec', border: 'rgba(249, 115, 22, 0.2)', shadow: 'rgba(17, 24, 39, 0.14)' },
    { primary: '#16a34a', secondary: '#fde047', accent: '#0ea5e9', bg: 'rgba(22, 163, 74, 0.08)', soft: '#f0fdf4', border: 'rgba(22, 163, 74, 0.2)', shadow: 'rgba(22, 163, 74, 0.16)' },
    { primary: '#d97706', secondary: '#fbbf24', accent: '#0284c7', bg: 'rgba(217, 119, 6, 0.08)', soft: '#fffbeb', border: 'rgba(217, 119, 6, 0.2)', shadow: 'rgba(2, 132, 199, 0.15)' },
    { primary: '#1d4f91', secondary: '#7cc8ff', accent: '#16a34a', bg: 'rgba(29, 79, 145, 0.08)', soft: '#eef6ff', border: 'rgba(29, 79, 145, 0.2)', shadow: 'rgba(29, 79, 145, 0.16)' }
];

const TYPE_CONFIG = {
    luxury: { icon: '👑', color: '#FFD700', bgColor: 'rgba(255, 215, 0, 0.1)' },
    extreme: { icon: '⚡', color: '#FF6B35', bgColor: 'rgba(255, 107, 53, 0.1)' },
    family: { icon: '🏠', color: '#4CAF50', bgColor: 'rgba(76, 175, 80, 0.1)' }
};

const COMPLETE_GALLERIES = {
      descriptionEs: "Especialista en materiales resistentes al agua para espacios para yesica, ambientes marinos y proyectos expuestos a la humedad.",
        fullDescription: "AQUAPARK leads in water-resistant composite solutions, providing durable materials specifically designed for marine and aquatic applications. Our products withstand harsh water environments, UV exposure, and chemical corrosion while maintaining structural integrity. Trusted by marine engineers, boat builders, and waterfront construction companies worldwide.",
    1: [
        "img/fiberglass/fiberglass1.jpeg",
        "img/fiberglass/fiberglass2.jpeg",
        "img/fiberglass/fiberglass3.jpeg",
        "img/fiberglass/fiberglass4.png",
        "img/fiberglass/fiberglass5.png",
        "img/fiberglass/fiberglass6.jpeg",
        "img/fiberglass/fiberglass7.jpeg",
        "img/fiberglass/fiberglass8.jpeg",
        "img/fiberglass/fiberglass9.png",
     
    ],
    2: [
        "img/montenegro/montenegro0.png",
        "img/montenegro/montenegro1.jpeg",
        "img/montenegro/montenegro2.jpeg",
        "img/montenegro/montenegro3.png",
        "img/montenegro/montenegro4.png",
        "img/montenegro/montenegro5.png",
        "img/montenegro/montenegro6.jpg",
        "img/montenegro/montenegro9.jpg"
    ],
    3: [
        "img/aquapark/aquapark1.jpg",
        "img/aquapark/aquapark2.jpg",
        "img/aquapark/aquapark3.jpeg",
        "img/aquapark/aquapark4.png",
        "img/aquapark/aquapark5.jpeg",
        "img/aquapark/aquapark6.jpg",
        "img/aquapark/aquapark7.jpeg",
        "img/aquapark/aquapark8.jpeg",
        "img/aquapark/aquapark9.jpeg"
    ],
    4: [
        "img/fibrotek/fibrotek1.jpeg",
        "img/fibrotek/fibrotek2.jpeg",
        "img/fibrotek/fibrotek3.jpeg",
        "img/fibrotek/fibrotek4.jpeg",
        "img/fibrotek/fibrotek5.jpeg",
        "img/fibrotek/fibrotek6.jpeg",
        "img/fibrotek/fibrotek7.png",
        "img/fibrotek/fibrotek8.jpeg",
        "img/fibrotek/fibrotek9.jpeg"
    ],
    5: [
        "img/reforplaz/reforplaz0.png",
        "img/reforplaz/reforplaz1.png",
        "img/reforplaz/reforplaz18.jpeg",
        "img/reforplaz/reforplaz2.jpeg",
        "img/reforplaz/reforplaz3.jpg",
        "img/reforplaz/reforplaz4.png",
        "img/reforplaz/reforplaz5.jpeg",
        "img/reforplaz/reforplaz6.jpeg",
        "img/reforplaz/reforplaz7.png",
        "img/reforplaz/reforplaz8.jpeg"
    ],
};

const GALLERY_FEATURED_SELECTIONS = {
    1: [2, 4, 7, 1],
    2: [4, 6, 2, 8],
    3: [4, 6, 8, 2],
    4: [3, 5, 7, 1],
    5: [5, 6, 8, 2]
};

const GALLERY_DESCRIPTION_CONTEXT = {
    1: {
        summaryEs: 'una pieza desarrollada en fibra de vidrio para aplicaciones recreativas, decorativas o funcionales',
        summaryEn: 'a fiberglass piece developed for recreational, decorative, or functional uses',
        descriptionsEs: [
            'Hongos lluviosos: Estructuras coloridas que rocían agua constantemente.Balde automatizado: Un gran cubo en la parte superior que se llena y se vuelca por sorpresa.Toboganes infantiles: Rampas de baja altura y velocidad segura para los más pequeños.',
            'La imagen muestra un colorido parque infantil de varios niveles, diseñado con una temática de personajes y animales. La estructura está situada al aire libre sobre un área de césped',
            'Tobogán de rana: Una gran figura de rana verde con puntos amarillos cuya lengua roja sirve como tobogán hacia una piscina circular poco profunda.Hongo lluvioso: Una estructura roja con motas blancas (estilo amanita) que rocía agua como una cortina sobre los niños que juegan debajo.',
            'Esta imagen muestra un baño portátil de color blanco ubicado en un espacio público, como un parque o una plaza.',
            'Las piezas blancas que ves en primer plano son reposeras ergonómicas de diseño, muy populares en resorts y parques acuáticos de lujo.',
            'Esta es una papelera o bote de basura temático diseñado para espacios infantiles o parques.',
            'Esta es una figura decorativa de una morsa, ubicada en el sector infantil de un parque acuático de Fibra de vidrio reforzada: Es el material estándar para estas esculturas por su alta durabilidad.',
            'Esta es una figura temática de un elefante, diseñada para funcionar como un elemento decorativo e interactivo en un parque acuático.',
            'Esta es una cabina de ducha portátil, diseñada para ser instalada rápidamente en campamentos, obras o eventos al aire libre.'
        ],
        descriptionsEn: [
            'Rain mushrooms: colorful structures that constantly spray water. Automated bucket: a large bucket at the top that fills up and tips over by surprise. Children\'s slides: low-height ramps with safe speed for younger children.',
            'The image shows a colorful multi-level playground designed with a character and animal theme. The structure is located outdoors on a grassy area.',
            'Frog slide: a large green frog figure with yellow spots whose red tongue serves as a slide into a shallow circular pool. Rain mushroom: a red structure with white spots, amanita-style, that sprays water like a curtain over the children playing underneath.',
            'This image shows a white portable restroom located in a public space, such as a park or square.',
            'The white pieces seen in the foreground are ergonomic designer lounge chairs, very popular in luxury resorts and water parks.',
            'This is a themed waste bin or trash can designed for children\'s spaces or parks.',
            'This is a decorative walrus figure located in the children\'s area of a fiberglass water park. Reinforced fiberglass is the standard material for these sculptures because of its high durability.',
            'This is an elephant-themed figure designed to work as a decorative and interactive element in a water park.',
            'This is a portable shower cabin designed for quick installation at campsites, construction sites, or outdoor events.'
        ]
    },
    2: {
        summaryEs: 'una obra acuática o monumental diseñada para destacar por su escala, forma y presencia visual',
        summaryEn: 'an aquatic or monumental work designed to stand out through scale, form, and visual presence',
        descriptionsEs: [
            'Vista general de una obra Montenegro donde se percibe la escala del proyecto, su composición visual y el carácter monumental del diseño.',
            'Esta imagen muestra un complejo de juegos acuáticos tipo "Splash Pad", diseñado para parques recreativos o piscinas públicas.',
            'Esta imagen muestra una piscina de diseño minimalista con un estilo moderno y sofisticado, ideal para patios contemporáneos.',
            'Esta imagen muestra la Bike Aérea, una atracción de aventura extrema La bicicleta se desplaza sobre cables de acero de alta resistencia que soportan varias toneladas de peso.',
            'Hongos lluviosos: Estructuras coloridas que rocían agua constantemente.Balde automatizado: Un gran cubo en la parte superior que se llena y se vuelca por sorpresa.Toboganes infantiles: Rampas de baja altura y velocidad segura para los más pequeños.',
            'El puente colgante y las pasarelas están fabricados con madera de alta resistencia (como eucalipto o maderas tropicales) tratada para soportar la humedad constante y el sol.',
            'Parque acuatico de Fibra de vidrio (PRFV): Es el material de todos los toboganes. Se usa por su acabado liso que permite el deslizamiento y su alta resistencia a la intemperie.',
            'Esta es una piscina de diseño moderno con un muro cubierto de vegetación iluminado con focos LED'
        ],
        descriptionsEn: [
            'General view of a Montenegro project highlighting scale, visual composition, and monumental design character.',
            'This image shows a colorful splash pad aquatic play complex designed for recreational parks or public pools.',
            'This image shows a minimalist pool with a modern and sophisticated style, ideal for contemporary patios.',
            'This image shows the Aerial Bike, an extreme adventure attraction. The bicycle moves along high-strength steel cables that support several tons of weight.',
            'Rain mushrooms: colorful structures that constantly spray water. Automated bucket: a large bucket at the top that fills up and tips over by surprise. Children\'s slides: low-height ramps with safe speed for younger children.',
            'The suspension bridge and walkways are made from high-strength wood, such as eucalyptus or tropical woods, treated to withstand constant humidity and sun exposure.',
            'Fiberglass water park (FRP): this is the material used for all the slides. It is used because its smooth finish allows sliding and because it has high weather resistance.',
            'This is a modern pool with a wall covered in vegetation and illuminated with LED spotlights.'
        ]
    },
    3: {
        summaryEs: 'una propuesta recreativa enfocada en piscinas, toboganes y experiencias acuáticas familiares',
        summaryEn: 'a recreational proposal focused on pools, slides, and family aquatic experiences',
        descriptionsEs: [
            'Diseño corporativo con temática tropical y acuática que combina colores vibrantes en tonos verde, amarillo y azul. ',
            'Parque acuático familiar con toboganes coloridos, piscinas y áreas recreativas ideales para divertirse y refrescarse.',
            'Piscina recreativa con modernos toboganes acuáticos de colores, perfecta para disfrutar momentos divertidos en familia.',
            'Impresionante parque acuático con grandes toboganes en espiral de colores amarillo, verde y azul, rodeado de una amplia piscina cristalina y una espectacular vista',
            'Toboganes fabricados con fibra de vidrio y plástico reforzado de alta resistencia, con estructura metálica segura y duradera, ideales para ambientes acuáticos y recreativos.',
            'Imponente tobogán acuático en espiral con estructura elevada y diseño extremo, acompañado de una increíble entrada temática en forma de dragón gigante que brinda una experiencia llena de adrenalina, diversión y aventura para todas las edades. Ideal para quienes buscan emociones únicas en el parque acuático.',
            'Fabricado con materiales resistentes al agua, al sol y al uso constante, este juego acuático garantiza seguridad, estabilidad y larga vida útil. Perfecto para parques recreativos, clubes, hoteles y complejos turísticos que buscan ofrecer entretenimiento de calidad con un diseño llamativo y moderno.',
            'Fabricado con materiales resistentes al agua, a la exposición solar y al uso continuo, este equipamiento garantiza durabilidad, seguridad y excelente acabado visual. Ideal para parques acuáticos, complejos turísticos, clubes recreativos y proyectos vacacionales que buscan destacar con atracciones.',
            'Este moderno conjunto de toboganes combina estructuras de alto impacto visual con materiales resistentes y seguros, ideales para parques acuáticos, clubes recreativos y centros turísticos. Su diseño incluye descensos rectos y curvas dinámicas que ofrecen experiencias emocionantes para todos'
        ],
        descriptionsEn: [
            'Corporate design with a tropical and aquatic theme that combines vibrant shades of green, yellow, and blue.',
            'Family water park with colorful slides, pools, and recreational areas ideal for having fun and cooling off.',
            'Recreational pool with modern colorful water slides, perfect for enjoying fun family moments.',
            'Impressive water park with large spiral slides in yellow, green, and blue, surrounded by a wide crystal-clear pool and a spectacular view.',
            'Slides made from high-strength fiberglass and reinforced plastic, with a safe and durable metal structure, ideal for aquatic and recreational environments.',
            'Imposing spiral water slide with an elevated structure and extreme design, accompanied by an incredible giant dragon-themed entrance that provides an experience full of adrenaline, fun, and adventure for all ages. Ideal for those seeking unique thrills at the water park.',
            'Made with materials resistant to water, sun, and constant use, this aquatic play structure guarantees safety, stability, and long service life. Perfect for recreational parks, clubs, hotels, and tourist complexes that want to offer quality entertainment with a striking and modern design.',
            'Made with materials resistant to water, sun exposure, and continuous use, this equipment guarantees durability, safety, and an excellent visual finish. Ideal for water parks, tourist complexes, recreational clubs, and vacation projects that want to stand out with attractions.',
            'This modern slide set combines high-impact visual structures with resistant and safe materials, ideal for water parks, recreational clubs, and tourist centers. Its design includes straight descents and dynamic curves that offer exciting experiences for everyone.'
        ]
    },
    4: {
        summaryEs: 'una solución en fibra de vidrio pensada para uso comercial, recreativo o decorativo',
        summaryEn: 'a fiberglass solution created for commercial, recreational, or decorative use',
        descriptionsEs: [
            'Este es un carrito de helados portátil, utilizado por vendedores ambulantes para mantener y transportar productos congelados.',
            'Esta es una estructura de juegos infantiles modular diseñada para interiores o áreas techadas, con un estilo moderno y deportivo.',
            'Esta estructura de juegos infantiles está fabricada con materiales industriales diseñados para el uso rudo y la exposición al aire libre',
            'Esta estructura es un equipo multideportivo combinado, diseñado para integrar una portería de fútbol sala (o balonmano) con un tablero de baloncesto en una sola pieza.',
            'Esta imagen muestra un sube y baja (o balancín) cuádruple, diseñado para que hasta cuatro niños jueguen al mismo tiempo.',
            'Este juego de plaza es un carrusel de cono giratorio (o pirámide giratoria), diseñado para que los niños giren mientras se sujetan de su estructura metálica.',
            'Este es un balancín de muelle (o resorte) doble, diseñado con la temática de un avestruz o ñandú para parques infantiles.',
            'Este es un parque infantil modular de gran tamaño, diseñado para ofrecer múltiples actividades en una sola estructura.',
            'Esta imagen muestra el tobogán recto de una estructura de juegos infantiles instalada en un espacio interior techado.'
        ],
        descriptionsEn: [
            'This is a portable ice cream cart used by street vendors to keep and transport frozen products.',
            'This is a modular children\'s play structure designed for indoor or covered areas, with a modern and sporty style.',
            'This children\'s play structure is made with industrial materials designed for heavy use and outdoor exposure.',
            'This structure is a combined multi-sport unit designed to integrate an indoor soccer or handball goal with a basketball backboard in a single piece.',
            'This image shows a quadruple seesaw designed so up to four children can play at the same time.',
            'This playground equipment is a spinning cone carousel, or spinning pyramid, designed so children can rotate while holding onto its metal structure.',
            'This is a double spring rocker designed with an ostrich or rhea theme for children\'s playgrounds.',
            'This is a large modular playground designed to offer multiple activities in a single structure.',
            'This image shows the straight slide of a children\'s play structure installed in a covered indoor space.'
        ]
    },
    5: {
        summaryEs: 'un proyecto elaborado en fibra de vidrio o mármol reconstituido para espacios recreativos o arquitectónicos',
        summaryEn: 'a project made in fiberglass or reconstituted marble for recreational or architectural spaces',
        descriptionsEs: [
            'Vista de una solución Reforplaz orientada a espacios recreativos o urbanos, con enfoque práctico y buena presencia visual.',
            'Esta imagen muestra un área de juegos infantiles vibrante Estructuras de juego: Incluye toboganes, escaleras y áreas de escalada modulares con techos de colores.',
            'Esta imagen muestra un ajedrez gigante Es un atractivo interactivo donde los visitantes pueden jugar partidas a escala real sobre una estructura metálica elevada.',
            'Esta imagen muestra un carrusel giratorio infantil en un patio de juegos, diseñado con una estructura metálica roja y asientos de plástico azul. Este tipo de juegos son clásicos en áreas recreativas escolares o parques infantiles.',
            'Esta imagen muestra un banco infantil con diseño de dinosaurio, una pieza de mobiliario urbano creativa y colorida.',
            'Imagen de solución fabricada para combinar presencia visual, durabilidad y uso constante.',
            'Esta imagen muestra una máquina de ejercicios para gimnasios al aire libre, específicamente un equipo de esquí de fondo o caminador doble.',
            'Esta imagen muestra una máquina de torsión de cintura (triple) para gimnasios al aire libre, instalada en un parque infantil. ',
            'Esta imagen muestra un túnel infantil con diseño de oruga, un elemento clásico y divertido para parques de juegos.',
            'Esta imagen muestra una piscina con estatuas de delfines. res figuras azules que parecen saltar sobre el agua, sostenidas por soportes metálicos visibles.'
        ],
        descriptionsEn: [
            'View of a Reforplaz solution created for recreational or urban spaces, with practical use and strong visual presence.',
            'This image shows a vibrant children\'s play area. Play structures: it includes slides, stairs, and modular climbing areas with colorful roofs.',
            'This image shows a giant chess set. It is an interactive attraction where visitors can play life-size games on an elevated metal structure.',
            'This image shows a children\'s spinning carousel in a playground, designed with a red metal structure and blue plastic seats. This type of equipment is classic in school recreational areas or children\'s parks.',
            'This image shows a children\'s bench with a dinosaur design, a creative and colorful piece of urban furniture.',
            'Solution image combining visual presence, durability, and continuous use.',
            'This image shows an outdoor gym exercise machine, specifically a cross-country ski trainer or double walker.',
            'This image shows a triple waist-twisting machine for outdoor gyms, installed in a children\'s park.',
            'This image shows a children\'s tunnel with a caterpillar design, a classic and fun element for playgrounds.',
            'This image shows a pool with dolphin statues. Three blue figures appear to be jumping over the water, supported by visible metal brackets.'
        ]
    }
};

const ASSET_PREFIX = window.location.pathname.includes('/html/') ? '../' : '';

const TRANSLATIONS = {
    en: {
        "Home": "Home",
        "Parks": "Parks",
        "Why Visit": "Why Visit",
        "Contact": "Contact",
        "Book Now": "Contact Now",
        "Explore Parks": "Explore Companies",
        "Learn More": "Learn More",
        "All Parks": "All Parks",
        "Family": "Family",
        "Extreme": "Extreme",
        "Luxury": "Luxury",
        "Choose Your Perfect Park": "Choose Your Perfect Company",
        "From family fun to extreme adventures": "From standard solutions to premium composite materials",
        "World-Class Standards": "World-Class Standards",
        "For All Ages": "For All Industries",
        "Exotic Locations": "Global Presence",
        "Luxury Experience": "Premium Quality",
        "Easy Booking": "Easy Contact",
        "Special Offers": "Special Solutions",
        "Gallery": "Gallery",
        "Guest Experiences": "Client Testimonials",
        "Ready for Your Adventure?": "Ready to Partner?",
        "Book your tickets today and get exclusive discounts": "Contact our companies today and get custom solutions",
        "Full Name": "Full Name",
        "Email": "Email",
        "Date": "Preferred Date",
        "Park": "Company",
        "Adults": "Quantity",
        "Children": "Specifications",
        "Package": "Package",
        "Estimated Total:": "Estimated Quote:",
        "Confirm Booking": "Request Quote",
        "Booking Confirmed!": "Quote Requested!",
        "Check your email for confirmation details. Your adventure awaits!": "Check your email for quote details. Our team will contact you soon!",
        "Close": "Close",
        "Book Your Adventure": "Request Custom Quote",
        "Search water parks...": "Search companies...",
        "Discover Your Next Adventure": "Discover Premium Composites",
        "World's Most Luxurious Water Parks": "Leading Composite Materials Manufacturers",
        "Experience premium aquatic adventures with world-class facilities and unforgettable moments": "Experience premium composite solutions with world-class manufacturing and quality assurance",
        "View Details": "View Details",
        "Why Visit PremiumAqua Parks?": "Why Choose BALNEARIOS ACUATICOS BO?",
        // New translations for composite materials
        "Why Choose BALNEARIOS ACUATICOS BO?": "Why Choose BALNEARIOS ACUATICOS BO?",
        "Discover the advantages of working with leading composite materials manufacturers": "Discover the advantages of working with leading composite materials manufacturers",
        "View Companies": "View Companies",
        "Contact Us": "Contact Us",
        "Advanced Technology": "Advanced Technology",
        "State-of-the-art manufacturing facilities with cutting-edge composite technology": "State-of-the-art manufacturing facilities with cutting-edge composite technology",
        "Global Standards": "Global Standards",
        "International quality certifications and compliance with global industry standards": "International quality certifications and compliance with global industry standards",
        "Expert Team": "Expert Team",
        "Highly qualified engineers and technicians with decades of industry experience": "Highly qualified engineers and technicians with decades of industry experience",
        "Custom Solutions": "Custom Solutions",
        "Tailored composite solutions designed to meet specific project requirements": "Tailored composite solutions designed to meet specific project requirements",
        "Fast Delivery": "Fast Delivery",
        "Efficient production processes ensuring timely delivery of your orders": "Efficient production processes ensuring timely delivery of your orders",
        "Competitive Pricing": "Competitive Pricing",
        "Cost-effective solutions without compromising on quality and performance": "Cost-effective solutions without compromising on quality and performance",
        "What Our Partners Say": "What Our Partners Say",
        "Trusted by industry leaders worldwide": "Trusted by industry leaders worldwide",
        "Ready to Partner With Us?": "Ready to Partner With Us?",
        "Contact our companies today and discover how our composite materials can enhance your projects": "Contact our companies today and discover how our composite materials can enhance your projects",
        "Get In Touch": "Get In Touch",
        "Ready to work with leading composite materials manufacturers? Contact us today.": "Ready to work with leading composite materials manufacturers? Contact us today.",
        "Phone": "Phone",
        "Address": "Address",
        "Business Hours": "Business Hours",
        "Mon-Fri: 8AM-6PM": "Mon-Fri: 8AM-6PM",
        "Sat-Sun: Closed": "Sat-Sun: Closed",
        "Company": "Company",
        "Subject": "Subject",
        "Message": "Message",
        "Send Message": "Send Message",
        "Visit Website": "Visit Website",
        "WhatsApp": "WhatsApp",
        "Facebook": "Facebook",
        "Instagram": "Instagram",
        "Email": "Email",
        "Official Links": "Official Links",
        "Not Available": "Not Available",
        // Featured Brands Section
        "Featured Brands": "Featured Brands",
        "Leading composite materials manufacturers showcasing excellence in reinforced plastics": "Leading composite materials manufacturers showcasing excellence in reinforced plastics",
        "Key Features": "Key Features",
        "Contact Now": "Contact Now",
        "Years Experience": "Years Experience",
        "Projects Completed": "Projects Completed",
        "Countries Served": "Countries Served",
        "Certifications": "Certifications",
        "View Details": "View Details",
        "Get Quote": "Get Quote",
        "Years": "Years",
        "Countries": "Countries",
        "Projects": "Projects",
        "Our Global Presence": "Our Global Presence",
        "Manufacturing facilities and offices worldwide": "Manufacturing facilities and offices worldwide",
        "Global Manufacturing Network": "Global Manufacturing Network",
        "Our companies operate manufacturing facilities across Europe and maintain offices worldwide to serve our international clients.": "Our companies operate manufacturing facilities across Europe and maintain offices worldwide to serve our international clients.",
        "Quick Links": "Quick Links",
        "Contact Info": "Contact Info",
        "Follow Us": "Follow Us",
        "Â© 2026 PremiumAqua Composites. All rights reserved.": "Â© 2026 PremiumAqua Composites. All rights reserved.",
        "Select a subject": "Select a subject",
        "General Inquiry": "General Inquiry",
        "Technical Support": "Technical Support",
        "Request Quote": "Request Quote",
        "Partnership": "Partnership",
        "Enter your full name": "Enter your full name",
        "Enter your email address": "Enter your email address",
        "Your company name": "Your company name",
        "Tell us about your project or inquiry...": "Tell us about your project or inquiry..."
    },
    es: {
        "Home": "Inicio",
        "Parks": "Proyectos",
        "Why Visit": "Por Qué Elegirnos",
        "Contact": "Contacto",
        "Book Now": "Ver Proyectos",
        "Explore Parks": "Explorar Proyectos",
        "Learn More": "Más Información",
        "All Parks": "Todos los Proyectos",
        "Family": "Familiar",
        "Extreme": "Extremo",
        "Luxury": "Lujo",
        "Choose Your Perfect Park": "Elige Tu Empresa Ideal",
        "From family fun to extreme adventures": "Desde experiencias familiares hasta opciones premium",
        "World-Class Standards": "Altos Estándares",
        "For All Ages": "Para Todos los Públicos",
        "Exotic Locations": "Presencia Regional",
        "Luxury Experience": "Experiencia Premium",
        "Easy Booking": "Contacto Fácil",
        "Special Offers": "Opciones Especiales",
        "Gallery": "Galería",
        "Guest Experiences": "Experiencias",
        "Ready for Your Adventure?": "¿Listo para Explorar Más?",
        "Book your tickets today and get exclusive discounts": "Explora nuestras empresas y encuentra la mejor opción para tu proyecto.",
        "Full Name": "Nombre Completo",
        "Email": "Correo Electrónico",
        "Date": "Fecha",
        "Park": "Parque",
        "Adults": "Adultos",
        "Children": "Niños",
        "Package": "Paquete",
        "Estimated Total:": "Total Estimado:",
        "Confirm Booking": "Confirmar Reserva",
        "Booking Confirmed!": "¡Reserva Confirmada!",
        "Check your email for confirmation details. Your adventure awaits!": "Verifica tu correo para los detalles. Tu aventura te espera.",
        "Close": "Cerrar",
        "Book Your Adventure": "Reserva Tu Visita",
        "Search water parks...": "Buscar proyectos...",
        "Discover Your Next Adventure": "Descubre tu Próxima Experiencia",
        "World's Most Luxurious Water Parks": "Proyectos y Marcas Destacadas",
        "Experience premium aquatic adventures with world-class facilities and unforgettable moments": "Descubre opciones destacadas con una presentación clara y profesional.",
        "View Details": "Ver Detalles",
        "Company Details": "Detalles de la Empresa",
        "Key Features": "Características Clave",
        "From": "Desde",
        "per person": "por persona",
        "Why Visit PremiumAqua Parks?": "¿POR QUE ELEGIR BALNEARIOS ACUATICOS BO?",
        "Why Choose PremiumAqua?": "¿POR QUE ELEGIR BALNEARIOS ACUATICOS BO?",
        "Discover the advantages of working with leading composite materials manufacturers": "Descubre por qué nuestras marcas destacadas sobresalen por experiencia, confianza y presentación profesional",
        "View Companies": "Ver Empresas",
        "Contact Us": "Contáctanos",
        "Advanced Technology": "Tecnología Avanzada",
        "State-of-the-art manufacturing facilities with cutting-edge composite technology": "Instalaciones de vanguardia con procesos modernos y presentación profesional.",
        "Global Standards": "Estándares Globales",
        "International quality certifications and compliance with global industry standards": "Calidad constante y marcas que transmiten confianza.",
        "Expert Team": "Equipo Experto",
        "Highly qualified engineers and technicians with decades of industry experience": "Un equipo con experiencia y visión clara para mostrar cada propuesta.",
        "Custom Solutions": "Soluciones Personalizadas",
        "Tailored composite solutions designed to meet specific project requirements": "Opciones adaptadas a distintas necesidades y perfiles de cliente.",
        "Fast Delivery": "Respuesta Rápida",
        "Efficient production processes ensuring timely delivery of your orders": "Información organizada para entender cada opción más rápido.",
        "Competitive Pricing": "Valor Competitivo",
        "Cost-effective solutions without compromising on quality and performance": "Una propuesta sólida sin perder claridad ni calidad visual.",
        "What Our Partners Say": "Lo Que Dicen Nuestros Visitantes",
        "Trusted by industry leaders worldwide": "Una mejor presentación genera confianza desde el primer vistazo.",
        "Ready to Partner With Us?": "¿Listo para Explorar Más?",
        "Contact our companies today and discover how our composite materials can enhance your projects": "Conoce nuestras empresas y descubre la opción que mejor se adapta a ti.",
        "Get In Touch": "Ponte en Contacto",
        "Ready to work with leading composite materials manufacturers? Contact us today.": "¿Listo para recibir más información? Contáctanos hoy.",
        "Phone": "Teléfono",
        "Address": "Dirección",
        "Business Hours": "Horario de Atención",
        "Mon-Fri: 8AM-6PM": "Lun-Vie: 8:00 a 18:00",
        "Sat-Sun: Closed": "Sáb-Dom: Cerrado",
        "Company": "Empresa",
        "Subject": "Asunto",
        "Message": "Mensaje",
        "Send Message": "Enviar Mensaje",
        "Visit Website": "Sitio Web",
        "WhatsApp": "WhatsApp",
        "Facebook": "Facebook",
        "Instagram": "Instagram",
        "Email": "Correo",
        "Official Links": "Enlaces Oficiales",
        "Not Available": "No disponible",
        "Featured Brands": "Marcas Destacadas",
        "Leading composite materials manufacturers showcasing excellence in reinforced plastics": "Marcas destacadas presentadas con más claridad y fuerza visual.",
        "Contact Now": "Contactar Ahora",
        "Years Experience": "Años de Experiencia",
        "Projects Completed": "Proyectos Completados",
        "Countries Served": "Países Atendidos",
        "Certifications": "Certificaciones",
        "Get Quote": "Solicitar Información",
        "Years": "Años",
        "Countries": "Países",
        "Projects": "Proyectos",
        "Our Global Presence": "Nuestra Presencia",
        "Manufacturing facilities and offices worldwide": "Marcas con presencia y una presentación más sólida.",
        "Global Manufacturing Network": "Red Destacada",
        "Our companies operate manufacturing facilities across Europe and maintain offices worldwide to serve our international clients.": "Nuestras empresas se presentan de una forma más clara, ordenada y confiable.",
        "Quick Links": "Enlaces Rápidos",
        "Contact Info": "Información de Contacto",
        "Follow Us": "Síguenos",
        "Â© 2026 PremiumAqua Composites. All rights reserved.": "© 2026 BALNEARIOS ACUATICOS BO. Todos los derechos reservados.",
        "Select a subject": "Selecciona un asunto",
        "General Inquiry": "Consulta General",
        "Technical Support": "Soporte Técnico",
        "Request Quote": "Solicitar Información",
        "Partnership": "Alianza Comercial",
        "Enter your full name": "Ingresa tu nombre completo",
        "Enter your email address": "Ingresa tu correo electrónico",
        "Your company name": "Nombre de tu empresa",
        "Tell us about your project or inquiry...": "Cuéntanos sobre tu proyecto o consulta..."
    },
    fr: {
        "Home": "Accueil",
        "Parks": "Entreprises",
        "Why Visit": "Pourquoi Nous Choisir",
        "Contact": "Contact",
        "Book Now": "Contacter Maintenant",
        "Explore Parks": "Explorer les Entreprises",
        "Learn More": "En Savoir Plus",
        "All Parks": "Toutes les Entreprises",
        "Family": "Standard",
        "Extreme": "Premium",
        "Luxury": "Luxe",
        "Choose Your Perfect Park": "Choisissez Votre Entreprise Parfaite",
        "From family fun to extreme adventures": "Des solutions standard aux matÃ©riaux composites premium",
        "World-Class Standards": "Normes de Classe Mondiale",
        "For All Ages": "Pour Tous les Secteurs",
        "Exotic Locations": "PrÃ©sence Globale",
        "Luxury Experience": "QualitÃ© Premium",
        "Easy Booking": "Contact Facile",
        "Special Offers": "Solutions SpÃ©ciales",
        "Gallery": "Galerie",
        "Guest Experiences": "TÃ©moignages Clients",
        "Ready for Your Adventure?": "PrÃªt Ã  Vous Associer?",
        "Book your tickets today and get exclusive discounts": "Contactez nos entreprises aujourd'hui et obtenez des solutions sur mesure",
        "Full Name": "Nom Complet",
        "Email": "Email",
        "Date": "Date PrÃ©fÃ©rÃ©e",
        "Park": "Entreprise",
        "Adults": "QuantitÃ©",
        "Children": "SpÃ©cifications",
        "Package": "Forfait",
        "Estimated Total:": "Devis EstimÃ©:",
        "Confirm Booking": "Demander un Devis",
        "Booking Confirmed!": "Devis DemandÃ©!",
        "Check your email for confirmation details. Your adventure awaits!": "VÃ©rifiez votre email pour les dÃ©tails du devis. Notre Ã©quipe vous contactera bientÃ´t!",
        "Close": "Fermer",
        "Book Your Adventure": "Demander un Devis PersonnalisÃ©",
        "Search water parks...": "Rechercher des entreprises...",
        "Discover Your Next Adventure": "DÃ©couvrez les Composites Premium",
        "World's Most Luxurious Water Parks": "Fabricants Leaders de MatÃ©riaux Composites",
        "Experience premium aquatic adventures with world-class facilities and unforgettable moments": "DÃ©couvrez des solutions composites premium avec fabrication de classe mondiale et assurance qualitÃ©",
        "View Details": "Voir les DÃ©tails",
        "Why Visit PremiumAqua Parks?": "Pourquoi Choisir les Entreprises PremiumAqua?"
    },
    de: {
        "Home": "Startseite",
        "Parks": "Unternehmen",
        "Why Visit": "Warum Uns WÃ¤hlen",
        "Contact": "Kontakt",
        "Book Now": "Jetzt Kontaktieren",
        "Explore Parks": "Unternehmen Erkunden",
        "Learn More": "Mehr Erfahren",
        "All Parks": "Alle Unternehmen",
        "Family": "Standard",
        "Extreme": "Premium",
        "Luxury": "Luxus",
        "Choose Your Perfect Park": "WÃ¤hlen Sie Ihr Perfektes Unternehmen",
        "From family fun to extreme adventures": "Von StandardlÃ¶sungen bis zu Premium-Verbundwerkstoffen",
        "World-Class Standards": "Weltklasse-Standards",
        "For All Ages": "FÃ¼r Alle Branchen",
        "Exotic Locations": "Globale PrÃ¤senz",
        "Luxury Experience": "Premium-QualitÃ¤t",
        "Easy Booking": "Einfacher Kontakt",
        "Special Offers": "Spezielle LÃ¶sungen",
        "Gallery": "Galerie",
        "Guest Experiences": "Kundenbewertungen",
        "Ready for Your Adventure?": "Bereit fÃ¼r Partnerschaft?",
        "Book your tickets today and get exclusive discounts": "Kontaktieren Sie unsere Unternehmen heute und erhalten Sie maÃŸgeschneiderte LÃ¶sungen",
        "Full Name": "VollstÃ¤ndiger Name",
        "Email": "E-Mail",
        "Date": "Bevorzugtes Datum",
        "Park": "Unternehmen",
        "Adults": "Menge",
        "Children": "Spezifikationen",
        "Package": "Paket",
        "Estimated Total:": "GeschÃ¤tztes Angebot:",
        "Confirm Booking": "Angebot Anfordern",
        "Booking Confirmed!": "Angebot Angefordert!",
        "Check your email for confirmation details. Your adventure awaits!": "ÃœberprÃ¼fen Sie Ihre E-Mail fÃ¼r Angebotsdetails. Unser Team wird Sie bald kontaktieren!",
        "Close": "SchlieÃŸen",
        "Book Your Adventure": "MaÃŸgeschneidertes Angebot Anfordern",
        "Search water parks...": "Unternehmen suchen...",
        "Discover Your Next Adventure": "Entdecken Sie Premium-Verbundwerkstoffe",
        "World's Most Luxurious Water Parks": "FÃ¼hrende Hersteller von Verbundwerkstoffen",
        "Experience premium aquatic adventures with world-class facilities and unforgettable moments": "Erleben Sie Premium-VerbundwerkstofflÃ¶sungen mit Weltklasse-Fertigung und QualitÃ¤tssicherung",
        "View Details": "Details Anzeigen",
        "Why Visit PremiumAqua Parks?": "Warum PremiumAqua-Unternehmen WÃ¤hlen?",
        "Booking Confirmed!": "Buchung BestÃ¤tigt!",
        "Check your email for confirmation details. Your adventure awaits!": "ÃœberprÃ¼fen Sie Ihre E-Mail fÃ¼r BestÃ¤tigungsdetails. Ihr Abenteuer wartet!",
        "Close": "SchlieÃŸen",
        "Book Your Adventure": "Buchen Sie Ihr Abenteuer",
        "Search water parks...": "Wasserpark suchen...",
        "Discover Your Next Adventure": "Entdecken Sie Ihr NÃ¤chstes Abenteuer",
        "World's Most Luxurious Water Parks": "Die LuxuriÃ¶sesten Wasserparks der Welt",
        "Experience premium aquatic adventures with world-class facilities and unforgettable moments": "Erleben Sie Premium-Wassersportabenteuer mit erstklassigen Einrichtungen",
        "View Details": "Details Anzeigen",
        "Why Visit PremiumAqua Parks?": "Warum PremiumAqua Parks Besuchen?"
    },
    pt: {
        "Home": "InÃ­cio",
        "Parks": "Empresas",
        "Why Visit": "Por Que Nos Escolher",
        "Contact": "Contato",
        "Book Now": "Contatar Agora",
        "Explore Parks": "Explorar Empresas",
        "Learn More": "Saiba Mais",
        "All Parks": "Todas as Empresas",
        "Family": "PadrÃ£o",
        "Extreme": "Premium",
        "Luxury": "Luxo",
        "Choose Your Perfect Park": "Escolha Sua Empresa Perfeita",
        "From family fun to extreme adventures": "De soluÃ§Ãµes padrÃ£o aos materiais compostos premium",
        "World-Class Standards": "PadrÃµes de Classe Mundial",
        "For All Ages": "Para Todos os Setores",
        "Exotic Locations": "PresenÃ§a Global",
        "Luxury Experience": "Qualidade Premium",
        "Easy Booking": "Contato FÃ¡cil",
        "Special Offers": "SoluÃ§Ãµes Especiais",
        "Gallery": "Galeria",
        "Guest Experiences": "Depoimentos de Clientes",
        "Ready for Your Adventure?": "Pronto para Parceria?",
        "Book your tickets today and get exclusive discounts": "Contate nossas empresas hoje e obtenha soluÃ§Ãµes personalizadas",
        "Full Name": "Nome Completo",
        "Email": "E-mail",
        "Date": "Data Preferida",
        "Park": "Empresa",
        "Adults": "Quantidade",
        "Children": "EspecificaÃ§Ãµes",
        "Package": "Pacote",
        "Estimated Total:": "CotaÃ§Ã£o Estimada:",
        "Confirm Booking": "Solicitar CotaÃ§Ã£o",
        "Booking Confirmed!": "CotaÃ§Ã£o Solicitada!",
        "Check your email for confirmation details. Your adventure awaits!": "Verifique seu email para detalhes da cotaÃ§Ã£o. Nossa equipe entrarÃ¡ em contato em breve!",
        "Close": "Fechar",
        "Book Your Adventure": "Solicitar CotaÃ§Ã£o Personalizada",
        "Search water parks...": "Buscar empresas...",
        "Discover Your Next Adventure": "Descubra Materiais Compostos Premium",
        "World's Most Luxurious Water Parks": "Fabricantes LÃ­deres de Materiais Compostos",
        "Experience premium aquatic adventures with world-class facilities and unforgettable moments": "Experimente soluÃ§Ãµes compostas premium com fabricaÃ§Ã£o de classe mundial e garantia de qualidade",
        "View Details": "Ver Detalhes",
        "Why Visit PremiumAqua Parks?": "Por Que Escolher as Empresas PremiumAqua?",
        "Children": "CrianÃ§as",
        "Package": "Pacote",
        "Estimated Total:": "Total Estimado:",
        "Confirm Booking": "Confirmar Reserva",
        "Booking Confirmed!": "Reserva Confirmada!",
        "Check your email for confirmation details. Your adventure awaits!": "Verifique seu email para detalhes de confirmaÃ§Ã£o. Sua aventura o aguarda!",
        "Close": "Fechar",
        "Book Your Adventure": "Reserve Sua Aventura",
        "Search water parks...": "Procurar projetos aquÃ¡ticos...",
        "Discover Your Next Adventure": "Descubra Sua PrÃ³xima Aventura",
        "World's Most Luxurious Water Parks": "Os Projetos AquÃ¡ticos Mais Luxuosos do Mundo",
        "Experience premium aquatic adventures with world-class facilities and unforgettable moments": "Vivencie aventuras aquÃ¡ticas premium com instalaÃ§Ãµes de classe mundial",
        "View Details": "Ver Detalhes",
        "Why Visit PremiumAqua Parks?": "Por Que Visitar os Projetos PremiumAqua?"
    },
    it: {
        "Home": "Home",
        "Parks": "Aziende",
        "Why Visit": "PerchÃ© Sceglierci",
        "Contact": "Contatti",
        "Book Now": "Contatta Ora",
        "Explore Parks": "Esplora le Aziende",
        "Learn More": "Scopri di PiÃ¹",
        "All Parks": "Tutte le Aziende",
        "Family": "Standard",
        "Extreme": "Premium",
        "Luxury": "Lusso",
        "Choose Your Perfect Park": "Scegli la Tua Azienda Perfetta",
        "From family fun to extreme adventures": "Da soluzioni standard a materiali compositi premium",
        "World-Class Standards": "Standard di Classe Mondiale",
        "For All Ages": "Per Tutti i Settori",
        "Exotic Locations": "Presenza Globale",
        "Luxury Experience": "QualitÃ  Premium",
        "Easy Booking": "Contatto Facile",
        "Special Offers": "Soluzioni Speciali",
        "Gallery": "Galleria",
        "Guest Experiences": "Testimonianze Clienti",
        "Ready for Your Adventure?": "Pronto per la Partnership?",
        "Book your tickets today and get exclusive discounts": "Contatta le nostre aziende oggi e ottieni soluzioni su misura",
        "Full Name": "Nome Completo",
        "Email": "Email",
        "Date": "Data Preferita",
        "Park": "Azienda",
        "Adults": "QuantitÃ ",
        "Children": "Specifiche",
        "Package": "Pacchetto",
        "Estimated Total:": "Preventivo Stimato:",
        "Confirm Booking": "Richiedi Preventivo",
        "Booking Confirmed!": "Preventivo Richiesto!",
        "Check your email for confirmation details. Your adventure awaits!": "Controlla la tua email per i dettagli del preventivo. Il nostro team ti contatterÃ  presto!",
        "Close": "Chiudi",
        "Book Your Adventure": "Richiedi Preventivo Personalizzato",
        "Search water parks...": "Cerca aziende...",
        "Discover Your Next Adventure": "Scopri Materiali Compositi Premium",
        "World's Most Luxurious Water Parks": "Produttori Leader di Materiali Compositi",
        "Experience premium aquatic adventures with world-class facilities and unforgettable moments": "Sperimenta soluzioni composite premium con produzione di classe mondiale e controllo qualitÃ ",
        "View Details": "Visualizza Dettagli",
        "Why Visit PremiumAqua Parks?": "PerchÃ© Scegliere le Aziende PremiumAqua?",
        "Estimated Total:": "Totale Stimato:",
        "Confirm Booking": "Conferma Prenotazione",
        "Booking Confirmed!": "Prenotazione Confermata!",
        "Check your email for confirmation details. Your adventure awaits!": "Controlla la tua email per i dettagli di conferma. La tua avventura ti aspetta!",
        "Close": "Chiudi",
        "Book Your Adventure": "Prenota La Tua Avventura",
        "Search water parks...": "Cerca parchi acquatici...",
        "Discover Your Next Adventure": "Scopri la Tua Prossima Avventura",
        "World's Most Luxurious Water Parks": "I Parchi Acquatici PiÃ¹ Lussuosi del Mondo",
        "Experience premium aquatic adventures with world-class facilities and unforgettable moments": "Vivi avventure acquatiche premium con strutture di classe mondiale",
        "View Details": "Visualizza Dettagli",
        "Why Visit PremiumAqua Parks?": "PerchÃ© Visitare i Parchi PremiumAqua?"
    },
    zh: {
        "Home": "é¦–é¡µ",
        "Parks": "å…¬å¸",
        "Why Visit": "ä¸ºä»€ä¹ˆé€‰æ‹©æˆ‘ä»¬",
        "Contact": "è”ç³»",
        "Book Now": "ç«‹å³è”ç³»",
        "Explore Parks": "æŽ¢ç´¢å…¬å¸",
        "Learn More": "äº†è§£æ›´å¤š",
        "All Parks": "æ‰€æœ‰å…¬å¸",
        "Family": "æ ‡å‡†",
        "Extreme": "é«˜çº§",
        "Luxury": "è±ªåŽ",
        "Choose Your Perfect Park": "é€‰æ‹©æ‚¨å®Œç¾Žçš„å…¬å¸",
        "From family fun to extreme adventures": "ä»Žæ ‡å‡†è§£å†³æ–¹æ¡ˆåˆ°é«˜çº§å¤åˆææ–™",
        "World-Class Standards": "ä¸–ç•Œçº§æ ‡å‡†",
        "For All Ages": "é€‚ç”¨äºŽæ‰€æœ‰è¡Œä¸š",
        "Exotic Locations": "å…¨çƒå­˜åœ¨",
        "Luxury Experience": "é«˜çº§å“è´¨",
        "Easy Booking": "è½»æ¾è”ç³»",
        "Special Offers": "ç‰¹æ®Šè§£å†³æ–¹æ¡ˆ",
        "Gallery": "ç”»å»Š",
        "Guest Experiences": "å®¢æˆ·è¯„ä»·",
        "Ready for Your Adventure?": "å‡†å¤‡å¥½åˆä½œäº†å—?",
        "Book your tickets today and get exclusive discounts": "ç«‹å³è”ç³»æˆ‘ä»¬çš„å…¬å¸å¹¶èŽ·å¾—å®šåˆ¶è§£å†³æ–¹æ¡ˆ",
        "Full Name": "å…¨å",
        "Email": "ç”µé‚®",
        "Date": "é¦–é€‰æ—¥æœŸ",
        "Park": "å…¬å¸",
        "Adults": "æ•°é‡",
        "Children": "è§„æ ¼",
        "Package": "å¥—é¤",
        "Estimated Total:": "ä¼°è®¡æŠ¥ä»·:",
        "Confirm Booking": "è¯·æ±‚æŠ¥ä»·",
        "Booking Confirmed!": "æŠ¥ä»·å·²è¯·æ±‚!",
        "Check your email for confirmation details. Your adventure awaits!": "æ£€æŸ¥æ‚¨çš„ç”µå­é‚®ä»¶ä»¥äº†è§£æŠ¥ä»·è¯¦æƒ…ã€‚æˆ‘ä»¬å›¢é˜Ÿå°†å¾ˆå¿«è”ç³»æ‚¨!",
        "Close": "å…³é—­",
        "Book Your Adventure": "è¯·æ±‚å®šåˆ¶æŠ¥ä»·",
        "Search water parks...": "æœç´¢å…¬å¸...",
        "Discover Your Next Adventure": "å‘çŽ°é«˜çº§å¤åˆææ–™",
        "World's Most Luxurious Water Parks": "é¢†å…ˆçš„å¤åˆææ–™åˆ¶é€ å•†",
        "Experience premium aquatic adventures with world-class facilities and unforgettable moments": "ä½“éªŒé«˜çº§å¤åˆææ–™è§£å†³æ–¹æ¡ˆï¼Œé…å¤‡ä¸–ç•Œçº§åˆ¶é€ å’Œè´¨é‡ä¿è¯",
        "View Details": "æŸ¥çœ‹è¯¦æƒ…",
        "Why Visit PremiumAqua Parks?": "ä¸ºä»€ä¹ˆé€‰æ‹©PremiumAquaå…¬å¸?"
    }
};

// ============ STATE MANAGEMENT ============

const state = {
    currentLanguage: 'es',
    currentFilter: 'all',
    selectedPark: null,
    bookingData: {},
    currentGalleryIndex: 0,
    currentHomeVideoIndex: 0,
    gallerySlideshowTimer: null,
    gallerySlideshowPlaying: true,
    gallerySlideshowDuration: 5000,
    galleryInitialized: false,
    homeVideoRailInitialized: false
};

// ============ LANGUAGE SYSTEM ============

function updateLanguageUI(lang) {
    const langOptions = document.querySelectorAll('.lang-option');
    const normalizedLang = SUPPORTED_LANGUAGES.includes(lang) ? lang : 'es';
    const selectedOption = document.querySelector(`.lang-option[data-lang="${normalizedLang}"]`);

    langOptions.forEach(option => {
        option.classList.toggle('active', option === selectedOption);
    });
}

function initLanguageSystem() {
    const langOptions = document.querySelectorAll('.lang-option');

    langOptions.forEach(option => {
        option.addEventListener('click', () => {
            const lang = option.dataset.lang || 'es';
            if (lang !== state.currentLanguage) {
                setLanguage(lang);
            }
        });
    });
}

function translateText(key) {
    return TRANSLATIONS[state.currentLanguage]?.[key] || key;
}

function getElementBaseText(element) {
    if (!element || !element.dataset) {
        return '';
    }

    return element.dataset.es || element.dataset.en || element.textContent.trim();
}

function getPlaceholderTranslation(element, lang) {
    if (!element || !element.dataset) {
        return '';
    }

    const localizedPlaceholderKey = `${lang}Placeholder`;
    if (element.dataset[localizedPlaceholderKey]) {
        return element.dataset[localizedPlaceholderKey];
    }

    if (lang === 'es') {
        return element.dataset.esPlaceholder || element.dataset.enPlaceholder || element.placeholder;
    }

    const englishPlaceholder = element.dataset.enPlaceholder || element.dataset.esPlaceholder || element.placeholder;
    return TRANSLATIONS[lang]?.[englishPlaceholder] || englishPlaceholder;
}

function setLanguage(lang) {
    if (!SUPPORTED_LANGUAGES.includes(lang) || !TRANSLATIONS[lang]) {
        lang = 'es';
    }

    state.currentLanguage = lang;

    document.querySelectorAll('[data-es], [data-en]').forEach(element => {
        const baseText = getElementBaseText(element);
        const englishKey = element.dataset.en || baseText;
        const translatedValue = lang === 'es'
            ? baseText
            : (element.dataset[lang] || TRANSLATIONS[lang]?.[englishKey] || baseText);

        if (!translatedValue) {
            return;
        }

        if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
            element.placeholder = translatedValue;
        } else {
            element.textContent = translatedValue;
        }
    });

    document.querySelectorAll('input, textarea').forEach(element => {
        const placeholderText = getPlaceholderTranslation(element, lang);
        if (placeholderText) {
            element.placeholder = placeholderText;
        }
    });

    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        const placeholderText = getPlaceholderTranslation(searchInput, lang)
            || TRANSLATIONS[lang]['Search companies...']
            || TRANSLATIONS[lang]['Search water parks...']
            || 'Buscar empresas...';
        searchInput.placeholder = placeholderText;
    }

    // Update featured brands when language changes
    if (document.getElementById('featuredBrandsGrid')) {
        renderFeaturedBrands(PARKS_DATA);
    }

    // Update featured brands preview when language changes
    if (document.getElementById('featuredBrandsPreview')) {
        renderFeaturedBrandsPreview(PARKS_DATA);
    }

    if (document.body.classList.contains('home-page') && state.homeVideoRailInitialized) {
        initHomeVideoRail();
    }

    // Update parks grid when language changes
    if (document.getElementById('parksGrid')) {
        renderParks(PARKS_DATA);
    }

    if (document.getElementById('projectsMegaPanel')) {
        const activeTab = document.querySelector('.projects-mega-tab.active')?.dataset.projectTab || 'proyectos';
        renderProjectsMegaMenu(activeTab);
    }

    if (document.getElementById('contactBrandsGrid') || document.getElementById('company')) {
        initContactPageDirectory();
    }

    if (document.getElementById('galleryGrid') && state.galleryInitialized) {
        initGallery();
    }

    updateLanguageUI(lang);
    localStorage.setItem('preferredLanguage', lang);
}

// ============ PARKS RENDERING ============

function initParksGrid() {
    const featuredBrandsSection = document.getElementById('featuredBrands');
    if (featuredBrandsSection && document.getElementById('parksGrid')) {
        featuredBrandsSection.remove();
    }

    // Initialize featured brands preview if it exists (index.html)
    if (document.getElementById('featuredBrandsPreview')) {
        renderFeaturedBrandsPreview(PARKS_DATA);
    }

    if (document.getElementById('projectsMegaPanel')) {
        initProjectsMegaMenu();
    }

    // Initialize regular parks grid if it exists
    if (document.getElementById('parksGrid')) {
        renderParks(PARKS_DATA);
    }

    // Initialize featured brands grid if it exists (proyectos.html)
    if (document.getElementById('featuredBrandsGrid')) {
        renderFeaturedBrands(PARKS_DATA);
    }

}

function getHomeVideoShowcaseItems() {
    return HOME_VIDEO_SHOWCASE.filter(item => item.video);
}

function observeOnceWhenVisible(element, callback, options = {}) {
    if (!element || typeof callback !== 'function') {
        return;
    }

    const { rootMargin = '200px 0px' } = options;

    if (typeof IntersectionObserver !== 'function') {
        callback();
        return;
    }

    const observer = new IntersectionObserver((entries) => {
        if (!entries.some(entry => entry.isIntersecting)) {
            return;
        }

        observer.disconnect();
        callback();
    }, { rootMargin });

    observer.observe(element);
}

function scheduleDeferredHomeSections() {
    const galleryGrid = document.getElementById('galleryGrid');
    if (galleryGrid && !state.galleryInitialized) {
        observeOnceWhenVisible(galleryGrid, () => {
            state.galleryInitialized = true;
            initGallery();
        });
    }

    if (!document.body.classList.contains('home-page') || state.homeVideoRailInitialized) {
        return;
    }

    const videoSectionTrigger = document.querySelector('.home-transition-section');
    observeOnceWhenVisible(videoSectionTrigger, () => {
        state.homeVideoRailInitialized = true;
        initHomeVideoRail();
    });
}

function mountHomeVideoRailSection() {
    if (!document.body.classList.contains('home-page')) {
        return false;
    }

    const section = document.querySelector('.home-transition-section');
    const container = section?.querySelector('.container');
    if (!section || !container) {
        return false;
    }

    if (section.classList.contains('home-video-section') && document.getElementById('homeVideoRailTrack')) {
        return true;
    }

    section.id = 'homeVideoRail';
    section.classList.add('home-video-section');

    container.innerHTML = `
        <div class="home-video-stage">
            <div class="home-video-showcase">
                <div class="home-video-rail-shell">
                    <button class="home-video-nav home-video-nav-prev" id="homeVideoPrev" type="button" aria-label="Video anterior">
                        <span aria-hidden="true">&lt;</span>
                    </button>

                    <div class="home-video-viewport" id="homeVideoViewport">
                        <div class="home-video-track" id="homeVideoRailTrack"></div>
                    </div>

                    <button class="home-video-nav home-video-nav-next" id="homeVideoNext" type="button" aria-label="Video siguiente">
                        <span aria-hidden="true">&gt;</span>
                    </button>
                </div>

                <div class="home-video-dots" id="homeVideoDots"></div>
            </div>
        </div>
    `;

    return true;
}

function createHomeVideoRailCardMarkup(item, currentLanguage) {
    const isSpanish = currentLanguage === 'es';
    const title = isSpanish && item.title ? item.title : item.titleEn || item.title;

    return `
        <article class="home-video-card" data-video-id="${item.id}">
            <div class="home-video-frame">
                <video class="home-video-media" muted playsinline preload="metadata" loop aria-label="${title}">
                    <source src="${resolveAssetPath(item.video)}" type="video/mp4">
                </video>
            </div>
        </article>
    `;
}

function renderHomeVideoRail() {
    if (!mountHomeVideoRailSection()) {
        return;
    }

    const track = document.getElementById('homeVideoRailTrack');
    const dots = document.getElementById('homeVideoDots');

    if (!track || !dots) {
        return;
    }

    const currentLanguage = state.currentLanguage || 'es';
    const showcaseItems = getHomeVideoShowcaseItems();
    const maxIndex = Math.max(showcaseItems.length - 1, 0);

    state.currentHomeVideoIndex = Math.min(state.currentHomeVideoIndex, maxIndex);

    track.innerHTML = showcaseItems
        .map(item => createHomeVideoRailCardMarkup(item, currentLanguage))
        .join('');

    dots.innerHTML = showcaseItems
        .map((item, index) => `
            <button class="home-video-dot ${index === state.currentHomeVideoIndex ? 'active' : ''}" type="button" data-video-index="${index}" aria-label="${item.title}"></button>
        `)
        .join('');
}

function prefersHoverVideoPlayback() {
    return typeof window.matchMedia === 'function'
        && window.matchMedia('(hover: hover) and (pointer: fine)').matches;
}

function usesCompactHomeVideoGrid() {
    return typeof window.matchMedia === 'function'
        && window.matchMedia('(min-width: 1101px)').matches;
}

function initHomeVideoStageReveal(section) {
    const stage = section?.querySelector('.home-video-stage');
    if (!stage || stage.dataset.revealReady === 'true') {
        return;
    }

    stage.dataset.revealReady = 'true';

    if (typeof window.matchMedia === 'function' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        stage.classList.add('is-visible');
        return;
    }

    if (typeof IntersectionObserver !== 'function') {
        stage.classList.add('is-visible');
        return;
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) {
                return;
            }

            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
        });
    }, {
        threshold: 0.24,
        rootMargin: '0px 0px -8% 0px'
    });

    observer.observe(stage);
}

function playHomeVideo(video, resetToStart = false) {
    if (!(video instanceof HTMLVideoElement)) {
        return;
    }

    video.muted = true;

    if (resetToStart) {
        video.currentTime = 0;
    }

    const playPromise = video.play();
    if (playPromise && typeof playPromise.catch === 'function') {
        playPromise.catch(() => {});
    }
}

function pauseHomeVideo(video, resetToStart = false) {
    if (!(video instanceof HTMLVideoElement)) {
        return;
    }

    video.pause();

    if (resetToStart) {
        video.currentTime = 0;
    }
}

function syncHomeVideoPlayback() {
    const videos = document.querySelectorAll('.home-video-media');
    const useHoverPlayback = prefersHoverVideoPlayback();
    const useCompactGridPlayback = usesCompactHomeVideoGrid();

    videos.forEach((video, index) => {
        const card = video.closest('.home-video-card');
        const isHovered = card?.dataset.hoverActive === 'true';

        if (useCompactGridPlayback) {
            playHomeVideo(video, index === 0);
            return;
        }

        if (useHoverPlayback) {
            if (isHovered) {
                playHomeVideo(video, true);
            } else {
                pauseHomeVideo(video, true);
            }

            return;
        }

        if (index === state.currentHomeVideoIndex) {
            playHomeVideo(video, true);
            return;
        }

        pauseHomeVideo(video, true);
    });
}

function getHomeVideoStepSize() {
    const viewport = document.getElementById('homeVideoViewport');
    const firstCard = document.querySelector('.home-video-card');

    if (!viewport || !firstCard) {
        return 0;
    }

    const cardWidth = firstCard.getBoundingClientRect().width;
    const trackStyle = window.getComputedStyle(document.getElementById('homeVideoRailTrack'));
    const gap = parseFloat(trackStyle.columnGap || trackStyle.gap || '0');

    return cardWidth + gap;
}

function updateHomeVideoRailUI() {
    const viewport = document.getElementById('homeVideoViewport');
    const dots = document.querySelectorAll('.home-video-dot');
    const prev = document.getElementById('homeVideoPrev');
    const next = document.getElementById('homeVideoNext');
    const maxIndex = Math.max(dots.length - 1, 0);
    const stepSize = getHomeVideoStepSize();

    if (!viewport || !stepSize) {
        return;
    }

    const nextIndex = Math.max(0, Math.min(maxIndex, Math.round(viewport.scrollLeft / stepSize)));
    state.currentHomeVideoIndex = nextIndex;

    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === state.currentHomeVideoIndex);
    });

    if (prev) {
        prev.disabled = viewport.scrollLeft <= 8;
    }

    if (next) {
        next.disabled = viewport.scrollLeft >= (viewport.scrollWidth - viewport.clientWidth - 8);
    }
}

function scrollHomeVideoRailTo(index) {
    const cards = document.querySelectorAll('.home-video-card');
    const viewport = document.getElementById('homeVideoViewport');

    if (!cards[index] || !viewport) {
        return;
    }

    viewport.scrollTo({
        left: cards[index].offsetLeft,
        behavior: 'smooth'
    });
    state.currentHomeVideoIndex = index;
    syncHomeVideoPlayback();
    window.setTimeout(updateHomeVideoRailUI, 220);
}

function initHomeVideoRail() {
    state.homeVideoRailInitialized = true;
    renderHomeVideoRail();

    const section = document.getElementById('homeVideoRail');
    const viewport = document.getElementById('homeVideoViewport');
    const prev = document.getElementById('homeVideoPrev');
    const next = document.getElementById('homeVideoNext');
    const dots = document.getElementById('homeVideoDots');

    if (!section || !viewport || !prev || !next || !dots) {
        return;
    }

    initHomeVideoStageReveal(section);

    if (section.dataset.initialized !== 'true') {
        prev.addEventListener('click', () => {
            scrollHomeVideoRailTo(Math.max(state.currentHomeVideoIndex - 1, 0));
        });

        next.addEventListener('click', () => {
            const maxIndex = Math.max(document.querySelectorAll('.home-video-card').length - 1, 0);
            scrollHomeVideoRailTo(Math.min(state.currentHomeVideoIndex + 1, maxIndex));
        });

        viewport.addEventListener('scroll', () => {
            window.requestAnimationFrame(updateHomeVideoRailUI);
        });

        dots.addEventListener('click', (event) => {
            const dot = event.target.closest('.home-video-dot');
            if (!dot) {
                return;
            }

            const index = Number(dot.dataset.videoIndex || 0);
            scrollHomeVideoRailTo(index);
        });

        window.addEventListener('resize', () => {
            window.requestAnimationFrame(updateHomeVideoRailUI);
        });

        section.addEventListener('pointerenter', (event) => {
            if (!prefersHoverVideoPlayback()) {
                return;
            }

            const card = event.target.closest('.home-video-card');
            if (!card) {
                return;
            }

            document.querySelectorAll('.home-video-card[data-hover-active="true"]').forEach((activeCard) => {
                if (activeCard !== card) {
                    activeCard.dataset.hoverActive = 'false';
                }
            });

            card.dataset.hoverActive = 'true';
            syncHomeVideoPlayback();
        }, true);

        section.addEventListener('pointerleave', (event) => {
            if (!prefersHoverVideoPlayback()) {
                return;
            }

            const card = event.target.closest('.home-video-card');
            if (!card) {
                return;
            }

            card.dataset.hoverActive = 'false';
            syncHomeVideoPlayback();
        }, true);

        section.addEventListener('focusin', (event) => {
            if (!prefersHoverVideoPlayback()) {
                return;
            }

            const card = event.target.closest('.home-video-card');
            if (!card) {
                return;
            }

            card.dataset.hoverActive = 'true';
            syncHomeVideoPlayback();
        });

        section.addEventListener('focusout', () => {
            if (!prefersHoverVideoPlayback()) {
                return;
            }

            window.setTimeout(() => {
                const focusedCard = document.activeElement?.closest?.('.home-video-card');

                document.querySelectorAll('.home-video-card').forEach((card) => {
                    card.dataset.hoverActive = focusedCard === card ? 'true' : 'false';
                });

                syncHomeVideoPlayback();
            }, 0);
        });

        section.dataset.initialized = 'true';
    }

    document.querySelectorAll('.home-video-media').forEach((video, index, videos) => {
        video.onended = () => {
            const nextIndex = (index + 1) % videos.length;
            scrollHomeVideoRailTo(nextIndex);
        };
    });

    window.requestAnimationFrame(() => {
        const activeCard = document.querySelectorAll('.home-video-card')[state.currentHomeVideoIndex];
        if (activeCard) {
            viewport.scrollLeft = activeCard.offsetLeft;
        }
        syncHomeVideoPlayback();
        updateHomeVideoRailUI();
    });
}

function renderParks(parks) {
    const grid = document.getElementById('parksGrid');
    const currentLanguage = state.currentLanguage || 'es';
    grid.innerHTML = parks.map((park, index) =>
        createBrandCardMarkup(park, index, currentLanguage, { variant: 'showcase', showGallery: true })
    ).join('');

    // Add event listeners
    document.querySelectorAll('.featured-brand-card .view-details-btn, .parks-showcase-card .view-details-btn').forEach(btn => {
        btn.addEventListener('click', () => showParkDetails(parseInt(btn.dataset.parkId)));
    });

    document.querySelectorAll('.featured-brand-card .contact-btn, .parks-showcase-card .contact-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const parkId = parseInt(btn.dataset.parkId, 10);
            const park = PARKS_DATA.find(item => item.id === parkId);
            const href = getBrandDirectContactHref(park, currentLanguage);

            if (href) {
                window.open(href, '_blank', 'noopener,noreferrer');
                return;
            }

            openBookingModal(parkId);
        });
    });
}

function getParkModalElement() {
    return document.getElementById('parkModal') || document.getElementById('modal');
}

function renderFeaturedBrands(parks) {
    const grid = document.getElementById('featuredBrandsGrid');
    if (!grid) return;

    const currentLanguage = state.currentLanguage || 'es';
    const featured = getFeaturedParks(parks, FEATURED_BRANDS_LIMIT);

    grid.innerHTML = featured.map((park, index) =>
        createBrandCardMarkup(park, index, currentLanguage, { variant: 'compact', showGallery: false })
    ).join('');

    document.querySelectorAll('.featured-brand-card .view-details-btn').forEach(btn => {
        btn.addEventListener('click', () => showParkDetails(parseInt(btn.dataset.parkId)));
    });

    document.querySelectorAll('.featured-brand-card .contact-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const parkId = parseInt(btn.dataset.parkId, 10);
            const park = PARKS_DATA.find(item => item.id === parkId);
            const href = getBrandDirectContactHref(park, currentLanguage);

            if (href) {
                window.open(href, '_blank', 'noopener,noreferrer');
                return;
            }

            openBookingModal(parkId);
        });
    });
}

function renderFeaturedBrandsPreview(parks) {
    const grid = document.getElementById('featuredBrandsPreview');
    if (!grid) return;

    const currentLanguage = state.currentLanguage || 'es';
    const featured = getFeaturedParks(parks, HOME_PREVIEW_LIMIT);

    grid.innerHTML = featured.map((park, index) =>
        createBrandCardMarkup(park, index, currentLanguage, { variant: 'preview', showGallery: false })
    ).join('');

    document.querySelectorAll('.featured-brand-card-preview .view-details-btn-preview').forEach(btn => {
        btn.addEventListener('click', () => redirectToBrandDetails(parseInt(btn.dataset.parkId, 10)));
    });
}

function getParkByName(name) {
    return PARKS_DATA.find(park => park.name === name);
}

function getLocalizedParkSummary(park, currentLanguage) {
    return currentLanguage === 'es' ? park.descriptionEs : park.description;
}

function getLocalizedParkProducts(park, currentLanguage) {
    const localizedProducts = currentLanguage === 'es' ? park.productsEs : park.products;
    return Array.isArray(localizedProducts) ? localizedProducts : [];
}

function createMegaMenuEntry(labelEs, labelEn, descriptionEs, descriptionEn, href) {
    return {
        labelEs,
        labelEn,
        descriptionEs,
        descriptionEn,
        href
    };
}

function getCompactMegaCopy(text, maxLength = 104) {
    if (!text) {
        return '';
    }

    const normalizedText = String(text).replace(/\s+/g, ' ').trim();
    if (normalizedText.length <= maxLength) {
        return normalizedText;
    }

    const truncated = normalizedText.slice(0, maxLength);
    const safeCut = truncated.lastIndexOf(' ');
    return `${(safeCut > 28 ? truncated.slice(0, safeCut) : truncated).trim()}...`;
}

function getMegaBrandMeta(park, currentLanguage) {
    const products = getLocalizedParkProducts(park, currentLanguage).slice(0, 2);
    if (products.length > 0) {
        return products.join(' · ');
    }

    return currentLanguage === 'es' ? park.locationEs : park.location;
}

function getProjectsMegaConfig(currentLanguage) {
    const isEs = currentLanguage === 'es';
    const fiberglass = getParkByName('FIBERGLASS');
    const montenegro = getParkByName('MONTENEGRO');
    const aquapark = getParkByName('AQUAPARK');
    const fibrotek = getParkByName('FIBROTEK');
    const reforplaz = getParkByName('REFORPLAZ');
    const projectsPath = getProjectsPagePath();
    const parksSectionHref = `${projectsPath}#parksSection`;
    const contactPath = window.location.pathname.toLowerCase().includes('/html/')
        ? 'contacto.html'
        : 'html/contacto.html';

    return {
        proyectos: {
            leftTitle: isEs ? 'Tipos de proyecto' : 'Project types',
            leftItems: [
                createMegaMenuEntry(
                    'Piscinas y parques acuaticos',
                    'Pools and water parks',
                    'AQUAPARK concentra proyectos recreativos, toboganes y soluciones para espacios de alto uso.',
                    'AQUAPARK focuses on recreational projects, slides, and high-use aquatic spaces.',
                    buildBrandDetailsUrl(aquapark.id)
                ),
                createMegaMenuEntry(
                    'Fachadas y acabados premium',
                    'Premium facades and finishes',
                    'MONTENEGRO aporta una propuesta visual fuerte para obras monumentales, cascadas y acabados diferenciados.',
                    'MONTENEGRO brings strong visual positioning for monumental works, waterfalls, and differentiated finishes.',
                    buildBrandDetailsUrl(montenegro.id)
                ),
                createMegaMenuEntry(
                    'Produccion industrial tecnica',
                    'Technical industrial production',
                    'FIBERGLASS responde bien en fabricacion tecnica, piezas resistentes y volumen de produccion.',
                    'FIBERGLASS performs well in technical manufacturing, durable pieces, and production volume.',
                    buildBrandDetailsUrl(fiberglass.id)
                ),
                createMegaMenuEntry(
                    'Piezas creativas y especiales',
                    'Creative and specialty parts',
                    'FIBROTEK combina estructuras en fibra con soluciones creativas para distintos sectores.',
                    'FIBROTEK combines fiberglass structures with creative solutions for multiple sectors.',
                    buildBrandDetailsUrl(fibrotek.id)
                ),
                createMegaMenuEntry(
                    'Soluciones modulares y de uso diario',
                    'Modular and everyday-use solutions',
                    'REFORPLAZ se orienta a tanques, modulos y piezas practicas para uso continuo.',
                    'REFORPLAZ is geared toward tanks, modules, and practical pieces for continuous use.',
                    buildBrandDetailsUrl(reforplaz.id)
                )
            ],
            centerTitle: isEs ? 'Aplicaciones' : 'Applications',
            centerItems: [
                createMegaMenuEntry(
                    'Espacios recreativos de alto impacto',
                    'High-impact recreational spaces',
                    `Productos clave: ${getLocalizedParkProducts(aquapark, currentLanguage).slice(0, 2).join(', ')}.`,
                    `Key products: ${getLocalizedParkProducts(aquapark, currentLanguage).slice(0, 2).join(', ')}.`,
                    buildBrandDetailsUrl(aquapark.id)
                ),
                createMegaMenuEntry(
                    'Obras decorativas y visuales',
                    'Decorative and visual works',
                    `Linea destacada: ${getLocalizedParkProducts(montenegro, currentLanguage).slice(0, 2).join(', ')}.`,
                    `Highlighted line: ${getLocalizedParkProducts(montenegro, currentLanguage).slice(0, 2).join(', ')}.`,
                    buildBrandDetailsUrl(montenegro.id)
                ),
                createMegaMenuEntry(
                    'Produccion reforzada para exterior',
                    'Reinforced exterior production',
                    `Especialidad: ${getLocalizedParkProducts(fiberglass, currentLanguage).slice(0, 2).join(', ')}.`,
                    `Specialty: ${getLocalizedParkProducts(fiberglass, currentLanguage).slice(0, 2).join(', ')}.`,
                    buildBrandDetailsUrl(fiberglass.id)
                ),
                createMegaMenuEntry(
                    'Soluciones ligeras y creativas',
                    'Lightweight and creative solutions',
                    `Aplicaciones visibles: ${getLocalizedParkProducts(fibrotek, currentLanguage).slice(0, 2).join(', ')}.`,
                    `Visible applications: ${getLocalizedParkProducts(fibrotek, currentLanguage).slice(0, 2).join(', ')}.`,
                    buildBrandDetailsUrl(fibrotek.id)
                ),
                createMegaMenuEntry(
                    'Piezas funcionales para uso continuo',
                    'Functional pieces for continuous use',
                    `Salida comercial: ${getLocalizedParkProducts(reforplaz, currentLanguage).slice(0, 2).join(', ')}.`,
                    `Commercial output: ${getLocalizedParkProducts(reforplaz, currentLanguage).slice(0, 2).join(', ')}.`,
                    buildBrandDetailsUrl(reforplaz.id)
                )
            ],
            materialTitle: isEs ? 'Materiales' : 'Materials',
            materialItems: [
                createMegaMenuEntry(
                    'Fibra de vidrio estructural',
                    'Structural fiberglass',
                    'Base fuerte para fabricacion tecnica y soluciones de alto rendimiento.',
                    'A strong base for technical manufacturing and high-performance solutions.',
                    buildBrandDetailsUrl(fiberglass.id)
                ),
                createMegaMenuEntry(
                    'Plasticos reforzados premium',
                    'Premium reinforced plastics',
                    'Acabado visual mas aspiracional para propuestas premium y arquitectonicas.',
                    'More aspirational visual finish for premium and architectural proposals.',
                    buildBrandDetailsUrl(montenegro.id)
                ),
                createMegaMenuEntry(
                    'Compuestos resistentes al agua',
                    'Water-resistant composites',
                    'Linea pensada para piscinas, humedad y proyectos acuaticos intensivos.',
                    'A line designed for pools, humidity, and intensive aquatic projects.',
                    buildBrandDetailsUrl(aquapark.id)
                ),
                createMegaMenuEntry(
                    'Materiales creativos y ligeros',
                    'Creative and lightweight materials',
                    'Alternativas para piezas especiales, escultura y soluciones mas flexibles.',
                    'Alternatives for specialty parts, sculpture, and more flexible solutions.',
                    buildBrandDetailsUrl(fibrotek.id)
                ),
                createMegaMenuEntry(
                    'Produccion modular y versatil',
                    'Modular and versatile production',
                    'Opciones practicas para tanques, modulos y productos de rotacion comercial.',
                    'Practical options for tanks, modules, and commercially rotated products.',
                    buildBrandDetailsUrl(reforplaz.id)
                )
            ],
            brandTitle: isEs ? 'Marcas' : 'Brands',
            visuals: [
                {
                    image: '../img/fiberglass/fiberglass1.jpeg',
                    position: 'center center',
                    label: isEs ? 'Explorar todas las empresas' : 'Explore all companies',
                    href: parksSectionHref
                },
                {
                    image: '../img/montenegro/montenegro1.jpeg',
                    position: 'center center',
                    label: isEs ? 'Ir a contacto comercial' : 'Go to commercial contact',
                    href: contactPath
                }
            ]
        },
        productos: {
            leftTitle: isEs ? 'Lineas de producto' : 'Product lines',
            leftItems: [
                createMegaMenuEntry('Toboganes y piezas acuaticas', 'Slides and aquatic parts', getLocalizedParkSummary(aquapark, currentLanguage), getLocalizedParkSummary(aquapark, currentLanguage), buildBrandDetailsUrl(aquapark.id)),
                createMegaMenuEntry('Parques y cascadas decorativas', 'Parks and decorative waterfalls', getLocalizedParkSummary(montenegro, currentLanguage), getLocalizedParkSummary(montenegro, currentLanguage), buildBrandDetailsUrl(montenegro.id)),
                createMegaMenuEntry('Piezas reforzadas y accesorios', 'Reinforced parts and accessories', getLocalizedParkSummary(fiberglass, currentLanguage), getLocalizedParkSummary(fiberglass, currentLanguage), buildBrandDetailsUrl(fiberglass.id)),
                createMegaMenuEntry('Esculturas, banos y modulos', 'Sculptures, bathrooms, and modules', getLocalizedParkSummary(fibrotek, currentLanguage), getLocalizedParkSummary(fibrotek, currentLanguage), buildBrandDetailsUrl(fibrotek.id)),
                createMegaMenuEntry('Tanques y soluciones utilitarias', 'Tanks and utility solutions', getLocalizedParkSummary(reforplaz, currentLanguage), getLocalizedParkSummary(reforplaz, currentLanguage), buildBrandDetailsUrl(reforplaz.id))
            ],
            centerTitle: isEs ? 'Colecciones' : 'Collections',
            centerItems: [
                createMegaMenuEntry('Linea acuatica', 'Aquatic line', 'Ver soluciones para piscinas, toboganes y experiencia familiar.', 'See solutions for pools, slides, and family experience.', buildBrandDetailsUrl(aquapark.id)),
                createMegaMenuEntry('Linea premium visual', 'Premium visual line', 'Abrir marcas con mejor presencia para proyectos de alto impacto.', 'Open brands with stronger presence for high-impact projects.', buildBrandDetailsUrl(montenegro.id)),
                createMegaMenuEntry('Linea tecnica', 'Technical line', 'Ir a marcas enfocadas en resistencia, produccion y piezas reforzadas.', 'Go to brands focused on resistance, production, and reinforced parts.', buildBrandDetailsUrl(fiberglass.id)),
                createMegaMenuEntry('Linea creativa y modular', 'Creative and modular line', 'Comparar propuestas practicas y piezas especiales.', 'Compare practical proposals and specialty pieces.', buildBrandDetailsUrl(fibrotek.id)),
                createMegaMenuEntry('Portafolio completo', 'Full portfolio', 'Recorrer todas las empresas desde la grilla principal.', 'Browse all companies from the main grid.', parksSectionHref)
            ],
            materialTitle: isEs ? 'Especialidades' : 'Specialties',
            materialItems: [
                createMegaMenuEntry('Resistencia al agua', 'Water resistance', 'Ideal para parques acuaticos y ambientes de humedad permanente.', 'Ideal for water parks and permanently humid environments.', buildBrandDetailsUrl(aquapark.id)),
                createMegaMenuEntry('Acabado de lujo', 'Luxury finish', 'Pensado para presentaciones premium, arquitectura y obras monumentales.', 'Designed for premium presentation, architecture, and monumental works.', buildBrandDetailsUrl(montenegro.id)),
                createMegaMenuEntry('Resistencia estructural', 'Structural resistance', 'Alternativa para piezas tecnicas, exteriores y uso prolongado.', 'An option for technical pieces, exteriors, and prolonged use.', buildBrandDetailsUrl(fiberglass.id)),
                createMegaMenuEntry('Flexibilidad creativa', 'Creative flexibility', 'Buena salida para piezas personalizadas y proyectos especiales.', 'A good fit for custom pieces and special projects.', buildBrandDetailsUrl(fibrotek.id)),
                createMegaMenuEntry('Versatilidad comercial', 'Commercial versatility', 'Soluciones funcionales y faciles de integrar en distintos proyectos.', 'Functional solutions that are easy to integrate into multiple projects.', buildBrandDetailsUrl(reforplaz.id))
            ],
            brandTitle: isEs ? 'Marcas' : 'Brands',
            visuals: [
                { image: '../img/aquapark/aquapark1.jpg', position: 'center center', label: isEs ? 'Ver linea acuapark' : 'See Aquapark line', href: buildBrandDetailsUrl(aquapark.id) },
                { image: '../img/reforplaz/reforplaz1.png', position: 'center top', label: isEs ? 'Abrir marca reforplaz' : 'Open Reforplaz brand', href: buildBrandDetailsUrl(reforplaz.id) }
            ]
        },
        marcas: {
            leftTitle: isEs ? 'Marcas destacadas' : 'Featured brands',
            leftItems: PARKS_DATA.map(park => createMegaMenuEntry(
                park.name,
                park.name,
                getLocalizedParkSummary(park, currentLanguage),
                getLocalizedParkSummary(park, currentLanguage),
                buildBrandDetailsUrl(park.id)
            )),
            centerTitle: isEs ? 'Posicionamiento' : 'Positioning',
            centerItems: [
                createMegaMenuEntry('Linea tecnica e industrial', 'Technical and industrial line', 'Entra a FIBERGLASS para revisar produccion, resistencia y soluciones reforzadas.', 'Open FIBERGLASS to review production, resistance, and reinforced solutions.', buildBrandDetailsUrl(fiberglass.id)),
                createMegaMenuEntry('Marca premium de acabados', 'Premium finish brand', 'MONTENEGRO destaca cuando importa la presencia visual del proyecto.', 'MONTENEGRO stands out when the project’s visual presence matters.', buildBrandDetailsUrl(montenegro.id)),
                createMegaMenuEntry('Especialidad acuatica', 'Aquatic specialty', 'AQUAPARK concentra parques, piscinas y piezas para espacios recreativos.', 'AQUAPARK focuses on parks, pools, and parts for recreational spaces.', buildBrandDetailsUrl(aquapark.id)),
                createMegaMenuEntry('Compuestos creativos', 'Creative composites', 'FIBROTEK mezcla practicidad, escultura y soluciones en fibra de vidrio.', 'FIBROTEK blends practicality, sculpture, and fiberglass solutions.', buildBrandDetailsUrl(fibrotek.id)),
                createMegaMenuEntry('Soluciones versatiles', 'Versatile solutions', 'REFORPLAZ funciona bien para piezas utilitarias y produccion continua.', 'REFORPLAZ works well for utility pieces and continuous production.', buildBrandDetailsUrl(reforplaz.id))
            ],
            materialTitle: isEs ? 'Valor comercial' : 'Commercial value',
            materialItems: [
                createMegaMenuEntry('Comparacion mas clara', 'Clearer comparison', 'Ir a la grilla completa para comparar varias marcas desde una sola vista.', 'Go to the full grid to compare multiple brands from a single view.', parksSectionHref),
                createMegaMenuEntry('Mas recordacion visual', 'Higher visual recall', 'Abrir una marca con galeria y video para revisar su presentacion completa.', 'Open a brand with gallery and video to review its full presentation.', buildBrandDetailsUrl(montenegro.id)),
                createMegaMenuEntry('Confianza inmediata', 'Immediate trust', 'Las fichas muestran especialidades, productos y vias de contacto directas.', 'The profiles show specialties, products, and direct contact routes.', parksSectionHref),
                createMegaMenuEntry('Navegacion mejor ordenada', 'Better organized navigation', 'Saltar directo a una marca o recorrer todas las empresas disponibles.', 'Jump directly to a brand or browse every available company.', parksSectionHref),
                createMegaMenuEntry('Mejor presentacion comercial', 'Stronger commercial presentation', 'Continuar al contacto cuando ya identificaste la marca correcta.', 'Continue to contact once you have identified the right brand.', contactPath)
            ],
            brandTitle: isEs ? 'Abrir marca' : 'Open brand',
            visuals: [
                { image: '../img/fibrotek/fibrotek3.jpeg', position: 'center center', label: isEs ? 'Abrir marcas recomendadas' : 'Open recommended brands', href: buildBrandDetailsUrl(fibrotek.id) },
                { image: '../img/montenegro/montenegro5.png', position: 'center center', label: isEs ? 'Comparar empresas' : 'Compare companies', href: parksSectionHref }
            ]
        },
        soluciones: {
            leftTitle: isEs ? 'Soluciones clave' : 'Key solutions',
            leftItems: [
                createMegaMenuEntry('Diseno y fabricacion', 'Design and manufacturing', 'Revisa marcas con capacidad para desarrollar piezas y estructuras a medida.', 'Review brands with capacity to develop custom pieces and structures.', parksSectionHref),
                createMegaMenuEntry('Cotizacion y consulta tecnica', 'Quotation and technical consulting', 'Ir al contacto o abrir una ficha para revisar mejor la propuesta.', 'Go to contact or open a profile to review the proposal better.', contactPath),
                createMegaMenuEntry('Produccion especial', 'Special production', 'FIBERGLASS y FIBROTEK pueden orientar propuestas tecnicas y personalizadas.', 'FIBERGLASS and FIBROTEK can guide technical and custom proposals.', buildBrandDetailsUrl(fiberglass.id)),
                createMegaMenuEntry('Acabado y personalizacion', 'Finishing and customization', 'MONTENEGRO destaca en proyectos donde la presencia visual pesa mas.', 'MONTENEGRO stands out in projects where visual presence matters more.', buildBrandDetailsUrl(montenegro.id)),
                createMegaMenuEntry('Proyectos comerciales', 'Commercial projects', 'AQUAPARK y REFORPLAZ cubren escenarios de uso intensivo y propuestas funcionales.', 'AQUAPARK and REFORPLAZ cover intensive-use scenarios and functional proposals.', buildBrandDetailsUrl(aquapark.id))
            ],
            centerTitle: isEs ? 'Beneficios' : 'Benefits',
            centerItems: [
                createMegaMenuEntry('Mayor durabilidad', 'Greater durability', 'Fichas con enfoque en resistencia, materiales y vida util del producto.', 'Profiles focused on resistance, materials, and product lifespan.', buildBrandDetailsUrl(fiberglass.id)),
                createMegaMenuEntry('Resistencia al agua y al exterior', 'Water and exterior resistance', 'Explora lineas para piscinas, humedad y uso permanente.', 'Explore lines for pools, humidity, and permanent use.', buildBrandDetailsUrl(aquapark.id)),
                createMegaMenuEntry('Flexibilidad de formas', 'Shape flexibility', 'Ideal para piezas creativas, esculturas y soluciones personalizadas.', 'Ideal for creative parts, sculptures, and custom solutions.', buildBrandDetailsUrl(fibrotek.id)),
                createMegaMenuEntry('Imagen premium', 'Premium image', 'Ve propuestas donde el acabado visual tiene un peso comercial mayor.', 'See proposals where visual finish carries greater commercial weight.', buildBrandDetailsUrl(montenegro.id)),
                createMegaMenuEntry('Portafolio mas ordenado', 'Better organized portfolio', 'Recorre marcas, compara productos y avanza al contacto desde una sola pagina.', 'Browse brands, compare products, and move to contact from a single page.', parksSectionHref)
            ],
            materialTitle: isEs ? 'Para el cliente' : 'For the client',
            materialItems: [
                createMegaMenuEntry('Mas facil de elegir', 'Easier to choose', 'Entrar por tipo de marca y luego abrir la ficha mas cercana a tu necesidad.', 'Enter by brand type and then open the profile closest to your need.', parksSectionHref),
                createMegaMenuEntry('Mas facil de comparar', 'Easier to compare', 'La pagina reune empresas con productos, experiencia y presentacion visual.', 'The page gathers companies with products, experience, and visual presentation.', parksSectionHref),
                createMegaMenuEntry('Mas confianza al navegar', 'More trust while browsing', 'Cada marca incluye descripcion, galeria, video y canales de contacto.', 'Each brand includes description, gallery, video, and contact channels.', buildBrandDetailsUrl(aquapark.id)),
                createMegaMenuEntry('Acceso rapido a marcas', 'Fast access to brands', 'Ir directo a la marca deseada sin perderse en el portafolio.', 'Go directly to the desired brand without getting lost in the portfolio.', buildBrandDetailsUrl(montenegro.id)),
                createMegaMenuEntry('Presentacion visual superior', 'Superior visual presentation', 'Seguir al detalle de empresa o ir a contacto comercial cuando estes listo.', 'Continue to company detail or go to commercial contact when ready.', contactPath)
            ],
            brandTitle: isEs ? 'Marcas' : 'Brands',
            visuals: [
                { image: '../img/fiberglass/fiberglass6.jpeg', position: 'center center', label: isEs ? 'Soluciones por proyecto' : 'Solutions by project', href: parksSectionHref },
                { image: '../img/aquapark/aquapark4.png', position: 'center center', label: isEs ? 'Explorar mas opciones' : 'Explore more options', href: parksSectionHref }
            ]
        }
    };
}

function renderProjectsMegaMenu(activeTab = 'proyectos') {
    const panel = document.getElementById('projectsMegaPanel');
    if (!panel) return;

    const currentLanguage = state.currentLanguage || 'es';
    const isEs = currentLanguage === 'es';
    const configMap = getProjectsMegaConfig(currentLanguage);
    const config = configMap[activeTab] || configMap.proyectos;
    const sortedBrands = [...PARKS_DATA].sort((a, b) => a.name.localeCompare(b.name));

    document.querySelectorAll('.projects-mega-tab').forEach(tab => {
        tab.classList.toggle('active', tab.dataset.projectTab === activeTab);
    });

    panel.innerHTML = `
        <div class="projects-mega-hero-visuals">
            ${config.visuals.map((visual, index) => `
                <a class="projects-mega-visual-card projects-mega-visual-card-hero" href="${visual.href}" data-project-visual-index="${index}" style="--mega-visual-position: ${visual.position || 'center center'};">
                    <img src="${visual.image}" alt="${visual.label}" loading="lazy">
                    <span class="projects-mega-visual-label">${visual.label}</span>
                </a>
            `).join('')}
        </div>

        <div class="projects-mega-grid">
            <div class="projects-mega-column">
                <div class="projects-mega-column-title">${config.leftTitle}</div>
                <div class="projects-mega-menu-list">
                    ${config.leftItems.map((item, index) => `
                        <a class="projects-mega-entry projects-mega-link ${index === 0 ? 'is-active' : ''}" href="${item.href}">
                            <span class="projects-mega-entry-label">${isEs ? item.labelEs : item.labelEn}</span>
                            <span class="projects-mega-entry-copy">${getCompactMegaCopy(isEs ? item.descriptionEs : item.descriptionEn, 58)}</span>
                        </a>
                    `).join('')}
                </div>
            </div>

            <div class="projects-mega-column">
                <div class="projects-mega-column-title">${config.centerTitle}</div>
                <div class="projects-mega-feature-list">
                    ${config.centerItems.map(item => `
                        <a class="projects-mega-entry projects-mega-feature-item" href="${item.href}">
                            <span class="projects-mega-entry-label">${isEs ? item.labelEs : item.labelEn}</span>
                            <span class="projects-mega-entry-copy">${getCompactMegaCopy(isEs ? item.descriptionEs : item.descriptionEn, 54)}</span>
                        </a>
                    `).join('')}
                </div>
            </div>

            <div class="projects-mega-column">
                <div class="projects-mega-subsection">
                    <div class="projects-mega-column-title">${config.materialTitle}</div>
                    <div class="projects-mega-feature-list">
                        ${config.materialItems.map(item => `
                            <a class="projects-mega-entry projects-mega-feature-item" href="${item.href}">
                                <span class="projects-mega-entry-label">${isEs ? item.labelEs : item.labelEn}</span>
                                <span class="projects-mega-entry-copy">${getCompactMegaCopy(isEs ? item.descriptionEs : item.descriptionEn, 54)}</span>
                            </a>
                        `).join('')}
                    </div>
                </div>
            </div>

            <div class="projects-mega-column projects-mega-column-rich">
                <div class="projects-mega-subsection">
                    <div class="projects-mega-column-title">${config.brandTitle}</div>
                    <div class="projects-mega-brand-list">
                        ${sortedBrands.map(park => `
                            <a class="projects-mega-brand-item" href="${buildBrandDetailsUrl(park.id)}">
                                <span>${park.name}</span>
                                <span>${getCompactMegaCopy(getMegaBrandMeta(park, currentLanguage), 46)}</span>
                            </a>
                        `).join('')}
                    </div>
                </div>
            </div>
        </div>
    `;
}

function initProjectsMegaMenu() {
    const panel = document.getElementById('projectsMegaPanel');
    if (!panel) return;

    document.querySelectorAll('.projects-mega-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            renderProjectsMegaMenu(tab.dataset.projectTab);
        });
    });

    renderProjectsMegaMenu('proyectos');
}

function renderHomeBrandSignals(parks) {
    const container = document.getElementById('homeBrandSignals');
    if (!container) return;

    const currentLanguage = state.currentLanguage || 'es';
    const featured = getFeaturedParks(parks, HOME_PREVIEW_LIMIT);

    container.innerHTML = featured.map((park, index) => {
        const brandColor = getBrandColor(index);
        const { typeLabel, products, stats } = getLocalizedParkContent(park, currentLanguage);

        return `
            <button class="brand-signal-chip" type="button" data-park-id="${park.id}" style="--chip-primary: ${brandColor.primary}; --chip-secondary: ${brandColor.secondary};">
                <span class="brand-signal-chip-name">${park.name}</span>
                <span class="brand-signal-chip-meta">${typeLabel} · ${products.slice(0, 2).join(' · ')}</span>
            </button>
        `;
    }).join('');

    container.querySelectorAll('.brand-signal-chip').forEach(button => {
        button.addEventListener('click', () => showParkDetails(parseInt(button.dataset.parkId, 10)));
    });
}

function renderBrandSubdivisions(parks) {
    const grid = document.getElementById('brandSubdivisionGrid');
    if (!grid) return;

    const currentLanguage = state.currentLanguage || 'es';
    const subdivisionConfig = [
        {
            type: 'extreme',
            tagEs: 'Soluciones tecnicas',
            tagEn: 'Technical solutions',
            titleEs: 'Linea industrial',
            titleEn: 'High-performance brands',
            bodyEs: 'Marcas enfocadas en piezas estructurales, fabricacion tecnica y soluciones de alta resistencia.',
            bodyEn: 'Designed for industrial projects, demanding infrastructure, and applications where durability leads.',
            bulletsEs: ['Paneles y cubiertas', 'Tanques y perfiles', 'Piezas especiales a medida'],
            bulletsEn: ['Higher structural resistance', 'Industrial and technical profile', 'Strong fit for special projects']
        },
        {
            type: 'luxury',
            tagEs: 'Linea premium',
            tagEn: 'Premium line',
            titleEs: 'Linea de acabado',
            titleEn: 'Image and finish brands',
            bodyEs: 'Marcas orientadas a fachadas, piezas decorativas, baños premium y propuestas con mejor presencia visual.',
            bodyEn: 'Focused on presentation, finish quality, and perceived value for proposals that need a more aspirational showcase.',
            bulletsEs: ['Fachadas decorativas', 'Bañeras y modulos premium', 'Detalles arquitectonicos'],
            bulletsEn: ['More refined finishes', 'Stronger visual presence', 'Ideal for differentiated proposals']
        },
        {
            type: 'family',
            tagEs: 'Linea versatil',
            tagEn: 'Versatile line',
            titleEs: 'Linea acuatica y practica',
            titleEn: 'Practical and aquatic brands',
            bodyEs: 'Marcas pensadas para piscinas, toboganes, tanques, modulos sanitarios y soluciones de uso continuo.',
            bodyEn: 'Balanced options for aquatic spaces, continuous use, and projects that require clarity, controlled cost, and trust.',
            bulletsEs: ['Piscinas y toboganes', 'Tanques y cubiertas', 'Modulos sanitarios'],
            bulletsEn: ['Versatile and reliable use', 'Clearer commercial reading', 'Easy to compare and explain']
        }
    ];

    grid.innerHTML = subdivisionConfig.map((section, index) => {
        const typeBrands = parks.filter(park => park.type === section.type).slice(0, 2);
        const brandColor = getBrandColor(index);
        const bullets = currentLanguage === 'es' ? section.bulletsEs : section.bulletsEn;
        const tag = currentLanguage === 'es' ? section.tagEs : section.tagEn;
        const title = currentLanguage === 'es' ? section.titleEs : section.titleEn;
        const body = currentLanguage === 'es' ? section.bodyEs : section.bodyEn;
        const statsLabel = `${typeBrands.length} ${currentLanguage === 'es' ? 'marcas visibles' : 'visible brands'}`;

        return `
            <article class="subdivision-card" style="--subdivision-primary: ${brandColor.primary}; --subdivision-secondary: ${brandColor.secondary}; --subdivision-bg: ${brandColor.bg};">
                <div class="subdivision-card-top">
                    <span class="subdivision-tag">${tag}</span>
                    <span class="subdivision-count">${statsLabel}</span>
                </div>
                <h3 class="subdivision-title">${title}</h3>
                <p class="subdivision-body">${body}</p>
                <ul class="subdivision-points">
                    ${bullets.map(point => `<li>${point}</li>`).join('')}
                </ul>
                <div class="subdivision-brand-list">
                    ${typeBrands.map(park => {
        const { products } = getLocalizedParkContent(park, currentLanguage);
        return `
                            <button class="subdivision-brand-pill" type="button" data-park-id="${park.id}">
                                <span class="subdivision-brand-name">${park.name}</span>
                                <span class="subdivision-brand-meta">${products.slice(0, 1).join('')}</span>
                            </button>
                        `;
                    }).join('')}
                </div>
            </article>
        `;
    }).join('');

    grid.querySelectorAll('.subdivision-brand-pill').forEach(button => {
        button.addEventListener('click', () => showParkDetails(parseInt(button.dataset.parkId, 10)));
    });
}

function getFeaturedParks(parks, limit) {
    return parks
        .slice()
        .sort((a, b) => b.rating - a.rating)
        .slice(0, limit);
}

function createBrandCardMarkup(park, index, currentLanguage, options = {}) {
    const { variant = 'compact', showGallery = false } = options;
    const { description, highlights, products, stats, location, typeLabel } = getLocalizedParkContent(park, currentLanguage);
    const stars = getRatingStars(park.rating);
    const config = getTypeConfig(park.type);
    const brandColor = getBrandColor(index);
    const galleryMarkup = showGallery ? createBrandGalleryMarkup(park, variant) : '';
    const externalLinksMarkup = createBrandExternalLinksMarkup(park, `brand-external-links-${variant}`);

    if (variant === 'preview') {
        return `
            <article class="featured-brand-card-preview" id="park-card-${park.id}" data-park-id="${park.id}" style="--brand-primary: ${brandColor.primary}; --brand-secondary: ${brandColor.secondary}; --brand-accent: ${brandColor.accent}; --brand-bg: ${brandColor.bg}; --brand-soft: ${brandColor.soft}; --brand-border: ${brandColor.border}; --brand-shadow: ${brandColor.shadow};">
                <div class="preview-card-grid">
                    <div class="preview-image-panel">
                        ${renderBrandMedia(park, 'featured-brand-image-preview', { preferImage: true })}
                        <div class="preview-badge" style="background: linear-gradient(135deg, ${brandColor.primary}, ${brandColor.secondary});">
                            <span>${typeLabel}</span>
                        </div>
                        <div class="preview-rating">
                            <span>${stars}</span>
                        </div>
                    </div>
                    <div class="featured-brand-content-preview">
                        <div class="preview-header-row">
                            <h3 class="featured-brand-name">${park.name}</h3>
                            <span class="preview-location">📍 ${location}</span>
                        </div>
                        <p class="featured-brand-description preview-description">${description}</p>
                        ${galleryMarkup}
                        <div class="preview-offer-title">${currentLanguage === 'es' ? 'Productos que ofrece' : 'Products offered'}</div>
                        <ul class="featured-brand-preview-features">
                            ${(products.length ? products : highlights).slice(0, 3).map(feature => `<li>${feature}</li>`).join('')}
                        </ul>
                        <div class="featured-brand-actions featured-brand-actions-preview">
                            <button class="btn btn-outline view-details-btn-preview" data-park-id="${park.id}">
                                <span class="btn-icon">👁️</span>
                                ${translateText('View Details')}
                            </button>
                        </div>
                    </div>
                </div>
            </article>
        `;
    }

    if (variant === 'showcase') {
        return `
            <article class="parks-showcase-card" id="park-card-${park.id}" data-park-id="${park.id}" data-type="${park.type}" style="--brand-primary: ${brandColor.primary}; --brand-secondary: ${brandColor.secondary}; --brand-accent: ${brandColor.accent}; --brand-bg: ${brandColor.bg}; --brand-soft: ${brandColor.soft}; --brand-border: ${brandColor.border}; --brand-shadow: ${brandColor.shadow};">
                <div class="parks-showcase-media">
                    ${renderBrandMedia(park, 'parks-showcase-image')}
                    <div class="projects-media-copy">
                        <span class="projects-media-brand">${park.name}</span>
                        <span class="projects-media-label">${typeLabel}</span>
                    </div>
                    <div class="parks-showcase-overlay">
                        <div class="parks-showcase-chip" style="background: ${config.bgColor}; color: ${config.color};">
                            ${config.icon} ${typeLabel}
                        </div>
                        <div class="parks-showcase-metrics">
                            <span>${stars} ${park.rating.toFixed(1)}</span>
                            <span>${stats.experience} ${translateText('Years')}</span>
                            <span>${stats.countries} ${translateText('Countries')}</span>
                        </div>
                    </div>
                </div>

                ${galleryMarkup}

                <div class="parks-showcase-content">
                    <div class="parks-showcase-main">
                        <div class="parks-showcase-header">
                            <h3 class="parks-showcase-name">${park.name}</h3>
                            <div class="parks-showcase-location">📍 ${location}</div>
                        </div>

                        <p class="parks-showcase-description">${description}</p>

                        <div class="parks-showcase-highlights">
                            ${(products.length ? products : highlights).slice(0, 3).map((highlight, highlightIndex) => {
                                const icons = ['🔧', '⚙️', '🛠️', '🏭', '🔬'];
                                return `
                                    <div class="parks-showcase-highlight">
                                        <span class="parks-showcase-highlight-icon">${icons[highlightIndex % icons.length]}</span>
                                        <span>${highlight}</span>
                                    </div>
                                `;
                            }).join('')}
                        </div>
                        ${externalLinksMarkup}
                    </div>

                    <aside class="parks-showcase-side">
                        <div class="parks-showcase-stat-card">
                            <span class="parks-showcase-stat-value">${stats.projects}</span>
                            <span class="parks-showcase-stat-label">${translateText('Projects')}</span>
                        </div>
                        <div class="parks-showcase-stat-card">
                            <span class="parks-showcase-stat-value">${stats.certifications}</span>
                            <span class="parks-showcase-stat-label">${translateText('Certifications')}</span>
                        </div>
                        <button class="btn btn-outline view-details-btn" data-park-id="${park.id}">
                            <span class="btn-icon">👁️</span>
                            ${translateText('View Details')}
                        </button>
                        <button class="btn btn-primary contact-btn" data-park-id="${park.id}">
                            <span class="btn-icon">📞</span>
                            ${translateText('Contact Now')}
                        </button>
                    </aside>
                </div>
            </article>
        `;
    }

    return `
        <article class="featured-brand-card" id="park-card-${park.id}" data-park-id="${park.id}" data-type="${park.type}" style="--brand-primary: ${brandColor.primary}; --brand-secondary: ${brandColor.secondary}; --brand-accent: ${brandColor.accent}; --brand-bg: ${brandColor.bg}; --brand-soft: ${brandColor.soft}; --brand-border: ${brandColor.border}; --brand-shadow: ${brandColor.shadow};">
            <div class="featured-brand-visual-block">
                <div class="featured-brand-image-container">
                    ${renderBrandMedia(park, 'featured-brand-image')}
                    <div class="projects-media-copy">
                        <span class="projects-media-brand">${park.name}</span>
                        <span class="projects-media-label">${typeLabel}</span>
                    </div>
                    <div class="featured-brand-overlay">
                        <div class="featured-brand-overlay-content">
                            <div class="featured-brand-type-badge" style="background: ${config.bgColor}; color: ${config.color};">
                                ${config.icon} ${typeLabel}
                            </div>
                            <div class="featured-brand-rating-stars">${stars} ${park.rating.toFixed(1)}</div>
                            <div class="featured-brand-quick-stats">
                                <div class="quick-stat">
                                    <span class="quick-stat-icon">🏆</span>
                                    <span class="quick-stat-value">${stats.experience}</span>
                                    <span class="quick-stat-label">${translateText('Years')}</span>
                                </div>
                                <div class="quick-stat">
                                    <span class="quick-stat-icon">🌍</span>
                                    <span class="quick-stat-value">${stats.countries}</span>
                                    <span class="quick-stat-label">${translateText('Countries')}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                ${galleryMarkup}
            </div>

            <div class="featured-brand-content">
                <div class="featured-brand-header">
                    <h3 class="featured-brand-name">${park.name}</h3>
                    <div class="featured-brand-location">
                        <span class="location-icon">📍</span>
                        ${location}
                    </div>
                </div>

                <p class="featured-brand-description">${description}</p>

                <div class="featured-brand-highlights">
                    ${(products.length ? products : highlights).slice(0, 2).map((highlight, highlightIndex) => {
                        const icons = ['🔧', '⚙️', '🛠️', '🏭', '🔬'];
                        return `
                            <div class="highlight-item">
                                <span class="highlight-icon">${icons[highlightIndex % icons.length]}</span>
                                <span class="highlight-text">${highlight}</span>
                            </div>
                        `;
                    }).join('')}
                </div>

                <div class="featured-brand-stats-grid">
                    <div class="stat-item">
                        <div class="stat-icon">📊</div>
                        <div class="stat-value">${stats.projects}</div>
                        <div class="stat-label">${translateText('Projects')}</div>
                    </div>
                    <div class="stat-item">
                        <div class="stat-icon">🏅</div>
                        <div class="stat-value">${stats.certifications}</div>
                        <div class="stat-label">${translateText('Certifications')}</div>
                    </div>
                </div>

                ${externalLinksMarkup}

                <div class="featured-brand-actions">
                    <button class="btn btn-outline view-details-btn" data-park-id="${park.id}">
                        <span class="btn-icon">👁️</span>
                        ${translateText('View Details')}
                    </button>
                    <button class="btn btn-primary contact-btn" data-park-id="${park.id}">
                        <span class="btn-icon">📞</span>
                        ${translateText('Contact Now')}
                    </button>
                </div>
            </div>
        </article>
    `;
}

function renderBrandMedia(park, className, options = {}) {
    const { preferImage = false, videoPreload = 'metadata' } = options;

    if (park.video && !preferImage) {
        return `
            <video class="${className}" autoplay muted loop playsinline preload="${videoPreload}">
                <source src="${resolveAssetPath(park.video)}" type="video/mp4">
            </video>
        `;
    }

    return `<img src="${resolveAssetPath(park.image)}" alt="${park.name}" class="${className}" loading="lazy" decoding="async">`;
}

function createBrandGalleryMarkup(park, variant = 'full') {
    const galleryImages = getPreferredGalleryImages(park);
    if (galleryImages.length === 0) {
        return '';
    }

    const visibleImages = galleryImages;
    const extraImages = 0;
    const title = variant === 'full' ? 'Más fotos de la marca' : 'Galería';

    return `
        <div class="brand-gallery-panel brand-gallery-panel-${variant}">
            <div class="brand-gallery-title">${title}</div>
            <div class="brand-gallery-strip">
            ${visibleImages.map((image, imageIndex) => `
                <button class="brand-gallery-thumb" type="button" onclick="openParkGallery(${park.id}, ${imageIndex})" aria-label="Ver imagen ${imageIndex + 1} de ${park.name}">
                    <img src="${resolveAssetPath(image)}" alt="${park.name} imagen ${imageIndex + 1}" loading="lazy">
                    ${extraImages > 0 && imageIndex === visibleImages.length - 1 ? `<span class="brand-gallery-more">+${extraImages}</span>` : ''}
                </button>
            `).join('')}
            </div>
        </div>
    `;
}

function getUniqueGalleryImages(park) {
    const images = COMPLETE_GALLERIES[park.id] || (Array.isArray(park.gallery) ? park.gallery : []);
    const uniqueImages = [];

    if (park.image) {
        uniqueImages.push(park.image);
    }

    images.forEach((image) => {
        if (image && !uniqueImages.includes(image)) {
            uniqueImages.push(image);
        }
    });

    return uniqueImages;
}

function getPreferredGalleryImages(park) {
    const curatedGallery = COMPLETE_GALLERIES[park.id];
    if (Array.isArray(curatedGallery) && curatedGallery.length) {
        return curatedGallery.filter(Boolean);
    }

    const galleryImages = getUniqueGalleryImages(park);
    return galleryImages.filter(image => image && image !== park.image);
}

function getLocalizedParkContent(park, currentLanguage) {
    return {
        description: currentLanguage === 'es' && park.descriptionEs ? park.descriptionEs : park.description,
        highlights: currentLanguage === 'es' && park.highlightsEs ? park.highlightsEs : park.highlights,
        products: currentLanguage === 'es' && park.productsEs ? park.productsEs : (park.products || []),
        stats: currentLanguage === 'es' && park.statsEs ? park.statsEs : park.stats,
        location: currentLanguage === 'es' && park.locationEs ? park.locationEs : park.location,
        typeLabel: translateText(park.type.charAt(0).toUpperCase() + park.type.slice(1))
    };
}

function getBrandExternalLinks(park) {
    if (!park || !park.contactLinks) {
        return [];
    }

    const orderedLinks = [
        {
            key: 'website',
            label: translateText('Visit Website'),
            icon: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm6.93 9h-3.1a15.7 15.7 0 0 0-1.38-5.03A8.03 8.03 0 0 1 18.93 11ZM12 4.04c.8.98 1.86 3.28 2.25 6.96h-4.5C10.14 7.32 11.2 5.02 12 4.04ZM9.55 5.97A15.7 15.7 0 0 0 8.17 11h-3.1a8.03 8.03 0 0 1 4.48-5.03ZM5.07 13h3.1a15.7 15.7 0 0 0 1.38 5.03A8.03 8.03 0 0 1 5.07 13ZM12 19.96c-.8-.98-1.86-3.28-2.25-6.96h4.5c-.39 3.68-1.45 5.98-2.25 6.96Zm2.45-1.93A15.7 15.7 0 0 0 15.83 13h3.1a8.03 8.03 0 0 1-4.48 5.03Z"/></svg>'
        },
        {
            key: 'whatsapp',
            label: translateText('WhatsApp'),
            icon: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19.05 4.94A9.86 9.86 0 0 0 12.02 2a9.97 9.97 0 0 0-8.63 14.95L2 22l5.18-1.35A9.97 9.97 0 1 0 19.05 4.94ZM12.02 20a8 8 0 0 1-4.08-1.12l-.29-.17-3.07.8.82-3-.19-.31A8 8 0 1 1 12.02 20Zm4.39-5.99c-.24-.12-1.43-.7-1.65-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1.01-.37-1.93-1.18-.71-.63-1.2-1.41-1.34-1.65-.14-.24-.02-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.29-.74-1.77-.19-.46-.39-.39-.54-.4h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 1.99s.86 2.3.98 2.46c.12.16 1.69 2.58 4.1 3.61.57.25 1.02.39 1.37.5.58.18 1.11.15 1.53.09.47-.07 1.43-.58 1.63-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28Z"/></svg>'
        },
        {
            key: 'facebook',
            label: translateText('Facebook'),
            icon: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M13.5 22v-8.2h2.77l.42-3.2H13.5V8.56c0-.93.27-1.56 1.6-1.56h1.71V4.14c-.3-.04-1.3-.14-2.48-.14-2.46 0-4.14 1.5-4.14 4.25v2.35H7.4v3.2h2.79V22h3.31Z"/></svg>'
        },
        {
            key: 'email',
            label: translateText('Email'),
            icon: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 5h18a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm16.8 2H4.2L12 12.6 19.8 7Zm.2 2.48-7.43 5.34a1 1 0 0 1-1.14 0L4 9.48V17h16V9.48Z"/></svg>'
        }
    ];

    return orderedLinks.map(link => ({
        ...link,
        href: park.contactLinks[link.key] || '',
        available: Boolean(park.contactLinks[link.key])
    }));
}

function createBrandExternalLinksMarkup(park, extraClass = '') {
    const links = getBrandExternalLinks(park);
    if (links.length === 0) {
        return '';
    }

    return `
        <div class="brand-external-links ${extraClass}">
            <div class="brand-external-links-title">${translateText('Official Links')}</div>
            <div class="brand-external-links-list">
                ${links.map(link => `
                    ${link.available ? `
                        <a class="brand-external-link brand-external-link--${link.key}" href="${link.href}" target="_blank" rel="noopener noreferrer" aria-label="${link.label}" title="${link.label}">
                            <span class="brand-external-link-icon" aria-hidden="true">${link.icon}</span>
                            <span class="brand-external-link-label">${link.label}</span>
                        </a>
                    ` : `
                        <span class="brand-external-link brand-external-link--${link.key} is-disabled" aria-disabled="true" title="${link.label} - ${translateText('Not Available')}">
                            <span class="brand-external-link-icon" aria-hidden="true">${link.icon}</span>
                            <span class="brand-external-link-label">${link.label}</span>
                            <span class="brand-external-link-status">${translateText('Not Available')}</span>
                        </span>
                    `}
                `).join('')}
            </div>
        </div>
    `;
}

function getBrandDetailProfile(park, currentLanguage) {
    const profile = BRAND_DETAIL_CONTENT[park.id] || {};

    return {
        tagline: currentLanguage === 'es' ? (profile.taglineEs || park.descriptionEs || park.description) : (profile.taglineEn || park.description),
        category: currentLanguage === 'es' ? (profile.categoryEs || 'Categoria') : (profile.categoryEn || 'Category'),
        founded: profile.founded || 'N/A',
        origin: currentLanguage === 'es' ? (profile.originEs || '') : (profile.originEn || ''),
        mission: currentLanguage === 'es' ? (profile.missionEs || '') : (profile.missionEn || ''),
        vision: currentLanguage === 'es' ? (profile.visionEs || '') : (profile.visionEn || ''),
        differentiator: currentLanguage === 'es' ? (profile.differentiatorEs || '') : (profile.differentiatorEn || ''),
        primaryCtaLabel: currentLanguage === 'es' ? (profile.primaryCtaEs || 'Explorar sitio') : (profile.primaryCtaEn || 'Explore site'),
        primaryCtaType: profile.primaryCtaType || 'website',
        mapUrl: profile.mapUrl || ''
    };
}

function getBrandPrimaryCtaHref(park, profile) {
    if (!park || !park.contactLinks) {
        return '';
    }

    return park.contactLinks[profile.primaryCtaType]
        || park.contactLinks.website
        || park.contactLinks.facebook
        || park.contactLinks.whatsapp
        || '';
}

function getBrandDirectContactHref(park, currentLanguage = 'es') {
    if (!park || !park.contactLinks) {
        return '';
    }

    const links = park.contactLinks;
    const isEs = currentLanguage === 'es';

    if (typeof links.whatsapp === 'string' && links.whatsapp) {
        const message = isEs
            ? `Hola, quiero comunicarme con ${park.name}. ¿Podrían darme más información, por favor?`
            : `Hello, I want to contact ${park.name}. Could you share more information, please?`;
        const separator = links.whatsapp.includes('?') ? '&' : '?';
        return `${links.whatsapp}${separator}text=${encodeURIComponent(message)}`;
    }

    return links.website || links.facebook || links.email || '';
}

function getBrandContactItems(park, currentLanguage, profile) {
    const links = park.contactLinks || {};
    const isEs = currentLanguage === 'es';
    const emailValue = typeof links.email === 'string' ? links.email.replace(/^mailto:/i, '') : '';
    const whatsappValue = typeof links.whatsapp === 'string' ? links.whatsapp.replace('https://wa.me/', '+') : '';

    return [
        {
            label: isEs ? 'Redes sociales' : 'Social media',
            value: links.facebook ? 'Facebook' : (isEs ? 'No disponible' : 'Not available'),
            href: links.facebook || ''
        },
        {
            label: isEs ? 'Sitio web' : 'Website',
            value: links.website ? (isEs ? 'Visitar sitio oficial' : 'Visit official website') : (isEs ? 'No disponible' : 'Not available'),
            href: links.website || ''
        },
        {
            label: 'Email / WhatsApp',
            value: [emailValue, whatsappValue].filter(Boolean).join(' | ') || (isEs ? 'No disponible' : 'Not available'),
            href: links.whatsapp || links.email || ''
        },
        {
            label: isEs ? 'Ubicacion' : 'Location',
            value: currentLanguage === 'es' && park.locationEs ? park.locationEs : park.location,
            href: profile.mapUrl || ''
        }
    ];
}

function createBrandContactInfoMarkup(park, currentLanguage, profile) {
    const contactItems = getBrandContactItems(park, currentLanguage, profile);

    return `
        <div class="brand-contact-grid">
            ${contactItems.map(item => `
                <div class="brand-contact-card">
                    <span class="brand-contact-label">${item.label}</span>
                    ${item.href ? `
                        <a class="brand-contact-value" href="${item.href}" target="_blank" rel="noopener noreferrer">${item.value}</a>
                    ` : `
                        <span class="brand-contact-value">${item.value}</span>
                    `}
                </div>
            `).join('')}
        </div>
    `;
}

function getBrandColor(index) {
    return BRAND_COLORS[index % BRAND_COLORS.length];
}

function getBrandColorForPark(park) {
    const parkIndex = PARKS_DATA.findIndex(item => item.id === park.id);
    return getBrandColor(Math.max(parkIndex, 0));
}

function formatWhatsappDisplay(whatsappUrl) {
    if (typeof whatsappUrl !== 'string' || !whatsappUrl) {
        return '';
    }

    const digits = whatsappUrl.replace('https://wa.me/', '');
    return digits ? `+${digits}` : '';
}

function buildProductWhatsAppHref(park, product, currentLanguage) {
    const whatsappBase = park?.contactLinks?.whatsapp;
    if (typeof whatsappBase !== 'string' || !whatsappBase) {
        return '';
    }

    const isEs = currentLanguage === 'es';
    const message = isEs
        ? `Hola, me interesa ${product} de ${park.name}. ¿Podrían darme más información, por favor?`
        : `Hello, I'm interested in ${product} from ${park.name}. Could you share more information, please?`;

    const separator = whatsappBase.includes('?') ? '&' : '?';
    return `${whatsappBase}${separator}text=${encodeURIComponent(message)}`;
}

function createContactBrandCardMarkup(park, currentLanguage) {
    const isEs = currentLanguage === 'es';
    const brandColor = getBrandColorForPark(park);
    const links = park.contactLinks || {};
    const profile = BRAND_DETAIL_CONTENT[park.id] || {};
    const emailValue = typeof links.email === 'string' ? links.email.replace(/^mailto:/i, '') : (isEs ? 'No disponible' : 'Not available');
    const whatsappValue = formatWhatsappDisplay(links.whatsapp) || (isEs ? 'No disponible' : 'Not available');
    const websiteValue = links.website ? links.website.replace(/^https?:\/\//i, '') : (isEs ? 'No disponible' : 'Not available');
    const locationValue = currentLanguage === 'es' && park.locationEs ? park.locationEs : park.location;

    return `
        <article class="contact-brand-card" style="--contact-brand-primary: ${brandColor.primary}; --contact-brand-secondary: ${brandColor.secondary}; --contact-brand-accent: ${brandColor.accent}; --contact-brand-soft: ${brandColor.soft}; --contact-brand-border: ${brandColor.border}; --contact-brand-shadow: ${brandColor.shadow};">
            <div class="contact-brand-card-top">
                <h3>${park.name}</h3>
                <span class="contact-brand-line"></span>
            </div>
            <div class="contact-brand-card-body">
                <div class="contact-brand-detail">
                    <span class="contact-brand-detail-label">${isEs ? 'Email' : 'Email'}</span>
                    ${links.email ? `<a href="${links.email}">${emailValue}</a>` : `<span>${emailValue}</span>`}
                </div>
                <div class="contact-brand-detail">
                    <span class="contact-brand-detail-label">${isEs ? 'WhatsApp' : 'WhatsApp'}</span>
                    ${links.whatsapp ? `<a href="${links.whatsapp}" target="_blank" rel="noopener noreferrer">${whatsappValue}</a>` : `<span>${whatsappValue}</span>`}
                </div>
                <div class="contact-brand-detail">
                    <span class="contact-brand-detail-label">${isEs ? 'Dirección' : 'Location'}</span>
                    ${profile.mapUrl ? `<a href="${profile.mapUrl}" target="_blank" rel="noopener noreferrer">${locationValue || (isEs ? 'No disponible' : 'Not available')}</a>` : `<span>${locationValue || (isEs ? 'No disponible' : 'Not available')}</span>`}
                </div>
                <div class="contact-brand-detail">
                    <span class="contact-brand-detail-label">${isEs ? 'Sitio web' : 'Website'}</span>
                    ${links.website ? `<a href="${links.website}" target="_blank" rel="noopener noreferrer">${websiteValue}</a>` : `<span>${websiteValue}</span>`}
                </div>
            </div>
            <div class="contact-brand-card-actions">
                ${links.whatsapp ? `<a class="contact-brand-action" href="${links.whatsapp}" target="_blank" rel="noopener noreferrer">${isEs ? 'Abrir WhatsApp' : 'Open WhatsApp'}</a>` : ''}
                ${links.website ? `<a class="contact-brand-action contact-brand-action-soft" href="${links.website}" target="_blank" rel="noopener noreferrer">${isEs ? 'Ver sitio' : 'Visit site'}</a>` : ''}
            </div>
        </article>
    `;
}

function initContactPageDirectory() {
    const currentLanguage = state.currentLanguage || 'es';
    const brandsGrid = document.getElementById('contactBrandsGrid');
    const companySelect = document.getElementById('company');

    if (brandsGrid) {
        brandsGrid.innerHTML = PARKS_DATA.map(park => createContactBrandCardMarkup(park, currentLanguage)).join('');
    }

    if (companySelect) {
        const placeholder = currentLanguage === 'es' ? 'Selecciona una marca' : 'Select a brand';
        companySelect.innerHTML = `
            <option value="">${placeholder}</option>
            ${PARKS_DATA.map(park => `<option value="${park.id}">${park.name}</option>`).join('')}
        `;
    }
}

function getTypeConfig(type) {
    return TYPE_CONFIG[type] || TYPE_CONFIG.family;
}

function getRatingStars(rating) {
    return '★'.repeat(Math.floor(rating)) + '☆'.repeat(5 - Math.floor(rating));
}

function resolveAssetPath(path) {
    if (!path) {
        return '';
    }

    if (/^(https?:|data:|blob:|\/)/i.test(path)) {
        return path;
    }

    return `${ASSET_PREFIX}${path.replace(/^\.\//, '')}`;
}

function getParkModalOverlay() {
    return document.getElementById('modalOverlay');
}

function setParkModalVisibility(isActive) {
    const parkModal = getParkModalElement();
    const parkOverlay = getParkModalOverlay();

    if (parkModal) {
        parkModal.classList.toggle('active', isActive);
    }

    if (parkOverlay) {
        parkOverlay.classList.toggle('active', isActive);
    }
}

function createParkProductGalleryMarkup(park, products, currentLanguage) {
    const visualPool = getUniqueGalleryImages(park).filter(image => image && image !== park.image);
    const fallbackImage = visualPool[0] || park.image;

    return `
        <div class="park-detail-products-grid">
            ${products.slice(0, 6).map((product, index) => {
                const productImage = visualPool[index % Math.max(visualPool.length, 1)] || fallbackImage;
                const imageIndex = productImage ? Math.max(getUniqueGalleryImages(park).indexOf(productImage), 0) : 0;
                const productCaption = getGalleryImageDescription(park, index, currentLanguage);
                const whatsappHref = buildProductWhatsAppHref(park, product, currentLanguage);
                const viewLabel = currentLanguage === 'es' ? 'Ver galeria' : 'View gallery';
                const interestLabel = currentLanguage === 'es' ? 'Me interesa' : 'I am interested';

                return `
                    <article class="park-detail-product-card">
                        <button class="park-detail-product-media" type="button" onclick="openParkGallery(${park.id}, ${imageIndex})" aria-label="${currentLanguage === 'es' ? 'Ver imagen de' : 'View image for'} ${product}">
                            <img src="${resolveAssetPath(productImage)}" alt="${product}" class="park-detail-product-image" loading="lazy">
                        </button>
                        <span class="park-detail-product-copy">
                            <span class="park-detail-product-name">${product}</span>
                            <span class="park-detail-product-caption">${productCaption}</span>
                        </span>
                        <span class="park-detail-product-actions">
                            <button class="park-detail-product-gallery-btn" type="button" onclick="openParkGallery(${park.id}, ${imageIndex})">${viewLabel}</button>
                            ${whatsappHref ? `<a class="park-detail-product-whatsapp-btn" href="${whatsappHref}" target="_blank" rel="noopener noreferrer">${interestLabel}</a>` : ''}
                        </span>
                    </article>
                `;
            }).join('')}
        </div>
    `;
}

function showParkDetails(parkId) {
    const park = PARKS_DATA.find(p => p.id === parkId);
    if (!park) return;

    const currentLanguage = state.currentLanguage || 'es';
    const isEs = currentLanguage === 'es';
    const localized = getLocalizedParkContent(park, currentLanguage);
    const location = localized.location;
    const fullDescription = currentLanguage === 'es' && park.fullDescriptionEs ? park.fullDescriptionEs : park.fullDescription;
    const highlights = localized.highlights;
    const products = localized.products.length ? localized.products : highlights;
    const externalLinksMarkup = createBrandExternalLinksMarkup(park, 'brand-external-links-modal');
    const brandColor = getBrandColorForPark(park);
    const profile = getBrandDetailProfile(park, currentLanguage);
    const galleryImages = getUniqueGalleryImages(park);
    const heroBanner = galleryImages[0] || park.image;
    const primaryCtaHref = getBrandPrimaryCtaHref(park, profile);
    const directContactHref = (park.contactLinks && (park.contactLinks.whatsapp || park.contactLinks.email)) || '';
    const modalBody = document.getElementById('modalBody');
    const modalTitle = document.getElementById('modalTitle');
    const parkModal = getParkModalElement();
    if (!modalBody) return;

    if (modalTitle) {
        modalTitle.textContent = isEs ? 'Detalles de la marca' : 'Brand Details';
    }

    if (parkModal) {
        parkModal.style.setProperty('--park-modal-primary', brandColor.primary);
        parkModal.style.setProperty('--park-modal-secondary', brandColor.secondary);
        parkModal.style.setProperty('--park-modal-accent', brandColor.accent);
        parkModal.style.setProperty('--park-modal-bg', brandColor.bg);
        parkModal.style.setProperty('--park-modal-soft', brandColor.soft);
        parkModal.style.setProperty('--park-modal-border', brandColor.border);
        parkModal.style.setProperty('--park-modal-shadow', brandColor.shadow);
    }

    modalBody.innerHTML = `
        <div class="park-detail-modal-layout" style="--park-modal-primary: ${brandColor.primary}; --park-modal-secondary: ${brandColor.secondary}; --park-modal-accent: ${brandColor.accent}; --park-modal-bg: ${brandColor.bg}; --park-modal-soft: ${brandColor.soft}; --park-modal-border: ${brandColor.border}; --park-modal-shadow: ${brandColor.shadow};">
            <section class="park-detail-hero park-brand-hero-card">
                <div class="park-brand-banner-shell">
                    <img src="${resolveAssetPath(heroBanner)}" alt="${park.name}" class="park-detail-hero-image park-brand-banner-image">
                </div>
                <div class="park-brand-hero-content">
                    <div class="park-brand-logo-card">
                        <span class="park-brand-kicker">Logo</span>
                        <img src="${resolveAssetPath(park.image)}" alt="Logo ${park.name}" class="park-brand-logo-image">
                    </div>
                    <div class="park-detail-heading park-brand-heading">
                        <div class="park-brand-chip-row">
                            <span class="park-brand-chip">${profile.category}</span>
                            <span class="park-brand-chip">${isEs ? 'Fundada' : 'Founded'} ${profile.founded}</span>
                        </div>
                        <h2 class="park-detail-title">${park.name}</h2>
                        <p class="park-brand-tagline">${profile.tagline}</p>
                        ${profile.mapUrl
                            ? `<a class="park-detail-location park-detail-location-link" href="${profile.mapUrl}" target="_blank" rel="noopener noreferrer">📍 ${location}</a>`
                            : `<p class="park-detail-location">📍 ${location}</p>`
                        }
                    </div>
                    <div class="park-brand-hero-action">
                        ${primaryCtaHref ? `
                            <a class="btn btn-primary park-brand-primary-btn" href="${primaryCtaHref}" target="_blank" rel="noopener noreferrer">${profile.primaryCtaLabel}</a>
                        ` : `
                            <button class="btn btn-primary park-brand-primary-btn" type="button" onclick="openBookingModal(${park.id})">${isEs ? 'Explorar sitio' : 'Explore site'}</button>
                        `}
                    </div>
                </div>
            </section>

            <div class="park-detail-main park-brand-detail-main">
                <div class="park-brand-meta-grid">
                    <div class="park-brand-meta-card">
                        <span class="park-brand-meta-label">${isEs ? 'Categoria' : 'Category'}</span>
                        <strong>${profile.category}</strong>
                    </div>
                    <div class="park-brand-meta-card">
                        <span class="park-brand-meta-label">${isEs ? 'Ubicacion' : 'Location'}</span>
                        ${profile.mapUrl
                            ? `<strong><a class="park-brand-meta-link" href="${profile.mapUrl}" target="_blank" rel="noopener noreferrer">${location}</a></strong>`
                            : `<strong>${location}</strong>`
                        }
                    </div>
                    <div class="park-brand-meta-card">
                        <span class="park-brand-meta-label">${isEs ? 'Ano de fundacion' : 'Founded'}</span>
                        <strong>${profile.founded}</strong>
                    </div>
                </div>
                <div class="park-detail-copy-card">
                    <p class="park-detail-description">${fullDescription}</p>
                </div>

                <div class="park-detail-section park-brand-story-grid">
                    <article class="park-brand-story-card">
                        <h3 class="park-detail-section-title">${isEs ? 'Origen de la marca' : 'Brand origin'}</h3>
                        <p class="park-brand-story-text">${profile.origin}</p>
                    </article>
                    <article class="park-brand-story-card">
                        <h3 class="park-detail-section-title">${isEs ? 'Mision y vision' : 'Mission and vision'}</h3>
                        <p class="park-brand-story-text"><strong>${isEs ? 'Mision:' : 'Mission:'}</strong> ${profile.mission}</p>
                        <p class="park-brand-story-text"><strong>${isEs ? 'Vision:' : 'Vision:'}</strong> ${profile.vision}</p>
                    </article>
                    <article class="park-brand-story-card">
                        <h3 class="park-detail-section-title">${isEs ? 'Que la hace diferente' : 'What makes it different'}</h3>
                        <p class="park-brand-story-text">${profile.differentiator}</p>
                    </article>
                </div>

                <div class="park-detail-section">
                    <h3 class="park-detail-section-title">${isEs ? 'Productos o servicios destacados' : 'Featured products or services'}</h3>
                    ${createParkProductGalleryMarkup(park, products, currentLanguage)}
                </div>

                <div class="park-detail-section">
                    <h3 class="park-detail-section-title">${isEs ? 'Facilita seguir o contactar' : 'Follow or contact easily'}</h3>
                    ${createBrandContactInfoMarkup(park, currentLanguage, profile)}
                </div>

                ${externalLinksMarkup}

                <div class="park-detail-section park-brand-closing-card">
                    <h3 class="park-detail-section-title">${isEs ? 'Siguiente paso' : 'Next step'}</h3>
                    <p class="park-brand-closing-copy">${isEs ? 'Cierra esta visita con una accion clara: explora mas de la marca o contacta directamente para avanzar.' : 'Close this visit with a clear action: explore more about the brand or contact it directly to move forward.'}</p>
                    <div class="park-detail-actions park-brand-final-actions">
                        ${primaryCtaHref ? `
                            <a class="btn btn-secondary" href="${primaryCtaHref}" target="_blank" rel="noopener noreferrer">${isEs ? 'Explorar sitio' : 'Explore site'}</a>
                        ` : `
                            <button class="btn btn-secondary" type="button" onclick="setParkModalVisibility(false)">${isEs ? 'Explorar sitio' : 'Explore site'}</button>
                        `}
                        ${directContactHref ? `
                            <a class="btn btn-primary" href="${directContactHref}" target="_blank" rel="noopener noreferrer">${isEs ? 'Contactar' : 'Contact'}</a>
                        ` : `
                            <button class="btn btn-primary" onclick="openBookingModal(${park.id})">${isEs ? 'Contactar' : 'Contact'}</button>
                        `}
                    </div>
                </div>
            </div>
        </div>
    `;

    setParkModalVisibility(true);
}

// ============ FILTER SYSTEM ============

function initFilterButtons() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const filter = btn.dataset.filter;
            state.currentFilter = filter;
            
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const filtered = filter === 'all' 
                ? PARKS_DATA 
                : PARKS_DATA.filter(p => p.type === filter);
            renderParks(filtered);
        });
    });
}

// ============ BOOKING SYSTEM ============

function openBookingModal(parkId) {
    state.selectedPark = parkId;
    const park = PARKS_DATA.find(p => p.id === parkId);
    if (!park) return;

    const parkSelect = document.getElementById('parkSelect');
    const companySelect = document.getElementById('company');

    if (parkSelect) {
        parkSelect.innerHTML = `<option value="${parkId}" selected>${park.name} - $${park.price.toFixed(2)}</option>`;
    }

    if (companySelect) {
        companySelect.innerHTML = PARKS_DATA.map(p => `
            <option value="${p.id}" ${p.id === parkId ? 'selected' : ''}>${p.name}</option>
        `).join('');
    }

    const bookingForm = document.getElementById('bookingForm');
    if (bookingForm) {
        bookingForm.reset();
    }

    const adultsCount = document.getElementById('adultsCount');
    if (adultsCount) adultsCount.value = 1;

    const childrenCount = document.getElementById('childrenCount');
    if (childrenCount) childrenCount.value = 0;

    const today = new Date().toISOString().split('T')[0];
    const visitDate = document.getElementById('visitDate');
    if (visitDate) visitDate.min = today;

    updateBookingSummary();
    const bookingModal = document.getElementById('bookingModal');
    if (bookingModal) bookingModal.classList.add('active');
}

function updateBookingSummary() {
    const packageSelect = document.getElementById('packageSelect') || document.getElementById('serviceType');
    if (!packageSelect) return;

    const adults = parseInt(document.getElementById('adultsCount')?.value) || 1;
    const children = parseInt(document.getElementById('childrenCount')?.value) || 0;
    const estimatedCostElement = document.getElementById('estimatedCost');
    const totalPriceElement = document.getElementById('totalPrice');

    const packagePrices = {
        'standard': 29.99,
        'premium': 49.99,
        'vip': 79.99,
        'consultation': 59.99,
        'quote': 79.99,
        'partnership': 99.99
    };

    const pricePerPerson = packagePrices[packageSelect.value] || 29.99;
    const total = packageSelect.id === 'serviceType' ? pricePerPerson : (adults + children) * pricePerPerson;

    if (estimatedCostElement) {
        estimatedCostElement.textContent = `$${total.toFixed(2)}`;
    }
    if (totalPriceElement) {
        totalPriceElement.textContent = `$${total.toFixed(2)}`;
    }
}

// ============ GALLERY SYSTEM ============

function initGallery() {
    const galleryGrid = document.getElementById('galleryGrid');
    if (!galleryGrid) {
        return;
    }

    state.galleryInitialized = true;

    const currentLanguage = state.currentLanguage || 'es';
    const sortedParks = [...PARKS_DATA].sort((a, b) => a.name.localeCompare(b.name));
    const gallerySectionsMarkup = sortedParks.map((park) => {
        const galleryImages = getPreferredGalleryImages(park);
        if (galleryImages.length === 0) {
            return '';
        }

        const cardsMarkup = galleryImages.map((img, imageIndex) => {
            const imageDescription = getGalleryImageDescription(park, imageIndex, currentLanguage);
            const imageLabel = currentLanguage === 'es'
                ? `Imagen ${imageIndex + 1}`
                : `Image ${imageIndex + 1}`;

            return `
                <button class="gallery-flip-card" type="button" onclick="openParkGallery(${park.id}, ${imageIndex}, true)" aria-label="${park.name} ${imageLabel}">
                    <span class="gallery-flip-inner">
                        <span class="gallery-face gallery-face-front">
                            <img src="${resolveAssetPath(img)}" alt="${park.name} ${imageLabel}" loading="lazy" decoding="async">
                            <span class="gallery-card-gradient"></span>
                        </span>
                        <span class="gallery-face gallery-face-back">
                            <span class="gallery-back-text">${imageDescription}</span>
                            <span class="gallery-back-action">${currentLanguage === 'es' ? 'Ver foto' : 'View photo'}</span>
                        </span>
                    </span>
                </button>
            `;
        }).join('');

        const sectionTag = currentLanguage === 'es' ? 'Marca' : 'Brand';
        const sectionCount = currentLanguage === 'es'
            ? `${galleryImages.length} imágenes`
            : `${galleryImages.length} images`;
        const brandTheme = getBrandColorForPark(park);

        return `
            <article class="gallery-brand-block" style="--gallery-brand-primary: ${brandTheme.primary}; --gallery-brand-secondary: ${brandTheme.secondary}; --gallery-brand-accent: ${brandTheme.accent}; --gallery-brand-soft: ${brandTheme.soft}; --gallery-brand-border: ${brandTheme.border}; --gallery-brand-bg: ${brandTheme.bg};">
                <div class="gallery-brand-header">
                    <div>
                        <span class="gallery-brand-tag">${sectionTag}</span>
                        <h3 class="gallery-brand-title">${park.name}</h3>
                    </div>
                    <div class="gallery-brand-meta">
                        <span class="gallery-brand-count">${sectionCount}</span>
                    </div>
                </div>
                <div class="gallery-grid gallery-grid-brands">
                    ${cardsMarkup}
                </div>
            </article>
        `;
    }).join('');

    galleryGrid.innerHTML = gallerySectionsMarkup;
}

function openImageGallery(index) {
    state.currentGalleryIndex = index;
    updateImageModal();
    document.getElementById('imageModal').classList.add('active');
    startGallerySlideshow();
}

function openParkGallery(parkId, imageIndex = 0, minimalView = false) {
    const park = PARKS_DATA.find(item => item.id === parkId);
    if (!park) {
        return;
    }

    const galleryImages = getPreferredGalleryImages(park);
    if (galleryImages.length === 0) {
        return;
    }

    const currentLanguage = state.currentLanguage || 'es';
    const parkImages = galleryImages.map((img, idx) => {
        const imageLabel = currentLanguage === 'es'
            ? `Imagen ${idx + 1}`
            : `Image ${idx + 1}`;

        return {
            src: resolveAssetPath(img),
            alt: `${park.name} - ${imageLabel}`,
            parkId,
            title: park.name,
            label: imageLabel,
            description: getGalleryImageDescription(park, idx, currentLanguage),
            minimal: Boolean(minimalView)
        };
    });

    window.allGalleryImages = parkImages;
    openImageGallery(Math.min(imageIndex, parkImages.length - 1));
}

function updateImageModal() {
    const img = window.allGalleryImages[state.currentGalleryIndex];
    if (!img) {
        return;
    }

    const modalImage = document.getElementById('modalImage');
    const modalTitle = document.getElementById('imageModalTitle');
    const modalDescription = document.getElementById('imageModalDescription');
    const modalCount = document.getElementById('imageModalCount');
    const modalThumbs = document.getElementById('imageModalThumbs');
    const modalScene = document.getElementById('imageModalScene');
    const modalBackdrop = document.getElementById('imageModalBackdrop');
    const modalSceneLabel = document.getElementById('imageModalSceneLabel');
    const modalSceneBrand = document.getElementById('imageModalSceneBrand');
    const modalSceneOverlay = modalScene ? modalScene.querySelector('.image-modal-scene-overlay') : null;
    const modalToggle = document.getElementById('imageModalToggle');
    const modalProgress = document.getElementById('imageModalProgress');
    const modalInfo = document.querySelector('.image-modal-info');
    const isMinimalGallery = Boolean(img.minimal);

    if (modalScene) {
        modalScene.classList.remove('is-animating');
        void modalScene.offsetWidth;
        modalScene.classList.add('is-animating');
    }

    modalImage.src = img.src;
    modalImage.alt = img.alt || 'Imagen de galería';

    if (modalBackdrop) {
        modalBackdrop.style.backgroundImage = `url("${img.src}")`;
        modalBackdrop.style.display = isMinimalGallery ? 'none' : '';
    }

    if (modalSceneOverlay) {
        modalSceneOverlay.style.display = isMinimalGallery ? 'none' : '';
    }

    if (modalTitle) {
        modalTitle.textContent = img.title || '';
        modalTitle.style.display = isMinimalGallery ? 'none' : '';
    }

    if (modalDescription) {
        modalDescription.textContent = img.description || '';
        modalDescription.style.display = isMinimalGallery ? 'none' : '';
    }

    if (modalCount) {
        const total = window.allGalleryImages?.length || 0;
        modalCount.textContent = `${state.currentGalleryIndex + 1} / ${total}`;
        modalCount.style.display = isMinimalGallery ? 'none' : '';
    }

    if (modalSceneLabel) {
        modalSceneLabel.textContent = img.label || '';
        modalSceneLabel.style.display = isMinimalGallery ? 'none' : '';
    }

    if (modalSceneBrand) {
        modalSceneBrand.textContent = img.title || '';
        modalSceneBrand.style.display = isMinimalGallery ? 'none' : '';
    }

    if (modalToggle) {
        const isPlaying = state.gallerySlideshowPlaying;
        modalToggle.textContent = isPlaying
            ? (state.currentLanguage === 'es' ? 'Pausar' : 'Pause')
            : (state.currentLanguage === 'es' ? 'Reproducir' : 'Play');
        modalToggle.setAttribute('aria-pressed', String(isPlaying));
        modalToggle.style.display = isMinimalGallery ? 'none' : '';
    }

    if (modalProgress) {
        modalProgress.classList.remove('is-running');
        modalProgress.style.animationDuration = `${state.gallerySlideshowDuration}ms`;
        modalProgress.style.display = isMinimalGallery ? 'none' : '';
        void modalProgress.offsetWidth;
        if (!isMinimalGallery && state.gallerySlideshowPlaying && (window.allGalleryImages?.length || 0) > 1) {
            modalProgress.classList.add('is-running');
        }
    }

    if (modalThumbs) {
        modalThumbs.style.display = isMinimalGallery ? 'none' : '';
        modalThumbs.innerHTML = isMinimalGallery ? '' : (window.allGalleryImages || []).map((galleryImage, index) => `
            <button
                class="image-modal-thumb ${index === state.currentGalleryIndex ? 'active' : ''}"
                type="button"
                data-gallery-index="${index}"
                aria-label="${galleryImage.alt || `Imagen ${index + 1}`}"
            >
                <img src="${galleryImage.src}" alt="${galleryImage.alt || `Imagen ${index + 1}`}" loading="lazy" decoding="async">
            </button>
        `).join('');
    }

    if (modalInfo) {
        modalInfo.style.display = isMinimalGallery ? 'none' : '';
    }
}

function stopGallerySlideshow() {
    if (state.gallerySlideshowTimer) {
        clearInterval(state.gallerySlideshowTimer);
        state.gallerySlideshowTimer = null;
    }

    const modalProgress = document.getElementById('imageModalProgress');
    if (modalProgress) {
        modalProgress.classList.remove('is-running');
    }
}

function startGallerySlideshow() {
    stopGallerySlideshow();

    if (!state.gallerySlideshowPlaying || !window.allGalleryImages || window.allGalleryImages.length <= 1) {
        return;
    }

    const modalProgress = document.getElementById('imageModalProgress');
    if (modalProgress) {
        modalProgress.style.animationDuration = `${state.gallerySlideshowDuration}ms`;
        void modalProgress.offsetWidth;
        modalProgress.classList.add('is-running');
    }

    state.gallerySlideshowTimer = setInterval(() => {
        state.currentGalleryIndex = (state.currentGalleryIndex + 1) % window.allGalleryImages.length;
        updateImageModal();
    }, state.gallerySlideshowDuration);
}

function getGalleryImageDescription(park, imageIndex, language = 'es') {
    const isEs = language === 'es';
    const localized = getLocalizedParkContent(park, language);
    const products = localized.products.length ? localized.products : localized.highlights;
    const leadProduct = products[imageIndex % products.length] || park.name;
    const context = GALLERY_DESCRIPTION_CONTEXT[park.id] || {};
    const specificDescriptions = isEs ? context.descriptionsEs : context.descriptionsEn;

    if (Array.isArray(specificDescriptions) && specificDescriptions[imageIndex]) {
        return specificDescriptions[imageIndex];
    }

    if (isEs) {
        const summary = context.summaryEs || 'una referencia visual del portafolio actual de la marca';
        return `Vista ${imageIndex + 1} de ${park.name}: muestra ${summary} y refuerza su línea de ${leadProduct.toLowerCase()}.`;
    }

    const summary = context.summaryEn || 'a visual reference from the brand’s current portfolio';
    return `${park.name} view ${imageIndex + 1}: it shows ${summary} and reinforces its ${leadProduct.toLowerCase()} line.`;
}

// ============ MODAL CONTROLS ============

function initModals() {
    const modalClose = document.getElementById('modalClose');
    const bookingClose = document.getElementById('bookingClose');
    const imageClose = document.getElementById('imageClose');
    const imagePrev = document.getElementById('imagePrev');
    const imageNext = document.getElementById('imageNext');
    const imageThumbs = document.getElementById('imageModalThumbs');
    const imageToggle = document.getElementById('imageModalToggle');
    const parkOverlay = getParkModalOverlay();

    if (modalClose) {
        modalClose.addEventListener('click', () => {
            setParkModalVisibility(false);
        });
    }

    if (parkOverlay) {
        parkOverlay.addEventListener('click', (e) => {
            if (e.target === parkOverlay) {
                setParkModalVisibility(false);
            }
        });
    }

    if (bookingClose) {
        bookingClose.addEventListener('click', () => {
            const bookingModal = document.getElementById('bookingModal');
            if (bookingModal) {
                bookingModal.classList.remove('active');
            }
        });
    }

    if (imageClose) {
        imageClose.addEventListener('click', () => {
            const imageModal = document.getElementById('imageModal');
            if (imageModal) {
                imageModal.classList.remove('active');
            }
            stopGallerySlideshow();
        });
    }

    document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('active');
                if (modal.id === 'imageModal') {
                    stopGallerySlideshow();
                }
            }
        });
    });

    if (imagePrev) {
        imagePrev.addEventListener('click', () => {
            if (!window.allGalleryImages || window.allGalleryImages.length === 0) return;
            state.currentGalleryIndex = (state.currentGalleryIndex - 1 + window.allGalleryImages.length) % window.allGalleryImages.length;
            updateImageModal();
            startGallerySlideshow();
        });
    }

    if (imageNext) {
        imageNext.addEventListener('click', () => {
            if (!window.allGalleryImages || window.allGalleryImages.length === 0) return;
            state.currentGalleryIndex = (state.currentGalleryIndex + 1) % window.allGalleryImages.length;
            updateImageModal();
            startGallerySlideshow();
        });
    }

    if (imageToggle) {
        imageToggle.addEventListener('click', () => {
            state.gallerySlideshowPlaying = !state.gallerySlideshowPlaying;
            updateImageModal();
            startGallerySlideshow();
        });
    }

    if (imageThumbs) {
        imageThumbs.addEventListener('click', (event) => {
            const thumb = event.target.closest('[data-gallery-index]');
            if (!thumb) {
                return;
            }

            state.currentGalleryIndex = Number(thumb.dataset.galleryIndex || 0);
            updateImageModal();
            startGallerySlideshow();
        });
    }
}

// ============ FORM HANDLING ============

function initForm() {
    const form = document.getElementById('bookingForm');
    if (!form) {
        return;
    }

    const adultsCount = document.getElementById('adultsCount');
    const childrenCount = document.getElementById('childrenCount');
    const packageSelect = document.getElementById('packageSelect') || document.getElementById('serviceType');

    if (adultsCount) {
        adultsCount.addEventListener('change', updateBookingSummary);
    }
    if (childrenCount) {
        childrenCount.addEventListener('change', updateBookingSummary);
    }
    if (packageSelect) {
        packageSelect.addEventListener('change', updateBookingSummary);
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        processBooking();
    });
}

function processBooking() {
    const nameInput = document.getElementById('guestName') || document.getElementById('fullName');
    const emailInput = document.getElementById('guestEmail') || document.getElementById('email');
    const dateInput = document.getElementById('visitDate');
    const messageInput = document.getElementById('contactMessage') || document.getElementById('message');

    const name = nameInput ? nameInput.value.trim() : '';
    const email = emailInput ? emailInput.value.trim() : '';
    const date = dateInput ? dateInput.value : '';
    const message = messageInput ? messageInput.value.trim() : '';

    if (!name || !email) {
        alert(state.currentLanguage === 'es' ? 'Completa los campos obligatorios' : 'Please fill in all required fields');
        return;
    }

    const bookingModal = document.getElementById('bookingModal');
    if (bookingModal) {
        bookingModal.classList.remove('active');
    }

    const successModal = document.getElementById('successModal');
    if (successModal) {
        successModal.classList.add('active');
    }

    const bookingForm = document.getElementById('bookingForm');
    if (bookingForm) {
        bookingForm.reset();
    }
    
    console.log('Booking Confirmed:', {
        name,
        email,
        date,
        message,
        selectedCompany: document.getElementById('parkSelect')?.value || document.getElementById('company')?.value || null,
        guestCount: parseInt(document.getElementById('adultsCount')?.value || 0) + 
                    parseInt(document.getElementById('childrenCount')?.value || 0)
    });
}

// ============ NAVIGATION ============

function initNavigation() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    const navProjectsDropdown = document.getElementById('navProjectsDropdown');
    const navProjectsToggle = document.getElementById('navProjectsToggle');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }

    if (navProjectsDropdown && navProjectsToggle) {
        navProjectsToggle.addEventListener('click', (event) => {
            event.stopPropagation();
            const isOpen = navProjectsDropdown.classList.toggle('open');
            navProjectsToggle.setAttribute('aria-expanded', String(isOpen));
        });

        document.addEventListener('click', (event) => {
            if (!navProjectsDropdown.contains(event.target)) {
                navProjectsDropdown.classList.remove('open');
                navProjectsToggle.setAttribute('aria-expanded', 'false');
            }
        });
    }

    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            if (link.classList.contains('nav-projects-toggle')) {
                return;
            }
            if (navMenu) {
                navMenu.classList.remove('active');
            }
            if (navProjectsDropdown && !link.classList.contains('nav-projects-toggle')) {
                navProjectsDropdown.classList.remove('open');
                navProjectsToggle?.setAttribute('aria-expanded', 'false');
            }
        });
    });

    const exploreBtn = document.getElementById('exploreBtn');
    if (exploreBtn) {
        exploreBtn.addEventListener('click', () => {
            const previewSection = document.querySelector('#brandPreview');
            const parksSection = document.querySelector('#parks');
            const targetSection = previewSection || parksSection;

            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }

    document.querySelectorAll('.btn-book-nav, #ctaBookBtn').forEach(btn => {
        btn.addEventListener('click', () => {
            const target = btn.dataset.navTarget;
            if (target) {
                window.location.href = target;
                return;
            }

            openBookingModal(1);
        });
    });

    const navbar = document.getElementById('navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            const scrollTop = window.scrollY;
            if (scrollTop > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }
}

// ============ SUCCESS MODAL ============

function initSuccessModal() {
    const successClose = document.getElementById('successClose');
    const successModal = document.getElementById('successModal');

    if (successClose && successModal) {
        successClose.addEventListener('click', () => {
            successModal.classList.remove('active');
        });
    }
}

// ============ SEARCH SYSTEM ============

function initSearch() {
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');
    const searchSuggestions = document.getElementById('searchSuggestions');

    if (!searchInput || !searchBtn || !searchSuggestions) {
        return;
    }

    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();
        
        if (query.length === 0) {
            if (isHomeSearchContext() && document.activeElement === searchInput) {
                showRandomSearchSuggestions();
            } else {
                searchSuggestions.classList.remove('active');
            }
            return;
        }

        const results = getSearchResults(query);

        if (results.length > 0) {
            displaySearchSuggestions(results);
        } else {
            searchSuggestions.classList.remove('active');
        }
    });

    searchBtn.addEventListener('click', () => {
        const query = searchInput.value.toLowerCase().trim();
        if (query.length > 0) {
            performSearch(query);
        }
    });

    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            const query = searchInput.value.toLowerCase().trim();
            if (query.length > 0) {
                performSearch(query);
            }
        }
    });

    searchInput.addEventListener('focus', () => {
        if (isHomeSearchContext() && searchInput.value.trim().length === 0) {
            showRandomSearchSuggestions();
        }
    });

    searchInput.addEventListener('blur', () => {
        if (isHomeSearchContext()) {
            setTimeout(() => {
                searchSuggestions.classList.remove('active');
            }, 180);
            return;
        }

        setTimeout(() => {
            searchSuggestions.classList.remove('active');
        }, 200);
    });

    document.addEventListener('click', (e) => {
        if (isHomeSearchContext()) {
            if (!e.target.closest('.search-container')) {
                searchSuggestions.classList.remove('active');
            }
            return;
        }

        if (!e.target.closest('.search-container')) {
            searchSuggestions.classList.remove('active');
        }
    });

    searchSuggestions.classList.remove('active');
}

function displaySearchSuggestions(results) {
    const suggestionsBox = document.getElementById('searchSuggestions');
    
    suggestionsBox.innerHTML = results.map(park => `
        <div class="search-suggestion-item" onclick="selectParkFromSearch(${park.id})">
            <div class="search-suggestion-icon">${getTypeEmoji(park.type)}</div>
            <div class="search-suggestion-text">
                <div class="search-suggestion-name">${park.name}</div>
                <div class="search-suggestion-type">${capitalizeType(park.type)} • ${park.location}</div>
            </div>
        </div>
    `).join('');
    
    suggestionsBox.classList.add('active');
}

function getTypeEmoji(type) {
    const emojis = {
        'family': '👨‍👩‍👧‍👦',
        'extreme': '🚀',
        'luxury': '✨'
    };
    return emojis[type] || '🌊';
}

function capitalizeType(type) {
    return type.charAt(0).toUpperCase() + type.slice(1);
}

function getProjectsPagePath() {
    return window.location.pathname.toLowerCase().includes('/html/')
        ? 'proyectos.html'
        : 'html/proyectos.html';
}

function buildBrandDetailsUrl(parkId) {
    const safeId = encodeURIComponent(parkId);
    return `${getProjectsPagePath()}?brand=${safeId}#park-card-${safeId}`;
}

function redirectToBrandDetails(parkId) {
    window.location.href = buildBrandDetailsUrl(parkId);
}

function getParkCardElement(parkId) {
    return document.getElementById(`park-card-${parkId}`) || document.querySelector(`[data-park-id="${parkId}"]`);
}

function focusParkCard(parkId) {
    const card = getParkCardElement(parkId);
    if (!card) {
        return false;
    }

    card.scrollIntoView({ behavior: 'smooth', block: 'center' });
    card.classList.add('search-target-highlight');
    setTimeout(() => card.classList.remove('search-target-highlight'), 2200);
    return true;
}

function isHomeSearchContext() {
    return !!document.getElementById('featuredBrandsPreview') && !document.getElementById('parksGrid');
}

function getRandomParks(limit = 4) {
    return [...PARKS_DATA]
        .sort(() => Math.random() - 0.5)
        .slice(0, Math.min(limit, PARKS_DATA.length));
}

function showRandomSearchSuggestions() {
    displaySearchSuggestions(getRandomParks(5));
}

function selectParkFromSearch(parkId) {
    const selectedPark = PARKS_DATA.find(park => park.id === parkId);
    const searchInput = document.getElementById('searchInput');
    const suggestionsBox = document.getElementById('searchSuggestions');

    if (!selectedPark || !searchInput || !suggestionsBox) {
        return;
    }

    if (isHomeSearchContext()) {
        searchInput.value = selectedPark.name;
        suggestionsBox.classList.remove('active');
        redirectToBrandDetails(parkId);
        return;
    }

    searchInput.value = selectedPark.name;
    state.currentFilter = 'all';
    renderParks(PARKS_DATA);
    focusParkCard(parkId);
    showParkDetails(parkId);
    suggestionsBox.classList.remove('active');
}

function performSearch(query) {
    const results = getSearchResults(query);

    if (results.length > 0) {
        if (isHomeSearchContext()) {
            redirectToBrandDetails(results[0].id);
            return;
        }

        const selectedPark = results[0];
        const targetSection = document.getElementById('parksSection') || document.getElementById('parks');
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }

        state.currentFilter = 'all';
        renderParks(PARKS_DATA);

        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        document.querySelector('[data-filter="all"]')?.classList.add('active');

        setTimeout(() => {
            focusParkCard(selectedPark.id);
            showParkDetails(selectedPark.id);
        }, 180);

        document.getElementById('searchInput').value = '';
        document.getElementById('searchSuggestions').classList.remove('active');
    }
}

function getSearchResults(query) {
    return PARKS_DATA.filter(park => park.name.toLowerCase().includes(query));
}

function openBrandFromQueryParam() {
    const params = new URLSearchParams(window.location.search);
    const brandParam = params.get('brand');

    if (!brandParam || !document.getElementById('parksGrid')) {
        return;
    }

    const normalizedBrand = brandParam.trim().toLowerCase();
    const matchingPark = PARKS_DATA.find(park =>
        String(park.id) === normalizedBrand || park.name.toLowerCase() === normalizedBrand
    );

    if (!matchingPark) {
        return;
    }

    state.currentFilter = 'all';
    renderParks(PARKS_DATA);

    const targetSection = document.getElementById('parksSection') || document.getElementById('parks');
    if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    setTimeout(() => {
        focusParkCard(matchingPark.id);
        showParkDetails(matchingPark.id);
    }, 180);
}

// ============ INITIALIZATION ============

document.addEventListener('DOMContentLoaded', () => {
    console.log('BALNEARIOS ACUATICOS BO - Inicializando...');
    
    initLanguageSystem();
    initParksGrid();
    initModals();
    initForm();
    initNavigation();
    initSearch();
    initSuccessModal();
    initContactPageDirectory();
    scheduleDeferredHomeSections();
    
    // Restore language preference
    const savedLang = localStorage.getItem('preferredLanguage') || 'es';
    setLanguage(savedLang);
    openBrandFromQueryParam();
    
    console.log('BALNEARIOS ACUATICOS BO - Sitio listo.');
});

// ============ UTILITY FUNCTIONS ============

// Add keyboard support
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        document.querySelectorAll('.modal.active').forEach(modal => {
            modal.classList.remove('active');
        });
    }
    
    if (e.key === 'ArrowLeft' && document.getElementById('imageModal').classList.contains('active')) {
        document.getElementById('imagePrev').click();
    }
    
    if (e.key === 'ArrowRight' && document.getElementById('imageModal').classList.contains('active')) {
        document.getElementById('imageNext').click();
    }
});

// Performance monitoring
if ('performance' in window) {
    window.addEventListener('load', () => {
        const perfData = window.performance.timing;
        const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
        console.log(`Page Load Time: ${pageLoadTime}ms`);
    });
}

// Debug: Test renderFeaturedBrands execution
setTimeout(() => {
    console.log('Testing renderFeaturedBrands execution...');
    const grid = document.getElementById('featuredBrandsGrid');
    console.log('Grid element found:', !!grid);
    if (grid) {
        console.log('Grid has children:', grid.children.length);
        console.log('Grid innerHTML length:', grid.innerHTML.length);
        if (grid.children.length === 0) {
            console.log('Grid is empty, calling renderFeaturedBrands manually...');
            renderFeaturedBrands(PARKS_DATA);
        }
    } else {
        console.log('Grid element not found!');
    }
}, 1000);

