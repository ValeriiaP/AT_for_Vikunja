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
    url: 'http://localhost:3456/api/v1/register',
    data: creds,
    validateStatus: function (status) {
        return status < 500; // Resolve only if the status code is less than 500
    }
});

export const postLogin = (creds: LoginUserData) => axios({
    method: 'post',
    url: "http://localhost:3456/api/v1/login",
    data:
    {
        ...creds,
        "long_token": false
    }
})


export const postLoginRecursion = async (
    creds: LoginUserData,
    stackNumber = 0
) => {
    if (stackNumber > 10) {
        throw new Error(
            `Not able to create user with ${JSON.stringify(creds)} credentials!`
        )
    }


    const apiResult = await postLogin(creds)
    if (apiResult.status < 400) {
        return apiResult
    } else {
        stackNumber++
        await asyncTimeout()
        return postLoginRecursion(creds, stackNumber)
    }
}

export const postRegisterRecursion = async (
    creds: RegisterUserData,
    stackNumber = 0
): Promise<number> => {
    if (stackNumber > 10) {
        throw new Error(
            `Not able to create user with ${JSON.stringify(creds)} credentials!`
        )
    }
    let apiResult

    apiResult = await postRegister(creds)

    if (apiResult.status < 400) {
        return apiResult.data
    } else {
        console.warn(`response failed with error-  `)

    }
    stackNumber++
    await asyncTimeout()
    return postRegisterRecursion(creds, stackNumber)
}

export const asyncTimeout = (ms = 500) => {
    console.log('waiting ')
    return new Promise(resolve => setTimeout(resolve, ms))
}