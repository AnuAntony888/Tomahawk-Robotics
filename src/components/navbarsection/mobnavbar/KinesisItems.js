import React, { useState } from 'react'
import "./Kinesisitems.css"
import {Menuitems} from '../Menuitems'


const KinesisItems = () => {
    const [click,setClick] = useState(false)


    const handleClick = ()=>{
      setClick(!click)
    }

  return (
    <div>
      <ul onClick={handleClick} 
      className={click?"dropdown-menumob clicked":"dropdown-menumob"}>
        {Menuitems.map((item,index)=>(
          <li key={index} >
            <a  href="/" >{item.title}</a>
           
          </li>
        ))}

      </ul>
    </div>
  )
}

export default KinesisItems