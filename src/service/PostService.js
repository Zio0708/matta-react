import React from 'react';
import axios from 'axios';

const USER_REST_API_URL = '/api/v1/user';

class UserService {

    getUser = () => { 
        return axios.get( USER_REST_API_URL );
    };


};

export default new UserService();