import React, { useState } from 'react';
import { Nav } from './headerelements';
import { Link } from 'react-router-dom';

const Header = ({ toggleTheme }) =>{
    const [isHovered, setIsHovered] = useState(false);

    return (
        <Nav
        isHovered={isHovered}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        >
            <div>
                <Link to="/">Index</Link>
                <Link to="/profile">User profile</Link>
            </div>
            <button onClick={toggleTheme}>Toggle light and dark mode</button>
        </Nav>
    );
};

export default Header;
