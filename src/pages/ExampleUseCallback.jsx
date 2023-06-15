import React, { useCallback, useState } from 'react'
import Content from '../components/Content'


//UseCallback Là một react hooks giúp mình tạo ra một memoized callback và chỉ tạo ra callback mới 
//khi dependencies thay đổi, giảm thiểu số lượng lần render lại của component dùng cho function
const ExampleUseCallback = () => {
  const [count, setCount] = useState(0)
  const handleIncrease = useCallback(()=>{
    setCount(prev=>prev +1)
  },[])
  return (
    <div className='content'>
      <h1> {count}</h1>
      <Content onIncrease={handleIncrease}/>
    </div>
  )
}

export default ExampleUseCallback