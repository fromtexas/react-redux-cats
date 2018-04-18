import axios from 'axios';

const URL = 'http://thecatapi.com/api/images/get?format=xml&results_per_page=20';


export const getCats = () => {

    return axios.get(URL).then(
    (res) => {
        return res.data;
    },(res) => {
        throw new Error(res);
    });
};

export const getCat = (cats, id) => {
    return cats.find(item => {
        if(item.id._text === id){
            return item;
        }
    });
};