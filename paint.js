
const Paint = function() {
  this.litres = 10;
}

Paint.prototype.checkIfEmpty = function () {
  if (this.litres === 0){
  return true;}
  else {
  return false;}
};

Paint.prototype.usePaint = function (paint) {
  this.litres -= paint;


};
module.exports = Paint;
