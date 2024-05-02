const nums1 = [55, 20, 32, 45, 88, 90];
             //0,  1,  2,  3,  4,   5

nums1.forEach((num,idx) => {

    // showing the values in the even places
    if (idx % 2 === 0) console.log(num);

})

/** MISSION: 
 *  Use nums1.map() and create new numeric array 
 * comprised of the old elements divided by their indexes
 * (except of 0)
 */


