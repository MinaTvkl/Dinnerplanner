var DishDetailsView = function (container, model, id) {
  //dish = model.getDish(id); //example dish
  this.dishinfo = container.find("#dishinfo")
  this.dishingredients = container.find("#dishingredients")
  var detailsError = container.find("#detailsError")
  var loader = container.find(".lds-roller")


  this.update = function (obj){ //calls the function above to run update
    this.dishinfo.hide()
    this.dishingredients.hide()
    loader.show();
    if (obj === "tempID" || obj === "numberOfGuests" && model.getTempDishId() !== 0){ 
      var numberOfGuests = model.getNumberOfGuests();
      var id = model.getTempDishId();
      model.getDish(id).then(dish => {        
        var dishingredientsHTML = '<table class="table" id="dishitemtable"><th colspan="3">Ingredients for ' + numberOfGuests + ' people </th>';
          for (var i in dish.extendedIngredients){
             dishingredientsHTML += "<tr><td align='left'>" + dish.extendedIngredients[i].amount*numberOfGuests +
              " " + dish.extendedIngredients[i].unit + " </td><td>" + dish.extendedIngredients[i].name + " </td><td>" +
              "SEK " + 1 * numberOfGuests + "</td></tr>"; //pulls out separate ingredients and adds to table
          };

        dishingredientsHTML += //priset
              '<tfoot>' +
                '<tr><td colspan="2" style="font-weight: bold;">Dish price: </button></td>' +
                '<td>SEK ' + model.getTotalDishPrice(dish.extendedIngredients) + '</td></tr>' +
              '</tfoot>'+
            '</table>';

        this.dishingredients.html(dishingredientsHTML);
          this.dishinfo.html('<h2>' + dish.title + '</h2>' +
            '<div class="container justify-content-center" id="bigimage" style="background-image: url(https://spoonacular.com/recipeImages/'+dish.id+'-556x370)">' +
            '</div>' +
            '<div style="padding: 10%;">' +
              '<h2>Preparation</h2>' +
              '<p>' + dish.instructions + '</p>' +
            '</div>');
        }).catch( error => {
             detailsError.show()
             this.dishinfo.hide()
             this.dishingredients.hide()
             loader.hide()
        });

        };
        this.dishinfo.show()
        this.dishingredients.show()
        loader.hide()
      };
    model.addObserver(this);
  };
