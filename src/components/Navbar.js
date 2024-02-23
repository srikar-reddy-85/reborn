import React, { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import './Navbar.css'
import { FaBars, FaTimes } from "react-icons/fa"

const Navbar = () => {
    const [click, setClick] = useState(false);
    const handleclick = () => {
        setClick(!click);
    }
    const [color, setColor] = useState(false);
    const changeColour = () => {
        if (window.scrollY > 100) {
            setColor(true);
        } else {
            setColor(false);
        }
    }
    window.addEventListener("scroll", changeColour);
    return (
        <div className={color ? "header header-bg" : "header"}>
            <Link to="/"><h1>REBORN</h1></Link>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/Treatment">Treatment</NavLink>
                </li>
                <li>
                    <NavLink to="/Resource">Resource</NavLink>
                </li>
                <li>
                    <NavLink to="/Getdemo">Getdemo</NavLink>
                </li>
                <li>
                    <NavLink to="/Enroll">Enroll</NavLink>
                </li>
            </ul>
            <div className='hambur' onClick={handleclick}>
                {click ? (<FaTimes size={20} style={{ color: "#fff" }} />) : (<FaBars size={20} style={{ color: "#fff" }} />)}
            </div>

        </div>
    )
}

export default Navbar
