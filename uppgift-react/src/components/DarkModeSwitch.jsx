import React from 'react';
import { useTheme } from './ThemeContext';

const DarkModeSwitch = () => {
  const { isDarkMode, toggleDarkMode } = useTheme();

  return (
    <div id="darkmode-toggle-switch" className="btn-toggle-switch">
      <span className="label">Dark mode</span>
      <label className="switch">
        <input id="switch" type="checkbox" checked={isDarkMode} name="theme_switch" onChange={toggleDarkMode}/>
        <span className="slider round"></span>
      </label>
    </div>
  );
}

export default DarkModeSwitch;