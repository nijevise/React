class User {
    constructor(firstName, lastName, email, dateOfBirth, image, imageLarge, gender) {
        this.firstName = firstName
        this.lastName = lastName
        this.email = email.slice(0, 3) + '***' + email.slice(email.indexOf('@') - 3, email.indexOf('@')) + email.slice(email.indexOf('@'))
        this.dateOfBirth = dateOfBirth
        this.image = image
        this.imageLarge = imageLarge
        this.gender = gender
    }
}

export default User