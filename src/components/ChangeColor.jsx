import React, { useState } from 'react'
import RedCar from '../assets/xedo.png'
import BlackCar from '../assets/xeden.png'
import BlueCar from '../assets/xexanh.png'
const ChangeColor = () => {
    const [color, setColor] = useState(RedCar)
  return (
    <div>
        <h1>*Change Color</h1>
        <img src={color} alt="" />
        <button onClick={()=>setColor(BlueCar)}>Xe Xanh</button>
        <button onClick={()=>setColor(BlackCar)}>Xe Đen</button>
        <button onClick={()=>setColor(RedCar)}>Xe Đỏ</button>
    </div>
  )
}

export default ChangeColor