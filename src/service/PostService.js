import React from 'react';
import axios from 'axios';

//const POST_REST_API_URL = 'http://localhost:8080/api/v1/post';
//TODO: POST API를 실제 API로 변경하기.
const POST_REST_API_URL = 'http://jsonplaceholder.typicode.com/users';

class PostService {

    getPosts = () => { 
        return axios.get(POST_REST_API_URL);
    };

};

export default new PostService();