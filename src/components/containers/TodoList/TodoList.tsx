import type { FC, ReactNode } from 'react'
import './TodoList.scss'

interface PropsType {
	children: ReactNode
}

const TodoList: FC<PropsType> = ({ children }) => {
	return <ul className='list-todo'>{children}</ul>
}

export default TodoList
