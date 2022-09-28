import React, { useState } from 'react'
import {Menuitems} from './Menuitems'
import "./DropDown2.css"

const DropDown2 = () => {

    const [click,setClick] = useState(false)


    const handleClick = ()=>{
      setClick(!click)
    }
  
  return (
    <div>

<ul onClick={handleClick} 
      className={click?"dropdown-menu2 clicked":"dropdown-menu2"}>
        {Menuitems.map((item,index)=>(
          <li key={index} >
            <a  href="/" >{item.title1}</a>
           
          </li>
        ))}

      </ul>
    </div>
  )
}

export default DropDown2