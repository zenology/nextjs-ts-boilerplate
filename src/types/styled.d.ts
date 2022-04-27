type FlattenInterpolation = import('styled-components').FlattenInterpolation
type FlattenSimpleInterpolation = import('styled-components').FlattenSimpleInterpolation
type ThemeProps = import('styled-components').ThemeProps

declare namespace Styled {
	type JSXElement = JSX.Element | string | number | boolean
	type FlexAlign = 'flex-start' | 'flex-end' | 'center' | 'space-around' | 'space-between'

	// FlattenInterpolation is css function in styled-component
	type CSSObject =
		| string
		| FlattenSimpleInterpolation
		| FlattenInterpolation<ThemeProps<any>>
		| Record<string, any>

	interface IStyleGuide {
		WHITE: string

		PRIMARY_L1: string
		PRIMARY_L2: string

		SECONDARY_L1: string
		SECONDARY_L2: string
		SECONDARY_L3: string

		TERTIARY_L1: string
		TERTIARY_L2: string

		BLACK: string
		BLACK_L0: string
		BLACK_L1: string
		BLACK_L2: string
		BLACK_L3: string
		BLACK_L4: string
		BLACK_L5: string
		BLACK_L6: string

		BLUE: string
		INDIGO: string
		ORANGE: string
		PINK: string
		RED: string
		TEAL: string
		YELLOW: string
		GREEN: string

		STATE_SUCCESS: string
		STATE_ERROR: string
		STATE_INFO: string

		RANDOM_1: string
		RANDOM_2: string
		RANDOM_3: string
		RANDOM_4: string
		RANDOM_5: string
		RANDOM_6: string
		RANDOM_7: string
		RANDOM_8: string
		RANDOM_9: string
		RANDOM_10: string

		TRANSPARENT: 'transparent'
	}

	declare namespace Variants {
		type InputVariant = 'DEFAULT' | 'DARK'

		type ButtonVariant = typeof import('components/atoms/Button/Button').ButtonVariant[number]

		type TagVariant =
			| 'OUTLINE_RED'
			| 'OUTLINE_ORANGE'
			| 'OUTLINE_GREEN'
			| 'OUTLINE_WHITE'
			| 'FILLED_YELLOW'
			| 'FILLED_PINK'
			| 'FILLED_WHITE'

		type DropdownVariant = 'DEFAULT' | 'DEFAULT_HOVER_GREEN' | 'NO_BORDER' | 'NO_BORDER_HOVER_GREEN'
	}
}
