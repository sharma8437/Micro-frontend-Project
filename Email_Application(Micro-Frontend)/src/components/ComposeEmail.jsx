import React, { useState } from "react";

const ComposeEmail = () => {
  const [email, setEmail] = useState({ to: "", subject: "", body: "" });

  const handleChange = (e) => {
    setEmail({ ...email, [e.target.name]: e.target.value });
  };

  const handleSend = (e) => {
    e.preventDefault();
    const newEmail = { id: Date.now().toString(), ...email };

    const storedEmails = JSON.parse(localStorage.getItem("emails")) || [];
    localStorage.setItem("emails", JSON.stringify([...storedEmails, newEmail]));

    alert(`Email sent to ${email.to}`);

    setEmail({ to: "", subject: "", body: "" });
  };

  return (
    <div className="compose-email">
      <h2>✉️ Compose Email</h2>
      <form onSubmit={handleSend}>
        <input
          type="email"
          name="to"
          placeholder="To"
          onChange={handleChange}
          value={email.to}
          required
        />
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          onChange={handleChange}
          value={email.subject}
          required
        />
        <textarea
          name="body"
          placeholder="Message"
          onChange={handleChange}
          value={email.body}
          required
        ></textarea>
        <button
          type="submit"
          style={{ width: "110px", height: "44px" }}
          className="compose-btn"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ComposeEmail;
