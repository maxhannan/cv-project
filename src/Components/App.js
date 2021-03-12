import ResumeContainer from "./ResumeContainer";


function App() {
  return (
    <div className="App">
      <div className="MainContainer" style = {mainContainerStyle}>
        <ResumeContainer />
      </div>
    </div>
  );
}

export default App;

const mainContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  
}