import { Grid } from '@mui/material'
import React from 'react'
import "./Footer.css"
import footlogo from "../images/white-t-logo-_web_.png"

const Footer = () => {
  return (
    <div>

    <div  className='footer'>
    <Grid container spacing={2} >
  <Grid item xs={12} sm={6} md={3} lg={3}>
   <div className='footimage'>
<img src={footlogo} alt="" srcset="" />
</div>

  </Grid>
  <Grid item xs={12} sm={6} md={4} lg={4}>
<div className='foottext'>
    <p className='fottext0' >KINESIS SOFTWARE</p>
    <p className='fottext1'>CONTROLLERS</p>
    <p className='fottext2'>DATALINKS</p>
    <p className='fottext3'>EDGE DEVICES</p>
</div>

  </Grid>
  <Grid item xs={12} sm={6} md={3} lg={3}>
<div className='footsectext'>
   
    <p className='fotsectext1'>DEFENSE</p>
    <p className='fotsectext2'>DEVELOPERS</p>
    <p className='fotsectext3'>SYSTEM BUILDER</p>
</div>

  </Grid>
  <Grid item xs={12} sm={6} md={2} lg={2}>
<div className='footthirdtext'>
   
    <p className='fotthirdtext1'>CAREERS</p>
    <p className='fotthirdtext2'>TEAM</p>
    <p className='fotthirdtext3'>NEWS</p>
</div>

  </Grid>
  </Grid>


  <Grid item xs={12} sm={6} md={6} lg={6} sx={{ display: { xs: 'flex', sm: 'none', md: 'none',lg:'none' } }}>
<div className='footlasticon'>
   <p><i class="fa fa-twitter" aria-hidden="true"></i> <i class="fa fa-linkedin" aria-hidden="true"></i> <i class="fa fa-youtube-play" aria-hidden="true"></i></p>



</div>

  </Grid>
  

  <Grid container spacing={2}>
  <Grid item xs={12} sm={6} md={6} lg={6}>
<div className='footlasttext'>
   <p>© 2022 Tomahawk Robotics | All Rights Reserved<br/>
Melbourne, FL | Atlanta, GA | Washington, D.C.</p>

<p>Terms of Use | Privacy Notice</p>
 
<p>Tomahawk Robotics and Kinesis are<br/>
registered trademarks of Tomahawk Robotics, Inc.
   </p> 
</div>

  </Grid>

  <Grid item xs={12} sm={6} md={6} lg={6} sx={{ display: { xs: 'none', sm: 'flex', md: 'flex' } }}>
<div className='footlasticon'>
   <p><i class="fa fa-twitter" aria-hidden="true"></i> <i class="fa fa-linkedin" aria-hidden="true"></i> <i class="fa fa-youtube-play" aria-hidden="true"></i></p>



</div>

  </Grid>
  </Grid>



    </div>
    </div>
  )
}

export default Footer