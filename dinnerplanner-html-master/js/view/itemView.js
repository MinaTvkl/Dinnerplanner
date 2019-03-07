
var ItemView = function (container, model, dish) {
  this.menu = model.getFullMenu(); //for looping
  this.item = ""; //empty string that html will be appended to + dish.id+'-556x370)">
  this.getItem = function() {
    this.item = '<div class="dishlist"><div class="dishimage" style="background-image: url(https://spoonacular.com/recipeImages/' + dish.id + '-556x370)"><span class="dishname">' + dish.title + '</span><span class="dishid">'+ dish.id +'</span></div>'
    // + '<p>' +
    //model.getTotalDishPrice(dish.id) + ' SEK</p></div>';
    return this.item;
  };
};
