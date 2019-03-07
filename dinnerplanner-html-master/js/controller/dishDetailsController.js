var DishDetailsController = function(view, model){
  $("#addToMenuButton").click(function(){
    model.addDishToMenu(model.getTempDishId());
    $("#dishSearchView").show();
    $("#dishDetailsView").hide();
  });
};
