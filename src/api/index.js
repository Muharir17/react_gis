import axios from "axios";

import Cookies from "js-cookie";

const Api = axios.create({

    baseURL: process.env.REACT_APP_BASEURL,

    headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
    }
});

Api.interceptors.response.use(function (response){
    return response;
}, ((error) => {

    if(401 === error.response.status) {

        Cookies.remove('token');

        window.location = '/admin/login';
    }else{
        return Promise.reject(error);
    }
}));


export default Api