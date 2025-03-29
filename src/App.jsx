import { useState } from 'react'
import { Route, Routes } from 'react-router';
import MailboxList from './components/MailBoxList/MailboxList';
import MailboxForm from './components/MailboxForm/MailboxForm';
import MailboxDetails from './components/MailboxDetails/MailboxDetails';
import NavBar from './components/NavBar/NavBar';
import './App.css'

function App() {
  const [mailboxes, setMailboxes] = useState([]);

  const addBox = (newMailboxData) => {
    newMailboxData._id = mailboxes.length + 1;
    setMailboxes([...mailboxes, newMailboxData])
  };

  return (
    <>
      <NavBar />
      <Routes>
        <Route
          path='/'
          element={<main><h1>Post Office</h1></main>} 
        />

        <Route 
          path='/mailboxes'
          element={<MailboxList mailboxes={mailboxes}/>}
        />

        <Route 
          path='/new-mailbox'
          element={<MailboxForm addBox={addBox}/>}
        />

        <Route 
          path= '/mailboxes/:mailboxId'
          element={<MailboxDetails />}
        />
      </Routes>
    </>
  )
}

export default App
