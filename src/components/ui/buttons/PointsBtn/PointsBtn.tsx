import { DetailedHTMLProps, FC } from 'react'
import './PointsBtn.scss'

interface PropsType
	extends DetailedHTMLProps<
		React.ButtonHTMLAttributes<HTMLButtonElement>,
		HTMLButtonElement
	> {}

const PointsBtn: FC<PropsType> = ({ ...props }) => {
	return (
		<button className={`points-btn`} {...props}>
			<span></span>
		</button>
	)
}

export default PointsBtn
