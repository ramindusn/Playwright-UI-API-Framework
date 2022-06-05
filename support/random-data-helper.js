
const generateRandomNumber = function generateRandomNumber(maxNumber) {
    return Math.floor(Math.random() * maxNumber);
}
exports.generateRandomNumber = generateRandomNumber;

const getRandomNumber = function getRandomNumber() {
    return Math.random().toString(36).slice(2, 7);
}
exports.getRandomNumber = getRandomNumber;

