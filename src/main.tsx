import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import store, { persistor } from './store/store.ts'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import App from './components/containers/Layout/Layout.tsx'
import Deleted from './components/screens/Deleted/Deleted.tsx'
import './styles/global.scss'
import Home from './components/screens/Home/Home.tsx'
import { PersistGate } from 'redux-persist/integration/react'

const router = createBrowserRouter([
	{
		path: '/12-todo',
		element: <App />,
		children: [
			{
				path: '/12-todo',
				element: <Home />
			},
			{
				path: '/12-todo/completed',
				element: <Deleted />
			}
		]
	}
])

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<Provider store={store}>
			<PersistGate persistor={persistor} loading={null}>
				<RouterProvider router={router} />
			</PersistGate>
		</Provider>
	</React.StrictMode>
)
