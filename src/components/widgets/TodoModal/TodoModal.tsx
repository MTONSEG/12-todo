import { useActions } from '../../../hooks/useAction'
import { useAppSelector } from '../../../hooks/useTypedRedux'
import Button from '../../ui/buttons/Button/Button'
import Input from '../../ui/forms/Input/Input'
import Textarea from '../../ui/forms/Textarea/Textarea'
import Modal from '../../ui/modals/Modal/Modal'
import CategoryList from '../CategoryList/CategoryList'
import './TodoModal.scss'
import { TodoModalType } from '../../../types/types'
import { useState } from 'react'
import { lang } from '../../../dictionaries'

const TodoModal = () => {
	const {
		toggleTodoModal,
		setTodoTitle,
		setTodoDescription,
		addTodo,
		saveTodo,
		clearTodo
	} = useActions('todo')

	const { isOpenTodoModal, categories, todo, todoModalType } = useAppSelector(
		(state) => state.todo
	)

	const [isError, setError] = useState<boolean>(false)

	const handleCloseModal = () => {
		setError(false)
		toggleTodoModal(false)
		clearTodo()
	}

	const handleChangeTitle = (value: string) => {
		setTodoTitle(value)

		setError(!value.length)
	}

	const handleChangeDescription = (value: string) => {
		setTodoDescription(value)
	}

	const handleClickBtn = () => {
		if (!todo.titleValue) {
			setError(true)
			return
		}

		const action: Record<TodoModalType, () => void> = {
			add: () => addTodo(),
			edit: () => saveTodo(todo.id)
		}

		action[todoModalType]()
		handleCloseModal()
	}

	return (
		<Modal
			title={lang.add_todo}
			isOpen={isOpenTodoModal}
			handleClose={handleCloseModal}
		>
			<Input
				title={lang.title}
				value={todo.titleValue}
				setValue={handleChangeTitle}
				isError={isError}
			/>

			<Textarea
				title={lang.description}
				value={todo.descriptionValue}
				setValue={handleChangeDescription}
			/>

			<CategoryList list={categories} />

			<Button
				children={todoModalType}
				style={{ margin: '0 0 0 auto' }}
				onClick={handleClickBtn}
			/>
		</Modal>
	)
}

export default TodoModal
