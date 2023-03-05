import { Navigate, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'

export default function Account() {
	const { user, signout } = UserAuth()

	const navigate = useNavigate()

	const handleSignout = async () => {
		try {
			await signout()
			navigate('/')
			console.log('You are signed out')
		} catch (error) {
			console.log(error.message)
		}
	}

	return (
		<div className='max-w-[600px] mx-auto my-16 p-4'>
			<h1 className='text-2xl font-bold py-4'>Account</h1>
			<p>User Email: {user && user.email}</p>

			<button
				onClick={handleSignout}
				className='border border-blue-500 bg-blue-600 hover:bg-blue-500 text-white px-6 py-2 my-4'
			>
				Logout
			</button>
		</div>
	)
}
