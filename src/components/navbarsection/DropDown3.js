import React, { useState } from 'react'
import {Menuitems} from './Menuitems'
import "./DropDown3.css"

const DropDown3 = () => {

    const [click,setClick] = useState(false)


    const handleClick = ()=>{
      setClick(!click)
    }
  
  return (
    <div>

<ul onClick={handleClick} 
      className={click?"dropdown-menu3 clicked":"dropdown-menu3"}>
        {Menuitems.map((item,index)=>(
          <li key={index} >
            <a  href="/" >{item.title2}</a>
           
          </li>
        ))}

      </ul>
    </div>
  )
}

export default DropDown3