import React from 'react'
import { Link } from 'react-router-dom'

const HeaderAbout = (props) => {
    return (
        <header>

            <Link to="/"><h2>{props.title}</h2></Link>

        </header>
    )
}

export default HeaderAbout