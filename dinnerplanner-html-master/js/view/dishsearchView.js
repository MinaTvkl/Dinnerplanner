var DishSearchView = function (container, model) {

  this.searchField = container.find("#searchField");
  this.searchButton = container.find("#searchButton");
  this.dishes = container.find("#dishes-image");
  errormessage = container.find(".searchError")
  this.dishes.html("");
  var loader = container.find(".lds-roller")

  this.generateDishItems = function(type, filter) {
    this.dishes.hide()
    loader.show();
    if(filter){
      model.getAllDishes(type, filter).then(dishes => {
        for(var i in dishes){
          var dish = dishes[i];
          var itemView = new ItemView($("#itemView"), model, dish);
          this.dishes.append(itemView.getItem());
        };
        var itemController = new ItemController(itemView, model);
      }).catch( error => {
        console.log(error)
        this.dishes.hide()
        loader.hide()
        errormessage.html("404 Error")
      });
    }
    else {
      model.getAllDishes(type).then(dishes => {
        console.log(dishes)
        console.log(dishes.length)
        for(var i in dishes){
          var dish = dishes[i];
          var itemView = new ItemView($("#itemView"), model, dish);
          this.dishes.append(itemView.getItem());
        };
        var itemController = new ItemController(itemView, model);
      }).catch( error => {
        console.log(error)
        this.dishes.html("")
        console.log(this.dishes)
        this.dishes.hide()
        loader.hide()
        errormessage.html("404 Error")

      });
    }
    this.dishes.show()
    loader.hide()
    errormessage.html("")

  };
  this.generateDishItems("Appetizer");
};
