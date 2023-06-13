import React, { useState } from 'react'



const Count = () => {
    const [count, setCount] = useState(0)
  return (
    <div>
        <h1>*Count</h1>
        <h1>{count}</h1>
        <button onClick={()=>count > 0 ? setCount(count - 1) : 0}>-</button>
        <button onClick={()=>setCount(count + 1)}>+</button>
    </div>
  )
}

export default Count