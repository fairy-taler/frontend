import { createActions, handleActions } from "redux-actions";

const initialState =
    {
        role : '',
    }

export const LOGIN_ADMIN = "login/LOGIN_ADMIN"
export const LOGIN_TEACHER = "login/LOGIN_TEACHER"

export const loginReducer = handleActions(
    {
        [LOGIN_ADMIN]: (state, { payload }) => {
            state = {...state, 'role' : 'admin'};
            return { ...state };
        },
        [LOGIN_TEACHER]: (state, { payload }) => {
            state = {...state, 'role' : 'teacher'};
            return { ...state };
        }
    },
    initialState
);