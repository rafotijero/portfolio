export type ExperienceEntry = {
	role: string;
	company: string;
	period: string;
	summary: string;
	stack?: string[];
	// Ruta en /public a un logo institucional. Mientras no se reemplacen por
	// los logos reales, LogoAvatar.astro cae a un placeholder de iniciales.
	logo?: string;
};

export const experience: ExperienceEntry[] = [
	{
		role: 'Especialista 2',
		company: 'Contraloría General de la República (CGR)',
		period: 'nov. 2023 — actualidad',
		summary:
			'Formo parte del equipo que diseña y construye Control 360+, el sistema integrado de servicios de control gubernamental, con microservicios en Java y Spring Boot. Contribuyo a los lineamientos técnicos del equipo, coordino en ocasiones a otros programadores para objetivos puntuales, y evalúo nuevas herramientas para modernizar los servicios digitales de la institución.',
		stack: ['Java', 'Spring Boot', 'Oracle'],
		logo: '/logos/institutions/cgr.jpg',
	},
	{
		role: 'Especialista 1',
		company: 'Contraloría General de la República (CGR)',
		period: 'nov. 2019 — nov. 2023',
		summary:
			'Automaticé la generación masiva de servicios de control mediante interoperabilidad entre fuentes de información de múltiples entidades del Estado. Construí aplicaciones para agilizar procesos de control y la emisión de informes a nivel nacional, coordinando equipos de soporte.',
		stack: ['Java', 'C#', 'Python'],
		logo: '/logos/institutions/cgr.jpg',
	},
	{
		role: 'Asistente de Desarrollo',
		company: 'Dirección Desconcentrada de Cultura, Cusco — Ministerio de Cultura',
		period: 'dic. 2016 — nov. 2019',
		summary:
			'Mantuve operativos los módulos informáticos de la DDC-Cusco, incluidos los del santuario histórico de Machupicchu, con desarrollo backend en Java y GWT, además de correcciones puntuales en Angular y React. Di soporte a los sistemas de información y bases de datos institucionales.',
		stack: ['Java', 'GWT', 'SQL Server', 'Angular', 'React'],
		logo: '/logos/institutions/ministerio-cultura.png',
	},
	{
		role: 'Administrador de Base de Datos (DBA)',
		company: 'Corporación Khipu S.A.C.',
		period: 'jul. 2016 — nov. 2016',
		summary:
			'Puse en producción bases de datos para plataformas de e-learning integradas a aplicaciones web y de escritorio, definiendo estándares de seguridad, backups y control de accesos.',
		stack: ['C#', 'SQL Server', 'MySQL'],
		logo: '/logos/institutions/khipu.png',
	},
	{
		role: 'Asistente de Desarrollo',
		company: 'Corporación Khipu S.A.C.',
		period: 'ene. 2015 — abr. 2016',
		summary:
			'Construí en C# los sistemas internos del Instituto Khipu y la Universidad Global (Intranet, KhipuEduca, EduGlobal), y mantuve los portales institucionales en PHP, HTML5 y CSS3.',
		stack: ['C#', 'PHP', 'JavaScript'],
		logo: '/logos/institutions/khipu.png',
	},
	{
		role: 'Diseñador y Desarrollador Web',
		company: 'Tierras de los Andes S.A.C.',
		period: 'feb. 2013 — abr. 2014',
		summary:
			'Desarrollé módulos del sistema de venta de boletos turísticos en GWT-Java y sitios institucionales con Joomla, WordPress y PHP.',
		stack: ['Java', 'PHP', 'MySQL'],
		logo: '/logos/institutions/tierras-de-los-andes.png',
	},
];

export const additionalExperience =
	'Docente de Ciclo Preuniversitario — Universidad Global, Cusco (jun.–ago. 2017): cursos de desarrollo web y administración de la plataforma e-learning.';
