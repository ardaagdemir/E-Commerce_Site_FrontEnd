export interface IUserList {
    result: UserList;
}

export interface UserList {
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
}