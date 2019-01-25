import React from 'react';
import classNames from 'classnames';
import { makeStyles } from '@material-ui/styles';
import TextField from '@material-ui/core/TextField';
import { Form, Field } from 'react-final-form'
import { withStyles } from '../../node_modules/@material-ui/core';


const useStyles = makeStyles(theme => ({
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
    width: 200,
  },
}));



function Registration() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    name: 'Cat in the Hat',
    age: '',
    multiline: 'Controlled',
  });


  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  return (
    <form className={classes.container} noValidate autoComplete="off">


      <TextField
        id="outlined-name"
        label="Name"
        className={classes.textField}
        value={values.name}
        onChange={handleChange('name')}
        margin="normal"
        variant="outlined"
      />
    
      <TextField
        id="outlined-bare"
        className={classes.textField}
        defaultValue="Bare"
        margin="normal"
        variant="outlined"
      />
    </form>
 
    

);

}      

export default withStyles(styles)(Registration);