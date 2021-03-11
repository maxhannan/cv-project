
import TextField from '@material-ui/core/TextField';
import { useState } from 'react';
import  uniqid from 'uniqid';

const PersonalForm = ({info, setInfo}) => {

  return (  
  <div className="formContainer" style = {formContainer}>
    <div className="MainInfo" style = {mainInfo}>
      <TextField
      id={uniqid()}
      name = 'firstName' 
      value = {info.firstName}
      onChange = {setInfo}
      label="First Name" 
      variant="outlined"  
      fullWidth
      required/>
      <TextField 
      id={uniqid()} 
      label="Last Name" 
      name = 'lastName'
      value = {info.lastName} 
      onChange = {setInfo}
      variant="outlined"  
      fullWidth 
      required/>
      <TextField 
      id={uniqid()} 
      label="Job Title" 
      name = 'position'
      value = {info.position} 
      onChange = {setInfo}
      variant="outlined" 
      fullWidth 
      required/>
    </div>
    <div className="contactInfo" style = {contactInfo}>
      <TextField 
      id={uniqid()} 
      label="Address Line 1" 
      name = 'addressOne'
      value = {info.addressOne} 
      onChange = {setInfo}
      variant="outlined" 
      size = 'small' 
      fullWidth
      required/>
      <TextField 
      id={uniqid()} 
      label="Address Line 2"
      name = 'addressTwo'
      value = {info.addressTwo} 
      onChange = {setInfo} 
      variant="outlined"  
      size = 'small' 
      fullWidth 
      required/>
      <TextField id={uniqid()} 
      label="Phone" 
      name = 'phone'
      value = {info.phone} 
      onChange = {setInfo} 
      variant="outlined" 
      size = 'small'
      
      fullWidth 
      required/>
      <TextField 
      id={uniqid()} 
      label="Email" 
      name = 'email'
      type = 'email'
      value = {info.email} 
      onChange = {setInfo} 
      variant="outlined" 
      size = 'small' 
      fullWidth 
      required/>
    </div>
  </div>  
  );
}
 
export default PersonalForm;
const formContainer = {
  display: 'flex',
  height: '200px',
  justifyContent: 'space-between'
}
const mainInfo = {
  width: '48%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  boxSizing: 'border-box',
  justifyContent: 'space-between'

}
const contactInfo = {
  width: '48%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  boxSizing: 'border-box',
  justifyContent: 'space-between'
}