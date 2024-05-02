const firstDiv = document.querySelector('.first');
const secondDiv = document.querySelector('.second');
const btnStart = document.querySelector('#start');
const btnStop = document.querySelector('#show');
const btnShow = document.querySelector('#show');
const btnFirstColor = document.querySelector('#firstColor');

const startHourglass = document.querySelector('.fa-hourglass-start');
const halfHourglass = document.querySelector('.fa-hourglass-half');
const endHourglass = document.querySelector('.fa-hourglass-end');

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

btnStart.addEventListener('click',() => {

    startHourglass.classList.remove('invisible');
    
    setTimeout(() => {
        
        halfHourglass.classList.remove('invisible');
        startHourglass.classList.add('invisible');

        setTimeout(() => {
        
            endHourglass.classList.remove('invisible');
            halfHourglass.classList.add('invisible');
   
        }, sleepTime/2)

    }, sleepTime)



})




