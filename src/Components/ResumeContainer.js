import { useState } from "react";
import Container from '@material-ui/core/Container';
import Personal from "./PersonalSection/Personal";
import Education from "./EducationSection/Education";
import Profile from "./ProfileSection/Profile";

const ResumeContainer = () => {
  const [personalInfo, setPersonInfo] = useState({ 
    firstName: 'Max',
    lastName: 'Hannan', 
    position: 'Web Developer',
    addressOne: '1101 Spring St NE',
    addressTwo: 'Minneapolis, Mn, 55413',
    phone: '239-218-1349',
    email: 'maxhannan124@gmail.com',
  });
  
  return (
    <Container maxWidth="md">
        <div className="resumeContainer" style = {containerStyle}>
          <Personal info = {personalInfo} setInfo = {setPersonInfo} />
          <Profile />
          <Education />
        </div>
    </Container>
   
  );
};

export default ResumeContainer;
const containerStyle = {
  margin: '0',
  marginTop: '2vw',
  marginBottom: '2vw',
  border: '2px solid #ccc',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '2%'
}