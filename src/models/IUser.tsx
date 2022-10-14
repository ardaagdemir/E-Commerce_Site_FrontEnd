export interface IUser {
    status: boolean;
    result: UserInfo;
}

export interface UserInfo {
    createdBy:        string;
    createdDate:      Date;
    lastModifiedBy:   string;
    lastModifiedDate: Date;
    uid:              number;
    firstName:        string;
    lastName:         string;
    email:            string;
    password:         string;
    phone:            string;
    enabled:          boolean;
    tokenExpired:     boolean;
    roles:            Role[];
}

export interface Role {
    id:    number;
    name:  string;
}
