import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
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

const WorkerSelect = (props) => {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    age: '',
    name: 'hai',
  });

  

  //const inputLabel = React.useRef(null);
  //const [setLabelWidth] = React.useState(0);
  React.useEffect(() => {
   // setLabelWidth(inputLabel);
  }, []);

  const handleChange = event => {
    setValues(oldValues => ({
      ...oldValues,
      [event.target.name]: event.target.value,
    }));
  }
  return(
                         
                    
      <form className={classes.root} autoComplete="off">
        <FormControl className={classes.formControl}>
        <InputLabel htmlFor="age-helper">Worker</InputLabel>
      <Select
        value={values.age}
        onChange={handleChange}
        inputProps={{
        name: 'age',
        id: 'age-helper',
      }}
>
      <MenuItem value="">
        <em>None</em>
      </MenuItem>
      <MenuItem value={10}>Pasan Mahesha Herath kmek ngvron ngern</MenuItem>
      <MenuItem value={20}>Yasas Ramanayake</MenuItem>
      <MenuItem value={30}>Thisara Gimhani</MenuItem>
      <MenuItem value={30}>Gayara Jayasinghe</MenuItem>
    </Select>
    <FormHelperText>Enter Worker Username</FormHelperText>
    </FormControl>
    </form>
    
      );
    }

export default WorkerSelect;
