var HeadView = function (container, model) {
  this.head = container.find("#pagehead");

  this.head.html(
    '<div class="col-sm-6">' +
      '<h2>My dinner: ' + model.getNumberOfGuests() + ' person/people</h2></div>' +
    '<div class="col-sm-6" style="padding-top: 2%;">'
  );
this.update = function(obj){
  if(obj === "numberOfGuests"){
    this.head.html(
      '<div class="col-sm-6">' +
        '<h2>My dinner: ' + model.getNumberOfGuests() + ' person/people</h2></div>' +
      '<div class="col-sm-6" style="padding-top: 2%;">'
      );
    };
  };
  model.addObserver(this);
};
