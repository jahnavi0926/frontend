import './App.css';
import LoginPage from './pages/LoginPage';
import StudentDashboard from './pages/StudentDashboard';
import InstructorHomepage from './pages/InstructorHomepage';
import GenQueryAddition from './pages/GenQueryAddition';
import PrivateQueryAddition from './pages/PrivateQueryAddition'
function App() {
  return (
    <div className="App ">
      {/* <LoginPage /> */}
      {/* <StudentDashboard /> */}
       {/* <InstructorHomepage /> */}
       {/* <GenQueryAddition />  */}
      <PrivateQueryAddition />
    </div>
  );
}

export default App;
