import { FC } from 'react'
import './CategoryList.scss'
import { ICategory, NumStr } from '../../../types/types'
import { useActions } from '../../../hooks/useAction'
import { useAppSelector } from '../../../hooks/useTypedRedux'
import CategoryBtn from '../../ui/buttons/CategoryBtn/CategoryBtn'


interface PropsType {
	list: ICategory[]
}

const CategoryList: FC<PropsType> = ({ list }) => {
	const { setTodoCategory } = useActions('todo')
	const { todo } = useAppSelector((state) => state.todo)

	const handleClick = (id: NumStr) => {
		setTodoCategory(id)
	}

	return (
		<div className='list-category'>
			{list.map((el) => (
				<CategoryBtn
					className={el.id === todo.category?.id ? 'active' : ''}
					category={el}
					key={el.id}
					variant='select'
					onClick={() => {
						handleClick(el.id)
					}}
				/>
			))}
		</div>
	)
}

export default CategoryList
