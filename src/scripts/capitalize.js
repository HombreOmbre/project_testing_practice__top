export default function capitalize(str) {
    if (typeof str !== 'string' ||
        str.length === 0) {
        return null;
    }

    const trimmedStr = str.trim();

    if (!(trimmedStr.split('').every((el) => /[a-zA-Z]/.test(el)))) {
        return null;
    }

    return trimmedStr[0].toUpperCase() + trimmedStr.toLowerCase().split('').splice(1).join('');
}