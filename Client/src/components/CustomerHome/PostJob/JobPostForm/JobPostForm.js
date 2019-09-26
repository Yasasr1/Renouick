import React from 'react';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';






const JobPostform = (props) => {
    let errorMsg = null;
        if(props.valid === false)
            errorMsg = <p style={{color: 'red'}}>*Please fill all input fields</p>
    return(
        <Paper style={{padding: '80px', textAlign: 'center'}}>
                <h5 align="center">New Job</h5>
                <form>
                    <TextField
                    style={{marginBottom: '3em'}}
                    name="jobTitle"
                    label="Job title"
                    margin="normal"
                    variant="filled"
                    fullWidth
                    required
                    onChange={props.Change}
                    value={props.title}
                    />

                    <FormControl variant="outlined" style={{width: '100%', marginBottom: '3em'}}>
                        <InputLabel htmlFor="jobCategory">Job Category</InputLabel>
                        <Select
                        value={props.jobCategory}
                        onChange={props.Change}
                        name= 'jobCategory'
                        >
                            <MenuItem value="plumbing">Plumbing</MenuItem>
                            <MenuItem value="painting">Painting</MenuItem>
                            <MenuItem value="electricalWork">Electrical Work</MenuItem>
                            <MenuItem value="grassCutting">Grass Cutting</MenuItem>
                            <MenuItem value="houseCleaning">House Cleaning</MenuItem>
                            <MenuItem value="acRepair">A/C Repair</MenuItem>
                        </Select>
                    </FormControl>

                    <TextField
                    style={{marginBottom: '3em'}}
                    name="jobDesc"
                    label="Job Description"
                    multiline
                    fullWidth
                    rowsMax="8"
                    value={props.Desc}
                    onChange={props.Change}
                    margin="normal"
                    helperText="Enter a short description about the job"
                    variant="filled"
                    required
                    />

                    <h6>(Upload images)</h6>
                    {errorMsg}
                    <Button onClick={props.onSubmit}  color="primary" variant="contained" style={{width: '60%',  margin: '20px'}}>
                        Post
                    </Button>

                    <Button onClick={props.clear} color="secondary" variant="contained" style={{width: '60%'}}>
                        Clear
                    </Button>

                    
                               

                </form>
        </Paper>
    );
};

export default JobPostform;
