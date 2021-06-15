import { Box } from '@chakra-ui/layout'
import { SimpleGrid } from '@chakra-ui/layout'
import React from 'react'

const ProductTabs = ({ category, data, tipo }) => {
    
    let productos = []
    if (tipo === "alimento") {
        productos = data[0].alimento
    } else if (tipo === "toys") {
        productos = data[2].toys
    } else if (tipo === "accessories") {
        productos = data[1].accessories
    }

    function shuffleArray(inputArray) {
        inputArray.sort(() => Math.random() - 0.5);
    }

    shuffleArray(productos);

    return (
        <>
            <h1>{category}</h1>
            <SimpleGrid minChildWidth="120px" spacing="40px">
                {productos.map((m, index) => {
                    return (
                        <Box key={index}>
                            <h3>{m.name}</h3>
                            <img src={m.img_url} />
                        </Box>
                    )
                })}
            </SimpleGrid>
        </>
    )
}

export default ProductTabs
