import { useState } from 'react';
import EditBtn from '../EditBtn';
import PersonalDisplay from './PersonalDisplay';
import PersonalForm from './PersonalForm';

const Personal = ({info, setInfo}) => {
  const [editing, setEditing] = useState(true)
  const handleChange = (e) => {
    setInfo(prevState => {
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
      {!editing && <PersonalDisplay info = {info}/>}
      {editing && 
      <PersonalForm info = {info} setInfo = {handleChange}/>}
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
