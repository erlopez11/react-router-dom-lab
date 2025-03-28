import { useState } from 'react'
import { Route, Routes } from 'react-router';
import MailboxList from './components/MailBoxList/MailboxList';
import MailboxForm from './components/MailboxForm/MailboxForm';
import MailboxDetails from './components/MailboxDetails/MailboxDetails';
import './App.css'
import { Route } from 'react-router'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <Routes>
        <Route
          path='/'
          element={<main><h1>Post Office</h1></main>} 
        />

        <Route 
          path='/mailboxes'
          element={<MailboxList />}
        />

        <Route 
          path='/new-mailbox'
          element={<MailboxForm />}
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
