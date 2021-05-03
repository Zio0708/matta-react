import React, { useEffect } from 'react';
import '../css/Map.css';

const { kakao } = window;

const Map = () => { 
    useEffect(() => {
        mapInit();
    }, []);

    const mapInit = () => {
        
        let infowindow = new kakao.maps.InfoWindow({zIndex:1});
        const container = document.getElementById('map-content');
		    const options = {
			    center: new kakao.maps.LatLng(33.450701, 126.570667),
			    level: 3
		    };
            console.log(container);

        const map = new kakao.maps.Map(container, options);

        const ps = new kakao.maps.services.Places();

        ps.keywordSearch('서울대입구 텐동집', placeSearchCB);

        function placeSearchCB(data, status, pagination){
            if(status === kakao.maps.services.Status.OK){
                let bounds = new kakao.maps.LatLngBounds();
                for(let i = 0 ; i < data.length ; i++ ){
                    displayMarker(data[i]);
                    bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
                }

                map.setBounds(bounds);

            }
        };

        function displayMarker(place){ 
            let marker = new kakao.maps.Marker({
                map: map,
                position: new kakao.maps.LatLng(place.y, place.x)
            });

            kakao.maps.event.addListener(marker, 'click', function(){
                infowindow.setContent('<div>' + place.place_name + '</div>');
                infowindow.open(map, marker);
            })
        }

    };

    return (
        <>
        <div id="map-content"></div>
        <div>"서울대 입구 놀러가면 가고 싶은 곳"</div>
        </>
    );
};
export default Map;