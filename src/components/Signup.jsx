import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'

export default function Signup() {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [error, setError] = useState('')

	const { createUser } = UserAuth()

	const navigate = useNavigate()

	const handleSubmit = async (e) => {
		e.preventDefault()
		setError('')
		try {
			await createUser(email, password)
			console.log('Created account successfully!')
			navigate('/account')
		} catch (e) {
			setError(e.message)
			console.log(e.message)
		}
	}

	return (
		<div className='max-w-[700px] mx-auto my-16 p-4'>
			<div className='text-2xl font-bold py-2'>
				<h1>Sign up for a free account.</h1>
				<p className='py-2'>
					Already have an account yet? <Link to='/'>Sign in</Link>{' '}
				</p>
			</div>
			<form onSubmit={handleSubmit}>
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
				<button className='border border-blue-500 bg-blue-600 hover:bg-blue-500 w-full p-4 my-2 text-white'>
					Sign Up
				</button>
			</form>
		</div>
	)
}
