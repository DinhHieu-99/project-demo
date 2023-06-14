import React, { createContext, useState } from 'react'
import {BsSun, BsFillMoonFill} from 'react-icons/bs'
import Content from '../components/Content'
import '../components/test.css'
import Dark from '../assets/dark.png'
import Light from '../assets/light.jpg'

export const ThemeContext =createContext()
const ExampleUseContext = () => {
 
  const [theme, setTheme] = useState('dark')
  const [src, setSrc] = useState(Dark)
  const themeLight = () =>{
    setTheme('light')
    setSrc(Light)
  }
  const themeDark = () =>{
    setTheme('dark')
    setSrc(Dark)
  }
  return (
    <ThemeContext.Provider value={src}>
    <div className='content'>
      <button className='sun' onClick={themeLight}><BsSun/></button>
      <button className='moon' onClick={themeDark}><BsFillMoonFill/></button>
      <Content/>
    </div>
    </ThemeContext.Provider>
  )
}

export default ExampleUseContext