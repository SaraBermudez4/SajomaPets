import { Box } from '@chakra-ui/layout'
import { SimpleGrid } from '@chakra-ui/layout'
import React from 'react'

const GridProductos = (props) => {
    return (
        <SimpleGrid minChildWidth="120px" spacing="40px">
            <Box bg="tomato" height="80px">{props.props}</Box>
            <Box bg="tomato" height="80px">{props.props}</Box>
            <Box bg="tomato" height="80px">{props.props}</Box>
            <Box bg="tomato" height="80px">{props.props}</Box>
            <Box bg="tomato" height="80px">{props.props}</Box>
            <Box bg="tomato" height="80px">{props.props}</Box>
        </SimpleGrid>
    )
}

export default GridProductos
