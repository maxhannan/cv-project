import { useState } from 'react';
import EditBtn from '../EditBtn';
import PersonalDisplay from './PersonalDisplay';
import PersonalForm from './PersonalForm';

const Personal = () => {
  const [editing, setEditing] = useState(true)
  
  const [personalInfo, setPersonInfo] = useState({ 
    firstName: '',
    lastName: '', 
    position: '',
    addressOne: '',
    addressTwo: '',
    phone: '',
    email: '',
  });
  
  const handleChange = (e) => {
    setPersonInfo(prevState => {
      return {...prevState, 
        [e.target.name]: e.target.value}
    })
  }

  return ( 
    <div className="Personal" style = {personalStyle}>
      <EditBtn 
      editing = {editing} 
      editFn = {() => setEditing(!editing)}  
      sectionTitle = 'Personal Info' />
      {!editing && <PersonalDisplay info = {personalInfo}/>}
      {editing && 
      <PersonalForm info = {personalInfo} setInfo = {handleChange}/>}
    </div>
  );
}
 
export default Personal;
//Styles
const personalStyle = {
  display: 'flex',
  flexDirection: 'column',
  marginBottom: '2vh',
  width: '100%'
}
