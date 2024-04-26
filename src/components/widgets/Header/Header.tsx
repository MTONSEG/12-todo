import { FC } from 'react'
import './Header.scss'
import { NavLink } from 'react-router-dom'
import Container from '../../containers/Container/Container'
import { useActions } from '../../../hooks/useAction'
import { lang } from '../../../dictionaries'

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
						<NavLink to='/12-todo' className='header__link'>
							{lang.all}
						</NavLink>
						<NavLink to='/12-todo/completed' className='header__link'>
							{lang.completed}
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
