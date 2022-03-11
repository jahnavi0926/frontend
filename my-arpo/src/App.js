import './App.css';
import LoginPage from './pages/LoginPage';
import StudentDashboard from './pages/StudentDashboard';
import InstructorHomepage from './pages/InstructorHomepage';
import GenQueryAddition from './pages/GenQueryAddition';
import PrivateQueryAddition from './pages/PrivateQueryAddition'
import ForumView from './pages/ForumView';
import DashboardForumQuery from './components/DashboardForumQuery';
import InstructorForumDasboard from './pages/InstructorForumDasboard';
function App() {
  return (
    <div className="App ">
      {/* <LoginPage /> */}
      {/* <StudentDashboard /> */}

       {/* <InstructorHomepage /> */}
      {/*<GenQueryaddition /> */}
      {/* <PrivateQueryaddition /> */}

       {/* <InstructorHomepage /> */}
       {/* <GenQueryAddition />  */}
      {/* <PrivateQueryAddition /> */}
      {/* <ForumView/> */}
      {/* <DashboardForumQuery/> */}
      <InstructorForumDasboard/>
    </div>
  );
}


export default App;
