import React, { useEffect, useRef } from 'react';
import './App.css'; // Assuming you put the CSS in a separate file

function Preloader() {
    const preloaderRef = useRef();

    useEffect(() => {
        const preloader = preloaderRef.current;
        if (preloader) {
            setTimeout(() => {
                preloader.classList.add('loaded');
            }, 1000);
            setTimeout(() => {
                preloader.style.display = 'none'; // Instead of removing the element, we hide it.
            }, 3000); // Adjust the delay as needed
        }
    }, []);

    return (
        <div id="preloader" ref={preloaderRef}>
            <div className="line"></div>
        </div>
    );
}

export default Preloader;
