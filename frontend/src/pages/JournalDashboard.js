import React, { useState, useEffect } from 'react'

const JournalDashboard = () => {

  let [journals, setJournals] = useState([])

  useEffect(() => {
      getJournals()
  }, [])

  let getJournals = async () => {

      let response = await fetch('http://127.0.0.1:8000/api/journals/')
      let data = await response.json()
      console.log('DATA:', data)
      setJournals(data)
  }
  
  return (
    <div>
      Dashboard
    </div>
  )
}

export default JournalDashboard


