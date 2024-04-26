import type { DetailedHTMLProps, FC, ReactNode } from 'react'
import './Button.scss'

interface PropsType
	extends DetailedHTMLProps<
		React.ButtonHTMLAttributes<HTMLButtonElement>,
		HTMLButtonElement
	> {
	children: string | ReactNode
	className?: string
	variant?: 'default' | 'menu' | 'text'
}

const Button: FC<PropsType> = ({
	children,
	className = '',
	variant = 'default',
	...props
}) => {
	return (
		<button className={`button button_${variant} ${className}`} {...props}>
			{children}
		</button>
	)
}

export default Button
