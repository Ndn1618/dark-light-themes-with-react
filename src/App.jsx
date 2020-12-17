import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'

import Login from './Components/Login/Login'

import { languages } from './Options'

function App () {

	return (
		<>
			<Header />

			<select>
				{languages.map((lang, key) => <option key={key} value={lang.prop}>{lang.name}</option>)}
			</select>

			<Login />

			<Footer>
				<p>&copy; Copyright 2020</p>
			</Footer>
		</>
	)
}

export default App
