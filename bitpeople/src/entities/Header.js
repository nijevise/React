import React from 'react'

const Header = (props) => {
    return (
        <header>
            <div className="heading">
                <h2>{props.title}</h2>
            </div>
            <div className="headerIcons">
                <i className="fa fa-redo"></i>
                <i className="fa fa-grip-horizontal"></i>
            </div>
        </header>
    )
}

export default Header