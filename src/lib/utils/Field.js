/**
 * Defines a singular input field's value, validators, and any errors in the value.
 */
export default class Field {
  constructor(initialValue, validators) {
    this.value = initialValue
    this.errors = {}
    if (Array.isArray(validators)) this.validators = [...validators]
    else this.validators = [validators]
  }

  /**
   * Sets the value of the Field to be empty.
   */
  reset() {
    this.value = undefined
  }

  /**
   * Checks if the given field's value is valid.
   */
  validate() {
    for (let i = 0; i < this.validators.length; i++) {
      if (!this.validators[i](this.value)) {
        this.errors['error'] = 'Given field is not valid'
      }
    }
    return Object.keys(this.errors).length
  }
}
