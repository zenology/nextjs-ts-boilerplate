type ButtonProps = {
	className?: string
	disabled?: boolean
	onClick?: () => void
	children: JSX.Element | string
}

const Button: React.FC<ButtonProps> = ({ className, disabled, onClick, children }) => {
	return (
		<button className={className} disabled={disabled} onClick={onClick}>
			{children}
		</button>
	)
}

export default Button
