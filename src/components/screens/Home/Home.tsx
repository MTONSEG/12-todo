import { useAppSelector } from '../../../hooks/useTypedRedux'
import Todo from '../../widgets/Todo/Todo'
import TodoList from '../../containers/TodoList/TodoList'
import { lang } from '../../../dictionaries'

const Home = () => {
	const { todoList } = useAppSelector((state) => state.todo)

	return (
		<div className='home'>
			<TodoList>
				{todoList.map((todo) => (
					<Todo todo={todo} key={todo.id} />
				))}
			</TodoList>

			{todoList.length < 1 && <p>{lang['is-empty-todo']}</p>}
		</div>
	)
}

export default Home
