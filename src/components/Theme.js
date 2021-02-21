import React, { useEffect, useState } from 'react'

const font = "'Acme', sans-serif";

const themes = {
  dark: {
    backgroundColor: 'black',
    color: 'white',
    fontFamily: font,

  },
  light: {
    backgroundColor: 'white',
    color: 'black',
    fontFamily: font,

  }
}

const initialState = {
  dark: false,
  theme: themes.light,
  toggle: () => { }
}

const ThemeContext = React.createContext(initialState)

function ThemeProvider({ children }) {
  const [dark, setDark] = useState(false)

  useEffect(() => {
    const isDark = localStorage.getItem('dark') === 'true'
    setDark(isDark)
  }, [dark])
  // To toggle between dark and light modes
  const toggle = () => {
    const isDark = !dark
    localStorage.setItem('dark', JSON.stringify(isDark))
    setDark(isDark)
  }

  const theme = dark ? themes.dark : themes.light

  return (
    <ThemeContext.Provider value={{ theme, dark, toggle }}>
      {children}
    </ThemeContext.Provider>
  )
}

export { ThemeProvider, ThemeContext }