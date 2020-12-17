import { useContext } from 'react'
import './Footer.css'

import { ThemeContext } from '../../ThemeContext'
import { LanguageContext } from '../../LanguageContext'
import { languages } from '../../Options'

function Footer ({ children }) {

	const { theme } = useContext(ThemeContext)
	const { language, setLanguage } = useContext(LanguageContext)

	return (
		<>
			<footer className={theme}>
				<div className='container'>
				<select defaultValue={language} onChange={evt => setLanguage(evt.target.value)}>
					{languages.map((lang, key) => <option key={key} value={lang.prop}>{lang.name}</option>)}
				</select>
				<p>&copy; Copyright 2020</p>
				</div>
			</footer>
		</>
	)
}

export default Footer
