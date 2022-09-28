import { Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText,Grid } from '@mui/material'
import React, { useState } from 'react'
import { Button, Form, Input, Select } from 'semantic-ui-react'
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { TiSocialLinkedin,TiSocialTwitter,TiSocialYoutube } from "react-icons/ti";
import { IoIosClose } from "react-icons/io"
import { textAlign } from '@mui/system';
const DrawerIcon = () => {
  const [open,setOpen] = useState(false)
  return (
    <div>
      <Grid container sx={{ display: { xs: 'none', sm:"none", md:"flex", lg: 'flex', xl: 'flex' } }} >
       <Drawer anchor='right' PaperProps={{
        sx:{backgroundColor:"black",width:"380px"}
       }} open={open}  >
        <IconButton sx={{justifyContent:"end" ,fontSize:"60px",color:"#fff"}} onClick={()=>setOpen(false)}><IoIosClose/></IconButton>     
       <List >
        
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
  style={{   width:"80%" , borderColor:"#fff", height:"40px", marginLeft:"30px" ,background:"transparent" ,marginTop:"4px",color:"#fff",border:"2px solid"}}  control='select'>
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
        
        </Drawer>
<IconButton sx={{marginLeft:'auto',marginRight:'auto',fontSize:"40px",color:"#fff"}} onClick={()=>setOpen(true)}>
 <HiOutlineMenuAlt3/>
  </IconButton>
  </Grid>


{/* tab */}

  




    </div>
  )
}



export default DrawerIcon