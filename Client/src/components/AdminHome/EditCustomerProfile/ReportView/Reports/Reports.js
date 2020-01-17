import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SnackbarContent from '@material-ui/core/SnackbarContent';
//import ViewButton from '../ViewButton/ViewButton';
import View from  '../View/View';
const action = (
  <View/>
);

const useStyles = makeStyles(theme => ({
  root: {
    width: 700,
    maxWidth: 1500,
  },
  snackbar: {
    margin: theme.spacing(1),
  },
}));

export default function Reports() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <SnackbarContent className={classes.snackbar} message="Lost money during the painter was painting the room" action={action} />
      <SnackbarContent className={classes.snackbar} message="He was a lier" action={action}/>
      <SnackbarContent className={classes.snackbar} message="I'm fallen down in the stare case" action={action}/>
      <SnackbarContent className={classes.snackbar} message="Great job" action={action}/>
      <SnackbarContent className={classes.snackbar} message="lost my money during the worker painting my room" action={action} />
      <SnackbarContent className={classes.snackbar} message="He was a layer" action={action}/>
      <SnackbarContent className={classes.snackbar} message="I'm fallen down in the stare case" action={action}/>
      <SnackbarContent className={classes.snackbar} message="Great job" action={action}/>
    </div>
  );
}