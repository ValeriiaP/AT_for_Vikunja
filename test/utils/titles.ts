import { getCurrentDate, randomNum, getRandomStr } from './random.js';

export function newTitleForTask() {
    return `Task ${randomNum}_${getRandomStr()}`;
}

export function newTitleForList() {
    return `List ${getCurrentDate}`;
}

export function newUserName() {
    return `TestUser_${randomNum}`;
}
