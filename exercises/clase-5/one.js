const n = 87;
n = n + 1;

n++;

/*---------------*/

const n = 11;
n = n - 1;

n--;

/*------------------*/

const a = 3;
const b = 17;
const c = 12;
const d = 0;

a = a + 12;
a += 12;

b = b - 9;
b -= 9;

c = c * 5;
c *= 5;

d = d / 4;
d /= 4;

/*------------------*/

const a = true;
const b = false;

!(a && b) === !a || !b;

!(a || a) === !a && !b;

/*---------------*/

function sonIgualesA12(x){
    if (x == 10){
        return "Igual"
    }
    return "No igual"
}

console.log(sonIgualesA12(10))
console.log(sonIgualesA12(12))
console.log(sonIgualesA12("12"))


/*----------------*/

function textAnd(x){
    if (x){
        if (x){
            return "Si"
        }    
    }
    return "No igual"
}

console.log(textAnd(9))

function textAnd(x){
    if(x <= 50 && x >= 25){
        return "Si"
    } 
    return "No"
}

console.log(textAnd(9))







