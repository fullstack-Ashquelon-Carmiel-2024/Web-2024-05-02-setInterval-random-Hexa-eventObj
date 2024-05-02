const firstDiv = document.querySelector('.first');
const btnShow = document.querySelector('#show');

btnShow.addEventListener('click', () => {

    firstDiv.innerText = "Just a minute ..."
    
    
    // The timeout is in milliseconds
    setTimeout(() => {
        
        firstDiv.innerText = "😁"
        // EMOJISENSE
        // or
        // Windows + v

    },3000)

    console.log('The timer is still running ...')

})