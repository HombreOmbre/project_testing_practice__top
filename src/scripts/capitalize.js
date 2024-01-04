export default function capitalize(str) {
    if (typeof str !== 'string' ||
        str.length === 0) {
        return null;
    }

    if (!(str.split('').every((el) => /[a-zA-Z]/.test(el)))) {
        return null;
    }

    return str[0].toUpperCase() + str.toLowerCase().split('').splice(1).join('');
}