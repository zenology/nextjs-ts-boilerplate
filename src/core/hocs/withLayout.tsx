import { Navigation } from 'components/templates'
import React from 'react'

const withLayout = (PageComponent: React.ComponentType): React.FC => {
	const EnhancedPageComponent: React.FC = (props) => {
		return (
			<>
				<Navigation />
				<PageComponent {...props} />
			</>
		)
	}

	return EnhancedPageComponent
}

export default withLayout
