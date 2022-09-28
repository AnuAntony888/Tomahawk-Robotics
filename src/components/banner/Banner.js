import { Button, Grid } from '@mui/material'
import React from 'react'

import video from "../video/video.mp4"
import "./Banner.css"
import { TiSocialTwitter,TiSocialYoutube } from "react-icons/ti";
import Textanimation from './Textanimation';

const Banner = () => {
  return (
    <div className='banner'>
<Grid container>
  <Grid  item xs={12} sm={12} md={12}>
 <div className='video'><video  src={video} autoPlay playsInline  loop muted></video></div>  

<p className='banh1'>  </p>
<div className='line' ><hr/> </div>
<p className='banh2'>COMMON CONTROL FOR UNMANNED SYSTEMS</p>
<div className='button'>
<button className='btns' >
WATCH THE VIDEO
</button>
</div>
<div className='banicon'>
<p>Follow Us &nbsp;<i style={{fontSize:"19px"}} class="fa fa-twitter" aria-hidden="true"></i>&nbsp; in &nbsp;<i style={{fontSize:"19px"}} class="fa fa-youtube-play" aria-hidden="true"></i></p>
</div>

</Grid>
</Grid>
    </div> 
  )
}

export default Banner