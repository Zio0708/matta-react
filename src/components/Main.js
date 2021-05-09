import React, { useEffect, useState } from 'react';
import PostService from '../service/PostService';
import Map from '../components/Map';
import Header from '../components/Header';
import '../css/Main.css';
import axios from 'axios';

const Main = () => { 
    const [posts, setPosts] = useState("");

    useEffect(() => {
        PostService.getAllPost()
        //axios.get('http://jsonplaceholder.typicode.com/users')
            .then( response => { console.log( response ); } )
            .catch( response => { console.log( response ); } )

    });
    
    return(
        <>
        <Header/>
        <div className="main-wrapper">
            <div className="main-content-wrapper">
                {/* <div className="folders-wrapper">
                    폴더
                </div> */}
                <div className="div-wrapper">
                    <div className="feeds-wrapper">
                        <div>글 작성은 어디들어가나요 선생님</div>
                        <div className="feeds-grid-wrapper">
                            <div>1</div>
                            <div>2</div>
                            <div>3</div>
                            <div>4</div>
                            <div>5피드</div>
                        </div>
                    </div>
                    <div className="map-wrapper">
                        <Map></Map>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};
export default Main;