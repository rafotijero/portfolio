function toggleTheme() {
	const root = document.documentElement;
	const isDark = root.classList.toggle('dark');
	root.style.colorScheme = isDark ? 'dark' : 'light';
	try {
		localStorage.setItem('theme', isDark ? 'dark' : 'light');
	} catch (e) {}
}

document.addEventListener('click', (event) => {
	if (event.target.closest('[data-theme-toggle]')) {
		toggleTheme();
	}
});
