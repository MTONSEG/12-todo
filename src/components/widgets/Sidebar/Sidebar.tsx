import { FC } from 'react'
import './Sidebar.scss'
import { useAppSelector } from '../../../hooks/useTypedRedux'
import CategoryBtn from '../../ui/buttons/CategoryBtn/CategoryBtn'
import Button from '../../ui/buttons/Button/Button'
import { useActions } from '../../../hooks/useAction'
import { lang } from '../../../dictionaries'

interface PropsType {}

const Sidebar: FC<PropsType> = () => {
	const { categories } = useAppSelector((state) => state.todo)
	const { toggleCategoryModal, removeCategory } = useActions('todo')

	const handleOpen = () => {
		toggleCategoryModal(true)
	}

	return (
		<div className='sidebar'>
			<div className='sidebar__list'>
				{categories.map((category) => (
					<CategoryBtn
						category={category}
						key={category.id}
						onRemove={removeCategory}
					/>
				))}
			</div>

			<Button
				children={lang.add_category}
				variant='text'
				onClick={handleOpen}
			/>
		</div>
	)
}

export default Sidebar
