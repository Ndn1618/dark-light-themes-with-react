import { useState, useEffect } from 'react'
import './Login.css'

function Login () {

	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
	const [disabled, setDisabled] = useState(true)

	const onSubmit = event => {

		event.preventDefault()

		console.log('Submitted', username)
	}

	useEffect(() => {

		setDisabled(!(username.length > 2 && password.length >= 6))
		// setDisabled(username.length > 2 ? false : true)

	}, [
		username,
		password,
	])

	return (
		<>
			<div id="login">

				<div className='container'>
				<form onSubmit={onSubmit}>
					<div className="input">
						<label htmlFor="username">Username</label>
						<input
							id="username"
							type="text"
							placeholder="Username"
							autoComplete="off"
							spellCheck={false}
							onChange={e => setUsername(e.target.value)}
						/>
					</div>
					<div className="input">
						<label htmlFor="password">Password</label>
						<input
							id="password"
							type="password"
							placeholder="Password"
							autoComplete="current-password"
							onChange={e => setPassword(e.target.value)}
						/>
					</div>
					<div>
						<button disabled={disabled}>
							<span>Login</span>
						</button>
					</div>
				</form>
				</div>

			</div>
		</>
	)
}

export default Login
