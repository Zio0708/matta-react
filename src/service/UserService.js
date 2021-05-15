import React from 'react';
import axios from 'axios';

const POST_REST_API_URL = '/api/v1/post';

class PostService {

    getAllPost = () => { 
        return axios.get( POST_REST_API_URL );
    };

    //TODO: 하단의 REST API 완성하기.
    savePost = ( data ) => {
        return axios.post( POST_REST_API_URL,
            { data: data })
            .then( response => {
                console.log(response);
              })
              .catch( error => {
                console.log(error);
            });
    };

    updatePost = (id) => {
        return axios.put( POST_REST_API_URL + id );
    }

    deletePost = (id) => {
        return axios.put( POST_REST_API_URL + id );
    }

};

export default new PostService();