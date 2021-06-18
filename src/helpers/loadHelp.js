import { db } from "../firebase/firebase-config";
export const loadUserData = async (id) => {

    const userDataSnap = await db.collection(`profile/${id}/personalData`).get();
    const userData = [];

    userDataSnap.forEach(snapHijo => {
        userData.push({
            id: snapHijo.id,
            ...snapHijo.data()
        })
    });

    return userData;
}

export const loadFavData = async (id) => {

    const favDataSnap = await db.collection(`profile/${id}/favorites`).get();
    const favData = [];

    favDataSnap.forEach(snapHijo => {
        favData.push({
            id: snapHijo.id,
            ...snapHijo.data()
        })
    });

    return favData;
}

export const loadCrtData = async (id) => {

    const crtDataSnap = await db.collection(`profile/${id}/cart`).get();
    const crtData = [];

    crtDataSnap.forEach(snapHijo => {
        crtData.push({
            id: snapHijo.id,
            ...snapHijo.data()
        })
    });

    return crtData;
}