import { Outlet } from 'react-router-dom'
import Header from '../../widgets/Header/Header'
import './Layout.scss'
import Container from '../Container/Container'
import TodoModal from '../../widgets/TodoModal/TodoModal'
import CategoryModal from '../../widgets/CategoryModal/CategoryModal'
import Sidebar from '../../widgets/Sidebar/Sidebar'

const Layout = () => {
	return (
		<div className='wrapper'>
			<Header />

			<main className='main'>
				<Container>
					<div className='main__body'>
						<Sidebar />

						<div className='main__content'>
							<Outlet />
						</div>
					</div>
				</Container>
			</main>

			<TodoModal />
			<CategoryModal />
		</div>
	)
}

export default Layout
