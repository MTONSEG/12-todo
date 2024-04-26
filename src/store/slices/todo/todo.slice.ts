import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { initialTodoState } from './initialTodoState'
import { v4 as uuid } from 'uuid'
import { ICategory, ITodo, NumStr, TodoModalType } from '../../../types/types'

const todoSlice = createSlice({
	name: 'todo',
	initialState: initialTodoState,
	reducers: {
		setTodoTitle(state, action: PayloadAction<string>) {
			state.todo.titleValue = action.payload
		},
		setTodoDescription(state, action: PayloadAction<string>) {
			state.todo.descriptionValue = action.payload
		},
		setTodoCategory(state, action: PayloadAction<NumStr>) {
			const currentCategory = state.categories.find(
				(el) => el.id === action.payload
			)

			if (currentCategory) {
				state.todo.category = currentCategory
			}
		},

		setCategoryLabel(state, action: PayloadAction<string>) {
			const value = action.payload

			if (value.length > 20) return

			state.category.labelValue = action.payload
		},
		setCategoryColor(state, action: PayloadAction<string>) {
			state.category.color = action.payload
		},
		setEditModal(state, action: PayloadAction<NumStr>) {
			const currentTodo = state.todoList.find((el) => el.id === action.payload)

			if (!currentTodo) return

			const { title, description, category, id } = currentTodo

			state.todo.id = id
			state.todo.titleValue = title
			state.todo.descriptionValue = description ? description : ''
			state.todo.category = category
		},
		setModalType(state, action: PayloadAction<TodoModalType>) {
			state.todoModalType = action.payload
		},
		addTodo(state) {
			const { descriptionValue, titleValue, category } = state.todo
			const defaultCategory = state.categories[0]

			const todo: ITodo = {
				id: uuid(),
				title: titleValue,
				description: descriptionValue,
				category: { ...(category ? category : defaultCategory) },
				isComplete: false
			}

			state.todoList.push(todo)
		},
		addCategory(state) {
			const category: ICategory = {
				id: uuid(),
				label: state.category.labelValue,
				clicked: false,
				color: state.category.color
			}

			state.categories.push(category)
			state.category.color = '#000000'
		},
		saveTodo(state, action: PayloadAction<NumStr>) {
			state.todoList = state.todoList.map((todo) => {
				if (todo.id === action.payload) {
					const category = state.todo.category
						? state.todo.category
						: state.categories[0]

					todo.title = state.todo.titleValue
					todo.description = state.todo.descriptionValue
					todo.category = { ...category }
				}

				return todo
			})
		},

		removeTodo(state, action: PayloadAction<NumStr>) {
			state.todoList = state.todoList.filter((el) => el.id !== action.payload)
		},
		removeCategory(state, action: PayloadAction<NumStr>) {
			state.categories = state.categories.filter(
				(el) => el.id !== action.payload
			)
		},
		toggleTodoModal(state, action: PayloadAction<boolean>) {
			state.isOpenTodoModal = action.payload
		},
		toggleCategoryModal(state, action: PayloadAction<boolean>) {
			state.isOpenCategoryModal = action.payload
		},
		toggleStatus(state, action: PayloadAction<NumStr>) {
			state.todoList = state.todoList.map((todo) => {
				if (todo.id === action.payload) {
					todo.isComplete = !todo.isComplete
				}

				return todo
			})
		},
		clearTodo(state) {
			state.todo.titleValue = ''
			state.todo.descriptionValue = ''
			state.todo.category = null
		},
		clearCategory(state) {
			state.category.color = '#000000'
			state.category.labelValue = ''
		}
	}
})

export type TodoActions = typeof todoSlice.actions
export const { reducer: todoReducer, actions: todoActions } = todoSlice
