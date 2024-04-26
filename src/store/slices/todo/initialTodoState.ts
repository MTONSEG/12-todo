import type {
	ICategory,
	ITodo,
	NumStr,
	TodoModalType
} from '../../../types/types'
import { v4 as uuid } from 'uuid'

interface TodoStateType {
	isOpenTodoModal: boolean
	isOpenCategoryModal: boolean
	todoModalType: TodoModalType
	todo: {
		id: NumStr
		titleValue: string
		descriptionValue: string
		category: null | ICategory
	}
	category: {
		labelValue: string
		color: string
	}
	todoList: ITodo[]
	categories: ICategory[]
}

export const initialTodoState: TodoStateType = {
	isOpenTodoModal: false,
	isOpenCategoryModal: false,
	todoModalType: 'add',
	todo: {
		id: '',
		titleValue: '',
		descriptionValue: '',
		category: {
			id: 'e60e82d7',
			label: 'Home',
			color: '#ff6a55',
			clicked: false
		}
	},
	category: {
		labelValue: '',
		color: '#000000'
	},
	todoList: [
		{
			id: 'e60e82d7',
			title: 'sdfsd',
			description: 'fsdfsdf',
			category: {
				id: 'e60e82d7-a7e1-4576-9c19-f281ca1c9eae',
				label: 'School',
				color: 'lime',
				clicked: false
			},
			isComplete: false
		}
	],
	categories: [
		{
			id: 'e60e82d7',
			label: 'Home',
			color: '#ff6a55',
			clicked: false
		},
		{
			id: uuid(),
			label: 'Work',
			color: 'orange',
			clicked: false
		},
		{
			id: uuid(),
			label: 'School',
			color: 'lime',
			clicked: false
		}
	]
}
