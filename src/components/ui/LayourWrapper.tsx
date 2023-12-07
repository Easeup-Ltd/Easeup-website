"use client"
import React from 'react'
import Nav from './Nav'
import Sidebar from './Sidebar'
import { useState } from 'react'

function LayourWrapper() {
    const [display, setDisplay] = useState(false)
    return (
        <React.Fragment>
            <Nav displaySideBar={display} setSideBar={setDisplay}/>
            <Sidebar display={display} />
        </React.Fragment>
    )
}

export default LayourWrapper
