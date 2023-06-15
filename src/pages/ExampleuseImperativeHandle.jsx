import React, { useEffect, useRef } from 'react'
import Video from '../components/Video'
import {BsFillPlayFill, BsFillPauseFill} from 'react-icons/bs'


//luôn luôn đi với useRef và forwardRef tác dụng của useImperativeHandle  là tăng tính đóng gói và an toàn
// bảo mật các DOM ko show ra ngoài hết khi ta dùng useRef truyền ngoài function component cha
const ExampleuseImperativeHandle = () => {

  const videoRef = useRef()

  useEffect(()=>{
    console.log(videoRef.current)
  })

  const handlePlay = () =>{
    videoRef.current.play()
  }

  const handlePause = () =>{
    videoRef.current.pause()
  }

  return (
    <div className='content'>
      {/* do function component không có ref nên khi truyền qua Video là undefind */}
      <Video ref={videoRef}/>
      <button onClick={handlePlay}><BsFillPlayFill/></button>
      <button onClick={handlePause}><BsFillPauseFill/></button>
    </div>
  )
}

export default ExampleuseImperativeHandle