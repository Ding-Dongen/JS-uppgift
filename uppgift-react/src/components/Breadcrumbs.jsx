import React, { useState, useEffect, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Breadcrumbs = () => {
    const location = useLocation();
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    const handleResize = useCallback(() => {
        setIsMobile(window.innerWidth <= 768);
    }, []);

    useEffect(() => {
        // Attach event listener for window resize
        window.addEventListener('resize', handleResize);
        // Clean up
        return () => window.removeEventListener('resize', handleResize);
    }, [handleResize]);

    // Home crumb
    const homeCrumb = (
        <div className="crumb home-crumb">
            <Link to="/">Home</Link>
        </div>
    );

    // Contact crumb
    const contactCrumb = (
        <div className="crumb contact-crumb">
            <Link to="/contact">Contact</Link>
        </div>
    );

    // Now process the current path
    let currentLink = '';

    const crumbs = location.pathname.split('/')
        .filter(crumb => crumb !== '')
        .map((crumb, index, array) => {
            currentLink += `/${crumb}`;

            // For the last item, we don't want it to be a link
            if (index === array.length - 1) {
                return (
                    <div className="crumb" key={crumb}>
                        {crumb}
                    </div>
                );
            } else {
                return (
                    <div className="crumb" key={crumb}>
                        <Link to={currentLink}>{crumb}</Link>
                        <span className="divider"> &gt; </span>
                    </div>
                );
            }
        });

    // Don't render if on the home page or if on mobile
    if (location.pathname === "/" || isMobile) return null;

    return (
        <div className="breadcrumb">
            <div className="left-side">
                {homeCrumb}
                {crumbs.length > 0 && <span className="divider"> &gt; </span>}
                {crumbs}
            </div>
        </div>
    );
};

export default Breadcrumbs;