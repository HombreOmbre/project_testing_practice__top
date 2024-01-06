export default function caesarCipher(str, key) {
    const regex = /[A-z]/;
    let changedStr = '';

    for (let i = 0; i < str.length; i++) {
        if (regex.test(str[i])) {
            let charCode = str.charCodeAt(i);
          if (charCode >= 65 && charCode <= 90) {
            if (charCode + key > 90) {
              let tmp = charCode + key - 90;
              changedStr += String.fromCharCode(64 + tmp);
            } else {
              changedStr += String.fromCharCode(charCode + key);
            }
          }
          if (charCode >= 97 && charCode <= 122) {
            if (charCode + key > 122) {
              let tmp = charCode + key - 122;
              changedStr += String.fromCharCode(96 + tmp);
            } else {
              changedStr += String.fromCharCode(charCode + key);
            }
          }
        } else {
          changedStr += str[i];
        }
      }

      return changedStr;
}