
var PrintPageView = function (container,model) {
  this.update = function(args){
    //if(args == "numberOfGuests" || args == "DishesAdded"){
   //samma som sidebarview
  this.menu = model.getFullMenu();
  this.printdishes = container.find("#printdishes")

  var ingredienttable_html =  "";
  this.printdishes.html("");
  for(i in this.menu){
    var dish = this.menu[i]; //loops through dishes
    for (j in dish.extendedIngredients){
       ingredienttable_html += "<tr><td align='left'>" + dish.extendedIngredients[j].name + " </td><td>" +
       dish.extendedIngredients[j].amount*model.getNumberOfGuests() + " " + dish.extendedIngredients[j].unit + "</td></tr>" //pulls out separate extendedIngredients and adds to list in html
    };
    this.printdishes.append(
    '<div class="container">' +
      '<div class="row">' +
        '<div class="col-sm-4" id="imagecontainer">' + //https://spoonacular.com/recipeImages/'+dish.id+'-556x370)">'
          '<div class="dishimage" style="background-image: url(https://spoonacular.com/recipeImages/' + dish.id+'-556x370)"></div></div>' +
        '<div class="col-sm-4" id="printtext">' +
          '<div><h3><span>' + dish.title + '</span></h3><table>' + ingredienttable_html + '</table></div></div>' +
        '<div class="col-sm-4">' +
          '<div class="col-sm-12"><h3 >Preparation</h3> <span>' + dish.instructions + '</span></div></div></div>');
  };
//this.update(); //update gör att om jag printar ett recept så kan jag ej adda nya rätter till dinner i desihdetail

};
//};
model.addObserver(this);


};
