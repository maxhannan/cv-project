import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import {MdAdd} from 'react-icons/md'
const AddBtn = ({clickFn, sectionTitle, editing}) => {
  return ( 
    <div className="btnHolder" style = {btnHolderStyle}>
      <Typography variant="h5" >
        {sectionTitle}
      </Typography>

      <div className="btnCont">
        <IconButton aria-label="edit"  color = 'primary' onClick = {clickFn} disabled = {editing}>
           <MdAdd />
        </IconButton>
      </div>
    </div>
   );
}
 
export default AddBtn;

const btnHolderStyle = {
  display: 'flex',
  marginBottom: '2vh',
  alignItems: 'center',
  justifyContent: 'space-between',
  boxSizing: 'border-box',
  borderBottom: '2px solid #ccc'
}
