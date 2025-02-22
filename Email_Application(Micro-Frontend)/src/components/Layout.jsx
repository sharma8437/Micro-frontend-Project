import React from "react";
import { Routes, Route, useLocation ,Outlet} from "react-router-dom";
import Sidebar from "./Sidebar.jsx";
import EmailList from "./EmailList.jsx";
import EmailView from "./EmailView.jsx";
import ComposeEmail from "./ComposeEmail.jsx";
import "../App.css";
import Navbar from "./Navbar.jsx";

const Layout = () => {
  const location = useLocation();

  const showEmailList = location.pathname === "/mail";

  return (
    <div className="app-container">
      
      <Sidebar />
     
<Outlet />
      <div className="main-content">

        {showEmailList && <EmailList />}

        <Routes>
          <Route path="/email/:id" element={<EmailView />} />
          <Route path="/compose" element={<ComposeEmail />} />
          <Route path="/sent" element={<EmailView />} />
          <Route path="/inbox" element={<EmailList />} />
        </Routes>
      </div>
    </div>
  );
};

export default Layout;
