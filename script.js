function encryptText() {
    const text = document.getElementById('inputText').value;
    const shift = parseInt(document.getElementById('shift').value);
    if (!text || isNaN(shift)) {
        alert('Por favor ingrese un texto y un desplazamiento válidos.');
        return;
    }
    const encryptedText = caesarCipher(text, shift);
    document.getElementById('outputText').value = encryptedText;
}

function caesarCipher(str, shift) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let result = '';
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        let isUpper = char === char.toUpperCase();
        char = char.toLowerCase();

        if (alphabet.includes(char)) {
            let index = (alphabet.indexOf(char) + shift) % 26;
            if (isUpper) {
                result += alphabet[index].toUpperCase();
            } else {
                result += alphabet[index];
            }
        } else {
            result += str[i]; // Non-alphabetical characters remain unchanged
        }
    }
    return result;
}
