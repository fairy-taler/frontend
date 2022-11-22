import { createActions, handleActions } from "redux-actions";

const initialState = []

export const GET_TALE = 'tale/GET_TALE';

const actions = createActions({
    [GET_TALE]: () => {}
})

export const taleReducer = handleActions(
    {
        [GET_TALE]: (state, { payload }) => {
            
            return payload;
        }
    },
    initialState
);

export default taleReducer;