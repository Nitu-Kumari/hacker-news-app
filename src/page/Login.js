import React from 'react';
import { Form, Field } from 'react-final-form'



class Login extends React.Component{

  onSubmit = async (values) => {
 
    }
   required = value => (value ? undefined : "Required")
 
   render(){
     return (
 <Form
       onSubmit={this.onSubmit}
       render={({ handleSubmit, pristine, invalid,submitting}) => (
         <form onSubmit={handleSubmit}>
 
           <Field name="name" validate={this.required}>
             {({ input, meta }) => (
               <div>
                 <label>Name</label>
                 <input {...input} type="name" />
                 {meta.error && meta.touched && <span style={{width:'300px'}} >{meta.error}</span>}
               </div>
             )}
           </Field>  
           <div className="buttons">
             <button type="submit" disabled={submitting || pristine}>
             submit
             </button>
             
           </div>
             </form>
           
           )}
        />
       
     );
     }
 }      
 export default  Login;
 
 
 
 
 
 
 
 
 
     
 
 
    
 
 
 
 
 
 
 
 
 






