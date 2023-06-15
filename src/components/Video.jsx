import { forwardRef, useImperativeHandle } from 'react'
import { useRef } from 'react'
import video from '../assets/video.mp4'
                  //đối số thứ 2
const Video = (props,ref) => {

  const videoRef = useRef()
            //luôn có 1 ref, 1 function và 1 deps
  useImperativeHandle(ref,()=>({
    play(){
      videoRef.current.play()
    },
    pause(){
      videoRef.current.pause()
    }
  }))
  return (
    <div>    
        {/* ref bây giờ chỉ có 2 thuộc tính là play và pause */}
        <video ref={videoRef} src={video}></video>
    </div>
  )
}
//vì thế ta dùng forwardRef để truyền trực tiếp đối số và bắt buộc phải là đối số thứ 2
export default forwardRef(Video)