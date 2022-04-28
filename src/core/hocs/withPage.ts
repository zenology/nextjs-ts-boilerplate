import React from 'react'

import { flowRight as compose } from 'lodash'

import withLayout from './withLayout'
import withMeta from './withMeta'

const withPage =
	() =>
	(Component: Page.PageType<any>): React.FC<any> => {
		const hocs = [withMeta, withLayout]

		return compose(...hocs)(Component)
	}

export default withPage
