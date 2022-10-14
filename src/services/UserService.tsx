import { IUser } from "../models/IUser"
import { IUserList } from "../models/IUserList"
import { siteConfig, userConfig } from "../router/config"

export const userList = () => {
    return userConfig.get<IUserList>('/user/getUsers')
}

export const userListById = (uid:number) => {
    return userConfig.get<IUser>('/user/getUserById/' + uid)
}