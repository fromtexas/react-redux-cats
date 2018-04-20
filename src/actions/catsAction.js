import * as types from '../constants/actionTypes';
import {getCats} from '../utils/getCats';


export const get = (url) => dispatch => {

    getCats(url).then(res => {
        dispatch({
            type: types.GET_CATS,
            payload: res.response.data.images.image
        });
    });

};