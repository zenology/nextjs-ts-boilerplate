import React from 'react'
import Link from 'next/link'
import { NavigationWrapper } from './Navigation.styled'

const Navigation: React.FC = () => {
	const menus = React.useMemo(
		() => [
			{
				name: 'home',
				path: '/'
			},
			{
				name: 'about',
				path: '/about/2'
			}
		],
		[]
	)

	return (
		<NavigationWrapper>
			<div className="container">
				<ul>
					{menus.map(({ name, path }) => (
						<li key={name}>
							<Link href={path ?? name}>
								<a>{name}</a>
							</Link>
						</li>
					))}
				</ul>
			</div>
		</NavigationWrapper>
	)
}

export default Navigation
