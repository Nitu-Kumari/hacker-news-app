import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';




const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  dense: {
    marginTop: 16,
  },
  menu: {
    width: 150,
  },



  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none'

  },


  root: {
    flexGrow: 1,
    overflow: 'hidden',
    padding: `0 ${theme.spacing.unit * 3}px`,
  },
  paper: {
    maxWidth: 300,
    margin: `${theme.spacing.unit}px auto`,
    padding: theme.spacing.unit * 1,
  },







});

const currencies = [
  {
    value: 'USD',
    label: '$',
  },
  {
    value: 'EUR',
    label: '€',
  },
  {
    value: 'BTC',
    label: '฿',
  },
  {
    value: 'JPY',
    label: '¥',
  },
];

class Registration extends React.Component {
  state = {
    email: '',
    username: '',
    password: '',

    

  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <form className={classes.container} noValidate autoComplete="off">     
     
<div className={classes.root}>
<Paper className={classes.paper}>
 <Grid container wrap="col" spacing={10}>
 <Grid item xs zeroMinWidth>
        
<TextField
          id="outlined-username-input"
          label="Username"
          className={classes.textField}
          type="username"
          name="username"
          autoComplete="username"
          margin="normal"
          variant="outlined"
        />
     

        <TextField
          id="outlined-email-input"
          label="Email"
          className={classes.textField}
          type="email"
          name="email"
          autoComplete="email"
          margin="normal"
          variant="outlined"
        />
        <TextField
          id="outlined-password-input"
          label="Password"
          className={classes.textField}
          type="password"
          autoComplete="current-password"
          margin="normal"
          variant="outlined"
        />



<Button variant="contained" color="primary" className={classes.button}>
  Submit
</Button>

</Grid>
  </Grid>
   </Paper>
  </div>
  </form>
      
      
    );
  }
}

Registration.propTypes = {
  classes: PropTypes.object.isRequired,
};




export default withStyles(styles)(Registration);