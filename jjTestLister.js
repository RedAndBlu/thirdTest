"use strict";


/*
  description: create a unordered list from a nested object with Objcet's property for values

  input a nested Object
   return 1 if the function complete correctly, -1 otherwise
*/
function lister2(obj){

  if(Object.keys(obj) < 1){
    return -1;
  }

  document.body.insertAdjacentHTML('beforeend', `<ul data-0list></ul>`);
  let olTarget = document.querySelector(`ul[data-0list]`);

  let accumlator = 0;

  listHelper(obj, olTarget, accumlator);

  return 1;
}



/*
  description: helper function for lister2 it creates and inserts <li> and <ul> in the parent <ul> from lister2
  input obj, a nested Object fro lister2
  input parent, the parent element from lister2 where insert <li> and <ul>
  input accum, accumulator numerates the data-list attributes
*/
function listHelper(obj, parent, accum){

  let container = Object.keys(obj);
  let currentParent = parent;


  if(container.length > 0 && accum > 0){

    // create a new parent <ul> for the nested values
    parent.insertAdjacentHTML('beforeend', `<ul data-${accum}list></ul>`);
    currentParent = document.querySelector(`ul[data-${accum}list]`);

  }// end if


  if(container.length > 0){

    // for every poperty name creates a <li>, set the content value and recursevely calls listHelper on that <li> element
    for(let i = 0; i < container.length; i++){

      let liElm = document.createElement("li");
      liElm.textContent = container[i];
      currentParent.append(liElm);

      // use this <li> created for parent for the inner property
      listHelper(obj[container[i]], liElm, ++accum);

    }// loop
  }// end if

}



// test
let data = {
  "Fish": {
    "trout": {},
    "salmon": {}
  },

  "Tree": {
    "Huge": {
      "sequoia": {},
      "oak": {}
    },
    "Flowering": {
      "redbud": {},
      "magnolia": {}
    }
  }
};

lister2(data);
