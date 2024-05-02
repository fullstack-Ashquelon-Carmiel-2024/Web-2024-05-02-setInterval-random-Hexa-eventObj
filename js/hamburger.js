const firstNameInp = document.querySelector('#first-name');
const birthYearInp = document.querySelector('#birth-year');
const personOut = document.querySelector('.personal-details');

const showDetails = () => {

    personOut.innerText = '';

    let firstName = firstNameInp.value;
    let birthYear = +birthYearInp.value;

    if (firstName)
        personOut.innerText = `Your name is ${firstName} \n`

    console.log(`year is ${birthYear} and year type is ${typeof birthYear}`)
    

    if (birthYear) {

        console.log(`${birthYear} + 10 = ${birthYear+10}`)
        const now = new Date();
        console.log(`"now" data type is ${typeof now}`)
        let currYear = now.getFullYear();

        personOut.innerText += `your age is ${currYear-birthYear}`;
    }



    

}

/**
 * "change" event means that the user has finished to enter the input,
 * and the event "change" happens if we take the field out of focus 
 * (click in another location) or if we press "Enter"
 */
firstNameInp.addEventListener('change',showDetails)

birthYearInp.addEventListener('input',showDetails)







