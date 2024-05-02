const nums1 = [55, 20, 32, 45, 88, 90];
             //0,  1,  2,  3,  4,   5

nums1.forEach((num,idx) => {

    // showing the values in the even places
    if (idx % 2 === 0) console.log(num);

})

/** MISSION: 
 *  Use nums1.map() and create new numeric array 
 * comprised of the old elements divided by their indexes
 * (except of 0 - return just the number itself)
 */

// const nums2 = nums1.map((num,idx) => {
//     return idx === 0 ? num : num/idx;
// })

// We could shorten our ARROW function:
// 1. If there is only one argument - we could remove the brackets
// 2. If there is only 1 command inside the ARROW function body, we could
//     rid of the curly brackets 
// 3. Without curly brackets it performs "return" anyway - so we should 
//    remove "return" also.

const nums2 = nums1.map((num,idx) => idx === 0 ? num : num/idx )


