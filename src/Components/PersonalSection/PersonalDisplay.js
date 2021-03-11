import Typography from '@material-ui/core/Typography';

const PersonalDisplay = ({info}) => {
  return ( 
    <div className="displayContainer" style = {displayContainer}>
      <div className="mainInfo" style = {mainInfo}>
        <Typography variant="h3">{info.firstName + ' ' + info.lastName}</Typography>
        <Typography variant="h5">{info.position}</Typography>
      </div>
      <div className="contactInfo" style = {contactInfo}>
        <Typography variant="subtitle1">{info.addressOne}</Typography>
        <Typography variant="subtitle1">{info.addressTwo}</Typography>
        <Typography variant="subtitle1">{info.phone}</Typography>
        <Typography variant="subtitle1">{info.email}</Typography>
      </div>
    </div>
  );
}
 
export default PersonalDisplay;

const displayContainer = {
  display: 'flex',
  height: '100%',
  paddingBottom: '2vh',
  
}

const mainInfo = {

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center'
}

const contactInfo = {
  

  wordWrap: 'break-word'

}