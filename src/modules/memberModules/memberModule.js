import { createActions, handleActions } from "redux-actions";

const initialState = [
    {
        memberRole: '',
        memberId : '',
        memberPwd: '',
        memberName: '',
        phone: '',
        email: '',
        emailAuth: ''
    },
    {
        searchOption: '',
        memberName: '',
        memberId: '',
        email: '',
        emailAuth:''
    }
]

export const INPUT_INFO = "join/INPUT_INFO"
export const SEARCH_INFO = "search/SEARCH_INFO"

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

export const searchReducer = handleActions(
    {
        [SEARCH_INFO]: (state, { payload }) => {
            state[1][(payload.name)] = payload.value;
            return{
                ...state
            }
        }
    },
    initialState
);



