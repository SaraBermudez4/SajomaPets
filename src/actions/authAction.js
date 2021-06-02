import { types } from "../types/types";
import { googleAuthProvider, firebase } from '../firebase/firebase-config'
import { startLoading, finishLoading } from './uiError'

export const startLoginEmailPassword = (email, password) => {
    return (dispatch) => {
        return firebase.auth().signInWithEmailAndPassword(email, password)
            .then(({ user }) => {
                dispatch(login(user.uid, user.displayName))
                dispatch(startLoading())
            })
            .catch(e => {
                dispatch(finishLoading())
                console.log("Hay un error mi so" + e);
            })
    }
}

export const startGoogle = () => {
    return (dispatch) => {
        firebase.auth().signInWithPopup(googleAuthProvider)
            .then(({ user }) => {
                dispatch(login(user.uid, user.displayName))
            })
    }
}

export const startRegisterWithEmailPasswordName = (name, lastname, nickName, email, password) => {
    return (dispatch) => {
        firebase.auth().createUserWithEmailAndPassword(email, password)

            .then(async ({ user }) => {
                await user.updateProfile({ displayName: name + " " + lastname, })
                dispatch(login(user.uid, user.display))
            })
            .catch(e => {
                console.log("Error:" + e);
            })
    }
}


export const login = (uid, displayName) => {
    return {
        type: types.login,
        payload: {
            uid,
            displayName
        }
    }
}

export const startLogout = () => {
    return async (dispatch) => {
        await firebase.auth().signOut()
        dispatch(logout())
    }
}

export const logout = () => {
    return {
        type: types.logout
    }
}