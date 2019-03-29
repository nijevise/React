import React from 'react'

const PostList = (props) => {

    return (
        <ul>
            {props.people.map(user => {
                return (
                    <li>
                        <div className="imgBlock">
                            <img src={user.image} />
                        </div>
                        <div className="textBlock">
                            <p>{user.firstName} {user.lastName}</p>
                            <p><i className="fa fa-envelope"></i>{user.email}</p>
                            <p><i className="fa fa-birthday-cake"></i>{new Date(user.dateOfBirth).toDateString()}</p>
                        </div>
                    </li>
                )
            })
            }
        </ul>
    )
}

export default PostList
