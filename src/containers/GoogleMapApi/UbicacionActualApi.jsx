import React, { useCallback, useMemo, useRef, useState } from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import styled from 'styled-components'

const StyledDivMap = styled.div`
    padding-left: 6% !important;
    padding-top: 6% !important;
`
const center = {
    lat: 51.505,
    lng: -0.09,
}

function DraggableMarker() {
    const [draggable, setDraggable] = useState(false)
    const [position, setPosition] = useState(center)
    const markerRef = useRef(null)
    const eventHandlers = useMemo(
        () => ({
            dragend() {
                const marker = markerRef.current
                if (marker != null) {
                    setPosition(marker.getLatLng())
                }
            },
        }),
        [],
    )
    const toggleDraggable = useCallback(() => {
        setDraggable((d) => !d)
    }, [])

    return (
        <Marker
            draggable={draggable}
            eventHandlers={eventHandlers}
            position={position}
            ref={markerRef}>
            <Popup minWidth={90}>
                <span onClick={toggleDraggable}>
                    {draggable
                        ? 'Marker is draggable'
                        : 'Click here to make marker draggable'}
                </span>
            </Popup>
        </Marker>
    )
}

const UbicacionActualApi = () => {


    return (
        <StyledDivMap>
            <Map center={center} zoom={13} >
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <DraggableMarker />
            </Map>
        </StyledDivMap>
    )
}

export default UbicacionActualApi
