//fill array with 60000 elements
const list = new Array(60).join('1.1').split('.');

function removeItemsFromList() {
  var item = list.pop();

  if (item) {
    //setTimeout(removeItemsFromList, 0);
    removeItemsFromList()
  }

  console.log(item)
};

removeItemsFromList()
list

//--------------------------------------------------------//

// Seems that it's alll about inline caching (look tomorrow).
// Both examples work, key words 'inline cashing'
// const list = new Array(20).join('1.1').split('.');

// function removeItemsFromList() {
//   var item = list.pop();

//   if (item) {
//     setTimeout(removeItemsFromList, 0)
//   }
// };

// removeItemsFromList();
// list
