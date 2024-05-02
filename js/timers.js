const firstDiv = document.querySelector('.first');
const secondDiv = document.querySelector('.second');
const btnShow = document.querySelector('#show');
const btnFirstColor = document.querySelector('#firstColor');

let sleepTime = 2500;


btnShow.addEventListener('click', () => {

    firstDiv.innerText = "Just a minute ..."
    
    
    // The timeout is in milliseconds
    setTimeout(() => {
        
        firstDiv.innerText = "😁"
        // EMOJISENSE
        // or
        // Windows + v

    },sleepTime)

    console.log('The timer is still running ...')

})

/** MISSION:
 * Add listener to the second button.
 * 
 * When it clicked, it should change the color of the FIRST div
 * to orange after the "sleepTime" is over
 */

btnFirstColor.addEventListener("click", () => {

    // setTimeout is asyncronous function - זאת אומרת
    // הפונקציה הזאת עובדת מאחורי הקלעים במקביל
    // לפעולות פשוטות יותר של 
    // JS

    setTimeout(() => {

        firstDiv.classList.replace('purple','orange');
        secondDiv.innerText += "First div already has changed color\n"

    }, 0)

    secondDiv.innerText += "First div is going to change color\n"

})
