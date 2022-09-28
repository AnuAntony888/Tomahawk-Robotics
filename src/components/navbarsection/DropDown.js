import React, { useState } from 'react'
import {Menuitems} from './Menuitems'
import "./DropDown.css"

const DropDown = () => {
  const [click,setClick] = useState(false)


  const handleClick = ()=>{
    setClick(!click)
  }


 

  return (
    <div>
  <ul onClick={handleClick} 
      className={click?"dropdown-menu clicked":"dropdown-menu"}>
        {Menuitems.map((item,index)=>(
          <li key={index} >
            <a  href="/" >{item.title}</a>
           
          </li>
        ))}

      </ul>
    </div>
 )
}

export default DropDown