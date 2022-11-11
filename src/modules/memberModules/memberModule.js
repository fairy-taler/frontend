import { createActions, handleActions } from "redux-actions";

const initialState = [
    {
        memberRole: '',
        memberId : '',
        memberPwd: '',
        memberPwd2: '',
        memberName: '',
        phone: '',
        email: '',
        nickname: ''
    },
    {
        searchOption: '',
        memberName: '',
        memberId: '',
        email: '',
        emailAuth:''
    },
    {
        originPwd: '',
        memberPwd: '',
        confirmPwd: ''
    }, 
    {
        memberCode: '',
        memberId : '',
        memberName: '',
        email: '',
        phone: '',
        nickname: '',
        memberRole: ''
    },
    {
        imgUrl: '',
        intro:'',
        uploadFile: ''
    }
]

export const INPUT_INFO = "join/INPUT_INFO"
export const SEARCH_INFO = "search/SEARCH_INFO"
export const CHANGE_PWD = "change/CHANGE_PWD"
export const CHANGE_INFO = "change/CHANGE_INFO"
export const INIT_INFO = 'member/INIT_INFO'
export const INIT_PROFILE = "profile/INIT_PROFILE"
export const CHANGE_PROFILE = "change/CHANGE_PROFILE"

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

export const changeReducer = handleActions(
    {
        [CHANGE_PWD]: (state, { payload }) => {
            state[2][(payload.name)] = payload.value;
            return{
                ...state
            }
        },
        [CHANGE_INFO]: (state, { payload }) => {
            state[3][(payload.name)] = payload.value;
            return{
                ...state
            }
        },
        [CHANGE_PROFILE]: (state, { payload }) => {
            state[4][(payload.name)] = payload.value;
            return{
                ...state
            }
        },
        [INIT_INFO]: (state, { payload }) => {  
            state[3].memberCode = payload.memberCode;
            state[3].memberId = payload.memberId;
            state[3].memberName = payload.memberName;
            state[3].email = payload.email;
            state[3].phone = payload.phone;
            state[3].nickname = payload.nickname;
            return {
                ...state
            }
        },
        [INIT_PROFILE]: (state, { payload }) => {  
            state[4].intro = payload.profile.intro;
            state[4].imgUrl = payload.profile.imgUrl;
            return {
                ...state
            }
        },
    },
    initialState
);
