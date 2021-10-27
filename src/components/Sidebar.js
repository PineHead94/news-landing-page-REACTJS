import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const Sidebar = () => {
    const { isVerticalTheme,verticalTheme,horizontalTheme,toggleTheme } = useContext(ThemeContext)
    const handleTheme = () => {
        toggleTheme()
    }
    const theme = isVerticalTheme ? verticalTheme : horizontalTheme
    return (
        <div className='sidebar'>
            <div className="user">
                <img src="https://picsum.photos/200" alt="" />
                <div className="user-details">
                    <h2>Hi Reader,</h2>
                    <p>Here's your news!</p>
                </div>
            </div>
            <div className="themeSelector">
                <h2>View Toggle</h2>
                <div className="theme-btn-container">
                <button onClick={ handleTheme } style={theme.horizontalToggleBtn} className='theme-btn thumb-type-btn'><i class="fas fa-grip-vertical"></i></button>
                <button onClick={ handleTheme } style={theme.verticalToggleBtn} className='theme-btn list-type-btn'><i class="fas fa-list"></i></button>
                </div>
            </div>
            <div className="feedback">
                <h2>Have a feedback?</h2>
                <button className='feedback-btn'>We're Listening!</button>
            </div>
        </div>
    );
}
 
export default Sidebar;