import React from 'react';

export const Header =payload =>{
    console.log("payload",payload);
    return (
        <div className="header">
            <nav>
                <ul>
                    <li>
                        Hi <span className="user_name">User</span>
                    </li>
                    <li>
                        <button type="button" onClick={payload.handleLogOut}>logout</button>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export const Footer =payload =>{
    console.log("payload",payload);
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