import User from '../entities/User'

const fetchUsers = () => {

    return fetch('https://randomuser.me/api/?results=15')
        .then(response => {
            return response.json()
        }).then(data => {
            const myUsers = data.results.map((user) => {
                return new User(user.name.first, user.name.last, user.email, user.dob.date, user.picture.thumbnail)
            })
            return myUsers
        }
        )
}

export default fetchUsers