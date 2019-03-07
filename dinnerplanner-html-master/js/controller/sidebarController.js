var SidebarController = function(view, model){
  $("#minusGuest").click(function() {
    model.setNumberOfGuests(model.getNumberOfGuests() - 1);
  });

  $("#plusGuest").click(function() {
    model.setNumberOfGuests(model.getNumberOfGuests() + 1);
  });
};
