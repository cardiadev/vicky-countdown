import { useState } from 'react'
import './App.css'
import Counter from './components/Counter'

function App() {

  return (
    <div className='flex items-center justify-center h-screen'>
        {/* <Counter date="2023-04-15T23:59:59"/> */}
        {/* <Counter date="2023-05-19T11:59:59"/> */}
        <Counter date="2024-10-30T15:00:00"/>
      </div>

  )
}

export default App
