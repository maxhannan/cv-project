import TextField from '@material-ui/core/TextField';
import { useState } from 'react';
import  uniqid from 'uniqid';
import EditBtn from '../EditBtn';
import Typography from '@material-ui/core/Typography';

const Profile = () => {
  const [editing, setEditing] = useState(true)
  const [profile, setProfile] = useState('Lorem ipsum dolor sit amet consectetur adipisicing elit. Error possimus explicabo animi illo perspiciatis tempore ab hic, obcaecati dolor, aliquid necessitatibus nam atque! Magnam reprehenderit dicta dolores veritatis soluta, ullam asperiores quisquam vitae aliquam, similique cumque voluptas. Maiores sed corrupti suscipit, quis ratione dolore explicabo, numquam expedita, nam molestiae necessitatibus.')
  return ( 
    <div className="profileContainer" style = {profileStyle}>
      <EditBtn
      editing = {editing} 
      editFn = {() => setEditing(!editing)}  
      sectionTitle = 'Profile' />
      {!editing &&  <Typography variant="subtitle1">{profile}</Typography>}
      {editing && 
        <TextField 
          id={uniqid()} 
          label="A Brief Introduction" 
          name = 'position'
          value = {profile}
          onChange = {(e) => setProfile(e.target.value)}
          variant="outlined" 
          fullWidth 
          required
          multiline
          rows = {4}/> }
    </div>
   );
}
export default Profile;

const profileStyle = {
  display: 'flex',
  flexDirection: 'column',
  marginBottom: '2vh',
  width: '100%'
}
