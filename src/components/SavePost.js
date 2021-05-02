import React from 'react';
import Header from './Header';
import Map from './Map';
import '../css/Main.css';
import SavePostContainer from '../components/SavePostContainer';

const SavePost = () => { 
    return(
        <>
            <Header/>
            <div className="main-wrapper">
            <div className="main-content-wrapper">
                <div className="folders-wrapper">
                    폴더
                </div>
                <div className="feeds-wrapper">
                    <SavePostContainer/>
                </div>
                <div className="map-wrapper">
                    <Map></Map> 
                <div className="map-search-wrapper"> 검색 기능 들어감</div>
                </div>
            </div>

        </div>
        </>
    );
};
export default SavePost;