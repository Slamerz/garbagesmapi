import {loginUser} from "../actions/auth";
import {LOGINACTION, LOGOUTACTION} from "../actions/helper";
import {combineReducers} from "redux";

const initialState = {
    loading: false,
    loginData: null,
    isAuthenticated: false,
    error: null
}


function loginReducer(state = initialState, action) {
    switch (action.type) {
        case LOGINACTION.start:
            return {...state, loading: true}

        case LOGINACTION.success:
            return {...state, loading: false, loginData: action.payload, isAuthenticated: true}

        case LOGINACTION.fail:
            return {...state, loading: false, loginData: null, isAuthenticated: false, error: action.payload}

        case LOGOUTACTION.start:
            return {...state, loading: true}

        case LOGOUTACTION.success:
            return initialState

        default:
            return state
    }
}

export const auth = combineReducers({
    loginReducer
})