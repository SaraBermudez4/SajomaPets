import { LoadApiProducts } from "../api/LoadApiProducts";
import { db } from "../firebase/firebase-config";
import React, { useEffect, useState } from 'react'
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

export const LoadSearch = (search) => {

    // console.log(search);
    return search
    // const [data, setData] = useState()
    // const [data2, setData2] = useState()
    // useEffect(() => {
    //     const fetchData = async () => {
    //         await fetch('https://sajoma.herokuapp.com/cat')
    //             .then(response => response.json())
    //             .then(json => setData(json))
    //             .catch(error => console.log(error))
    //     }
    //     fetchData()
    // }, [])
    // useEffect(() => {
    //     const fetchData = async () => {
    //         await fetch('https://sajoma.herokuapp.com/dog')
    //             .then(response => response.json())
    //             .then(json => setData2(json))
    //             .catch(error => console.log(error))
    //     }
    //     fetchData()
    // }, [])

    // console.log(data);
    // console.log(data2);
    // console.log(search);

    // const cats = LoadApiProducts('https://sajoma.herokuapp.com/cat')
    // const dogs = LoadApiProducts('https://sajoma.herokuapp.com/dog')

    // console.log(cats);
    // console.log(dogs);

    // const resultadoC = [];
    // const resultadoD = [];

    // cats.forEach(snapHijo => {
    //     resultadoC.push({
    //         resultado: snapHijo.id,
    //         ...snapHijo.data()
    //     })
    // });

    // dogs.forEach(snapHijo => {
    //     resultadoD.push({
    //         resultado: snapHijo.id,
    //         ...snapHijo.data()
    //     })
    // });

    // const busquedaCats = resultadoC.filter(productos => productos.nombre.toLowerCase().includes(search))
    // const busquedaDogs = resultadoD.filter(productos => productos.nombre.toLowerCase().includes(search))

    // const encontrado = [];

    // if (busquedaCats !== []) {
    //     busquedaCats.map(p => {
    //         encontrado.push(p)
    //     })
    // }

    // if (busquedaDogs !== []) {
    //     busquedaDogs.map(p => {
    //         encontrado.push(p)
    //     })
    // }
    // return encontrado
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