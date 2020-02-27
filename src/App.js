import React, { useState, useRef } from "react";

import "./App.css";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import Page31 from "./pages/Page31";
import Page32 from "./pages/Page32";
import Page33 from "./pages/Page33";
import Nav from "./components/Nav";
import Scroller from "./components/Scroller";

function App() {
  const [currentPage, setCurrentPage] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  //const [touchEnd, setTouchEnd] = useState(0);

  const [currentHorisontalPage, setCurrentHorisontalPage] = useState(0);

  const page3Ref = useRef(null);

  const onTouchStart = e => {
    //console.log(e.touches[0].clientY);
    setTouchStart(e.touches[0].clientY);
  };

  const onTouchEnd = e => {
    console.log(
      "touchStart",
      touchStart,
      "touchEnd",
      e.changedTouches[0].clientY,
      "diff",
      e.changedTouches[0].clientY - touchStart
    );
    const diff = e.changedTouches[0].clientY - touchStart;

    if (diff > 50 && currentPage <= 1) {
      setCurrentPage(+currentPage + 1);
    }
    if (diff < -50 && currentPage >= 1) {
      setCurrentPage(+currentPage - 1);
    }
  };

  const onChangePage = e => {
    setCurrentPage(e.target.id);
  };

  const onChangePage3Slide = id => {
    console.log("from app", id);
    setCurrentHorisontalPage(id);
  };

  return (
    <div className="App" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
      <Nav changePage={onChangePage} currentPage={currentPage} />
      <div
        className="App-wrapper"
        style={{ transform: `translateY( ${currentPage * -100}%)` }}
      >
        <Page1 />
        <Page2 />
        <div className="Page3-wrapper">
          {/* {page3Render} */}
          {currentHorisontalPage === 0 ? (
            <Page31 />
          ) : currentHorisontalPage === 1 ? (
            <Page32 />
          ) : (
            <Page33 />
          )}

          <Scroller onChangePage3Slide={onChangePage3Slide} />
        </div>
      </div>
    </div>
  );
}

export default App;
