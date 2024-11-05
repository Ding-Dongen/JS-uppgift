import React, { useEffect, useState } from 'react'

// JS kod tagen från hans men använt mig av samma upplägg som i tidigare kurs

const DarkModeSwitch = () => {
    const [isDarkMode, setIsDarkMode] = useState(false)

    const toggleDarkMode = () => {
        const newMode = !isDarkMode
        setIsDarkMode(newMode)

        if (newMode) {
            document.documentElement.setAttribute('data-theme', 'dark')
            localStorage.setItem('them', 'dark')
        } else {
            document.documentElement.setAttribute('data-theme', 'light')
            localStorage.setItem('them', 'light')
        }
    }

    // useEffect(() => {
    //     const savedTheme = localStorage.getItem('theme')
    //     if (savedTheme === 'dark') {
    //         document.documentElement.setAttribute('data-theme', 'dark')
    //         setIsDarkMode(true)
    //     } else {
    //         document.documentElement.setAttribute('data-theme', 'light')
    //         setIsDarkMode(false)
    //     }
    // }, [])


  return (
        <div id="darkmode-toogle-switch" className="btn-toogle-switch">
            <span className="label">Dark mode</span>
            <label className="switchs">
            <input id="switch" type="checkbox" checked={isDarkMode} name="theme_switch" onChange={toggleDarkMode} />
            <span className="slider round"></span>
            </label>
        </div>
)
}

export default DarkModeSwitch