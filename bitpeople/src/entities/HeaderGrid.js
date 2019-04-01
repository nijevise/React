import React from 'react'

const HeaderGrid = (props) => {
    return (
        <header>
            <div className="heading">
                <h2>{props.title}</h2>
            </div>
            <div className="headerIcons">
                <i className="fa fa-redo"></i>
                <i onClick={props.switchView} className="fa fa-list"></i>
            </div>
        </header>
    )
}

export default HeaderGrid