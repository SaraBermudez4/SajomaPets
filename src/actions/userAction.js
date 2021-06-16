import { db } from "../firebase/firebase-config";
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

export const startSaveUser = data => {
    return async( dispatch, getState ) => {
        const { uid } = getState().auth

        const dataToFirestore = { ...data };
        delete dataToFirestore.id

        await db.doc(`/profile/${uid}/personalData/${data.id}`).update( dataToFirestore )

        dispatch(refreshUser(data.id, dataToFirestore))
        dispatch(startUserLoad(uid))
    }
}

export const refreshUser = (id, userData) => ({
    type: types.dataUserUpdate,
    payload: {
        id,
        userData: {
            id,
            ...userData
        }
    }
})