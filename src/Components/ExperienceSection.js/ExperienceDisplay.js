import Typography from '@material-ui/core/Typography';
import {MdModeEdit, MdDelete} from 'react-icons/md'
import IconButton from '@material-ui/core/IconButton';

const ExperienceDisplay = ({info, handleEdit, editing, delFn}) => {

  return ( 
    <div className="ExperienceDisplay" style = {ExperienceDisplayStyle}>
      <div className="headContainer" style = {headContainerStyle}>
      <div className="uniContainer" style = {uniContainerStyle}>
        <div className="nameContainer">
        <Typography variant="h5">
          {info.position} 
        </Typography>
        <Typography variant="h5" style = {{color: 'gray'}}>
          {info.company}
        </Typography>
        </div>
        <div className="startD" style = {startDStyle} >
        <Typography variant="subtitle1" >
          {info.startDate.split('-')[0]} - {info.endDate.split('-')[0]}
        </Typography>
        </div>
       
      </div>
      <div className="btnHolder" style = {btnHolderStyle}>
        <IconButton aria-label="edit" onClick = {handleEdit} color = 'primary' disabled = {editing}>
          <MdModeEdit />
        </IconButton>
        <IconButton aria-label="edit" onClick = {delFn} color = 'secondary'>
          <MdDelete />
        </IconButton>
      </div>  
      </div>
      <div className="hello" style = {respStyle}>
      <Typography variant="subtitle1">{info.descrip}</Typography>
      </div>
    </div>
  );
}
 
export default ExperienceDisplay;

const ExperienceDisplayStyle = {
  display: 'flex',
  borderBottom: '1px dotted #ccc',
  flexDirection: 'column',
}
const headContainerStyle = {
  display: 'flex',
}
const respStyle = {
  padding: '10px'
}

const uniContainerStyle = {
  width: '75%',
  display: 'flex',
  justifyContent: 'space-between'
}

const btnHolderStyle = {
  width: '25%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
}
const startDStyle = {
  display: 'flex',
  color: 'gray'

}
