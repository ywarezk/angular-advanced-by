import { FormGroup, ValidatorFn } from '@angular/forms';



export function validatePasswordsCreator(passwordName, repeatName) {
    return function validatePasswords(passwords : FormGroup) {
        if (passwords.controls[passwordName].value !== passwords.controls[repeatName].value) {
            return {
                repeatFail: true
            }
        }
    }
}