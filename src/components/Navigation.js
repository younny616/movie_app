import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
    // Link 는 Route 안에서만 사용할 수 있다.
    return <div className="nav">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
    </div>
}

export default Navigation;