import React from 'react'

class PostGrid extends React.Component {

    render() {
        return (
            <>

                <div className="users">

                    {this.props.people.map(user => {
                        return (
                            <div
                                style={{ backgroundColor: user.gender === 'female' ? '#ffebee' : '#fff' }}
                                className="userBlock">
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
            </>
        )
    }
}


export default PostGrid