const inpA = document.querySelector('#a');
const inpB = document.querySelector('#b');
const inpC = document.querySelector('#c');

const validationSpan = document.querySelector('#validation');
const totalValidationSpan = document.querySelector('#total-validation');
const resultSpan = document.querySelector('#result');

const triangle = {
    a: undefined,
    b: undefined,
    c: undefined,
}

function checkNum(inpNum,inpName) {
    let num = inpNum;
    let lowInpName = inpName.toLowerCase();

    // falsy values: false, undefined, [], null, '', 0
    // isNaN() returns "true" if "num" cannot be converted to a number
    if (num === '' || isNaN(num)) {
        validationSpan.innerText = `Input ${inpName} and is not a number`
        triangle[lowInpName] = undefined;
    } else {
        // num = parseInt(num) converts it to an integer
        // price = parseFloat('3.99sheq') // price is 3.99 now
        // num = parseFloat(num) converts it to a number with point
        // num = Number(num) - like +num
        num = +num;
        
        if (num <= 0) {
            
            validationSpan.innerText = `Input ${inpName} and is NOT POSITIVE`
            triangle[lowInpName] = undefined;
            
        } else {
            
            validationSpan.innerText = `Input ${inpName} and is SABABA`
            triangle[lowInpName] = num;

        }

    }

}

function checkTotal() {

 let a = triangle.a;
 let b = triangle.b;   
 let c = triangle.c;   

/** MISSION:
 * 
 * 1. Check that a, b, c are something 
 * 2. React in "totalValidationSpan"
 * 3. Put the function into "oninput" attribute
 *    to run after checkNum() 
 */

    if (!a || !b || !c) {
        totalValidationSpan.innerText = 'NOT VALID'
    } else {
        
        totalValidationSpan.innerText = 'VALID'
    }

}