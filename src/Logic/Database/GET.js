import axios from 'axios';

export function GetRequest(){

    axios({
        method: 'get',
        url: '/history',
    }).then((response) => {
        console.log('Here is my data 1',response);
        return response.data.results;
    }).catch(function (error) {
        console.log(error);
    });

}