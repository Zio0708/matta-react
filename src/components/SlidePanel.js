import React, { useState } from 'react';

import SaveAddressPage from '../components/SaveAddressPage';
// css
import '../css/SlidePanel.css';

const SlidePanel = () => {

    const [isActive, setActive] = useState("false");

    const mapOpen = () => {
        setActive(!isActive);
    };   
    const mapClose = () => {
        setActive(!isActive);
    };

    return (
        <>
        <div id = "map-div" className={isActive ? "map-close" : "map-open"}>
            <button type="button" className="map-close-btn" onClick={mapClose}>CLOSE</button>
            <br/><br/>
            <SaveAddressPage></SaveAddressPage>
        </div>
        <button type="button" className="map-open-btn" onClick={mapOpen}>OPEN</button>
        </>
    );
}
export default SlidePanel;