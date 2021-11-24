//https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Async_await
//https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API

import React, {useState, useEffect} from 'react'

const JournalDashboard = () => {

  let [journals, setJournals] = useState([])

  useEffect(() => {

  }, [])

  let getJournals = async () => {
      let response = await fetch('http://127.0.0.1/api/journals/')
      let data = await response.json()
      setJournals(data)
  }
  
  return (
    <div>
      Dashboard
    </div>
  )
}

export default JournalDashboard


