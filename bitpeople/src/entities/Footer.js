import React from 'react'

const Footer = (props) => {

    return (
        <footer>
            <h3>{props.title} {props.year}</h3>
            <p>Last upadated: {props.timeStamp}</p>
        </footer>
    )
}

export default Footer