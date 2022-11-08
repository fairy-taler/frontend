import { createActions, handleActions } from "redux-actions";

const initialState = []

export const POST_LOGIN = 'member/POST_LOGIN';

const actions = createActions({
    [POST_LOGIN]: () => {}
})

export const loginReducer = handleActions(
    {
        [POST_LOGIN]: (state, { payload }) => {
            
            return payload;
        },
    },
    initialState
);

export default loginReducer;