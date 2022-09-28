import { Grid } from '@mui/material'
import React from 'react'
import { Card } from 'semantic-ui-react'
import "./Smallcards.css"
import customercard from "../images/customers.png"

const Smallcards = () => {
  return (
    <div>
        <Grid container>
            <Grid xs={10} sm={10}>
       
                <div className='trusted'>
               
            <h1 className='trust'>TRUSTED BY</h1>
            <div class="vl2"></div> 
<h4 className='trustpara'>We have partnered with end users at the bleeding edge of innovation, representing all domains, to refine the Kinesis Ecosystem into an intuitive, hardened solution that works seamlessly with the unmanned systems that operators demand and the AI enhancements they expect.
</h4>
</div>
            </Grid>
        </Grid>

{/* customer cards */}
<Grid container>
<Grid xs={10} sm={10}>
<div className='customercards '>
<Card.Group itemsPerRow={4} className="cuscard">
    <Card  image={customercard} />
  
  </Card.Group>
  </div>

</Grid>
</Grid>


{/* knowmore */}

<Grid container>
            <Grid xs={10} sm={10}>
                <div className='knowmore' >
            <h1 className='knowtext'>WANT TO KNOW MORE?</h1>
            <div class="vl3"></div>

<h4  className='knowpara'>Click the button to dig into how Kinesis works. Curious about the broader Kinesis Ecosystem and its capabilities? Keep scrolling to learn more about our supporting products, modular solutions for defense, and resources for developers looking to join our vision.
 
</h4>
<div className='knowbutton'>
<button className='knowbut'>HOW IT WORKS</button>
</div>
</div>
            </Grid>
        </Grid>


    </div>
  )
}

export default Smallcards