var DishSearchController = function (view, model) {
/*
  $(".dishimage").click(function() { //runs when image is clicked on
		var id = $(this).find(".dishid").text(); //retrieves ID from span in itemView
    console.log(id);
		model.setTempDishId(id); //sets temporary variable in model
		console.log(model.getTempDishId());
		$('#dishSearchView').hide();
		$('#dishDetailsView').show();
		});
*/

  $("#dishType").change(function(){
    var type = $(this).val();
    view.generateDishItems(type);
    });

  $("#searchButton").click(function(){
    var type = $("#dishType").val(); //to get value from input
    var filter = $("#searchField").val();
    view.generateDishItems(type,filter);
    });
};
