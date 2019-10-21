import React from 'react';
import Box from '@material-ui/core/Box';
//import { shadows } from '@material-ui/system';


const WorkerCount = (Height) => {
  return (
    
    <Box style={{height:130, textAlign:"center", width:"100%", bgcolor:"background.paper", fontSize:"30px",  }} >
      <Box borderRadius={16} height="75%" bgcolor="blue" color="secondary.main" boxShadow={3} m={2} width={300} display="inline-block">
        Customers Count<br/>
        <h1>200</h1>
      </Box>
      <Box borderRadius={16} height="75%" bgcolor="yellow" color="secondary.main" boxShadow={3} width={300} m={2} display="inline-block">
        Workers Count<br/>
        <h1>78</h1>
      </Box>
      <Box borderRadius={16} height="75%" bgcolor="tan" color="secondary.main" boxShadow={3} width={300} m={2} display="inline-block">
        Complete Works<br/>
        <h1>311</h1>
      </Box>
      <Box borderRadius={16} height="75%" bgcolor="orange" color="secondary.main" boxShadow={3} width={300} m={2} display="inline-block">
        Total Users<br/>
        <h1>281</h1>
      </Box>
    </Box>
  
  );
}


export default WorkerCount;