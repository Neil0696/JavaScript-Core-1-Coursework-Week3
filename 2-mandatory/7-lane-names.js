/*
  You are given a list of some London street names.
  
  Write a function that will return all street names which contain 'Lane' in their name.

  HINT: string and array methods that could be helpful (indexOf, filter)
*/

function getLanes(name) {

  // -- 1st solution
  
//   let newArr = [];
//   name.filter(e => {
//     if(e.includes('Lane')){
//       return newArr.push(e);
//     }
//   });
//   return newArr;
// };

  //  -- 2nd solution 

  return name.filter(e => e.includes('Lane'));
};

console.log(getLanes(['Abbe Lane', 'Meadow Lane', 'Leopold street']));

/* ======= TESTS - DO NOT MODIFY ===== */

test("getLanes function works", () => {
  const streetNames = [
    "Abchurch Lane",
    "Adam's Court",
    "Addle Hill",
    "Addle Lane",
    "Alban Highwalk",
  ];

  expect(getLanes(streetNames)).toEqual(["Abchurch Lane", "Addle Lane"]);
});
