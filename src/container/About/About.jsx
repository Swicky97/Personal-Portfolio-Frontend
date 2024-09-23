import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { images } from '../../constants';
import './About.scss';

const qualities = [
  { title: 'Fullstack Web Development', description: 'Design of .NET and Java applications using respective technology stacks', igmUrl: images.about01 },
  { title: 'UI/UX skills', description: 'Blazor, React, Angular, Javascript, Typescript', igmUrl: images.about02 },
  { title: 'Backend skills', description: 'C#, EF Core, SQL Server, Azure, Java, Springboot, AWS', igmUrl: images.about03 }
]

const About = () => {
  return (
    <>
      <h2 className="head-text">
        I am a <span>Fullstack Developer</span>
        <br />
        Focused on <span>Strong Frontend Principles and Design</span>
      </h2>

      <div className="app__profiles">
        {qualities.map((quality, index) => (
          <motion.div
            whileInView={{ opacity: 1}}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
            key={quality.title + index}
          >
            <img src={quality.igmUrl} alt={quality.title}></img>
            <h2 className="bold-text" style={{ marginTop: 20 }}>{quality.title}</h2>
            <p className="p-text" style={{ marginTop: 20 }}>{quality.description}</p>
          </motion.div>
        ))}
      </div>
    </>
  );
}

export default About
