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
        let lettersArr=expr.split('');
    let morseLet=[];
    let bitLet=[];
    let result='';
    for(let i=0;i<lettersArr.length;i++){
        morseLet[i]=Object.keys(MORSE_TABLE).find(key=>MORSE_TABLE[key]===lettersArr[i]);
    }
    for(let j=0;j<morseLet.length;j++){
        for(let k=0;k<morseLet[j].length;k++){
            if(morseLet[j][k]==='.'){
            bitLet[j]+='10'
            }
            if(morseLet[j][k]==='-'){
            bitLet[j]+='11'
            }
        }
    }
    for(let i=0;i<bitLet.length;i++){
        bitLet[i]=bitLet[i].slice(9)
        while(bitLet[i].length<10){
            bitLet[i]='0'+bitLet[i]
            }
    }
    for(let k=0;k<bitLet.length;k++){
        result+=bitLet[k]
    }
    return result
}

module.exports = {
    decode
}
