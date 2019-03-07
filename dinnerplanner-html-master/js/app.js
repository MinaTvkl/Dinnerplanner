$(function() {
	//We instantiate our model
	var model = new DinnerModel();

	$('#welcomeView').show();
	$('#sidebarView').hide();
	$('#dishSearchView').hide();
	$('#dinnerOverviewView').hide();
	$('#printPageView').hide();
	$('#dishDetailsView').hide();
	$('#headView').hide();
	$('#itemView').hide();


	var $welcomeView = $("#welcomeView");
	var $sidebarView = $("#sidebarView");
	var $dishSearchView = $("#dishSearchView");
	var $dinnerOverviewView = $("#dinnerOverviewView");
	var $printPageView = $("#printPageView");
	var $dishDetailsView = $("#dishDetailsView");
	var $headView = $("#headView");

	// And create the instance of view
	var dinnerOverviewView = new DinnerOverviewView($("#dinnerOverviewView"), model);
	var printPageView = new PrintPageView($("#printPageView"), model);

	var sidebarView = new SidebarView($("#sidebarView"), model);
  var sidebarController= new SidebarController(sidebarView,model);

	var dishDetailsView = new DishDetailsView($("#dishDetailsView"), model);
  var dishDetailsController = new DishDetailsController(dishDetailsView, model);

	var headView = new HeadView($("#headView"), model);
	var welcomeView = new WelcomeView($("#welcomeView"));

	var dishSearchView = new DishSearchView($("#dishSearchView"), model); //onormalt namn
	var dishSearchController = new DishSearchController(dishSearchView, model);

	$("#createDinnerButton").click(function(){
		$welcomeView.hide();
		$sidebarView.show();
		$dishSearchView.show();
	});

	$("#backToSearchButton").click(function(){
		$dishDetailsView.hide();
		$dishSearchView.show();
	});

	$("#confirmDinnerButton").click(function(){ //needs to only work when there are dishes added
		$dishDetailsView.hide();
		$sidebarView.hide();
		$dishSearchView.hide();
		$dinnerOverviewView.show();
		$headView.show();
	});

	$("#goBackAndEditDinnerButton").click(function(){
		$sidebarView.show();
		$dishSearchView.show();
		$dinnerOverviewView.hide();
		$headView.hide();
		$printPageView.hide();
	});
	$("#printFullRecipeButton").click(function(){
		$printPageView.show();
		$dinnerOverviewView.hide();
	});


});
