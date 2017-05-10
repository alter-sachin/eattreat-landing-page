import { UPDATE_RECENT_VIDEO } from '../const';

export default function( state = [], action) {

    switch (action.type) {
        case UPDATE_RECENT_VIDEO : return action.payload;

        default: return state;
    }

}
