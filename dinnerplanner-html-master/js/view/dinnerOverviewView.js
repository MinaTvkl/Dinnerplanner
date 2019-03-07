
var DinnerOverviewView = function (container, model) {
  this.menu = model.getFullMenu(); //for looping
  this.dishes = container.find("#dishes-image");
  this.totalprice = container.find("#totalprice");
  this.title = container.find("#dish-title");

  this.update = function(obj){
    if (obj === "numberOfGuests" || obj === "addDish") {
      this.dishes.html("")
      this.menu = model.getFullMenu(); //for looping
      for(i in this.menu){
        var dish = this.menu[i];
        var itemView = new ItemView($("#itemView"), model, dish);
        this.dishes.append(itemView.getItem()); //#<div class="col-xs-12 col-lg-2 justify-content-center>' +  +'</div>'
      };
    };
  };
  model.addObserver(this);
};
