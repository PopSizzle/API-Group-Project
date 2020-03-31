
var name = $("#gameName").val();
var queryURL = "https://www.boardgameatlas.com/api/search?" + name + "&client_id=NHfcsxreTb";

function searchGames(){
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response){
        console.log(response);
    })
}

$(document).on("click", ".submit", searchGames);