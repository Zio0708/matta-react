import React, { useState } from 'react';
const UploadPicturePage = () => { 
    const [pictureFile, setPictureFile] = useState("");
    const [imageUrl , setImageUrl] =useState("");
    const onChange = (e) => {
        const imageFile = e.target.files[0];
        //const imageUrl = URL.createObjectURL(imageFile);
        setImageUrl(URL.createObjectURL(imageFile));
        setPictureFile(e.target.value);
        console.log(e.target.value+"data");
        console.log(imageUrl+"data");
    };

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     setPlace(inputText);
    //     setInputText("");
    // };
    //TODO: 사진 업로드가 아닌 사진 상태를 저장시키기. -> 추후에 부모 컴포넌트에 상태 전달.
    
    return(
        <>
        <div className="picture-wrapper">
            <img src={imageUrl}></img>
        </div>
        <input type="file" name="file" onChange={onChange}/>
        <button type="button" onClick={null}>업로드</button>
        </>
    );
};
export default UploadPicturePage;