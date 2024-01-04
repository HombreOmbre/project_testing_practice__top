export default function reverseString(str) {
    if (typeof str !== 'string' ||
        str.length === 0) {
        return null;
    }

    let trimmedStr = str.trim();

    return trimmedStr.split('').reverse().join('');
}