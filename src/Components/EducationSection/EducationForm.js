import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';

const EducationForm = ({setEditing , setShowForm, delFn, info, handleChange}) => {
  const handleSubmit = (e) =>  {
    e.preventDefault()
    setEditing(editing => false)
    setShowForm(showForm => !showForm)
  }
  return ( 
    <div className="EducationFormContainer">
      <form style = {formStyle} onSubmit = {handleSubmit}>
      <TextField 
        value = {info.university}
        onChange = {handleChange}
        id= 'university'
        label="University or School Name" 
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
        value = {info.degree}
        onChange = {handleChange}
        id= 'degree'
        label="Area of Study / Degree" 
        variant="outlined"   
        style = {{gridArea: 'd'}} 
        fullWidth
        required/>
        <Button style = {{gridArea: 'e'}} color = 'primary' type = 'submit' variant = 'outlined'>Save</Button>
        <Button style = {{gridArea: 'f'}} color = 'secondary' onClick = {delFn} variant = 'outlined'>Delete</Button>
      </form>
    </div>
  );
}
 
export default EducationForm;

const formStyle = {
  display: 'grid',
  gridTemplateAreas: `
  "a a a a a a" 
  "b b b c c c" 
  "d d d d d d"
  " . .  e f . . "`,
  gridGap: '1em'
}