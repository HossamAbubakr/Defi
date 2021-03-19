import React from "react";
import { NavLink } from "react-router-dom";
export default function NotFound() {
  return (
    <div className="not-found">
      <img src="/images/404.gif" alt="404" />
      <NavLink to="/">
        <button id="returnHome">Take Me Home</button>
      </NavLink>
    </div>
  );
}
