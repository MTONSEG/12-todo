import { FC } from 'react'
import './Todo.scss'
import { ITodo } from '../../../types/types'
import { useActions } from '../../../hooks/useAction'
import Checkbox from '../../ui/forms/Checkbox/Checkbox'
import Button from '../../ui/buttons/Button/Button'
import MenuPopup from '../../ui/popups/MenuPopup/MenuPopup'

interface PropsType {
	todo: ITodo
}

const Todo: FC<PropsType> = ({ todo }) => {
	const { title, description, id, category, isComplete } = todo
	const {
		setEditModal,
		toggleTodoModal,
		toggleStatus,
		removeTodo,
		setModalType
	} = useActions('todo')

	const handleEditClick = () => {
		setModalType('edit')
		setEditModal(id)
		toggleTodoModal(true)
	}

	const handleRemoveClick = () => {
		removeTodo(id)
	}

	const handleComplete = () => {
		toggleStatus(id)
	}

	return (
		<li className={`item-todo ${isComplete ? 'complete' : ''}`}>
			<div className='item-todo__body'>
				<div className='item-todo__head'>
					<h2 className='item-todo__title'>{title}</h2>

					<MenuPopup>
						<Button children='Edit' variant='menu' onClick={handleEditClick} />
						<Button
							children='Delete'
							variant='menu'
							onClick={handleRemoveClick}
						/>
					</MenuPopup>
				</div>
				{description && (
					<p className='item-todo__description'>
						<span>{description}</span>
					</p>
				)}
			</div>

			<div className='item-todo__footer'>
				<span
					className='item-todo__category-color'
					style={{ background: category.color }}
				/>

				<Checkbox handleClick={handleComplete} isChecked={todo.isComplete} />
			</div>
		</li>
	)
}

export default Todo
