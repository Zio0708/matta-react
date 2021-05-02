import React from 'react';

const savePostContainer = () => { 

    return (
        //TODO: 글 작성 페이지 완성하기.
        <div className = "col-md-12"> 
            <div className = "form-group">       
                <div className = "form-group">
                    <div>
                    <input type = "text" className="form-control" id="stockWord" placeholder="글 제목."/>
                    </div>
                </div>
                <input type = "hidden" className = "form-control" id ="stockId" />
                <input type = "text" className = "form-control" id ="stockName"  placeholder="글 내용" />
                <input type = "text" className = "form-control" id ="stockTicker"  placeholder="방문 날짜" />
                <input type = "text" className = "form-control" id ="stockCnt" placeholder="한줄평" />
                <input type = "text" className = "form-control" id ="stockAvr" placeholder="별점" />
            </div>     
            <button type = "button" className = "btn btn-primary" id ="receipt-save">등록</button>
            <button type = "button" className = "btn btn-primary" id ="receipt-save">취소</button>
        </div>
    );

};
export default savePostContainer;