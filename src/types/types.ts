export type NumStr = string | number
export type TodoModalType = 'add' | 'edit'

export interface ITodo {
	id: NumStr
	title: string
	description?: string
	category: ICategory
	isComplete: boolean
}

export interface ICategory {
	id: NumStr
	label: string
	color: string
	clicked: false
}
