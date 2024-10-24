import React from 'react';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';  // LinkedIn and GitHub icons from Ant Design Icons
import { HiOutlineDocumentText } from 'react-icons/hi';  // Icon for the resume

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a href="https://www.linkedin.com/in/chase-swick-bb94ba233" target="_blank" rel="noopener noreferrer">
          <AiFillLinkedin />
        </a>
      </div>
      <div>
        <a href="https://github.com/Swicky97" target="_blank" rel="noopener noreferrer">
          <AiFillGithub />
        </a>
      </div>
      <div>
        <a href="/assets/ChaseSwickResume.pdf" target="_blank" rel="noopener noreferrer">
          <HiOutlineDocumentText />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
