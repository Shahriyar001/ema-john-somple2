import React, { useContext } from 'react';
import { AuthContext } from '../../context/UserContext';

const About = () => {
    const { user } = useContext(AuthContext)
    return (
        <div>
            <h2>About Us</h2>
            <p>{user?.email}</p>
        </div>
    );
};

export default About;