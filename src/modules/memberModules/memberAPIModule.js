import { createActions, handleActions } from "redux-actions";

const initialState = []

export const POST_LOGIN = 'member/POST_LOGIN';
export const GET_MEMBER     = 'member/GET_MEMBER';
export const POST_REGISTER = 'member/POST_REGISTER'
export const PUT_PWD = 'member/PUT_PWD'; 
export const PUT_MEMBER = 'member/PUT_MEMBER'; 
export const PUT_PROFILE = "profile/PUT_PROFILE"; 
export const DELETE_MEMBER = "member/DELTE_MEMBER";
export const GET_MEMBER_LIST = "memeber/GET_MEMBER_LIST"; 

const actions = createActions({
    [POST_LOGIN]: () => {},
    [GET_MEMBER]: () => {},
    [POST_REGISTER]: () => {},
    [PUT_PWD]: () => {},
    [PUT_MEMBER]: () => {},
    [PUT_PROFILE]: () => {},
    [DELETE_MEMBER]: () => {},
    [GET_MEMBER_LIST]: () => {} 
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
        },
        [PUT_PWD]: (state, { payload }) => {
            
            return payload;
        },
        [PUT_MEMBER]: (state, { payload }) => {
            
            return payload;
        },
        [PUT_PROFILE]: (state, { payload }) => {
            
            return payload;
        },
        [DELETE_MEMBER]: (state, { payload }) => {
            
            return payload;
        }
    },
    initialState
);

export const memberListReducer = handleActions(
    {
        [GET_MEMBER_LIST]: (state, { payload }) => {
            
            return payload;
        }
    },
    initialState
);

// export default memberReducer;