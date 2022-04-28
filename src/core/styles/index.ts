import * as styled from 'styled-components'

import { reset, typography } from './global'

export { styleGuide } from './global'

export const GlobalStyles = styled.createGlobalStyle<{ theme: DefaultTheme }>`
	${reset}
	${typography}
`
