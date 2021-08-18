import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="Home">
      <Link to="/rarla"> Rarla Todo </Link>
      <Link to="/homes"> Homes Todo </Link>
    </div>
  )
}