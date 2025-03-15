"use client"; // Add this at the top

import { useState } from "react";

const ContactLinks = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("devanshohri@gmail.com").then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
    });
  };

  return (
    <div className="info-text">
      <ul>
        <li>
          <button onClick={copyEmail}>
            <p style={{ textDecoration: "underline" }}>{copied ? "Copied!" : "Email"}</p>
          </button>
        </li>
        <li>
          <a href="https://linkedin.com/in/devanshohri" target="_blank" rel="noopener noreferrer">
            <p>LinkedIn</p>
          </a>
        </li>
        <li>
          <a href="https://instagram.com/devanshohri" target="_blank" rel="noopener noreferrer">
            <p>Instagram</p>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default ContactLinks;
