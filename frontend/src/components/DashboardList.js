import React from 'react'
import { Link } from 'react-router-dom'


const DashboardList = ({journal}) => {
  return (
    <Link to={`/journals/${journal.id}`}>
        <h3>{journal.body}</h3>
    </Link>
  )
}

export default DashboardList
