// Extend the functionality of the built in object

//# Date object => to have new method .lastYear() which shows the last year in 'YYYY' forma

Date.prototype.lastYear = function () {
  return this.getFullYear
}

console.log(new Date('1900-10-10').lastYear())

// modify and overwrite the existing map() method
// Should n
Array.prototype.map = function () {

}