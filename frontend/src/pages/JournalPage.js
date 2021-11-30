import React, { useState, useEffect } from 'react'
import { Routes, Route, useParams } from "react-router-dom";


const JournalPage = () => {
    
    const { id } = useParams();
    const [journal, setJournal] = useState(null);

    useEffect(() => {

      const getJournal = async () => {
        const response = await fetch(`/api/journals/${id}/`);
        const data = await response.json();
        setJournal(data);
      }

      getJournal()
    }, [id]);  // <-- used as a dependency

    return (
        <div>
          <p>{journal?.body}</p>
        </div>
);
};

 
// const JournalPage = ({ match }) => {


//     let  journalId  = match.params.id
//     let [journal, setJournal] = useState(null)

//     useEffect(() => {
//         getJournal()
//     }, [journalId])

//     let getJournal = async () => {
//         let response = await fetch(`/api/journals/${journalId}/`)
//         let data = await response.json()
//         setJournal(data)
//     }

//     return (
//       <div>
//         <p>{journal?.body}</p>
//       </div>
//     )
// }

export default JournalPage;
