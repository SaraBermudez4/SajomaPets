import { loadUserData } from "../helpers/loadHelp";
import { types } from "../types/types";

export const startUserLoad = (id) => {
    return async (dispatch) => {
        const data = await loadUserData(id)
        dispatch(setUserData(data))
    }
}

export const setUserData = (data) => ({
        type: types.dataUserLoad,
        payload: data
})