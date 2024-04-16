import React, { useState } from "react";

const Contact = () => {
  const [username, SetUsername] = useState("");
  const [mobile, SetMobile] = useState("");
  const [email, SetEmail] = useState("");
  const [destination, SetDestination] = useState("");
  const handleUsernameChange = (e) => {
    SetUsername(e.target.value);
  };
  const handleEmailChange = (e) => {
    SetEmail(e.target.value);
  };
  const handleMobileChange = (e) => {
    SetMobile(e.target.value);
  };
  const handleDestinationChange = (e) => {
    SetDestination(e.target.value);
  };
  return (
    <div className="contact-us">
      <div className="story-headings">
        <h2 className="headingSuggestions">
          Start your journey : Contact Us for best plans
        </h2>
        <p className="center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi.
        </p>
      </div>
      <div className="fieldset">
          <input className="fields"
            type="text"
            placeholder="Your Full Name"
            value={username}
            onChange={handleUsernameChange}
          />
          <input className="fields"
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={handleEmailChange}
          />
          <input className="fields"
            type="number"
            placeholder="Your Contact Number"
            value={mobile}
            onChange={handleMobileChange}
          />
          <input className="fields"
            type="text"
            placeholder="Destination"
            value={destination}
            onChange={handleDestinationChange}
          />
          <button>Submit</button>
      </div>
    </div>
  );
};
export default Contact;
