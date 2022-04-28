type RouteConfig = { name: string; pattern?: string; page?: string }

const routes: RouteConfig[] = [
	{ name: 'home', pattern: '/', page: 'HomePage' },
	{ name: 'about', pattern: '/about/:id', page: 'AboutPage' }
]

export default routes
