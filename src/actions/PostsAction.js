import axios from 'axios';

import { UPDATE_RECENT_VIDEO } from '../const';

function emitgetRecentPosts(data) {
    return {
        type : UPDATE_RECENT_VIDEO,
        payload : data
    };
}

export const getRecentPosts = () => dispatch => {
    axios.get(`${API_URL}/get_recent_posts`)
    .then( res => {
        console.log('res: ', res);
        if (res.status == 200) {
            dispatch(emitgetRecentPosts(res.data.posts));
        }
        else {
            dispatch(emitgetRecentPosts([]));
        }
    });
}
