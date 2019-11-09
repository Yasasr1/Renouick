import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import ViewButton from '../ViewButton/ViewButton';

const action = (
  <ViewButton/>
);

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 600,
  },
  snackbar: {
    margin: theme.spacing(1),
  },
}));

export default function Reports() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <SnackbarContent className={classes.snackbar} message="lost my money during the worker painting my room" action={action} />
      <SnackbarContent className={classes.snackbar} message="He was a layer" action={action}/>
      <SnackbarContent className={classes.snackbar} message="I'm fallen down in the stare case" action={action}/>
      <SnackbarContent className={classes.snackbar} message="Great job" action={action}/>
      <SnackbarContent className={classes.snackbar} message="lost my money during the worker painting my room" action={action} />
      <SnackbarContent className={classes.snackbar} message="He was a layer" action={action}/>
      <SnackbarContent className={classes.snackbar} message="I'm fallen down in the stare case" action={action}/>
      <SnackbarContent className={classes.snackbar} message="Great job" action={action}/>
    </div>
  );
}