import React from 'react'
import { Link } from 'react-router-dom'

const HeaderAbout = (props) => {
    return (
        <header>
            <div className="heading">
                <Link to="/"><h2>{props.title}</h2></Link>
            </div>
        </header>
    )
}

export default HeaderAbout