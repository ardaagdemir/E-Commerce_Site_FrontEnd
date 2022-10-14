import * as CryptoJS from 'crypto-js'
import { IJwt } from '../models/IJwt';

const key = process.env.REACT_APP_KEY ? process.env.REACT_APP_KEY : 'coreAppKey'

export const encrypt = (plaintText: string) => {
    const ciphertext = CryptoJS.AES.encrypt(plaintText, key).toString();
    return ciphertext
}

export const decrypt = ( ciphertext: string ) => {
    const bytes  = CryptoJS.AES.decrypt(ciphertext, key);
    const plaintText = bytes.toString(CryptoJS.enc.Utf8);
    return plaintText
}


export const control = () : IJwt | null  => {
    const stRemember = localStorage.getItem('user')
    if ( stRemember ) {
        sessionStorage.setItem('user', stRemember)
    }
    const stEncData = sessionStorage.getItem('user')
    if ( stEncData ) {
        try {
            const stDdata = decrypt(stEncData)
            const jwt = JSON.parse(stDdata) as IJwt
            return jwt
        } catch (error) {
            sessionStorage.removeItem('user')
        }
    }
    return null
}