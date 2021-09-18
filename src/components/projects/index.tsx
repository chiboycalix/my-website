import React from "react";
import "./projects.scss";
import Schoolng from "../../assets/schoolng.png";
import SmartVisitorsApp from "../../assets/smartVisitorsApp.png";
import ApprovalWorkflow from "../../assets/approvalWorkflow.png";
import Mcash from "../../assets/mcash.png";
import GSI from "../../assets/GSI.png";
import centralpay from "../../assets/centralpay.png";

const Projects: React.FC = () => {
  return (
    <div className="projectsWrapper" id="projects">
      <p className="latestProjectsTitle">Latest projects</p>
      <h1 className="myLatestProjectsTitle">My Latest Projects</h1>
      <p>
        Here is a list of my most recent projects and stacks used in developing
        them
      </p>

      <div className="projectsCards">
        <div className="projectCard">
          <div className="projectImg">
            <img src={Schoolng} alt="Schoolng" />
          </div>
          <div className="projectCardBody">
            <h2>Schoolng</h2>
            <p>
              A startup that connects students from different universities for
              information sharing
            </p>
          </div>
        </div>
        <div className="projectCard">
          {" "}
          <div className="projectImg">
            <img src={SmartVisitorsApp} alt="SmartVisitorsApp" />
          </div>
          <div className="projectCardBody">
            <h2>Smart Visitor Manager</h2>
            <p>
              An application for managining visitors checkin and checkout time
            </p>
          </div>
        </div>
        <div className="projectCard">
          {" "}
          <div className="projectImg">
            <img src={ApprovalWorkflow} alt="ApprovalWorkflow" />
          </div>
          <div className="projectCardBody">
            <h2>Approval Workflow</h2>
            <p>A solution that greatly simplifies document approval flow</p>
          </div>
        </div>
      </div>

      <div className="projectsCards">
        <div className="projectCard">
          <div className="projectImg">
            <img src={Mcash} alt="Mcash" />
          </div>
          <div className="projectCardBody">
            <h2>mCash</h2>
            <p>
              A payment solution that uses telcom services providers USSD system
            </p>
          </div>
        </div>
        <div className="projectCard">
          {" "}
          <div className="projectImg">
            <img src={GSI} alt="GSI" />
          </div>
          <div className="projectCardBody">
            <h2>GSI</h2>
            <p>A solution to monitor and penalize loan payment defaulters</p>
          </div>
        </div>
        <div className="projectCard">
          {" "}
          <div className="projectImg">
            <img src={centralpay} alt="centralpay" />
          </div>
          <div className="projectCardBody">
            <h2>CentralPay</h2>
            <p>An online payment solution used by ecommerce merchants</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
