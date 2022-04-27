import { css } from 'styled-components'

export default css`
	:root {
		--text-base-size: 1em;
		--font-primary: sans-serif;
		--font-color: #222;

		--body-line-height: 1.4;
		--heading-line-height: 1.2;
	}

	body {
		font-size: var(--text-base-size);
		font-family: var(--font-primary);
		color: var(--font-color);
	}

	h1,
	h2,
	h3,
	h4 {
		line-height: var(--heading-line-height);
		font-weight: 400;
		margin: 0;
	}

	a {
		text-decoration: none;

		&:hover {
			text-decoration: underline;
		}
	}

	mark {
		background-color: alpha(var(--color-accent), 0.2);
		color: inherit;
	}

	strong {
		font-weight: 700;
	}

	s {
		text-decoration: line-through;
	}

	u {
		text-decoration: underline;
	}
`
