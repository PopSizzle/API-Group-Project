
var minPlayers = "";
var maxPlayers = "";
var maxPrice = "";

function searchGames(){
    event.preventDefault();

    
    var name = "name=" + $("#nameInput").val().trim();
    var exactName = false;

    if(exactName === true){
        name = name + "&exact=true";
        console.log(name);
    }
    
    var queryURL = "https://www.boardgameatlas.com/api/search?" + name + minPlayers + maxPlayers + maxPrice + "&client_id=NHfcsxreTb";
    console.log(queryURL);
    
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response){
        $("#gameInfoBox").empty();
        console.log(response);
        for(var i=0; i<3; i++){
            var header = $("<h3>");
            header.text(response.games[i].name);
            var img = $("<img>");
            img.attr("src", response.games[i].images.small)
            $("#gameInfoBox").append(header, img);
        }
    })
}

$("#addName").on("click", searchGames);

$("#addMinPlayers").on("click", function(){
    event.preventDefault();
    var number = parseInt($("#minPlayersInput").val().trim());
    minPlayers = "&gt_min_players=" + (number - 1);
    $("#minPlayersDisplay").text("Minimum Players: " + number);
    console.log(minPlayers);
});

$("#addMaxPlayers").on("click", function(){
    event.preventDefault();
    var number = parseInt($("#maxPlayersInput").val().trim());
    maxPlayers = "&lt_max_players=" + (number + 1);
    $("#maxPlayersDisplay").text("Maximum Players: " + number)
    console.log(maxPlayers);
})

$("#addMaxPrice").on("click", function(){
    event.preventDefault();
    var number = parseInt($("#maxPriceInput").val().trim());
    maxPrice = "&lt_msrp=" + (number + 0.01);
    $("#maxPriceDisplay").text("Maximum Price (MSRP): $" + number);
    console.log(maxPrice);
})