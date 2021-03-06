$(document).ready(function(){

	function genGame(){
		
		let randoNumber = $('<section>')
			.attr("id","random-number")
			.attr("class", "number col-md-6")
			.append("<div class='panel-heading'><h3> Crystal Points </h3></div><div class='panel-body'><p>00</p></div>");
		
		let userGuess = $('<section>')
			.attr("id", "user-number")
			.attr("class","number col-md-6")
			.append("<div class='panel-heading'><h3> Your Points </h3></div><div class='panel-body'><p>00</p></div>");
	
		let crystalOne = $('<button>')
			.attr("id","crystal-one")
			.attr("class","crystal col-md-2 thumbnail")
			.append("<div class='panel-body'> <img id='crystal-img-one' class='crystalimg' src='https://www.crystalvaults.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/1/6/161017.jpg'></div><div id='crystal-caption-one' class='caption'><h6>Rutilated Quartz Point</h6></div>");
	
		let crystalTwo = $('<button>')
			.attr("id","crystal-two")
			.attr("class","crystal col-md-2 thumbnail")
			.append("<div class='panel-body'> <img id='crystal-img-two' class='crystalimg' src='https://www.crystalvaults.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/1/6/161017.jpg'></div><div id='crystal-caption-two' class='caption'><h6>Rutilated Quartz Point</h6></div>");
	
		let crystalThree = $('<button>')
			.attr("id","crystal-three")
			.attr("class","crystal col-md-2 thumbnail")
			.append("<div class='panel-body'> <img id='crystal-img-three' class='crystalimg' src='https://www.crystalvaults.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/1/6/161017.jpg'></div><div id='crystal-caption-three' class='caption'><h6>Rutilated Quartz Point</h6></div>");
	
		let crystalFour = $('<button>')
			.attr("id","crystal-four")
			.attr("class","crystal col-md-2 thumbnail")
			.append("<div class='panel-body'> <img id='crystal-img-four' class='crystalimg' src='https://www.crystalvaults.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/1/6/161017.jpg'></div><div id='crystal-caption-four' class='caption'><h6>Rutilated Quartz Point</h6></div>");
	
	
	
		let game = $('<div>')
						.height(600)
						.css("background-image", "url(images/background.png)")
						.attr("class", "playgames")
						.append(randoNumber)
						.append(crystalOne)
						.append(crystalTwo)
						.append(userGuess)
						.append(crystalThree)
						.append(crystalFour);
	
		$("#crystalgame").append(game);
						
	
	};

	var randoNumber;
	var userNumber;
	var upperLimit = 100;
	var lowerLimit = 20;
	var randoCrystalOne;
	var randoCrystalTwo;
	var randoCrystalThree;
	var randoCrystalFour;
	var addCrystalValue;
	var totalRounds;
	var totalWins=0;
	var totalLosses=0;
	var crystalPositions = [randoCrystalOne, randoCrystalTwo, randoCrystalThree, randoCrystalFour];
	var randoCrystalNames = [];
	var randoCrystalImgs = [];
	var randoCrystalLinks = [];

	var crystalNames = [
		"Chalcedony Rose",
		"Azurite Specimen",
		"Polished Chrysoprase Crystal",
		"Blue Kyanite Crystal",
		"Amazonite Crystal",
		"Peacock Ore Crystal",
		"Golden Apatite Crystal",
		"Morrisonite Jasper Rough Crystal",
		"Cats Eye Moonstone Cabochon",
		"Aqua Aura Crystal Pair",
		"Dendritic Agate Rough Crystal",
		"Ruby Crystal Rough Stone",
		"Shattuckite with Chrysocolla, Malachite, and Diaptase",
		"Shungite",
		"Rhondite",
		"Sugilite",
		"Vanadinite Cluster",
		"Sodalite",
	]
	var crystalImgs= [
		"https://www.crystalvaults.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/1/7/171130.jpg",
		"https://www.crystalvaults.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/1/5/150983.jpg",
		"https://www.crystalvaults.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/1/7/171596.jpg",
		"https://www.crystalvaults.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/1/5/152552.jpg",
		"https://www.crystalvaults.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/1/6/160519.jpg",
		"https://www.crystalvaults.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/1/7/171842.jpg",
		"https://www.crystalvaults.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/1/7/173246.jpg",
		"https://www.crystalvaults.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/1/7/172137.jpg",
		"https://www.crystalvaults.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/1/3/130320a.jpg",
		"https://www.crystalvaults.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/1/5/151257_2.jpg",
		"https://www.crystalvaults.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/1/7/172761.jpg",
		"https://www.crystalvaults.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/9/2/921602.jpg",
		"https://www.crystalvaults.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/1/7/170963.jpg",
		"https://www.crystalvaults.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/1/7/172731.jpg",
		"https://www.crystalvaults.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/1/7/170509.jpg",
		"https://www.crystalvaults.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/1/7/172047.jpg",
		"https://www.crystalvaults.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/1/7/173627.jpg",
		"https://www.crystalvaults.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/1/7/170340.jpg",
	]

	var crystalURLs=[
		"https://www.crystalvaults.com/171130",
		"https://www.crystalvaults.com/150983",
		"https://www.crystalvaults.com/171596",
		"https://www.crystalvaults.com/152552",
		"https://www.crystalvaults.com/160519",
		"https://www.crystalvaults.com/171842",
		"https://www.crystalvaults.com/173246",
		"https://www.crystalvaults.com/172137",
		"https://www.crystalvaults.com/130320",
		"https://www.crystalvaults.com/151257",
		"https://www.crystalvaults.com/172761",
		"https://www.crystalvaults.com/921602",
		"https://www.crystalvaults.com/170963",
		"https://www.crystalvaults.com/172731",
		"https://www.crystalvaults.com/170509",
		"https://www.crystalvaults.com/172047",
		"https://www.crystalvaults.com/173627",
		"https://www.crystalvaults.com/170340",
	]
	//what all of the buttons

	//functions for the buttons

	function randoGen(){
		randoNumber = Math.floor((Math.random()*upperLimit) + lowerLimit);
		console.log(randoNumber);
		$("#random-number .panel-body").text(randoNumber);
		$("#wins .panel-body").text(totalWins);
		$("#losses .panel-body").text(totalLosses);

	};

	function changeCrystalImg(){
		for (var i = 0; i < 4; i++){
			val = Math.floor(Math.random()*crystalNames.length);
			console.log("Random Crystal : " + val);
			console.log("crystal Names length :" + crystalNames.length);
			randoCrystalNames.push(crystalNames[val]);
			randoCrystalImgs.push(crystalImgs[val]);
			randoCrystalLinks.push(crystalURLs[val]);
		}
		console.log(randoCrystalNames);
		console.log(randoCrystalImgs);
	};

	//changeCrystalImg();

	//no random value can be more than a 20 of the upper limit because that makes the game more fun
	function assignCrystals(){
		changeCrystalImg();
		randoCrystalOne = Math.floor((Math.random()*(upperLimit/5)) + 1);
		console.log(randoCrystalOne);

		$("#crystal-one").val(randoCrystalOne);
		$("#crystal-img-one").attr('src', randoCrystalImgs[0]);
		$("#crystal-caption-one").text(randoCrystalNames[0]);

		randoCrystalTwo = Math.floor((Math.random()*(upperLimit/5)) + 1);
		console.log(randoCrystalTwo);

		$("#crystal-two").val(randoCrystalTwo);
		$("#crystal-img-two").attr('src', randoCrystalImgs[1]);
		$("#crystal-caption-two").text(randoCrystalNames[1]);

		randoCrystalThree = Math.floor((Math.random()*(upperLimit/5)) + 1);
		console.log(randoCrystalThree);

		$("#crystal-three").val(randoCrystalThree);
		$("#crystal-img-three").attr('src', randoCrystalImgs[2]);
		$("#crystal-caption-three").text(randoCrystalNames[2]);

		randoCrystalFour = Math.floor((Math.random()*(upperLimit/5)) + 1);
		console.log(randoCrystalFour);				

		$("#crystal-four").val(randoCrystalFour);
		$("#crystal-img-four").attr('src', randoCrystalImgs[3]);
		$("#crystal-caption-four").text(randoCrystalNames[3]);
	};

	//function from the on click that will add the value of the crystal to the base value
	function addCrystal(){
		var addCrystalValue = 0;
		var addCrystalValue = $(this).val();//we want this to be a local variable that will only exist in this loop.
		userNumber = parseInt(userNumber) + parseInt(addCrystalValue);
		console.log(userNumber);
		console.log($(".crystal").val());
		console.log(addCrystalValue);
		$("#user-number .panel-body").text(userNumber);

		if (userNumber < randoNumber){
			return;
		}
		else if ( userNumber == randoNumber){
			alert("Winner Winner Chicken Dinner!");
			totalWins = totalWins +1;
			totalRounds = totalRounds +1;
			startGame();
		}
		else{
			alert("You've gone over!");
			totalRounds = totalRounds +1;
			totalLosses = totalLosses +1;
			console.log(totalLosses);
			startGame();
		}
	};

	
	function startGame(){
		randoNumber=00;
		userNumber=00;
		randoCrystalNames = [];
		randoCrystalImgs = [];
		randoCrystalLinks = [];
		console.log(userNumber);
		$("#random-number .panel-body, #user-number .panel-body, #crystalgame").empty();
		
		genGame();
		randoGen();
		assignCrystals();
		changeCrystalImg();
		console.log(randoCrystalNames);
	};

	
	startGame();

	//buttons
	$(document).on("click", ".crystal", addCrystal);


}); //end of document.ready 

