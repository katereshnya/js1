'use strict';

/**
* @param {number} arg1
* @param {number} arg2
* @param {string} operation
* @throws {Error}
* @returns {number}
*/

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case "+":
            return addition(arg1, arg2);
        case "-":
            return subtraction(arg1, arg2);
        case "/":
            return division(arg1, arg2);
        case "*":
            return multiplication(arg1, arg2);
        default:
            throw new Error("Введенная операция не корректна: " + operation);
    }
}