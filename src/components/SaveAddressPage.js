import React, { useState } from 'react';
import MapSearch from '../components/MapSearch';


const SaveAddressPage = () => { 
    
    const [place, setPlace] = useState("");
    const [inputText, setInputText] = useState("");

    const onChange = (e) => {
        setInputText(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setPlace(inputText);
        setInputText("");
    };

    // function searchPlaces() {
    //     let keyword = document.getElementById('keyword').value;

    //     if (!keyword.replace(/^\s+|\s+$/g, '')) {
    //         alert('키워드를 입력해주세요!');
    //         return false;
    //     }
    
    //     ps.keywordSearch( keyword, placesSearchCB);
    // }

    return(
        <>
        <div className="save-address-wrapper">
            <div class="option">
                <div>
                    <form className="inputForm" onSubmit={handleSubmit}>
                        <input type="text" onChange={onChange} value={inputText} placeholder="맛집 입력.." id="keyword" size="15"/> 
                        <button type="submit">검색하기</button> 
                    </form>
                </div>
            </div>
            <MapSearch searchPlace = {place} />
        </div>
        </>
    );
};
export default SaveAddressPage;