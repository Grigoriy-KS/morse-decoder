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
    let myArray = [];
    for (let i = 0; i < expr.length; i += 10){
        myArray.push(expr.slice(i, i + 10));
    }
    return myArray.map(function(item) {
        subArray = [];
        for (let i = 0; i < item.length; i += 2){
            let couple = item.slice(i, i + 2);
            subArray.push(couple === "11" ? "-" : couple === "10" ? "." : couple === "00" ? "" : couple );
        }
        return subArray.join("");
    }).map(function(item2) {
        return item2 === "**********" ? " " : MORSE_TABLE[item2];
    }).join("");
}

module.exports = {
    decode
}