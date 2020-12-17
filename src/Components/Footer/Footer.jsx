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
				<select defaultValue={language} onChange={evt => setLanguage(evt.target.value)}>
					{languages.map((lang, key) => <option key={key} value={lang.prop}>{lang.name}</option>)}
				</select>
				{children}
			</footer>
		</>
	)
}

export default Footer
