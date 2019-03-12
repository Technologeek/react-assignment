import isAlpha from 'validator/lib/isAlpha'
import isEmail from 'validator/lib/isEmail'
import isNumeric from 'validator/lib/isNumeric'
import isAlphanumeric from 'validator/lib/isAlphanumeric'

class Validations {
  constructor() {
    this.errors = {
      username: null,
      password: null,
      confirmpassword: null,
      email: null,
    }
  }
  validate(fieldName, fieldValue) {
    if (!fieldValue.trim().length && fieldName !== 'email') {
      this.errors[fieldName] = 'This field is required and can not be blank'
      return this.errors
    }
    switch (fieldName) {
      case 'username':
        if (fieldValue && fieldValue.length < 3) {
          this.errors[fieldName] = 'Username must have 3 characters minimum'
        } else if (fieldValue && fieldValue.length > 16) {
          this.errors[fieldName] = 'Maximum 16 Alphanumeric characters allowed'
        } else if (!isAlphanumeric(fieldValue)) {
          this.errors[fieldName] = 'Username can have letters and numbers only'
        } else {
          this.errors[fieldName] = null
        }
        break
      case 'confirmpassword':
      case 'password':
        let upperCaseRegex = /(?=.*?[A-Z])/
        let lowerCaseRegex = /(?=.*?[a-z])/
        if (fieldValue.indexOf(' ') !== -1) {
          this.errors[fieldName] = 'Spaces are not allowed in the password'
        } else if (fieldValue.length < 8) {
          this.errors[fieldName] = 'Minimum 8 characters password is allowed'
        } else if (!upperCaseRegex.test(fieldValue)) {
          this.errors[fieldName] = 'Password must have one UpperCase letter'
        } else if (!lowerCaseRegex.test(fieldValue)) {
          this.errors[fieldName] = 'Password must have one LowerCase letter'
        } else {
          this.errors[fieldName] = null
        }
        break
      case 'confirmpassword':
        if (fieldValue.indexOf(' ') !== -1) {
          this.errors[fieldName] = 'Spaces are not allowed in the password'
        } else if (fieldValue.length < 6) {
          this.errors[fieldName] = 'Minimum 6 characters password is allowed'
        } else {
          this.errors[fieldName] = null
        }
        break
      case 'email':
        if (fieldValue !== '' && !isEmail(fieldValue)) {
          this.errors[fieldName] = 'Enter a valid email address (optional)'
        } else {
          this.errors[fieldName] = null
        }
    }
    return this.errors
  }
  allNullKeyValue(object) {
    let keys = Object.keys(object)
    let keysLength = keys.length
    for (let i = 0; i < keysLength; i++) {
      if (object[keys[i]]) {
        return false
      }
    }
    return true
  }
}
export { Validations }
