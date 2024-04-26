import { FC, ReactNode } from 'react'
import './MenuPopup.scss'
import PointsBtn from '../../buttons/PointsBtn/PointsBtn'
import useClickOutside from '../../../../hooks/useClickOutside'

interface PropsType {
	children: ReactNode,
}

const MenuPopup: FC<PropsType> = ({ children}) => {
	const { isShow, setShow, ref } = useClickOutside(false)

	const handleShowMenu = () => {
		setShow(!isShow)
	}

	return (
		<div className='menu-popup'>
			<PointsBtn onClick={handleShowMenu} />

			<div ref={ref} className={`menu-popup__menu ${isShow ? 'active' : ''}`}>
				{children}
			</div>
		</div>
	)
}

export default MenuPopup
