import React from "react";
import { Link } from "react-router-dom";


const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2 className="sidebar-logo">Email</h2>
      <Link to="/compose" className="compose-btn">✉️ Compose</Link>
      <ul className="menu">
        <li><Link to="/inbox">📥 Inbox</Link></li>
        <li><Link to="/starred">⭐ Starred</Link></li>
        <li><Link to="/sent">📤 Sent</Link></li>
        <li><Link to="/drafts">📝 Drafts</Link></li>
        <li><Link to="/important">❗ Important</Link></li>
        <li><Link to="/spam">🚫 Spam</Link></li>
        <li><Link to="/archive">📦 Archive</Link></li>
        <li><Link to="/trash">🗑 Trash</Link></li>
      </ul>
     
    </div>
  );
};

export default Sidebar;
