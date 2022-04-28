import { flowRight as compose } from 'lodash'

import withMeta from './withMeta'
import withLayout from './withLayout'
import React from 'react'

const withPage =
	() =>
	(Component: Page.PageType<any>): React.FC<any> => {
		const hocs = [withMeta, withLayout]

		return compose(...hocs)(Component)
	}

export default withPage
