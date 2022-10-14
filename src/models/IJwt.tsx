export interface IJwt {
    status:        boolean;
    jwt:           string;
    result:        Result;
    userId:        number;
    userName: string;

}

export interface Result {
    
    password:              string;
    username:              string;
    authorities:           Authority[];
    accountNonExpired:     boolean;
    accountNonLocked:      boolean;
    credentialsNonExpired: boolean;
    enabled:               boolean;
}

export interface Authority {
    authority: string;
}
