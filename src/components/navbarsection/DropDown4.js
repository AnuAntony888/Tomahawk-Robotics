import React, { useState } from 'react'
import {Menuitems} from './Menuitems'
import "./DropDown4.css"

const DropDown4 = () => {

    const [click,setClick] = useState(false)


    const handleClick = ()=>{
      setClick(!click)
    }
  
  return (
    <div>

<ul onClick={handleClick} 
      className={click?"dropdown-menu4 clicked":"dropdown-menu4"}>
        {Menuitems.map((item,index)=>(
          <li key={index} >
            <a  href="/" >{item.title3}</a>
           
          </li>
        ))}

      </ul>
    </div>
  )
}

export default DropDown4