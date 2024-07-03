import React from "react";
import { Link, Outlet } from "react-router-dom";

function Services() {
  return (
    <div>
      <h1>I am Services Section</h1>
      <Link to="DM">
        <button className="border border-black">Digital Marketing</button>
      </Link>
      &nbsp;
      <Link to="WD">
        <button className="border border-black">Web Development</button>
      </Link>
      &nbsp;
      <Link to="DA">
        <button className="border border-black">Data Analytics</button>
      </Link>
      &nbsp;
      <Outlet />
    </div>
  );
}

export default Services;
