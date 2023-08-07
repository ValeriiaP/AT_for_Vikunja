const str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

export const randomNum = Math.floor(Math.random() * 15);

export function getRandomPassword() {
    return `${Math.floor(Math.random() * 9000 + 1000)}`;

}

export function getRandomStr(number=10) {
    let result = '';
    for (let i = 0; i < number; i++) {
        result += str.charAt(Math.floor(Math.random() * str.length));
    }

    return result;
}

export const getCurrentDate = new Date().toLocaleString();