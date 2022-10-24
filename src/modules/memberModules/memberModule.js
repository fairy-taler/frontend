import { createActions, handleActions } from "redux-actions";

const initialState = [
    {
        memberRole: '',
        memberId : '',
        memberPwd: '',
        memberName: '',
        phone: '',
        mail: '',
        mailAuth: ''
    }
]

export const INPUT_INFO = "join/INPUT_INFO"

export const joinReducer = handleActions(
    {
        [INPUT_INFO]: (state, { payload }) => {
            state[0][(payload.name)] = payload.value;
            return{
                ...state
            }
        }
    },
    initialState
);

