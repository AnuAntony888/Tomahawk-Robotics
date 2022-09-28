import React from 'react'
import "./Carousel.css"
import control from "../images/controllers collage 3-1.png"
import edge from "../images/edge-devices-collage.png"
import datalink from "../images/datalinks collage 3.png"
import dataimg from "../images/data-img.jpg"
import contimg from "../images/cont-img.jpg"
import edgeimg from "../images/edge-img.jpg"
import { FaChevronRight ,FaChevronLeft} from "react-icons/fa";
import { Grid } from '@mui/material'


const Carousel = () => {
  return (
    <div>

    <Grid container display={{ xs: 'none' , sm:"none", lg: 'flex', md:"flex"}}>
  <Grid  item xs={12}>
    <div className='carousel'>

    <div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1" uk-slideshow="">

<ul class="uk-slideshow-items">


<div>
<Grid  item xs={5}>
    <h1 className='carohead' >EDGE DEVICES</h1>
    <h4 className='caropara' >The KxM family edge devices fills the void of Nett Warrior compliant manages network hubs with integrated edge compute capabilities. Are you an AI developer looking for a host platform? We've got you covered</h4>
    <button className="carobutton">LEARN MORE</button>
    </Grid>
    <Grid  item xs={5}>
        <div class="uk-position-right uk-position-small uk-text-right">
        <img className='caroimg' src={edge} alt="" uk-cover/>
      
        </div>
        </Grid>
</div>
<div>
<Grid  item xs={5}>
    <h1 className='carohead'>CONTROLLERS</h1>
    <h4 className='caropara'>Touch screens are great but when things get rough, buttons are better. Read on to learn about the full suite of Kinesis-compatible input devices for both commercial and MIL-spec applications</h4>
    <button className="carobutton">LEARN MORE</button>
    </Grid>
    <Grid  item xs={5}>
        <div class="uk-position-right uk-position-small uk-text-right">
        <img className='caroimg' src={control} alt="" uk-cover/>
          
        </div>
        </Grid>
    
    </div>

    <div>
    <Grid  item xs={5}>
    <h1 className='carohead'>DATALINKS</h1>
    <h4 className='caropara'>Datalinks come in a wide variety of communications technology with wildly varying performance in terms of range, security or ease of integration. Click to learn about our curated solutions that are optimized for the mission at hand  </h4>
    <button className="carobutton">LEARN MORE</button>
    </Grid>
    <Grid  item xs={5}>
        <div class="uk-position-right uk-position-small uk-text-right">
        <img className='caroimg' src={datalink} alt="" uk-cover/>
            
        </div>
        </Grid>
    
    </div>
   
</ul>

<a style={{marginTop:"-80px",fontSize:"80px"}} class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slideshow-item="previous"><FaChevronLeft/></a>
<a style={{marginTop:"-80px",fontSize:"80px"}} class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slideshow-item="next"><FaChevronRight/></a>

</div>
    </div>
    </Grid>
    </Grid> 

{/* tab */}
 
<Grid container   display={{ xs: 'block' , sm:"block", lg: 'none', md:"none"}}>
  <Grid  item xs={12}> 
  <div  class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1" uk-slideshow="">

<ul  class="uk-slideshow-items">

    <li>
        <div class="uk-position-cover"  >
            <img className='caroimgtab' src={edgeimg} alt="" uk-cover/>
        </div>
       
        <div class="uk-position-left uk-position-medium uk-text-left">
            <div >
                <h2 className='caroheadtab' >EDGE DEVICES</h2>
                
                <h4 className='caroparatab'>The KxM family edge devices fills the void of Nett Warrior compliant manages network hubs with integrated edge compute capabilities. Are you an AI developer looking for a host platform? We've got you covered</h4>
                <button className="carotabbutton">LEARN MORE</button>
            </div>
        </div>
    </li>
 
 
    <li>
        <div class="uk-position-cover" >
            <img src={contimg} alt="" uk-cover/>
        </div>
      
        <div class="uk-position-left uk-position-medium uk-text-left">
            <div >
                <h2 className='caroheadtab' >CONTROLLERS</h2>
                <h4 className='caroparatab' >Touch screens are great but when things get rough, buttons are better. Read on to learn about the full suite of Kinesis-compatible input devices for both commercial and MIL-spec applications</h4>
                <button className="carotabbutton">LEARN MORE</button>
            </div>
        </div>
    </li>

 
    <li>
        <div class="uk-position-cover">
            <img src={dataimg} alt="" uk-cover/>
        </div>
       
        <div class="uk-position-left uk-position-medium uk-text-left">
            <div >
                <h2 className='caroheadtab'>DATALINKS</h2>
                <h4 className='caroparatab' >Datalinks come in a wide variety of communications technology with wildly varying performance in terms of range, security or ease of integration. Click to learn about our curated solutions that are optimized for the mission at hand </h4>
                <button className="carotabbutton">LEARN MORE</button>
            </div>
        </div>
    </li>
  
</ul>

<a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slideshow-item="previous"></a>
<a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slideshow-item="next"></a>

</div>

</Grid>
 </Grid>



 

 

    </div>
  )
}

export default Carousel