import { createContext, useState, useEffect } from 'react'

const LanguageContext = createContext()

const LanguageProvider = ({ children }) => {

  const [language, setLanguage] = useState(window.localStorage.getItem('language') || 'en')

  useEffect(() => {
      window.localStorage.setItem('language', language)
  }, [
      language
  ]);

  return (
    <LanguageContext.Provider value={{language, setLanguage}}>
      {children}
    </LanguageContext.Provider>
  )
}

export {
  LanguageContext,
  LanguageProvider,
}
