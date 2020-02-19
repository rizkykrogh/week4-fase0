/*
console.log(1)
console.log(2)
console.log(3)
console.log(4)
console.log(5)

var angka = 5
for(var i = 1; i <= 5; i++) {
    angka += i
    console.log(i)
}

var angka = 1
for(var i = 5; i >= 1; i--) {
    angka -= i
    console.log(i)
}

var str = '*****'
str += '*'
console.log(str)


var str; str = 5;
for(var i = 0; i < str; i++) {
    var kosong = '';
    for(var j = 0; j < str; j++) {
        kosong += '*';
    }
    console.log(kosong);
}

var str; str = 5;
for(var i = 1; i <= str; i++) {
    var kosong = '';
    for(var j = 0; j < i ; j++) {
        kosong += '*';
    }
    console.log(kosong);
}

var str; str = 5;
for(var i = 1; i <= str; i++) {
        var kosong = '';
        for(var j = 5; j >= i ; j--) {
            kosong += '*';
    }
    console.log(kosong);
}

var str; str = 5;
for(var i = 1; i <= str; i++) {
    var kosong = '';
        kosong += '*****';
    console.log(kosong);
    }

var str = 5;
for(var i = 0; i < str; i++) {
    var kosong = '';
    for(var j = 0; j < str; j++) {
        if(j % 2 === 0)
        kosong += '*';
        else
        kosong += ' '
    }
    console.log(kosong);
}

function reverseMe(str) {
    var temp = []
    var angka = '' + str
    for(var i = angka.length - 1; i >= 0; i--){
        temp.push(Number(angka[i]));
    }
    return temp;
}
console.log(reverseMe(348597)) // [ 7, 9, 5, 8, 4, 3]
*/

/* Variable Mutation and Type Coercion

var firstName = 'John'
var age = 28

// Type Coercion
console.log(firstName + ' ' + age)
console.log(`${firstName} ${age}`)

var job, isMarried;
job = 'teacher';
isMarried = false;

console.log(firstName + ' is a ' + age + ' years old ' + job + '. Is he married? ' + isMarried)

// Variable Mutation
age = 'twenty eight';
job = 'driver';

alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried)

var lastName = prompt('What is his last Name?')
console.log(firstName + ' ' + lastName)

*/

/* Basic Operator

var yearNow, yearJohn, yearMark;
yearNow = 2020
yearJohn = yearNow - 28
yearMark = yearNow - 30
yearMartha = yearNow - 28

console.log(yearJohn);
console.log(yearMark);

// console.log(yearNow + 2);
// console.log(yearNow - 2);
// console.log(yearNow * 2);
// console.log(yearNow / 2);

var johnOlder = yearJohn > yearMark;
console.log(johnOlder)
var johnOlder = yearJohn < yearMark;
console.log(johnOlder)
var johnOlder = yearJohn = yearMartha;
console.log(johnOlder)
var johnOlder = yearJohn != yearMartha;
console.log(johnOlder)
*/
/*
var now, yearJohn, fullAge;
now = 2018
yearJohn = 1989
fullAge = 18
//Multiplicaton
var isFullAge = now - yearJohn >= fullAge;
console.log(isFullAge)
//Grouping
var ageJohn = now - yearJohn;
var ageMark = 35
var average = (ageJohn+ageMark) / 2;
console.log(average)

var x, y;
x = y = (3 + 5) * 4 - 6;
console.log(x, y)

x *= 2
console.log(x)
x += 10
console.log(x)
x ++
console.log(x)
x --
console.log(x)
*/

/*
var markHeight, johnHeight;
markHeight = 1.8
johnHeight = 2
var markMass, johnMass;
markMass = 80
johnMass = 90

var markBMI = markMass / (markHeight * markHeight);
var johnBMI = johnMass / (johnHeight * johnHeight);

markHigherBMI = markBMI > johnBMI
console.log('Is Mark\'s BMI higher than John\'s? ' + markHigherBMI )
*/

/* IF_ELSE
var firstName = 'John';
var civilStatus = 'single';

if(civilStatus === 'married') {
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' will hopefully marry soon :)');
}

var isMarried = true;
if(isMarried) {
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' will hopefully marry soon :)');
}

var markHeight, johnHeight;
markHeight = 1.8
johnHeight = 2
var markMass, johnMass;
markMass = 80
johnMass = 90

var markBMI = markMass / (markHeight * markHeight);
var johnBMI = johnMass / (johnHeight * johnHeight);

if (markBMI > johnBMI) {
    console.log(`Mark's BMI is higher than John's`)
} else {
    console.log(`John's BMI is higher than John's`)
}
*/

/*
var firstName = 'John'
var age = 18

if (age <= 5) {
    console.log(firstName + ' is a baby.')
} else if (age > 5 && age <= 10) {
    console.log(firstName + ' is a toddler.')
} else if ( age > 10 && age <= 20) {
    console.log(firstName + ' is a teenager.')
} else if ( age > 20 && age <= 50) {
    console.log(firstName + ' is an adult.')
} else {
    console.log(firstName + ' is old.')
}
*/

/*
var firstName = 'John';
age = 21;

// Way 1
if(age >= 21) {
    console.log(firstName + ' drink alcohol')
} else {
    console.log(firstName + ' drink non-alcohol')
}
// Way 2
age >= 21 ? console.log(firstName + ' drink alcohol')
 : console.log(firstName + ' drink non-alcohol')
// Way 3
var drink = age >= 21 ? 'alcohol' : 'non-alcohol';
console.log(firstName + ' drink ' + drink)
*/

/* Switch
var firstName = 'John';
age = 21;
var day = 'Saturday'

if(age >= 21) {
    switch (day) {
        case 'Monday':
            console.log(firstName + ' drink vodka');
            break;
        case 'Tuesday':
            console.log(firstName + ' drink tequila');
            break;
        case 'Wednesday':
            console.log(firstName + ' drink rum');
            break;
        case 'Thursday':
            console.log(firstName + ' drink whiskey');
            break;
        case 'Friday':
            console.log(firstName + ' drink wine');
            break;
        case 'Saturday':
            console.log(firstName + ' drink eggnoq');
            break;
        case 'Sunday':
            console.log(firstName + ' drink Irish coffee');
            break;
    }
} else {
    switch (day) {
        case 'Monday':
            console.log(firstName + ' drink juice');
            break;
        case 'Tuesday':
            console.log(firstName + ' drink milk');
            break;
        case 'Wednesday':
            console.log(firstName + ' drink tea');
            break;
        case 'Thursday':
            console.log(firstName + ' drink water');
            break;
        case 'Friday':
            console.log(firstName + ' drink coffee');
            break;
        case 'Saturday':
            console.log(firstName + ' drink milkshake');
            break;
        default:
            console.log(firstName + ' drink jamu');
    }
}

var firstName = 'John'
var age = 59

switch (true) {
    case age <= 5:
        console.log(firstName + ' is a baby.');
        break;
    case age > 5 && age <= 10:
        console.log(firstName + ' is a toddler.');
        break;
    case age > 10 && age <= 20:
        console.log(firstName + ' is a teenager.');
        break;
    case age > 20 && age <= 50:
        console.log(firstName + ' is an adult.');
        break;
    default:
        console.log(firstName + ' is old.');
}
*/

/*
var teamJohn = 89 + 120 + 103;
var teamMike = 116 + 94 + 123;
var teamMary = 97 + 134 + 105;
console.log(teamJohn, teamMike, teamMary);
var aveJohn = teamJohn / 3;
var aveMike = teamMike / 3;
var aveMary = teamMary / 3;
console.log(aveJohn, aveMike, aveMary);

var winnerJohn = aveJohn > aveMike ? console.log('John is the winner') :
console.log('Mike is the winner')
var winnerJohn = aveJohn > aveMary ? console.log('John is the winner') :
console.log('Mary is the winner')
var winnerJohn = aveMike > aveMary ? console.log('Mike is the winner') :
console.log('Mary is the winner') 

if (aveJohn > aveMike) {
    console.log(`John's team wins with ${aveJohn} points`);
} else if (aveJohn < aveMike) {
    console.log(`Mike's team wins with ${aveMike} points`);
} else {
    console.log('There is a draw')
}
if (aveJohn > aveMary) {
    console.log(`John's team wins with ${aveJohn} points`);
} else if (aveJohn < aveMary) {
    console.log(`Mary's team wins with ${aveMary} points`);
} else {
    console.log('There is a draw')
}
if (aveMike > aveMary) {
    console.log(`Mike's team wins with ${aveMike} points`);
} else if (aveMike < aveMary) {
    console.log(`Mary's team wins with ${aveMary} points`);
} else {
    console.log('There is a draw')
}
switch(true) {
    case aveJohn > aveMike:
        console.log(`John's team wins with ${aveJohn} points`);
        break;
    case aveJohn < aveMike:
        console.log(`Mike's team wins with ${aveMike} points`);
        break;
    default:
        console.log('There is a draw');
}
switch(true) {
    case aveJohn > aveMary:
        console.log(`John's team wins with ${aveJohn} points`);
        break;
    case aveJohn < aveMary:
        console.log(`Mary's team wins with ${aveMary} points`);
        break;
    default:
        console.log('There is a draw');
}
switch(true) {
    case aveMike > aveMary:
        console.log(`Mike's team wins with ${aveMike} points`);
        break;
    case aveMike < aveMary:
        console.log(`Mary's team wins with ${aveMary} points`);
        break;
    default:
        console.log('There is a draw');
}

if (aveJohn > aveMike && aveJohn > aveMary) {
    console.log(`John's team wins with ${aveJohn} points`);
} else if (aveMike > aveJohn && aveMike > aveMary) {
    console.log(`Mike's team wins with ${aveMike} points`);
} else if (aveMary > aveJohn && aveMary > aveMike) {
    console.log(`Mary's team wins with ${aveMary} points`);
} else (aveJohn == aveMike || aveJohn == aveMary || aveMike == aveMary); {
    console.log('There is a draw');
}
*/

// var ageJohn = calculateAge(1998);
// var ageMike = calculateAge(1994);
// var ageMark = calculateAge(1990);
// console.log(ageJohn, ageMike, ageMark);
/*
function calculateAge(birthYear) {
    return 2018 - birthYear;
}
function yearsUntilRetirement(year, firstName) {
    var age = calculateAge(year);
    var retirement = 65 - age;
    if (retirement > 0) {
        console.log(firstName + ' retires in ' 
        + retirement + ' years.')
    } else {
        console.log(firstName + ' is already retired.')
    }
    
}

yearsUntilRetirement(1998, 'John')
*/

/*Logicnya array index pertama adalah angka yang paling 
kecil, index kedua yang paling tua dan yang ketiga adalah
selisih dari yang terkecil dan terbesar

function differenceInAges(ages){
    var arr = []
    var angka = '' + ages
    for(var i = 0; i < ages.length; i++){
        arr.push(Number(angka[i]));
    } if 
    return arr;
}
console.log(differenceInAges([82, 15, 6, 38, 35])) // [6, 82, 76]
console.log(differenceInAges([57, 99, 14, 32])) // [14, 99, 85]
*/

/*
function calculateAge(birthYear) {
    return 2018 - birthYear;
}
function yearsUntilRetirement(year, firstName) {
    var age = calculateAge(year);
    var retirement = 65 - age;
    if (retirement > 0) {
        console.log(firstName + ' retires in ' 
        + retirement + ' years.')
    } else {
        console.log(firstName + ' is already retired.')
    }
    
}

yearsUntilRetirement(1998, 'John')
*/
/*
function wahtDoYoDo(job, firstName){
    switch(job) {
        case 'teacher':
            return firstName + ' teaches kids how to code.';
        case 'driver':
            return firstName + ' drives a cab in Lisbon.';
        case 'designer':
            return firstName + ' designs beautiful websites.';
        default:
            return firstName + ' does something else';
    }
}
console.log(wahtDoYoDo('teacher', 'John'));
console.log(wahtDoYoDo('driver', 'Mark'));
console.log(wahtDoYoDo('designer', 'Jane'));
console.log(wahtDoYoDo('retired', 'Mike'));
*/

// Initialize New Array
// var names = ['John', 'Mark', 'Jane'];
// var years = new Array(1990, 1969, 1948);
// console.log(names[0]);
// console.log(names.length);

// // Mutate Array Data
// names[1] = 'Ben';
// names[names.length] = 'Mary';
// console.log(names);

/*
// Different Data Type
var john = ['John' , 'Smith', 1990, 'designer', false];

john.push('blue')
john.unshift('Mr.');
console.log(john);

john.pop()
john.shift()
console.log(john);

console.log(john.indexOf('John'))
console.log(john.indexOf('Smith'))
console.log(john.indexOf(1990))
console.log(john.indexOf('teacher'))
console.log(john.indexOf(23))

var isDesigner = john.indexOf('designer') === -1 ? 'John is NOT designer ' :
'John IS a designer'
console.log(isDesigner);
*/

/*
function tipsCalculator(bill) {
    var percentage;
    if (bill < 50) {
        percentage = .2
    } else if (bill >= 50 && bill < 200) {
        percentage = .15
    } else {
        percentage = .1
    }
    return percentage * bill
}
var bills = [124, 48, 268];
var tips = [tipsCalculator(bills[0]),
            tipsCalculator(bills[1]),
            tipsCalculator(bills[2])];
console.log(tips);
*/

var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    familyMember: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false
};
console.log(john)


/*
function multiplyEverything(arr) { 
    for (let i = 0; i < arr.length; i++) {
        arr[i] *= 2;
    }
    console.log(arr);
}
multiplyEverything([1, 2, 3, 4])// [2, 4, 6, 8]
*/
/*
function differenceInAges(ages){
    for(var i = 0; i < ages.length; i++) {
        for(var j = 0; j < i; j++){
            if(ages[i] < ages[j]){
                var temp = ages[i]
                ages[i] = ages[j]
                ages[j] = temp
            }
        }
    }
    let min = ages[0]
    let max = ages[ages.length - 1]
    let selisih = max - min
    return [min, max, selisih]
}

*/
/*
function differenceInAges(ages) {
    while (ages[0] > [1]) {
        for (var i = 0; i < ages.length; i++) {
            if (i < ages.length - 1) {
                if (ages[i] > ages[i + 1]) {
                    console.log(ages[i], ages[i+1])
                    var temp = ages[i]
                    ages[i] = ages[i + 1]
                    ages[i + 1] = temp
                }
            }
        }
    }

    return [ages, '<<<'];
}


console.log(differenceInAges([82, 15, 6, 38, 35])) // [6, 82, 76]
console.log(differenceInAges([57, 99, 14, 32])) // [14, 99, 85]
*/