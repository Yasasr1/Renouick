import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: 224,
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));

export default function VerticalTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation="scrollable"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        <Tab label="Report 1 Sender : Pasan Mahesha" {...a11yProps(0)} />
        <Tab label="Report 2 Sender : Pasan Mahesha" {...a11yProps(1)} />
        <Tab label="Report 3 Sender : Pasan Mahesha" {...a11yProps(2)} />
        <Tab label="Report 4 Sender : Pasan Mahesha" {...a11yProps(3)} />
        <Tab label="Report 5 Sender : Pasan Mahesha" {...a11yProps(4)} />
        <Tab label="Report 6 Sender : Pasan Mahesha" {...a11yProps(5)} />
        <Tab label="Report 7 Sender : Pasan Mahesha" {...a11yProps(6)} />
      </Tabs>
      <TabPanel value={value} index={0} align="center">
        9ha gt gaoehgour ehgaou rhg or h rhgorugho   guohrohg  jrgorj o ghero j rgj  urs s  n an  ln na n ani i n an    naon oan  nan n a jIJA J NAN NA N ANAFVK
        9ha gt gaoehgour ehgaou rhg or h rhgorugho   guohrohg  jrgorj o ghero j rgj  urs s  n an  ln na n ani i n an    naon oan  nan n a jIJA J NAN NA N ANAFVK
      </TabPanel>
      <TabPanel value={value} index={1}>
      9ha gt gaoehgour ehgaou rhg or h rhgorugho   guohrohg  jrgorj o ghero j rgj  urs s  n an  ln na n ani i n an    naon oan  nan n a jIJA J NAN NA N ANAFVK
        9ha gt gaoehgour ehgaou rhg or h rhgorugho   guohrohg  jrgorj o ghero j rgj  urs s  n an  ln na n ani i n an    naon oan  nan n a jIJA J NAN NA N ANAFVK
      </TabPanel>
      <TabPanel value={value} index={2}>
      9ha gt gaoehgour ehgaou rhg or h rhgorugho   guohrohg  jrgorj o ghero j rgj  urs s  n an  ln na n ani i n an    naon oan  nan n a jIJA J NAN NA N ANAFVK
        9ha gt gaoehgour ehgaou rhg or h rhgorugho   guohrohg  jrgorj o ghero j rgj  urs s  n an  ln na n ani i n an    naon oan  nan n a jIJA J NAN NA N ANAFVK
      </TabPanel>
      <TabPanel value={value} index={3}>
      9ha gt gaoehgour ehgaou rhg or h rhgorugho   guohrohg  jrgorj o ghero j rgj  urs s  n an  ln na n ani i n an    naon oan  nan n a jIJA J NAN NA N ANAFVK
        9ha gt gaoehgour ehgaou rhg or h rhgorugho   guohrohg  jrgorj o ghero j rgj  urs s  n an  ln na n ani i n an    naon oan  nan n a jIJA J NAN NA N ANAFVK
      </TabPanel>
      <TabPanel value={value} index={4}>
      9ha gt gaoehgour ehgaou rhg or h rhgorugho   guohrohg  jrgorj o ghero j rgj  urs s  n an  ln na n ani i n an    naon oan  nan n a jIJA J NAN NA N ANAFVK
        9ha gt gaoehgour ehgaou rhg or h rhgorugho   guohrohg  jrgorj o ghero j rgj  urs s  n an  ln na n ani i n an    naon oan  nan n a jIJA J NAN NA N ANAFVK
      </TabPanel>
      <TabPanel value={value} index={5}>
      9ha gt gaoehgour ehgaou rhg or h rhgorugho   guohrohg  jrgorj o ghero j rgj  urs s  n an  ln na n ani i n an    naon oan  nan n a jIJA J NAN NA N ANAFVK
        9ha gt gaoehgour ehgaou rhg or h rhgorugho   guohrohg  jrgorj o ghero j rgj  urs s  n an  ln na n ani i n an    naon oan  nan n a jIJA J NAN NA N ANAFVK
      </TabPanel>
      <TabPanel value={value} index={6}>
      9ha gt gaoehgour ehgaou rhg or h rhgorugho   guohrohg  jrgorj o ghero j rgj  urs s  n an  ln na n ani i n an    naon oan  nan n a jIJA J NAN NA N ANAFVK
        9ha gt gaoehgour ehgaou rhg or h rhgorugho   guohrohg  jrgorj o ghero j rgj  urs s  n an  ln na n ani i n an    naon oan  nan n a jIJA J NAN NA N ANAFVK
      </TabPanel>
    </div>
  );
}