
const Paint = function(litres) {
  this.litres = litres;
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
