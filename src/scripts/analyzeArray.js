function validateArr(arr) {
    if (
        arr.some(
            (el) =>
                typeof +el !== 'number' ||
                isNaN(+el) ||
                el === null ||
                el === undefined ||
                (typeof el === 'string' && el.length === 0)
            )
        ) {
        return false;
    }
        
    return true;
}

function searchMinValInArr(arr) {
    return Math.min(...arr);
}

function searchMaxValInArr(arr) {
    return Math.max(...arr);
}

function calculateAverageOfArrSum(arr) {
    return arr.reduce((prev, curr) => prev + curr, 0) / arr.length;
}

export default function analyzeArray(arr) {
    if (validateArr(arr)) {
        let arrWithOnlyNums = arr.map((el) => +el);

        return {
            average: calculateAverageOfArrSum(arrWithOnlyNums),
            min: searchMinValInArr(arrWithOnlyNums),
            max: searchMaxValInArr(arrWithOnlyNums),
            length: arrWithOnlyNums.length,
        }
    } else {
        return 'Invalid array';
    }
}