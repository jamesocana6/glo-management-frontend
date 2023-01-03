import { Route, Routes } from 'react-router';
import './App.css';
import AddJob from './Pages/AddJob/AddJob';
import FindCoach from './Pages/FindCoach/FindCoach';
import JobHub from './Pages/JobHub/JobHub';
import Landing from './Pages/Landing/Landing';
import MemberDashboard from './Pages/MemberDashboard/MemberDashboard';
import NewCoach from './Pages/NewCoach/NewCoach';
import { Navigate } from 'react-router';

function App() {
  return (
    <div className="App">
      {/* <Profile/> */}
      {/* IF user is logged in, Navigate to appropriate dashboard else Navigate to login */}
      <Routes>
        <Route path="/" element={<Navigate to='/login' />} />
        <Route path="/login" element={<Landing/>}/>
        <Route path="/dashboard" element={<MemberDashboard/>}/>
        <Route path="/findcoach" element={<FindCoach/>}/>
        <Route path="/findcoach/add" element={<NewCoach/>}/>
        <Route path="/jobhub" element={<JobHub/>}/>
        <Route path="/jobhub/add" element={<AddJob/>}/>
      </Routes>
    </div>
  );
}

export default App;
