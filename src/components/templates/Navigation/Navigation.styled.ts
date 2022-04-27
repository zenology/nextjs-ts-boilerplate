import { rgba } from 'polished'
import styled from 'styled-components'

export const NavigationWrapper = styled.nav`
	box-shadow: 0px 6px 20px ${({ theme }) => rgba(theme.color.BLACK, 0.06)};
	margin-bottom: 30px;

	li {
		display: inline-block;
		text-transform: uppercase;
		border-right: 1px solid #eee;
	}

	a {
		display: block;
		color: #757575;
		cursor: pointer;
		font-weight: 700;
		padding: 15px 40px;

		&:hover {
			color: #222;
		}
	}
`
