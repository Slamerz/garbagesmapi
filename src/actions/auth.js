import {LOGINACTION, LOGOUTACTION} from "./helper";

export const loginUser = loginData => {
    return {type: LOGINACTION.success, payload: loginData}
}

export const logoutUser = () => ({
   type: LOGOUTACTION.success
})