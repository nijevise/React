import React from 'react'
import { Link } from 'react-router-dom'

const HeaderGrid = (props) => {
    return (
        <header>
            <div className="heading">
                <h2>{props.title}</h2>
            </div>
            <div className="headerIcons">
                <Link to="/about"><p>About</p></Link>
                <i onClick={props.reload} className="fa fa-redo"></i>
                <i onClick={props.switchView} className="fa fa-list"></i>
            </div>
        </header>
    )
}

export default HeaderGrid