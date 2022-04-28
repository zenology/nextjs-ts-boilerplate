import React from 'react'
import { Navigation } from 'components/templates'
import { useTranslation } from 'react-i18next'

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
