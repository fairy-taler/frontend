import { createActions, handleActions } from "redux-actions";

const initialState = []

export const POST_LOGIN = 'member/POST_LOGIN';
export const GET_MEMBER     = 'member/GET_MEMBER';
export const POST_REGISTER = 'member/POST_REGISTER'

const actions = createActions({
    [POST_LOGIN]: () => {},
    [GET_MEMBER]: () => {},
    [POST_REGISTER]: () => {}
})

export const memberReducer = handleActions(
    {
        [POST_LOGIN]: (state, { payload }) => {
            
            return payload;
        },
        [GET_MEMBER]: (state, { payload }) => {
            
            return payload;
        },
        [POST_REGISTER]: (state, { payload }) => {
            
            return payload;
        }
    },
    initialState
);

export default memberReducer;