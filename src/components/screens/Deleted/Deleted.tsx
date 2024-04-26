import { useMemo } from 'react'
import { useAppSelector } from '../../../hooks/useTypedRedux'
import TodoList from '../../containers/TodoList/TodoList'
import Todo from '../../widgets/Todo/Todo'
import { lang } from '../../../dictionaries'

const Deleted = () => {
	const { todoList } = useAppSelector((state) => state.todo)

	const completedList = useMemo(
		() => todoList.filter((el) => el.isComplete),
		[todoList]
	)

	return (
		<div className='home'>
			<TodoList>
				{completedList.map((todo) => (
					<Todo todo={todo} key={todo.id} />
				))}
			</TodoList>

			{completedList.length < 1 && <p>{lang['is-empty-completed-todo']}</p>}
		</div>
	)
}

export default Deleted
