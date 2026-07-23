export type Certification = {
	name: string;
	institution: string;
	hours: string;
	year: string;
	// Ruta en /public a un logo institucional; ver nota en experience.ts.
	logo?: string;
};

const logos = {
	tecsup: '/logos/institutions/tecsup.png',
	pragmma: '/logos/institutions/pragmma.png',
	cursosdev: '/logos/institutions/cursosdev.png',
	ceti: '/logos/institutions/ceti.png',
	cibertec: '/logos/institutions/cibertec.png',
	unsaac: '/logos/institutions/unsaac.png',
	uac: '/logos/institutions/universidad-andina-cusco.png',
};

export const certifications: Certification[] = [
	{ name: 'Arquitectura de Software', institution: 'Tecsup (CodiGo)', hours: '180h', year: '2025', logo: logos.tecsup },
	{
		name: 'Desarrollo Web Fullstack con Java',
		institution: 'Tecsup (CodiGo)',
		hours: '240h',
		year: '2024–2025',
		logo: logos.tecsup,
	},
	{
		name: 'Desarrollo Backend con Java y Spring Boot',
		institution: 'Pragmma',
		hours: '50h',
		year: '2025',
		logo: logos.pragmma,
	},
	{
		name: 'Angular 21 PRO desde cero',
		institution: 'CursosDev Technology',
		hours: '40h',
		year: '2026',
		logo: logos.cursosdev,
	},
	{ name: 'Cloud DevOps con AWS', institution: 'Pragmma', hours: '50h', year: '2025', logo: logos.pragmma },
	{
		name: 'Administración y Desarrollo de BD con Oracle 21c',
		institution: 'CETI',
		hours: '150h',
		year: '2025',
		logo: logos.ceti,
	},
	{ name: 'Bootcamp de Data', institution: 'Cibertec', hours: '196h', year: '2023', logo: logos.cibertec },
];

export const additionalTraining =
	'Java, Spring Framework, Git, JavaScript, React JS, HTML y Angular (Udemy, CódigoFacilito, MitoCode) — SQL Server 2022, Power BI y Python 3.11 (Skill).';

export const education = [
	{
		degree: 'Ingeniería Informática y de Sistemas',
		institution: 'Universidad Nacional de San Antonio Abad del Cusco (UNSAAC)',
		note: 'Titulado, 2018',
		logo: logos.unsaac,
	},
	{
		degree: 'Maestría en Ingeniería de Sistemas, mención Ingeniería de Software',
		institution: 'Universidad Andina del Cusco',
		note: 'Egresado, 2023',
		logo: logos.uac,
	},
];
