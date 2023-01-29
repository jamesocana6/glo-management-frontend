import { useState } from 'react';
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
  const [sisters, setSisters] = useState(null)
  console.log("Sisters", sisters)

  // state for updated sisters
  const [filteredSisters, setFilteredSisters] = useState(sisters)
  console.log("Filtered Sisters", filteredSisters)

  const onSisterFilterSubmit = (filter) => {
    if (filter.position === '' && filter.company === '' && filter.location === '') {
      setFilteredSisters(sisters)
    }

    if (filter.position) {
      let positionFilter = sisters.filter(sister => sister.current_position_txt.includes(filter.position))

      if (filter.company) {
        let companyFilter = positionFilter.filter(sister => sister.current_company_txt.includes(filter.company))

        if (filter.location) {
          let locationFilter = companyFilter.filter(sister => sister.current_city_txt.includes(filter.location))

          setFilteredSisters(locationFilter)
          return
        }

        setFilteredSisters(companyFilter)
      }
      else if (filter.location) {
        let locationFilter = positionFilter.filter(sister => sister.current_city_txt.includes(filter.location))
        console.log('Current City Filter', locationFilter)

        setFilteredSisters(locationFilter)
        return
      }
      
      setFilteredSisters(positionFilter)
    }
    else if (filter.company) {
      let companyFilter = sisters.filter(sister => sister.current_company_txt.includes(filter.company))

      if (filter.location) {
        let locationFilter = companyFilter.filter(sister => sister.current_city_txt.includes(filter.location))

        setFilteredSisters(locationFilter)
      }
      
      setFilteredSisters(companyFilter)
    }
    else if (filter.location) {
      let locationFilter = sisters.filter(sister => sister.current_city_txt.includes(filter.location))

      setFilteredSisters(locationFilter)
    }
  }

  const getSisters = async () => {
    const response = await fetch("http://127.0.0.1:8000/api/sisters/")
    const data = await response.json()

    setSisters(data)
  }

  return (
    <div className="App">
      {/* <Profile/> */}
      {/* IF user is logged in, Navigate to appropriate dashboard else Navigate to login */}
      <Routes>
        <Route path="/" element={<Navigate to='/login' />} />
        <Route path="/login" element={<Landing />} />
        <Route path="/dashboard" element={<MemberDashboard />} />
        <Route
          path="/findcoach"
          element={<FindCoach
            sisters={sisters}
            getSisters={getSisters}
            onSisterFilterSubmit={onSisterFilterSubmit}
          />}
        />
        <Route path="/findcoach/add" element={<NewCoach />} />
        <Route path="/jobhub" element={<JobHub />} />
        <Route path="/jobhub/add" element={<AddJob />} />
      </Routes>
    </div>
  );
}

export default App;
