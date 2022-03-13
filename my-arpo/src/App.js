import './App.css';
import LoginPage from './pages/LoginPage';
import StudentDashboard from './pages/StudentDashboard';
import InstructorHomepage from './pages/InstructorHomepage';
import GenQueryAddition from './pages/GenQueryAddition';
import PrivateQueryAddition from './pages/PrivateQueryAddition'
import ForumView from './pages/ForumView';
import DashboardForumQuery from './components/DashboardForumQuery';
import InstructorForumDasboard from './pages/InstructorForumDasboard';
import AddNotification from './pages/AddNotification'
import NotifDashboard from './pages/NotifDashboard';
import Profile from './pages/Profile';
import HelpDesk from './pages/HelpDesk';
import Table from './components/Table';
import Participants from './pages/Participants';
function App() {
  return (
    <div className="App ">
      {/* { <LoginPage /> } */}
      {/* { <StudentDashboard /> } */}

       {/* { <InstructorHomepage /> } */}
      {<GenQueryAddition /> }
      {/* { <PrivateQueryAddition /> } */}

       {/* { <InstructorHomepage /> } */}
       {/* <GenQueryAddition />  */}
      {/* <PrivateQueryAddition /> */}
      {/* <ForumView/> */}
       {/* <DashboardForumQuery/> */}
       {/* <NotifDashboard/> */}
     {/* <InstructorForumDasboard/> */}
      {/* <AddNotification/> */}
      {<Profile/>}
      {<HelpDesk/>}
      {<Participants/>}
   
    </div>
  );
}


export default App;
