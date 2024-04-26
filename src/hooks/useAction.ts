import { useMemo } from 'react'
import { useAppDispatch } from './useTypedRedux'
import { bindActionCreators } from '@reduxjs/toolkit'
import { TodoActions, todoActions } from '../store/slices/todo/todo.slice'


interface RootActions {
	todo: TodoActions
}

const rootActions: RootActions = {
	todo: todoActions
}

export const useActions = <T extends keyof RootActions>(
	reducerName: T
): RootActions[T] => {
	const dispatch = useAppDispatch()
	const actions = useMemo(
		() => bindActionCreators(rootActions[reducerName], dispatch),
		[dispatch, reducerName]
	)

	return actions
}
