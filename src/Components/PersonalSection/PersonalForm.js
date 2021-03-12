import TextField from '@material-ui/core/TextField';
import  uniqid from 'uniqid';

const PersonalForm = ({info, setInfo}) => {
  
  const validateEmail = (email)  => {
    if(email === '') {
      return true
    }
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email.toLowerCase());
  }
  return (  
  <div className="formContainer" style = {formContainer}>
    <div className="MainInfo" style = {mainInfo}>
      <TextField
      id={uniqid()}
      error = {info.firstName.length< 2 && info.firstName !== '' }
      name = 'firstName' 
      value = {info.firstName}
      onChange = {setInfo}
      label="First Name" 
      variant="outlined"  
      fullWidth
      />
      <TextField 
      id={uniqid()} 
      error = {info.lastName.length< 2 && info.lastName !== '' }
      label="Last Name" 
      name = 'lastName'
      value = {info.lastName} 
      onChange = {setInfo}
      variant="outlined"  
      fullWidth 
      />
      <TextField 
      id={uniqid()} 
      label="Job Title" 
      error = {info.position.length< 2 && info.position !== ''}
      name = 'position'
      value = {info.position} 
      onChange = {setInfo}
      variant="outlined" 
      fullWidth 
      />
    </div>
    <div className="contactInfo" style = {contactInfo}>
      <TextField 
      id={uniqid()} 
      label="Address Line 1" 
      name = 'addressOne'
      error = {info.addressOne.length< 2  && info.addressOne !== ''}
      value = {info.addressOne} 
      onChange = {setInfo}
      variant="outlined" 
      size = 'small' 
      fullWidth
      />
      <TextField 
      id={uniqid()} 
      label="Address Line 2"
      name = 'addressTwo'
      error = {info.addressTwo.length< 2 && info.addressTwo !== '' }
      value = {info.addressTwo} 
      onChange = {setInfo} 
      variant="outlined"  
      size = 'small' 
      fullWidth 
      />
      <TextField id={uniqid()} 
      label="Phone" 
      name = 'phone'
      error = {info.phone.length< 8 && info.phone !== '' }
      value = {info.phone} 
      onChange = {setInfo} 
      variant="outlined" 
      size = 'small'
      
      fullWidth 
      required/>
      <TextField 
      id={uniqid()}
      error = {!validateEmail(info.email)} 
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