import React, { createContext } from 'react'
import { useState } from 'react'

const initialContext = {
  themeColor: {},
  setBlueTheme: () => {},
  setGreenTheme: () => {},
  setRedTheme: () => {},
  setYourTheme: (value: any) => {},
}

const themeContextValue = {
  blueTheme: { backgroundColor: 'blue' },
  greenTheme: { backgroundColor: 'green' },
  redTheme: { backgroundColor: 'red' },
  yourTheme: { backgroundColor: '' },
}

export const ThemeContext = createContext(initialContext)

export const ContextProvider = (props: any) => {
  const [theme, setTheme] = useState(themeContextValue.blueTheme)
  const changeColor = (e: any) => {
    setTheme({ backgroundColor: e })
  }

  return (
    <ThemeContext.Provider
      value={{
        themeColor: theme,
        setBlueTheme: () => setTheme(themeContextValue.blueTheme),
        setGreenTheme: () => setTheme(themeContextValue.greenTheme),
        setRedTheme: () => setTheme(themeContextValue.redTheme),
        setYourTheme: (value: any) => changeColor(value),
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  )
}
