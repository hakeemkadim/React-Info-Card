import { useState } from 'react'
import Header from './compents/Header'
export default function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
     <Header/>
    </div>
    
  )
}

 
