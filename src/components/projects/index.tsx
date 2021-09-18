import React from 'react'
import './projects.scss';
import Schoolng from '../../assets/schoolng.png'
import SmartVisitorsApp from '../../assets/smartVisitorsApp.png';
import ApprovalWorkflow from '../../assets/approvalWorkflow.png';
import Mcash from '../../assets/mcash.png';
import GSI from '../../assets/GSI.png';
import spaceX from '../../assets/spaceX.png';

const Projects: React.FC = () => {
  return (
    <div className="projectsWrapper">
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
              laboriosam fuga praesentium.
            </p>
          </div>
        </div>
        <div className="projectCard">
          {' '}
          <div className="projectImg">
            <img src={SmartVisitorsApp} alt="SmartVisitorsApp" />
          </div>
          <div className="projectCardBody">
            <h2>Schoolng</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
              laboriosam fuga praesentium.
            </p>
          </div>
        </div>
        <div className="projectCard">
          {' '}
          <div className="projectImg">
            <img src={ApprovalWorkflow} alt="ApprovalWorkflow" />
          </div>
          <div className="projectCardBody">
            <h2>Schoolng</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
              laboriosam fuga praesentium.
            </p>
          </div>
        </div>
      </div>

      <div className="projectsCards">
        <div className="projectCard">
          <div className="projectImg">
            <img src={Mcash} alt="Mcash" />
          </div>
          <div className="projectCardBody">
            <h2>Schoolng</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
              laboriosam fuga praesentium.
            </p>
          </div>
        </div>
        <div className="projectCard">
          {' '}
          <div className="projectImg">
            <img src={GSI} alt="GSI" />
          </div>
          <div className="projectCardBody">
            <h2>Schoolng</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
              laboriosam fuga praesentium.
            </p>
          </div>
        </div>
        <div className="projectCard">
          {' '}
          <div className="projectImg">
            <img src={spaceX} alt="spaceX" />
          </div>
          <div className="projectCardBody">
            <h2>Schoolng</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
              laboriosam fuga praesentium.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects
