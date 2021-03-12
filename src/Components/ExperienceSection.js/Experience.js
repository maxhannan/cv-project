import {useState} from 'react'
import AddBtn from "../AddBtn";
import uniqid from 'uniqid'
import ExperienceItem from './ExperienceItem';
const Experience = () => {

  const [experienceItems, setExperienceItems] = useState([uniqid()])
  const [editing, setEditing] = useState(false)
  
  const handleAdd = () => {
    if(!editing){
      setExperienceItems(() => [...experienceItems, uniqid()])
    }
  }

  const deleteExperience = (id) => {
    console.log(id)
    setExperienceItems(() => {
      const newList = [...experienceItems].filter(item => item !== id)
      return(newList)
    })
  }

  return ( 
    <div className="ExperienceContainer" style = {ExperienceContainer}>
      <AddBtn clickFn = {handleAdd} sectionTitle = 'Experience' editing = {editing}/>
      {experienceItems 
      && experienceItems.map(id => <ExperienceItem 
      editing = {editing} 
      key = {id} id = {id} 
      setEditing = {setEditing} 
      delFn = {deleteExperience} />)}
    </div>
   );
}
 
export default Experience;
const ExperienceContainer = {
  display: 'flex',
  flexDirection: 'column',
  marginBottom: '2vh',
  width: '100%'
}