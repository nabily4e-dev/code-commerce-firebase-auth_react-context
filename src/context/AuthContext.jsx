import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
	onAuthStateChanged,
} from 'firebase/auth'
import { createContext, useContext, useEffect, useState } from 'react'
import { auth } from '../util/firebase'

const UserContext = createContext()

export default function AuthContextProvider({ children }) {
	const [user, setUser] = useState({})

	const createUser = (email, password) =>
		createUserWithEmailAndPassword(auth, email, password)

	const signin = (email, password) =>
		signInWithEmailAndPassword(auth, email, password)

	const signout = () => signOut(auth)

	useEffect(() => {
		const unsubscribed = onAuthStateChanged(auth, (currentUser) => {
			console.log(currentUser)
			setUser(currentUser)
		})
		return () => {
			unsubscribed()
		}
	}, [])

	return (
		<UserContext.Provider value={{ user, createUser, signin, signout }}>
			{children}
		</UserContext.Provider>
	)
}

export const UserAuth = () => {
	return useContext(UserContext)
}
