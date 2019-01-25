import React from 'react';
import classNames from 'classnames';
import { makeStyles } from '@material-ui/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import { Form, Field } from 'react-final-form'


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



class Registration extends React.Component{

  onSubmit = async (values) => {
 
    }
   required = value => (value ? undefined : "Required")
 
   render(){
     return (
 <Form
       onSubmit={this.onSubmit}
       render={({ handleSubmit, pristine, invalid,submitting,values,handleChange,classes,Registration}) => (
         <form onSubmit={handleSubmit}>

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
 
    
)}
/>

);
}
}      

export default Registration;