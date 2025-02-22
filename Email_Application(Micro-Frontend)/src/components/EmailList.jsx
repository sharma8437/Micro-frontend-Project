import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar.jsx";

const emails = [
  { id: 1, subject: "Meeting Reminder", sender: "nikeshsharma@test.com" },
  { id: 2, subject: "Project Update", sender: "nikeshsharma@test.com" },
  { id: 2, subject: "Project Update", sender: "nikeshsharma@test.com" },
  { id: 1, subject: "Meeting Reminder", sender: "nikeshsharma@test.com" },
  { id: 2, subject: "Project Update", sender: "nikeshsharma@test.com" },
  { id: 2, subject: "Project Update", sender: "nikeshsharma@test.com" },
  { id: 1, subject: "Meeting Reminder", sender: "nikeshsharma@test.com" },
  { id: 2, subject: "Project Update", sender: "nikeshsharma@test.com" },
  { id: 2, subject: "Project Update", sender: "nikeshsharma@test.com" },
  { id: 1, subject: "Meeting Reminder", sender: "nikeshsharma@test.com" },
  { id: 2, subject: "Project Update", sender: "nikeshsharma@test.com" },
  { id: 2, subject: "Project Update", sender: "nikeshsharma@test.com" },
];

const EmailList = () => {
  return (
    <>
      <div>
        <div
          className="email-list"
          style={{ overflowY: "scroll", height: "80vh" }}
        >
     
          <div
            style={{ position: "fixed", width: "75%", backgroundColor: "#fff" }}
          >
            <h2 style={{ color: "#0e0c59" }}>Inbox</h2>
            <div style={{ border: "1px solid black" }}></div>
          </div>
          <ul style={{ marginTop: "9%" }}>
            {emails.map((email) => (
              <li key={email.id} className="email-item">
                <Link to={`/email/${email.id}`} className="email-link">
                  <strong>{email.sender}</strong> - {email.subject}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default EmailList;
