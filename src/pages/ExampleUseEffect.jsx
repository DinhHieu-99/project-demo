import React, { useEffect, useState } from 'react'

const ExampleUseEffect = () => {
  const [data, setData] = useState([])
  const [type, setType] = useState('users')
  const [avatar, setAvatar] = useState()
  const tabs = [ 'users','posts', 'comments']

  //đổi avatar

  useEffect(()=>{
    //sử dụng cleanup xóa giá trị trước đã truyền vào tránh rò rỉ bộ nhớ
    return () =>{
      //do avatar = file nên avatar lấy dc preview
      avatar && URL.revokeObjectURL(avatar.preview)
    }
  })

  const handleChangeAvatar = (e) =>{
    const file = e.target.files[0]
    //tạo một URL tạm gán vào file và tạo attribute là preview
    file.preview = URL.createObjectURL(file)
    
    //set avataer = file (là đường dẫn tạm)
    setAvatar(file)
  }

  //đổi màu bg
  useEffect(()=>{
    const handleScroll = () =>{
      if (window.scrollY >= 200) {
          document.body.style.backgroundColor = "#3bc2d1"
      }else{
        document.body.style.backgroundColor = "#0e1538"
      }
    }
    window.addEventListener('scroll',handleScroll)
  },[])

  //Call API
  useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then(res => res.json())
      .then(data =>{
        setData(data)
      })
  },[type])
  return (
    <div className='content'>
      <div>
        <input type="file" onChange={handleChangeAvatar}/>
        {avatar && (<img src={avatar.preview} alt='' width='60%'/>)}
      </div>
      <div className='call-api'>
        {
          tabs.map((tab)=>(
            <button 
            key={tab} 
            onClick={()=>setType(tab)}
            style={type === tab ? {color : '#fff', backgroundColor: "#333"} : {}}
            >{tab}</button>
          ))
        }
      </div>
      <div>
        {
          data.map((post)=>(
            <li key={post.id}>{post.title || post.name}</li>
          ))
        }
      </div>
    </div>
  )
}

export default ExampleUseEffect