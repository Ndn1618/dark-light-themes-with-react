import { useState, useEffect, useContext } from 'react'
import { ThemeContext } from '../../ThemeContext'
import { LanguageContext } from '../../LanguageContext'
import { languages } from '../../Options'
import './Login.css'

function Login () {

	const { theme } = useContext(ThemeContext)
	const { language } = useContext(LanguageContext)
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
	const [disabled, setDisabled] = useState(true)
	const [lang1, setLang1] = useState({})

	const onSubmit = event => {

		event.preventDefault()

		console.log('Submitted', username)
	}

	useEffect(() => {
		setLang1(languages.find(lang => lang.prop === language))
	}, [
		language,
	]);

	useEffect(() => {

		setDisabled(!(username.length > 2 && password.length >= 6))
		// setDisabled(username.length > 2 ? false : true)

	}, [
		username,
		password,
	])

	return (
		<>
			<div id="login" className={theme}>

				<div className='container'>
				<form onSubmit={onSubmit}>
					<div className="input">
						<label htmlFor="username">{lang1.username}</label>
						<input
							id="username"
							type="text"
							placeholder={lang1.username}
							autoComplete="off"
							spellCheck={false}
							onChange={e => setUsername(e.target.value)}
						/>
					</div>
					<div className="input">
						<label htmlFor="password">{lang1.password}</label>
						<input
							id="password"
							type="password"
							placeholder={lang1.password}
							autoComplete="current-password"
							onChange={e => setPassword(e.target.value)}
						/>
					</div>
					<div>
						<button className='login-button' disabled={disabled}>
							<span>{lang1.login}</span>
						</button>
					</div>
				</form>
				</div>

			</div>
		</>
	)
}

export default Login
