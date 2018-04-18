import * as types from '../constants/actionTypes';
import {getCats} from '../utils/getCats';
import {xml2js} from 'xml-js';

const options = {
    compact: true,
    ignoreComment: true
};

export const get = () => dispatch => {

    getCats().then(res => {
        const payload = xml2js(res, options);
        dispatch({
            type: types.GET,
            payload: payload.response.data.images.image
        });
    });

};