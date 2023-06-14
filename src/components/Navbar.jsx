import React from 'react'
import {links} from '../../data'
import {  NavLink } from 'react-router-dom'
import './navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
        <ul>
            {
                links.map(({name,path},index)=>{
                    return(
                        <li key={index}>
                            <NavLink to={path} className={({isActive}) => isActive ? 'active-nav' : ''}>{name}</NavLink>
                        </li>
                    )
                })
            }
        </ul>
    </div>
  )
}

export default Navbar