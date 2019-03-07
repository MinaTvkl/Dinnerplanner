//DinnerModel Object constructor
var DinnerModel = function() {
  var numberOfGuests = 1; //store the number of numberOfGuests
  var dishesAdded = []; // store the dishes dishesadded
  var tempID = 0;
  observers = []; //ebpty list to add observers to //ändrade från var

  this.addObserver = function(observer){
    observers.push(observer); //adds new observers
  };

  this.notifyObservers = function(args){
    console.log("DinnerModel: this.notifyObservers");
    for(var i = 0; i < observers.length; i++){
      observers[i].update(args);
    };
  };

  this.setTempDishId = function(id){
    tempID = id;
    this.notifyObservers("tempID");
  };

  this.getTempDishId = function(){
    return tempID;
  };

	this.setNumberOfGuests = function(num) {
    if (num >= 1){
      if(num != numberOfGuests){
        numberOfGuests = num;
        this.notifyObservers("numberOfGuests");
      };
    };
	};

	this.getNumberOfGuests = function() {
    return numberOfGuests;
	};

	//Returns the dish that is on the menu for selected type
	this.getSelectedDish = function(type) {
    for (var i = 0; i < dishesAdded.length; i++) {
			if(dishesAdded[i].type == type)
				return dishesAdded[i];
    }
	};

	//Returns all the dishes on the menu.
	this.getFullMenu = function() {
    return dishesAdded;

	};

	//Returns all ingredients for all the dishes on the menu.
	this.getAllIngredients = function() {
    var  ingredientList = [];
    for (var i = 0; i < dishesAdded.length; i++){
      for (var j = 0; j < dishesAdded[i].extendedIngredients.length; j++){
        ingredientList.push(dishesAdded[i].extendedIngredients[j]);
      }
    }
    return ingredientList;
	};

	//Returns the total price of the menu (all the ingredients multiplied by number of guests).
	this.getTotalMenuPrice = function() {
    var ingredients = this.getAllIngredients();
    var price = 0;
    for(var i = 0; i < ingredients.length; i++){
			price += 1;//ingredients[i].price;
		}
    totalPrice = this.getNumberOfGuests()*price;
    return totalPrice;
	};

	//Adds the passed dish to the menu. If the dish of that type already exists on the menu
	//it is removed from the menu and the new one added.
  this.addDishToMenu = function(id) {
    this.getDish(id).then(dish => {
      dishesAdded.push(dish); //adds dish with that id to array
      this.notifyObservers("addDish");
    }).catch( error => {
         console.log(error)
    });

	 };

	//Removes dish from menu
	this.removeDishFromMenu = function(id) {
    for (var i = 0; i < dishesAdded.length; i++){
      if (dishesAdded[i].id === id){
        dishesAdded.splice(i, 1); //tar bort på ett visst index
      }
    }
	};

	//function that returns all dishes of specific type (i.e. "starter", "main dish" or "dessert")
	//you can use the filter argument to filter out the dish by title or ingredient (use for search)
	//if you don't pass any filter all the dishes will be returned http://sunset.nada.kth.se:8080/iprog/group/81/recpies/search
	this.getAllDishes = function (type,filter) {

    if(filter){
      var getalldisheshtml = 'http://sunset.nada.kth.se:8080/iprog/group/78/recipes/search?&number=20&type='+type+'&query='+filter
    }
    else {
      var getalldisheshtml = 'http://sunset.nada.kth.se:8080/iprog/group/78/recipes/search?&number=20&type='+type
    }
      return fetch(getalldisheshtml,{
                headers:{
                    'X-Mashape-Key': key
                }
          }).then(response => response.json())
            .then(data => data.results)
  };

	//function that returns a dish of specific ID
	this.getDish = function (id) {
    return fetch('http://sunset.nada.kth.se:8080/iprog/group/78/recipes/'+id+'/information',{
              headers:{
                  'X-Mashape-Key': key
              }
        }).then(response => response.json())
          .then(data => data)

	};

  this.getTotalDishPrice = function(ingredients){ //gets price for one dish
     var price = 0
     for( var i in ingredients){
       price += 1;
     }
     return price * this.getNumberOfGuests();
   };

};
