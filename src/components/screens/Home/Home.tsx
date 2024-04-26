import { useAppSelector } from '../../../hooks/useTypedRedux'
import Todo from '../../widgets/Todo/Todo'
import TodoList from '../../containers/TodoList/TodoList'

const Home = () => {
	const { todoList } = useAppSelector((state) => state.todo)

	return (
		<div className='home'>
			<TodoList>
				{todoList.map((todo) => (
					<Todo todo={todo} key={todo.id} />
				))}
			</TodoList>
		</div>
	)
}

export default Home
