import { getCurrentDate, randomNum, getRandomStr } from './random.js';

export function createTitleForTask() {
    return `Task ${randomNum}_${getRandomStr()}`;
}

export function createTitleForList() {
    return `List ${getCurrentDate}`;
}

export function createUserName() {
    return `TestUser_${randomNum}${getRandomStr()}`;
}

export const lableTitle = `Lable_${randomNum}`;
