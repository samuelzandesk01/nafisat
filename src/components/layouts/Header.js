import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <div className="todo-header">
          <h1 className="header-name">My TodoApp</h1>
          <Link className="link" to="/">Home</Link> | <Link className="link"  to="/Mypage">My Page</Link> | 
          <Link className="link" to="/Navbar">Menu Bar</Link>
      </div>
    </header>
  );
}
