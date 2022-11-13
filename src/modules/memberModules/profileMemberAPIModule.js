import { createActions, handleActions } from "redux-actions";

const initialState = []

export const GET_MEMBER_PROFILE = 'member/GET_MEMBER_PROFILE';

const actions = createActions({
    [GET_MEMBER_PROFILE]: () => {}
})

export const profileMemberReducer = handleActions(
    {
        [GET_MEMBER_PROFILE]:  (state, { payload }) => {
            return payload;
        },
    },
    initialState
);

export default profileMemberReducer;