import React, { useState } from 'react'
import { useContext } from 'react'
import { ThemeContext } from '../pages/ExampleUseContext'
import { memo } from 'react'

const Content = ({onIncrease}) => {
    const src = useContext(ThemeContext)
    console.log('re-render')
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
        <br />
        <h1>Phần này là của useCallback</h1>
        <h2>Nếu nhấn Click Me mà log ra hơn 1 dòng re-render bên component Content thì chưa sử dụng useCallback</h2>
        <button onClick={onIncrease}>Click Me</button>
    </div>
  )
}

export default memo(Content)