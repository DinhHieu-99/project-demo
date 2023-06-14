import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import ExampleUstate from './pages/ExampleUseState'
import ExampleUseEffect from './pages/ExampleUseEffect'
import ExampleuseImperativeHandle from './pages/ExampleuseImperativeHandle'
import ExampleUseCallback from './pages/ExampleUseCallback'
import ExampleUseMemo from './pages/ExampleUseMemo'
import ExampleUseContext from './pages/ExampleUseContext'
import ExampleUseRef from './pages/ExampleUseRef'


function App() {

  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
          <Route index path='usestate' element={<ExampleUstate/>}/>
          <Route path='useeffect' element={<ExampleUseEffect/>}/>
          <Route path='usecontext' element={<ExampleUseContext/>}/>
          <Route path='useref' element={<ExampleUseRef/>}/>
          <Route path='usecallback' element={<ExampleUseCallback/>}/>
          <Route path='usememo' element={<ExampleUseMemo/>}/>
          <Route path='useimperativeHandle' element={<ExampleuseImperativeHandle/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
