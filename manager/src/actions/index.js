import { EMAIL_CHANGED } from './types'
import { PASSWORD_CHANGED } from './types'

export const emailChanged = (text) => {
    return {
        type: EMAIL_CHANGED,
        payload: text
    }
}

export const passwordChanged = (password) => {
    return {
        type: PASSWORD_CHANGED,
        payload: password
    }
}