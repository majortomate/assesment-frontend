import React from 'react';

function About() {
  return (
    <div className="main-container">
      <h1>About me</h1>
      <section className="about-me__container">
        <img src="https://avatars.githubusercontent.com/u/56098988?v=4" alt="avatar" />
        <div className="about-me__info">
          <h2>Hi, I`m Carlos Beltrán Ruiloba</h2>
          <p>I am a budding web dev with more than 4 years of experience as a Webmaster, working with Wordpress and its entire suite.</p>
          <h3>Here`s 3 things I`ve learned at MakeItReal:</h3>
          <ul>
            <li>React Components</li>
            <li>React useState, useEffect</li>
            <li>React Router Dom</li>
          </ul>
          <p> This is my email in case you wanna reach me: <a href="mailto:cajaberu18@gmail.com">cajaberu18@gmail.com</a></p>
          <p> Also my Github: <a href="https://github.com/majortomate" target="_blank" rel="noreferrer">github.com/majortomate</a></p>
        </div>
      </section>
    </div>
  );
}

export default About;
