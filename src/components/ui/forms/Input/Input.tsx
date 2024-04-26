import { FC } from 'react'
import '../form.scss'

interface PropsType {
	title: string
	isError?: boolean
	value: string
	setValue: (value: string) => void
}

const Input: FC<PropsType> = ({ title, value, isError = false, setValue }) => {
	return (
		<div className={`field ${isError ? 'error' : ''}`}>
			{title && <p className='field__title'>{title}</p>}

			<input
				type='text'
				className='field__input'
				aria-label='Enter new todo'
				value={value}
				onChange={(e) => {
					setValue(e.target.value)
				}}
			/>

			{isError && <p className='field__error'>required</p>}
		</div>
	)
}

export default Input
