import {useState} from 'react'
import AddBtn from "../AddBtn";
import uniqid from 'uniqid'
import EducationItem from './EducationItem';


const Education = () => {
  const [educationItems, setEducationItems] = useState([uniqid()])
  const [editing, setEditing] = useState(false)
  
  const handleAdd = () => {
    if(!editing){
      setEducationItems(() => [...educationItems, uniqid()])
    }
  }
  
  const deleteEducation = (id) => {
    console.log(id)
    setEducationItems(() => {
      const newList = [...educationItems].filter(item => item !== id)
      return(newList)
    })
  }
  
  return ( 
    <div className="EducationContainer" style = {EducationContainerStyle}>
      <AddBtn clickFn = {handleAdd} sectionTitle = 'Education' editing = {editing}/>
      {educationItems && educationItems.map(id => <EducationItem editing = {editing} key = {id} id = {id} setEditing = {setEditing} delFn = {deleteEducation} />)}
    </div>
  );
}
 
export default Education;

const EducationContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  marginBottom: '2vh',
  width: '100%'
}