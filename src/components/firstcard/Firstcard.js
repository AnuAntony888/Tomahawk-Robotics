import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import React from 'react'
import "./Firstcard.css"
import user from "../images/user-centric.png"
import multi from '../images/multi-domain.png'
import cross from "../images/cross-architecture.png"
import ai from "../images/ai-enhanced.png"
const Firstcard = () => {
  return (
    <div>
    <Grid container spacing={4} 	sx={{ display: { xs: 'none',sm:"none",  md: 'flex', lg: 'flex' } }}>
        <Grid item xs={12} md={5} lg={5} >
        <div class="uk-card uk-card-default uk-grid-collapse " uk-grid className='cards' >
    <div class="uk-card-media-left uk-cover-container" >
       <div className="images">
    <img className='imgs'   src={user}  alt=""/>
    <div class="uk-overlay uk-light uk-position-bottom">
        <h2 className='headh2'>USER-CENTRIC</h2>
        <h4>Kinesis is the only control system that is designed for the warfighter first. Starting with the intuitive and tactically optimized user interface, Kinesis is an app that runs on the Android EUD you're already carrying to lighten your loadout.</h4>
        </div>
    </div>
    </div>
   
</div>
</Grid>


<Grid item xs={12} md={6} lg={6}>
        <div class="uk-card uk-card-default uk-grid-collapse " uk-grid className='cards1'>
    <div class="uk-card-media-left uk-cover-container">
    <div className="images">
    <img className='imgs1'  src={multi}  alt=""/>
    <div class="uk-overlay uk-light uk-position-bottom">
       
        <h2  className='headh3'>MULTI-DOMAIN</h2>
        <h4>Built from the ground up for multi-domain operations, Kinesis is the common control solution that ensures flying a drone is as easy as operating a ground robot. This deep level of integration across the entire unmanned spectrum enables unique features such as air and ground unmanned system "teaming".</h4>
        </div>

        
        
    </div>
    </div>
   
</div>
</Grid>

    </Grid>
{/*  */}

    <Grid container spacing={4} 	sx={{ display: { xs: 'none',sm:"none", md: 'flex', lg: 'flex' } }}>
        <Grid item xs={12} md={6} lg={6}>
       
        <div class="uk-card uk-card-default uk-grid-collapse " uk-grid className='cards2'>
    <div class="uk-card-media-left uk-cover-container">
    <div className="images">
    <img className='imgs2'   src={cross}  alt=""/>
    <div class="uk-overlay uk-light uk-position-bottom">
        <h2  className='headh4'>CROSS-ARCHITECTURE</h2>
        <h4>Wrapped around a novel cross-architecture core, Kinesis unlocks common control of all your UxVs. Said simply, Kinesis is the only software-based control system that can talk to multiple unmanned systems, built on different architectures, and view them on one pane of glass.</h4>
        </div>
    </div>
    </div>
   
</div>
</Grid>


<Grid item xs={12} md={5} lg={5}>
        <div class="uk-card uk-card-default uk-grid-collapse " uk-grid className='cards3'>
    <div class="uk-card-media-left uk-cover-container">
    <div className="images">
    <img className='imgs3'  src={ai}  alt=""/>
    <div class="uk-overlay uk-light uk-position-bottom">
        <h2  className='headh5'>AI-ENHANCED</h2>
        <h4>Kinesis seamlessly connects your unmanned systems with AI at the edge. Coupled with our KxM family of edge devices,  Kinesis gives you the freedom to mix and match your UxVs and AI interchangeably to optimize for the mission at hand.</h4>
        </div>
    </div>
    </div>
   
</div>
</Grid>

    </Grid> 


{/* tab */}

<Grid container spacing={3} sx={{ display: { xs: 'block',sm:"flex", md: 'none', lg: 'none' } }}>
    <Grid item xs={12} sm={6}>
    <div class="uk-card uk-card-default uk-grid-collapse " uk-grid className='tabcar'  >
    <div class="uk-card-media-left uk-cover-container" >
       <div className="images">
    <img  className='tabimg'  src={user}  alt=""/>
    <div class="uk-overlay uk-light uk-position-bottom">
        <h2 className='headh2'>USER-CENTRIC</h2>
        <h4>Kinesis is the only control system that is designed for the warfighter first. Starting with the intuitive and tactically optimized user interface, Kinesis is an app that runs on the Android EUD you're already carrying to lighten your loadout.</h4>
        </div>
    </div>
    </div>
   
</div>
    </Grid>
    <Grid item xs={12} sm={6}>
    <div class="uk-card uk-card-default uk-grid-collapse " uk-grid className='tabcar1' >
    <div class="uk-card-media-left uk-cover-container" >
       <div className="images">
    <img   className='tabimg1' src={multi}  alt=""/>
    <div class="uk-overlay uk-light uk-position-bottom">
        <h2 className='headh3'>MULTI-DOMAIN</h2>
        <h4>Built from the ground up for multi-domain operations, Kinesis is the common control solution that ensures flying a drone is as easy as operating a ground robot. This deep level of integration across the entire unmanned spectrum enables unique features such as air and ground unmanned system "teaming".</h4>
        </div>
    </div>
    </div>
   
</div>
    </Grid>
</Grid>

<Grid container spacing={3} sx={{ display: { xs: 'block',sm:"flex", md: 'none', lg: 'none' } }}>
    <Grid item xs={12} sm={6}>
    <div class="uk-card uk-card-default uk-grid-collapse " uk-grid className='tabcar2'>
    <div class="uk-card-media-left uk-cover-container">
    <div className="images">
    <img   className='tabimg2'  src={cross}  alt=""/>
    <div class="uk-overlay uk-light uk-position-bottom">
        <h2  className='headh4'>CROSS-ARCHITECTURE</h2>
        <h4>Wrapped around a novel cross-architecture core, Kinesis unlocks common control of all your UxVs. Said simply, Kinesis is the only software-based control system that can talk to multiple unmanned systems, built on different architectures, and view them on one pane of glass.</h4>
        </div>
    </div>
    </div>
   
</div>
    </Grid>
    <Grid item xs={12} sm={6}>
    <div class="uk-card uk-card-default uk-grid-collapse " uk-grid className='tabcar3'>
    <div class="uk-card-media-left uk-cover-container">
    <div className="images">
    <img className='tabimg3'  src={ai}  alt=""/>
    <div class="uk-overlay uk-light uk-position-bottom">
        <h2  className='headh5'>AI-ENHANCED</h2>
        <h4>Kinesis seamlessly connects your unmanned systems with AI at the edge. Coupled with our KxM family of edge devices,  Kinesis gives you the freedom to mix and match your UxVs and AI interchangeably to optimize for the mission at hand.</h4>
        </div>
    </div>
    </div>
   
</div>
    </Grid>
</Grid>




    </div>
  )
}

export default Firstcard