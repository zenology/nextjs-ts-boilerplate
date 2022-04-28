import React from 'react'

import { Link } from 'core/routes'

import { NavigationWrapper } from './Navigation.styled'

const Navigation: React.FC = () => {
	const menus = React.useMemo(
		() => [
			{
				name: 'home'
			},
			{
				name: 'about',
				params: { id: 2 }
			}
		],
		[]
	)

	return (
		<NavigationWrapper>
			<div className="container">
				<ul>
					{menus.map(({ name, params }) => (
						<li key={name}>
							<Link route={name} params={params}>
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
