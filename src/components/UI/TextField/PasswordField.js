import React from 'react';
import TextField from '@material-ui/core/TextField';

const PasswordField = (props) => (
    <TextField
        id={props.id}
        label={props.label}
        style={{ margin: 12, width: '95%' }}
        type="password"
        autoComplete="current-password"
        margin="normal"
        variant="outlined"
        onChange={props.changed}
      />
);

export default PasswordField;