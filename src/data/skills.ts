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
			{ name: 'Spring Cloud Config', icon: 'springboot' },
			{ name: 'Angular', icon: 'angular' },
			{ name: 'React', icon: 'react' },
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
		group: 'Testing & Calidad',
		items: [
			{ name: 'JUnit', icon: 'junit' },
			{ name: 'Mockito' },
			{ name: 'Postman', icon: 'postman' },
			{ name: 'SonarQube', icon: 'sonarqube' },
		],
	},
	{
		group: 'Mensajería, Cloud & DevOps',
		items: [
			{ name: 'Apache Kafka', icon: 'apachekafka' },
			{ name: 'AWS', icon: 'aws' },
			{ name: 'Maven', icon: 'maven' },
			{ name: 'Git', icon: 'git' },
			{ name: 'Scrum', icon: 'scrum' },
		],
	},
];

// Permite reutilizar el mismo ícono por nombre de tecnología en otras
// secciones (p. ej. el stack de cada experiencia laboral).
export const techIconMap: Record<string, string> = {
	...Object.fromEntries(
		skills.flatMap((group) =>
			group.items.filter((item) => item.icon).map((item) => [item.name, item.icon as string]),
		),
	),
	// Estas tecnologías no son skills principales hoy (históricas o de uso
	// puntual, no en "02. Stack técnico"), pero sí necesitan ícono para las
	// tarjetas de experiencia donde se mencionan.
	React: 'react',
	'Apache Kafka': 'apachekafka',
	CodeIgniter: 'codeigniter',
	Bootstrap: 'bootstrap',
	jQuery: 'jquery',
	GWT: 'gwt',
};
