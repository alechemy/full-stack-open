import React from 'react';

const Footer = () => (
  <div
    style={{
      borderTop: '2px solid grey',
      backgroundColor: 'whitesmoke',
      position: 'fixed',
      bottom: 0,
      width: '100vw',
      textAlign: 'center',
    }}
  >
    Anecdote app for{' '}
    <a href="https://courses.helsinki.fi/fi/tkt21009">
      Full Stack -websovelluskehitys
    </a>
    .<br />
    See{' '}
    <a href="https://github.com/fullstack-hy/routed-anecdotes/blob/master/src/App.js">
      https://github.com/fullstack-hy2019/routed-anecdotes/blob/master/src/App.js
    </a>{' '}
    for the source code.
  </div>
);

export default Footer;
