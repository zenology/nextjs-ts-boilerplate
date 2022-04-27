import styled from 'styled-components'

export const PageWrapper = styled.div`
	display: flex;
	justify-content: center;
	padding: 100px 0;
	flex-direction: column;
	align-items: center;

	color: ${({ theme }) => theme.color.BLACK};

	h1 {
		font-weight: 700;
		font-size: 38px;
	}

	span {
		display: block;
		font-size: 24px;
	}
`
