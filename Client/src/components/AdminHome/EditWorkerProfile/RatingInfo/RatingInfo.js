import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles(theme => ({
  root: {
    width: 200,
    
  },
  margin: {
    height: theme.spacing(3),
  },
}));

const marks = [
  {
    value: 0,
    label: '0',
  },
  {
    value: 20,
    label: '1',
  },
  {
    value: 40,
    label: '2',
  },
  {
    value: 60,
    label: '3',
  },
  {
    value: 80,
    label: '4',
  },
  {
    value: 100,
    label: '5',
  },
];

function valuetext(value) {
  return `${value}`;
}

function valueLabelFormat(value) {
  return marks.findIndex(mark => mark.value === value) + 1;
}

const RatingInfo = (value) => {
  const classes = useStyles();

  return (
    <div className={classes.margin} >
    <Typography id="discrete-slider-custom" gutterBottom>
      Edit Ratings
    </Typography>
    <Slider
      defaultValue={70}
      getAriaValueText={valuetext}
      aria-labelledby="discrete-slider-custom"
      step={10}
      valueLabelDisplay="auto"
      marks={marks}
    />
    </div>
  );
}

export default RatingInfo;