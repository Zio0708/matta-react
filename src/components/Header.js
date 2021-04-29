import React from 'react';
import '../css/Header.css';

const Header = () => { 
    return(
        <div className="header-wrapper">
            <div className="header-logo">로고
            </div>
            <div className="header-search-wrapper">
                <div className="header-search">
                    <input className="header-search-input" type="text" placeholder="Matta 검색"></input>
                </div>
                
            </div>
        </div>
    );
};
export default Header;