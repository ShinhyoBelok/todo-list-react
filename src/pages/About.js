import React from 'react';
import { Link } from 'react-router-dom';

const About = () => (
  <>
    <Link to="/about/author">Author</Link>
    <br />
    <Link to="/about/app">App</Link>
    <br />
    <br />
    <div>Hello from about page</div>
  </>
);
export default About;
