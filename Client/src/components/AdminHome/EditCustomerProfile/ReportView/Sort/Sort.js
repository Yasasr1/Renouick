import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const Sort = (props) => {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    age: '',
    name: 'hai',
  });

  

  /*const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => { 
    setLabelWidth(inputLabel);
  }, []);*/

  const handleChange = event => {
    setValues(oldValues => ({
      ...oldValues,
      [event.target.name]: event.target.value,
    }));
  }
  return(

<form className={classes.root} autoComplete="off">
<FormControl className={classes.formControl}>
<InputLabel htmlFor="age-helper">Sort</InputLabel>
<Select
  value={values.age}
  onChange={handleChange}
  inputProps={{
    name: 'age',
    id: 'age-helper',
  }}
>
        <MenuItem value={10}>Date</MenuItem>
        <MenuItem value={20}>A - Z</MenuItem>
        <MenuItem value={30}>Z - A</MenuItem>
        </Select>
      </FormControl>

      <FormControl className={classes.formControl}>

      </FormControl>
</form>
  );
}

export default Sort;
