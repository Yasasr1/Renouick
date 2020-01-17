import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import './FAQ.css';
import Paper from '@material-ui/core/Paper'; 

const ExpansionPanel = withStyles({
  root: {
    border: '1px solid rgba(0, 0, 0, .125)',
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
  },
  expanded: {},
})(MuiExpansionPanel);

const ExpansionPanelSummary = withStyles({
  root: {
    backgroundColor: 'rgba(1, 1, 1, .5)',
    borderBottom: '1px solid rgba(0, 0, 0, .125)',
    marginBottom: -1,
    minHeight: 56,
    '&$expanded': {
      minHeight: 50,

    },
  },
  content: {
    '&$expanded': {
      margin: '12px 0',
      align: "center",
    },
  },
  expanded: {},
})(MuiExpansionPanelSummary);

const ExpansionPanelDetails = withStyles(theme => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiExpansionPanelDetails);

    const FAQ = () =>  {
    const [expanded, setExpanded] = React.useState('panel1');

    const handleChange = panel => (event, newExpanded) => {
      setExpanded(newExpanded ? panel : false);
    };
      
    
    return (
      <div className="FAQOuterDiv">
        <div className="FAQInnerDiv">
        <Paper>
  <Typography className="Paper" style={{ fontFamily:"Algerian" , fontSize:32 , fontStyle:"Italic" , color:"black"}} >
    Freaquently Ask Quesctions
  </Typography>
  
</Paper>
       <br/>
            <form>
            <ExpansionPanel square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
              <ExpansionPanelSummary aria-controls="panel1d-content" id="panel1d-header">
                <Typography style={{ fontFamily:"Calibri " , fontSize:18 , fontStyle:"Italic" , color:"white"}}>How can we find a good worker?</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography style={{ fontFamily:"Calibri " , fontSize:24 , fontStyle:"Italic" , color:"blue"}}>You can check the ratings of a particular worker by going to "find a worker page".  
              Here you can search profiles by name or job category. Then you can start a chat to know further details.</Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
      <ExpansionPanel square expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <ExpansionPanelSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography style={{ fontFamily:"Calibri " , fontSize:18 , fontStyle:"Italic" , color:"white"}}>As a worker, How can I use this app to find works? Does it cost extra charges?</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails >
          <Typography style={{ fontFamily:"Calibri " , fontSize:24 , fontStyle:"Italic" , color:"blue"}}>
            After you login to the system, you can view posted by going to browse job in dashboard. 
            There you can see all the jobs that are related to what you are registered for. 
            
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel square expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <ExpansionPanelSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography style={{ fontFamily:"Calibri " , fontSize:18 , fontStyle:"Italic" , color:"white"}}>How can we pay money?How can we pay the registration fee?</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography style={{ fontFamily:"Calibri " , fontSize:24 , fontStyle:"Italic" , color:"blue"}}>
            Renouick provides you the advantage of having registration for free. 
            Also, we don't handle any payments that is occuring between the workers and customers. So you have to settle payments 
            outside the application.  
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel square expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
              <ExpansionPanelSummary aria-controls="panel4d-content" id="panel4d-header">
                <Typography style={{ fontFamily:"Calibri " , fontSize:18 , fontStyle:"Italic" , color:"white"}}>Can I change my bid after I see the real work?</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography style={{ fontFamily:"Calibri " , fontSize:24 , fontStyle:"Italic" , color:"blue"}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel square expanded={expanded === 'panel5'} onChange={handleChange('panel4')}>
              <ExpansionPanelSummary aria-controls="panel5d-content" id="panel4d-header">
                <Typography style={{ fontFamily:"Calibri " , fontSize:18 , fontStyle:"Italic" , color:"white"}}>Is it safe for me to give all these details including home routine here?</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography style={{ fontFamily:"Calibri " , fontSize:24 , fontStyle:"Italic" , color:"blue"}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel square expanded={expanded === 'panel6'} onChange={handleChange('panel4')}>
              <ExpansionPanelSummary aria-controls="panel6d-content" id="panel4d-header">
                <Typography style={{ fontFamily:"Calibri " , fontSize:18 , fontStyle:"Italic" , color:"white"}}>Can I change my bid after I see the real work?</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography style={{ fontFamily:"Calibri " , fontSize:24 , fontStyle:"Italic" , color:"blue"}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
      </form>
      </div>
    </div>
  
  );
}

export default FAQ;