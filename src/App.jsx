import { Route, Routes } from 'react-router-dom'
import './index.css'
import Signin from './components/Signin'
import Account from './components/Account'
import Signup from './components/Signup'
import AuthContextProvider from './context/AuthContext'
import ProtectedRoute from './components/ProtectedRoute'

export default function App() {
	return (
		<div>
			<h1 className='text-center text-3xl font-bold'>
				Firebase Auth & Context!
			</h1>
			<AuthContextProvider>
				<Routes>
					<Route
						path='/'
						element={<Signin />}
					/>{' '}
					<Route
						path='/signup'
						element={<Signup />}
					/>
					<Route
						path='/account'
						element={
							<ProtectedRoute>
								<Account />
							</ProtectedRoute>
						}
					/>{' '}
				</Routes>
			</AuthContextProvider>
		</div>
	)
}
