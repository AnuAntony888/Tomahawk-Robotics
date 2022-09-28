import React, { useState } from 'react'
import { AppBar, Grid, Toolbar, Tab,Tabs,Typography, Button,  } from '@mui/material';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import { Box } from '@mui/system';
import DrawerIcon from './DrawerIcon';
// import { useTheme } from '@emotion/react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import "./Navbar.css"
import {FaAngleDown } from 'react-icons/fa';
import Logo from "../images/logo.png"
import { Dropdown, TextArea } from 'semantic-ui-react';
import DrawerI from './DrawerI';
import DropDown from './DropDown';
import DropDown2 from './DropDown2';
import DropDown3 from './DropDown3';
import DropDown4 from './DropDown4';

const Navbar = ({links}) => {
  const theme = useTheme()
  console.log(theme)
  const isMatch =  useMediaQuery(theme.breakpoints.down('1024px'))
  const [value,setValue]=useState("")

  const [dropdown,setDropdown] =  useState(false)
  const [dropdown2,setDropdown2] =  useState(false)
  const [dropdown3,setDropdown3] =  useState(false)
  const [dropdown4,setDropdown4] =  useState(false)


  const onMouseenter4 = ()=>{
    if(window.innerWidth < 960){
      setDropdown4(false)
    }else{
      setDropdown4(true)
    }
      }
  
      const onMouseleave4 = ()=>{
        if(window.innerWidth < 960){
          setDropdown4(false)
        }else{
          setDropdown4(false)
        }
          }



  
  const onMouseenter3 = ()=>{
    if(window.innerWidth < 960){
      setDropdown3(false)
    }else{
      setDropdown3(true)
    }
      }
  
      const onMouseleave3 = ()=>{
        if(window.innerWidth < 960){
          setDropdown3(false)
        }else{
          setDropdown3(false)
        }
          }






 const onMouseenter2 = ()=>{
  if(window.innerWidth < 960){
    setDropdown2(false)
  }else{
    setDropdown2(true)
  }
    }

    const onMouseleave2 = ()=>{
      if(window.innerWidth < 960){
        setDropdown2(false)
      }else{
        setDropdown2(false)
      }
        }
      


  const onMouseenter = ()=>{
if(window.innerWidth < 960){
  setDropdown(false)
}else{
  setDropdown(true)
}
  }


  const onMouseleave = ()=>{
    if(window.innerWidth < 960){
      setDropdown(false)
    }else{
      setDropdown(false)
    }
      }
    

 const [color,setColor] = useState(false)
 const  changeColor = ()=>{
  if(window.scrollY >= 90){
    setColor(true)
  }
  else{
    setColor(false)
  }
 }    
 window.addEventListener('scroll',changeColor)



  return (
    <div>
      <div >
       <AppBar id={color? "appbar1":"appbar"} sx={{boxShadow:"none"}}>
        <Toolbar> 
         <Grid container className='class' sx={{ display: { xs: 'none', lg: 'flex' } }}	>
          <Grid item xs={2} >
<img src={Logo} style={{width:"200px",marginTop:"7px"}}  alt="" srcset="" />
          </Grid>
          <Grid item xs={1} />
          <Grid item xs={1} />
          <Grid item xs={1} />
         
          <Grid item xs={6} sx={{display:"flex", justifyContent:"end",alignItems:"center"}}>
          
          <Grid item xs={2} onMouseEnter={onMouseenter} onMouseLeave={onMouseleave}>
           
         <a href="/" className='links'  sx={{}} >KINESIS  <i style={{color:"white"}} class="fa fa-angle-down" aria-hidden="true"></i></a>
         {dropdown && <DropDown/>}
          </Grid>
      
          &nbsp; 
          <Grid item xs={2} onMouseEnter={onMouseenter2} onMouseLeave={onMouseleave2} >
          <a href="/" className='links' >PRODUCTS  <i style={{color:"white"}} class="fa fa-angle-down" aria-hidden="true"></i></a>
          {dropdown2 && <DropDown2/>}
          </Grid>
          &nbsp; &nbsp; &nbsp; &nbsp;
          <Grid item xs={2} onMouseEnter={onMouseenter3} onMouseLeave={onMouseleave3}>
          <a href="/" className='links' sx={{}}>SOLUTIONS <i style={{color:"white"}} class="fa fa-angle-down" aria-hidden="true"></i> </a>
          {dropdown3 && <DropDown3/>}
          </Grid>
          &nbsp; &nbsp; &nbsp; &nbsp;
          <Grid item xs={2} onMouseEnter={onMouseenter4} onMouseLeave={onMouseleave4}>
          <a href="/" className='links' sx={{}}>COMPANY  <i style={{color:"white"}} class="fa fa-angle-down" aria-hidden="true"></i> </a>
          {dropdown4 && <DropDown4/>}
          </Grid>
    

         </Grid>
         
         <Grid sx={{}}>
   
   <Typography   style={{color:"#fff",fontSize:"40px",background:"transparent" ,justifyContent:"end", marginLeft:"40px"}}><DrawerIcon/> </Typography>
   
   
     </Grid>
            

  

          </Grid>


{/* 1024 */}

          <Grid container className='class' sx={{ display: { xs: 'none', lg: 'none', md:"flex" } }}	>
          <Grid item xs={2} >
<img src={Logo} style={{width:"200px",marginTop:"7px"}}  alt="" srcset="" />
          </Grid>
          <Grid item xs={3} />
         
         
          <Grid item xs={6} sx={{display:"flex", justifyContent:"end",alignItems:"center"}}>
          
          <Grid item xs={3} onMouseEnter={onMouseenter} onMouseLeave={onMouseleave}>
           
         <a href="/" className='links' style={{fontSize:"15px" }} >KINESIS <i style={{color:"white"}} class="fa fa-angle-down" aria-hidden="true"></i></a>
         {dropdown && <DropDown/>}
          </Grid>
          &nbsp; 
          <Grid item xs={3} onMouseEnter={onMouseenter2} onMouseLeave={onMouseleave2} >
          <a href="/" className='links' style={{fontSize:"15px"}} >PRODUCTS <span><i style={{color:"white"}} class="fa fa-angle-down" aria-hidden="true"></i></span> </a>
          {dropdown2 && <DropDown2/>}
          </Grid>
          &nbsp; &nbsp; &nbsp; &nbsp;
          <Grid item xs={3} onMouseEnter={onMouseenter3} onMouseLeave={onMouseleave3}>
          <a href="/" className='links' style={{fontSize:"15px"}} >SOLUTIONS <i style={{color:"white"}} class="fa fa-angle-down" aria-hidden="true"></i> </a>
          {dropdown3 && <DropDown3/>}
          </Grid>
          &nbsp; &nbsp; &nbsp; &nbsp;
          <Grid item xs={3} onMouseEnter={onMouseenter4} onMouseLeave={onMouseleave4}>
          <a href="/" className='links' style={{fontSize:"15px"}} >COMPANY  <i style={{color:"white"}} class="fa fa-angle-down" aria-hidden="true"></i> </a>
          {dropdown4 && <DropDown4/>}
          </Grid>
    

         </Grid>
         
         <Grid sx={{}}>
   
   <Typography   style={{color:"#fff",fontSize:"40px",background:"transparent" ,justifyContent:"end", marginLeft:"20px"}}><DrawerIcon/></Typography>
   
   
     </Grid>
            

  

          </Grid>
         



         {/* tab  */}
<Grid container className='phoneclass' sx={{ display: { xs: 'none', sm:"flex" , md:"none", lg: 'none', xl: 'none' } }}>
<Grid item xs={11} sm={11} >
<img src={Logo} style={{width:"200px",marginTop:"7px"}}  alt="" srcset="" />
          </Grid>
 <Grid item xs={1} sm={1}>
  
      
<Typography  style={{color:"#fff",fontSize:"40px",background:"transparent" ,   display: "flex",justifyContent:"end", alignItems:"end",textAlign:"end"}}> <DrawerI/></Typography>
</Grid> 
</Grid>


{/* mob */}

 <Grid container className='phoneclass' sx={{ display: { xs: 'flex', sm:"none" , md:"none", lg: 'none', xl: 'none' } }}>
<Grid item xs={10} sm={10} >
<img src={Logo} style={{width:"200px",marginTop:"7px"}}  alt="" srcset="" />
          </Grid>
 <Grid item xs={2} sm={2}>
  
      
<Typography id="responsive"  style={{color:"#fff",fontSize:"40px",background:"transparent" ,justifyContent:"center", alignItems:"center",textAlign:"center"}}> <DrawerI/></Typography>
</Grid> 
</Grid> 

 </Toolbar>
      </AppBar> 




    </div>
    </div>
  )
}

export default Navbar