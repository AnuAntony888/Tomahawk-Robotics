import React,{useState} from 'react'
import "./Kinesisitems.css"
import {Menuitems} from '../Menuitems'


const Companyitems = () => {
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
            <a  href="/" >{item.title3}</a>
           
          </li>
        ))}

      </ul>
    </div>
  )
}

export default Companyitems