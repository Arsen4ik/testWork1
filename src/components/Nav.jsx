import React from "react";

import "./Nav.css";

const Nav = ({ currentPage, changePage }) => {
  //const current = currentPage || 0;
  console.log(currentPage);
  return (
    <div className="nav">
      <button
        className="nav-item"
        id="0"
        onClick={changePage}
        style={{ backgroundColor: currentPage === 0 ? "#f78b1f" : "#fff" }}
      />
      <button
        className="nav-item"
        id="1"
        onClick={changePage}
        style={{ backgroundColor: currentPage === 1 ? "#f78b1f" : "#fff" }}
      />
      <button
        className="nav-item"
        id="2"
        onClick={changePage}
        style={{ backgroundColor: currentPage === 2 ? "#f78b1f" : "#fff" }}
      />
    </div>
  );
};

export default Nav;
