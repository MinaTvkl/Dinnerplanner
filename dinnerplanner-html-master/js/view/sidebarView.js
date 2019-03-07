
var SidebarView = function (container, model) {
  //this.menu = model.getFullMenu(); //for looping
  this.totalprice = container.find("#totalprice")
  this.numberOfGuests = container.find("#numberOfGuests");
  this.dishTable = container.find("#dishTable");
  this.confirmbutton = container.find("#confirmDinnerButton");

  this.numberOfGuests.html("People: " + model.getNumberOfGuests())
  this.totalprice.html("Total price: " + model.getTotalMenuPrice() + " SEK");
  this.update = function(obj){
    if(obj === "addDish" || obj =="numberOfGuests"){
      this.totalprice.html("Total price: " + model.getTotalMenuPrice() + " SEK");
      this.numberOfGuests.html("People: " + model.getNumberOfGuests())
      this.menu = model.getFullMenu();
      this.dishTable.html("");
      for(i in this.menu){
        var dish = this.menu[i];
        console.log(dish.id)

        //console.log(model.getTotalDishPrice(1))

        this.dishTable.append('<tr><td align="left">' + dish.title + '</td> <td>' + model.getTotalDishPrice(dish.extendedIngredients) + '</td></tr>')
      };
    };
  };
model.addObserver(this);
};
