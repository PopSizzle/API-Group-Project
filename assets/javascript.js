// Declare all variables, including calls to ids
var gamesData;
var recGamesData;
var gamesYT_URL;
var gameBox = $("#gameInfoBox");
var searchButton = $("#searchGames");
var clearButton = $("#clearSearch");
var nameInput = $("#nameInput");
var minPlayersDisplay = $("#minPlayersDisplay");
var minPlayersInput = $("#minPlayersInput");
var maxPlayersInput = $("#maxPlayersInput");
var maxPlayersDisplay = $("#maxPlayersDisplay");
var maxPriceInput = $("#maxPriceInput");
var maxPriceDisplay = $("#maxPriceDisplay");
var mechanicInput = $("#mechanicInput");
var mechanicDisplay = $("#mechanicDisplay");
var categoryInput = $("#categoryInput");
var categoryDisplay = $("#categoryDisplay");
var minPlayers = 0;
var maxPlayers = 100;
var maxPrice = "&lt_msrp=" + 1000;
var categoryID = "";
var mechanicID = "";
var videoType = "Game Review"
var recGameIDs = ["wSsuGhYnVo", "RLlDWHh7hR", "oGVgRSAKwX", "fDn9rQjH9O", "GP7Y2xOUzj", "9iBOPn3lES", "OF145SrX44", "1dWE5BIcOm", "exdy1Z2bSC", "61SwzHG7fB", "D0OHY8b8Oc", "19C9ka2hEx", "fGZawn3ipZ", "Rq3eREYb0e", "sxLwbJHu77", "cb1DcPrnkz", "LTnLSWIcbH", "DMR3bbyxu2", "ZdHlXy4uxe", "1sQP1kNHja"]

// Recommended Game Function
function recommend(){
    // Two different random integers 1-20
    var randIndex1 = Math.floor(Math.random()*20);
    console.log(randIndex1);

    var randIndex2 = Math.floor(Math.random()*20);

    if(randIndex1 === randIndex2){
        if(randIndex2 === 20){
            randIndex2 --;
        }
        else{randIndex2 ++}
    }

    console.log(randIndex2);

    var gameIDs = recGameIDs[randIndex1] + "," + recGameIDs[randIndex2];
    var searchURL = "https://www.boardgameatlas.com/api/search?ids=" + gameIDs + "&client_id=NHfcsxreTb"
    console.log(searchURL);
    // AJAX call for rec Games info
    $.ajax({
        url: searchURL,
        method: "GET"
    }).then(function(response){
        console.log(response);

        recGamesData = response.games;
        console.log(recGamesData);
        var minNumber1 = recGamesData[0].min_players;
        var minNumber2 = recGamesData[1].min_players;
        var maxNumber1 = recGamesData[0].max_players;
        var maxNumber2 = recGamesData[1].max_players;
        var minTime1 = recGamesData[0].min_playtime;
        var minTime2 = recGamesData[1].min_playtime;
        var maxTime1 = recGamesData[0].max_playtime;
        var maxTime2 = recGamesData[1].max_playtime;

        $("#cardImage6").attr("src", recGamesData[0].images.medium);
        $("#cardImage7").attr("src", recGamesData[1].images.medium);
        $("#cardYear6").text(recGamesData[0].year_published);
        $("#cardYear7").text(recGamesData[1].year_published);
        $("#cardTitle6").text(recGamesData[0].name);
        $("#cardTitle7").text(recGamesData[1].name);
        $("#cardInfo6").text("Players: " + minNumber1 + "-" + maxNumber1 + " | Playtime: " + minTime1 + "-" + maxTime1 + "minutes");
        $("#cardInfo7").text("Players: " + minNumber2 + "-" + maxNumber2 + " | Playtime: " + minTime2 + "-" + maxTime2 + "minutes");
        $("#cardDescript6").text(recGamesData[0].description_preview.split(" ").splice(0, 50).join(" "));
        $("#cardDescript7").text(recGamesData[1].description_preview.split(" ").splice(0, 50).join(" "));
        // Recommended Game Youtube Link
        for(var i=0; i<2; i++){
            var recQueryURL = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=" + videoType.trim() + recGamesData[i].name.trim() + "&type=video&key=AIzaSyDZ9OFjnehR5H8D-aolcw85O_ovUUTdCNM"

            console.log(recQueryURL);
            var yt_url = "";

            $.ajax({
                url: queryURL2,
                method: "GET",
                async: false,
                success: function (youtubeResponse) {
                    console.log('youtubeResponse', youtubeResponse);
                    var videoId = youtubeResponse.items[0].id.videoId;
                    yt_url = "https://www.youtube.com/embed/" + videoId;
                }
            })
            
            recGamesData[i].ytURL = yt_url;
            console.log("object : " + recGamesData[i].ytURL);
        }
    })
}

// Function to run when search executes
function searchGames() {
    gamesYT_URL = [];
    event.preventDefault();

    var name = "name=" + nameInput.val().trim();
    var exactName = false;

    if (exactName === true) {
        name = name + "&exact=true";
        console.log(name);
    }
    // Add in other parameters to their variables
    addMinPlayers();
    addMaxPlayers();
    addMaxPrice();
    addMechanic();
    addCategory();
    // Combine all variables into a search URL
    var queryURL = "https://www.boardgameatlas.com/api/search?" + name + minPlayers + maxPlayers + maxPrice + categoryID + mechanicID + "&order_by=popularity&ascending=false&client_id=NHfcsxreTb";
    console.log(queryURL);
    // AJAX call to BGA API to get objects
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        // Empty Display Box
        gameBox.empty();



        // by Cristina:  added the response to global variable so I can access it for the Modal.
        gamesData = response.games;

        for (var i = 0; i < 6; i++) {
            var card = "#card" + i;
            $(card).removeClass("hidden");

            var img = "#cardImage" + i;
            var year = "#cardYear" + i;
            var title = "#cardTitle" + i;
            var info = "#cardInfo" + i;
            var descript = "#cardDescript" + i;

            var minNumber = response.games[i].min_players;
            var maxNumber = response.games[i].max_players;
            var minTime = response.games[i].min_playtime;
            var maxTime = response.games[i].max_playtime;
            var shortDescript = response.games[i].description_preview.split(" ").splice(0, 50).join(" ");

            $(img).attr("src", response.games[i].images.medium);
            $(year).text(response.games[i].year_published);
            $(title).text(response.games[i].name);
            response.games[i]["ytURL"] = "";
            // Youtube Link for recommended Games
            // var queryURL2 = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=" + videoType + response.games[i].name + "&type=video&key=AIzaSyDZ9OFjnehR5H8D-aolcw85O_ovUUTdCNM"

            // console.log(queryURL2);
            // var yt_url = "";

            // $.ajax({
            //     url: queryURL2,
            //     method: "GET",
            //     async: false,
            //     success: function (youtubeResponse) {
            //         console.log('youtubeResponse', youtubeResponse);
            //         var videoId = youtubeResponse.items[0].id.videoId;
            //         yt_url = "https://www.youtube.com/embed/" + videoId;
            //     }
            // })
            // response.games[i].ytURL = yt_url;
            // console.log("object : " + response.games[i].ytURL);



            // $(info).text("Players: " + minNumber + "-" + maxNumber + " | Playtime: " + minTime + "-" + maxTime + "minutes");
            // $(descript).text(shortDescript);
        }

        console.log("1st response gamesData:  ", gamesData);
        console.log("array of urls" + gamesYT_URL);
    })
}
// Function to add minimum player parameter
function addMinPlayers() {
    var number = parseInt(minPlayersInput.val().trim());
    minPlayers = "&gt_min_players=" + (number - 1);
    minPlayersDisplay.text("Minimum Players: " + number);
    console.log(minPlayers);
}
// Function to add maximum player parameter
function addMaxPlayers() {
    var number = parseInt(maxPlayersInput.val().trim());
    maxPlayers = "&lt_max_players=" + (number + 1);
    maxPlayersDisplay.text("Maximum Players: " + number)
    console.log(maxPlayers);
}
// function to add maximum MSRP parameter
function addMaxPrice() {
    if ($("#maxPriceInput").val()) {
        var number = parseInt(maxPriceInput.val().trim());
        maxPrice = "&lt_msrp=" + (number + 0.01);
        maxPriceDisplay.text("Maximum Price (MSRP): $" + number);
    }
    console.log(maxPrice);
}
// Function to add mechanic to the screen ***NEEDS UPDATING TO LINK TO MECHANICS IDs***
function addMechanic() {
    var mechanic = mechanicInput.find('option:selected').attr('data-id');
    if (mechanic === "none") {
        mechanicID = "";
        console.log(mechanicID);
    }
    else {
        mechanicID = "&mechanics=" + mechanic;
        mechanicDisplay.text("Mechanic: " + mechanic);
        console.log(mechanicID);
    }
}
// Function to add category to the screen *** NEEDS UPDATING TO LINK TO CATEGORY IDs***
function addCategory() {
    var category = categoryInput.find('option:selected').attr('data-id');
    if (category === "none") {
        categoryID = "";
    }
    else {
        categoryID = "&categories=" + category;
        categoryDisplay.text("Category: " + category);
        console.log(categoryID);
    }
}
// Function to check if mechanics match
function checkMechanics(game, mechID) {
    var array = game.mechanics;
    for (var j = 0; j < array.length; j++) {
        if (array[j].id === mechID) {
            return true;
        }
    }
}
// Function to check if categories match
function checkCategory(game, catID) {
    var array = game.categories;
    for (var i = 0; i < array.length; i++) {
        if (array[i].id === catID) {
            return true;
        }
    }
}
// Function to clear search box and display box
function clearSearch() {
    event.preventDefault();

    gameBox.empty();
    $("#nameInput").val("");
    $("#minPlayersInput").val("");
    $("#maxPlayersInput").val("");
    $("#maxPriceInput").val("");
    $("#mechanicInput").val("0");
    $("#categoryInput").val("0");
    console.log("clear");

    for (var i = 0; i < 6; i++) {

        var card = $("#card" + i);
        console.log(card);
        card.addClass("hidden");
    }
}
// Function to search Youtube
function youtubeResponse(selectedGame) {
    var queryURL = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=" + videoType + selectedGame + "&type=video&key=AIzaSyAjs8I4xGPzoBBcuCk4afKvx-IRoVaQX0A"

    console.log(queryURL);
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {

        var videoId = response.items[0].id.videoId;

        var yt_url = "https://www.youtube.com/embed/" + videoId;
        console.log("url inside call: " + yt_url);
        return yt_url;
    })
}

$(document).ready(recommend());

searchButton.on("click", searchGames);

clearButton.on("click", clearSearch);
