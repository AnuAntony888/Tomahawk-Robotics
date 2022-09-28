import {  Grid } from '@mui/material'

import React from 'react'
import "./Cardvideo.css"
const Cards = () => {
  return (
    <div>


<div style={{position:"relative"}}>
<Grid container sx={{ display: { xs: 'none', sm: 'none',  md: 'none',lg:'block' } }}>
<Grid item xs={12}>
<div class="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin" uk-grid style={{display:"flex",width:"80%",marginLeft:"130px" , boxShadow:"none"}}>
    <div class="uk-flex-last@s uk-card-media-right uk-cover-container">
       
 <iframe className='iframes' src="https://www.youtube.com/embed/d_FC1mDfF_U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> 
        <canvas width="400" height="400"></canvas>
    </div>
   
    <div>
    
        <div class="uk-card-body">
        <div class="vl"></div>
            <h4 className='para'>The revolutionary growth in unmanned technologies and AI has created a complex maze of robotic platforms and solutions with closed architectures. We are changing this. At Tomahawk Robotics, we have built Kinesis - a platform and communications agnostic control software solution that transforms how humans work with robots and unmanned systems in the most stressful and harsh environments.</h4>
        </div>
    </div>
</div> 
</Grid>
</Grid>

</div>




{/* 1024 */}

<div style={{position:"relative"}}>
<Grid container sx={{ display: { xs: 'none', sm: 'none',  md: 'block',lg:'none' } }}>
<Grid item xs={12}>
<div class="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin" uk-grid style={{display:"flex",width:"80%",marginLeft:"100px" , boxShadow:"none"}}>
    <div class="uk-flex-last@s uk-card-media-right uk-cover-container">
    <iframe className='iframes' src="https://www.youtube.com/embed/d_FC1mDfF_U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <canvas width="400" height="400"></canvas>
    </div>
   
    <div>

        <div class="uk-card-body">
          
        <div class="vl"></div>
            <h4 className='para'>The revolutionary growth in unmanned technologies and AI has created a complex maze of robotic platforms and solutions with closed architectures. We are changing this. At Tomahawk Robotics, we have built Kinesis - a platform and communications agnostic control software solution that transforms how humans work with robots and unmanned systems in the most stressful and harsh environments.</h4>
        </div>
    </div>
</div> 
</Grid>
</Grid>
</div>

{/* tab */}

<Grid container sx={{ display: { xs: 'block', sm: 'block',  md: 'none' } }}>
<Grid item xs={12}>
<div class="vl"></div>
<h4 className="paratab" id="para2">
                The revolutionary growth in unmanned technologies and AI has created a complex maze of robotic platforms and solutions with closed architectures. We are changing this. At Tomahawk Robotics, we have built Kinesis - a platform and communications agnostic control software solution that transforms how humans work with robots and unmanned systems in the most stressful and harsh environments.
                </h4>


<div class="uk-child-width-1-2@m" uk-grid  style={{display:"block",width:"80%", boxShadow:"none"}}>
    
    <div>
        <div class="uk-card uk-card-default" style={{boxShadow:"none"}}>
            {/* <div class="uk-card-body">
                <h4 class="uk-card-title" id="para2">
                The revolutionary growth in unmanned technologies and AI has created a complex maze of robotic platforms and solutions with closed architectures. We are changing this. At Tomahawk Robotics, we have built Kinesis - a platform and communications agnostic control software solution that transforms how humans work with robots and unmanned systems in the most stressful and harsh environments.
                </h4>
           
            </div> */}
            <div class="uk-card-media-bottom" >
            <iframe id='iframes2' src="https://www.youtube.com/embed/d_FC1mDfF_U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>
    </div>
</div>
</Grid>
</Grid>
<Grid container>
<Grid item xs={10}>
<div className='head4'>
<p>Kinesis unlocks the power of 20+ unmanned systems from over a dozen manufacturers. Viewable on a single "pane of glass" and controllable from a common UI - all upgraded with new AI capabilities and connected to the tactical network. Read on to learn more about the revolutionary capabilities Kinesis brings to the fight.
</p>
</div>
</Grid>
</Grid>

    </div>
  )
}

export default Cards