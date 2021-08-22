import React from 'react';
import Profile from '../assets/richard.jpg';

const About = () => (
  <div className="about flex">
    <div className="w-full">
      <img src={Profile} alt="profile" />
    </div>
    <div className="w-full p-2">
      <h1 className="larger-black">Richard MUNYEMANA</h1>
      <h3>SKILLS</h3>
      <p>
        React, Nodejs, Redux, Postgres, MongoDB, Git,
        StoryBook, figma, WebPack
      </p>
    </div>
  </div>
);

export default About;
