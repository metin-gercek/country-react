import React from 'react'
import { ContextProvider } from './context/themeContext'
import SideBar from './pages/SideBar'
import Routes from './Routes'

export default function App() {
  return (
    <ContextProvider>
      <Routes>
        <SideBar />
      </Routes>
    </ContextProvider>
  )
}
