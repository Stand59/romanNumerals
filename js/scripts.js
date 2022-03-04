function romanNum(answer) {
    let countI = (answer.match(/I/gi) || []).length;
    let countV = (answer.match(/V/gi) || []).length;
    let countX = (answer.match(/X/gi) || []).length;
    let countL = (answer.match(/L/gi) || []).length;
    let countC = (answer.match(/C/gi) || []).length;
    let countD = (answer.match(/D/gi) || []).length;
    let countM = (answer.match(/M/gi) || []).length;
    let countSum = countI * 1 + countV * 5 + countX * 10 + countL * 50 + countC * 100 + countD * 100 + countM * 1000;
    
    if (answer.indexOf('I') === answer.indexOf('V')-1 && (answer.includes('I') && answer.includes('V'))) {
        countSum -= 2;
    } 

    if (answer.indexOf('I') === answer.indexOf('X')-1 && (answer.includes('I') && answer.includes('X'))) {
        countSum -= 2;
    } 

    if (answer.indexOf('X') === answer.indexOf('C')-1 && (answer.includes('X') && answer.includes('C'))) {
        countSum -= 20;
    } 

    if (answer.indexOf('X') === answer.indexOf('L')-1 && (answer.includes('X') && answer.includes('L'))) {
        countSum -= 20;
    } 

    if (answer.indexOf('C') === answer.indexOf('M')-1 && (answer.includes('C') && answer.includes('M'))) {
        countSum -= 200;
    } 

    alert('The roman numeral equivilant of your number is: ' + countSum );
}
function regNum(answer) {


    let thousand = 'M';
    let fiveHundred = 'D';
    let hundred = 'C';
    let fifty = 'L';
    let ten = 'X';
    let five = 'V';
    let one = 'I';
    let mAnswer='';
    let dAnswer='';
    let cAnswer='';
    let lAnswer='';
    let xAnswer='';
    let vAnswer='';
    let iAnswer='';
    
    
    if (answer <= 4999) {
        subtractM();
    } else {
        error();
    }

    function subtractM() {
        countM = parseInt(answer/1000);
        withoutM = answer - countM * 1000;
        console.log(withoutM.toString());
        console.log(countM);
        addM(countM);
        subtractD(withoutM);
    }

    function subtractD(withoutM) {
        countD = parseInt(withoutM.toString()/500);
        withoutD = withoutM.toString() - countD * 500;
        console.log(withoutD.toString());
        console.log('subtractD worked');
        addD(countD);
        subtractC(withoutD);
    }

    function subtractC(withoutM) {
        countC = parseInt(withoutM.toString()/100);
        withoutC = withoutM.toString() - countC * 100;
        console.log(withoutC.toString());
        console.log('subtractC worked');
        addC(countC);
        subtractL(withoutC);
    }

    function subtractL(withoutC) {
        countL = parseInt(withoutC.toString()/50);
        withoutL = withoutC.toString() - countL * 50;
        console.log('subtractL worked');
        addL(countL);
        subtractX(withoutL);
    }

    function subtractX(withoutL) {
        countX = parseInt(withoutL.toString()/10);
        withoutX = withoutL.toString() - countX * 10;
        console.log('subtracX worked');
        addX(countX);
        subtractV(withoutX);
    }

    function subtractV(withoutX) {
        countV = parseInt(withoutX.toString()/5);
        withoutV = withoutX.toString() - countV * 5;
        console.log('subtractV worked');
        addV(countV);
        subtractI(withoutV);
    } 
    
    function subtractI(withoutV) {
        countI = parseInt(withoutV.toString()/1);
        console.log('subtractI worked');
        addI(countI);
    }

    function addM(countM) {
        if (countM) {
            mAnswer = thousand.repeat(countM.toString());
            console.log(mAnswer);
        }
    }

    function addD(countD) {
        if (countD){
            dAnswer = fiveHundred.repeat(countD.toString());
            console.log(dAnswer);
        }
    }

    function addC(countC) {
        if (countC) {
            cAnswer = hundred.repeat(countC.toString());
            console.log(cAnswer);
        }
    }

    function addL(countL) {
        if (countL) {
            lAnswer = fifty.repeat(countL.toString());
            console.log(lAnswer);
        }
    }
   
    function addX(countX) {
        if (countX) {
            xAnswer = ten.repeat(countX.toString());
            console.log(xAnswer);
        }
    }
    
    function addV(countV) {
        if (countV) {
            vAnswer = five.repeat(countV.toString());
            console.log(vAnswer);
        }
    }

    function addI(countI) {
        if (countI) {
            iAnswer = one.repeat(countI.toString());
            console.log(iAnswer);
        }
    }

    function error() {
        alert('Sorry... This program is not equiped to handle converting numbers larger than 4999 at this time. Please enter a number lower than 5000.')
    }

    let addedAnswers = mAnswer + dAnswer + cAnswer + lAnswer + xAnswer + vAnswer + iAnswer
    

    if(addedAnswers.includes('VIIII')) {
        addedAnswers = addedAnswers.replace('VIIII', 'IX');
    } 

    if(addedAnswers.includes('IIII')) {
        addedAnswers = addedAnswers.replace('IIII', 'IV');
    }

    if(addedAnswers.includes('LXXXX')) {
        addedAnswers = addedAnswers.replace('LXXXX', 'XC');
    } 

    if(addedAnswers.includes('XXXX')) {
        addedAnswers = addedAnswers.replace('XXXX', 'XL');
    }

    if(addedAnswers.includes('DCCCC')) {
        addedAnswers = addedAnswers.replace('DCCCC', 'CM');
    } 

    if(addedAnswers.includes('CCCC')) {
        addedAnswers = addedAnswers.replace('CCCC', 'CD');
    }


    alert('The equivilant of your roman numeral is: ' + addedAnswers);
    
}