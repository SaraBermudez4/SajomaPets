import { types } from "../types/types";
import { googleAuthProvider, firebase, db } from '../firebase/firebase-config'
import { startLoading, finishLoading } from './uiAction'

export const startLoginGoogle = (email, password) => {
    return (dispatch) => {
        return firebase.auth().signInWithEmailAndPassword(email, password)
            .then(({ user }) => {
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
            .then( async ({ user }) => {
                dispatch(login(user.uid, user.displayName, user.email, user.photoURL, user.phoneNumber))

                const newUser = {
                    document: "",
                    lastName: "",
                    cellPhone: "",
                    nickName: user.displayName,
                    email: user.email,
                    phone: "",
                    name: "",
                    cards: [],
                    addresses: []
                };

                await db.collection(`profile/${user.uid}/personalData`).add(newUser)
            })
    }
}

export const startRegisterUser = (name, lastName, email, password) => {
    return (dispatch) => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(async ({ user }) => {
                await user.updateProfile({ displayName: name + ' ' + lastName })

                dispatch(login(user.uid, user.displayName, user.email, user.photoURL, user.phoneNumber))

                const newUser = {
                    document: "",
                    lastName: lastName,
                    cellPhone: "",
                    nickName: "",
                    email: email,
                    phone: "",
                    name: name,
                    cards: [],
                    addresses: []
                };

                await db.collection(`profile/${user.uid}/personalData`).add(newUser)

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
            .catch(e => {
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