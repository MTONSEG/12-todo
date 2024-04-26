import {
	persistStore,
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER
} from 'redux-persist'
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { todoReducer } from './slices/todo/todo.slice'
import storage from 'redux-persist/lib/storage'

const rootReducer = combineReducers({
	todo: todoReducer
})

const persistConfig = {
	key: 'root',
	storage,
	whiteList: ['todo']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
			}
		})
})

export const persistor = persistStore(store)
export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
