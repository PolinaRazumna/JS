// // 1
var age = prompt('How old?');
if (age !== null) {
    if (!isNaN(age)) {
        if (age > 90) {
            document.write('Too old to drink =(');
            // console.log('Too old to drink =(');
        } else if (age < 18) {
            document.write('Too young to drink');
            // console.log('Too young to drink');
        } else {
            document.write('Here is your beer!');
            // console.log('Here is your beer!');
        }
    } else {
        document.write('!!!');
        // console.log('!!!');
    }
}
else {
    document.write('Ok. Bye');
    // console.log('Ok. Bye');
}

// // 2
var color = prompt('Color?');
var isCorrectColor = true;
var price = 0;
var isCorrect = true;

if (color === 'red' || color === 'silver' || color === 'black'){
    var memory = prompt('Memory?');
    if ((+memory !==128 && +memory !== 256 && +memory !== 512) || memory === null){
        isCorrect = false;
        document.write('<h1>No such memory. Bye</h1>');
    }
} else {
    isCorrectColor = false;
    document.write('<h1>No color, no phone. Bye</h1>');
}

if (isCorrectColor && isCorrect){
    if (color === 'red'){
        document.write('<img src = "red.jpg">');
    } else if(color === 'silver'){
        document.write('<img src = "silver.jpg">');
    } else {
        document.write('<img src = "black.jpg">');
    } 

    if (+memory === 128){
        if (color === 'red' || color === 'black'){
            price = 500; //+%
        } else {
            price = 500;
        }
    } else if(+memory === 256){
        if (color === 'red' || color === 'black'){
            price = 700; //+%
        } else {
            price = 700;
        }
    } else {
        if (color === 'red' || color === 'black'){
            price = 900; //+%
        } else {
            price = 900;
        }
    }
    if (isCorrect) {
        document.write('<h1>Price: ' + price + '$</h1>');
    }
}

// // 3
var price = 0;
var img = 'default.jpg';
var color;
var memory;
var colors = [
{
    name: 'red',
    img: 'red.jpg',
    p: 20

},
{
    name: 'silver',
    img: 'silver.jpg',
    p: 0

},
{
    name: 'black',
    img: 'black.jpg',
    p: 10

}
];

var memories = [
{
    m: 128,
    price: 500
},
{
    m: 256,
    price: 700
},
{
    m: 512,
    price: 900
}
];

color:while (true){
    color = prompt('Color?');
    if (color === null){
        document.write("Bye");
        break;
    }
    for (var i = 0; i < colors.length; i++) {
        if (colors[i].name = color){
            img = colors[i].img;
            price +=colors[i].p;
            break color;
        }
    }
}
memory:while(true){
    memory = prompt('Memory?');
    if(memory === null){
        alert("Bye");
        break;
    }
    for (var i = 0; i < memories.length; i++) {
        if(memory = memories[i].m){
            price += memories[i].price;
            break memory;
        }
    }
}
document.write('<img src='+img+'>');
document.write('<h1>Price: ' + price + '$</h1>');