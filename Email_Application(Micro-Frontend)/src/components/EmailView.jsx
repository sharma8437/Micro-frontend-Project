import React from "react";
import { useParams } from "react-router-dom";

const EmailView = () => {
  const { id } = useParams();
  const storedEmails = JSON.parse(localStorage.getItem("emails")) || [];
  const email = storedEmails.find((email) => email.id === id);

  return (
    <div
      className="email-view"
      style={{
        padding: "20px",
        margin: "20px auto",
        background: "#f7f9fc",
        borderRadius: "8px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
      }}
    >
      {email ? (
        <>
          <h2>📄 {email.subject}</h2>
          <p>
            <strong>To:</strong> {email.to}
          </p>
          <p>{email.body}</p>
        </>
      ) : (
        <p>Email not found.</p>
      )}
    </div>
  );
};

export default EmailView;
