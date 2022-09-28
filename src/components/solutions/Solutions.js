import { Grid } from '@mui/material'
import React from 'react'
import "./Solutions.css"
import defense from "../images/mobile - defense.png"
import developers from "../images/mobile - developers.png"
import builder from "../images/mobile - system builder.png"


const Solutions = () => {
  return (
    <div>
        <div className='solution'>
<Grid container >
        <Grid item xs={10} >

            <h1 className='sol'> SOLUTIONS</h1>
            <div class="vl4"></div>
<h4 className='solpara'>Our unique combination of skills, partnerships, and experience allows us to be a true "honest broker" of unmanned systems solutions. We are focused on the rapid integration of the latest robotic capabilities, providing assurance that our open architecture approach prevents vendor lock and ensures an upgrade path for future needs
</h4>

</Grid>
</Grid>
</div>
{/* cards */}
<div className='solutioncard'>
<Grid container spacing={4} sx={{ display: { xs: 'none', sm:"none", md: 'flex', lg: 'flex' ,  } }}>
        <Grid item xs={12} md={6} lg={6} >
        <div class="uk-card uk-card-default uk-grid-collapse " uk-grid className='solcards' >
    <div class="uk-card-media-left uk-cover-container" >
       <div className="photos">
    <img className='phts'   src={defense} alt=""/>
    <div class="uk-overlay uk-light uk-position-bottom">
        <h2 className='solheadh1'>DEFENCE</h2>
        <h4 >Join the multi-domain future of manned-unmanned teaming (MUMT) with collaborative control across all your unmanned systems and enhanced with AI at the edge.</h4>
        <button className="solbutton">LEARN MORE</button>
        </div>
    </div>
    </div>
   
</div>

</Grid>


<Grid item xs={12} md={6} lg={6}>
        <div class="uk-card uk-card-default uk-grid-collapse " uk-grid className='solcards1'>
    <div class="uk-card-media-left uk-cover-container">
    <div className="photos">
    <img className='phts1'  src={builder}  alt=""/>
    <div class="uk-overlay uk-light uk-position-bottom">
       
        <h2  className='solheadh2' >SYSTEM BUILDER</h2>
        <h4 style={{marginRight:"100px"}} >Time to make this your own - dive in and explore all the modular ways the Kinesis ecosystem can be tailored to your exact mission needs.</h4>
        <button className="solbutton">LEARN MORE</button>
        </div>

        
        
    </div>
    </div>
   
</div>
</Grid>



<Grid item xs={12} md={6} lg={6}>
        <div class="uk-card uk-card-default uk-grid-collapse " uk-grid className='solcards2'>
    <div class="uk-card-media-left uk-cover-container">
    <div className="photos">
    <img className='phts2'  src={developers}  alt=""/>
    <div class="uk-overlay uk-light uk-position-bottom">
       
        <h2  className='solheadh3' >DEVELOPERS</h2>
        <h4>Want to know how you can integrate your platform, payload, or AI capability? Click the button - this is your stop.
 </h4>
 <button className="solbutton">LEARN MORE</button>
        </div>

        
        
    </div>
    </div>
   
</div>
</Grid>

    </Grid>
    </div>


{/* 1024 */}



<Grid container spacing={4} sx={{ display: { xs: 'none', sm:"none", md: 'none', lg: 'none' ,  } }}>
        <Grid item xs={12} md={6} lg={6} >
        <div class="uk-card uk-card-default uk-grid-collapse " uk-grid className='solcards' >
    <div class="uk-card-media-left uk-cover-container" >
       <div className="photos">
    <img className='phts'   src={defense} alt=""/>
    <div class="uk-overlay uk-light uk-position-bottom">
        <h2 className='solheadh1'>DEFENCE</h2>
        <h4 >Join the multi-domain future of manned-unmanned teaming (MUMT) with collaborative control across all your unmanned systems and enhanced with AI at the edge.</h4>
        <button className="solbutton">LEARN MORE</button>
        </div>
    </div>
    </div>
   
</div>

</Grid>


<Grid item xs={12} md={6} lg={6}>
        <div class="uk-card uk-card-default uk-grid-collapse " uk-grid className='solcards1'>
    <div class="uk-card-media-left uk-cover-container">
    <div className="photos">
    <img className='phts1'  src={builder}  alt=""/>
    <div class="uk-overlay uk-light uk-position-bottom">
       
        <h2  className='solheadh2' >SYSTEM BUILDER</h2>
        <h4 style={{marginRight:"100px"}} >Time to make this your own - dive in and explore all the modular ways the Kinesis ecosystem can be tailored to your exact mission needs.</h4>
        <button className="solbutton">LEARN MORE</button>
        </div>

        
        
    </div>
    </div>
   
</div>
</Grid>



<Grid item xs={12} md={6} lg={6}>
        <div class="uk-card uk-card-default uk-grid-collapse " uk-grid className='solcards2'>
    <div class="uk-card-media-left uk-cover-container">
    <div className="photos">
    <img className='phts2'  src={developers}  alt=""/>
    <div class="uk-overlay uk-light uk-position-bottom">
       
        <h2  className='solheadh3' >DEVELOPERS</h2>
        <h4>Want to know how you can integrate your platform, payload, or AI capability? Click the button - this is your stop.
 </h4>
 <button className="solbutton">LEARN MORE</button>
        </div>

        
        
    </div>
    </div>
   
</div>
</Grid>

    </Grid>





{/* tab */}


<Grid container spacing={2} sx={{ display: { xs: 'flex', sm:"flex", md: 'none', lg: 'none'   } }}>
        <Grid item  xs={12} sm={6}>
        <div class="uk-card uk-card-default uk-grid-collapse " uk-grid className='tabsolcards' >
    <div class="uk-card-media-left uk-cover-container" >
       <div className="photos">
    <img className='tabphts'   src={defense} alt=""/>
    <div class="uk-overlay uk-light uk-position-bottom">
        <h2 className='solheadh1'>DEFENCE</h2>
        <h4 className='solcardpara'>Join the multi-domain future of manned-unmanned teaming (MUMT) with collaborative control across all your unmanned systems and enhanced with AI at the edge.</h4>
        <button className="solbutton">LEARN MORE</button>
        </div>
    </div>
    </div>
   
</div>
</Grid>


<Grid item xs={12} sm={6} >
        <div class="uk-card uk-card-default uk-grid-collapse " uk-grid className='tabsolcards1'>
    <div class="uk-card-media-left uk-cover-container">
    <div className="photos">
    <img className='tabphts1'  src={builder}  alt=""/>
    <div class="uk-overlay uk-light uk-position-bottom">
       
        <h2  className='solheadh2' >SYSTEM BUILDER</h2>
        <h4 >Time to make this your own - dive in and explore all the modular ways the Kinesis ecosystem can be tailored to your exact mission needs.</h4>
        <button className="solbutton">LEARN MORE</button>
        </div>

        
        
    </div>
    </div>
   
</div>
</Grid>


<Grid item  xs={12} sm={6}>
        <div class="uk-card uk-card-default uk-grid-collapse " uk-grid className='tabsolcards2'>
    <div class="uk-card-media-left uk-cover-container">
    <div className="photos">
    <img className='tabphts2'  src={developers}  alt=""/>
    <div class="uk-overlay uk-light uk-position-bottom">
       
        <h2  className='solheadh3' >DEVELOPERS</h2>
        <h4>Want to know how you can integrate your platform, payload, or AI capability? Click the button - this is your stop.
 </h4>
 <button className="solbutton">LEARN MORE</button>
        </div>

        
        
    </div>
    </div>
   
</div>
</Grid>


</Grid>






   <Grid container>
        <Grid item xs={10} >
<div className='solutionneed'>
            <h1 className='solneed'> NEED SOMETHING SPECIAL?</h1>
            <div class="vl5"></div>
<h4 className='solneedpara'>Many of our customers have extremely unique mission requirements that are rarely met by off-the-shelf solutions. If this describes your situation and you're looking for something more - click the button below to start the discussion.
</h4>
<button className='solneedbut' id='solneedbutid'>CONTACT US</button>
</div>
</Grid>
</Grid> 


        
    </div>
  )
}

export default Solutions