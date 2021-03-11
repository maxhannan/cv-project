import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import {MdModeEdit, MdDone} from 'react-icons/md'
const EditBtn = ({editing, editFn, sectionTitle}) => {
  return ( 
    <div className="btnHolder" style = {btnHolderStyle}>
      <Typography variant="h5" >
        {sectionTitle}
      </Typography>

      <div className="btnCont">
        <IconButton aria-label="edit" color = 'primary' onClick ={editFn}>
          {editing? <MdDone /> : <MdModeEdit />}
        </IconButton>
      </div>
    </div>
   );
}
 
export default EditBtn;

const btnHolderStyle = {
  display: 'flex',
  width: '100%',
  marginBottom: '2vh',
  alignItems: 'center',
  justifyContent: 'space-between',
  boxSizing: 'border-box',
  borderBottom: '2px solid #ccc'
}
