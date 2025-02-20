import { createContext, useState } from 'react'
import Son from './components/Son'

export const ThemeContext = createContext(null)
const ThemeProvider = ThemeContext.Provider
export default function App() {
  const [contextValue, setContextValue] = useState({ color:'#ccc', background:'pink' })

  return (
    <div>
      <ThemeProvider value={contextValue}>
        <Son />
      </ThemeProvider>
      <button onClick={() => setContextValue({ color:'#fff', background: 'blue' })}>切换主题</button>
    </div>
  )
}
