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

  //Resource dummy data
  let resources = {
    national: {
      links: ["https://www.google.com/", "https://www.bing.com/", "https://www.yahoo.com"],
      titles: ["Fraternity Guidelines", "Merch Shop", "National Website"],
    },
    chapter: {
      links: ["https://www.themuse.com/advice/the-ultimate-interview-guide-30-prep-tips-for-job-interview-success","https://www.indeed.com/", "https://www.forbes.com/sites/nicolelapin/2021/01/19/how-to-land-a-job-in-2021/?sh=58fed91439a2"],
      titles: ["Interview Prep","Indeed", "How to Land a Job"],
    },
  }

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


  // SISTERS DATA / FUNCTIONS
  const [sisters, setSisters] = useState(null)
  const [filteredSisters, setFilteredSisters] = useState(sisters)

  const onSisterFilterSubmit = (filter) => {
    filter.position.toLowerCase()
    filter.company.toLowerCase()
    filter.location.toLowerCase()

    if (filter.position === '' && filter.company === '' && filter.location === '') {
      setFilteredSisters(sisters)
      return
    }

    if (filter.position) {
      let positionFilter = sisters.filter(sister => sister.current_position_txt.toLowerCase().includes(filter.position))

      if (filter.company) {
        let companyFilter = positionFilter.filter(sister => sister.current_company_txt.toLowerCase().includes(filter.company))

        if (filter.location) {
          let locationFilter = companyFilter.filter(sister => sister.current_city_txt.toLowerCase().includes(filter.location))

          setFilteredSisters(locationFilter)
        }

        setFilteredSisters(companyFilter)
      }
      else if (filter.location) {
        let locationFilter = positionFilter.filter(sister => sister.current_city_txt.toLowerCase().includes(filter.location))

        setFilteredSisters(locationFilter)
      }

      setFilteredSisters(positionFilter)
    }
    else if (filter.company) {
      let companyFilter = sisters.filter(sister => sister.current_company_txt.toLowerCase().includes(filter.company))

      if (filter.location) {
        let locationFilter = companyFilter.filter(sister => sister.current_city_txt.toLowerCase().includes(filter.location))

        setFilteredSisters(locationFilter)
      }

      setFilteredSisters(companyFilter)
    }
    else if (filter.location) {
      let locationFilter = sisters.filter(sister => sister.current_city_txt.toLowerCase().includes(filter.location))

      setFilteredSisters(locationFilter)
    }
  }

  const getSisters = async () => {
    const response = await fetch("http://127.0.0.1:8000/api/sisters/")
    const data = await response.json()

    setSisters(data)
    setFilteredSisters(data)
  }

  useEffect(() => {
    getSisters()
  }, [])


  return (
    <div className="App">
      {/* IF user is logged in, Navigate to appropriate dashboard else Navigate to login */}
      {!authenticated ?

        <Routes>
          <Route path="/" element={<Navigate to='/login' />} />
          <Route path="/login" element={<Landing
            handleChange={handleChange}
            handleLogin={handleLogin}
          />} />
        </Routes>
        :
        <Routes>
          <Route path="/dashboard" element={<MemberDashboard resources={resources.national} title={"National"}/>} />

          <Route
            path="/findcoach"
            element={<FindCoach
              filteredSisters={filteredSisters}
              getSisters={getSisters}
              onSisterFilterSubmit={onSisterFilterSubmit}
            />}
          />

          <Route path="/findcoach/add" element={<NewCoach />} />

          <Route path="/jobhub" element={<JobHub resources={resources.chapter} title={"Chapter Job"}/>} />
          <Route path="/jobhub/add" element={<AddJob />} />

          <Route path="/profile" element={<Profile />} />
        </Routes>
      }
    </div >
  );
}

export default App;
