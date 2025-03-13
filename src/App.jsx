import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/landing-page';
import WalletConnect from './pages/connect-wallet';
import HomePage from './pages/Home-Page.jsx'
// import CreateAccount from './pages/CreateAccount.jsx'
// import CreatePassword from './pages/create-password.jsx'
// import SetupComplete from './pages/setup-complete.jsx'
// import Login from './pages/login.jsx'
import Sidebar from './pages/Sidebar.jsx'
import EmailList from './pages/Email-list.jsx'
import EmailComposePage from './pages/Email-view.jsx'
import InboxPage from './pages/Inbox.jsx'


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/connect-wallet" element={<WalletConnect />} />
        <Route path="/Home-page" element={<HomePage />} />
        {/* <Route path="/CreateAccount" element={<CreateAccount />} />
        <Route path="/CreatePassword" element={<CreatePassword />} />
        <Route path="/setup-complete" element={<SetupComplete />} />
        <Route path="/login-page" element={<Login />} /> */}
        <Route path="/Side-bar" element={<Sidebar />} />
        <Route path="/Email-list" element={<EmailList />} />
        <Route path="/Email-view" element={<EmailComposePage/>} />
        <Route path="/Inbox" element={<InboxPage/>} />
        
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;