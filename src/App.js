import { useState, useEffect } from 'react';
import { Route, Routes, useNavigate, Navigate } from 'react-router';

import './App.css';

import Landing from './Pages/Landing/Landing';
import MemberDashboard from './Pages/MemberDashboard/MemberDashboard';
import Profile from './Pages/Profile/Profile';
import NewCoach from './Pages/NewCoach/NewCoach';
import FindCoach from './Pages/FindCoach/FindCoach';
import JobHub from './Pages/JobHub/JobHub';
import AddJob from './Pages/AddJob/AddJob';


function App() {
  const navigate = useNavigate()

  const [login, setLogin] = useState({
    email: "",
    password: "",
  })

  const [authenticated, setAuthenticated] = useState(localStorage.getItem("authenticated") || false);

  // handle login form changes
  const handleChange = (event) => {
    setLogin({ ...login, [event.target.name]: event.target.value })
  }

  // handle login form
  const handleLogin = (event) => {
    event.preventDefault()

    // if login successful, redirect to dashboard
    if (login.email === "echo@gmail.com" && login.password === "123") {
      setAuthenticated(true)
      localStorage.setItem("authenticated", true)
      navigate("/dashboard")
    } else {
      // else invalid username/password
    }
  }


  // memberS DATA / FUNCTIONS
  const [members, setMembers] = useState(null)
  const [filteredMembers, setFilteredMembers] = useState(members)

  const onMemberFilterSubmit = (filter) => {
    filter.position.toLowerCase()
    filter.company.toLowerCase()
    filter.location.toLowerCase()

    if (filter.position === '' && filter.company === '' && filter.location === '') {
      setFilteredMembers(members)
      return
    }
 

    if (filter.position) {
      let positionFilter = members.filter(member => member.current_position_txt.toLowerCase().includes(filter.position))

      if (filter.company) {
        let companyFilter = positionFilter.filter(member => member.current_company_txt.toLowerCase().includes(filter.company))

        if (filter.location) {
          let locationFilter = companyFilter.filter(member => member.current_city_txt.toLowerCase().includes(filter.location))

          setFilteredMembers(locationFilter)
        }

        setFilteredMembers(companyFilter)
      }
      else if (filter.location) {
        let locationFilter = positionFilter.filter(member => member.current_city_txt.toLowerCase().includes(filter.location))

        setFilteredMembers(locationFilter)
      }

      setFilteredMembers(positionFilter)
    }
    else if (filter.company) {
      let companyFilter = members.filter(member => member.current_company_txt.toLowerCase().includes(filter.company))

      if (filter.location) {
        let locationFilter = companyFilter.filter(member => member.current_city_txt.toLowerCase().includes(filter.location))

        setFilteredMembers(locationFilter)
      }

      setFilteredMembers(companyFilter)
    }
    else if (filter.location) {
      let locationFilter = members.filter(member => member.current_city_txt.toLowerCase().includes(filter.location))

      setFilteredMembers(locationFilter)
    }
  }

  const getMembers = async () => {
    const response = await fetch("http://127.0.0.1:8000/api/members/")
    const data = await response.json()

    setMembers(data)
    setFilteredMembers(data)
  }

  useEffect(() => {
    getMembers()
  }, [])


  return (
    <div className="App">
      {/* IF user is logged in, Navigate to appropriate dashboard else Navigate to login */}
      {/* {!authenticated ? */}

        <Routes>
          <Route path="/" element={<Navigate to='/login' />} />
          <Route path="/login" element={<Landing
            handleChange={handleChange}
            handleLogin={handleLogin}
          />} />
        {/* </Routes> */}
        {/* : */}
        {/* <Routes> */}
          <Route path="/dashboard" element={<MemberDashboard />} />

          <Route
            path="/findcoach"
            element={<FindCoach
              filteredMembers={filteredMembers}
              getMembers={getMembers}
              onMemberFilterSubmit={onMemberFilterSubmit}
            />}
          />

          <Route path="/findcoach/add" element={<NewCoach />} />

          <Route path="/jobhub" element={<JobHub />} />
          <Route path="/jobhub/add" element={<AddJob />} />

          <Route path="/profile" element={<Profile />} />
        </Routes>
      {/* } */}
    </div >
  );
}

export default App;
