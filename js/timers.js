const firstDiv = document.querySelector('.first');
const btnShow = document.querySelector('#show');

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