import { DetailedHTMLProps, FC } from 'react'
import './CategoryBtn.scss'
import { ICategory, NumStr } from '../../../../types/types'

interface PropsType
	extends DetailedHTMLProps<
		React.ButtonHTMLAttributes<HTMLButtonElement>,
		HTMLButtonElement
	> {
	category: ICategory
	className?: string
	variant?: 'default' | 'select'
	onRemove?: (id: NumStr) => void
}

const CategoryBtn: FC<PropsType> = ({
	category,
	className = '',
	variant = 'default',
	onRemove,
	...props
}) => {
	const { label, color, id } = category

	const handleRemove = () => {
		onRemove?.(id)
	}
	return (
		<button
			className={`category-btn category-btn_${variant} ${className} `}
			aria-label={`filtered to ${label}`}
			{...props}
		>
			<span className='category-btn__color' style={{ background: color }} />
			<span className='category-btn__label'>{label}</span>

			<span className='category-btn__remove' onClick={handleRemove}>
				&#10005;
			</span>
		</button>
	)
}

export default CategoryBtn
