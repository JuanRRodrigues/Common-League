import React from "react";
import './header.css';

function Header() {
    return <header>
        <a href="#" className="menu">
            <i class="bi bi-sliders"></i>
        </a>
        <div className="userItems">
            <a href="#" className="icon">
                <i class="bi bi-heart-fill"></i>
                <span className="like">0</span>
            </a>
            <a href="#" className="icon">
                <i class="bi bi-heart-fill"></i>
                <span className="like">0</span>
            </a>
        </div>
        <div className="avatar">
            <a href="#" className="icon">
                <img src="" alt="User Image" />
            </a>
            <div className="user">
                <span>User Name</span>
                <a href="#">View Profile</a>
            </div>
        </div>
    </header>
}

export default Header;