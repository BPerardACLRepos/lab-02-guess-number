export function compareNumbers(userInput, correctNumber) {
    if (userInput === correctNumber) {
        return 0;  //winner
    } else if (userInput > correctNumber) {
        return 1;  //too high
    } else {
        return -1;  //too low
    }
}