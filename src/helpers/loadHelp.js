import { db } from "../firebase/firebase-config";

export const loadUserData = async (id) => {

    const userDataSnap = await db.collection(`profile/${id}/cards`).get();
    const userData = [];

    userDataSnap.forEach(snapHijo => {
        userData.push({
            id: snapHijo.id,
            ...snapHijo.data()
        })
    });

    return userData;
}
