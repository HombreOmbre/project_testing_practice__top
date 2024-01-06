const calculator = (() => {
    const _checkIfArgumentIsNumber = (arg) => {
        if (typeof arg === 'undefined' ||
            typeof arg === 'boolean') {
                return NaN;
            }
        
        if (typeof arg === 'string' &&
            arg.length === 0) {
                return NaN;
        }

        return +arg;
    }

    const add = (firstNum, secondNum) => {
        if (isNaN(_checkIfArgumentIsNumber(firstNum)) || 
            isNaN(_checkIfArgumentIsNumber(secondNum))) {
            return NaN;
        }

        return +firstNum + +secondNum;
    }

    const substract = (firstNum, secondNum) => {
        if (isNaN(_checkIfArgumentIsNumber(firstNum)) ||
            isNaN(_checkIfArgumentIsNumber(secondNum))) {
            return NaN;
        }

        return +firstNum - +secondNum;
    }

    const divide = (firstNum, secondNum) => {
        if (isNaN(_checkIfArgumentIsNumber(firstNum)) ||
            isNaN(_checkIfArgumentIsNumber(secondNum))) {
            return NaN;
        }

        return +firstNum / +secondNum;
    }

    const multiply = (firstNum, secondNum) => {
        if (isNaN(_checkIfArgumentIsNumber(firstNum)) ||
            isNaN(_checkIfArgumentIsNumber(secondNum))) {
            return NaN;
        }

        return +firstNum * +secondNum;
    }

    return {
        add,
        substract,
        divide,
        multiply,
    }
})();

export default calculator;
