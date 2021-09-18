import React from "react";
import "./contact.scss";
import { AiOutlineMail, IoCallOutline, FaLinkedinIn } from "react-icons/all";

const Contact: React.FC = () => {
  return (
    <div className="contactWrapper" id="contact">
      <p className="contactTitle">contact me</p>
      <h1 className="waysToContactMeTitle">Ways to Contact Me</h1>
      <p>These are the channels through which I can be contacted</p>
      <div className="contactCardWrapper">
        <div className="contactCard">
          <AiOutlineMail /> <p>igwechinonso77@gmail.com</p>
        </div>
        <div className="contactCard">
          <IoCallOutline />
          <p>+234 81 65842442</p>
        </div>
        <div className="contactCard">
          <FaLinkedinIn />
          <p>igwe-chinonso/</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
