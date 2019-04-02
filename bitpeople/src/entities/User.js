class User {
    constructor(firstName, lastName, email, dateOfBirth, image, imageLarge, gender) {
        this.firstName = firstName.split('')[0].toUpperCase() + firstName.slice(1, firstName.length)
        this.lastName = lastName.split('')[0].toUpperCase() + lastName.slice(1, lastName.length)
        this.fullName = `${firstName} ${lastName}`
        this.email = email.slice(0, 3) + '***' + email.slice(email.indexOf('@') - 3, email.indexOf('@')) + email.slice(email.indexOf('@'))
        this.dateOfBirth = dateOfBirth
        this.image = image
        this.imageLarge = imageLarge
        this.gender = gender
    }
}

export default User