import React, { useState } from 'react'
import { Button, Form, Input, Select } from 'semantic-ui-react'
import { Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText,Grid, Divider } from '@mui/material'
import { TiSocialLinkedin,TiSocialTwitter,TiSocialYoutube } from "react-icons/ti";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoIosClose } from "react-icons/io"
import "./Draweri.css"
import KinesisItems from './mobnavbar/KinesisItems';
import Productsitems from './mobnavbar/Productsitems';
import Solutionitem from './mobnavbar/Solutionitem';
import Companyitems from './mobnavbar/Companyitems';


const DrawerI = () => {
    const [open,setOpen] = useState(false)

    const [click,setClick] = useState(false)


    const handleClick = ()=>{
      setClick(!click)
    }

    const [click2,setClick2] = useState(false)


    const handleClick2 = ()=>{
      setClick2(!click2)
    }   


    const [click3,setClick3] = useState(false)


    const handleClick3 = ()=>{
      setClick3(!click3)
    }   
    const [click4,setClick4] = useState(false)


    const handleClick4 = ()=>{
      setClick4(!click4)
    }  



 

  return (
    <div>

<Grid container sx={{ display: { sm: 'flex', xs:"flex", md:"none", lg: 'none', xl: 'none' } }} >

       <Drawer anchor='right' PaperProps={{
        sx:{backgroundColor:"black",width:"380px"}
       }} open={open}  >
        <IconButton sx={{justifyContent:"end" ,fontSize:"60px",color:"#fff"}} onClick={()=>setOpen(false)}><IoIosClose/></IconButton>     
        <div className='drawermob'>
       <List >
       <ListItem sx={{marginTop:"40px"}} >
             <ListItemButton  >
               
             <ListItemIcon> <ListItemText  sx={{color:"#fff"}} >
             <p  style={{marginTop:"-30px",justifyContent:"space-between"}}>KINESIS <i style={{marginLeft:"200px"}} onClick={handleClick} class="fa fa-plus" aria-hidden="true"></i>
             {click && <KinesisItems/>}
             </p>


               </ListItemText></ListItemIcon>  
             </ListItemButton>
           </ListItem>
           <ListItem>
             <ListItemButton >
               
             <ListItemIcon> <ListItemText  sx={{color:"#fff"}} >
             <p style={{marginTop:"-30px"}}>PRODUCTS<i style={{marginLeft:"180px"}}  onClick={handleClick2} class="fa fa-plus" aria-hidden="true"></i>
             {click2 && < Productsitems/>}
             </p>

               </ListItemText></ListItemIcon>  
             </ListItemButton>
           </ListItem>
           <ListItem>
             <ListItemButton >
               
             <ListItemIcon> <ListItemText  sx={{color:"#fff"}} >
             <p style={{marginTop:"-30px"}}>SOLUTIONS <i style={{marginLeft:"173px"}} onClick={handleClick3} class="fa fa-plus" aria-hidden="true"></i>
             {click3 && < Solutionitem/>}
             </p>
           
               </ListItemText></ListItemIcon>  
             </ListItemButton>
           </ListItem>
           <ListItem>
             <ListItemButton >
               
             <ListItemIcon> <ListItemText  sx={{color:"#fff"}} >
             <p style={{marginTop:"-30px"}}>COMPANY<i style={{marginLeft:"192px"}} onClick={handleClick4} class="fa fa-plus" aria-hidden="true"></i>
             {click4 && <Companyitems/>}
             </p>

               </ListItemText></ListItemIcon>  
             </ListItemButton>
           </ListItem>
           <div style={{color:"#fff",width:"85%",marginLeft:"30px",height:"1px"}}> <hr/></div>
             <ListItem>
             <ListItemButton >
               
             <ListItemIcon> <ListItemText  sx={{color:"#fff"}} >
             <button className='navbut'>MY ACCOUNT</button>

               </ListItemText></ListItemIcon>  
             </ListItemButton>
           </ListItem>
           <ListItem>
             <ListItemButton >
               
             <ListItemIcon> <ListItemText  sx={{color:"#fff"}} >
             <p className='navtxt'>CONTACT US</p>

               </ListItemText></ListItemIcon>  
             </ListItemButton>
           </ListItem>
         
           <Form style={{  color:"#fff"}}>
  
    <Form.Group widths='equal' >
    <p style={{color:'#fff',fontSize:"13px", marginLeft:"30px",   fontFamily: "Roboto" }}>WHICH&nbsp;TEAM&nbsp;CAN&nbsp;BEST&nbsp;ASSIST?*</p>
    <Form.Field  
  style={{   width:"80%" , borderColor:"#fff", height:"40px", marginLeft:"30px" ,background:"transparent" ,marginTop:"-20px",color:"#fff",border:"2px solid"}}  control='select'>
        <option style={{background:"black"}}  value='male'>Please Select</option> 
        <option style={{background:"black"}}  value='male'>Support</option>
        <option  style={{background:"black"}}  value='female'>Sales</option>
        <option   style={{background:"black"}} value='female'>Other</option>
      </Form.Field>
   
      
    
    </Form.Group>
    <p style={{color:'#fff',fontSize:"12px", marginLeft:"30px", letterSpacing:"2px", marginTop:"20px" ,  fontFamily: "Roboto" }}>FIRST NAME* <span style={{marginLeft:"70px"}}>LAST NAME*</span> </p>  
      <input style={{backgroundColor:"black", border:"2px solid", borderColor:"#fff" ,marginLeft:"30px" ,  height:"45px",width:"35%"}} type="text" />     
      <input style={{backgroundColor:"black", border:"2px solid", borderColor:"#fff" ,marginLeft:"30px" , height:"45px",width:"35%"}} type="text" /> 
      <p style={{color:'#fff',fontSize:"12px", marginLeft:"30px", letterSpacing:"2px", marginTop:"20px" ,  fontFamily: "Roboto" }}>COMPANY/ORGANIZATION*</p>
      <input style={{backgroundColor:"black", border:"2px solid", borderColor:"#fff" ,marginLeft:"30px" , height:"45px",width:"80%"}} type="text" /> 
      <p style={{color:'#fff',fontSize:"12px", marginLeft:"30px", letterSpacing:"2px", marginTop:"20px" ,  fontFamily: "Roboto" }}>EMAIL*</p>
      <input style={{backgroundColor:"black", border:"2px solid", borderColor:"#fff" ,marginLeft:"30px" , height:"45px",width:"80%"}} type="text" />
      <p style={{color:'#fff',fontSize:"12px", marginLeft:"30px", letterSpacing:"2px", marginTop:"20px" ,  fontFamily: "Roboto" }}>HOW CAN WE HELP?</p>
      <input style={{backgroundColor:"black", border:"2px solid", borderColor:"#fff" ,marginLeft:"30px" ,  height:"30vh",width:"80%"}} type="textarea" />  
      <button  className='navbut2'>SUBMIT</button>
     
    </Form>
    <div style={{color:"#fff" ,justifyContent:"center", textAlign:"center",marginTop:"50px", marginLeft:"200px", fontSize:"25px"}}> <TiSocialLinkedin/> <TiSocialTwitter/> <TiSocialYoutube/></div>
      


      
       
          
        </List>
        </div>
        </Drawer>
<IconButton sx={{marginLeft:'auto',marginRight:'auto',fontSize:"40px",color:"#fff"}} onClick={()=>setOpen(true)}>
 <HiOutlineMenuAlt3/>
  </IconButton>

  </Grid>












    </div>
  )
}

export default DrawerI