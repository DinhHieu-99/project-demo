import React, { useState } from 'react'
import {AiOutlineDelete} from 'react-icons/ai'
import {GiSaveArrow} from 'react-icons/gi'

const TodoList = () => {
    const [text, setText] = useState("")
    const [items,setItems] = useState([])
    function addItem(){

        if(!text){
            return
        }
        const item = {
            value: text,
            id: Date.now()
        }
        setItems(newItem => [...newItem, item])
        setText("")
    }

    function deleteItem(id){
        const newArr = items.filter(item => item.id !== id)
        setItems(newArr)
    }
    return (
        <div>   
            <h1>*TodoList</h1>
            <input 
            type="text"
            placeholder='add item'
            value={text}
            onChange={e => setText(e.target.value)}
            />
            <button onClick={addItem}><GiSaveArrow/></button>

            <ul>
            {items.map(item =>{
                       return(
                       <li key={item.id}>{item.value} <button onClick={() => deleteItem(item.id)}><AiOutlineDelete/></button></li>
                       )
                   })}
            </ul>
        </div>
        
    )
}

export default TodoList