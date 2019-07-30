const Decorator = function(){
  this.stock = [];

};

Decorator.prototype.amountOfStock = function () {
  return this.stock.length
};

module.exports = Decorator;
