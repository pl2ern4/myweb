import React from 'react';

export const WelcomeComponent =payload =>{
    console.log("payload===",payload);
    let d = new Date();

    return (
        <div className="welcome-text">Welcome</div>
    )
}
export const Header =payload =>{
    return (
        <div className="header">
            <nav>
                <ul>
                    <li>
                        Hi <span className="user_name">User</span>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export const Footer = payload =>{
    let d = new Date();

    return (
        <footer className="footer">
            <div className="footer-content">
                <p>Made by Capgemini</p>
                <p><i className="">&#169;</i></p>
                <p>{d.getFullYear()}</p> 
            </div>    
        </footer>
    )
}