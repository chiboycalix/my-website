import React from 'react';
import './contact.scss';
import { AiOutlineMail, IoCallOutline, FaLinkedinIn } from 'react-icons/all';

const Contact: React.FC = () => {
  return (
    <div className="contactWrapper">
      <p className="contactTitle">contact me</p>
      <h1 className="waysToContactMeTitle">Ways to Contact Me</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam,
        optio.
      </p>
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
}

export default Contact
