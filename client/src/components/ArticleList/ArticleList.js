import React from "react";
import "./ArticleList.css";

export const ArticleList = ({ children }) => {
  return (
    <div className="well list-overflow-container">
      <ul className="list-group">
        {children}
      </ul>
    </div>
  );
};
