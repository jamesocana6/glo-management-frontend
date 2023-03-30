import { useState, useEffect } from 'react';
import { Route, Routes, useNavigate, Navigate } from 'react-router';
import { useSelector } from 'react-redux';

import Landing from './Pages/Landing/Landing';
import MemberDashboard from './Pages/MemberDashboard/MemberDashboard';
import Profile from './Pages/Profile/Profile';
import NewCoach from './Pages/NewCoach/NewCoach';
import FindCoach from './Pages/FindCoach/FindCoach';
import JobHub from './Pages/JobHub/JobHub';
import AddJob from './Pages/AddJob/AddJob';

import './App.css';

function App() {
  // const navigate = useNavigate()
  const { user } = useSelector((state) => state.auth);

  console.log("user", user)

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

  // const [login, setLogin] = useState({
  //   email: "",
  //   password: "",
  // })

  const [token, setToken] = useState(null)


  // // handle login form changes
  // const handleChange = (event) => {
  //   setLogin({ ...login, [event.target.name]: event.target.value })
  // }

  // // handle login form
  // const handleLogin = async (event) => {
  //   event.preventDefault()

  //   // check if username and password exist in backend
  //   const response = await fetch("http://127.0.0.1:8000/api/accounts/login/", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "Application/json",
  //     },
  //     body: JSON.stringify({ email: login.email, password: login.password })
  //   })

  //   const data = await response.json()


  //   if (data.token) {
  //     setToken(data.token)
  //     localStorage.setItem("token", data.token)
  //     navigate("/dashboard")
  //   } else {
  //     alert('invalid')
  //   }
  // }

  return (
    <div className="App">
      {/* IF user is logged in, Navigate to appropriate dashboard else Navigate to login */}
      {!user ?
        <Routes>
          <Route path="/" element={<Navigate to='/login' />} />
          <Route path="/login" element={<Landing />} />
        </Routes>
        :
        <Routes>
          <Route path="/dashboard" element={<MemberDashboard resources={resources.national} token={token} />} />

          <Route
            path="/findcoach"
            element={<FindCoach />}
          />

          <Route path="/findcoach/add" element={<NewCoach />} />

          <Route path="/jobhub" element={<JobHub resources={resources.chapter} title={"Chapter Job"} />} />
          <Route path="/jobhub/add" element={<AddJob />} />

          <Route path="/profile" element={<Profile />} />
        </Routes>

      }
    </div >
  );
}

export default App;
