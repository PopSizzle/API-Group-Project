  //input from form 
  // var recommendedGame = $("#exampleFormControlInput1").val().trim();
  var selectedGame = "Catan";
  //input from form 
  // var maxResults = $("#exampleFormControlSelect1").val().trim();
  var maxResults = 1;

  var queryURL = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=" + maxResults + "&q=" + selectedGame + "&type=video&key=AIzaSyAjs8I4xGPzoBBcuCk4afKvx-IRoVaQX0A"
  
  function youtubeResponse(){
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response){
        console.log(response);

        for ( var i = 0; i < maxResults; i++) {
          var videoDiv = $("<div>");
          var header = $("<h3>");
          var videoThumbnail = $('<iframe width="560" height="315" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>')

          console.log("videoDiv " + (i+1));

          videoDiv.append(header);
          videoDiv.append(videoThumbnail);
          $(".video-results").append(videoDiv);

          var videoTitle = response.items[i].snippet.title;
          console.log(videoTitle);

          var videoId = response.items[i].id.videoId;
          console.log(videoId);

          var videoDescription = response.items[i].snippet.description
          console.log(videoDescription);

          videoDiv.attr("id","video" + (i+1));
          header.text("(" + (i+1) + ")");
          videoThumbnail.attr("src","https://www.youtube.com/embed/" + videoId)
          
        };  
    });
  };
    
  youtubeResponse();