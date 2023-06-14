import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from '../pages/ExampleUseContext'

const Content = () => {
    const src = useContext(ThemeContext)
  return (
    <div>
        <div>
        useContext is a React Hook that lets you read and subscribe to context from your component.
        useContext returns the context value for the calling component. It is determined as the value
         passed to the closest SomeContext.Provider above the calling component in the tree. If there
          is no such provider, then the returned value will be the defaultValue you have passed to
           createContext for that context. The returned value is always up-to-date. React automatically 
           re-renders components that read some context if it changes.
        </div>
        <img src={src} alt="" />
    </div>
  )
}

export default Content