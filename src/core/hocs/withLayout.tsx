import React from 'react'

import { useTranslation } from 'react-i18next'

import { Navigation } from 'components/templates'

const withLayout = (PageComponent: Page.PageType<any>): React.FC => {
	const EnhancedPageComponent: React.FC = (props) => {
		const { t } = useTranslation('')

		return (
			<>
				<Navigation />
				<PageComponent t={t} {...props} />
			</>
		)
	}

	return EnhancedPageComponent
}

export default withLayout
