import { FC } from 'react'
import '../form.scss'

interface PropsType {
	label?: string
	isChecked: boolean
	handleClick: () => void
}

const Checkbox: FC<PropsType> = ({ label, isChecked, handleClick }) => {
	return (
		<div
			className={`checkbox ${isChecked ? 'checked' : ''}`}
			onClick={handleClick}
		>
			<div className='checkbox__custom'></div>
			{label && <p className='checkbox__label'>{label}</p>}
		</div>
	)
}

export default Checkbox
