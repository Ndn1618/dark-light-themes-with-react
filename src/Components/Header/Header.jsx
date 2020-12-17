import { useContext } from 'react'
import './Header.css'

import { ThemeContext } from '../../ThemeContext'
import { LanguageContext } from '../../LanguageContext'
import { languages } from '../../Options'

function Header () {

	const { theme, setTheme } = useContext(ThemeContext)
	const { language } = useContext( LanguageContext )

	return (
		<>
			<header className={theme}>
				<div className='container'>
				{
					languages.map((lang) => {
					if (lang.prop === language) {
					return (
						<>
						<h1>{lang.heading}</h1>
					<select
						defaultValue={theme}
						onChange={e => setTheme(e.target.value)}
					>
						<option value="light">{lang.themeLight}</option>
						<option value="dark">{lang.themeDark}</option>
					</select>
						</>
					)
					}
					})
				}
				</div>
			</header>
		</>
	)
}

export default Header
