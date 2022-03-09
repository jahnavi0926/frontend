import './App.css';
import LoginPage from './pages/LoginPage';
import StudentDashboard from './pages/StudentDashboard';
import InstructorHomepage from './pages/InstructorHomepage';
import { GenQueryaddition } from './pages/GenQueryaddition';
import { PrivateQueryaddition} from './pages/PrivateQueryaddition'
function App() {
  return (
    <div className="App ">
      {/* <LoginPage /> */}
      {/* <StudentDashboard /> */}
      {/* <InstructorHomepage />
      <GenQueryaddition /> */}
      <PrivateQueryaddition />
    </div>
  );
}

export default App;
