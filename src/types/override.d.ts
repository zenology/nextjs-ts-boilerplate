import type * as styledComponent from 'styled-components'

declare module 'styled-components' {
	styledComponent

	export interface DefaultTheme {
		color: Styled.IStyleGuide
	}
}
