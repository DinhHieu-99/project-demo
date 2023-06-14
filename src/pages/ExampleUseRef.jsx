import React, { useRef, useState } from 'react'

const ExampleUseRef = () => {
    const [count, setCount] = useState(60)
    //giá trị undefind
    let timerID = useRef()
    const handleStart = () =>{
        //gắn giá trị count mỗi lần return cho timerID còn current là bắt buộc phải có khi dùng useRef
        // và giá trị trả về luôn là object nên current là property
        timerID.current = setInterval(()=>{
            setCount(prev=>prev - 1)
        },1000)
    }
    const handleStop = () =>{
        clearInterval(timerID.current);
    }
  return (
    <div className='content'>
        <h1>{count}</h1>
        <button onClick={handleStart}>Start</button>
        <button onClick={handleStop}>Stop</button>
        <br />
        <span>Khi gán giá trị cho useRef thì render bao nhiêu lần giá trị cũng không thay đổi cũng có 
            thể hiểu là giá trị được đưa ra ngoài luồng nền ngoài component nên component render thì 
            không thể render lại giá trị gán useRef</span>
    </div>
  )
}

export default ExampleUseRef