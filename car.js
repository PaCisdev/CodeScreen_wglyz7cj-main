/**
 * This is the function where you need to write your code solution
 * "roadDamages" is defined down below, where the function gets called
 */
function moveCar(roadDamages) {
   // TODO Implement the solution her
   console.log(roadDamages);
   var i = 0;
   var j=i
   for (i = 0; roadDamages.length === 10; i++) {
      var name = roadDamages[i];
      console.log(name);
      if (name === true){  
         console.log("The car is damaged");
         break;
      }else{
         console.log("The car goes to step", i+1);
      }
   }
   for (j=i+1; roadDamages.length === 10; j++){
      var name2 = roadDamages[j];
      if (name2 === true){
         console.log(name);
         console.log("The car is broken");
         i += 1;
         break;
      }else{
         console.log(name2);
         console.log("The car goes to step2", j+1);
      }        
   }
}
/**
 * Function gets called
 * You can call this function with different set of array values in order to test different scenarios
 * Do not change the amount of values inside the array
 */


moveCar([false, false, false, false, true, false, true, false, false, false]);

/**
 * This code line is required in order to trigger automated tests
 * Do not change this code line
 */
export default moveCar;
