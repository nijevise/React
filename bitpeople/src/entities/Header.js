import React from 'react'
import {Link} from 'react-router-dom'

const Header = (props) => {
    return (
        <header>
            <div className="heading">
            <Link to='/' ><h2>{props.title}</h2> </Link>
                
            </div>
            <div className="headerIcons">
                <i onClick={props.reload} className="fa fa-redo"></i>
                <i onClick={props.switchView} className="fa fa-grip-horizontal"></i>
            </div>
        </header>
    )
}

export default Header