import { useState } from "react";

import styles from "./cross1.module.css";

const Cross = ({ onClick }) => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <svg
      onClick={() => onClick()}
      className={styles.cross}
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <path
        className={styles.line}
        d="M7.5 7.5L22.5 22.5"
        stroke={isHovering ? "gray" : "black"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.5 22.5L22.5 7.5"
        stroke={isHovering ? "gray" : "black"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Cross;
