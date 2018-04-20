import * as types from '../constants/actionTypes';
import {getCats} from '../utils/getCats';

const URL = 'http://thecatapi.com/api/categories/list';

export const getCategories = () => dispatch => {

    getCats(URL).then(res => {
        dispatch({
            type: types.GET_CATEGORIES,
            payload: res
        });
    });

};