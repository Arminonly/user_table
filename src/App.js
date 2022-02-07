import React, { Fragment } from 'react'
import './App.css'
import Auth from './components/loginPage/Auth'
import Users from './components/users/Users'
import {ProgressMain} from './components/usersTable/progress/ProgressMain'
import ModulesMain from './components/modules/ModulesMain'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="wrapper">
      <Fragment>
        <Router>
          <Routes>
            <Route path="/" element={<Auth />} />
            <Route path="/Users" element={<Users />} />
            <Route path="/ProgressMain" element={<ProgressMain />} />
            <Route path="/ModulesMain" element={<ModulesMain />} />
          </Routes>
        </Router>
      </Fragment>
    </div>
  )
}

export default App
