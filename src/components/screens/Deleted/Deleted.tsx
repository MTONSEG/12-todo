import { useMemo } from 'react'
import { useAppSelector } from '../../../hooks/useTypedRedux'
import TodoList from '../../containers/TodoList/TodoList'
import Todo from '../../widgets/Todo/Todo'

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
		</div>
	)
}

export default Deleted
