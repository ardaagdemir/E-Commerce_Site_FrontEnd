import { IUser } from "../models/IUser"
import { siteConfig, userConfig } from "../router/config"


export const userRegister = (firstName:string, lastName:string, email:string, password:string, phone:string) =>{
    const sendData = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        phone:phone,
        enabled: true,
        tokenExpired: true,
        roles: [
            {"id": 2}
        ]
        
    }    
    return userConfig.post<IUser>("user/register", sendData)
}