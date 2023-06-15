import React, { useMemo, useRef, useState } from 'react'

const ExampleUseMemo = () => {
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [products, setProducts] = useState([])
  const nameRef = useRef()
  const handleSubmit = () =>{
    setProducts([...products,{name,price:+price}])
    setName('')
    setPrice('')

    nameRef.current.focus()
  }
  const total = useMemo(()=>{
    const result = products.reduce((result,product)=>{
        return result + product.price
    },0)
    return result
  },[products])
  console.log(products)
  return (
    <div className='content'>
        <input ref={nameRef} type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder='Nhập tên sản phẩm...'/>
        <br />
        <input type="text" value={price} onChange={(e)=>setPrice(e.target.value)} placeholder='Nhập giá'/>
        <br />
        <button onClick={handleSubmit}>Add</button>
        <br />
        Total: {total}
        <ul>
        {
          products.map((product,index)=>(
            <li key={index}>{product.name} - {product.price}</li>
          ))
        }
        </ul>
    </div>
  )
}

export default ExampleUseMemo