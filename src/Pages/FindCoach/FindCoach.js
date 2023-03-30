import React, { useState, useEffect } from "react";

import Banner from "../../Components/Banner/Banner";
import NavBar from "../../Components/NavBar/NavBar";
import CoachArea from "./CoachArea/CoachArea";
import CoachFilter from "./CoachFilter/CoachFilter";

const FindCoach = () => {
    const [coaches, setCoaches] = useState(null)
    const [filteredCoaches, setFilteredCoaches] = useState(coaches)
    const [filter, setFilter] = useState({
        position: '',
        company: '',
        location: '',
    })

    const handleFilterChange = (event) => {
        setFilter({ ...filter, [event.target.name]: event.target.value })
    }

    const handleFilterSubmit = (event) => {
        event.preventDefault()
        onCoachFilterSubmit(filter)
    }

    const onCoachFilterSubmit = (filter) => {
        filter.position.toLowerCase()
        filter.company.toLowerCase()
        filter.location.toLowerCase()

        if (filter.position === '' && filter.company === '' && filter.location === '') {
            setFilteredCoaches(coaches)
            return
        }


        if (filter.position) {
            let positionFilter = coaches.filter(member => member.current_position_txt.toLowerCase().includes(filter.position))

            if (filter.company) {
                let companyFilter = positionFilter.filter(member => member.current_company_txt.toLowerCase().includes(filter.company))

                if (filter.location) {
                    let locationFilter = companyFilter.filter(member => member.current_city_txt.toLowerCase().includes(filter.location))

                    setFilteredCoaches(locationFilter)
                }

                setFilteredCoaches(companyFilter)
            }
            else if (filter.location) {
                let locationFilter = positionFilter.filter(member => member.current_city_txt.toLowerCase().includes(filter.location))

                setFilteredCoaches(locationFilter)
            }

            setFilteredCoaches(positionFilter)
        }
        else if (filter.company) {
            let companyFilter = coaches.filter(member => member.current_company_txt.toLowerCase().includes(filter.company))

            if (filter.location) {
                let locationFilter = companyFilter.filter(member => member.current_city_txt.toLowerCase().includes(filter.location))

                setFilteredCoaches(locationFilter)
            }

            setFilteredCoaches(companyFilter)
        }
        else if (filter.location) {
            let locationFilter = coaches.filter(member => member.current_city_txt.toLowerCase().includes(filter.location))

            setFilteredCoaches(locationFilter)
        }
    }

    const getCoaches = async () => {
        const response = await fetch("http://127.0.0.1:8000/api/coaches/")
        const data = await response.json()

        setCoaches(data)
        setFilteredCoaches(data)
    }

    useEffect(() => {
        getCoaches()
    }, [])


    return (
        <div>
            <NavBar />
            <Banner bannerText={"Find a Coach"} />
            <CoachFilter
                handleFilterChange={handleFilterChange}
                handleFilterSubmit={handleFilterSubmit}
            />
            <CoachArea
                filteredCoaches={filteredCoaches}
                getCoaches={getCoaches}
            />
        </div>
    )
}

export default FindCoach;