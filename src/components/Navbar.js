import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    return <nav>
        <Link to="/" className="title">
            Pawsome
        </Link>
        <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <ul className={menuOpen ? "open" : ""}>
        <li>
                <NavLink to="/adopt">Adotar</NavLink>
            </li>
            <li>
                <NavLink to="/login">Login</NavLink>
            </li>
            <li>
                <NavLink to="/register">Registre-se</NavLink>
            </li>
            <li>
                <NavLink to="/adm">Admin</NavLink>
            </li>
        </ul>
    </nav>
}