// export const isAdult = (x) => {
//     if(x>=18){
//         console.log('Adult');
//     }else{
//         console.log('Minor');
//     }
// }

// export const canDrink = (y) => {
// if(y >= 21){
// console.log('over');
// }else{
//     false;
// }
// }
 export const isAdult = (age) => age >=18;
 export const canDrink = (age) => age >=21 ;

//const isSenior = (age) => age>65;
//export default isSenior;

export default (age) => age>65;

//export { isAdult,canDrink, isSenior as default}  //one way