import { FC } from 'react'
import './Header.scss'
import { NavLink } from 'react-router-dom'
import Container from '../../containers/Container/Container'
import { useActions } from '../../../hooks/useAction'

interface PropsType {}

const Header: FC<PropsType> = () => {
	const { toggleTodoModal, setModalType } = useActions('todo')

	const handleOpenPopup = () => {
		setModalType('add')
		toggleTodoModal(true)
	}

	return (
		<header className='header'>
			<Container>
				<div className='header__body'>
					<p className='header__logo'>Todo</p>

					<nav className='header__link-list'>
						<NavLink to='/' className='header__link'>
							All
						</NavLink>
						<NavLink to='deleted' className='header__link'>
							Completed
						</NavLink>
					</nav>

					<button className='header__add-btn' onClick={handleOpenPopup}>
						+
					</button>
				</div>
			</Container>
		</header>
	)
}

export default Header
