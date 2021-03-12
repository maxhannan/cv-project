import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';

const ExperienceForm = ({setEditing , setShowForm, delFn, info, handleChange}) => {
  const handleSubmit = (e) =>  {
    e.preventDefault()
    setEditing(editing => false)
    setShowForm(showForm => !showForm)
  }
  return ( 
    <div className="ExperienceFormContainer">
      <form style = {formStyle} onSubmit = {handleSubmit}>
      <TextField 
        value = {info.company}
        onChange = {handleChange}
        id= 'company'
        label="Organization" 
        variant="outlined"  
        style = {{gridArea: 'a'}} 
        fullWidth
        required/>
      <TextField
        value = {info.startDate}
        onChange = {handleChange}
        id="startDate"
        label="Start Date"
        type="date"
        style = {{gridArea: 'b'}} 
        variant = 'outlined'
        InputLabelProps={{
          shrink: true,
        }}
        required
      />
      <TextField
        value = {info.endDate}
        onChange = {handleChange}
        id="endDate"
        label="End Date"
        type="date"
        style = {{gridArea: 'c'}} 
        variant = 'outlined'
        InputLabelProps={{
          shrink: true,
        }}
        required
      />
      <TextField 
        value = {info.position}
        onChange = {handleChange}
        id= 'position'
        label="Job Title" 
        variant="outlined"   
        style = {{gridArea: 'd'}} 
        fullWidth
        required/>
        <TextField 
        id= 'descrip' 
        label="A Brief Description" 
        value = {info.descrip}
        onChange = {handleChange}
        variant="outlined"
        style = {{gridArea: 'g'}}  
        fullWidth 
        required
        multiline
        rows = {4}/> 
        <Button style = {{gridArea: 'e'}} color = 'primary' type = 'submit' variant = 'outlined'>Save</Button>
        <Button style = {{gridArea: 'f'}} color = 'secondary' onClick = {delFn} variant = 'outlined'>Delete</Button>
      </form>
    </div>
  );
}
 
export default ExperienceForm;

const formStyle = {
  display: 'grid',
  gridTemplateAreas: `
  "a a a a a a" 
  "b b b c c c" 
  "d d d d d d"
  "g g g g g g"
  " . .  e f . . "`,
  gridGap: '1em'
}