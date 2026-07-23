export type SkillGroup = {
	group: string;
	// `icon` referencia un slug soportado por TechIcon.astro (marca real o
	// ícono genérico); se omite si no hay ninguno disponible.
	items: { name: string; icon?: string }[];
};

export const skills: SkillGroup[] = [
	{
		group: 'Lenguajes',
		items: [
			{ name: 'Java', icon: 'java' },
			{ name: 'C#', icon: 'csharp' },
			{ name: 'PHP', icon: 'php' },
			{ name: 'JavaScript', icon: 'javascript' },
			{ name: 'Python', icon: 'python' },
		],
	},
	{
		group: 'Frameworks',
		items: [
			{ name: 'Spring Boot', icon: 'springboot' },
			{ name: 'Angular', icon: 'angular' },
			{ name: 'GWT', icon: 'gwt' },
		],
	},
	{
		group: 'Bases de datos',
		items: [
			{ name: 'SQL Server', icon: 'sqlserver' },
			{ name: 'MySQL', icon: 'mysql' },
			{ name: 'Oracle', icon: 'oracle' },
		],
	},
	{
		group: 'Arquitectura, Cloud & DevOps',
		items: [
			{ name: 'Arquitectura de Software', icon: 'architecture' },
			{ name: 'AWS', icon: 'aws' },
			{ name: 'Git', icon: 'git' },
			{ name: 'Scrum', icon: 'scrum' },
			{ name: 'PMBOK', icon: 'pmbok' },
		],
	},
];

// Permite reutilizar el mismo ícono por nombre de tecnología en otras
// secciones (p. ej. el stack de cada experiencia laboral).
export const techIconMap: Record<string, string> = Object.fromEntries(
	skills.flatMap((group) =>
		group.items.filter((item) => item.icon).map((item) => [item.name, item.icon as string]),
	),
);

export const languages = [
	{ name: 'Español', level: 'Nativo' },
	{ name: 'Inglés', level: 'Básico' },
	{ name: 'Quechua', level: 'Básico' },
];
