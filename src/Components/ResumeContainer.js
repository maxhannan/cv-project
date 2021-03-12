import Container from '@material-ui/core/Container';
import Personal from "./PersonalSection/Personal";
import Education from "./EducationSection/Education";
import Profile from "./ProfileSection/Profile";
import Experience from "./ExperienceSection.js/Experience";
import Typography from '@material-ui/core/Typography';

const ResumeContainer = () => {

  return (
    <Container maxWidth="md">
      <div className="header" style = {headerStyle}>
        <Typography variant="h2">Resume Creator</Typography>
      </div>
      <div className="resumeContainer" style = {containerStyle}>
        <Personal />
        <Profile />
        <Experience />
        <Education />
      </div>
    </Container>
   
  );
};

export default ResumeContainer;
const containerStyle = {
  margin: '0',

  marginBottom: '2vw',
  border: '2px solid #ccc',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '2%'
}
const headerStyle = {
  margin: '2vh',
  textAlign: 'center'
}