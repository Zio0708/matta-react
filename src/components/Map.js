import React, { useEffect } from 'react';
import '../css/Map.css';

const { kakao } = window;

const Map = () => { 

    useEffect(() => {
        const container = document.getElementById('map-content');
		    const options = {
			    center: new kakao.maps.LatLng(33.450701, 126.570667),
			    level: 3
		    };
            console.log(container);
        const map = new kakao.maps.Map(container, options);
    }, []);

    return (

        <div id="map-content"></div>
    );
};
export default Map;