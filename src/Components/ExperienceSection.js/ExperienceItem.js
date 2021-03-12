import { useEffect, useState } from 'react';
import ExperienceDisplay from './ExperienceDisplay';
import ExperienceForm from './ExperienceForm';

const ExperienceItem = ({id, setEditing, delFn, editing}) => {
  const [showForm, setShowForm] = useState(true)
  const [info, setInfo] = useState({
    id: id,
    company : '',
    position: '',
    startDate: '',
    endDate: '',
    descrip: '' ,
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
    <div className="ExperienceItem" id = {id} style = {ExperienceItemStyle}>
      {!showForm && <ExperienceDisplay 
      info = {info} 
      editing = {editing} 
      handleEdit = {handleEdit} 
      delFn = {handleDelete}/>}
      { showForm && 
        <ExperienceForm
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
 
export default ExperienceItem;

const ExperienceItemStyle = {
  marginBottom: '1em'
}