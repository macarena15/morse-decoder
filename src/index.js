const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    // write your solution here
        var input = '';

    for (var i = 0; i < expr.length; i += 10) {
        var mExpr = '';
        var letter = expr.slice(i, i+10);
        if (letter === '**********') {
            input += ' ';
            continue;
        }

        for (var j = 0; j < letter.length; j += 2) {
            var mSymbol = '';
            var symbol = letter.slice(j, j+2);

            if (symbol === '10') {
                mSymbol += '.';
            } else if (symbol === '11') {
                mSymbol += '-';
            } else {
                continue;
            }
            mExpr += mSymbol;
        }

        input += MORSE_TABLE[mExpr];
    }
    return input;
}

module.exports = {
    decode
}