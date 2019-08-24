import React from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { orange } from '@material-ui/core/colors';

const LoginButton = withStyles(theme => ({
    root: {
      color: 'white',
      backgroundColor: orange[500],
      '&:hover': {
        backgroundColor: orange[700],
      },
    },
  }))(Button);

const OrangeButton = (props) => (
    <LoginButton variant='contained'>{props.content}</LoginButton>
);

export default OrangeButton;