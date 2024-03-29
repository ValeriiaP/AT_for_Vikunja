import axios from 'axios';

export interface LoginUserData {
    username: string,
    password: string,
}

export interface RegisterUserData extends LoginUserData {
    email: string
}

export const postRegister = (creds: RegisterUserData) => axios({
    method: 'post',
    url: 'http://localhost/api/v1/register',
    data: creds
});

export const postLogin = (creds: LoginUserData) => axios({
    method: 'post',
    url: "http://localhost/api/v1/login",
    data:
    {
        ...creds,
        "long_token": false
    }
})


