import { types } from "../types/types";
import { googleAuthProvider, firebase } from '../firebase/firebase-config'
import { startLoading, finishLoading } from './uiAction'

export const startLoginGoogle = (email, password) => {
    return (dispatch) => {
        return firebase.auth().signInWithEmailAndPassword(email, password)
        .then(({user}) => {
            dispatch(startLoading())
            dispatch(login(user.uid, user.displayName, user.email, user.photoURL, user.phoneNumber))
        })
        .catch(e => {
            dispatch(finishLoading())
            console.log(e);
        })
    }
}

export const startGoogleLogin = () => {
    return (dispatch) => {
        firebase.auth().signInWithPopup(googleAuthProvider)
        .then(({user}) => {
            dispatch(login(user.uid, user.displayName, user.email, user.photoURL, user.phoneNumber))
        })
    }
}

export const startRegisterUser = (name, lastName, email, password) => {
    return (dispatch) => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then( async ({user}) => {
            await user.updateProfile({displayName: name + ' ' + lastName})

            dispatch(login(user.uid, user.displayName, user.email, user.photoURL, user.phoneNumber))
            

            // user.providerData.forEach(function (profile) {
            //     console.log("Sign-in provider: " + profile.providerId);
            //     console.log("  Provider-specific UID: " + profile.uid);
            //     console.log("  Name: " + profile.displayName);
            //     console.log("  Email: " + profile.email);
            //     console.log("  Photo URL: " + profile.photoURL);
            //   });
            //   console.log(user);
            //   console.log(user.providerDatas);
        })
        .catch( e => {
            console.log(e);
        })
    }
}

export const login = (uid, displayName, email, image, phone) => {
    return {
        type: types.login,
        payload: {
            uid,
            displayName,
            email,
            image,
            phone
        }
    }
}

export const startLogout = () => {
    return async ( dispatch ) => {
        await firebase.auth().signOut()
        dispatch(logout())
    }
}

export const logout = () => {
    return {
        type: types.logout
    }
}