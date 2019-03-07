var ItemController = function (view, model) {
  $(".dishimage").click(function() { //runs when image is clicked on
    var id = $(this).find(".dishid").text(); //retrieves ID from span in itemView
    model.setTempDishId(id); //sets temporary variable in model
    $('#dishSearchView').hide();
    $('#dishDetailsView').show();
    $('#detailsError').hide()
    });
}
