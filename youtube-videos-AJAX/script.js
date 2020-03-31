$(document).ready(function() {
  //input from form 
  // var searchTerm = $("#searchInput").val().trim();
  var searchTerm = "Bill Clinton";
  //input from form 
  // var numberRecords = $("#recordsInput").val().trim();
  var numberRecords = 5;
  //override from input form 
  var beginYear = 1851
  
  // if ($("#beginYearInput").val().trim()) {
  //     beginYear = $("#beginYearInput").val().trim()
  // }; 

  //override from input form 
  var endYear = 2020

  // if ($("#endYearInput").val().trim()) {
  //     endYear = $("#endYearInput").val().trim()
  // };

  // $(document).on("click", "#test", function() {
    function runSearch() {

    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchTerm + "&begin_date=" + beginYear + "0101&end_date=" + endYear + "1231&sort=newest&api-key=d9wLAp3TYiJAnSURQOH9BYGkKKUvwwS1";

    $.ajax({
      url: queryURL,
      method: "GET"
    })
      .then(function(response) {
          console.log(response)
        
          for ( var i = 0; i < numberRecords; i++) {
              var artDiv = $("<div>");
              var header = $("<h3>");
              var author = $("<div>");
              var webURL = $("<div>");
              var aTag   = $("<a>")
              var pubDate = $("<div>");
              var section = $("<div>");
              console.log(i);
              
              header.text("(" + (i+1) + ")" + response.response.docs[i].headline.main);
              section.text("section: " + response.response.docs[i].section_name);
              aTag.attr("href", response.response.docs[i].web_url);
              aTag.text(response.response.docs[i].web_url);
              pubDate.text(response.response.docs[i].pub_date);

              artDiv.append(header);
              artDiv.append(section);
              artDiv.append(pubDate);
              artDiv.append(aTag);
              $("#test").append(artDiv);
          };
      });
  };
  
  runSearch()
});
// });