import { FC } from 'react'
import '../form.scss'

interface PropsType {
	title: string
	value: string
	setValue: (value: string) => void
}

const Textarea: FC<PropsType> = ({ title, value, setValue }) => {
	return (
		<div className='field'>
			<p className='field__title'>{title}</p>

			<textarea
				className='field__textarea'
				aria-label='Enter new todo'
				value={value}
				onChange={(e) => {
					setValue(e.target.value)
				}}
			/>
		</div>
	)
}

export default Textarea
