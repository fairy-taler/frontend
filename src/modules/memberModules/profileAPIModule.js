import { createActions, handleActions } from "redux-actions";

const initialState = {
    
    imgUrl: '',
    intro:'',
    uploadFile: ''

}

export const GET_PROFILE = 'member/GET_PROFILE';

const actions = createActions({
    [GET_PROFILE]: () => {}
})

export const profileReducer = handleActions(
    {
        [GET_PROFILE]: (state, { payload }) => {
            
            return payload;
        }
    },
    initialState
);

export default profileReducer;