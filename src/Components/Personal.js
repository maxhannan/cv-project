import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

import { useState } from 'react';
import {MdModeEdit, MdDone} from 'react-icons/md'

const Personal = () => {
  const [editing, setEditing] = useState(false)

  return ( 
    <div className="Personal" style = {personalStyle}>
        <div className="btnHolder" style = {btnHolderStyle}>
          <Typography variant="subtitle1" >
            Personal Info
          </Typography>

          <div className="btnCont">
            <IconButton aria-label="edit"  onClick ={() => setEditing(!editing)}>
              {editing? <MdDone /> : <MdModeEdit />}
            </IconButton>
        </div>
      
        </div>
        <div className="formContainer" style = {formContainer}>
          <div className="MainInfo" style = {mainInfo}>
            <TextField id="outlined-basic" label="First Name" variant="outlined"  fullWidth/>
            <TextField id="outlined-basic" label="Last Name" variant="outlined"  color = 'white' fullWidth />
            <TextField id="outlined-basic" label="Job Title" variant="outlined"  color = 'white' fullWidth />

          </div>
          <div className="contactInfo" style = {contactInfo}>
            <TextField id="outlined-basic" label="Address Line 1" variant="outlined" size = 'small' fullWidth/>
            <TextField id="outlined-basic" label="Address Line 2" variant="outlined"  size = 'small' color = 'white' fullWidth />
            <TextField id="outlined-basic" label="Phone" variant="outlined" size = 'small' color = 'white' fullWidth />
            <TextField id="outlined-basic" label="Email" variant="outlined" size = 'small' color = 'white' fullWidth />

          </div>
        </div>
    </div>
  );
}
 
export default Personal;
const personalStyle = {
  height: '300px',
  display: 'flex',
  flexDirection: 'column',
  borderBottom: '1px dotted #ccc',
  marginBottom: '2vh',
  width: '100%'
}
const btnHolderStyle = {

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingLeft: '10px',
  boxSizing: 'border-box'
}
const formContainer = {
  display: 'flex',
  height: '100%'
}
const mainInfo = {
  width: '50%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '1%',
  boxSizing: 'border-box',
  justifyContent: 'space-between'

}
const contactInfo = {
  width: '50%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '1.2%',
  boxSizing: 'border-box',
  justifyContent: 'space-between'
}