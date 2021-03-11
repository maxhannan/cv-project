import { useEffect, useState } from 'react';
import EducationDisplay from './EducationDisplay';
import EducationForm from './EducationForm';

const EducationItem = ({id, setEditing, delFn, editing}) => {
  const [showForm, setShowForm] = useState(true)
  const [info, setInfo] = useState({
    id: id,
    university : '',
    startDate: '',
    endDate: '',
    degree: '' ,
  })

  useEffect(() => {
    setEditing((editing) => !editing)
  }, [])

  const handleChange = (e) => {
    const targetState = e.target.id
    const newVal = e.target.value
    setInfo(prevState => {
      return {...prevState, [targetState]: newVal}
    })
  }

  const handleDelete = () => {
    delFn(id)
    setEditing(false)
  }

  const handleEdit = () => {
    if(!editing){
      setEditing((editing) => !editing)
      setShowForm(!showForm)
    }
   
  }

  return (
    <div className="EducationItem" id = {id} style = {educationItemStyle}>
      {!showForm && <EducationDisplay 
      info = {info} 
      editing = {editing} 
      handleEdit = {handleEdit} 
      delFn = {handleDelete}/>}
      { showForm && 
        <EducationForm 
          setEditing = {setEditing} 
          setShowForm = {setShowForm} 
          delFn = {handleDelete} 
          info = {info}
          handleChange = {handleChange}
          
        /> 
      }  
    </div>
    
   );
}
 
export default EducationItem;

const educationItemStyle = {
  marginBottom: '1em'
}