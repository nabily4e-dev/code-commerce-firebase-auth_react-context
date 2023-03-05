import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'
import { useState } from 'react'

export default function Signin() {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [error, setError] = useState('')

	const { signin } = UserAuth()

	const navigate = useNavigate()

	const handleSubmit = async (e) => {
		e.preventDefault()
		setError('')
		try {
			await signin(email, password)
			console.log('You are signed in!')
			navigate('/account')
		} catch (error) {
			setError(error.message)
			console.log(error.message)
		}
	}

	return (
		<div className='max-w-[700px] mx-auto my-16 p-4'>
			<div className='text-2xl font-bold py-2'>
				<h1>Sign in to your account.</h1>
				<p className='py-2'>
					Don't have an account yet? <Link to='/signup'>Sign up</Link>{' '}
				</p>
			</div>
			<form>
				<div className='flex flex-col py-2'>
					<label
						htmlFor=''
						className='py-2 font-medium'
					>
						Email Address
					</label>
					<input
						onChange={(e) => setEmail(e.target.value)}
						type='email'
					/>
				</div>
				<div className='flex flex-col py-2'>
					<label
						htmlFor=''
						className='py-2 font-medium'
					>
						Password
					</label>
					<input
						onChange={(e) => setPassword(e.target.value)}
						type='password'
					/>
				</div>
				<button
					onClick={handleSubmit}
					className='border border-blue-500 bg-blue-600 hover:bg-blue-500 w-full p-4 my-2 text-white'
				>
					Sign In
				</button>
			</form>
		</div>
	)
}
