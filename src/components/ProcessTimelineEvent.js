import React from "react";

function ProcessTimelineEvent({ x, width, id, setRef, title }) {
  return (
    <g id={`event-${id}`} ref={setRef}>
      <path
        className="tag"
        id={`rect-${id}`}
        d="M10,10 h132, a6,6,0,0,1,6,6, v56, a6,6,0,0,1,-6,6, h-132, a6,6,0,0,1,-6,-6, v-56, a6,6,0,0,1,6,-6"
        transform={`translate(${x + 6}, -0.7)`}
        fill="#29abe2"
      />
      {/* <rect
        className="tag"
        id={`rect-${id}`}
        x={x + 10.47}
        y="9.5"
        width={width}
        height="67.69"
        rx="6.27"
        fill="#29abe2"
      /> */}
      <text
        className="title"
        x={x + 58}
        y="28"
        fontFamily="Verdana"
        fontSize="14"
        fontWeight="bold"
        fill="blue"
      >
        {title}
      </text>
      <circle
        className="icon"
        id={`cir-${id}`}
        cx={x + 25.9}
        cy="26.02"
        r="24.9"
        fill="#29abe2"
        stroke="#fff"
        strokeMiterlimit="10"
        strokeWidth="2"
      />
    </g>
  );
}
// width="136.18"
export default ProcessTimelineEvent;
