import 'bootstrap-icons/font/bootstrap-icons.css';
import React, { useEffect } from 'react';
import $ from 'jquery';
import './OptionsList.css';

const Option = ({ backgroundUrl, main, sub, link}) => {

    useEffect(() => {
        $(".option").click(function(){
            $(".option").removeClass("active");
            $(this).addClass("active");
        });
    }, []);

    return (
        <div className="option" style={{ backgroundImage: `url(${backgroundUrl})` }}>
            <div className="shadow"></div>
            <div className="label">
                <div className="icon">
                    {/* Wrapping the icon with an anchor tag */}
                    <a href={link} target="_blank" rel="noopener noreferrer">
                        <i className="bi bi-arrow-down"></i>
                    </a>
                </div>
                <div className="info">
                    <div className="main">{main}</div>
                    <div className="sub">{sub}</div>
                </div>
            </div>
        </div>
    );
}

export default Option;
