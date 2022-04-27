import styled from 'styled-components'

export const PageWrapper = styled.div`
	margin: 0 auto;
	width: 25%;
`

export const InnerWrapper = styled.div`
	padding: 12px;
	border-radius: 8px;
	margin-top: 8px;
	text-align: center;
	color: white;
	background: ${({ theme }) => theme.color.BLACK};

	p {
		margin-bottom: 8px;
		font-size: 21px;
		font-weight: 700;
	}
`
