import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import React from 'react'
import "./Heading.css"
import Cardvideo from './Cardvideo'

const Heading = () => {
  return (
    <div>
      <div className='headcardvideo'>

     

<Grid container  >
  <Grid item xs={12} sm={12} lg={12}>
  <div className='heading'> <p>KINESIS - UNIVERSAL ROBOTIC CONTROL</p></div>
  </Grid>
</Grid>

{/* <Grid container >
  <Grid item xs={12}  sx={{ display: { xs: 'block', md: 'none',sm:"block" }}}>
  <div className='heading1'> <p>KINESIS - UNIVERSAL ROBOTIC CONTROL</p></div>
  </Grid>
</Grid>  */}
{/* <Grid container sx={{ display: { xs: 'none', md: 'block', lg:"none", xl: 'none' } }}>
  <Grid item xs={12}>
  <div className='heading'> <h1>KINESIS - UNIVERSAL ROBOTIC 
    <br/>
    CONTROL</h1></div>
  </Grid>
</Grid> */}

<Cardvideo/>


 
 
        
    </div>
    </div>
  )
}

export default Heading