import React from "react";

const Jumbotron = ({ children }) =>
  <div style={{ height: 100, clear: 'both', padding: '3px' }} className="jumbotron">
    {children}
  </div>;

export default Jumbotron;
