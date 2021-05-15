import React from 'react';
import Rating from '@material-ui/lab/Rating';
import '../css/Feed.css';

 const Feed = () => {
    
    return (
        <div className="feed-wrapper">
            <div className="feed-picture-wrapper">
                {/* TODO : 게시글 사진 추가 */}

                <div className="feed-picture">
                    {/* 사진 크기만 보려 추가하는 임시 div */}  
                </div>
            </div>

            <div className="feed-content-wrapper">
                <div className="feed-store-star-wrapper">
                    <div className="feed-store-name-wrapper">
                        {/* TODO: 맛집 이름 value 수정 */}
                        <span className="feed-store-name">대방동 지호네</span>
                    </div>
                    <div className="feed-star-rating-wrapper">
                        <Rating 
                            name="avg-starRating" 
                            // TODO: star rating value 수정 
                            value="4.3"
                            precision={0.1}
                            // size="small"
                            readOnly 
                        />
                    </div>
                </div>

                <div className="feed-comment-wrapper">
                    {/* TODO: comment value 수정 */}
                    <span className="feed-comment">와 정말 찐 맛집!! 넘 마시쪙 하.투.백.만.개~~~      나중에 남친하고 2주년에도 다시 와야겟네요^^ 존맛입니다^^</span>
                </div>

                <div className="feed-line-wrapper">
                    <div className="feed-line"></div>
                </div>

                <div className="feed-profile-visitedDate-wrapper">
                    <div className="feed-profile-wrapper">
                        <div className="feed-profile-image-wrapper">
                            {/* TODO: 회원들 사진으로 추가 ++++ User Info +++++ */}
                        </div>
                        <div className="feed-profile-name-wrapper">
                            {/* TODO : 회원 이름으로 추가 ++++ User Info +++++ */}
                            <span className="feed-profile-name">김죠샤턍</span>
                        </div>
                    </div>
                    <div className="feed-visitedDate-wrapper">
                        {/* TODO : visited Date value 추가 */}
                        <span className="feed-visitiedDate">2020.01.24</span>
                    </div>
                </div>
            </div>
        </div>
    );
 }

 export default Feed;