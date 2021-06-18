import { LoadSearch } from "../helpers/loadHelp";
import { db } from "../firebase/firebase-config";
import { loadCrtData, loadFavData } from "../helpers/loadHelp";
import { types } from "../types/types";

export const activeProduct = (id, product) => ({
    type: types.productActive,
    payload: {
        id,
        ...product
    }
});

export const addFavProduct = (img_url, name, price, description, brand) => {
    return async (dispatch, getState) => {
        const { uid } = getState().auth

        const newFavP = {
            img_url,
            name,
            price,
            description,
            brand
        }

        await db.collection(`/profile/${uid}/favorites`).add(newFavP)

        dispatch(addNewFav(uid, newFavP))
        dispatch(startFavLoad(uid))
    }
}

export const addNewFav = (id, favorite) => {
    return ({
        type: types.addFavoriteProduct,
        payload: {
            id,
            ...favorite
        }
    })
}

export const startFavLoad = (id) => {
    return async (dispatch) => {
        const fav = await loadFavData(id)
        dispatch(setFavData(fav))
    }
}

export const setFavData = (favorite) => ({
    type: types.loadFavoriteProduct,
    payload: favorite
})

export const startDeletingFav = (id) => {
    return async (dispatch, getState) => {

        const { uid } = getState().auth;

        await db.doc(`/profile/${uid}/favorites/${id}`).delete();

        dispatch(deleteFav(id));
    }
}

export const deleteFav = (id) => ({
    type: types.deleteFavoriteProduct,
    payload: id
});

export const addCrtProduct = (img_url, name, price, description, brand) => {
    return async (dispatch, getState) => {
        const { uid } = getState().auth

        const newCrtP = {
            img_url,
            name,
            price,
            description,
            brand
        }

        await db.collection(`/profile/${uid}/cart`).add(newCrtP)

        dispatch(addNewCrt(uid, newCrtP))
        dispatch(startCrtLoad(uid))
    }
}

export const addNewCrt = (id, cart) => {
    return ({
        type: types.addCartProduct,
        payload: {
            id,
            ...cart
        }
    })
}

export const startCrtLoad = (id) => {
    return async (dispatch) => {
        const crt = await loadCrtData(id)
        dispatch(setCrtData(crt))
    }
}

export const setCrtData = (cart) => ({
    type: types.loadCartProduct,
    payload: cart
})

// export const startSearch = (search) => {
//     return async (dispatch) => {
//         const producto = await loadSearch(search)
//         dispatch(setSearch(producto))
//     }
// }

export const startSearch = (search) => {
    return async (dispatch) => {
        const producto = await LoadSearch(search)
        // console.log(producto);
        dispatch(setSearch(producto))
        // dispatch(setSearch(search))
    }
}

export const setSearch = (products) => ({
    type: types.searchProduct,
    payload: products
});

export const starCleanSearch = () => {
    return async (dispatch) => {
        dispatch(cleanBusqueda());
    }
}

export const cleanBusqueda = () => ({
    type: types.cleanSearch
})