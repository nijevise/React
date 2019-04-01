import React from 'react'

const PostGrid = (props) => {
    return (
        <div className="users">
            {props.people.map(user => {
                return (
                    <div className="userBlock">
                        <img src={user.imageLarge} />
                        <div className="name">
                            <p>{user.firstName}</p>
                        </div>
                        <p><i className="fa fa-envelope"></i>{user.email}</p>
                        <p><i className="fa fa-birthday-cake"></i>{new Date(user.dateOfBirth).toDateString()}</p>
                    </div>
                )
            }
            )}
        </div>
    )
}

export default PostGrid