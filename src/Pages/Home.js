import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <div className="homePage">
      <div className="HomeContents">
        <Link to="/About">About</Link>
        <br />
        <Link to="/Search">Search</Link>
      </div>
    </div>
  );
}
