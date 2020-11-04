import React from 'react'
import {Link} from 'react-router-dom'

function Mypage() {
    return (
        <div>
            <h2>About Page</h2>
            <p>Emmanuel</p>
            <Link to="/">Service</Link>
            <a href="/">Service</a>
        </div>
    )
}

export default Mypage
