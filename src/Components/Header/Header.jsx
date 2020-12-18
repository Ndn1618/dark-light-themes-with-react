import { useContext, useState, useEffect} from 'react'
import './Header.css'

import { ThemeContext } from '../../ThemeContext'
import { LanguageContext } from '../../LanguageContext'
import { languages } from '../../Options'

function Header () {

	const { theme, setTheme } = useContext(ThemeContext)
	const { language } = useContext( LanguageContext )
	const [lang2, setLang2] = useState({})

	useEffect(() => {
		setLang2(languages.find(lang => lang.prop === language))
	}, [
		language
	])

	return (
		<>
			<header className={theme}>
				<div className='container'>
					<h1 className='heading-text'>{lang2.heading}</h1>
					<select
						defaultValue={theme}
						onChange={e => setTheme(e.target.value)}
					>
						<option value="light">{lang2.themeLight}</option>
						<option value="dark">{lang2.themeDark}</option>
					</select>
				</div>
			</header>
		</>
	)
}

export default Header
