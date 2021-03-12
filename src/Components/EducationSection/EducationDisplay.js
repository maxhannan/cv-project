import Typography from '@material-ui/core/Typography';
import {MdModeEdit, MdDelete} from 'react-icons/md'
import IconButton from '@material-ui/core/IconButton';

const EducationDisplay = ({info, handleEdit, editing, delFn}) => {

  return ( 
    <div className="EducationDisplay" style = {EducationDisplayStyle}>
      <div className="uniContainer" style = {uniContainerStyle}>
        <Typography variant="h6">
          {info.degree} from {info.university}
        </Typography>
        <Typography variant="subtitle1" style = {{color: 'gray'}}>
          {info.startDate.split('-')[0]} - {info.endDate.split('-')[0]}
        </Typography>
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
  );
}
 
export default EducationDisplay;

const EducationDisplayStyle = {
  display: 'flex',
  borderBottom: '1px dotted #ccc'
}

const uniContainerStyle = {
  width: '75%',
  display: 'flex',
  flexDirection: 'column'
}

const btnHolderStyle = {
  width: '25%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
}