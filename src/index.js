const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    const regExpArray = /.{10}/gm;
    const regExpItem = /.{2}/gm;
    const arrayEncodedLetters = expr.match(regExpArray);

    const arrayMorse = arrayEncodedLetters.map(item => {
        let string = '';
        const itemArray = item.match(regExpItem);
        itemArray.forEach(item => {
            if (item === '10') string += '.';
            if (item === '11') string += '-';
            if (item === '**') string += ' ';
        })
        return string;
    })

    const arrayDecodes = arrayMorse.map(item => {
        return MORSE_TABLE[item] ? MORSE_TABLE[item] : ' '
    })

    return arrayDecodes.join('');
}

module.exports = {
    decode
}