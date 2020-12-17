import { useContext } from 'react'
import './Header.css'

import { ThemeContext } from '../../ThemeContext'

function Header () {

	const { theme, setTheme } = useContext(ThemeContext)

	return (
		<>
			<header className={theme}>
				<h1>App</h1>
				<select
					defaultValue={theme}
					onChange={e => setTheme(e.target.value)}
				>
					<option value="light">Light</option>
					<option value="dark">Dark</option>
				</select>
			</header>
		</>
	)
}

export default Header
