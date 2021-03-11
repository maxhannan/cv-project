import { useState } from "react";
import Container from '@material-ui/core/Container';
import Personal from "./Personal";

const ResumeContainer = () => {
  const [personalInfo, setPersonInfo] = useState({ 
    firstName: '',
    lastName: '', 
    address: '',
  });

  return (
    <Container maxWidth="md">
        <div className="resumeContainer" style = {containerStyle}>
          <Personal/>
        </div>
       
    </Container>
   
  );
};

export default ResumeContainer;
const containerStyle = {
  margin: '0',
  marginTop: '2vw',
  border: '1px solid #ccc',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  borderRadius: '10px',
  padding: '2%'
}