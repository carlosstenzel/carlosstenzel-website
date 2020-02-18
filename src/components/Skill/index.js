import React from "react";

import { FaCircle } from "react-icons/fa";

export default function Skill({ name, icon, level }) {
  let rows = [];
  
  for (let i = 0; i < 5; i++) {
   

    rows.push(
      <li className={(i >= level) ? "" : "active"}>
        <FaCircle />
      </li>
    );
  }
  return (
    <li>
      <p>
        {icon}
        {name}
      </p>
      <div className="level">
        <ul>{rows}</ul>
      </div>
    </li>
  );
}
