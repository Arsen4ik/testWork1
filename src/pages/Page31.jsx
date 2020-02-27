import React from "react";
import "./Page31.css";

const Page31 = (props, ref) => {
  console.log(props);
  return (
    <div className="page-view31" style={props.style} ref={ref}>
      <h1>Page3-1</h1>
    </div>
  );
};
const forwardedPage31 = React.forwardRef(Page31);

export default forwardedPage31;
