class User {
    constructor(firstName, lastName, email, dateOfBirth, image) {
        this.firstName = firstName
        this.lastName = lastName
        this.email = email.slice(0, 3) + '***' + email.slice(email.indexOf('@') - 3, email.indexOf('@')) + email.slice(email.indexOf('@'))
        this.dateOfBirth = dateOfBirth
        this.image = image
    }
}

export default User