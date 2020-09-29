import React, { useState } from 'react'
import Alert from 'react-bootstrap/Alert'

export const Alerts = {
    AlertDanger,
    Alertsuccess
}

function AlertDanger({ text ,_display}) {
    const [display, setDisplay] = useState(_display)
    
    setTimeout(() => {
        setDisplay("none")
    }, 1000)
    
     
     
    return (
        <Alert variant={'danger'} style={{ display: display }}>
            <p>{text}</p>
        </Alert>)
}               
function Alertsuccess({ text,_display }) {
    const [display, setDisplay] = useState("block")
    setTimeout(() => {
        setDisplay("none")
    }, 1000)
    
     
    return (
        <Alert variant={'success'} style={{ display: display }}>
        <p>{text}</p>
    </Alert>
    )
}



