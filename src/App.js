import { useState, useEffect } from "react";
import { Route, Routes, useNavigate, Navigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { fetchUserAsync } from "./reduxStore/reducers/authSlice";
import { fetchModelChoicesAsync } from "./reduxStore/reducers/modelChoicesSlice";
import Login from './Pages/Landing/Login/Login';
import Landing from './Pages/Landing/Landing';
import MemberDashboard from './Pages/MemberDashboard/MemberDashboard';
import Profile from './Pages/Profile/Profile';
import NewCoach from './Pages/NewCoach/NewCoach';
import FindCoach from './Pages/FindCoach/FindCoach';
import JobHub from './Pages/JobHub/JobHub';
import AddJob from './Pages/AddJob/AddJob';
import Donations from './Pages/Donations/Donations';

import './App.css';

function App() {

  //Resource dummy data
  let resources = {
    national: {
      links: ["https://www.google.com/", "https://www.bing.com/", "https://www.yahoo.com"],
      titles: ["Fraternity Guidelines", "Merch Shop", "National Website"],
    },
    chapter: {
      links: ["https://www.themuse.com/advice/the-ultimate-interview-guide-30-prep-tips-for-job-interview-success", "https://www.indeed.com/", "https://www.forbes.com/sites/nicolelapin/2021/01/19/how-to-land-a-job-in-2021/?sh=58fed91439a2"],
      titles: ["Interview Prep", "Indeed", "How to Land a Job"],
    },
  }

  const navigate = useNavigate();
  const { user, token, isLoading } = useSelector((state) => state.auth);
  const modelChoices = useSelector((state) => state.modelChoices);
  const dispatch = useDispatch();
  // console.log(token, user)


  useEffect(() => {
    if (!token) {
      navigate("/login");
    } else {
      dispatch(fetchUserAsync(token));
      dispatch(fetchModelChoicesAsync());
    }
  }, [dispatch, navigate, token]);

  if (isLoading) {
    return <div>Loading...</div>; 
  }
  console.log(modelChoices)
  return (
    <div className="App">
      {token && user ? (
        <Routes>
          <Route path="/dashboard" element={<MemberDashboard resources={resources.national} token={token} />} />
          <Route path="/findcoach" element={<FindCoach />} />
          <Route path="/findcoach/add" element={<NewCoach />} />
          <Route path="/jobhub" element={<JobHub resources={resources.chapter} title={"Chapter Job"} />} />
          <Route path="/jobhub/add" element={<AddJob />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/donations" element={<Donations />} />
          <Route path="/" element={<Navigate to="/dashboard" />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/login" element={<Landing />} />
          <Route path="/" element={<Navigate to="/login" />} />
        </Routes>
      )}
    </div>
  );
}

export default App;
