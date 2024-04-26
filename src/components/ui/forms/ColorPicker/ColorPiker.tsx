import type { ChangeEvent, FC } from 'react'
import '../form.scss'

interface PropsType {
	value: string
	setValue: (color: string) => void
}

const ColorPiker: FC<PropsType> = ({ value, setValue }) => {
	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value)
	}

	return (
		<div className='color-piker'>
			<input type='color' value={value} onChange={handleChange} />
		</div>
	)
}

export default ColorPiker
