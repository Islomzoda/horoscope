const day = 10;
const month = 10;


const CAPRICON = 'capricon';
const AQUARIUS = 'aquarius';
const PISCES = 'pisces';  
const ARIES= 'aries';
const TAURUS = 'taurus';
const GEMINI = 'gemini';
const CANCER = 'cancer';  
const LEO = 'leo';
const VIRGO = 'virgo';
const LIBRA = 'libra';
const SCORPIO = 'scorpio';
const SAGITTARIUS = 'sagittarius';


if (month === 1){
    if(day <= 1){
        sign = 'CAPRICON';
    } else{
        sign = 'AQUARIUS'
    }
}

if (month === 2){
    if(day <= 2){
        sign = '';
    } else{
        sign = 'AQUARIUS'
    }
}
if (month === 3){
    if(day <= 3){
        sign = 'CAPRICON';
    } else{
        sign = 'AQUARIUS'
    }
}
if (month === 4){
    if(day <= 4){
        sign = 'CAPRICON';
    } else{
        sign = 'AQUARIUS'
    }
}
if (month === 5){
    if(day <= 5){
        sign = 'CAPRICON';
    } else{
        sign = 'AQUARIUS'
    }
}
if (month === 6){
    if(day <= 7){
        sign = 'CAPRICON';
    } else{
        sign = 'AQUARIUS'
    }
}
if (month === 8){
    if(day <= 8){
        sign = 'CAPRICON';
    } else{
        sign = 'AQUARIUS'
    }
}
console.log(sign);