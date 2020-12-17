import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

import { ThemeProvider } from './ThemeContext'
import { LanguageProvider } from './LanguageContext'

ReactDOM.render(
	<React.StrictMode>
		<ThemeProvider>
			<LanguageProvider>
				<App />
			</LanguageProvider>
		</ThemeProvider>
	</React.StrictMode>,
	document.getElementById('root')
)
